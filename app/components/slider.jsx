'use client'
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ slides }) => {
  const [slidesToShow, setSlidesToShow] = useState(4); // Default value for slidesToShow

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slides to show based on screen size
      if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4); // Default number of slides for larger screens
      }
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="text-center justify-between">{slide}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
