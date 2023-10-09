import React, { useEffect } from 'react';


function SpecialFeatures() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'specialfeaturespage'}>

            {/* ----- Activities Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/activities.jpg" alt="Activities_Banner" />
            </section>

            {/* ----- Activities Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Special Features</h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


            {/* ----- Why RIS ----- */}

            <section className="curriculum">
                <div className="container">
                    <div className="row curri">
                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn1.png" alt="Alumini_Icon1" />
                                    <h4>Mother Teacher Project</h4>
                                </div>
                                <p className="para-16">School is working on mother teacher project for the growth of academically week students.</p>
                                <p className="para-16">Every teacher has adopted two children and giving their extra hours to uplift their academic performance.</p>
                                <p className="para-16">Students are showing interest toward studies and their grades have also improved.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn2.png" alt="Alumini_Icon2" />
                                    <h4>i Help</h4>
                                </div>
                                <p className="para-16">Under this project each bright student is helping one weak student. They are helping them to improve their reading, writing and learning skills.</p>
                                <p className="para-16">Both seeker and donor are being appreciated in the school and donors are also awarded with the special I help badges.</p>
                                <p className="para-16">Habit of helping and cooperation has developed among the students.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn4.png" alt="Alumini_Icon4" />
                                    <h4>British Council</h4>
                                </div>
                                <p className="para-16">School has been accredited continuously with the International School award (ISA) by British council UK.</p>
                                <p className="para-16">School has played a pro active role in collaborating with other schools at International level.</p>
                                <p className="para-16">Several activities have been conducted and students are connected to foreign Schools through E-mail, video conferences etc.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn3.png" alt="Alumini_Icon3" />
                                    <h4>German Language</h4>
                                </div>
                                <p className="para-16">School has introduced German language to empower the students with the knowledge of the foreign language. School also organized German festival in order to exchange and experience German culture and enjoy some of the endless leisure with the teacher appointed from Austria.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn6.png" alt="Alumini_Icon6" />
                                    <h4>Doubt Clearance Classes</h4>
                                </div>
                                <p className="para-16">School is providing doubt clearance classes for XI and XII.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn7.png" alt="Alumini_Icon7" />
                                    <h4>Work Shops/Orientation for Students & Parents</h4>
                                </div>
                                <p className="para-16">School is organizing workshop on Robotics and Electronics every year for the students to nurture their scientific skills.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn8.png" alt="Alumini_Icon8" />
                                    <h4>Leader Within You</h4>
                                </div>
                                <p className="para-16">School is conducting various Career counselling programmes to guide and motivate the students by the experts of different fields.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Education Innovator Award</h4>
                                </div>
                                <p className="para-16">Honoured with education innovator award for generating and inducting innovative practices at “Ed Leadership International Programme 2015” held at Lucknow.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Day & Night Camp for Xi & Xii</h4>
                                </div>
                                <p className="para-16">School arranges special day and night camps during holidays so that students can devote extra hours for study along with some fun loving activities.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Teachers for enhancing Skills</h4>
                                </div>
                                <p className="para-16">School has appointed teachers for giving special training to the students to enhance their reading ,writing as well as orating skills like Declamation , Debate etc.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ----- Why RIS ----- */}




        </div>

    )
}


export default SpecialFeatures