import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { makePayment } from "../makePayment";
import { addToCart } from "../CartSlice";
import { useDispatch } from "react-redux";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-4xl my-4 mx-4">{book.title}</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex bookdetail">
          <div>
            <img
              className="mr-5 mt-5 w-96 book_image_detail "
              src={book.imgurl}
              alt={book.title}
            />
          </div>
          <div  className="flex flex-col border-2 border-sky-400 rounded-xl  p-4 m-5 mr-5">
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Title:</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Author:</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Publish Year:</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">Create Time:</span>
              <span>{new Date(book.createdAt).toString()}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-gray-500">
                Last Update Time:
              </span>
              <span>{new Date(book.updatedAt).toString()}</span>
            </div>
            <div className="my-4 flex">
              <span className="text-xl mr-4 text-gray-500">Description:</span>
              <span >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo voluptatem nemo neque ad quas perferendis sequi,
                nostrum molestiae, architecto sint veniam molestias ipsum est
                pariatur repellat cum laudantium aspernatur? Non pariatur aut
                excepturi quos, nesciunt veritatis? Aliquid distinctio odit
                animi incidunt quis accusantium officiis, voluptatibus commodi
                quibusdam quasi voluptatum doloremque laborum fugiat. Officia
                numquam facere repellat error voluptatum, corrupti adipisci,
                
                
                
              </span>
            </div>
            <div className="my-4 flex">
              <button
                className="w-40 m-4 text-center bg-red p-3 rounded"
                onClick={() => {
                  makePayment(book);
                }}
              >
                BUY
              </button>
              <button
                className="w-40 m-4 text-center bg-yellow p-3  rounded"
                onClick={() => {
                  dispatch(addToCart(book));
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
