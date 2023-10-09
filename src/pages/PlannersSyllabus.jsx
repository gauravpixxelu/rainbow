import React, { useEffect } from 'react';

function PlannersSyllabus() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'plannerspage'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Planners of Syllabus (Session 2023-24)</h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1770s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
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
                                <embed src="pdf/nursery.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class Nursery</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/lkg.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class LKG</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/ukg.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class UKG</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-1.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 1</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-2.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 2</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-3.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 3</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-4.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 4</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-5.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 5</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-6.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 6</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-7.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 7</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-8.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 8</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-9.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 9</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-10.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 10</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-11.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 11</h4>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="pdf-content">
                                <embed src="pdf/class-12.pdf" type="application/pdf" width="100%" height="1000px" />
                                <h4>Class 12</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- PDF Calender ----- */}

        </div>

    )
}


export default PlannersSyllabus