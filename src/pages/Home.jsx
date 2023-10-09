import React, { useEffect } from 'react';
import Testimonial from '../components/Testimonial';
import ActivitySlider from '../components/ActivitySlider';
import BannerSlider from '../components/BannerSlider';
import GalleryImg from '../components/GalleryImg';
import AwardsSlider from '../components/AwardsSlider';
import SchoolValue from '../components/SchoolValue';
import SurveySlider from '../components/SurveySlider';
import ProgressBar from "@ramonak/react-progress-bar";
import PressReview from '../components/PressReview';
// import { lazy, Suspense } from 'react';
// import { LazyLoadComponent } from 'react-lazy-load-image-component';
// const LazyYouTube = lazy(() => import('react-youtube'));

function Home() {
    useEffect(() => {
        document.body.classList.add('home')
        return () => {
            document.body.classList.remove('home')
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <div className={'homepage'}>

            {/* ----- Banner Slider ----- */}

            <section className="banner-slider">
                <BannerSlider />
            </section>

            {/* ----- Banner Slider ----- */}


            {/* ----- Activity ----- */}

            <section className="activiteis">
                <div className="container">
                    <div className="activity-hdng">
                        <h2 className="hdng-h2">Myriad Colours of Rainbow </h2>
                    </div>
                    <div className="activity-slider">
                        <ActivitySlider />
                    </div>
                </div>
                <img src="images/bg-activity.jpg" alt="Bg_Activity" />
            </section>

            {/* ----- Activity ----- */}


            {/* ----- Who We Are ----- */}

            <section className="who-we-are">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="who-txt">
                                <div className="who-txt-block">
                                    <h2 className="big-hdng">Who we are</h2>
                                    <p className="para-18"><b>RAINBOW INTERNATIONAL SCHOOL, NAGROTA is one of the best Schools in Himachal Pradesh, providing the highest quality and truly international standards of education.</b></p>
                                    <p className="para-16">RIS holds firm in its belief that students do their best and teaching becomes productive when research is underlined as a criteria for scholarship, systematically guided by dedicated and quality teaching.</p>
                                </div>

                                <div className="marquee">
                                    <div className="marquee__inner">
                                        <span>Rainbow International School</span>
                                        <span>Rainbow International School</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="vision-txt-block">
                                        <h5 className="hdng-h5">Vision</h5>
                                        <p className="para-18"><b>Every Rainbowite a “LEADER”</b></p>
                                        <p className="para-16">We shall strive hard to realize our motto “Honest Labor Pays”. Our aim is to unlock the talent and enterprise of all our young people. </p>
                                        <img src="images/binoculars.svg" alt="Binoculars" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="vision-img-block">
                                        <img src="images/vision.png" alt="Vision" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mission-txt-block">
                                        <h5 className="hdng-h5">Mission</h5>
                                        <p className="para-18">To nurture multitalented and multitasking future leaders with deep rooted system</p>
                                        <img src="images/mission.svg" alt="Mission" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Who We Are ----- */}


            {/* ----- School ----- */}

            <section className="school">
                <SchoolValue />
            </section>

            {/* ----- School ----- */}


            {/* ----- Awards ----- */}

            <section className="awards">
                <div className="container">
                    <div className="awards-hdng">
                        <h2 className="hdng-h2">Rainbow Alumni</h2>
                    </div>
                    <div className="awards-slider">
                        <AwardsSlider />
                    </div>
                </div>
            </section>

            {/* ----- Awards ----- */}

            {/* ----- Events ----- */}

            <section className="gallory">
                <div className="container">
                    <div className="news-hdng">
                        <h4 className="hdng-h4">Latest Events</h4>
                        <h2 className="hdng-h2">Explore</h2>
                    </div>

                    <div className="gallery-event">
                        <GalleryImg />
                    </div>
                </div>
            </section>

            {/* ----- Events ----- */}

            {/* ----- Block ----- */}

            <section className="news facts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="results">
                                <h5 className="hdng-h5">Exceptional Academic Results</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="box-result">
                                            <h4>CBSE 10 <span>2023</span></h4>
                                            <div className="progrees-box">
                                                <p className="para-18">85.8%</p>
                                                <p className="para-16">School Average</p>
                                                <ProgressBar completed={85.8} bgColor="#FC6604" animateOnRender={true} />
                                            </div>
                                            <div className="progrees-box">
                                                <p className="para-18">99%</p>
                                                <p className="para-16">Highest score</p>
                                                <ProgressBar completed={99} bgColor="#FC6604" animateOnRender={true} />
                                            </div>
                                            <div className="progrees-box">
                                                <p className="para-18">46%</p>
                                                <p className="para-16">Students scoring above 90%</p>
                                                <ProgressBar completed={46} bgColor="#FC6604" animateOnRender={true} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="box-result">
                                            <h4>CBSE 12 <span>2023</span></h4>
                                            <div className="progrees-box">
                                                <p className="para-18">85.8%</p>
                                                <p className="para-16">School Average</p>
                                                <ProgressBar completed={85.8} bgColor="#FC6604" animateOnRender={true} />
                                            </div>
                                            <div className="progrees-box">
                                                <p className="para-18">99%</p>
                                                <p className="para-16">Highest score</p>
                                                <ProgressBar completed={99} bgColor="#FC6604" animateOnRender={true} />
                                            </div>
                                            <div className="progrees-box">
                                                <p className="para-18">46%</p>
                                                <p className="para-16">Students scoring above 90%</p>
                                                <ProgressBar completed={46} bgColor="#FC6604" animateOnRender={true} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="results">
                                <h5 className="hdng-h5">Parents Satisfaction Survey</h5>
                                <SurveySlider />
                                <ul className="survey">
                                    <li>NS <span>( Not Satisfied )</span></li>
                                    <li>MS <span>( Moderately Satisfied )</span></li>
                                    <li>ES <span>( Extremely Satisfied )</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Block ----- */}


            {/* ----- Testimonials ----- */}

            <section className="awards testimonials">
                <div className="container">
                    <div className="awards-hdng">
                        <h2 className="hdng-h2">What parents think about school!</h2>
                    </div>
                    <div className="testimonial-slider">
                        <Testimonial />
                    </div>
                </div>
            </section>

            {/* ----- Testimonials ----- */}


            {/* ----- News ----- */}
            <section className="news">
                <div className="container">
                    <div className="news-hdng">
                        <h4 className="hdng-h4">News</h4>
                        <h2 className="hdng-h2">Latest Updates</h2>
                        <PressReview />
                    </div>
                </div>
            </section>
            {/* ----- News ----- */}


            {/* ----- BG ----- */}

            {/* <section className="bg-down">
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyLoadComponent>
                        <LazyYouTube
                            videoId="MJ6KWKohGuI"
                            muted
                            opts={{
                                width: '100%',
                                height: '700',
                                playerVars: {
                                    autoplay: 1,
                                    loop: 1,
                                    mute: 1,
                                },
                            }}
                        />
                    </LazyLoadComponent>
                </Suspense>
            </section> */}


            {/* ----- BG ----- */}

        </div>

    )
}


export default Home
