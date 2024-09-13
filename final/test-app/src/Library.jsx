import React from "react";
import Accordion from "./Accordion";
import ImageCarousel from "./ImageCarousel";
import cat1 from "./public/cat1.jpeg";
import cat2 from "./public/cat2.jpeg";
import cat3 from "./public/cat3.jpeg";

const Library = () => {
  const imageUrls = [
    cat1,
    cat2,
    cat3,
    // 添加更多图像URL
  ];
  return (
    <div id="main-content">
      <ImageCarousel images={imageUrls} />
      <Accordion />
    </div>
  );
};

export default Library;
