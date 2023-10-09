import React, { useEffect } from 'react';

function Datesheets() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'datesheetspage'}>

            {/* ----- Datesheets Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/alumni.jpg" alt="Result_Banner" />
            </section>

            {/* ----- Datesheets Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Datesheets</h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


            {/* ----- PDF Calender ----- */}

            <section className="pdf-calender">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/periodic-test.pdf" type="application/pdf" width="100%" height="1000px" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/term-datesheet.pdf" type="application/pdf" width="100%" height="1000px" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- PDF Calender ----- */}


        </div>

    )
}


export default Datesheets