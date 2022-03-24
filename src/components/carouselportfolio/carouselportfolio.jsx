import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { Container, Col, Row, Stack } from "react-bootstrap";
import { motion } from "framer-motion";

import Tamb1 from "./imgcarouselportfolio/tamb-home1.png";
import Tamb2 from "./imgcarouselportfolio/tamb-home2.png";
import Tamb3 from "./imgcarouselportfolio/tamb-home3.png";

import "./carouselportfolio.css";

export default function Tambs() {
  return (
    <>
      <div className="clearfix">
        <div className="img-container2">
          <motion.div
            initial={{ x: 100 }}
            animate={{ y: 120, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img className=" float size" src={Tamb2} alt="..." />{" "}
          </motion.div>
        </div>

        <div className="img-container3">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0, y: 120 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img className=" float size" src={Tamb3} alt="..." />{" "}
          </motion.div>
        </div>

        <div className="img-container">
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img className=" float size" src={Tamb1} alt="..." />{" "}
          </motion.div>
        </div>
      </div>
    </>
  );
}
