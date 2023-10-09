import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const BannerSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      showDots
      arrows={false}
      draggable={false}
    >
      <div>
        <img src="images/banner-slider1.jpg" alt="Banner_Slide1" />
      </div>
      <div>
        <img src="images/banner-slider2.jpg" alt="Banner_Slide2" />
      </div>
  
    </Carousel>
  );
};

export default BannerSlider;
