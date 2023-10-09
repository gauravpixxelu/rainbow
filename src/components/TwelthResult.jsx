import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const prevArrow = (
    <img src="icons/arrow-left.svg" alt="Arrow_Left" />
);

const nextArrow = (
    <img src="icons/arrow-right.svg" alt="Arrow_Right" />
);


const TwelthResult = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        rows: 3,
        rowGap: 20,
        columnGap: 20,
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

        <>


<Slider {...settings}>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                        <div>
                            <img src="images/result-img1.png" alt="Result_Img1" />
                        </div>
                    </Slider>



        </>

    )
}


export default TwelthResult