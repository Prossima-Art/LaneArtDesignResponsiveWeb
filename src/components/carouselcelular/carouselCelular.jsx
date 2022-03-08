import React from 'react'
// import './sass/bootstrap.min.css';
// import './sass/carousel.scss';

import './carouselCelular.css';

import slider1 from './img-celular/phone1.png';
import slider2 from './img-celular/phone2.png';
import slider3 from './img-celular/phone3.png';


import NextBtn from './carouselBtn/chevron-left.svg';
import PrevtBtn from './carouselBtn/chevron-right.svg';

///Function Carousel rotate
window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel");
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });
  
  async function carousel(root) {
    var figure = root.querySelector("figure"),
      nav = root.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = "bfc" in root.dataset,
      theta = (2 * Math.PI) / n,
      currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    async function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
  
      rotateCarousel(currImage);
    }
  
    async function setupNavigation() {
      nav.addEventListener("click", onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() !== "BUTTON") return;
  
        if (t.classList.contains("next")) {
          currImage++;
        } else {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
    }
  
    async function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  }


//Carousel default
export default function CarouselCel() {
	
	
  return(	
		<>

			 <div className="carousel " id="carousel">
          <figure>
            <img src={slider1} alt="carousel" />
            <img src={slider2} alt="carousel" />
            <img src={slider3} alt="carousel" />
            {/* <img src={carousel_1} alt="carousel" /> */}
          </figure>
          
          <nav>
            <button className="nav prev"></button>
            <button className="nav next"></button>
          </nav>
          </div>
			
		</>
	);
}
