import React from "react";
import "./style.css";

import slide1 from "./img-celular/celular1.svg";
import slide2 from "./img-celular/celular2.svg";
import slide3 from "./img-celular/celular3.svg";
import slide4 from "./img-celular/celular4.svg";
import slide5 from "./img-celular/celular5.svg";
import slide6 from "./img-celular/celular6.svg";
import slide7 from "./img-celular/celular7.svg";
import slide8 from "./img-celular/celular8.svg";
import slide9 from "./img-celular/celular9.svg";
import slide10 from "./img-celular/celular10.svg";



function CarouselCel() {
  return (
    <>
      <div className="content-all">
        <div className="content-carrousel">
          <figure>
            <img  src={slide1} alt="carousel" />
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
          <figure>
            <img src={slide9} alt="carousel" />
          </figure>
          <figure>
            <img src={slide10} alt="carousel" />
          </figure>
        </div>
      </div>
    </>
  )
}

export default CarouselCel

