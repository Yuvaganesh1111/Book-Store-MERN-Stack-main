import express from 'express';
import { Book } from '../models/bookModel.js';
import verify from '../middleware/verify.js';
import multer from 'multer';
import fs from 'fs'
import path from 'path'

const __dirname = path.resolve();
console.log("dir name " + __dirname);

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // Get the file extension
    cb(null, file.originalname ); // Add a timestamp and extension to the filename
  }
});
const upload = multer({ storage: storage });

// Route for Saving a new Book
router.post('/', upload.single('img'), async (request, response) => {
  try {
    if (!request.body.title || !request.body.author ||  !request.body.price || !request.body.publishYear) {
      return response.status(400).send("Please enter all the required data: title, author, and publish year.");
    }
    console.log(request.file);
    if (!request.file) {
      return response.status(400).send("Please upload an image.");
    }

    const imageFilePath = path.join(__dirname, 'uploads', request.file.originalname);

    const newBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      price: request.body.price,
      image:request.file.originalname
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All Books from database
router.get('/',verify, async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Book from database by id
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const book = await Book.findById(id);

    return response.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Update a Book
router.put('/:id',upload.single('img'), async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.price ||
      !request.body.publishYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publishYear',
      });
    }
    if (!request.file) {
      return response.status(400).send("Please upload an image.");
    }

    const { id } = request.params;
    const updateBook = {
      title: request.body.title,
      author: request.body.author,
      publishYear: request.body.publishYear,
      price: request.body.price,
      image:request.file.originalname
    };

    const result = await Book.findByIdAndUpdate(id, updateBook);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a book
router.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Book not found' });
    }

    return response.status(200).send({ message: 'Book deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
