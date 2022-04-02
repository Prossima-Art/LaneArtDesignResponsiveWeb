import React from "react";
import "./style.css";

import slide1 from "./img-celular/img1.png";
import slide2 from "./img-celular/img2.png";
import slide3 from "./img-celular/img3.png";
import slide4 from "./img-celular/img4.png";
import slide5 from "./img-celular/img5.png";
import slide6 from "./img-celular/img6.png";
import slide7 from "./img-celular/img7.png";
import slide8 from "./img-celular/img8.png";



function CarouselCel() {
  return (
    <>
      <div className="content-all">
        <div className="content-carrousel">
          <figure>
            <img src={slide1} alt="carousel" />
          </figure>
          <figure>
            <img src={slide2} alt="carousel" />
          </figure>
          <figure>
            <img src={slide3} alt="carousel" />
          </figure>
          <figure>
            <img src={slide4} alt="carousel" />
          </figure>
          <figure>
            <img src={slide5} alt="carousel" />
          </figure>
          <figure>
            <img src={slide6} alt="carousel" />
          </figure>
          <figure>
            <img src={slide7} alt="carousel" />
          </figure>
          <figure>
            <img src={slide8} alt="carousel" />
          </figure>
        </div>
      </div>
    </>
  )
}

export default CarouselCel

