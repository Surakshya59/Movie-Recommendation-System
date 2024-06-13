// src/Navbar/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Navbar = () => {
  return (
    <div className="group fixed bottom-0 left-0 w-full">
      <div className="hidden group-hover:block">
        <nav className="bg-gray-900 bg-opacity-75 p-4 flex justify-around">
          <Link to="/" className="text-white text-lg p-2 rounded hover:bg-blue-700">Home</Link>
          <Link to="/contacts" className="text-white text-lg p-2 rounded hover:bg-blue-700">Contacts</Link>
          <Link to="/about-us" className="text-white text-lg p-2 rounded hover:bg-blue-700">About Us</Link>
          <Link to="/feedback" className="text-white text-lg p-2 rounded hover:bg-blue-700">Feedback</Link>
        </nav>
      </div>
      <div className="h-16"></div>

      <div className="fixed bottom-0 left-0 w-full bg-gray-900 bg-opacity-75 p-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide><Link to="/"><img src="image1.jpg" alt="Slide 1" /></Link></SwiperSlide>
          <SwiperSlide><Link to="/contacts"><img src="image2.jpg" alt="Slide 2" /></Link></SwiperSlide>
          <SwiperSlide><Link to="/about-us"><img src="image3.jpg" alt="Slide 3" /></Link></SwiperSlide>
          <SwiperSlide><Link to="/feedback"><img src="image4.jpg" alt="Slide 4" /></Link></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Navbar;
