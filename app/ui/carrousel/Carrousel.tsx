import React, { useState } from 'react';
import style from "./carrousel.module.css";

const Carrousel = ({ images }: {images: string[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={`relative`}>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-lg" onClick={prevImage}>
        Prev
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-3 py-1 rounded-lg" onClick={nextImage}>
        Next
      </button>
      <img className={`${style.container} mx-auto`} src={images[currentIndex]} alt="Carousel" />
    </div>
  );
};

export default Carrousel