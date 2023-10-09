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


const EventSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
      <div className="event-block">
        <img src="images/event-img.png" alt="Event_Img1" />
      </div>
      <div className="event-block">
        <img src="images/event-img2.png" alt="Event_Img2" />
      </div>
      <div className="event-block">
        <img src="images/event-img3.png" alt="Event_Img3" />
      </div>
      <div className="event-block">
        <img src="images/event-img4.png" alt="Event_Img4" />
      </div>
      <div className="event-block">
        <img src="images/event-img5.png" alt="Event_Img5" />
      </div>
      <div className="event-block">
        <img src="images/event-img6.png" alt="Event_Img6" />
      </div>
      <div className="event-block">
        <img src="images/event-img8.png" alt="Event_Img8" />
      </div>

    </Slider>
  );
};

export default EventSlider;
