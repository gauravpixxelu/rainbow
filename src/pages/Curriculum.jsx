import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Curriculum() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'curriculumpage'}>

            {/* ----- Curriculum Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/curriculum.jpg" alt="Curriculum_Banner" />
            </section>

            {/* ----- Curriculum Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Curriculum</h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}


            {/* ----- Curriculum ----- */}

            <section className="curriculum-block">
                <div className="container">
                    <div className="curriculum-cnt">
                        <h3 className="hdng-h3">Central Board of Secondary Education</h3>
                        <h2 className="hdng-h2 bord">CBSE (Central Board of Secondary Education)</h2>
                        <p className="para-18"><b>Rainbow International School, Nagrota is affiliated to The Central Board of Secondary Education.</b></p>
                        <p className="para-18">It is a Board of Education for public and private schools, under the Central Government of India. The board conducts final examinations every spring for All India Senior School Certificate Examination (AISSCE) for Class 10th and 12th.The board annually conducts the JEE and NEET exam for admission to undergraduate courses in engineering and medicine for numerous colleges spread all over India.</p>
                        <p className="para-18"><b>For more information about CBSE, <NavLink to="http://cbse.nic.in/" targert="_blank" >click here</NavLink> to visit website.</b></p>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="curri-txt">
                                <h2 className="hdng-h2">Delivery Mechanism</h2>
                                <ul>
                                    <li><img src="icons/checked.svg" alt="Checked" />Learning skills facilitated through Seminars, Group discussions, off campus visits, online support, interactive sessions etc.</li>
                                    <li><img src="icons/checked.svg" alt="Checked" />Real-world case studies, project making, field trips, live projects, demos, team presentations, tutorials, mock tests, film shows etc.</li>
                                    <li><img src="icons/checked.svg" alt="Checked" />Emphasis on enquiry and interactivity</li>
                                    <li><img src="icons/checked.svg" alt="Checked" />Diagnostic and remedial classes</li>
                                    <li><img src="icons/checked.svg" alt="Checked" />Individualized, or customized teaching-learning</li>
                                    <li><img src="icons/checked.svg" alt="Checked" />Study groups, role playing, skill workshops and SUPW activities</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="curri-txt">
                                <img src="images/mechanism.png" alt="Mechanism" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Curriculum ----- */}

        </div>


    )
}


export default Curriculum