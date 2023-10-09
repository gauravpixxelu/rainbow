import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PrePrimary() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const prevArrow = <FontAwesomeIcon icon={faCircleChevronLeft} />;
    const nextArrow = <FontAwesomeIcon icon={faCircleChevronRight} />;

    const settings = {
        dots: false,
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
                    rows: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    };

    const [eventDetails, setEventDetails] = useState([]);
    const categoryId = 1;

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}get-category-event-detail?id=${categoryId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.data && data.data.length > 0) {
                    setEventDetails(data.data[0].event_details);
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [categoryId]);

    return (

        <div className={'preprimarypage'}>

            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Pre Primary </h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1770s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- Sports ----- */}

            <section className="sports-block">

                {eventDetails.map((event, index) => (
                    <div key={index} className="sports-box">
                        <div className="container">
                            <div className="sports-box-data">
                                <h2 className="hdng-h2">{event.event_name}</h2>
                                <p className="para-16">{event.event_description || ''}</p>
                            </div>

                            <div className="sports-box-images">
                                <Slider {...settings}>
                                    {event.event_images &&
                                        event.event_images.map((image, imageIndex) => (
                                            <div key={imageIndex}>
                                                <img src={image} alt={`Event Image ${imageIndex + 1}`} />
                                            </div>
                                        ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                ))}

            </section>

            {/* ----- Sports ----- */}

        </div>

    )
}


export default PrePrimary