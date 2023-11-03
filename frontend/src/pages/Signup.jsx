import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState('');
  const [phno, setPhno] = useState('');
  const [password, setPassword] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  // State variables for error messages
  const [emailError, setEmailError] = useState('');
  const [phnoError, setPhnoError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation patterns
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^(?=.*\d)[0-9]{10}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    // Reset error messages
    setEmailError('');
    setPhnoError('');
    setPasswordError('');

    // Validation checks
    let isValid = true;

    if (!emailPattern.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!phonePattern.test(phno)) {
      setPhnoError('Invalid phone number (10 digits required)');
      isValid = false;
    }

    if (!passwordPattern.test(password)) {
      setPasswordError('contain at least 8 num character u/l case');
      isValid = false;
    }

    if (isValid) {
      const data = {
        email,
        phno,
        password,
      };

      axios
        .post('http://localhost:5555/sign/up', data)
        .then(() => {
          enqueueSnackbar('Sign Up Success', { variant: 'success' });
          navigate('/');
        })
        .catch((error) => {
          enqueueSnackbar('Give Correct Detail', { variant: 'error' });
          console.error(error);
        });
    }
  };

  return (
    <div className='signbody'>
      <nav className='sign-logo'>
        <h1>Book store</h1>
      </nav>
      <div className='form-warpper'>
        <h2>Sign Up</h2>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
            {emailError && <p className='error'>{emailError}</p>}
          </div>
          <div className='form-control'>
            <input
              type='text'
              value={phno}
              onChange={(e) => setPhno(e.target.value)}
              required
            />
            <label>Phone Number</label>
            {phnoError && <p className='error'>{phnoError}</p>}
          </div>
          <div className='form-control'>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            {passwordError && <p className='error'>{passwordError}</p>}
          </div>
          <button className='signbtn' type='submit'>
            Sign Up
          </button>
          <div className='form-help'>
            <div className='remember-me'>
              <input type='checkbox' id='remember-me' />
              <label htmlFor='remember-me'>Remember me</label>
            </div>
          </div>
        </form>
        <p className='signup'>
          Need to Sign In?{' '}
          <NavLink to='/' className='signup-link'>
            Sign in now
          </NavLink>
        </p>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a
          bot. <NavLink to='/'>Learn more</NavLink>
        </small>
      </div>
    </div>
  );
}

export default Signup;
