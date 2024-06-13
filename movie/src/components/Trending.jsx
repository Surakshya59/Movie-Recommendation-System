// src/components/Trending.js
import React from 'react';
import { Link } from "react-router-dom";
import backgroundImage from "../images/bgmain.jpg";

const Trending = () => {
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
              <Link to="/login" className="text-white text-lg">Home</Link>
            </li>
            <li className="mb-4">
              <Link to="/login" className="text-white text-lg">Watchlist</Link>
            </li>
            <li className="mb-10">
              <Link to="/login" className="text-white text-lg">Trending</Link>
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
      <main className="ml-64 p-10 mr-20 flex-grow flex flex-col justify-between">
        <section className="mb-10 flex-grow">
          <div className="bg-black bg-opacity-50 p-6 rounded-lg h-full">
            <h2 className="text-3xl mb-4 text-white">
       Trending Movies
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Trending;
