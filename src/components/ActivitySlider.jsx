import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const prevArrow = (
  <FontAwesomeIcon icon={faCircleChevronLeft} />
);

const nextArrow = (
  <FontAwesomeIcon icon={faCircleChevronRight} />
);


const ActivitySlider = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: prevArrow,
      nextArrow: nextArrow,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1
          }
        }
      ],
    };
  
  return (
    <Slider {...settings}>
      <div>
        <img src="images/activity-slide1.jpg" alt="Activity_Slide1" />
      </div>
      <div>
        <img src="images/activity-slide4.jpg" alt="Activity_Slide2" />
      </div>
      <div>
        <img src="images/activity-slide3.jpg" alt="Activity_Slide3" />
      </div>
      <div>
        <img src="images/activity-slide2.jpg" alt="Activity_Slide1" />
      </div>
      <div>
        <img src="images/activity-slide5.jpg" alt="Activity_Slide2" />
      </div>
      <div>
        <img src="images/activity-slide6.jpg" alt="Activity_Slide2" />
      </div>
      <div>
        <img src="images/activity-slide7.jpg" alt="Activity_Slide2" />
      </div>
    </Slider>
  );
};

export default ActivitySlider;
