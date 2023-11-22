import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import { Link,useNavigate } from 'react-router-dom';
import BooksCard from '../components/home/BooksCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
function Books() {
    const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  useEffect(() => {
    setLoading(true);
    
    axios
      .get('http://localhost:5555/books',{
        headers:{
          'authorization':localStorage.getItem("token")
        }
      })
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        navigate('/')
      });
  }, []);

  return (
    <>
    <NavBar/>
    <div className='p-4 mt-10'>
    <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Books List</h1>

      </div>
      <BooksCard books={books} />
      </div>
      <Footer/>
    </>
  )
}

export default Books