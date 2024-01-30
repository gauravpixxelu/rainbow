import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const prevArrow = (
  <img src="icons/arrow-left.svg" alt="Arrow_Left" />
);

const nextArrow = (
  <img src="icons/arrow-right.svg" alt="Arrow_Right" />
);

const PressReview = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    rows: 2,
    rowGap: 20,
    columnGap: 10,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
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


  const images = [
    "images/press-images/press-img50.jpg",
    "images/press-images/press-img51.jpg",
    "images/press-images/press-img46.jpg",
    "images/press-images/press-img47.jpg",
    "images/press-images/press-img48.jpg",
    "images/press-images/press-img49.jpg",
    "images/press-images/press-img41.jpg",
    "images/press-images/press-img42.jpg",
    "images/press-images/press-img43.jpg",
    "images/press-images/press-img44.jpg",
    "images/press-images/press-img45.jpg",
    "images/press-images/k-o-1.jpg",
    "images/press-images/k-o-2.jpg",
    "images/press-images/k-o-3.jpg",
    "images/press-images/k-o-4.jpg",
    "images/press-images/press-img1.jpg",
    "images/press-images/press-img2.jpg",
    "images/press-images/press-img3.jpg",
    "images/press-images/press-img4.jpg",
    "images/press-images/press-img5.jpg",
    "images/press-images/press-img6.jpg",
    "images/press-images/press-img7.jpg",
    "images/press-images/press-img8.jpg",
    "images/press-images/press-img9.jpg",
    "images/press-images/press-img10.jpg",
    "images/press-images/press-img11.jpg",
    "images/press-images/press-img12.jpg",
    "images/press-images/press-img13.jpg",
    "images/press-images/press-img14.jpg",
    "images/press-images/press-img15.jpg",
    "images/press-images/press-img16.jpg",
    "images/press-images/press-img17.jpg",
    "images/press-images/press-img18.jpg",
    "images/press-images/press-img19.jpg",
    "images/press-images/press-img20.jpg",
    "images/press-images/press-img21.jpg",
    "images/press-images/press-img22.jpg",
    "images/press-images/press-img23.jpg",
    "images/press-images/press-img24.jpg",
    "images/press-images/press-img25.jpg",
    "images/press-images/press-img26.jpg",
    "images/press-images/press-img27.jpg",
    "images/press-images/press-img28.jpg",
    "images/press-images/press-img29.jpg",
    "images/press-images/press-img30.jpg",
    "images/press-images/press-img31.jpg",
    "images/press-images/press-img32.jpg",
    "images/press-images/press-img33.jpg",
    "images/press-images/press-img34.jpg",
    "images/press-images/press-img35.jpg",
    "images/press-images/press-img36.jpg",
    "images/press-images/press-img37.jpg",
    "images/press-images/press-img38.jpg",
    "images/press-images/press-img39.jpg",
    "images/press-images/press-img40.jpg",
    
  ];

  return (
    <>
      <Slider {...settings}>
        {images.map((imageSrc, index) => (
          <div key={index} onClick={() => openModal(imageSrc)}>
            <img src={imageSrc} alt={`Press_Img${index + 1}`} />
          </div>
        ))}
      </Slider>

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
    </>
  );
};

export default PressReview;
