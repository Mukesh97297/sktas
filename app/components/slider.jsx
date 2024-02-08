// components/Carousel.js
'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides }) => {
  const [autoplay, setAutoplay] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
        const isSmallScreen = window.innerWidth < 768;
        setSlidesToShow(isSmallScreen ? 2 : slides.length);
        setAutoplay(isSmallScreen);
      };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [slides.length]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>{slide}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
