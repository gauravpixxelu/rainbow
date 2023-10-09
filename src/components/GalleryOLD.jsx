import React, { useState } from 'react';
import Modal from 'react-responsive-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Gallery = () => {

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);


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


    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setOpen(false);
    };


    const motherimages = [
        "images/banner-images/gallery.jpg"
    ];

    const flowerimages = [
        "images/banner-images/academics-banner.jpg"
    ];

    const earthimages = [
        "images/banner-images/academics-banner.jpg"
    ];

    const musicalimages = [
        "images/banner-images/academics-banner.jpg"
    ];

    const independenceimages = [
        "images/banner-images/academics-banner.jpg"
    ];
    
    const investitureimages = [
        "images/banner-images/academics-banner.jpg"
    ];

    const koreanimages = [
        "images/banner-images/academics-banner.jpg"
    ];

    return (
        <div className="tabs-gallery">
            <nav className="vertical-gd">
                <div className="nav nav-tabs" id="nav-tab" role="tablist" aria-orientation="vertical">
                    <Slider {...settings}>
                        <div><button className="nav-link tab-hdng active" id="module1-tab" data-bs-toggle="tab" data-bs-target="#module1" type="button" role="tab" aria-controls="module1" aria-selected="true">Mother's Day </button></div>
                        <div><button className="nav-link tab-hdng" id="module2-tab" data-bs-toggle="tab" data-bs-target="#module2" type="button" role="tab" aria-controls="module2" aria-selected="true">Flowers Day</button></div>
                        <div><button className="nav-link tab-hdng" id="module3-tab" data-bs-toggle="tab" data-bs-target="#module3" type="button" role="tab" aria-controls="module3" aria-selected="true">Earth Day</button></div>
                        <div><button className="nav-link tab-hdng" id="module4-tab" data-bs-toggle="tab" data-bs-target="#module4" type="button" role="tab" aria-controls="module4" aria-selected="true">Musical Sargam </button></div>
                        <div><button className="nav-link tab-hdng" id="module5-tab" data-bs-toggle="tab" data-bs-target="#module5" type="button" role="tab" aria-controls="module5" aria-selected="true">Independence Day </button></div>
                        <div><button className="nav-link tab-hdng" id="module6-tab" data-bs-toggle="tab" data-bs-target="#module6" type="button" role="tab" aria-controls="module6" aria-selected="true">Investiture ceremony</button></div>
                        <div><button className="nav-link tab-hdng" id="module7-tab" data-bs-toggle="tab" data-bs-target="#module7" type="button" role="tab" aria-controls="module7" aria-selected="true">Korean Event</button></div>
                    </Slider>
                </div>
            </nav>

            <div className="tab-content" id="nav-tabContent">

                {/* -------- Module 1 -------- */}

                <div className="tab-pane fade active show" id="module1" role="tabpanel" aria-labelledby="module1-tab">
                    <ul className="events-images">
                        <li>
                            {motherimages.map((imageSrc, index) => (
                                <div key={index} onClick={() => openModal(imageSrc)}>
                                    <img src={imageSrc} alt={`Press_Img${index + 1}`} />
                                </div>
                            ))}</li>

                        <Modal
                            open={open}
                            onClose={closeModal}
                            center
                            classNames={{
                                overlay: open ? 'modal-overlay-open' : 'modal-overlay-close',
                                modal: open ? 'modal-open' : 'modal-close',
                            }}
                        >
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage}
                                        alt="Large_Image"
                                        className="modal-image"
                                    />
                                </>
                            )}
                        </Modal>
                    </ul>
                </div>

                {/* -------- Module 1 -------- */}

                {/* -------- Module 2 -------- */}

                <div className="tab-pane fade" id="module2" role="tabpanel" aria-labelledby="module2-tab">
                <ul className="events-images">
                        <li>
                            {flowerimages.map((imageSrc, index) => (
                                <div key={index} onClick={() => openModal(imageSrc)}>
                                    <img src={imageSrc} alt={`Press_Img${index + 1}`} />
                                </div>
                            ))}</li>

                        <Modal
                            open={open}
                            onClose={closeModal}
                            center
                            classNames={{
                                overlay: open ? 'modal-overlay-open' : 'modal-overlay-close',
                                modal: open ? 'modal-open' : 'modal-close',
                            }}
                        >
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage}
                                        alt="Large_Image"
                                        className="modal-image"
                                    />
                                </>
                            )}
                        </Modal>
                    </ul>
                </div>
                {/* -------- Module 2 -------- */}

                {/* -------- Module 3 -------- */}

                <div className="tab-pane fade" id="module3" role="tabpanel" aria-labelledby="module3-tab">
                <ul className="events-images">
                        <li>
                            {earthimages.map((imageSrc, index) => (
                                <div key={index} onClick={() => openModal(imageSrc)}>
                                    <img src={imageSrc} alt={`Press_Img${index + 1}`} />
                                </div>
                            ))}</li>

                        <Modal
                            open={open}
                            onClose={closeModal}
                            center
                            classNames={{
                                overlay: open ? 'modal-overlay-open' : 'modal-overlay-close',
                                modal: open ? 'modal-open' : 'modal-close',
                            }}
                        >
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage}
                                        alt="Large_Image"
                                        className="modal-image"
                                    />
                                </>
                            )}
                        </Modal>
                    </ul>
                </div>

                {/* -------- Module 3 -------- */}

                {/* -------- Module 4 -------- */}

                <div className="tab-pane fade" id="module4" role="tabpanel" aria-labelledby="module4-tab">
                <ul className="events-images">
                        <li>
                            {musicalimages.map((imageSrc, index) => (
                                <div key={index} onClick={() => openModal(imageSrc)}>
                                    <img src={imageSrc} alt={`Press_Img${index + 1}`} />
                                </div>
                            ))}</li>

                        <Modal
                            open={open}
                            onClose={closeModal}
                            center
                            classNames={{
                                overlay: open ? 'modal-overlay-open' : 'modal-overlay-close',
                                modal: open ? 'modal-open' : 'modal-close',
                            }}
                        >
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage}
                                        alt="Large_Image"
                                        className="modal-image"
                                    />
                                </>
                            )}
                        </Modal>
                    </ul>
                </div>

                {/* -------- Module 4 -------- */}

                {/* -------- Module 5 -------- */}

                <div className="tab-pane fade" id="module5" role="tabpanel" aria-labelledby="module5-tab">
                <ul className="events-images">
                        <li>
                            {independenceimages.map((imageSrc, index) => (
                                <div key={index} onClick={() => openModal(imageSrc)}>
                                    <img src={imageSrc} alt={`Press_Img${index + 1}`} />
                                </div>
                            ))}</li>

                        <Modal
                            open={open}
                            onClose={closeModal}
                            center
                            classNames={{
                                overlay: open ? 'modal-overlay-open' : 'modal-overlay-close',
                                modal: open ? 'modal-open' : 'modal-close',
                            }}
                        >
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage}
                                        alt="Large_Image"
                                        className="modal-image"
                                    />
                                </>
                            )}
                        </Modal>
                    </ul>
                </div>

                {/* -------- Module 5 -------- */}

                {/* -------- Module 6 -------- */}

                <div className="tab-pane fade" id="module6" role="tabpanel" aria-labelledby="module6-tab">
                <ul className="events-images">
                        <li>
                            {investitureimages.map((imageSrc, index) => (
                                <div key={index} onClick={() => openModal(imageSrc)}>
                                    <img src={imageSrc} alt={`Press_Img${index + 1}`} />
                                </div>
                            ))}</li>

                        <Modal
                            open={open}
                            onClose={closeModal}
                            center
                            classNames={{
                                overlay: open ? 'modal-overlay-open' : 'modal-overlay-close',
                                modal: open ? 'modal-open' : 'modal-close',
                            }}
                        >
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage}
                                        alt="Large_Image"
                                        className="modal-image"
                                    />
                                </>
                            )}
                        </Modal>
                    </ul>
                </div>

                {/* -------- Module 6 -------- */}

                {/* -------- Module 7 -------- */}

                <div className="tab-pane fade" id="module7" role="tabpanel" aria-labelledby="module7-tab">
                <ul className="events-images">
                        <li>
                            {koreanimages.map((imageSrc, index) => (
                                <div key={index} onClick={() => openModal(imageSrc)}>
                                    <img src={imageSrc} alt={`Press_Img${index + 1}`} />
                                </div>
                            ))}</li>

                        <Modal
                            open={open}
                            onClose={closeModal}
                            center
                            classNames={{
                                overlay: open ? 'modal-overlay-open' : 'modal-overlay-close',
                                modal: open ? 'modal-open' : 'modal-close',
                            }}
                        >
                            {selectedImage && (
                                <>
                                    <img
                                        src={selectedImage}
                                        alt="Large_Image"
                                        className="modal-image"
                                    />
                                </>
                            )}
                        </Modal>
                    </ul>
                </div>

                {/* -------- Module 7 -------- */}

            </div>
        </div>


    );
};

export default Gallery;
