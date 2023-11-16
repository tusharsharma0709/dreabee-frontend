import React, { useEffect, useState } from 'react'
import banner from '../../../../Imagez/Dashboard/All/Upgrade Card.png'
import { useLocation, useNavigate } from 'react-router-dom';
import GRaph from "../../../../Imagez/Dashboard/All/Pie Chart.png";
import Pepsi from "../../../../Imagez/Dashboard/All/Pepsico.png";
import numeral from 'numeral';
import axios from 'axios';
import { baseUrl2 } from '../../../../Routez/Routey';
const ProfileInsta = ({ influencerData }, { Key }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        console.log("this pages locations state", location)
        console.log("----location--INSTAPROFF--", location.state);
        // navigate("Dreabee/Dashboard/Profile/Instagram", { state: { tag: Key } })

        ProfileDetailsI();
    }, 2000)

    const [actionValue, setActionValue] = useState("info");
    const [profileDataI, setProfileDataI] = useState([]);


    // INSTAGRAM 
    const ProfileDetailsI = () => {
        // console.log("the insta end ", location.state.keyWord)
        axios.post(`${baseUrl2}/instagram/profile-details`, {
            name: localStorage.getItem("UserName")
        }).then((res) => {
            console.log("THE Instagram API PROFILE DATA -", res.data)
            setProfileDataI(res.data)
        }).catch((err) => {
            console.log("the profile insta page errorr - ", err)
        })
    }





    return (
        <>


            <div className='row'>

                {/* Left NAvbar  */}
                <div className='col-2  pt-2 StickSide' style={{
                    height: "70vh",
                    position: "fixed",
                    top: "14rem",
                    left: "9rem",
                    // width: "67.5rem",
                    overflow: "scroll",
                    overflowX: "hidden",
                }} >


                    <ul className="nav-list" style={{ "listStyleType": "none" }}>

                        <li className={actionValue == "info" ? "act_btn  ms-0  d-flex align-items-center" : ' ms-0  d-flex align-items-center navHovTextNoBg'} onClick={() => { document.getElementById("Info").scrollIntoView({ behavior: "smooth" }); setActionValue("info") }} style={{ "marginTop": "1rem" }}>
                            <i class='bx bxs-shapes ' style={{ "fontWeight": "600", "fontSize": "26px", "color": "" }}></i> &nbsp;   &nbsp; <span className=" " style={{ "fontSize": "18px", "fontWeight": "600", "color": "" }}>Info</span>
                        </li>
                        <li className={actionValue == "Insight" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 bg- d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-star' style={{ "fontWeight": "600", "fontSize": "26px" }} ></i> &nbsp;  &nbsp; <span className="" onClick={() => { document.getElementById("Insight").scrollIntoView({ behavior: "smooth" }); setActionValue("Insight") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Insight</span>
                        </li>
                        <li className={actionValue == "Performance" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-layer' style={{ "fontWeight": "600", "fontSize": "26px" }}></i> &nbsp; &nbsp;  <span className="" onClick={() => { document.getElementById("Performance").scrollIntoView({ behavior: "smooth" }); setActionValue("Performance") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Performance</span>
                        </li>

                        <li className={actionValue == "Engagement" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-star' style={{ "fontWeight": "600", "fontSize": "26px" }} ></i> &nbsp;  &nbsp; <span className="" onClick={() => { document.getElementById("Engagement").scrollIntoView({ behavior: "smooth" }); setActionValue("Engagement") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Engagement</span>
                        </li>
                        <li className={actionValue == "PaidEngagement" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-star' style={{ "fontWeight": "600", "fontSize": "26px" }} ></i> &nbsp;  &nbsp; <span className="" onClick={() => { document.getElementById("PaidEngagement").scrollIntoView({ behavior: "smooth" }); setActionValue("PaidEngagement") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Paid Engagement</span>
                        </li>
                        <li className={actionValue == "AudienceMetrics" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-star' style={{ "fontWeight": "600", "fontSize": "26px" }} ></i> &nbsp; &nbsp;  <span className="" onClick={() => { document.getElementById("AudienceMetrics").scrollIntoView({ behavior: "smooth" }); setActionValue("AudienceMetrics") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Audience Metrics</span>
                        </li>
                        <li className={actionValue == "Growth" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-star' style={{ "fontWeight": "600", "fontSize": "26px" }} ></i> &nbsp;  &nbsp; <span className="" onClick={() => { document.getElementById("Growth").scrollIntoView({ behavior: "smooth" }); setActionValue("Growth") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Growth </span>
                        </li>
                        <li className={actionValue == "Brands" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-star' style={{ "fontWeight": "600", "fontSize": "26px" }} ></i> &nbsp; &nbsp;  <span className="" onClick={() => { document.getElementById("Brands").scrollIntoView({ behavior: "smooth" }); setActionValue("Brands") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Brands </span>
                        </li>
                        <li className={actionValue == "VisitInstagram" ? "act_btn  mt-4 d-flex align-items-center" : 'mt-4 ms-0 d-flex align-items-center navHovTextNoBg'} style={{ "marginTop": "" }}>
                            <i class='bx bx-star' style={{ "fontWeight": "600", "fontSize": "26px" }} ></i> &nbsp; &nbsp;  <span className="" onClick={() => { document.getElementById("VisitInstagram").scrollIntoView({ behavior: "smooth" }); setActionValue("VisitInstagram") }} style={{ "fontSize": "18px", "fontWeight": "600" }}>Visit Instagram </span>
                        </li>

                    </ul>
                </div>

                {/* Right SEcTion  */}

                {/* <div className='col-10 bg-' style={{ "border": "0px solid black", "height": "62.9vh", "position": "fixed", "top": "16.5rem", "left": "24.5rem", "width": "67.5rem", "overflow": "scroll", "overflowX": "hidden" }} > */}
                {/* <div className='bg-' style={{ "height": "60vh", "width": "100%" }}>
                        <span>
                            <img src={banner} alt='img' style={{ "width": "55rem", "marginTop": "5rem", "marginLeft": "5rem" }} />
                            <span style={{ "position": "relative", "bottom": "3.5rem", "left": "50rem" }}>    <button className='text-center p-1 pt-0  ' style={{
                                "width": "8.2rem", "height": "2.5rem",
                                "fontWeight": "600",
                                "fontSize": "0.8rem",
                                "borderRadius": "10px",
                                "color": "white",
                                "backgroundColor": "#C83B93", "border": "2px solid #C83B93",
                                "marginLeft": "0rem"
                            }}><span style={{ "position": "relative", "top": "2px" }}> Contact Sales</span></button>
                            </span>
                        </span>

                    </div> */}


                <div
                    className="col-10 bg-"
                    style={{
                        border: "0px solid black",
                        height: "68vh",
                        position: "fixed",
                        top: "13.8rem",
                        left: "24.7rem",
                        width: "67.5rem",
                        overflow: "scroll",
                        overflowX: "hidden",
                    }}>
                    <div className="bg-" style={{ height: "200vh", width: "100%" }}>
                        {/* SECTION 1  */}
                        <div className="row mt-2 p-2" id="Info">
                            {/* Card 0  */}
                            <div
                                className=" mx-2 py-3 KardzProf"
                                style={{
                                    backgroundColor: "white",
                                    width: "65rem ",
                                    height: "153px",
                                    borderRadius: "10px",
                                }}>


                                <div>
                                    <table className='InstaProfileTab1'>
                                        <tr>
                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Followers
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {/* 34.2 M */}
                                                    {(numeral(profileDataI?.usersCount).format('0.0a'))}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Avg Likes
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {/* 566 */}
                                                    {(numeral(profileDataI?.avgLikes).format('0.0a'))}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Avg Comments
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {/* 559 */}
                                                    {(numeral(profileDataI?.avgVideoComments).format('0.0a'))} %
                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Avg Reel Views
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {/* 30.65M */}
                                                    {(numeral(profileDataI?.avgVideoViews).format('0.0a'))}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    ER
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {/* $748.51k */}
                                                    {((profileDataI?.avgER) * 100).toFixed(2)}%
                                                </div>
                                            </td>

                                        </tr>
                                    </table>
                                </div>




                            </div>






                        </div>

                        {/* SECTION 2  */}
                        <div className="row my-2  p-2" id="Insight">
                            <div className="KardzProf mx-2" style={{
                                width: "312px ",
                                height: "409px",
                                borderRadius: "10px",
                                background: "white"
                            }}>



                                <section className='bg- p-4 h-100'>
                                    <span style={{ "fontSize": "24px", fontWeight: "600" }}>Dreabee Score</span>
                                    <img
                                        src={GRaph}
                                        alt="img"
                                        className="mt-4 me-5"
                                        style={{ width: "16rem" }}
                                    />
                                </section>

                            </div>


                            <div className="KardzProf mx-2" style={{
                                width: "713px ",
                                height: "409px",
                                borderRadius: "10px",
                                background: "white"
                            }}>

                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "24px", fontWeight: "600" }}>Insights</span>


                                    <div className="row">
                                        <div className="col">
                                            {/* <ul
                                                className="ms-2"
                                                style={{
                                                    listStyle: "none",
                                                    fontSize: "18px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                    ✈ Travel
                                                </li>
                                                <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                    🎨 Art & Entertainment
                                                </li>
                                                <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                    🦾 Fitness
                                                </li>
                                                <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                    🦾 Health & Fitness
                                                </li>
                                            </ul> */}

                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >  ✈ Travel</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>

                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} > 🎨 Art & Entertainment</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>

                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >  🦾 Fitness</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>

                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} > 🦾 Health & Fitness</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>





                                        </div>
                                        <div className="col">
                                            {/* <ul
                                                className="ms-2"
                                                style={{
                                                    listStyle: "none",
                                                    fontSize: "18px",
                                                    fontWeight: "700",
                                                }}
                                            >
                                                <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                 
                                                </li>
                                                <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                 
                                                </li>
                                                <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                 
                                                </li>
                                                <li className='d-flex flex-column' style={{ marginTop: "", marginBottom: "3.2rem" }}>
                                                    Others
                                                    <input type='range' className='mt-2' />
                                                </li>
                                            </ul> */}



                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >     👚 Fashion</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>

                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >    👪 Family & Parentingt</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>

                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >     🎓 Education</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>

                                            <div className='row px-2 my-3 py-2 bg- '>
                                                <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} > 🦾 Others</div>
                                                <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                                <input type='range' className='mt-1' />
                                            </div>

                                        </div>
                                    </div>



                                </section>
                            </div>






                        </div>








                        {/* SECTION 3 --- Performance */}
                        <div className="row my-2 p-2" id="Performance">
                            <div className="KardzProf mx-2" style={{
                                width: "1027px ",
                                height: "403px",
                                borderRadius: "10px",
                                background: "white"
                            }}>


                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "18px", fontWeight: "600" }}>Content Performance & Benchmark</span>

                                    <div className='row my-3' >
                                        {/* 1 */}
                                        <div className='col-lg'>
                                            <h4 style={{ "fontSize": "16px", "fontWeight": "400", "color": "#7E7E7E" }}> Mentions per day </h4>
                                            <h4 style={{ "fontSize": "26px", "fontWeight": "600" }}> 0.19 </h4>

                                        </div>
                                        {/* 2 */}
                                        <div className='col-lg ps-4' style={{ borderLeft: "1px solid black" }}>
                                            <h4 style={{ "fontSize": "16px", "fontWeight": "400", "color": "#7E7E7E" }}>Ads per day </h4>
                                            <h4 style={{ "fontSize": "26px", "fontWeight": "600" }}>17.38 </h4>

                                        </div>
                                        {/* 3 */}
                                        <div className='col-lg'></div>
                                        {/* 4 */}
                                        <div className='col-lg-4 pt-1'>
                                            <section className='d-flex justify-content-start'>
                                                <span className=' bg-success mt-1' style={{ "borderRadius": "50%", "height": "14px", width: "14px" }} ></span>
                                                &nbsp;&nbsp;&nbsp;
                                                <h4 style={{ "fontSize": "16px", "fontWeight": "400", "color": "#7E7E7E", "lineHeight": "25px" }}>Mentions</h4>
                                            </section>
                                            <section className='d-flex  justify-content-start'>
                                                <span className=' mt-1' style={{ "borderRadius": "50%", "height": "14px", width: "14px", background: "#2D59F5" }} ></span>
                                                &nbsp;&nbsp;&nbsp;
                                                <h4 style={{ "fontSize": "16px", "fontWeight": "400", "color": "#7E7E7E", "lineHeight": "25px" }}>Ad Mentions</h4>
                                            </section>



                                        </div>
                                    </div>





                                </section>


                            </div>
                        </div>






                        {/* SECTION 4  Overall Engagement & Views */}
                        <div className="row mt-2 p-2 pb-1" id="Engagement">
                            <div className="KardzProf mx-2" style={{
                                width: "1027px ",
                                height: "241px",
                                borderRadius: "10px",
                                background: "white"
                            }}>


                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "18px", fontWeight: "600" }}>Overall Engagement & Views</span>

                                    {/* 1 */}
                                    <div className='w-100 row bg-prmary py-2  mt-3' style={{ "borderBottom": "1px solid #DADADA" }} >

                                        <div className='col-lg-2 bg- text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6516C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6516 17.6516C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6516 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#C83B93" />
                                            </svg>
                                            <h4 style={{ "fontSize": "18px", fontWeight: "600", "color": "#C83B93" }}>Posts</h4>
                                        </div>

                                        <div className='col-lg-8 bg-'>
                                            <section className='row px-2'>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Followers</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>34.2 M</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Likes</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>424.1 K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Comments</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>10K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>ER</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>1.25 %</h4>

                                                </div>
                                            </section>
                                        </div>

                                        <div className='col-lg-2 text-center p-1'>


                                        </div>
                                    </div>

                                    {/* 2 */}
                                    <div className='w-100 row bg- py-2 mt-2' >

                                        <div className='col-lg-2 bg- text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6516C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6516 17.6516C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6516 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#C83B93" />
                                            </svg>
                                            <h4 style={{ "fontSize": "18px", fontWeight: "600", "color": "#C83B93" }}>Reels</h4>
                                        </div>

                                        <div className='col-lg-8 bg-'>
                                            <section className='row px-2'>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Followers</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>34.2 M</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Likes</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>424.1 K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Comments</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>10K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Reel Views</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>424.1 K</h4>

                                                </div>
                                            </section>
                                        </div>

                                        <div className='col-lg-2 text-center p-1'>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>ER</h4>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>1.25 %</h4>

                                        </div>
                                    </div>



                                </section>


                            </div>

                        </div>
                        {/* SECTION 5  Likes to comments Ratio   /  Reels View to Like Ratio  /  Post Frequency */}
                        <div className="row p-2 pt-1 mb-2   " id="">
                            <div className="KardzProf ms-2" style={{ width: "508px ", height: "80px", borderRadius: "10px", background: "white" }}>
                                <section className='w-100 h-100 bg- py-2'>
                                    <div className='row px-4 py-2 bg- '>
                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Likes to comments Ratio</div>
                                        <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                        <input type='range' className='mt-1' />
                                    </div>
                                </section>
                            </div>



                            <div className="KardzProf mx-2" style={{ width: "508px ", height: "80px", borderRadius: "10px", background: "white" }}>
                                <section className='w-100 h-100 bg- py-2'>
                                    <div className='row px-4 py-2 bg- '>
                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Reels View to Like Ratio</div>
                                        <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>41.25 %</div>
                                        <input type='range' className='mt-1' />
                                    </div>
                                </section>
                            </div>



                            <div className="KardzProf mx-2 mt-2" style={{ width: "508px ", height: "80px", borderRadius: "10px", background: "white" }}>
                                <section className='w-100 h-100 bg- py-2'>
                                    <div className='row px-4 py-2 bg- '>
                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Post Frequency</div>
                                        <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>
                                        <input type='range' className='mt-1' />
                                    </div>
                                </section>
                            </div>



                        </div>







                        {/* SECTION 6  Paid Partnership Engagement Vies */}
                        <div className="row p-2 pt-1 my-2" id="PaidEngagement">
                            <div className="KardzProf ms-2" style={{
                                width: "1027px ",
                                height: "241px",
                                borderRadius: "10px",
                                background: "white"
                            }}>



                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "18px", fontWeight: "600" }}>Paid Partnership Engagement Vies</span>

                                    {/* 1 */}
                                    <div className='w-100 row bg-prmary py-2  mt-3' style={{ "borderBottom": "1px solid #DADADA" }} >

                                        <div className='col-lg-2 bg- text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6516C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6516 17.6516C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6516 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#C83B93" />
                                            </svg>
                                            <h4 style={{ "fontSize": "18px", fontWeight: "600", "color": "#C83B93" }}>Posts</h4>
                                        </div>

                                        <div className='col-lg-8 bg-'>
                                            <section className='row px-2'>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>Followers</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>34.2 M</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>Avg Likes</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>424.1 K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>Avg Comments</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>10K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>ER</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>1.25 %</h4>

                                                </div>
                                            </section>
                                        </div>

                                        <div className='col-lg-2 text-center p-1'>


                                        </div>
                                    </div>

                                    {/* 2 */}
                                    <div className='w-100 row bg- py-2 mt-2' >

                                        <div className='col-lg-2 bg- text-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6516C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6516 17.6516C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6516 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#C83B93" />
                                            </svg>
                                            <h4 style={{ "fontSize": "18px", fontWeight: "600", "color": "#C83B93" }}>Reels</h4>
                                        </div>

                                        <div className='col-lg-8 bg-'>
                                            <section className='row px-2'>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>Followers</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>34.2 M</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>Avg Likes</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>424.1 K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>Avg Comments</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>10K</h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>Avg Reel Views</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>424.1 K</h4>

                                                </div>
                                            </section>
                                        </div>

                                        <div className='col-lg-2 text-center p-1'>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "600" }}>ER</h4>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>1.25 %</h4>

                                        </div>
                                    </div>



                                </section>






                            </div>
                        </div>





                        {/* SECTION 7  Audience Engagement */}
                        <div className="row p-2 pt-1 my-2" id="AudienceMetrics">
                            <div className="KardzProf ms-2 py-au" style={{
                                width: "1027px ",
                                height: "307px",
                                borderRadius: "10px",
                                background: "white"
                            }}>

                                <section className='bg- p-4 h-100'>
                                    <h4 style={{ "fontSize": "18px", fontWeight: "600" }}>Audience Engagement</h4>
                                    <div className='w-100 row bg-ary mx' >
                                        <div className='col-lg-8 bg-'>
                                            <section className='row px-2'>


                                                <div className='col-lg-6 bg-ndary '>



                                                    <div className='row my-4  px-2 '>
                                                        <h5 style={{ fontWeight: "400 ", fontSize: "16px", "lineHeight": "10px" }} className=''>Top City </h5>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Mumbai</div>
                                                        <div className='col-4 text-end     bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>
                                                        <input type='range' className='mt-2' />
                                                    </div>


                                                    <div className='row my-5 mb-4 px-2 '>

                                                        <h5 style={{ fontWeight: "400 ", fontSize: "16px", "lineHeight": "10px" }} className=''>Top State </h5>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Maharashtra</div>
                                                        <div className='col-4 text-end     bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>
                                                        <input type='range' className='mt-2' />
                                                    </div>


                                                </div>



                                                <div className='col-lg-6  bg-ing '>

                                                    <div className='row my-4 px-2'>
                                                        <h5 style={{ fontWeight: "400 ", fontSize: "16px", "lineHeight": "10px" }} className=''>Top Country </h5>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >India</div>
                                                        <div className='col-4 text-end     bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>
                                                        <input type='range' className='mt-2' />

                                                    </div>

                                                    <div className='row my-5 mb-4 px-2'>
                                                        <h5 style={{ fontWeight: "400 ", fontSize: "16px", "lineHeight": "10px" }} className=''>Top Age Group </h5>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >20-25</div>
                                                        <div className='col-4 text-end     bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>
                                                        <input type='range' className='mt-2' />
                                                    </div>


                                                </div>

                                            </section>

                                        </div>
                                        <div className='col-lg-4 bg-danger'> PIE CHACHA</div>
                                    </div>
                                </section>

                            </div>
                        </div>





                        {/* SECTION 8  Audience Geography */}
                        <div className="row p-2 pt-1 my-2" >
                            <div className="KardzProf ms-2" style={{
                                width: "1027px ",
                                height: "313px",
                                borderRadius: "10px",
                                background: "white"
                            }}>


                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "18px", fontWeight: "600" }}>Audience Geography </span>
                                </section>

                            </div>
                        </div>







                        {/* SECTION BRANDS MENTION  */}
                        {/* Mention dynamics on YouTube */}
                        <div className='monthly_report_section row  ms-2 Kardz my-4' id="Growth" style={{
                            width: "1027px",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
                        }}>
                            <div className='col-lg-4'>
                                <label className='Xplore_Card_Topic'>Growth In Last 30 Days</label> &nbsp;
                                <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>
                                <div>

                                    <span className='d-flex flex-row align-items-center '>
                                        <section className='Xplore_rectab' />
                                        <section className='d-flex flex-column ms-3' style={{ "borderLeft": "" }}>
                                            <label className='three' style={{ "position": "relative", top: "32px" }}><p>Total Reach</p></label>
                                            <label className='two' style={{ "position": "relative", top: "18px", "fontSize": "2.375rem" }}><p>30.65M</p></label> &nbsp;
                                        </section>
                                    </span>
                                    <span className='d-flex flex-row align-items-center '>
                                        <section className='Xplore_rectag' />
                                        <section className='d-flex flex-column ms-3' style={{ "borderLeft": "" }}>
                                            <label className='three' style={{ "position": "relative", top: "30px" }}><p>New Followers Gained</p></label>
                                            <label className='two' style={{ "position": "relative", top: "20px" }}><p style={{ "fontSize": "2.375rem" }}>566</p></label> &nbsp;
                                        </section>
                                    </span>





                                </div>
                            </div>

                            <div className='col-lg-8'>
                                <img src={require('../../../../Imagez/Dashboard/All/chart.png')} className='my-5 me-4' width={650} />
                            </div>
                        </div>




                        {/* SECTION 9   */}
                        <div className="row my-2 p-2" id="Brands">
                            {/* Card 1  */}
                            <div
                                className="KardzProf mx-2"
                                style={{
                                    width: "1027px ",
                                    height: "30rem",
                                    borderRadius: "10px",
                                    background: "white",
                                }}
                            >
                                {/* ABOVE ROW  */}
                                <div className="row bg- mt-5">
                                    <div className="col-12 bg-">
                                        <i
                                            className="bx bx-star"
                                            style={{
                                                fontWeight: "700",
                                                fontSize: "26px",
                                                marginLeft: "2rem",
                                            }}
                                        ></i>{" "}
                                        &nbsp;{" "}
                                        <span
                                            className=""
                                            style={{ fontWeight: "700", fontSize: "24px" }}
                                        >
                                            Brands
                                        </span>
                                        {/* <i class='bx bxl-instagram-alt' style={{ "fontSize": "28px", "fontWeight": "600" }} ></i>
            <span style={{ "fontWeight": "700", "fontSize": "24px" }}>Content</span> */}
                                    </div>
                                </div>
                                {/* BOTTOM ROW  */}
                                <div className="row bg- mt-4">
                                    <div className="col d-flex">
                                        <span
                                            style={{
                                                paddingLeft: "1rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#C83B93",
                                            }}
                                        >
                                            All
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            Automobile
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            Device
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            Telecommunication
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            Watches And Eyewear
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            Non-Alcoholic Beverages
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            E-Commerce
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            FMCG
                                        </span>
                                        <span
                                            style={{
                                                paddingLeft: "2rem",
                                                fontSize: "13.5px",
                                                fontWeight: "600",
                                                color: "#7E7E7E",
                                            }}
                                        >
                                            Applications
                                        </span>
                                        {/* <span style={{"paddingLeft":"2rem"}} >hi10</span> */}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div
                                            className="bg  d-flex justify-content-evenly p-1 py-3 mt-5"
                                            style={{ width: "100%", backgroundColor: "#F8F5FF" }}
                                        >
                                            <section
                                                className="bg text-center  ms-2 p-2"
                                                style={{
                                                    backgroundColor: "whitesmoke",
                                                    boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                                                    height: "12rem",
                                                    width: "12rem",
                                                }}
                                            >
                                                <span
                                                    style={{ fontSize: "14px", paddingBottom: "2px" }}
                                                >
                                                    {" "}
                                                    <u>15 Posts </u>{" "}
                                                </span>
                                                <section>
                                                    {" "}
                                                    <img
                                                        src={Pepsi}
                                                        alt="img"
                                                        style={{ width: "7rem" }}
                                                    ></img>{" "}
                                                </section>
                                                <section>Pepsi</section>
                                                <section style={{ fontSize: "12px" }}>@Pepsi</section>
                                            </section>
                                            <section
                                                className="bg text-center  p-2"
                                                style={{
                                                    backgroundColor: "whitesmoke",
                                                    boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                                                    height: "12rem",
                                                    width: "12rem",
                                                }}
                                            >
                                                <span
                                                    style={{ fontSize: "14px", paddingBottom: "2px" }}
                                                >
                                                    {" "}
                                                    <u>15 Posts </u>{" "}
                                                </span>
                                                <section>
                                                    {" "}
                                                    <img
                                                        src={Pepsi}
                                                        alt="img"
                                                        style={{ width: "7rem" }}
                                                    ></img>{" "}
                                                </section>
                                                <section>Pepsi</section>
                                                <section style={{ fontSize: "12px" }}>@Pepsi</section>
                                            </section>
                                            <section
                                                className="bg text-center  p-2"
                                                style={{
                                                    backgroundColor: "whitesmoke",
                                                    boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                                                    height: "12rem",
                                                    width: "12rem",
                                                }}
                                            >
                                                <span
                                                    style={{ fontSize: "14px", paddingBottom: "2px" }}
                                                >
                                                    {" "}
                                                    <u>15 Posts </u>{" "}
                                                </span>
                                                <section>
                                                    {" "}
                                                    <img
                                                        src={Pepsi}
                                                        alt="img"
                                                        style={{ width: "7rem" }}
                                                    ></img>{" "}
                                                </section>
                                                <section>Pepsi</section>
                                                <section style={{ fontSize: "12px" }}>@Pepsi</section>
                                            </section>
                                            <section
                                                className="bg text-center  p-2"
                                                style={{
                                                    backgroundColor: "whitesmoke",
                                                    boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                                                    height: "12rem",
                                                    width: "12rem",
                                                }}
                                            >
                                                <span
                                                    style={{ fontSize: "14px", paddingBottom: "2px" }}
                                                >
                                                    {" "}
                                                    <u>15 Posts </u>{" "}
                                                </span>
                                                <section>
                                                    {" "}
                                                    <img
                                                        src={Pepsi}
                                                        alt="img"
                                                        style={{ width: "7rem" }}
                                                    ></img>{" "}
                                                </section>
                                                <section>Pepsi</section>
                                                <section style={{ fontSize: "12px" }}>@Pepsi</section>
                                            </section>
                                            {/* <section className='bg text-center mx-1 p-2' style={{ "backgroundColor": "whitesmoke", "boxShadow": " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)", "height": "12rem", "width": "12rem" }}>
                <span style={{ "fontSize": "14px", "paddingBottom": "2px" }}> <u>15 Posts </u> </span>
                <section>   <img src={Pepsi} alt='img' style={{ "width": "7rem" }}></img>  </section>
                <section>Pepsi</section>
                <section style={{ "fontSize": "12px" }}>@Pepsi</section>
              </section> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* SECTION 4  Overall Engagement & Views */}
                        <div className="row mt-2 p-2 pb-1" id="VisitInstagram">
                            <div className="KardzProf mx-2 Faqz btnz" style={{
                                width: "1027px ",
                                height: "100px",
                                borderRadius: "10px",
                                background: ""
                            }}>


                                <section className='bg- p-4 h-100 text-center btnz'>

                                    <span className='bg- d-flex align-items-center justify-content-center  ' style={{ "fontSize": "30px", fontWeight: "700" }}>Visit Instagram  &nbsp; <i class='bx bxl-instagram' style={{ color: "", fontSize: "40px", fontWeight: "700" }}  ></i></span>







                                </section>


                            </div>

                        </div>


                    </div>
                </div>



                {/* </div> */}








            </div>


        </>
    )
}

export default ProfileInsta