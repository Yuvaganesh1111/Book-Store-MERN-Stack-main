import React,{useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack';
import axios from 'axios';
function SignIn() {
    const[emailorphno,setUser]=useState('');
    const[password,setPassword]=useState('');
    const { enqueueSnackbar } = useSnackbar();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        


        
        const data = {
          emailorphno,
          password,
        };
        console.log("handle submit")
        axios
          .post('http://localhost:5555/sign/in', data)
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("token","Bearer "+res.data.token);
            enqueueSnackbar('SignUp Success', { variant: 'success' });
            navigate('/home');
          })
          .catch((error) => {
            // alert('An error happened. Please Chack console');
            localStorage.removeItem("token")
            enqueueSnackbar('Give Correct Detail', { variant: 'error' });
            console.log(error);
          });
        
      };
  return (
    <div className='signbody'>
    <nav className='sign-logo'>
        <h1>Book store</h1>
    </nav>
    <div className='form-warpper'>
        <h2>Sign In</h2>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <input type='text' onChange={(e)=>{setUser(e.target.value); console.log(email)}} required></input>
                <label htmlFor="">Email or Ph Number</label>
            </div>
            <div className='form-control'>
                <input type='password' onChange={(e)=>setPassword(e.target.value)} required></input>
                <label htmlFor="">Password</label>
            </div>
            <button  className='signbtn' >Sign In</button>
            <div className="form-help">
                <div className="remember-me">
                    <input type="checkbox" id='remember-me' />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
            </div>
        </form>
        <p className='signup'>New to BookShop ?  <NavLink to='/signup' className='signup-link'> Sign up now</NavLink></p>
        <small>this page is protected by Google reCAPTCHA to ensure you'are not bot
        <NavLink to=''>Learn more</NavLink>
        </small>

    </div>
    </div>

  )
}

export default SignIn