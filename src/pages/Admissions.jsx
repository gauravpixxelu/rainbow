import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AdmissionForm from '../components/AdmissionForm';

function Admissions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'admissionpage'}>

            {/* ----- Admission Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/admission.jpg" alt="Admission_Banner" />
            </section>

            {/* ----- Admission Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Admission Process</h2>
                        <p className="para-18">We promised you that, we always try to take care of your childdren. Early child care is a very important and often overlooked compaonent of child development</p>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- Application Process ----- */}

            {/* <section className="process-app">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="process-box box-1">
                                <h3>01</h3>
                                <h4>Contact</h4>
                                <p className="para-18">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="process-box box-2">
                                <h3>02</h3>
                                <h4>Application</h4>
                                <p className="para-18">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                        <div className="col-md-3">

                            <div className="process-box box-3">
                                <h3>03</h3>
                                <h4>Counselling</h4>
                                <p className="para-18">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="process-box box-4">
                                <h3>04</h3>
                                <h4>Admission</h4>
                                <p className="para-18">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* ----- Application Process ----- */}

            {/* ----- Pre Application ----- */}

            {/* <section className="pre-app">
                <div className="container">
                    <div className="pre-app-box">
                        <div className="pre-app-hdng">
                            <h2 className="hdng-h2">Pre-Application Questions?</h2>
                            <p className="para-18">Write us for any Pre-Application questions</p>
                        </div>
                        <div className="pre-app-btn">
                            <NavLink className="custom-btn" to="/contact"><span>Contact Us</span></NavLink>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* ----- Pre Application ----- */}

            {/* ----- Admission Application ----- */}

            <section className="admission-gd">
                <div className="container">
                    <div className="admission-app-hdng">
                        {/* <h2 className="hdng-h2">Admission Application </h2>
                        <p className="para-18">we promised you that, we always try to take care of your childdren.</p> */}
                        <div className="adm-form">
                            <AdmissionForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Admission Application ----- */}


        </div>

    )
}


export default Admissions