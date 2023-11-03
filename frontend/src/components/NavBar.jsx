import React, { useState } from 'react'
import {BsFillBookFill} from 'react-icons/bs'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {TfiMenu} from 'react-icons/tfi'
import {Collapse,initTE} from "tw-elements";
import axios from 'axios';

function NavBar() {
  const[isMobile,setMob]=useState(false);
  const handleLogout=()=>{
    localStorage.removeItem("token");
    console.log("token deleted");
  }
  
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

      <li><NavLink to='/dashboard' className='a'>DashBoard</NavLink></li>
      
      <li><NavLink to='/' className='a'><button onClick={handleLogout}>Logout</button></NavLink></li>

    </ul>
  
</nav>
<Outlet/>
</>


  )
}

export default NavBar