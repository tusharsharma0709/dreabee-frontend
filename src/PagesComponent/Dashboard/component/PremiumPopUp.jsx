import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../../Routez/Routey';
const PremiumPopUp = () => {
    const [showNoty, setShowNoty] = useState(false);


    const Cross = () => {
        setShowNoty(false)
    }
    const Glow = () => {
        document.getElementById("tada").style.color = "aqua";
    }
    const GlowEnd = () => {
        document.getElementById("tada").style.color = "white";
    }


    const [org, setOrg] = useState([]);
    const [help, setHelp] = useState([]);
    const [spend, setSpend] = useState([]);
    const [design, setDesign] = useState([]);
    const [phone, setPhone] = useState("");



    const ReportForm = () => {
        axios.post(`${baseUrl}api/Report/requestdemo`, {
            organisation: org,
            help: help,
            spend: spend,
            design: design,
            phone: phone

        }).then((res) => {
            console.log("The report / talk to expert form console : ", res.data);

        }).catch((error) =>
            console.log("The report / talk to expert form console error - ", error));
    }


    useEffect(() => {
        // ReportForm();
    }, [])



    return (

        <>
            <div id="overlay" style={{ position: "fixed", width: "100%", height: "100%", zIndex: "2", top: "0", left: "0", right: "", bottom: "0", backgroundColor: "rgba(0,0,0,0.5)", cursor: "default" }} >


                <span>
                    {/* button  */}
                    {/* <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "25", "position": "relative", "top": "50%", "left": "51.5rem" }} onClick={Cross} > <i class='bx bx-x-circle bx-spin' id='tada' onMouseOver={Glow} onMouseLeave={GlowEnd} style={{ "fontSize": "38px", "color": "white" }} /> </button> */}
                    {/* Update Section  */}
                    <section style={{ "height": "95vh", "width": "55vw", "borderRadius": "30px", "background": "whitesmoke", "zIndex": "600", "position": "relative", "left": "450px", "top": "1rem", "overflow": "hidden", "overflowX": "hidden" }}>

                        <section className='row pt-'>
                            <span className='ps-4 py-2' style={{ "fontSize": "12px", "fontWeight": "600", "backgroundColor": "#c83b93", "width": "41%", color: "white", borderRadius: " 0px 0px 15px 0px" }}> &nbsp; &nbsp; <i class='bx bx-info-circle' style={{ position: "relative", "top": "2px" }}></i> &nbsp; &nbsp;  This feature is not a part of your free plan</span>
                        </section>


                        <section className='' style={{ "height": "90vh" }}>
                            <div className='row mt-4'>



                                {/* Features Section */}
                                <div className='col-lg-7 '>

                                    {/* break */}
                                    <section>
                                        <div className='row'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={50} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_1.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "20px", fontWeight: "700", "lineHeight": "" }}>Get additional mileage with DREABEE Pro.</label>
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px" }}>By upgrading to DREABEE Pro, you’ll get the following features</label>
                                            </div>
                                        </div>
                                    </section>

                                    {/* break */}
                                    <section>
                                        <div className='row mt-3'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_5.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>30 times larger database.</label>
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>You’ll get access to more than 6L unverified influencer profiles.</label>
                                            </div>
                                        </div>
                                    </section>

                                    {/* break */}
                                    <section>
                                        <div className='row mt-2'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_6.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>Advanced Filtering.</label>
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>Filter Influencers based on Gender, Engagement Rate, Cost and Audience Profile</label>
                                            </div>
                                        </div>
                                    </section>
                                    {/* break */}
                                    <section>
                                        <div className='row mt-2'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_2.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>No Limits.</label> <br />
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>No limits on the number of influencers you can add per plan.</label>
                                            </div>
                                        </div>
                                    </section>
                                    {/* break */}
                                    <section>
                                        <div className='row mt-2'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_4.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>Influencer Cost & Contact.</label> <br />
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>Access cost and contact details of the influencers.</label>
                                            </div>
                                        </div>
                                    </section>
                                    {/* break */}
                                    <section>
                                        <div className='row mt-2'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_2.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>Plan Export</label> <br />
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>Export the plan and list that you make to the excel sheets</label>
                                            </div>
                                        </div>
                                    </section>
                                    {/* break */}
                                    <section>
                                        <div className='row mt-2'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_5.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>Premium Lists</label> <br />
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>Access to all the Pre-made Influencer lists made by our experts</label>
                                            </div>
                                        </div>
                                    </section>
                                    {/* break */}
                                    <section>
                                        <div className='row mt-2'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_6.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>Influencer Insights</label> <br />
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>Get access to detailed insights about the influencers</label>
                                            </div>
                                        </div>
                                    </section>
                                    {/* break */}
                                    <section>
                                        <div className='row mt-2'>

                                            <div className='col-lg-2  d-flex align-items-center justify-content-end'> <img width={35} src={require('../../../Imagez/Dashboard/Cards/Icons/V3_1.png')} /> </div>
                                            <div className='col-lg-10 '>
                                                <label style={{ fontSize: "14px", fontWeight: "700", "lineHeight": "" }}>Campaign Reports</label> <br />
                                                <label style={{ fontSize: "12px", fontWeight: "400", "lineHeight": "20px", color: "#7E7E7E" }}>Track and Measure the Performance of the Campaign</label>
                                            </div>
                                        </div>
                                    </section>






                                </div>
                                {/* Form section  */}
                                <div className='col-lg-5 '>
                                    <section className=' ps-2' style={{ "height": "77vh", "overflow": "scroll", "overflowX": "hidden", "borderLeft": "0.5px solid #C4C4C4 " }}>

                                        <section className='' style={{ "width": "85%" }}>
                                            {/* Input 1 */}
                                            <section className='d-flex flex-column'>
                                                <label style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>How Influencer Marketing is handled <br />currently in your organisation?</label>

                                                <select className='px-2 py-2 mt-1' placeholder='choose' value={org} onChange={(e) => {
                                                    setOrg(e.target.value);
                                                    // console.log(":dees org"  , org)
                                                }} style={{ border: "0.5px solid #C4C4C4", color: "black", borderRadius: "10px" }}>
                                                    <option value="" style={{ color: "#C4C4C4" }}>Choose</option>
                                                    <option >Audi</option>
                                                    <option >Porsche</option>
                                                    <option >Mercedes</option>
                                                </select>

                                            </section>


                                            {/* Input 2 */}
                                            <section className='d-flex flex-column mt-4'>
                                                <label style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Where do you think DREABEE can help you?</label>

                                                {/* Radio  buttons  */}
                                                <section className='row mt-1' style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "400", color: "#7E7E7E" }}>
                                                    <section className='col-lg-7'>
                                                        <span> <input type='radio' name='radioOptions' onClick={(e) => { setHelp("Finding Influencers"); }} />&nbsp;Finding Influencers</span><br />
                                                        <span><input type='radio' name='radioOptions' onClick={(e) => { setHelp("Influencer Analytics"); }} />&nbsp;  Influencer Analytics</span><br />
                                                    </section>


                                                    <section className='col-lg-5'>
                                                        <span><input type='radio' name='radioOptions' onClick={(e) => { setHelp("Reachout"); }} />&nbsp;  Reachout</span><br />
                                                        <span><input type='radio' name='radioOptions' onClick={(e) => { setHelp("End To End Campaign Executio"); }} />&nbsp;  Reporting</span><br />
                                                    </section>

                                                    <span><input type='radio' name='radioOptions' onClick={() => {
                                                        setHelp("End To End Campaign Execution");
                                                    }} />&nbsp;  End To End Campaign Execution</span><br />

                                                </section>
                                            </section>

                                            {/* Input 3 */}
                                            <section className='d-flex flex-column mt-4'>
                                                <label style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Your annual Influencer Marketing spend?</label>

                                                <select className='px-2 py-2 mt-1' placeholder='choose'
                                                    value={spend} onChange={(e) => { setSpend(e.target.value); }}
                                                    style={{ border: "0.5px solid #C4C4C4", color: "black", borderRadius: "10px" }}>
                                                    <option style={{ color: "#C4C4C4" }} value="" >Choose your spending range</option>
                                                    <option value="2" >2</option>
                                                    <option value="3">3</option>
                                                    <option value="4" >4</option>
                                                </select>

                                            </section>


                                            {/* Input 4 */}
                                            <section className='d-flex flex-column mt-4'>
                                                <label style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Your Designation</label>

                                                <select className='px-2 py-2 mt-1' placeholder='choose'
                                                    value={design} onChange={(e) => { setDesign(e.target.value); }}
                                                    style={{ border: "0.5px solid #C4C4C4", color: "black", borderRadius: "10px" }}>
                                                    <option value="" style={{ color: "#C4C4C4" }}>Choose your current designation</option>
                                                    <option value="2" >2</option>
                                                    <option value="3" >3</option>
                                                    <option value="4" >4</option>
                                                </select>

                                            </section>


                                            {/* Input 5 */}
                                            <section className='d-flex flex-column mt-4'>
                                                <label style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "400" }}>Phone Number</label>

                                                <input type='text'
                                                    value={phone} onChange={(e) => { setPhone(e.target.value) }}
                                                    className='px-2 py-2 mt-1' maxLength={10}
                                                    placeholder='Enter your 10 digit mobile number'
                                                    style={{ border: "0.5px solid #C4C4C4", color: "black", borderRadius: "10px" }} />


                                            </section>




                                        </section>

                                    </section>


                                </div>
                            </div>

                            <section className='bg-light p-4 w-100 text-end ' style={{ "position": "absolute", "bottom": "0", boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.15)" }}>
                                <button className='p-2 px-4 me-3'
                                    style={{ fontSize: "15px", fontWeight: "600", "background": "#c83b93", border: "none", borderRadius: "10px", color: "white" }}
                                    onClick={ ReportForm }
                                >Talk to our Product Expert</button>

                            </section>
                        </section>
                    </section>
                </span>
            </div>
        </>



    );
}

export default PremiumPopUp