import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'contactpage'}>

            {/* ----- Contact Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/contact.jpg" alt="Contact_Banner" />
            </section>

            {/* ----- Contact Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Contact Us</h2>
                        <p className="para-18">Our School is the Right Fit for Your Child. Please be in touch with us!</p>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- Contact Form ----- */}

            <section className="contact-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-detail">
                                <div className="detail-box">
                                    <img src="/icons/cur-img1.svg" alt="Cur_Img1" />
                                    <h4>Our Location</h4>
                                    <p className="para-18">Nagrota Bagwan, District Kangra, Himachal Pradesh, PIN - 176047</p>
                                </div>

                                <div className="detail-box">
                                    <img src="/icons/cur-img2.svg" alt="Cur_Img2" />
                                    <h4>Phone Number</h4>
                                    <p className="para-18">7807849222</p>
                                    <p className="para-18">01892-249222</p>
                                </div>

                                <div className="detail-box">
                                    <img src="icons/cur-img3.svg" alt="Cur_Img3" />
                                    <h4>Email Address</h4>
                                    <p className="para-18">rainbowschoolnagrota@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Contact Form ----- */}

            {/* ----- Map ----- */}

            <section className="map">
                <div className="container">
                    <div className="map-box">
                        <iframe
                            title="Map"
                            width="100%"
                            height="500"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27035.635037535547!2d76.378825!3d32.111029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b4c3310ece7df%3A0xeda7a0e8084c748c!2sRainbow%20International%20School!5e0!3m2!1sen!2sin!4v1683713103225!5m2!1sen!2sin"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


        </div>

    )
}


export default Contact