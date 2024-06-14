// src/components/AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/bgmain.jpg';

const AboutUs = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
  };

  return (
    <div style={backgroundStyle} className="min-h-screen flex flex-col">
      <aside className="h-screen fixed top-0 left-0 w-60 bg-gray-900 p-6 flex flex-col justify-between">
        <h1 className="text-red-900 font-bold text-4xl ">MRS</h1>
        <nav>
          <ul>
            <li className="mb-4 mt-1">
              <Link to="/home" className="text-white text-lg">Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/watchlist" className="text-white text-lg">Watchlist</Link>
            </li>
            <li className="mb-10">
              <Link to="/trending" className="text-white text-lg">Trending</Link>
            </li>
          </ul>
        </nav>
        <div>
          <ul>
            <li className="mb-4 mb-10">
              <Link to="/login" className="text-white text-lg block">Logout</Link>
            </li>
          </ul>
        </div>
      </aside>
      <main className="ml-1/5 p-10 text-white w-full flex flex-col items-center">
        <div className="w-full max-w-4xl bg-black bg-opacity-50 p-6 rounded shadow">
          <h2 className="text-3xl mb-4 text-bold text-red-900 text-center"><br/>About Us<br/></h2>
          <p className="text-lg"><br/>
            Welcome to Movie Recommendation System (MRS)! We are dedicated to helping you find the perfect movie based on your past preferences, favorite genres, and beloved actors. Our advanced recommendation algorithm analyzes your viewing history and suggests movies that match your unique taste. Whether you're in the mood for action, romance, or sci-fi, MRS has got you covered. Enjoy a personalized movie-watching experience like never before!
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
