import React, { useEffect } from 'react';

function BritishCouncil() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'british-council-page'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">British Council</h2>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


            {/* ----- Overview ----- */}

            <section className="pdf-calender">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/british-1.pdf" type="application/pdf" width="100%" height="1000px" style={{ maxWidth: '100%' }} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/british-2.pdf" type="application/pdf" width="100%" height="1000px" style={{ maxWidth: '100%' }} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/british-3.pdf" type="application/pdf" width="100%" height="1000px" style={{ maxWidth: '100%' }} />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/british-4.pdf" type="application/pdf" width="100%" height="1000px" style={{ maxWidth: '100%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


        </div>

    )
}


export default BritishCouncil