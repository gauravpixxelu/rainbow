import React, { useEffect } from 'react';

function HouseSystem() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'housepage'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">House System </h2>
                        <p className="para-18">Rainbow international school offers a high level of pastoral care through House system. The House also provides the day-to-day framework of discipline and respect for others. Although there are school rules which must be adhered to, just as important is our pro-active system of commendation and reward. Students are encouraged to act with consideration, self-discipline and social awareness.</p>
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}



            {/* ----- School Houses ----- */}

            <section className="school-houses">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="houses-box">
                                <img src="images/houses-img1.jpg" alt="Houses_Img1" />
                                <h5 className="hdng-h5">Emerald House</h5>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="houses-box">
                                <img src="images/houses-img2.jpg" alt="Houses_Img2" />
                                <h5 className="hdng-h5">Garnet House</h5>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="houses-box">
                                <img src="images/houses-img3.jpg" alt="Houses_Img2" />
                                <h5 className="hdng-h5">Morganite House</h5>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="houses-box">
                                <img src="images/houses-img4.jpg" alt="Houses_Img4" />
                                <h5 className="hdng-h5">Sapphire House</h5>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ----- School Houses ----- */}





        </div>

    )
}


export default HouseSystem