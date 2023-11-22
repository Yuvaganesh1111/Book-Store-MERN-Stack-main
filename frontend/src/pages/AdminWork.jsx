import React, { useState } from 'react'
import BooksTable from '../components/home/BooksTable'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import NavBar from '../components/NavBar';


function AdminWork() {
    const [book,setBook]=useState([]);
    axios.get('http://localhost:5555/books',{
        headers:{ Authorization:localStorage.getItem('token')}
    })
    .then((res)=>setBook(res.data.data))
    .catch((err)=>{console.log("error occured")})
  return (
    <>
    <NavBar/>
    <div className='p-4 mt-10'>
         <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Add Books</h1>
        <Link to='/books/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
        <BooksTable books={book}/></div>
        </>
  )
}

export default AdminWork