import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../images/bgmain.jpg";
import Sidebar from './sidebar';

import MovieListpage from './movieListpage';

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat',
  };

  return (
    <div style={backgroundStyle} className="min-h-screen flex flex-col">
      <div className='flex'>
      <Sidebar />
      <MovieListpage />
      </div>
    </div>
  );
};

export default HomePage;
