import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../images/bgmain.jpg";
import Sidebar from './sidebar';

const HomePage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      };
    
      return (
        <div style={backgroundStyle} className="min-h-screen flex flex-col">
          <Sidebar/>
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
