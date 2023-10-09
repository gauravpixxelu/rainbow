import React, { useEffect } from 'react';

function Calender() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'calenderpage'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Calender </h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1770s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- PDF Calender ----- */}

            <section className="pdf-calender">
                <div className="container">
                    <embed src="pdf/calender.pdf" type="application/pdf" width="70%" height="1500px" />
                </div>
            </section>

            {/* ----- PDF Calender ----- */}

        </div>

    )
}


export default Calender