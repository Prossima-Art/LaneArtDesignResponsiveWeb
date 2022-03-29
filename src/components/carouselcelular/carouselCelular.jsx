import React, { useRef } from "react";
import "./carouselcelular.css";

import slider from "./img-celular/Mockup.png";


export default function CarouselCel() {
  return (
    <>
      <div class="content-all">
        <div class="content-carrousel">
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
          <figure>
            <img src={slider} alt="carousel" />
          </figure>
        </div>
      </div>
    </>
  );
}
