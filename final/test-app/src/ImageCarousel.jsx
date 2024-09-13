import React, { useState } from "react";
import "./ImageCarousel.css"; // 请确保路径正确

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-carousel">
      <button className="carousel-button" onClick={handlePrevClick}>
        Prev
      </button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button className="carousel-button" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
