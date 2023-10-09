import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [eventDetails, setEventDetails] = useState([]);
    const categoryId = 7;

    useEffect(() => {
    }, [activeTab]);


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
                    setEventDetails(data.data[0].event_details); // Assuming you want event details from the first category.
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [categoryId]);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 1
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

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs-gallery">
            <nav className="vertical-gd">
                <div className="nav nav-tabs" id="nav-tab" role="tablist" aria-orientation="vertical">
                    <Slider {...settings}>
                        {eventDetails.map((event, index) => (
                            <div key={index}>
                                <button
                                    className={`nav-link tab-hdng ${activeTab === index ? 'active' : ''}`}
                                    onClick={() => handleTabClick(index)}
                                >
                                    {event.event_name}
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">
                {eventDetails.map((event, index) => (
                    <div
                        className={`tab-pane fade ${activeTab === index ? 'active show' : ''}`}
                        id={`module${index + 1}`}
                        role="tabpanel"
                        key={index}
                    >
                        <div className="events-images">
                            {event.event_images &&
                                event.event_images.map((image, imageIndex) => (
                                    <div key={imageIndex}>
                                        <img src={image} alt={`Event Image ${imageIndex + 1}`} />
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;