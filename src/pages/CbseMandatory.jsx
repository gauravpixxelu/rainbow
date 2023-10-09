import React, { useEffect } from 'react';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function CbseMandatory() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'cbsemandatorypage'}>


            {/* ----- Cbse Mandatory Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Cbse Mandatory Banner ----- */}

            {/* ----- OverView ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Cbse Mandatory Disclosure </h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1770s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- OverView ----- */}

            {/* ----- Cbse Mandatory ----- */}

            <section className="disclosure">
                <div className="container">
                    <div className="mandatory-box">
                        <div className="disclosure-box">
                            <h3 className="hdng-h3">General Information: </h3>
                            <ul>
                                <li>Name of School: <span>Rainbow International School</span></li>
                                <li>Address: <span>Nagrota Bagwan, Distt.Kangra, H.P</span></li>
                                <li>Phone Number: <span>01892-249222, 7807849222</span></li>
                                <li>E-mail: <span>rainbowschoolnagrota@gmail.com</span></li>
                                <li>Website: <span>risnagrota.com</span></li>
                                <li>Year of Establishment: <span>2002</span></li>
                                <li>Affiliation: <span>CBSE up to 10+2</span></li>
                                <li>Affiliation Number: <span>630097</span></li>
                                <li>School Code: <span>43089</span></li>
                                <li>Year of Affiliation: <span>2003</span></li>
                                <li>School Strength: <span>2067</span></li>
                                <li>Director: <span>Dr. J.R.Kashyap</span></li>
                                <li>Principal: <span>Dr.Chhavi Kashyap</span></li>
                            </ul>
                        </div>

                        <div className="disclosure-box">
                            <h3 className="hdng-h3">Exclusive Features: </h3>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Rainbow Sports Complex.</li>
                                <li><FontAwesomeIcon icon={faGem} />Khelo India Residential Academy of Weightlifting accredited on 7th Oct, 2020.</li>
                                <li><FontAwesomeIcon icon={faGem} />Khelo India Residential Academy of Table Tennis accredited on 7th Oct, 2020.</li>
                                <li><FontAwesomeIcon icon={faGem} />A well equipped Atal Tinkering Lab under Atal Innovation Mission, Niti Aayog, Govt. of India since 2017.</li>
                                <li><FontAwesomeIcon icon={faGem} />Got the title of Best Lab in Himachal Pradesh.</li>
                                <li><FontAwesomeIcon icon={faGem} />Teaching of German language.</li>
                                <li><FontAwesomeIcon icon={faGem} />HPCA Cricket Sub Centre.</li>
                                <li><FontAwesomeIcon icon={faGem} />Microsoft online Teaching and Learning.</li>
                                <li><FontAwesomeIcon icon={faGem} />Coding, Python and AI embedded in School Curriculum.</li>
                            </ul>
                        </div>

                        <div className="disclosure-box">
                            <h3 className="hdng-h3">Exclusive Achievements: </h3>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />100% CBSE Results from consecutively fifteen years.</li>
                                <li><FontAwesomeIcon icon={faGem} />Winners of overall trophy of Children Science Congress.</li>
                                <li><FontAwesomeIcon icon={faGem} />Winners of Bharat Ko Jano State Level Quiz Competition.</li>
                                <li><FontAwesomeIcon icon={faGem} />Three Students selected by NITI AAYOG- Govt. of India to attend world’s largest Science fair in U.S.A.</li>
                                <li><FontAwesomeIcon icon={faGem} />5th Position at IRC league 10 held at Thyag Raj Stadium New Delhi, and selected for International league to be held in London.</li>
                                <li><FontAwesomeIcon icon={faGem} />Winner of National award for Best Presentation in International Robotronics Competition.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbowites girls team excelled in the field of  Gymnastics and won Bronze Medal at National Level.</li>
                                <li><FontAwesomeIcon icon={faGem} />Conferred with the International School Award twice by the British Council.</li>
                                <li><FontAwesomeIcon icon={faGem} />Conferred with Microsoft Aspire School Programme.</li>
                                <li><FontAwesomeIcon icon={faGem} />Projected as Microsoft Showcase School 2021-22.</li>
                                <li><FontAwesomeIcon icon={faGem} />Selection of Students in various Govt Medical, Engineering and IT Institutes.</li>
                                <li><FontAwesomeIcon icon={faGem} />Two students represent State in Epic India Quiz Challenge at Mumbai.</li>
                                <li><FontAwesomeIcon icon={faGem} />Two students showcased Prototype which were selected among top 10 projects to Hon’ble Prime Minister of India Sh.Narender Modi and President of Russia Mr. Vladimir Putin.</li>
                                <li><FontAwesomeIcon icon={faGem} />The School has been selected as the resource centre and head office of Anveshika laboratories of HIM IAPT. (Indian Association of Physics Teachers).</li>
                                <li><FontAwesomeIcon icon={faGem} />Establishment of Raimbow Sky Observatory which is the first  School observatory of Himachal Pradesh.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Cbse Disclosure ----- */}

        </div>

    )
}


export default CbseMandatory