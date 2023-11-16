import React from 'react'
import Row1 from '../../Imagez/Dashboard/All/CampaignReportingRow1.png'
import Row2 from '../../Imagez/Dashboard/All/CampaignReportingRow2.png'
import Slidez from '../../Imagez/Dashboard/All/Dashboard Illustration_Glow.png'
import { useState } from 'react'
import PremiumPopUp from './component/PremiumPopUp'
import { useNavigate } from 'react-router-dom'
const Reports = () => {

    const [premiumShow, setPremiumShow] = useState(false);
    const showPremium = () => {
        setPremiumShow(!premiumShow);
    }

    const Glow = () => {
        document.getElementById("tada").style.color = "aqua";
    }
    const GlowEnd = () => {
        document.getElementById("tada").style.color = "white";
    }
    const navigate = useNavigate();
    const RepNow = () => {
        navigate("/Dreabee/Dashboard/ReportExp")
    }
    return (
        <>

            {
                premiumShow ?
                    <>
                        <section>
                            <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "25", "position": "relative", "top": "20%", "left": "72.5rem" }} onClick={showPremium} > <i class='bx bx-x-circle bx-spin' id='tada' onMouseOver={Glow} onMouseLeave={GlowEnd} style={{ "fontSize": "38px", "color": "white" }} /> </button>
                            <PremiumPopUp />
                        </section>
                    </>
                    : null

            }
            <div className='container-fluid'>
                {/* HEADING  */}
                <div className='row text-center'>
                    <div className='col-12 bg-'>

                        {/* HEADING */}
                        <section className='mt-3 mb-5 '>
                            <section className='mb-3'>  <span> <i className='bx bx-task p-2 ' style={{ "fontSize": "1.5rem", "fontWeight": "500", "color": "white", "background": "#C83B93", "borderRadius": "50%" }}></i> </span> &nbsp; <span className='mt-2' style={{ "fontSize": "1.75rem", "fontWeight": "700" }}>Campaign Reporting</span> </section>
                            <span className='' style={{ "fontWeight": "400", "fontSize": "18px" }}> Campaign Reporting is available only in the Dreabee Pro Plan. With DREABEE Reporting, you’ll be able to<br /></span>
                        </section>

                        {/* CARDS  */}

                        <section className='row d-flex justify-content-center' style={{ height: "0px", "width": "" }}>
                           
                           
                            <div className='col-4 ' style={{ marginTop: "4.5rem", borderRight: "4px solid #ED75C0none",border: "4px solid #ED75C0", height: "200px" }}></div>
                            <div className='col-4 ' style={{ marginTop: "4.5rem",borderLeft: "4px solid #ED75C0",border: "4px solid #ED75C0", height: "200px" }}></div>


                        </section>
                        {/* 1st row  */}
                        <section className='row mb-5 d-flex  justify-content-evenly'>
                            {/* 1 */}
                            <div className='col-3 bg-light Kardz' style={{
                                width: '232px', height: "145px", borderRadius: "10px", boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"
                            }}>


                                <div className='bg- row py-2'>

                                    <div className='col-lg-12'>
                                        <img src={require('../../Imagez/Dashboard/All/icons/pink_icons/Reportz/MCP2.png')} width={46} />
                                    </div>

                                    <div className='col-lg-12 my-1'>
                                        <span style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Measure Campaign Performance
                                        </span>
                                    </div>

                                    <div className='col-lg-12'>
                                        <section style={{ fontWeight: "400", fontSize: "12px", color: "#7E7E7E", lineHeight: "" }}>
                                            Measure the performance of the campaign with metrics like Reach, Engagement, Video Views etc.
                                        </section>
                                    </div>
                                </div>



                            </div>
                            {/* 2 */}
                            <div className='col-3 bg-light Kardz' style={{
                                width: '232px', height: "145px", borderRadius: "10px"
                                , boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"
                            }}>


                                <div className='bg- row py-2'>

                                    <div className='col-lg-12'>
                                        <img src={require('../../Imagez/Dashboard/All/icons/pink_icons/Reportz/TCP2.png')} width={46} />
                                    </div>

                                    <div className='col-lg-12 my-1'>
                                        <span style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Track Campaign Progress
                                        </span>
                                    </div>

                                    <div className='col-lg-12'>
                                        <section style={{ fontWeight: "400", fontSize: "12px", color: "#7E7E7E", lineHeight: "" }}>
                                            Track how many posts have gone live in the overall campaign as well for each influencer
                                        </section>
                                    </div>
                                </div>



                            </div>
                            {/* 3 */}
                            <div className='col-3 bg-light Kardz' style={{
                                width: '232px', height: "145px", borderRadius: "10px"
                                , boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"
                            }}>


                                <div className='bg- row py-2'>

                                    <div className='col-lg-12'>
                                        <img src={require('../../Imagez/Dashboard/All/icons/pink_icons/Reportz/BHP2.png')} width={46} />
                                    </div>

                                    <div className='col-lg-12 my-1'>
                                        <section style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Benchmark with Historical Performance
                                        </section>
                                    </div>

                                    <div className='col-lg-12'>
                                        <section style={{ fontWeight: "400", fontSize: "12px", color: "#7E7E7E", lineHeight: "" }}>
                                            Benchmark the campaign and influencers performance with the historical data
                                        </section>
                                    </div>
                                </div>



                            </div>



                            {/* <img src={Row1} alt='row1' style={{ "width": "55rem" }} /> */}

                        </section>


                        {/* 2nd row  */}
                        <section className='row mt-5 d-flex  justify-content-evenly'>
                            {/* 1 */}
                            <div className='col-3 bg-light Kardz' style={{
                                width: '232px', height: "145px", borderRadius: "10px"
                                , boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"
                            }}>

                                <div className='bg- row py-2'>

                                    <div className='col-lg-12'>
                                        <img src={require('../../Imagez/Dashboard/All/icons/pink_icons/Reportz/ROI2.png')} width={46} />
                                    </div>

                                    <div className='col-lg-12 my-1'>
                                        <span style={{ fontWeight: "600", fontSize: "14px" }}>
                                            ROI Analysis
                                        </span>
                                    </div>

                                    <div className='col-lg-12'>
                                        <section style={{ fontWeight: "400", fontSize: "12px", color: "#7E7E7E", lineHeight: "" }}>
                                            Track the ROI of each influencer with metrics like CPE and CPV
                                        </section>
                                    </div>
                                </div>



                            </div>
                            {/* 2 */}
                            <div className='col-3 bg-light Kardz' style={{
                                width: '232px', height: "145px", borderRadius: "10px"
                                , boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"
                            }}>


                                <div className='bg- row py-2'>

                                    <div className='col-lg-12'>
                                        <img src={require('../../Imagez/Dashboard/All/icons/pink_icons/Reportz/UAS2.png')} width={46} />
                                    </div>

                                    <div className='col-lg-12 my-1'>
                                        <span style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Understand Audience Sentiment
                                        </span>
                                    </div>

                                    <div className='col-lg-12'>
                                        <section style={{ fontWeight: "400", fontSize: "12px", color: "#7E7E7E", lineHeight: "" }}>
                                            Track the sentiment of the influencer’s audience on each post and the entire campaign
                                        </section>
                                    </div>
                                </div>



                            </div>
                            {/* 3 */}
                            <div className='col-3 bg-light Kardz' style={{
                                width: '232px', height: "145px", borderRadius: "10px"
                                , boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"
                            }}>


                                <div className='bg- row py-2'>

                                    <div className='col-lg-12'>
                                        <img src={require('../../Imagez/Dashboard/All/icons/pink_icons/Reportz/EXP2.png')} width={46} />
                                    </div>

                                    <div className='col-lg-12 my-1'>
                                        <span style={{ fontWeight: "600", fontSize: "14px" }}>
                                            Easily Export Report
                                        </span>
                                    </div>

                                    <div className='col-lg-12'>
                                        <section style={{ fontWeight: "400", fontSize: "12px", color: "#7E7E7E", lineHeight: "" }}>
                                            Easily share the report as a link or as an Excel Sheet
                                        </section>
                                    </div>
                                </div>



                            </div>




                            {/* <img src={Row2} alt='row1' style={{ "width": "55rem" }} /> */}

                        </section>






                        {/* BASE  */}
                        <section className='mt-5 ' style={{ "marginBottom": "5rem" }}>
                            <section className='row'>


                                <section className='col-lg-3 text-center  ps-0' style={{ height: "0px", "width ": "0px" }} >
                                    {/* <img src={Slidez} alt='img' style={{ "height": "" }} /> */}

                                    <img src={require('../../Imagez/Dashboard/All/wat/reportingCard1.png')} width={400}
                                        style={{
                                            position: "relative", top: "-2rem", left: "-3rem"
                                        }}
                                    />
                                </section>


                                <section className='col-lg-6' >


                                    <div className='row bg-' >


                                        <div className='col-lg-12 bg- my-4' >
                                            <h5>Check Demo Reports</h5>
                                        </div>


                                        <div className='col-lg-6 bg-' >
                                            <button className='text-center p-2  ' onClick={RepNow} style={{
                                                "width": "18rem", "height": "3.2rem", "fontWeight": "600", "fontSize": "1.05rem", "borderRadius": "10px",
                                                "color": "#000000", "backgroundColor": "white", "border": "1px solid #C83B93"
                                            }}>Lunch Box Recipe Report</button>

                                        </div>

                                        <div className='col-lg-6 bg-' >
                                            <button className='text-center p-2  ' style={{
                                                "width": "18rem", "height": "3.2rem", "fontWeight": "600", "fontSize": "1.05rem", "borderRadius": "10px",
                                                "color": "#000000", "backgroundColor": "white", "border": "1px solid #C83B93"
                                            }}>Chatpata Shukriya Report </button>


                                        </div>

                                        <div className='col-lg-12 bg- my-4' >
                                            <button className='text-center p-2' onClick={showPremium} style={{
                                                "width": "18rem", "height": "2.8rem", "height": "2.8rem", "fontWeight": "600", "fontSize": "1.05rem", "borderRadius": "10px",
                                                "color": "white", "backgroundColor": "#C83B93", "border": "none"
                                            }}>Explore DREABEE pro Benefits</button>
                                        </div>

                                    </div>





                                </section>


                                <section className='col-lg-3 text-center ps-0 ' style={{ height: "0px", "width ": "0px" }}>
                                    <img className='bg- pe-2' src={require('../../Imagez/Dashboard/All/wat/reportingCard2.png')} width={400}
                                        style={{
                                            position: "relative", top: "0rem", left: "-1rem"
                                        }}
                                    />
                                </section>


                            </section>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reports