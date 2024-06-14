import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

const movieListpage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <div className="text-black">Next</div>,
        prevArrow: <div className="text-black">Prev</div>,
      };
  return (
    <div>
      <main className="ml-60 text-white w-full flex flex-col items-center">
        <div className="mb-10 w-full max-w-7xl p-4">
          <h2 className="text-3xl mb-4 text-yellow-200">Recommended for you</h2>
          <Slider {...settings}>
            <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Mage" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Guardians of the Galaxy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Black Panther" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Avengers" className="w-full h-full object-cover" />
              </div>
            </div>
          </Slider>
        </div>
        <div className="mb-10 w-full max-w-7xl p-4">
          <h2 className="text-3xl mb-4 text-yellow-200">Popular</h2>
          <Slider {...settings}>
          <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Mage" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Guardians of the Galaxy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Black Panther" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-2">
              <div className="w-48 h-72 bg-green-400 overflow-hidden">
                <img src="https://via.placeholder.com/150" alt="Avengers" className="w-full h-full object-cover" />
              </div>
            </div>
          </Slider>
        </div>
      </main>
    </div>
  )
}

export default movieListpage
