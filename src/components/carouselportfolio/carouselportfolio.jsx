import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import {Container, Col, Row, Stack} from 'react-bootstrap';
import { motion } from "framer-motion";

import Tamb1 from './imgcarouselportfolio/tamb-home1.png';
import Tamb2 from './imgcarouselportfolio/tamb-home2.png';
import Tamb3 from './imgcarouselportfolio/tamb-home3.png';

import './carouselportfolio.css';

// export default function Tambs() {
//    return (
//  		<>
//  			<div>
//  	 			<a href="#" className="row row-cols-auto">
//  	 						<motion.div initial={{x:100}} animate={{ x:0 }}><img className="tambs" src= {Tamb1} alt="..."/> </motion.div>
//  	 				</a>
//  	 		</div>
//  	</>		
//    );
//  }




export default function Tambs() {
   return (
 		<>
			<div className="clearfix">
			  				
			  <div className="img-container2">
			  <a href="#">
 	 						<motion.div initial={{x:100 }} animate={{ y:120, x:0 }} transition={{duration: 1, delay: 1}} ><img className=" float" src= {Tamb2} alt="..."/> </motion.div>
 	 				</a>
			  </div>
				
			  <div className="img-container3">
			 <a href="#">
 	 						<motion.div initial={{x:-100 }} animate={{x:0, y:120 }} transition={{ duration: 1, delay: 1}}><img className=" float" src= {Tamb3} alt="..."/> </motion.div>
 	 				</a>
			  </div>

				<div className="img-container">
			  <a href="#">
 	 						<motion.div initial={{y:-100}} animate={{ y:0 }} transition={{ duration: 1, delay: 1}}><img className=" float" src= {Tamb1} alt="..."/> </motion.div>
 	 				</a>
			  </div>
			</div>

 	</>		
   );
 }
