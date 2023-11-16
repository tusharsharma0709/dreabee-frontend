import React from 'react'
import { useState } from 'react'

const ReportExp = () => {
    const [active, setActive] = useState("Influencers")
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='row bg-'>
                <div className='col-lg-12 bg-'>


                    <div className='RepCamp_header'>
                        {/* heading section  */}
                        <section>
                            <i class="fa fa-arrow-left"></i>
                            <label>
                                Lunch Box Recipe Report
                            </label>
                            <p>Engagements updated 1 year ago</p>
                        </section>
                        <hr />
                        {/* menu section   */}
                        <section>
                            <div className='row'>
                                <button onClick={() => { setActive('Dashboard') }} className={active == "Dashboard" ? 'col-lg-1 RepOptionsActive  RepBtn' : 'col-lg-1 RepBtn'}>    Dashboard  </button>

                                <button onClick={() => { setActive('Influencers') }} className={active == "Influencers" ? 'col-lg-1 RepOptionsActive  RepBtn' : 'col-lg-1 RepBtn'}> <span className=''>Influencers</span>  </button>

                                <button onClick={() => { setActive('Content') }} className={active == "Content" ? 'col-lg-1 RepOptionsActive  RepBtn' : 'col-lg-1 RepBtn'}>    <span className=''>Content</span>   </button>

                            </div>
                        </section>
                    </div>




                    {
                        active == "Content" || active == "Influencers"
                            ?
                            <div className='RepCamp_body ' >


                                <section>
                                    <div className='row bg info ' style={{ width: "98%" }}>

                                        <div className='col-4 bg- p' style={{ color: "#7E7E7E", fontWeight: "600" }}>
                                            {/* &nbsp;   &nbsp;  */}
                                            7,006 Posts
                                        </div>

                                        <div className='col-4 '>

                                        </div>

                                        <div className='col-4  d-flex justify-content-end '>

                                            <div className='' style={{ height: "0px", width: "0px", top: "2rem", "position": "relative" }}></div>

                                            <div className=' bg- text-center d-flex align-items-center ' onClick={() => { setShow(!show) }} style={{ color: "#7E7E7E", fontWeight: "600", cursor: "pointer" }}>
                                                Sort by :  &nbsp; <select style={{ "border": "none", "background": "transparent", " fontWeight": "700" }}>
                                                    <option>Recent Post</option>
                                                    <option>Engagement</option>
                                                    &nbsp;
                                                </select>

                                                &nbsp;
                                            </div>

                                        </div>

                                    </div>
                                </section>


                                {
                                    active == "Influencers"
                                        ?
                                        <>
                                            <section style={{ "overflowY": "auto", height: "200vh" }} >
                                                <table className="table Camp_report mt-1 mb-5" style={{ "width": "96%" }}>
                                                    <thead  >
                                                        <th className="text-center">Name</th>
                                                        <th className="text-center">Deliverables </th>
                                                        <th className="text-center">Total Cost</th>
                                                        <th className="text-center">Likes</th>
                                                        <th className="text-center">Comments</th>
                                                        <th className="text-center">Video View</th>
                                                        <th className="text-center">CPE</th>
                                                        <th className="text-center">CPV</th>
                                                        <th className="text-center">Actions</th>
                                                        <th className="text-center"></th>
                                                    </thead>
                                                    <tbody className='bg' style={{ "marginBottom": "20vh" }} >

                                                        {/* __________________________________________________________________ */}

                                                        {/* table Section */}
                                                        <tr className='firstRepCampTable' style={{ "marginTop": "5rem" }}>
                                                            <td className="text-center">Name</td>
                                                            <td className="text-center">Deliverables </td>
                                                            <td className="text-center">$ 45 </td>
                                                            <td className="text-center">32k</td>
                                                            <td className="text-center">7,787</td>
                                                            <td className="text-center">2M </td>
                                                            <td className="text-center">$o.5</td>
                                                            <td className="text-center">$0.5</td>
                                                            <td className="text-center">
                                                                <select className='px-1'>
                                                                    <option>View Insight</option>
                                                                    <option>View Insight</option>
                                                                </select>
                                                            </td>



                                                        </tr>
                                                        {/* 3 cards Section */}
                                                        <tr className=' bg-light '>
                                                            <td colspan={10} className=''>
                                                                <section className=" " style={{ "height": "300px" }}>


                                                                    <div className='row d-flex justify-content-center py-2 bg- '>


                                                                        <div className='col-4 bg-i'>
                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>


                                                                                <div className='row my-3'>
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Historical vs Actual Views
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className='col-lg-6 '>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", backgroundColor: "rgba(200, 59, 147, 0.40)", borderRadius: "5px 0px 0px 5px", border: "0.5px solid #C4C4C4" }}>Engagements</button>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", borderRadius: "0px 5px 5px 0px", border: "0.5px solid #C4C4C4" }}>Videos Views</button>

                                                                                    </div>
                                                                                    <div className='col-lg-12 '>
                                                                                        {/* 2nd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Historical</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Historical</div>
                                                                                            </div>
                                                                                        </section>
                                                                                        {/* 3rd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Actual</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Actual</div>
                                                                                            </div>
                                                                                        </section>

                                                                                    </div>
                                                                                </div>



                                                                            </section>

                                                                        </div>


                                                                        {/* 2nd  2nd*/}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>
                                                                                    {/* 1st */}
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Comments Word Cloud
                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/EllipseReporting.png')} style={{ "borderRadius": "15px" }} width={132.551} height={132.551} />

                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 3rd  */}
                                                                                    <section className='row '>

                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Positive Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Negative Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                    </section>


                                                                                </div>

                                                                            </section>

                                                                        </div>

                                                                        {/* 3rd 3rd */}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>

                                                                                    {/* 1st  */}
                                                                                    <div className='col-lg-5' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Top 20 keywords
                                                                                        </span>
                                                                                    </div>
                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/top20KeywordsReporting.png')} style={{ "borderRadius": "15px" }} width={337} height={177} />

                                                                                        </span>
                                                                                    </div>

                                                                                </div>


                                                                            </section>

                                                                        </div>


                                                                    </div>







                                                                </section>
                                                            </td>
                                                        </tr>
                                                        {/* 1 card Section */}
                                                        <tr className=' bg-light py-1 ' style={{ "height": "300px" }}>
                                                            <td colspan={10} className=' mb-2 LastRepCampTable' style={{ backgroundColor: " " }}>


                                                                <section className="bg- " style={{ "height": "300px" }}>
                                                                    <div className='row d-flex justify-content-center  '>
                                                                        <div className='col-12'>

                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "320px", width: "1330px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4",
                                                                                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.05)"
                                                                                }}>






                                                                                <div className='row my-3 '>
                                                                                    <div className='col-lg-12 text-start' >
                                                                                        <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Content Posted
                                                                                        </span>
                                                                                    </div>



                                                                                    <div className='col-lg-12 text-start' >
                                                                                        {/* <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                        Content Posted
                                                                                        </span> */}


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>

                                                                                    </div>







                                                                                </div>
                                                                            </section>

                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </td>






                                                            {/* __________________________________________________________________  */}




                                                            {/* __________________________________________________________________  */}



                                                        </tr>

                                                        {/* __________________________________________________________________ */}
                                                        {/* table Section */}
                                                        <tr style={{ "marginTop": "5rem" }}>
                                                            <td className="text-center">Name</td>
                                                            <td className="text-center">Deliverables </td>
                                                            <td className="text-center">$ 45 </td>
                                                            <td className="text-center">32k</td>
                                                            <td className="text-center">7,787</td>
                                                            <td className="text-center">2M </td>
                                                            <td className="text-center">$o.5</td>
                                                            <td className="text-center">$0.5</td>
                                                            <td className="text-center">
                                                                <select className='px-1'>
                                                                    <option>View Insight</option>
                                                                    <option>View Insight</option>
                                                                </select>
                                                            </td>



                                                        </tr>
                                                        {/* 3 cards Section */}
                                                        <tr className=' bg-light '>
                                                            <td colspan={10} className=''>
                                                                <section className=" " style={{ "height": "300px" }}>


                                                                    <div className='row d-flex justify-content-center py-2 bg- '>


                                                                        <div className='col-4 bg-i'>
                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>


                                                                                <div className='row my-3'>
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Historical vs Actual Views
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className='col-lg-6 '>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", backgroundColor: "rgba(200, 59, 147, 0.40)", borderRadius: "5px 0px 0px 5px", border: "0.5px solid #C4C4C4" }}>Engagements</button>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", borderRadius: "0px 5px 5px 0px", border: "0.5px solid #C4C4C4" }}>Videos Views</button>

                                                                                    </div>
                                                                                    <div className='col-lg-12 '>
                                                                                        {/* 2nd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Historical</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Historical</div>
                                                                                            </div>
                                                                                        </section>
                                                                                        {/* 3rd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Actual</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Actual</div>
                                                                                            </div>
                                                                                        </section>

                                                                                    </div>
                                                                                </div>



                                                                            </section>

                                                                        </div>


                                                                        {/* 2nd  2nd*/}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>
                                                                                    {/* 1st */}
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Comments Word Cloud
                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/EllipseReporting.png')} style={{ "borderRadius": "15px" }} width={132.551} height={132.551} />

                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 3rd  */}
                                                                                    <section className='row '>

                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Positive Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Negative Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                    </section>


                                                                                </div>

                                                                            </section>

                                                                        </div>

                                                                        {/* 3rd 3rd */}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>

                                                                                    {/* 1st  */}
                                                                                    <div className='col-lg-5' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Top 20 keywords
                                                                                        </span>
                                                                                    </div>
                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/top20KeywordsReporting.png')} style={{ "borderRadius": "15px" }} width={337} height={177} />

                                                                                        </span>
                                                                                    </div>

                                                                                </div>


                                                                            </section>

                                                                        </div>


                                                                    </div>







                                                                </section>
                                                            </td>
                                                        </tr>
                                                        {/* 1 card Section */}
                                                        <tr className=' bg-light' >
                                                            <td colspan={10} className=' mb-2' style={{ backgroundColor: " " }}>


                                                                <section className="bg- " style={{ "height": "300px" }}>
                                                                    <div className='row d-flex justify-content-center  '>
                                                                        <div className='col-12'>

                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "320px", width: "1330px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4",
                                                                                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.05)"
                                                                                }}>






                                                                                <div className='row my-3 '>
                                                                                    <div className='col-lg-12 text-start' >
                                                                                        <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Content Posted
                                                                                        </span>
                                                                                    </div>



                                                                                    <div className='col-lg-12 text-start' >
                                                                                        {/* <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                        Content Posted
                                                                                        </span> */}


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>

                                                                                    </div>







                                                                                </div>
                                                                            </section>

                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </td>






                                                            {/* __________________________________________________________________  */}




                                                            {/* __________________________________________________________________  */}



                                                        </tr>

                                                        {/* __________________________________________________________________ */}
                                                        {/* table Section */}
                                                        <tr style={{ "marginTop": "5rem" }}>
                                                            <td className="text-center">Name</td>
                                                            <td className="text-center">Deliverables </td>
                                                            <td className="text-center">$ 45 </td>
                                                            <td className="text-center">32k</td>
                                                            <td className="text-center">7,787</td>
                                                            <td className="text-center">2M </td>
                                                            <td className="text-center">$o.5</td>
                                                            <td className="text-center">$0.5</td>
                                                            <td className="text-center">
                                                                <select className='px-1'>
                                                                    <option>View Insight</option>
                                                                    <option>View Insight</option>
                                                                </select>
                                                            </td>



                                                        </tr>
                                                        {/* 3 cards Section */}
                                                        <tr className=' bg-light '>
                                                            <td colspan={10} className=''>
                                                                <section className=" " style={{ "height": "300px" }}>


                                                                    <div className='row d-flex justify-content-center py-2 bg- '>


                                                                        <div className='col-4 bg-i'>
                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>


                                                                                <div className='row my-3'>
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Historical vs Actual Views
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className='col-lg-6 '>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", backgroundColor: "rgba(200, 59, 147, 0.40)", borderRadius: "5px 0px 0px 5px", border: "0.5px solid #C4C4C4" }}>Engagements</button>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", borderRadius: "0px 5px 5px 0px", border: "0.5px solid #C4C4C4" }}>Videos Views</button>

                                                                                    </div>
                                                                                    <div className='col-lg-12 '>
                                                                                        {/* 2nd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Historical</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Historical</div>
                                                                                            </div>
                                                                                        </section>
                                                                                        {/* 3rd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Actual</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Actual</div>
                                                                                            </div>
                                                                                        </section>

                                                                                    </div>
                                                                                </div>



                                                                            </section>

                                                                        </div>


                                                                        {/* 2nd  2nd*/}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>
                                                                                    {/* 1st */}
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Comments Word Cloud
                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/EllipseReporting.png')} style={{ "borderRadius": "15px" }} width={132.551} height={132.551} />

                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 3rd  */}
                                                                                    <section className='row '>

                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Positive Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Negative Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                    </section>


                                                                                </div>

                                                                            </section>

                                                                        </div>

                                                                        {/* 3rd 3rd */}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>

                                                                                    {/* 1st  */}
                                                                                    <div className='col-lg-5' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Top 20 keywords
                                                                                        </span>
                                                                                    </div>
                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/top20KeywordsReporting.png')} style={{ "borderRadius": "15px" }} width={337} height={177} />

                                                                                        </span>
                                                                                    </div>

                                                                                </div>


                                                                            </section>

                                                                        </div>


                                                                    </div>







                                                                </section>
                                                            </td>
                                                        </tr>
                                                        {/* 1 card Section */}
                                                        <tr className=' bg-light' >
                                                            <td colspan={10} className=' mb-2' style={{ backgroundColor: " " }}>


                                                                <section className="bg- " style={{ "height": "300px" }}>
                                                                    <div className='row d-flex justify-content-center  '>
                                                                        <div className='col-12'>

                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "320px", width: "1330px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4",
                                                                                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.05)"
                                                                                }}>






                                                                                <div className='row my-3 '>
                                                                                    <div className='col-lg-12 text-start' >
                                                                                        <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Content Posted
                                                                                        </span>
                                                                                    </div>



                                                                                    <div className='col-lg-12 text-start' >
                                                                                        {/* <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                        Content Posted
                                                                                        </span> */}


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>

                                                                                    </div>







                                                                                </div>
                                                                            </section>

                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </td>






                                                            {/* __________________________________________________________________  */}




                                                            {/* __________________________________________________________________  */}



                                                        </tr>

                                                        {/* __________________________________________________________________ */}
                                                        {/* table Section */}
                                                        <tr style={{ "marginTop": "5rem" }}>
                                                            <td className="text-center">Name</td>
                                                            <td className="text-center">Deliverables </td>
                                                            <td className="text-center">$ 45 </td>
                                                            <td className="text-center">32k</td>
                                                            <td className="text-center">7,787</td>
                                                            <td className="text-center">2M </td>
                                                            <td className="text-center">$o.5</td>
                                                            <td className="text-center">$0.5</td>
                                                            <td className="text-center">
                                                                <select className='px-1'>
                                                                    <option>View Insight</option>
                                                                    <option>View Insight</option>
                                                                </select>
                                                            </td>



                                                        </tr>
                                                        {/* 3 cards Section */}
                                                        <tr className=' bg-light '>
                                                            <td colspan={10} className=''>
                                                                <section className=" " style={{ "height": "300px" }}>


                                                                    <div className='row d-flex justify-content-center py-2 bg- '>

                                                                        {/* 1st 1st  */}
                                                                        <div className='col-4 bg-i'>
                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>


                                                                                <div className='row my-3'>
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Historical vs Actual Views
                                                                                        </span>
                                                                                    </div>
                                                                                    <div className='col-lg-6 '>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", backgroundColor: "rgba(200, 59, 147, 0.40)", borderRadius: "5px 0px 0px 5px", border: "0.5px solid #C4C4C4" }}>Engagements</button>
                                                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", borderRadius: "0px 5px 5px 0px", border: "0.5px solid #C4C4C4" }}>Videos Views</button>

                                                                                    </div>
                                                                                    <div className='col-lg-12 '>
                                                                                        {/* 2nd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Historical</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Historical</div>
                                                                                            </div>
                                                                                        </section>
                                                                                        {/* 3rd  */}
                                                                                        <section className='row mt-4'>
                                                                                            <div className='col-lg-4  text-start ps-4'>

                                                                                                <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Actual</div>
                                                                                                <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                                            </div>
                                                                                            <div className='col-lg-8 '>
                                                                                                <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Actual</div>
                                                                                            </div>
                                                                                        </section>

                                                                                    </div>
                                                                                </div>



                                                                            </section>

                                                                        </div>


                                                                        {/* 2nd  2nd*/}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>
                                                                                    {/* 1st */}
                                                                                    <div className='col-lg-6' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                                            Comments Word Cloud
                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/EllipseReporting.png')} style={{ "borderRadius": "15px" }} width={132.551} height={132.551} />

                                                                                        </span>
                                                                                    </div>

                                                                                    {/* 3rd  */}
                                                                                    <section className='row '>

                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Positive Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                        <div className='col-lg-6 my-3' >
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/reportingSmallbox.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                                Negative Sentiment
                                                                                            </span>
                                                                                        </div>
                                                                                    </section>


                                                                                </div>

                                                                            </section>

                                                                        </div>

                                                                        {/* 3rd 3rd */}
                                                                        <div className='col-4 bg-'>
                                                                            <section className='mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "296px", width: "398.667px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4"
                                                                                }}>

                                                                                <div className='row my-3'>

                                                                                    {/* 1st  */}
                                                                                    <div className='col-lg-5' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Top 20 keywords
                                                                                        </span>
                                                                                    </div>
                                                                                    {/* 2nd  */}
                                                                                    <div className='col-lg-12 my-4' >
                                                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            <img src={require('../../../../Imagez/Dashboard/All/top20KeywordsReporting.png')} style={{ "borderRadius": "15px" }} width={337} height={177} />

                                                                                        </span>
                                                                                    </div>

                                                                                </div>


                                                                            </section>

                                                                        </div>


                                                                    </div>







                                                                </section>
                                                            </td>
                                                        </tr>
                                                        {/* 1 card Section */}
                                                        <tr className=' bg-light' >
                                                            <td colspan={10} className=' mb-2' style={{ backgroundColor: " " }}>


                                                                <section className="bg- " style={{ "height": "300px" }}>
                                                                    <div className='row d-flex justify-content-center  '>
                                                                        <div className='col-12'>

                                                                            <section className=' mx-auto bg-light'
                                                                                style={{
                                                                                    "height": "320px", width: "1330px",
                                                                                    borderRadius: "10px",
                                                                                    border: "0.5px solid #C4C4C4",
                                                                                    boxShadow: "0px 5px 30px 0px rgba(0, 0, 0, 0.05)"
                                                                                }}>






                                                                                <div className='row my-3 '>
                                                                                    <div className='col-lg-12 text-start' >
                                                                                        <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                            Content Posted
                                                                                        </span>
                                                                                    </div>



                                                                                    <div className='col-lg-12 text-start' >
                                                                                        {/* <span className='ps-4' style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                                        Content Posted
                                                                                        </span> */}


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>


                                                                                        <section className='row my-3'>
                                                                                            <div className='col-lg-1 bg- text-end'>
                                                                                                <img src={require('../../../../Imagez/Dashboard/All/reportingboxbig.png')} style={{ "borderRadius": "" }} width={70} height={70} />
                                                                                            </div>
                                                                                            <div className='col-lg-4 py-1'>

                                                                                                <div className='' style={{
                                                                                                    color: "#010705", "fontSize": "12px", "fontWeight": "400"
                                                                                                    // , whiteSpace: "nowrap", overflow: "hidden",texOverflow: "ellipsis",
                                                                                                }} >
                                                                                                    Huge grocery shopping haul/Surprise visit to amma samayal/Buying exotic vegetables/#oilfreeglow...
                                                                                                </div>


                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "12px", "fontWeight": "400" }} >
                                                                                                    Posted 1 year ago
                                                                                                </div>
                                                                                            </div>





                                                                                            {/* 3 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Subscribers
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    132k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 4 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Likes
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    4.6k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 5 */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Video Views
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    208.2k
                                                                                                </div>

                                                                                            </div>
                                                                                            {/* 6 */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    Comments
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    789
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* 7  */}
                                                                                            <div className='col-lg-1  text-center'>

                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPE
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#7E7E0107057E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 8  */}
                                                                                            <div className='col-lg-1    text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    CPV
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    $ 0.5
                                                                                                </div>

                                                                                            </div>

                                                                                            {/* 9  */}
                                                                                            <div className='col-lg-1  text-center'>
                                                                                                <div className='my-1' style={{ color: "#7E7E7E", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    E.R
                                                                                                </div>
                                                                                                <div className='' style={{ color: "#010705", "fontSize": "14px", "fontWeight": "400" }} >
                                                                                                    0.83%
                                                                                                </div>
                                                                                            </div>



                                                                                        </section>

                                                                                    </div>







                                                                                </div>
                                                                            </section>

                                                                        </div>
                                                                    </div>
                                                                </section>
                                                            </td>






                                                            {/* __________________________________________________________________  */}




                                                            {/* __________________________________________________________________  */}



                                                        </tr>

                                                        {/* __________________________________________________________________ */}














                                                    </tbody>
                                                </table>


                                            </section>
                                        </>
                                        :

                                        <section className='mt-3 me-5 contentSection' style={{ "height": "80vh", "overflowY": "scroll" }}>
                                            <div className='row bg info text-start'>
                                                <div className='col-3  mb-4'>
                                                    <div className='campRep_bgBox text-center py-3'>
                                                        <div className='row'>
                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>


                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />



                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-2 bg- text-end py-1'>
                                                                <div className='' style={{ "position": "relative", "left": "15px" }}>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5   bg- text-start'>
                                                                <div>
                                                                    <label style={{
                                                                        fontSize: "14px", lineHeight: "10px",
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        width: "100px"
                                                                    }}>Guru Randhawa</label>
                                                                    <label className='bg- text-start' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9K</span>

                                                                </span>
                                                            </div>







                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-3  mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-2 bg- text-end py-1'>
                                                                <div className='' style={{ "position": "relative", "left": "15px" }}>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5   bg- text-start'>
                                                                <div>
                                                                    <label style={{
                                                                        fontSize: "14px", lineHeight: "10px",
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        width: "100px"
                                                                    }}>Guru Randhawa</label>
                                                                    <label className='bg- text-start' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9K</span>

                                                                </span>
                                                            </div>







                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-3  mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-2 bg- text-end py-1'>
                                                                <div className='' style={{ "position": "relative", "left": "15px" }}>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5   bg- text-start'>
                                                                <div>
                                                                    <label style={{
                                                                        fontSize: "14px", lineHeight: "10px",
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        width: "100px"
                                                                    }}>Guru Randhawa</label>
                                                                    <label className='bg- text-start' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9K</span>

                                                                </span>
                                                            </div>







                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-3  mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-2 bg- text-end py-1'>
                                                                <div className='' style={{ "position": "relative", "left": "15px" }}>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5   bg- text-start'>
                                                                <div>
                                                                    <label style={{
                                                                        fontSize: "14px", lineHeight: "10px",
                                                                        overflow: "hidden",
                                                                        textOverflow: "ellipsis",
                                                                        width: "100px"
                                                                    }}>Guru Randhawa</label>
                                                                    <label className='bg- text-start' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9K</span>

                                                                </span>
                                                            </div>







                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <div className='col-3 bg-info'>B</div>
                                        <div className='col-3 bg-danger'></div>
                                        <div className='col-3 bg-info'>B</div> */}



                                                <div className='col-3 mb-4 '>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4 '>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>
                                                <div className='col-3 mb-4'>


                                                    <div className='campRep_bgBox text-center py-3'>

                                                        <div className='row'>

                                                            <div className='col-lg-12 my-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={274} height={200} />
                                                                </div>
                                                            </div>




                                                            {/* video thumbnail  */}
                                                            <div className='col-lg-3 bg- text-end py-1'>
                                                                <div className=''>
                                                                    <img src={require('../../../../Imagez/Dashboard/All/luffy.jpg')} style={{ "borderRadius": "50%" }} width={30} />
                                                                </div>
                                                            </div>


                                                            {/* chan name  */}
                                                            <div className='col-lg-5 bg- text-start'>
                                                                <div>
                                                                    <label style={{ fontSize: "14px" }}>Guru Randhawa</label>
                                                                    <label className='bg-secondary' style={{ fontSize: "12px" }}>2 years ago</label>
                                                                </div>

                                                            </div>


                                                            {/* likes  */}            {/* comments  */}
                                                            <div className='col-lg-4 bg- text-start'>
                                                                <span className=' text- me-2'>
                                                                    <i class="fa fa-thumbs-up" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}> 1.2 M</span>

                                                                </span>

                                                                <span className=' text- mx-1'>
                                                                    <i class="fa fa-comment" aria-hidden="true" style={{ fontSize: "12px" }}></i>
                                                                    <span style={{ fontSize: "12px" }}>7.9 K</span>

                                                                </span>
                                                            </div>







                                                        </div>















                                                    </div>





                                                </div>






                                            </div>
                                        </section>


                                }
                                {/* Content  */}





                            </div>


                            :

                            <div className='RepCamp_body dashboardSection' >
                                <section style={{ "height": "78vh", "overflowY": "scroll" }}>

                                    <section className=' camp_Whitebg pb-2 mt-4'>

                                        {/* 1 */}
                                        <div className='row bg- py-2'>
                                            <div className='col-lg-12 ps-4 ms-3 mt-2' style={{ fontSize: "16px", fontWeight: "600" }} >Campaign Overview </div>
                                        </div>

                                        {/* 2 */}
                                        <div className='Camp_main_box  ' style={{ width: "1380px", height: "100px" }}>



                                            <div className='Camp_Reporting_box'>

                                                <div>

                                                    <img src={require('../../../../Imagez/Dashboard/All/solar_user-broken.png')} height={54} width={54} />


                                                    <section className='my-1 mx-2'>
                                                        <label style={{ fontSize: '18px', fontWeight: '700' }}>
                                                            7 <span style={{ fontSize: '12px', fontWeight: '400' }}>/8</span>
                                                        </label>
                                                        <br />
                                                        <label style={{ fontSize: '14px', fontWeight: '400' }}>
                                                            Influencers Live
                                                        </label>
                                                    </section>

                                                </div>


                                            </div>

                                            <div className='Camp_Reporting_box'>

                                                <div>

                                                    <img src={require('../../../../Imagez/Dashboard/All/Play_Vector.png')} height={48} width={60} />


                                                    <section className='my-1 mx-3'>
                                                        <label style={{ fontSize: '18px', fontWeight: '700' }}>
                                                            7 <span style={{ fontSize: '12px', fontWeight: '400' }}>/8</span>
                                                        </label>
                                                        <br />
                                                        <label style={{ fontSize: '14px', fontWeight: '400' }}>
                                                            Video Live
                                                        </label>
                                                    </section>

                                                </div>


                                            </div>


                                            <div className='Camp_Reporting_box'>

                                                <div>

                                                    <img src={require('../../../../Imagez/Dashboard/All/solar_eye-broken.png')} height={54} width={54} />


                                                    <section className='my-1 mx-2'>
                                                        <label style={{ fontSize: '18px', fontWeight: '700' }}>
                                                            1.97m
                                                        </label>
                                                        <br />
                                                        <label style={{ fontSize: '14px', fontWeight: '400' }}>
                                                            Video Views
                                                        </label>
                                                    </section>

                                                </div>

                                            </div>


                                            <div className='Camp_Reporting_box'>


                                                <div>

                                                    <img src={require('../../../../Imagez/Dashboard/All/heroicons_currency-rupee.png')} height={54} width={54} />

                                                    <section className='my-1 mx-2'>
                                                        <label style={{ fontSize: '18px', fontWeight: '700' }}>
                                                            140k <span style={{ fontSize: '12px', fontWeight: '400' }}>/ 160k</span>
                                                        </label>
                                                        <br />
                                                        <label style={{ fontSize: '14px', fontWeight: '400' }}>
                                                            Budget Spent
                                                        </label>
                                                    </section>

                                                </div>

                                            </div>














                                            {/* _____________________  */}




                                        </div>
                                    </section>





                                    {/*  2-----------> 3 transparent cards Section */}
                                    <section className=' camp_Whitebg pt-2 pb-4 mt-4 bg-transparent' style={{ border: "0.5px solid #C4C4C4" }}>

                                        {/* 1 */}
                                        <div className='row bg- py-2 pb-4'>
                                            <div className='col-lg-12 ps-4 ms-3 mt-2' style={{ fontSize: "16px", fontWeight: "600" }} >Campaign Overview </div>
                                        </div>

                                        {/* 2 */}
                                        <div className='Camp_main_box  ' style={{ width: "1380px", height: "" }}>


                                            {/* _____________________  */}

                                            {/* 2nd  2nd*/}
                                            <div className=' bg-'>
                                                <section className='mx-auto bg-'
                                                    style={{
                                                        "height": "296px", width: "398.667px",
                                                        borderRadius: "10px",
                                                        border: "0.5px solid #C4C4C4"
                                                    }}>

                                                    <div className='row my-3'>
                                                        {/* 1st */}
                                                        <div className='col-lg-4 mb-1 text-center' >
                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                Video View
                                                            </span>
                                                        </div>



                                                        {/* 3rd  */}
                                                        <section className='row '>
                                                            <div className='col-lg-5 d-flex align-items-center my-2 text-start ps-4' style={{ "borderRight": "2px solid #000" }}>
                                                                <img src={require('../../../../Imagez/Dashboard/All/icons/pink_icons/Eyes.png')} className='ms-3' style={{ "borderRadius": "" }} width={35} height={35} /> &nbsp; &nbsp;
                                                                <span style={{ color: "#000", fontSize: "18px", fontWeight: "600" }}>
                                                                    1.97m
                                                                </span>
                                                            </div>
                                                            <div className='col-lg-7 my-2 text-start' >
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    No. of people viewed influencer’s posts
                                                                </span>
                                                            </div>
                                                        </section>
                                                        <section className='row '>
                                                            <div className='col-lg-6 my-3 text-start ps-5' >
                                                                <img src={require('../../../../Imagez/Dashboard/All/icons/pink_icons/Like.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    Likes
                                                                </span>
                                                            </div>
                                                            <div className='col-lg-6 my-3 text-end' >
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    36,060
                                                                </span>
                                                            </div>
                                                        </section>
                                                        {/* _______  */}
                                                        <section className='row '>
                                                            <div className='col-lg-6 my-2 text-start ps-5' >
                                                                <img src={require('../../../../Imagez/Dashboard/All/icons/pink_icons/comm.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    Comments
                                                                </span>
                                                            </div>
                                                            <div className='col-lg-6 my-2  text-end' >
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    8,000
                                                                </span>
                                                            </div>
                                                        </section>
                                                        {/* _______  */}
                                                        <section className='row '>
                                                            <div className='col-lg-6 my-2 text-start ps-5' >
                                                                <img src={require('../../../../Imagez/Dashboard/All/icons/pink_icons/%cent.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    View Rate
                                                                </span>
                                                            </div>
                                                            <div className='col-lg-6 my-2  text-end' >
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    10.18%
                                                                </span>
                                                            </div>
                                                        </section>
                                                        {/* _______  */}
                                                        <section className='row '>
                                                            <div className='col-lg-6 my-2 text-start ps-5' >
                                                                <img src={require('../../../../Imagez/Dashboard/All/icons/pink_icons/Rupee.png')} style={{ "borderRadius": "" }} width={25} height={25} /> &nbsp;
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    CPV
                                                                </span>
                                                            </div>
                                                            <div className='col-lg-6 my-2  text-end' >
                                                                <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                    $79
                                                                </span>
                                                            </div>
                                                        </section>








                                                    </div>

                                                </section>

                                            </div>

                                            {/* 3rd 3rd */}
                                            <div className=' bg-'>
                                                <section className='mx-auto bg-'
                                                    style={{
                                                        "height": "296px", width: "398.667px",
                                                        borderRadius: "10px",
                                                        border: "0.5px solid #C4C4C4"
                                                    }}>

                                                    <div className='row my-3'>

                                                        {/* 1st  */}
                                                        <div className='col-lg-5 text-center' >
                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                Daily Video Views
                                                            </span>
                                                        </div>
                                                        {/* 2nd  */}
                                                        <div className='col-lg-12 my-4' >
                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                                {/* <img src={require('../../../../Imagez/Dashboard/All/top20KeywordsReporting.png')} style={{ "borderRadius": "15px" }} width={337} height={177} /> */}

                                                            </span>
                                                        </div>

                                                    </div>


                                                </section>

                                            </div>

                                            {/* 1st 1st  */}
                                            <div className=' bg-i'>
                                                <section className=' mx-auto bg-'
                                                    style={{
                                                        "height": "296px", width: "398.667px",
                                                        borderRadius: "10px",
                                                        border: "0.5px solid #C4C4C4"
                                                    }}>


                                                    <div className='row my-3'>
                                                        <div className='col-lg-6 text-center' >
                                                            <span style={{ color: "#7E7E7E", fontSize: "14px" }}>

                                                                Historical vs Actual Views
                                                            </span>
                                                        </div>
                                                        <div className='col-lg-6 '>
                                                            <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", backgroundColor: "rgba(200, 59, 147, 0.40)", borderRadius: "5px 0px 0px 5px", border: "0.5px solid #C4C4C4" }}>Engagements</button>
                                                            <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", borderRadius: "0px 5px 5px 0px", border: "0.5px solid #C4C4C4" }}>Videos Views</button>

                                                        </div>
                                                        <div className='col-lg-12 '>
                                                            {/* 2nd  */}
                                                            <section className='row mt-4'>
                                                                <div className='col-lg-4  text-start ps-4'>

                                                                    <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Historical</div>
                                                                    <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                </div>
                                                                <div className='col-lg-8 '>
                                                                    <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Historical</div>
                                                                </div>
                                                            </section>
                                                            {/* 3rd  */}
                                                            <section className='row mt-4'>
                                                                <div className='col-lg-4  text-start ps-4'>

                                                                    <div className='ms-2' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "600" }}> Actual</div>
                                                                    <div className='ms-2' style={{ fontSize: "18px", color: "#7E7E7E", fontWeight: "700" }}> 1.97m</div>
                                                                </div>
                                                                <div className='col-lg-8 '>
                                                                    <div className='' style={{ fontSize: "16px", color: "#7E7E7E", fontWeight: "700" }}> Actual</div>
                                                                </div>
                                                            </section>

                                                        </div>
                                                    </div>



                                                </section>
                                            </div>




                                            {/* _____________________  */}




                                        </div>
                                    </section>





                                    {/* 4----------------> 1Word Cloud card Section  */}
                                    <section className=' camp_Whitebg py-2 my-4' style={{ width: "643px" }}>

                                        <div className='row Camp_main_box py-1 '>

                                            {/* 1 */}
                                            <div className='row bg- '>
                                                <div className='col-lg-12 ps-4 ms-3 mt-2' style={{ fontSize: "16px", fontWeight: "600" }} >Video View Insights </div>
                                            </div>

                                            {/* 1st 1st  */}
                                            <div className='col-12 '>


                                                <div className='row my-3 '>
                                                    <div className='col-lg-6 ps-4  mb-3' >
                                                        <span style={{ color: "#7E7E7E", fontSize: "14px" }}>
                                                            Posts Word Cloud
                                                        </span>
                                                    </div>
                                                    <div className='col-lg-6 text-end pe-4 mb-3'>
                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", backgroundColor: "rgba(200, 59, 147, 0.40)", borderRadius: "5px 0px 0px 5px", border: "0.5px solid #C4C4C4" }}>Keywords</button>
                                                        <button className='px-2 py-1 ' style={{ fontSize: "12px", fontWeight: "600", color: "#383838", borderRadius: "0px 5px 5px 0px", border: "0.5px solid #C4C4C4" }}>Hashtags</button>

                                                    </div>


                                                    <div className='col-lg-12 text-center my-2'>
                                                        <img src={require('../../../../Imagez/Dashboard/All/WordCloud.png')} style={{ "borderRadius": "15px" }} width={474} height={222} />

                                                    </div>
                                                </div>





                                            </div>





                                        </div>
                                    </section>

                                </section>
                            </div>
                    }
                </div>
            </div>



        </>
    )
}

export default ReportExp