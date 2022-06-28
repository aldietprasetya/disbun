import React, { useState } from 'react';
import Carousel from 'nuka-carousel';
import Image from 'next/image';

const dataImage = [
  '/images/test-image/image-1.JPG',
  '/images/test-image/image-2.jpg',
  '/images/test-image/image-3.JPG',
  '/images/test-image/image-4.JPG',
];

const CarouselBanner = ({ className = 'h-[1024px] tall:h-[100vh]' }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className="relative flex-[0.5]">
      <Carousel
        withoutControls
        autoplay
        autoplayInterval={5000}
        wrapAround
        className={`${className}`}
        slideIndex={activeSlide}
        afterSlide={(slideIndex) => setActiveSlide(slideIndex)}
      >
        {dataImage.map((image, idx) => {
          return (
            <div key={image} className={`${className} relative w-[100%]`}>
              <Image src={image} layout="fill" objectFit="cover" />
            </div>
          );
        })}
      </Carousel>
      <div className="absolute bottom-[70px] left-[60px] flex gap-4 ">
        {dataImage.map((image, index) => {
          return (
            <img
              key={image}
              src={
                index === activeSlide
                  ? '/icon/rectangle-orange.svg'
                  : '/icon/rectangle.svg'
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarouselBanner;
