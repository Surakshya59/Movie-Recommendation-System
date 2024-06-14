// src/Login/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
<<<<<<< HEAD
import axios from 'axios';



  // const handleCloseAlert = () => {
  //   setError('');
  //   setSuccess('');
  // };



const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  // const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
=======
import alert from '../components/Alert/Alert'

const LoginPage = () => {
  const [email, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
>>>>>>> 3d27bf397809a14b2aa2fafa084b50b8821afbb5

  const handleCloseAlert = () => {
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    // setError('');
    // setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        username,
=======
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/account/user/login', {
        email,
>>>>>>> 3d27bf397809a14b2aa2fafa084b50b8821afbb5
        password,
      });

      console.log('Server response:', response);

      if (response.status === 200 ) {
        localStorage.setItem('token', response.data.token);
<<<<<<< HEAD
        // window.dispatchEvent(new Event('loginStateChanged'));
       
        // setSuccess('Login successful!');
        
          navigate('/home');
     
      } else {
        console.error('Unexpected response:', response);
        // setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
     
        
      }
    }
  


=======
        window.dispatchEvent(new Event('loginStateChanged'));
        setSuccess('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        console.error('Unexpected response:', response);
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        setError(error.response.data.detail || 'Login failed. Please try again.');
      } else {
        setError('Login failed. Please try again.');
      }
    }
  };
>>>>>>> 3d27bf397809a14b2aa2fafa084b50b8821afbb5

  return (
    <div style={backgroundImageStyle} className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-50 p-10 rounded-lg w-full max-w-lg">
        <div className='bg-black mb-6 p-2 rounded-sm w-full'>
          <h1 className="text-red-900 text-4xl p-3 font-bold text-center">Welcome to MRS</h1>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="username"
              placeholder="Username"
              className="w-full p-3 rounded bg-gray-800 bg-opacity-50 text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-800 bg-opacity-50 text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
            onClick={handleSubmit}
              type="submit"
              className="w-full max-w-xs p-3 rounded bg-red-900 text-white font-bold hover:bg-red-900">
              Log In
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/signup" className="text-white text-lg bg-black p-2 rounded-sm w-1/2 text-center">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
