import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../style/responsiveswipe.css'

// import required modules
import { Pagination } from 'swiper/modules';
import {makePayment} from '../makePayment'

import { addToCart, getCartTotal } from '../CartSlice';
import { useDispatch } from 'react-redux';

function NewBooks({books}) {
  const dispatch=useDispatch();
  
    
  return (
    <div className='m-7'>
    <h1 style={{fontSize:"40px",textAlign:"center",fontWeight:"bold",padding:"5px"}}>Best Seller</h1>
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      
      {books.map((book)=>(
        
        <SwiperSlide id={book._id} >
        <div key={book._id} className='mb-4' >
            <img
        style={{ width: "183x", height: "277px" }}
        src={`http://localhost:5555/${book.image}`}
        alt={book.title}
      />
      <p className='box-border h-16  '>{book.title}</p>
      <div className='flex justify-between items-center gap-x-2  p-4'>
      <button className='bg-darkred w-20 rounded-lg text-white px-4 py-1' onClick={()=>{makePayment(book)}}>
          Buy
        </button>
        <button className='bg-yellow w-20 rounded-lg text-white py-1' onClick={()=>{dispatch(addToCart(book))}}>Add Cart</button>
      </div>
      </div>
      </SwiperSlide>
      
      ))}
    </Swiper>
  </div>
  )
}

export default NewBooks