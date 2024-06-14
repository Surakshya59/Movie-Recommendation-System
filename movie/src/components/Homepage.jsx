import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from "../images/bgmain.jpg";
<<<<<<< HEAD
import Slider from  "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
=======
import Sidebar from './sidebar';
>>>>>>> 3d27bf397809a14b2aa2fafa084b50b8821afbb5

const HomePage = () => {
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat',
      };
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3
      };
    
    
      return (
        <div style={backgroundStyle} className="min-h-screen flex flex-col">
<<<<<<< HEAD
=======
          <Sidebar/>
>>>>>>> 3d27bf397809a14b2aa2fafa084b50b8821afbb5
        <main className="ml-1/5 p-10 text-white w-full flex flex-col items-center">
          <div className="mb-10 w-full max-w-4xl">
            <h2 className="text-3xl mb-4 text-center">Recommended for you</h2>
            <div className="grid grid-cols-3 gap-6">
              <img src="https://via.placeholder.com/150" alt="Mage" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Guardians of the Galaxy" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Black Panther" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Avengers" className="w-full" />
            </div>
            <button>Click me 
            
            </button>
          </div>
          <div className="w-full max-w-4xl">
            <h2 className="text-3xl mb-4">Populr</h2>
            
            <div className="flex">
            <Slider {...settings}>
              <img src="https://via.placeholder.com/150" alt="Titanic" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Blade Runner" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="127 Hours" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Metropolis" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Metropolis" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Metropolis" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Metropolis" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Metropolis" className="w-full" />
              <img src="https://via.placeholder.com/150" alt="Metropolis" className="w-full" />

              </Slider>
            </div>
          </div>
        </main>
      </div>
  );
};

export default HomePage;
