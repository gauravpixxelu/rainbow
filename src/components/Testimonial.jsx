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


const Testimonial = () => {
  const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 4,
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
            <div className="testimonial-block">
                <img src="images/test1.jpg" alt="Mission" />
            </div>

            <div className="testimonial-block">
                <img src="images/test2.jpg" alt="Mission" />
            </div>

            <div className="testimonial-block">
                <img src="images/test3.jpg" alt="Mission" />
            </div>

            <div className="testimonial-block">
                <img src="images/test4.jpg" alt="Mission" />
            </div>

            <div className="testimonial-block">
                <img src="images/test5.jpg" alt="Mission" />
            </div>

            <div className="testimonial-block">
                <img src="images/test6.jpg" alt="Mission" />
            </div>

            </Slider>
    );
};

export default Testimonial;
