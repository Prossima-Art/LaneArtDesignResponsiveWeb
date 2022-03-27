import React from 'react'
import './carouselCelular.css';

import slider1 from './img-celular/phone1.png';
import slider2 from './img-celular/phone2.png';
import slider3 from './img-celular/phone3.png';

window.addEventListener('load', () => {
	var
		carousels = document.querySelectorAll('.carousel')
	;

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
  console.log("Funcionando")
});

const items = root.getElementsByClassName('.items')

function carousel(root) {
	var
		figure = root.querySelector('figure'),
		
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,
		
		theta =  2 * Math.PI / n,
		currImage = 0
	;
	
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var	
			apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';
		
		rotateCarousel(currImage);
	}

	function setupNavigation() {
		items.addEventListener('click', onClick, true);
		
		function onClick(e) {
			e.stopPropagation();
			
			var t = e.target;
			if (t.tagName.toUpperCase() != 'BUTTON')
				return;
			
			if (t.classList.contains('next')) {
        console.log("If do next")
				currImage++;
			}
			else {
        console.log("Else do next")
				currImage--;
			}
			
			rotateCarousel(currImage);
		}
			
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
	
}


//Carousel default
export default function CarouselCel() {


  return (
    <>
      {/* <div className="carousel" data-bfc> */}
      <div className="carousel" >
        <figure>
          <img src={slider1} alt="carousel" />
          <img src={slider2} alt="carousel" />
          <img src={slider3} alt="carousel" />
        </figure>

        <div className='items'>
          <button className="item prev"></button>
          <button className="item next"></button>
        </div>
      </div>

    </>
  );
}
