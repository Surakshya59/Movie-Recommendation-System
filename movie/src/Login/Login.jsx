import React from 'react';
import { Link } from "react-router-dom";

const LoginPage = () => {
  const backgroundImageStyle = {
    backgroundImage: "url('../src/images/bgmain.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={backgroundImageStyle} className="min-h-screen flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-50 p-10 rounded-lg w-full max-w-lg">
        <div className='bg-black mb-6 p-2 rounded-sm w-full'>
          <h1 className="text-red-900 text-4xl p-3 font-bold text-center">Welcome to MRS</h1>
        </div>
        <form className="space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded bg-gray-700 text-white"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs p-3 rounded bg-red-600 text-white font-bold hover:bg-red-700">
              Log In
            </button>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <Link to="/Signup" className="text-white text-lg bg-black p-2 rounded-sm w-1/2 text-center">Register</Link>
            <Link to="/Forgetpsw" className="text-white text-lg bg-black p-2 rounded-sm w-1/2 text-center">Forget Password</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
