import React, { useState,useEffect } from 'react'
import {BsFillBookFill} from 'react-icons/bs'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {TfiMenu} from 'react-icons/tfi'
import {Collapse,initTE} from "tw-elements";
import axios from 'axios';
import { getCartTotal } from '../CartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function NavBar() {
  const[isMobile,setMob]=useState(false);
  const dispatch=useDispatch();
  const handleLogout=()=>{
    localStorage.removeItem("token");
    console.log("token deleted");
  }
  useEffect(() => {
    dispatch(getCartTotal());
  });
  const { totalQuantity } = useSelector((state) => state.cart);
  
  return (
    <>
    <nav className='navbar'>
      
  <div className=''>
    <NavLink to='/home' className='logo'>
      {/* <BsFillBookFill className='icon' /> */}
      <span className='icon'>Book Store</span>
    </NavLink>
    </div>
    <input type='checkbox' id='check'></input>
    <label for='check' className='checkbtn'>
      <i className='fa fa-bars'></i>
      </label>
    
    {/* <div className=''>
      <button type='button'>
        <TfiMenu className='' />
      </button>
    </div> */}

    <ul className=''>
      <li><NavLink to='/home' className='a'>Home</NavLink></li>
      <li><NavLink to='/books' className='a'>Books</NavLink></li>
      <li><NavLink to='/admin' className='a'>admin</NavLink></li>


      
      <li><NavLink to='/dashboard' className='a'>DashBoard</NavLink></li>
      <li ><NavLink to='/cart' className='a' style={{position:"relative" }}>My Cart<span className='cartno'>{totalQuantity}</span></NavLink></li>
      
      <li><NavLink to='/' className='a'><button onClick={handleLogout}>Logout</button></NavLink></li>

    </ul>
  
</nav>
<Outlet/>
</>


  )
}

export default NavBar