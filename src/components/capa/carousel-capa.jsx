import React from "react";
import Carousel from "nuka-carousel";
import Img1 from "./images-carousel/img1.png";
import Img2 from "./images-carousel/img2.png";
import Img3 from "./images-carousel/img3.png";

const card = (
  <svg
    width="423"
    height="172"
    viewBox="0 0 423 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_304_1452)">
      <rect
        y="22"
        width="315"
        height="149.963"
        rx="20"
        fill="#F6F6F6"
        fill-opacity="0.69"
      />
    </g>
    <path
      d="M411 13.9922V103.97H306"
      stroke="#D500F9"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <circle opacity="0.2" cx="411.5" cy="11.5" r="11.5" fill="#D500F9" />
    <circle cx="411.5" cy="11.5" r="6.5" fill="#D500F9" />
    <defs>
      <filter
        id="filter0_b_304_1452"
        x="-11"
        y="11"
        width="337"
        height="171.963"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="5.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_304_1452"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_304_1452"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

import "./capa.css";

export default function CarouNuka() {
  return (
    <Carousel
      className="Carousel"
      defaultControlsConfig={{
        nextButtonText: "Next",
        prevButtonText: "Prev",
        pagingDotsStyle: { fill: "red" },
      }}
      autoplay={true}
      autoplayInterval={2000}
      wrapAround={true}
      withoutControls={true}
      transitionMode={"fade"}
      pauseOnHover={false}
      swiping={false} //Enable touch swipe/dragging
      //speed = {2000}
    >
      <Slide1 />
      <Slide1 />
      <Slide1 />
    </Carousel>
  );
}

export function Slide1() {
  return (
    <div className="containercarousel">
      {/* <div className="cardsvg">
        {card}
        <p className="textcard p-subtitle bold">
          Design system para qualquer tipo de negócio.{" "} <br></br>
          <p className="p-subtitle mt-3">
            Oferecemos a oportunidade de atrair mais clientes para seu negocio.
          </p>{" "}
        </p>
      </div> */}
      <img src={Img1} className="CarouselImg" alt="..." />
    </div>
  );
}
