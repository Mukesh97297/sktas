import React from 'react'
import Carousel from "./slider";

function Carousel2() {
    const slides = [
        <div key="slide1" className='text-center'>
          <img src="/images/image 6.png" alt=""/>
        </div>,
        <div key="slide2"> <img src="/images/image 1.png" alt=""/></div>,
        <div key="slide3"> <img src="/images/image 2.png" alt=""/></div>,
        <div key="slide2"> <img src="/images/image 1.png" alt=""/></div>,
        <div key="slide2"> <img src="/images/image 1.png" alt=""/></div>,
        <div key="slide2"> <img src="/images/image 1.png" alt=""/></div>,
      ];
    
  return (
   
      <div className="">
      <h1>My Responsive Carousel</h1>
      <Carousel slides={slides} />
    
    </div>
  )
}

export default Carousel2
