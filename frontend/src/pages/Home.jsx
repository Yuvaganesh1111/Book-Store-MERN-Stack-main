import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SwipeCard from "../components/SwipeCard";
import NewBooks from "../components/NewBooks";
import FavoritBook from "../components/FavoritBook";
import Promobook from "../components/Promobook";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    axios
      .get("http://localhost:5555/books", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        navigate("/");
      });
  }, []);

  return (
    <>
      <NavBar />

      <div className="px-4 lg:px-24 bg-teal flex items-center w-full ">
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        

          <div className=" md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">
              Buy and Sell Your Books <span className="text-darkblue">for the Best Price</span>
            </h2>{" "}
            <p className="md:w-4/49"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              perspiciatis repellat omnis, officia dolore deleniti excepturi
              sapiente error incidunt odit optio? Ipsum nulla deserunt quia
              enim. Corporis labore distinctio alias?
            </p>
            <div>
              <input type="search" name="search" id="search" placeholder="Search a Book" className="py-2 px-2 rounded-s-sm outline-none"></input>
              <button className="bg-darkblue px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration">
                Search
              </button>
            </div>
          </div>
          {/* right side */}

          <div className="ml-66"><SwipeCard/></div>
        </div>
      </div>
      <NewBooks books={books}/>
      <FavoritBook/>
      <Promobook/>
      <Footer />
    </>
  );
};

export default Home;
