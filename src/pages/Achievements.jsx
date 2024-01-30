import React, { useEffect } from 'react';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Achievements() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <div className={'acheviementspage'}>


            {/* ----- Academics Banner ----- */}

            <section className="academics-banner">
                <img src="images/banner-images/academics-banner.jpg" alt="Academics_Banner" />
            </section>

            {/* ----- Academics Banner ----- */}

            {/* ----- Overview ----- */}

            <section className="overview">
                <div className="container">
                    <div className="overview-box">
                        <h2 className="hdng-h2">Achievements</h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1770s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- Achevemets ----- */}

            <section className="acheviement-session">
                <div className="container">
                    <div className="acheviement-session-block">
                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2002-2003</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Foundation Year Of RIS.</li>
                                <li><FontAwesomeIcon icon={faGem} />Starting Of School With 100 Students (Classes NUR-VII)</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2003-2004</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />First Annual Function –A Great Success</li>
                                <li><FontAwesomeIcon icon={faGem} />Furnishing of School Building</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2004-2005</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Introduced Pre Nur</li>
                                <li><FontAwesomeIcon icon={faGem} />Cbse Affiliation Upto X</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2005-2006</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Class x first batch</li>
                                <li><FontAwesomeIcon icon={faGem} />‘Sparkle’ the first edition of school news letter released</li>
                                <li><FontAwesomeIcon icon={faGem} />Establishbment of science labs</li>
                                <li><FontAwesomeIcon icon={faGem} />First time distt level winner of table tennis and selected </li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2006-2007</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Cbse affiliation upto xii</li>
                                <li><FontAwesomeIcon icon={faGem} />100% X class board result</li>
                                <li><FontAwesomeIcon icon={faGem} />2nd annual function</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2007-2008</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />‘Shiksha Purskar’ conferred to principal dr chhavi kashyap by honble cm ‘Raja Virbhadra Singh’</li>
                                <li><FontAwesomeIcon icon={faGem} />4th position at national level athletic meet haridwar</li>
                                <li><FontAwesomeIcon icon={faGem} />Principal attended workshop at IIM Ahmedabad</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2008-2009</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />350 admissions</li>
                                <li><FontAwesomeIcon icon={faGem} />100% result of class xii</li>
                                <li><FontAwesomeIcon icon={faGem} />Scout and Guide started</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2009-2010</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />2 teachers got national teacher award</li>
                                <li><FontAwesomeIcon icon={faGem} />Principal honoured with state teacher award conferred by delhi CM</li>
                                <li><FontAwesomeIcon icon={faGem} />Introduced NCC</li>
                                <li><FontAwesomeIcon icon={faGem} />Fully equipped tt hall with 12 tables</li>
                                <li><FontAwesomeIcon icon={faGem} />National level representation at ‘Bharat Ko Jano’ quiz competition</li>
                                <li><FontAwesomeIcon icon={faGem} />School conducted first science fair</li>
                                <li><FontAwesomeIcon icon={faGem} />National level 4th position in T.T</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2010-2011</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Toy Train and other facilities at pre primary wing</li>
                                <li><FontAwesomeIcon icon={faGem} />3rd position at national level sanskrit group song competition</li>
                                <li><FontAwesomeIcon icon={faGem} />Table Tennis hall got robot machine and become the state of the art academy</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2011-12</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Smart classrooms with plasma</li>
                                <li><FontAwesomeIcon icon={faGem} />Participation of kshitiz gill in republic day prade new delhi</li>
                                <li><FontAwesomeIcon icon={faGem} />Construction of new building</li>
                                <li><FontAwesomeIcon icon={faGem} />Winner of bharat ko jano state level quiz</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2012-2013</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Shama Guleria participated in republic day parade in new delhi</li>
                                <li><FontAwesomeIcon icon={faGem} />School strength reached 2000</li>
                                <li><FontAwesomeIcon icon={faGem} />2nd computer lab in new building</li>
                                <li><FontAwesomeIcon icon={faGem} />Selection at state level in children sci congress</li>
                                <li><FontAwesomeIcon icon={faGem} />Gymnastic hall and gymnastic classes</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2013-2014</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Pioneer in international exposure, got isa award</li>
                                <li><FontAwesomeIcon icon={faGem} />Cbse national level T.T participation</li>
                                <li><FontAwesomeIcon icon={faGem} />Winner of PYKA tournament</li>
                                <li><FontAwesomeIcon icon={faGem} />A new generation school tag line by cbse</li>
                                <li><FontAwesomeIcon icon={faGem} />National level management fest himspark –a clean sweap by rainbowities</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2014-2015</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />NIT fee software</li>
                                <li><FontAwesomeIcon icon={faGem} />CCTV cameras in school campus</li>
                                <li><FontAwesomeIcon icon={faGem} />Ist position in skit at children science congress in state</li>
                                <li><FontAwesomeIcon icon={faGem} />National level participation in gymnastic</li>
                                <li><FontAwesomeIcon icon={faGem} />National level painting competition surbhi got 2nd prize</li>
                                <li><FontAwesomeIcon icon={faGem} />Classical vocal state level competition-1st position (Rajat & Tanvi)</li>
                                <li><FontAwesomeIcon icon={faGem} />More than 500 models exhibited in grana sci fair</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2015-2016</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Extramarks software</li>
                                <li><FontAwesomeIcon icon={faGem} />Mrs. Meenakshi kashyap got innovation award in lucknow</li>
                                <li><FontAwesomeIcon icon={faGem} />Kartik vats participation in republic day parade in new delhi</li>
                                <li><FontAwesomeIcon icon={faGem} />Rohit Rana national kabbadi player visited as a chief guest in school function</li>
                                <li><FontAwesomeIcon icon={faGem} />Pooja Prashar as a best athlete</li>
                                <li><FontAwesomeIcon icon={faGem} />Introduction of German language</li>
                                <li><FontAwesomeIcon icon={faGem} />Workshop - Electronica 4 you</li>
                                <li><FontAwesomeIcon icon={faGem} />Workshop - Robotics</li>
                                <li><FontAwesomeIcon icon={faGem} />Scholorships award for meritorios students (Sports & Academic)</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2016-2017</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Naina and Augustay jamwal visit in school.</li>
                                <li><FontAwesomeIcon icon={faGem} />Permission to open atal tinkering lab by niti aayog.</li>
                                <li><FontAwesomeIcon icon={faGem} />Yashika dhadwal first position in state level children science congress honoured by C.M.</li>
                                <li><FontAwesomeIcon icon={faGem} />Permission to open atal tinkering lab by niti aayog.</li>
                                <li><FontAwesomeIcon icon={faGem} />28 students of x class got 10 CGPA. First time in the history of distt kangra.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbow in tv cnbc awaz pehla kadam. Tv channel cnbc awaaz has recorded their show pehla kadam on financial literacy with the xi & xii students of commerce stream.</li>
                                <li><FontAwesomeIcon icon={faGem} />Sai open its extension centre of table tennis.</li>
                                <li><FontAwesomeIcon icon={faGem} />Paras kohli as a fastest runner up.</li>
                                <li><FontAwesomeIcon icon={faGem} />Annual function- honour ceremony of alumni’s.</li>
                                <li><FontAwesomeIcon icon={faGem} />German carnival.</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2017-2018</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Principal visit to singapore in international principals workshop</li>
                                <li><FontAwesomeIcon icon={faGem} />Opening of atal tinkering lab under niti aayog by govt of india.</li>
                                <li><FontAwesomeIcon icon={faGem} />Intel isef usa -3 students visited at los angelec and makers fair in san francisco.</li>
                                <li><FontAwesomeIcon icon={faGem} />State level winner of csc in quiz</li>
                                <li><FontAwesomeIcon icon={faGem} />State level winner of ‘Bharat Ko Jano' quiz </li>
                                <li><FontAwesomeIcon icon={faGem} />Silver medal in U-17 boxing championship at dehradun.</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2018-2019</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />State Level winner in Vidyarthi Vigyan Manthan. 4 Students participated at National Level held in Mumbai</li>
                                <li><FontAwesomeIcon icon={faGem} />Fantabulous Result of X and XII.</li>
                                <li><FontAwesomeIcon icon={faGem} />X-15 students scored more than 90%. Highest score is 96.4%</li>
                                <li><FontAwesomeIcon icon={faGem} />XII- Highest score Surbhi 96 %</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbow innovators attended Boot Camp organized by NITI AAYOG</li>
                                <li><FontAwesomeIcon icon={faGem} />Won Silver and Bronze at International Level Basketball Championship at kolampur Malaysia</li>
                                <li><FontAwesomeIcon icon={faGem} />Winner at International Level by creating Robot  without wheels.(Rajveer)</li>
                                <li><FontAwesomeIcon icon={faGem} />Manat and Devanshi met with  PM of India and President of Russia in Indo Russian meet</li>
                                <li><FontAwesomeIcon icon={faGem} />Won International Robotronics Competition at selected for National</li>
                                <li><FontAwesomeIcon icon={faGem} />Ist  position in 26th state Level Children Science Congress</li>
                                <li><FontAwesomeIcon icon={faGem} />ATL students attended fifteen days internship Camp at IBM Bangalore</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbowites attended International Science Festival- 2018</li>
                                <li><FontAwesomeIcon icon={faGem} />Girls Team excelled in Gymnastics and won silver medal at National Level</li>
                                <li><FontAwesomeIcon icon={faGem} />Srijan Sharma won state Level Boxing Championship and after giving best performance in National ,selected for Khelo India</li>
                                <li><FontAwesomeIcon icon={faGem} />Ashima excelled at State Level Under-19 Badminton Tournament.</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2019-2020</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Level-2 space olympiad first  position.</li>
                                <li><FontAwesomeIcon icon={faGem} />Ist position in inter school quiz competition organised by state department of animal husbandry.</li>
                                <li><FontAwesomeIcon icon={faGem} />100% result of x and xii with highest score of 96%.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbowite tushar got 20th rank at international level in national aeronautics space olympiad organised by nasa, usa.</li>
                                <li><FontAwesomeIcon icon={faGem} />Atl lab was appreciated as the best lab in north india.</li>
                                <li><FontAwesomeIcon icon={faGem} />German event “Namaste Himachal” organised in school.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbowites shine at connexus-19 annual fest at rpgmc tanda.</li>
                                <li><FontAwesomeIcon icon={faGem} />One day “awareness programme on skill education “ organised by vocational education cell, cbse, new delh conducted by dr. Biswajit  saha, director skill education and training cbse. </li>
                                <li><FontAwesomeIcon icon={faGem} />Five students state level winner in himotkarsh scholarship exam .</li>
                                <li><FontAwesomeIcon icon={faGem} />India quiz shooting by epic channel in which two rainbowites daivik kashyap and anmol mishra were selected to participate and this was telecast in epic channel .</li>
                                <li><FontAwesomeIcon icon={faGem} />Inter school english olympiad was organised by english literary rainbowites.</li>
                                <li><FontAwesomeIcon icon={faGem} />First position in “inter school debate competition” organised by dainik jagran sanskarshala at “Scholar International School, Ghurkari”.</li>
                                <li><FontAwesomeIcon icon={faGem} />First runner up in “Explorica 2019” held  at dronacharya college rait.</li>
                                <li><FontAwesomeIcon icon={faGem} />Principal’s educational trip to germany.</li>
                                <li><FontAwesomeIcon icon={faGem} />International  robotics competition at thyag raj stadium new delhi.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbowites gymnasts shines at sub- junior state gymnastics championship.</li>
                                <li><FontAwesomeIcon icon={faGem} />Nishita sharma awarded as a best commander of nss platoon in rd parade shimla.</li>
                                <li><FontAwesomeIcon icon={faGem} />Cbse – intel ai-thon workshop organized by cbse in collaboration with intel</li>
                                <li><FontAwesomeIcon icon={faGem} />Governer award ‘rajya puraskaar’ to paras thakur and piyush sharma.</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2020-2021</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />Crucial period of covid 19 and lockdown.</li>
                                <li><FontAwesomeIcon icon={faGem} />Online virtual classes through Microsoft.</li>
                                <li><FontAwesomeIcon icon={faGem} />500 face shield made in Rainbow ATL accorded by principal Dr. Chhavi Kashyap to SDM nagrota for the corona warriors.</li>
                                <li><FontAwesomeIcon icon={faGem} />Great contribution to socity . Automatic hand senitizer machine , low cost disinfactant machine, low cost hand wash machine—A selfless service to socity.</li>
                                <li><FontAwesomeIcon icon={faGem} />100%  CBSE Result of class 12th. Four students above 95%, nineteen students above 90%, in class 10th board highest score is 97%, 32 students above 90%.</li>
                                <li><FontAwesomeIcon icon={faGem} />Virtual reality and augmented reality in teaching learning process.</li>
                                <li><FontAwesomeIcon icon={faGem} />Miss Shehnaz selected as “Regional Teacher of Change selected among 101 teachers from all over india ”Playing and extraordinary role in catering young innovative minds of HP with coordination of NITI AAYOG.</li>
                                <li><FontAwesomeIcon icon={faGem} />School become a certified “MICROSOFT ASPIRE SCHOOL PROGRAMME INSTITUTE “</li>
                                <li><FontAwesomeIcon icon={faGem} />Online annual function 2020 “  KHUSHI “. 80 Students participated in different items.</li>
                                <li><FontAwesomeIcon icon={faGem} />Different functions and festivals held at online mode.</li>
                                <li><FontAwesomeIcon icon={faGem} />Exemplary performance of Rainboiwites at state level “HIMOTKARSH SCHOLORSHIP EXAM”.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbowites shines at german event “NAMASTEY EUROPE”.</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2021-2022</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />"LEAD" Leaders in Education And Analytical Development.Interschool competition between RIS and RWS.</li>
                                <li><FontAwesomeIcon icon={faGem} />Landing a helping hand towards Humanity Services </li>
                                <li><FontAwesomeIcon icon={faGem} />One of the school bus converted into Ambulance with Oxygen cylinder and attached with SDM office N/ B .</li>
                                <li><FontAwesomeIcon icon={faGem} />Automatic hand sanitizer machine and 200 face Shields donated to TMC Tanda,Referel Unit N/ B, Civil Hospital Kangra and Dharamshala.</li>
                                <li><FontAwesomeIcon icon={faGem} />Fantabulous Results of 12th and 10th CBSE board.</li>
                                <li><FontAwesomeIcon icon={faGem} />Anmol Mishra bagged 3rd position in IBM AI Online Competition at National Level.</li>
                                <li><FontAwesomeIcon icon={faGem} />Virtual Events celebration such as Independence day,Raksha Bandhan,Janmashtami,Teachers day,Science Fair ,Hindi Divas , English and Maths Olympiads etc.</li>
                                <li><FontAwesomeIcon icon={faGem} />Anushka Sharma bagged first position in German Spell bee International C ompetition in "Deutsch Utsav".</li>
                                <li><FontAwesomeIcon icon={faGem} />Ram Deshwal bagged 3rd  position in Digital Kinder University Championship at South Asia organised by Goethe Institut.</li>
                                <li><FontAwesomeIcon icon={faGem} />Appreciable performance of Rainbow ATL Kids in National All Rounder Championship.</li>
                            </ul>
                        </div>

                        <div className="acheviement-session-inner">
                            <h2 className="hdng-h4">SESSION 2022-2023</h2>
                            <ul className="gem-box">
                                <li><FontAwesomeIcon icon={faGem} />School hosted the programme “meet the champion’’ interaction with renowned olympians saikhom mirabai chanu (silver medalist, tokyo olympics-2020) and rani rampal captain india women's hockey team in school premises on 8th march 2022.</li>
                                <li><FontAwesomeIcon icon={faGem} />Ram Deshwal and Vedic Kashyap scored 1st and 2nd position in Junior and Senior Catagory in "German Carnival-International German Declamation"and won cash prize of 500 Euro.</li>
                                <li><FontAwesomeIcon icon={faGem} />School accredited with microsoft showcase award for second time.</li>
                                <li><FontAwesomeIcon icon={faGem} />School accredited thrice with ids award from british council.</li>
                                <li><FontAwesomeIcon icon={faGem} />German Teacher Mr Ravindra represented the school in IDT- International German Teacher's Conference in Vienna University.</li>
                                <li><FontAwesomeIcon icon={faGem} />Five students participated in " Deutschutsav "conducted by Mayo College,Ajmer in collaboration with Goethe-Institut New Delhi.</li>
                                <li><FontAwesomeIcon icon={faGem} />Exemplary performance by rainbowites in vivekananda g.K. Examination.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbowites proved their mettle by bagging positions in 30th district children level science congress.</li>
                                <li><FontAwesomeIcon icon={faGem} />Cabridge basec learning assessment english has been introduced to meet the international standards of professional english.</li>
                                <li><FontAwesomeIcon icon={faGem} />Star weightlifter mirabai chanu became the part of first khelo india women national ranking, weightlifting tournament senior, junior & youth held at khelo india weightlifting residential academy in rainbow international school.</li>
                                <li><FontAwesomeIcon icon={faGem} />Aarohi got a bronze medal in national gymnastics championship held in telangana.</li>
                                <li><FontAwesomeIcon icon={faGem} />Tanvi mehta has been selected for u-19 one day national matches.</li>
                                <li><FontAwesomeIcon icon={faGem} />Naman bhatnagar got 47th rank worldwide at wt youth contender cairo, egypt conducted by international table tennis federation. He also got silver medal in 83rd cadet and Sub junior national held at indore, madhya pradesh.</li>
                                <li><FontAwesomeIcon icon={faGem} />Rainbow sky observatory to explore night sky is the first school in the region.</li>
                                <li><FontAwesomeIcon icon={faGem} />School has been identified as resource centre for him anveshika lab.</li>
                                <li><FontAwesomeIcon icon={faGem} />The sports children are provided with the facilities of sauna, ice bath, jacuzzi, steam bath and physiotherapist .</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----- Achevemets ----- */}

        </div>

    )
}


export default Achievements