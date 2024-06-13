// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import bgmain from '../images/bgmain.jpg';

const HomePage = () => {
  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${bgmain})` }}>
      <div className=" bg-opacity-75 min-h-screen flex flex-col items-center">
        <aside className="w-60 h-screen fixed top-0 left-0 bg-black text-white flex flex-col">
          <div className="text-4xl font-bold text-center text-red-900 p-6">MRS</div>
          <nav className="flex flex-col mt-10 space-y-6">
            <Link to="/home" className="text-2xl p-4 hover:bg-gray-800">Home</Link>
            <Link to="/watchlist" className="text-2xl p-4 hover:bg-gray-800">Watchlist</Link>
            <Link to="/trending" className="text-2xl p-4 hover:bg-gray-800">Trending</Link>
          </nav>
        </aside>
        <main className="ml-1/5 p-10 text-white w-full flex flex-col items-center">
          <div className="mb-10 w-full max-w-4xl">
            <h2 className="text-3xl mb-4 text-center">Recommended for you</h2>
            <div className="grid grid-cols-3 gap-6">
              <img src="https://via.placeholder.com/150" alt="Mage" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Guardians of the Galaxy" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Black Panther" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Avengers" className="w-full" />
            </div>
          </div>
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl mb-4">Popular</h2>
            <div className="grid grid-cols-5 gap-6">
              <img src="https://via.placeholder.com/150" alt="Titanic" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Blade Runner" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="127 Hours" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Metropolis" className="w-full" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
