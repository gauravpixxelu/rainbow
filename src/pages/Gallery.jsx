import React, { useEffect } from 'react';
import GalleryImg from '../components/GalleryImg';
import PressReview from '../components/PressReview';

function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'galleriespage'}>


            {/* ----- Gallery Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/gallery.jpg" alt="Gallery_Banner" />
            </section>

            {/* ----- Gallery Banner ----- */}


            {/* ----- Galleries Banner ----- */}

            <section className="gallery-block">
                <div className="container">
                    <GalleryImg />
                </div>
            </section>

            {/* ----- Galleries Banner ----- */}


            {/* ----- News ----- */}
            <section className="news">
                <div className="container">
                    <div className="news-hdng">
                        <h4 className="hdng-h4">News</h4>
                        <h2 className="hdng-h2">Latest Updates</h2>
                        <PressReview />
                    </div>                    
                </div>
            </section>
            {/* ----- News ----- */}


        </div>

    )
}


export default Gallery