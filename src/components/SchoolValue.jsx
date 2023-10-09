import React from 'react';
import Popup from './Popup';


const SchoolValue = () => {
    return (

        <>

            <div className="school-txt top">
                <div className="arrows start">
                    <img src="icons/vector.svg" alt="Vector" className="a1" />
                    <img src="icons/vector.svg" alt="Vector" className="a2" />
                    <img src="icons/vector.svg" alt="Vector" className="a3" />
                </div>
                <h3 className="hdng-h3 text-uppercase">Respect</h3>
                <h3 className="hdng-h3">Our Attitude</h3>
                <div className="arrows end">
                    <img src="icons/vector.svg" alt="Vector" className="a1" />
                    <img src="icons/vector.svg" alt="Vector" className="a2" />
                    <img src="icons/vector.svg" alt="Vector" className="a3" />
                </div>
            </div><div className="container">
                <div className="row">
                    <div className="col-md-6 school-box1">
                        <div className="school-hdng">
                            <h2 className="big-hdng">School Values</h2>
                        </div>
                    </div>

                    <div className="col-md-6 school-box2">
                        <div className="arrows start">
                            <img src="icons/vector.svg" alt="Vector" className="a1" />
                            <img src="icons/vector.svg" alt="Vector" className="a2" />
                            <img src="icons/vector.svg" alt="Vector" className="a3" />
                        </div>
                        <div className="school-txt">
                            <h3 className="hdng-h3 text-uppercase">Self Discipline</h3>
                            <h3 className="hdng-h3">Our Culture</h3>
                        </div>
                        <div className="arrows end">
                            <img src="icons/vector.svg" alt="Vector" className="a1" />
                            <img src="icons/vector.svg" alt="Vector" className="a2" />
                            <img src="icons/vector.svg" alt="Vector" className="a3" />
                        </div>
                    </div>

                    <div className="col-md-6 school-box3">
                        <div className="school-banner">
                            <img src="images/logo.jpg" alt="Logo" />
                            <p>“Be thou the Rainbow in the storms of life. The evening beams that smiles clouds away. and tints tomorrow with the prophetic ray.”</p>
                        </div>
                    </div>

                    <div className="col-md-6 school-box4">
                        <div className="school-video">
                            <img src="images/video-banner.jpg" alt="VideoBanner" />
                            <Popup />
                        </div>
                    </div>

                    <div className="col-md-6 school-box5">
                        <div className="arrows start">
                            <img src="icons/vector.svg" alt="Vector" className="a1" />
                            <img src="icons/vector.svg" alt="Vector" className="a2" />
                            <img src="icons/vector.svg" alt="Vector" className="a3" />
                        </div>
                        <div className="school-txt">
                            <h3 className="hdng-h3 text-uppercase">Learning</h3>
                            <h3 className="hdng-h3">Our Passion</h3>
                        </div>
                        <div className="arrows end">
                            <img src="icons/vector.svg" alt="Vector" className="a1" />
                            <img src="icons/vector.svg" alt="Vector" className="a2" />
                            <img src="icons/vector.svg" alt="Vector" className="a3" />
                        </div>
                    </div>

                    <div className="col-md-6 school-box6">
                        <div className="arrows start">
                            <img src="icons/vector.svg" alt="Vector" className="a1" />
                            <img src="icons/vector.svg" alt="Vector" className="a2" />
                            <img src="icons/vector.svg" alt="Vector" className="a3" />
                        </div>
                        <div className="school-txt">
                            <h3 className="hdng-h3 text-uppercase">Compassion</h3>
                            <h3 className="hdng-h3">Our Spirit</h3>
                        </div>
                        <div className="arrows end">
                            <img src="icons/vector.svg" alt="Vector" className="a1" />
                            <img src="icons/vector.svg" alt="Vector" className="a2" />
                            <img src="icons/vector.svg" alt="Vector" className="a3" />
                        </div>
                    </div>
                </div>
            </div><div className="school-txt bottom">
                <div className="arrows start">
                    <img src="icons/vector.svg" alt="Vector" className="a1" />
                    <img src="icons/vector.svg" alt="Vector" className="a2" />
                    <img src="icons/vector.svg" alt="Vector" className="a3" />
                </div>
                <h3 className="hdng-h3 text-uppercase">Honesty</h3>
                <h3 className="hdng-h3">Our Foundation</h3>
                <div className="arrows end">
                    <img src="icons/vector.svg" alt="Vector" className="a1" />
                    <img src="icons/vector.svg" alt="Vector" className="a2" />
                    <img src="icons/vector.svg" alt="Vector" className="a3" />
                </div>
            </div>

        </>


    );
};


export default SchoolValue;