import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import backgroundImage from '../images/bgmain.jpg'; // Make sure to update the path accordingly

const Signup = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-6">Welcome to MRS</h1>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-1/2 p-2 rounded bg-gray-800 bg-opacity-50 text-white"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-1/2 p-2 rounded bg-gray-800 bg-opacity-50 text-white"
            />
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 rounded bg-gray-800 bg-opacity-50 text-white"
          />
          <input 
            type="username" 
            placeholder="Username" 
            className="w-full p-2 rounded bg-gray-800 bg-opacity-50 text-white"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 rounded bg-gray-800 bg-opacity-50 text-white"
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            className="w-full p-2 rounded bg-gray-800 bg-opacity-50 text-white"
          />
          <button 
            type="submit" 
            className="w-full p-2 rounded bg-red-600 text-white font-bold hover:bg-red-700"
          >
            Sign Up
          </button>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/login" className="text-white text-lg bg-black p-2 rounded-sm w-1/2 text-center">Already have an account</Link>
        
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
