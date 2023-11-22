import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import loginRoute from './routes/loginRoute.js';
import user from './routes/user.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import payment from './routes/payment.js';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// Middleware for parsing request body
app.use(express.json());
//app.use(express.static('uploads'));
// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:5555',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack yuva project');
});

app.use('/books', booksRoute);
app.use('/sign',loginRoute);
app.use('/sign',user);
app.use('/do',payment);





mongoose
  .connect(mongoDBURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

