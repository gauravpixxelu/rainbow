import React, { useEffect } from 'react';
import PressReview from '../components/PressReview';

function AcademicResources() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'academicspage'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Academic Resources</h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


            {/* ----- Why RIS ----- */}

            <section className="curriculum">
                <div className="container">
                    <div className="curriculum-hdng">
                        <h2 className="hdng-h2">Why Rainbow</h2>
                    </div>
                    <div className="row curri">
                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn1.png" alt="Alumini_Icon1" />
                                    <h4>Location</h4>
                                </div>
                                <p className="para-16">Located at Nagrota BagwanNearest Railway station-3Km Nearest Bus Stand-1Km Nearest Airport-20 Km Distance From Palampur-25 Km Dharamshala-20km Shahpur-25 km Kangra-15 km</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn2.png" alt="Alumini_Icon2" />
                                    <h4>Sports</h4>
                                </div>
                                <p className="para-16">Sports Authority of India Extension Centre For Table Tennis Cricket Coaching Centre approved by HPCA Gymnastics Archery Boxing Weight Lifting Basketball Volleyball Badminton Swimming Karate</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn3.png" alt="Alumini_Icon3" />
                                    <h4>German</h4>
                                </div>
                                <p className="para-16">German Language for class IV to IX German language Teacher Ms. Almut Herforth appointed for teaching German.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn4.png" alt="Alumini_Icon4" />
                                    <h4>International Exchange Programmes</h4>
                                </div>
                                <p className="para-16">Connecting Classrooms through British Council Accreditation of International School Award Twice by the British Council. Students educational trip to U.K. Principal visit to Singapore and Germany to enhance professional excellence.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn5.png" alt="Alumini_Icon5" />
                                    <h4>Atal Tinkering Lab</h4>
                                </div>
                                <p className="para-16">First Private school in Distt Kangra to establish Atal Tinkering lab. Selected to participate in the international Robotronics Competition to be held in London 2020.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn6.png" alt="Alumini_Icon6" />
                                    <h4>Safety</h4>
                                </div>
                                <p className="para-16">24X7CCTV surveillance for complete campus security.</p>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn7.png" alt="Alumini_Icon7" />
                                    <h4>Health Care</h4>
                                </div>
                                <p className="para-16">Infirmary with qualified nurse Adequate stock of Medicine</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn8.png" alt="Alumini_Icon8" />
                                    <h4>Placements</h4>
                                </div>
                                <p className="para-16">Alumni are pursuing their future studies in various Govt .Medical and Engineering colleges and top universities of India.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Transportation</h4>
                                </div>
                                <p className="para-16">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* ----- Why RIS ----- */}


            {/* ----- Press Review ----- */}

            <section className="press-review">
                <div className="container">
                    <div className="press-hdng">
                        <h2 className="hdng-h2">Press Reviews</h2>
                    </div>
                    <PressReview />
                </div>
            </section>

            {/* ----- Press Review ----- */}


        </div>

    )
}


export default AcademicResources