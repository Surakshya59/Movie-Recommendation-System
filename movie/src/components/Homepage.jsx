import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../images/bgmain.jpg";

const HomePage = () => {
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
                <li className="mb-4">
                  <Link to="/trending" className="text-white text-lg">Trending</Link>
                </li>
              </ul>
            </nav>
            <div>
                <ul>
                  <li className="mb-4">
                    <Link to="/login" className="text-white text-lg block">Logout</Link>
                  </li>
            
                </ul>
              </div>
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
  );
};

export default HomePage;
