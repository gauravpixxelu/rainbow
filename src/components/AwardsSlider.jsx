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


const AwardsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        centerMode: false, 
        prevArrow: prevArrow,
        nextArrow: nextArrow,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 1
                }
            }
        ],
    };


    return (

        <Slider {...settings}>
            <div className="testimonial-cnt">
                <img src="images/alumni/alumni1.jpg" alt="Alumni1" />
                <h4>Anuj Kumar</h4>
                <p>IIT, Roorkee</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni2.jpg" alt="Alumni1" />
                <h4>Sonali Dharma</h4>
                <p>Lieutenant</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni3.jpg" alt="Alumni1" />
                <h4>Vinayak Guleria</h4>
                <p>NDA</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni4.jpg" alt="Alumni1" />
                <h4>Aditya Kumar</h4>
                <p>IIT, Roorkee</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni5.jpg" alt="Alumni1" />
                <h4>Lipakshi (MBBS)</h4>
                <p>IGMC, Shimla</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni6.jpg" alt="Alumni1" />
                <h4>Ankita (MBBS)</h4>
                <p>IGMC, Shimla</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni7.jpg" alt="Alumni1" />
                <h4>Surbhi (MBBS)</h4>
                <p>RPGMC, Tanda</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni8.jpg" alt="Alumni1" />
                <h4>Hritik (MBBS)</h4>
                <p>RPGMC, Tanda</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni9.jpg" alt="Alumni1" />
                <h4>Sanskriti</h4>
                <p>RPGMC, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni10.jpg" alt="Alumni1" />
                <h4>Vanshika</h4>
                <p>B.V.SC. Palampur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni11.jpg" alt="Alumni1" />
                <h4>Rishita</h4>
                <p>MBBS Chamba</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni12.jpg" alt="Alumni1" />
                <h4>Sakshi</h4>
                <p>MBBS Nahan</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni13.jpg" alt="Alumni1" />
                <h4>Vanshika</h4>
                <p>PGI Chd. Paramedical</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni14.jpg" alt="Alumni1" />
                <h4>Harsh</h4>
                <p>NIT, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni15.jpg" alt="Alumni1" />
                <h4>Aniket</h4>
                <p>NIT, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni16.jpg" alt="Alumni1" />
                <h4>Vishav</h4>
                <p>NIT, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni17.jpg" alt="Alumni1" />
                <h4>Aryan</h4>
                <p>NIT, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni18.jpg" alt="Alumni1" />
                <h4>Tushar</h4>
                <p>NIT, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni19.jpg" alt="Alumni1" />
                <h4>Ayush</h4>
                <p>NIT, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni20.jpg" alt="Alumni1" />
                <h4>Anshika Prashar</h4>
                <p>NIT, Hamirpur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni21.jpg" alt="Alumni1" />
                <h4>Aanchal Rana</h4>
                <p>MBBS Chamba</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni22.jpg" alt="Alumni1" />
                <h4>Manan Makkar</h4>
                <p>MBBS-MMU Chamba</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni23.jpg" alt="Alumni1" />
                <h4>Ananya</h4>
                <p>B.V.SC. Palampur</p>
            </div>

            <div className="testimonial-cnt">
                <img src="images/alumni/alumni24.jpg" alt="Alumni1" />
                <h4>Kahitiz (MBBS)</h4>
                <p>RPGMC, Tanda</p>
            </div>
        </Slider>

    );
};

export default AwardsSlider;
