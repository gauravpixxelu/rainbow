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

const SurveySlider = () => {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
    >
      <div>
        <img src="images/survey-img1.png" alt="Survey_Slide1" />
      </div>
      <div>
        <img src="images/survey-img2.png" alt="Survey_Slide2" />
      </div>
      <div>
        <img src="images/survey-img3.png" alt="Survey_Slide3" />
      </div>
    </Carousel>
  );
};

export default SurveySlider;
