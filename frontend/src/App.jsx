import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBooks';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';
import NavBar from './components/NavBar';
import "./style/style.css"
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import DashBoard from './pages/DashBoard';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import { BrowserRouter } from 'react-router-dom';
import Cart from './pages/Cart';
import Books from './pages/Books';
import AdminWork from './pages/AdminWork';


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    
    
    <Routes>
      
      
    
      <Route path='/home' element={<Home />} />
      <Route path='/books' element={<Books />} />


      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/success' element={<Success />} />
      <Route path='/cancel' element={<Cancel />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/admin' element={<AdminWork />} />



      
    </Routes>
    </BrowserRouter>
    
    
    
    </>
  );
};

export default App;
