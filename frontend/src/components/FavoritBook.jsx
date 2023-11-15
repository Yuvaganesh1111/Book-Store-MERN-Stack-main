import React from "react";
import favoritbook from "../images/bookcardimage/favoritebook.jpg";
import { Link } from "react-router-dom";

function FavoritBook() {
  return (
    <div className="px-4 lg: px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      {" "}
      <div className="md:w-1/2">
        <img src={favoritbook} alt="" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5x1 font-bold my-5 md:w-3/4 leading-snug">
          Find Your Favorite <span className="text-darkblue">Book Here!</span>
        </h2>

        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et nam
          necessitatibus blanditiis cumque nesciunt facere accusamus? Pariatur,
          a neque. Exercitationem, tempora sunt? Deserunt consectetur explicabo
          architecto, inventore sequi harum!
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Download</p>
          </div>
        </div>

        <Link to="/books" className='mt-8 block'>
          <button className="bg-darkblue text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default FavoritBook;
