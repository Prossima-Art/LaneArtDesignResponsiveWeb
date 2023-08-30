import React, { useState, useEffect } from "react";
import "./style.css";

const CarouselCel = () => {
  const [slideImages, setSlideImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const images = [];
      for (let i = 1; i <= 10; i++) {
        const imageModule = await import(`./img-celular/celular${i}.svg`);
        images.push(imageModule.default);
      }
      setSlideImages(images);
    };

    importImages();
  }, []);

  return (
    <div className="content-all">
      <div className="content-carrousel">
        {slideImages.map((src, index) => (
          <figure key={index}>
            <img src={src} alt="carousel" />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default CarouselCel;