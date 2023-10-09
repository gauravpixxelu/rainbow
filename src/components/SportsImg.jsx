import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const SportsImg = () => {

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


    return (
        <div className="tabs-gallery">
            <nav className="vertical-gd">
                <div className="nav nav-tabs" id="nav-tab" role="tablist" aria-orientation="vertical">
                    <Slider {...settings}>
                        <div><button className="nav-link tab-hdng active" id="module1-tab" data-bs-toggle="tab" data-bs-target="#module1" type="button" role="tab" aria-controls="module1" aria-selected="true">Sauna</button></div>
                        <div><button className="nav-link tab-hdng" id="module2-tab" data-bs-toggle="tab" data-bs-target="#module2" type="button" role="tab" aria-controls="module2" aria-selected="true">Steam Bath</button></div>
                        <div><button className="nav-link tab-hdng" id="module3-tab" data-bs-toggle="tab" data-bs-target="#module3" type="button" role="tab" aria-controls="module3" aria-selected="true">Jacuzzi</button></div>
                        <div><button className="nav-link tab-hdng" id="module4-tab" data-bs-toggle="tab" data-bs-target="#module4" type="button" role="tab" aria-controls="module4" aria-selected="true">Ice Bath</button></div>
                        <div><button className="nav-link tab-hdng" id="module5-tab" data-bs-toggle="tab" data-bs-target="#module5" type="button" role="tab" aria-controls="module5" aria-selected="true">Gym</button></div>
                        <div><button className="nav-link tab-hdng" id="module6-tab" data-bs-toggle="tab" data-bs-target="#module6" type="button" role="tab" aria-controls="module6" aria-selected="true">Physiotherapy</button></div>
                    </Slider>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

                {/* -------- Module 1 -------- */}

                <div className="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
                    <ul className="events-images">
                       
                    </ul>
                </div>

                {/* -------- Module 1 -------- */}

                {/* -------- Module 2 -------- */}

                <div className="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
                <ul className="events-images">
                        
                    </ul>
                </div>
                {/* -------- Module 2 -------- */}

                {/* -------- Module 3 -------- */}

                <div className="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
                <ul className="events-images">
                        
                    </ul>
                </div>

                {/* -------- Module 3 -------- */}

                {/* -------- Module 4 -------- */}

                <div className="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
                <ul className="events-images">
                       
                    </ul>
                </div>

                {/* -------- Module 4 -------- */}

                {/* -------- Module 5 -------- */}

                <div className="tab-pane fade" id="module5" role="tabpanel" aria-labelledby="module5-tab">
                <ul className="events-images">
                       
                    </ul>
                </div>

                {/* -------- Module 5 -------- */}

                {/* -------- Module 6 -------- */}

                <div className="tab-pane fade" id="module6" role="tabpanel" aria-labelledby="module6-tab">
                <ul className="events-images">
                       
                    </ul>
                </div>

                {/* -------- Module 6 -------- */}

            </div>
        </div>


    );
};

export default SportsImg;
