import React, { useEffect } from 'react';

function Microsoft() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'microsoft-page'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Microsoft</h2>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


            {/* ----- Overview ----- */}

            <section className="pdf-calender">
                <div className="container">
                    <div className="row">
                         
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


        </div>

    )
}


export default Microsoft