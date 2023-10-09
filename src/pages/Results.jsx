import React, { useEffect } from 'react';

function Results() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'resultspage'}>

            {/* ----- Results Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/result.jpg" alt="Result_Banner" />
            </section>

            {/* ----- Results Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Results</h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- 10th Results ----- */}

            <section className="results">
                <div className="container">
                    <div className="tenth-result">
                    <h2 className="hdng-h2">Session 2022-23 Results</h2>
                        <div className="pdf-content">
                            <embed src="pdf/results-2023.pdf" type="application/pdf" width="60%" height="1000px" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- 10th Results ----- */}

            {/* ----- 12th Results ----- */}

            <section className="results results-bg">
                <div className="container">
                    <div className="twelth-result">
                        <h2 className="hdng-h2">Session 2021-22 Results</h2>
                        <div className="pdf-content">
                            <embed src="pdf/results-2022.pdf" type="application/pdf" width="60%" height="1000px" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- 12th Results ----- */}

        </div>

    )
}


export default Results