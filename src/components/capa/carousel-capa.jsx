import React from 'react';
import Carousel from 'nuka-carousel';
import Img1 from './images-carousel/img1.png';
import Img2 from './images-carousel/img2.png';
import Img3 from './images-carousel/img3.png';



import './capa.css';

export default function CarouNuka () {
    return (
			<Carousel className="Carousel"
			defaultControlsConfig={{
				nextButtonText: 'Next',
				prevButtonText: 'Prev',
				pagingDotsStyle: {fill: 'red'}
			}}
			autoplay = {true}
			autoplayInterval = {2000}
			wrapAround = {true}
			withoutControls = {true}
			transitionMode = {"fade"}			
			pauseOnHover ={false} 
			swiping = {false}//Enable touch swipe/dragging
			//speed = {2000}
			>
        <img src={Img1} className="CarouselImg" alt='...'/>
				<img src={Img2} className="CarouselImg" alt='...'/>
				<img src={Img3} className="CarouselImg" alt='...'/>
				
				
      </Carousel>
    )
}
