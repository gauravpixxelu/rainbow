import React, { useEffect } from 'react';

function Transport() {
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
                        <h2 className="hdng-h2">Transport </h2>
                        {/* <p className="para-18">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1770s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p> */}
                    </div>
                </div>
            </section>

            {/* ----- Overview ----- */}

            {/* ----- Transport Table ----- */}

            <section className="transport-table">
                <div className="container">
                    <div className="transport-box">
                        <h2 className="hdng-h2">Conveyance Details of Session-2023-24</h2>
                        <p className="para-18">Morning + Afternoon Routes</p>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Route</th>
                                <th>Driver</th>
                                <th>Vehicle</th>
                                <th>Place</th>
                                <th>Phone No.</th>
                                <th>Incharges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Paras Ram</td>
                                <td>Trax</td>
                                <td>Rajhoon</td>
                                <td>98053-19773</td>
                                <td>Mrs. Manisha</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Rajinder Kumar</td>
                                <td>Bus</td>
                                <td>Saddun</td>
                                <td>97800085470</td>
                                <td>Mrs.Rajni , Mrs. Sunita Bhatia</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Bantu/ Anup</td>
                                <td>Bus</td>
                                <td>AMTRAR</td>
                                <td>98168-62612/ 9816268937</td>
                                <td>Mrs. Sarita , Ms. Sarita Dhadwal</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>NEERAJ</td>
                                <td>Tempo Traveller</td>
                                <td>Nalti Manjha</td>
                                <td>9418512030</td>
                                <td>Mrs. Richa Sharma</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>TERSEM</td>
                                <td>Bus</td>
                                <td>RAIT  KANGRA</td>
                                <td>8894422957</td>
                                <td>Mr. Dinesh (Music) , Mr. Parveen</td>
                            </tr>
                            <tr>
                                <td>6A</td>
                                <td>Boby</td>
                                <td>Bus</td>
                                <td>Kangra</td>
                                <td>9816582186</td>
                                <td>Mrs. Richa Mehra, Mr. Rajesh</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Subhash</td>
                                <td>Bus</td>
                                <td>Pathiyar</td>
                                <td>9816198364</td>
                                <td>Mrs. Renu , Ms. Divya Katoch</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Ramesh Kumar</td>
                                <td>Bus</td>
                                <td>Darang</td>
                                <td>7807297076</td>
                                <td>Mrs. Shivani Sharma (JBT), Mrs. Sakshi Chhabra</td>
                            </tr>
                            <tr>
                                <td>8A</td>
                                <td>Pankaj</td>
                                <td>Bus</td>
                                <td>Ganetta</td>
                                <td>9459234134</td>
                                <td>Mrs. Madhu Jarial, Mrs. Shivani Jambal</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Sunil Kumar</td>
                                <td>Tempo Traveller</td>
                                <td>Mundla</td>
                                <td>9816408527</td>
                                <td>Mrs. Savita</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Sanjay Kumar</td>
                                <td>Bus</td>
                                <td>Sulah</td>
                                <td>8894009413</td>
                                <td>Mrs. Shweta Sood ,  Mrs. Rashi Sood</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Bissan Dass</td>
                                <td>Bus</td>
                                <td>Dhalloon Serathana</td>
                                <td>94189-27745</td>
                                <td>MRS ANUJA SHARMA, Mrs. Poonam Sharma</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Praveen(New)</td>
                                <td>Bus</td>
                                <td>Palampur</td>
                                <td>8219352349</td>
                                <td>Mrs. Shivani Sharma (Maths)</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Rahul</td>
                                <td>Bus</td>
                                <td>Sunni</td>
                                <td>8580876736</td>
                                <td>Mrs. Aditi, Mrs. Asha</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Sunil Kumar</td>
                                <td>Tempo Traveller</td>
                                <td>Dhaloon</td>
                                <td>98163-76212, 98166-84442</td>
                                <td>Mrs. Pratima</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Anil kumar</td>
                                <td>Tempo Traveller</td>
                                <td>Sarotri</td>
                                <td>9805112054 , 9418039827</td>
                                <td>Mrs.sunita Bhatia</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>Viyay 9 Goldey )</td>
                                <td>Trax</td>
                                <td>Local Nagrota</td>
                                <td>8894405918</td>
                                <td>Mrs. Lajesh</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>Sanjesh</td>
                                <td>Tempo Traveller</td>
                                <td>Manjha</td>
                                <td>98172-18718,94187-96865</td>
                                <td>Ms. Deepa</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>Rajeev/ Balwant</td>
                                <td>Bus</td>
                                <td>Baroh</td>
                                <td>6230309436,/ 9816399859</td>
                                <td>Mrs.Sona Thapa, Mrs. Arpna Bhardwaj</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>Rahul</td>
                                <td>Mini Bus</td>
                                <td>Tanda</td>
                                <td>8580576084</td>
                                <td>Mrs. Renuka</td>
                            </tr>
                            <tr>
                                <td>21</td>
                                <td>Soni</td>
                                <td>Bus</td>
                                <td>Jiya</td>
                                <td>8360198925</td>
                                <td>Mrs. Amna, Mrs. Muskan Chawla</td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>Kashmir</td>
                                <td>Bus</td>
                                <td>Lahla</td>
                                <td>9816213037</td>
                                <td>Ms. Kavita , Mrs. Seema Bhardwaj</td>
                            </tr>
                            <tr>
                                <td>24</td>
                                <td>Ashwani</td>
                                <td>Bus</td>
                                <td>Tanda</td>
                                <td>94189-27611/94186-06674</td>
                                <td>Mrs. Tammana , Mrs. Shaloo</td>
                            </tr>
                            <tr>
                                <td>25</td>
                                <td>Ajit</td>
                                <td>Jeep</td>
                                <td>Jassour</td>
                                <td>9816896008</td>
                                <td>Mrs. Sapna Nag</td>
                            </tr>
                            <tr>
                                <td>26</td>
                                <td>Parveen</td>
                                <td>Bus</td>
                                <td>Panaper</td>
                                <td>98167-18963</td>
                                <td>Mrs. Rimpi Rana, Mrs. Sonali</td>
                            </tr>
                            <tr>
                                <td>27</td>
                                <td>Jeet</td>
                                <td>Bus</td>
                                <td>Massal</td>
                                <td>98168-96008</td>
                                <td>Mrs. Radhika , Mrs. Sumita Sood</td>
                            </tr>
                            <tr>
                                <td>28</td>
                                <td>Virender</td>
                                <td>Bus</td>
                                <td>Dheera</td>
                                <td>8107244645</td>
                                <td>Mrs. Monika Maraina, Ms. Sumita Sharma</td>
                            </tr>
                            <tr>
                                <td>29</td>
                                <td>Ajay</td>
                                <td>Bus</td>
                                <td>Nagari</td>
                                <td>9816838403</td>
                                <td>Ms. Pooja Verma, Ms. Shivani Thakur</td>
                            </tr>
                            <tr>
                                <td>30</td>
                                <td>Bakshish/ Surjeet</td>
                                <td>Bus</td>
                                <td> Tang Utharaogran</td>
                                <td> 94180-52976, 98829-52976,
                                    9805478962</td>
                                <td>Mrs.  Kajal , Mrs. Ritu Bhardwaj</td>
                            </tr>
                            <tr>
                                <td>32</td>
                                <td>Sunny</td>
                                <td>Tempo Traveller</td>
                                <td>Zamanabad Kohala ka</td>
                                <td>9418226652</td>
                                <td>Mrs. Neelam Choudhary</td>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td>Suman</td>
                                <td>Tempo Traveller</td>
                                <td>Jheol</td>
                                <td>9418606674</td>
                                <td>Mrs. Vadana Sharma</td>
                            </tr>
                            <tr>
                                <td>34</td>
                                <td colspan="5">No Route</td>
                            </tr>
                            <tr>
                                <td>35 A</td>
                                <td>Ashok</td>
                                <td>winger</td>
                                <td>Jandrangal</td>
                                <td>9805521735</td>
                                <td>Mrs. Anjana</td>
                            </tr>
                            <tr>
                                <td>36 A</td>
                                <td>Shubhash , Vijay</td>
                                <td>Tempo Traveller</td>
                                <td>Jandrangal</td>
                                <td>9805075194</td>
                                <td>Mrs. Manju   Jaggi</td>
                            </tr>
                            <tr>
                                <td>37</td>
                                <td>Sarvan</td>
                                <td>Tempo Traveller</td>
                                <td>Ambari Rakh</td>
                                <td>9805037145</td>
                                <td>Mrs. Namita Gupta</td>
                            </tr>
                            <tr>
                                <td>39</td>
                                <td>Abhishek Kumar</td>
                                <td>Trax</td>
                                <td>Hatwas(Massal Road,</td>
                                <td>9816954468</td>
                                <td>Mrs.  Arti Rajput</td>
                            </tr>
                            <tr>
                                <td>40</td>
                                <td>Mahinder</td>
                                <td>Bus</td>
                                <td>Jalot</td>
                                <td>98165-83507</td>
                                <td>Mrs. Komal , Mrs. Anu Bala</td>
                            </tr>
                            <tr>
                                <td>42</td>
                                <td>Ramu</td>
                                <td>Winger</td>
                                <td>Darang</td>
                                <td>9816216354/ 9816440260</td>
                                <td>Mrs. Ajwinder , Mrs. Monika Saini</td>
                            </tr>
                            <tr>
                                <td>43</td>
                                <td>Gobind</td>
                                <td>Tempo Traveller	</td>
                                <td>Tapovan</td>
                                <td>9805662910</td>
                                <td>Mrs. Shilpi Thakur</td>
                            </tr>
                            <tr>
                                <td>44</td>
                                <td>Subhash</td>
                                <td>Trax</td>
                                <td>Guglahar via Ambari</td>
                                <td>9816198364</td>
                                <td>Mrs. Shorbi</td>
                            </tr>
                            <tr>
                                <td>45</td>
                                <td>Ranjeet Singh</td>
                                <td>Tempo Traveller	</td>
                                <td>Lilly</td>
                                <td>9805128366</td>
                                <td>Mrs. Sunita Katoch</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="transport-box gd-for">
                        <p className="para-18">Local Routes For Kindergarten By 12'O Clock</p>
                    </div>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Route No.</th>
                                <th>Driver</th>
                                <th>Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>21</td>
                                <td>Mr. Tersem</td>
                                <td>Tanda</td>
                            </tr>
                            <tr>
                                <td>23</td>
                                <td>Mr. Kashmir</td>
                                <td>Ghaneeta</td>
                            </tr>
                            <tr>
                                <td>33</td>
                                <td>Mr. Suman</td>
                                <td>Dadh</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>Mr. Rahul</td>
                                <td>Kangra</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Mr. Parveen</td>
                                <td>Hatwas</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ----- Transport Table ----- */}


        </div>

    )
}


export default Transport