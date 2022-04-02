import React from "react";
import { useEffect, useState } from "react";
import './scrollToTop.css'

const arrow = (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5863 19.6973V5.69727" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.5863 12.6973L12.5863 5.69727L19.5863 12.6973" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

)


function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fab-container" onClick={scrollToTop}>
        {isVisible && (
      <div className="srcollicon scroolbtn">{arrow}</div> )}
    </div>
  );
}
export default ScrollToTop;
