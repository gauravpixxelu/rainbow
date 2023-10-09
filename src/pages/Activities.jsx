import React, { useEffect } from 'react';


function Activities() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'activitiespage'}>

            {/* ----- Activities Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/activities.jpg" alt="Activities_Banner" />
            </section>

            {/* ----- Activities Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Activities</h2>
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
                                    <img src="icons/alumini-icn5.png" alt="Alumini_Icon5" />
                                    <h4>Olympiads</h4>
                                </div>
                                <p className="para-16">School is conducting Olympiads on various subjects twice a year. OMR sheets are provided to the students to prepare them for the various competitive exams.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Rock Star Activity</h4>
                                </div>
                                <p className="para-16">This activity is exclusively for Nursery to 2nd students. They are free to showcase  their talents in school stage by sensing their aspirations hopes and desires.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Fun Day</h4>
                                </div>
                                <p className="para-16">The tiny tots are made aware of the things around them such as colors, fruits , birds by organizing field trips and other fun loving activities.</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Special Coaching In Sports</h4>
                                </div>
                                <p className="para-16">More than 200 students practice Table Tennis daily.</p>
                                <p className="para-16">Time Table has been framed in such a way so that students can take coaching in sports daily without hampering their studies.</p>
                                <p className="para-16">School is having the Art of State Academy in Table Tennis.</p>
                                <p className="para-16">School has the extension centre of Table tennis from the sports Authority of India (SAI).</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="curriculum-box alumini">
                                <div className="curriculum-box-hdng">
                                    <img src="icons/alumini-icn9.png" alt="Alumini_Icon9" />
                                    <h4>Special Coaching In Sports</h4>
                                </div>
                                <p className="para-16">Principal often organizing motivational and inspirational workshops on the topics such as” Whale Done”,” Personality Development”, “Time management” , ” I Can” etc. to enhance teaching as well as other skills of staff.</p>
                                <p className="para-16">Time to Time teachers are also organizing workshops related to their subject or about the experiences after attending different kinds of CBSE workshops.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ----- Why RIS ----- */}




        </div>

    )
}


export default Activities