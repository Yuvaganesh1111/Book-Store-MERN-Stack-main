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

const App = () => {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<SignIn />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    
    
    <Routes>
      
      
    
      <Route path='/home' element={<Home />} />
      <Route path='/dashboard' element={<DashBoard />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      
    </Routes>
    
    
    
    </>
  );
};

export default App;
