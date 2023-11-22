import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import BookModal from './BookModal';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import  {addToCart}  from '../../CartSlice';
import { useSelector } from 'react-redux';
import {makePayment} from '../../makePayment';

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch=useDispatch();
  const {cart}=useSelector(state=>state.cart);

   

  const addCart=()=>{
   dispatch(addToCart(book));
    console.log(cart);
  }
  


  return (
    <div className='border-2 border-gray-500 bg-white rounded-lg px-4 py-2 m-4  hover:shadow-xl'>
      <img
        style={{ width: "200px", height: "300px",margin:"auto" }}
        src={book.imgurl}
        alt={book.title}
      />
      

      
      <div className='flex justify-start items-center gap-x-2 pt-4 px-5'>
        <PiBookOpenTextLight className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.title}</h2>
      </div>
      <div className='flex justify-start items-center gap-x-2 px-5'>
        <BiUserCircle className='text-red-300 text-2xl' />
        <h2 className='my-1'>{book.author}</h2>
      </div>
      <h2 className=' top-5 right-8   py-1  font-bold text-lg rounded-lg px-6  w-26'>
      Rs : {book.price}
      </h2>

      <div className='flex justify-between items-center gap-x-2 mt-2 p-4'>
        <button className='bg-darkred w-20 rounded-lg text-white px-4 py-1' onClick={()=>{makePayment(book)}}>
          Buy
        </button>
        <button className='bg-yellow w-20 rounded-lg text-white py-1' onClick={addCart}>Add Cart</button>
        <BiShow
          className='text-3xl text-blue-800 hover:text-black cursor-pointer'
          onClick={() => setShowModal(true)}
        />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
