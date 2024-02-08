import React from "react";
import Carousel from "./slider";
import Image from "next/image";
function Carousel2() {
  const slides = [
    <div key="slide1" className="text-center">
      <Image src="/images/image 13.png" alt="" width={82} height={48} />
    </div>,
    <div key="slide2" className="text-center">
      {" "}
      <Image src="/images/image 8.png" alt="" width={130} height={48} />
    </div>,
    <div key="slide3" className="text-center">
      <Image src="/images/image 9.png" alt="" width={100} height={48} />
    </div>,
    <div key="slide4" className="text-center items-center">
      <Image src="/images/image 10.png" alt="" width={97} height={48} />
    </div>,
    <div key="slide5" className="text-center">
      <Image src="/images/image 11.png" alt="" width={62} height={48} />
    </div>,
    <div key="slide6" className="text-center">
      <Image src="/images/image 12.png" alt="" width={157} height={48} />
    </div>,
  ];

  return (
    <div className="">
      <Carousel slides={slides} />
    </div>
  );
}

export default Carousel2;
