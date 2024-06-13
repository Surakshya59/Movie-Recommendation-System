// src/Login/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const backgroundImageStyle = {
    backgroundImage: "url('../src/images/bgmain.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here.
    login(); // This will set the user as authenticated
    navigate('/home'); // Navigate to home page after login
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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