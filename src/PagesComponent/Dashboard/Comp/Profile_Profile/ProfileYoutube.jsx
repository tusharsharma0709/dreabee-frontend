import React from 'react'
import banner from '../../../../Imagez/Dashboard/All/Upgrade Card.png'
import { useState } from 'react';
import GRaph from "../../../../Imagez/Dashboard/All/Pie Chart.png";
import Pepsi from "../../../../Imagez/Dashboard/All/Pepsico.png";
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import numeral from 'numeral';
import { baseUrl2 } from '../../../../Routez/Routey';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ProgressBar } from 'react-bootstrap-v5';
const ProfileYoutube = () => {


    const location = useLocation();
    const navigate = useNavigate();

    const [engagementPaid, setEngagementPaid] = useState([]);
    const [growth1, setGrowth1] = useState([]);

    const [viewsGrowth, setViewsGrowth] = useState([]);
    const [subscribersGrowth, setSubscribersGrowth] = useState([]);


    const [adMentions, setAdMentions] = useState([]);
    const [hashPer, setHashPer] = useState([]);
    const [paidAds, setPaidAds] = useState([]);
    const [chanMen, setChanMen] = useState([]);
    const [mentionzArray, setMentionzArray] = useState([]);
    const [mentionsData, setMentionsData] = useState();
    const [freque, setFreque] = useState()
    const [percentages, setPercentages] = useState([]);
    const [likesRcomments, setLikesRcomments] = useState("0");
    const [viewsRlikes, setViewsRlikes] = useState("0");

    useEffect(() => {
        // console.log("this pages locations state", location)
        // console.log("----location--INSTAPROFF--", location.state);
        // navigate("Dreabee/Dashboard/Profile/Instagram", { state: { tag: Key } })

        ProfileDetails();

        // 2
        HashPercentage();

        // 3
        AdzMentions();
        ChannMention();
        // 4
        PaidPartner();

        // 5
        ChanGrowth();

        // 6
        FreQ();

        setTimeout(() => {
            // console.log("THE CHANNEL ID VALUEUUUUU ---> ", engagementPaid.totalVideos)
            // console.log("THE CHANNEL ID VALUEUUUUU ---> ", adMentions.totalAdsPerDay)
            // console.log("THE CHANNEL ID VALUEUUUUU ---> ", adMentions.dailyAds)
            // console.log("THE PERCENTAGE VALUEUEUUE ---> ", mentionsData)
            // console.log("THE PAIDpaidAds VALUEUEUUE ---> ", paidAds)
            // console.log("THE mentionzArray VALUEUEUUE ---> ", mentionzArray)
            // console.log("THE paidAds VALUEUEUUE ---> ", paidAds)
        }, 10000);
    }, 2000)


    const [actionValue, setActionValue] = useState("info");
    const [dbeeScore, setDbeeScore] = useState(35);
    const [profileDataY, setProfileDataY] = useState([]);

    // 1
    // YOUTUBE 
    const ProfileDetails = () => {
        // console.log("the end ",location.state.keyWord)
        axios.post(`${baseUrl2}/youtube/profile-details`, {
            name: localStorage.getItem("UserName")

        }).then((res) => {
            console.log("the datttaa i wananat", res.data)
            setProfileDataY(res.data)


            const x = (res.data.avgVideoViews / res.data.avgLikes)

            setLikesRcomments(x)


            const y = (res.data.avgLikes / res.data.avgVideoComments)
            setViewsRlikes(y)

            console.log("the datttaa i wananat", res.data.qualityScore)
            setDbeeScore((res.data.qualityScore * 100).toFixed(0))
        }).catch((err) => {
            console.log("the utube channel api error - ", err)
        })
    }


    // 2.2
    //hashtag-percentage 
    const HashPercentage = () => {
        axios.post(`${baseUrl2}/brand/hashtag-percentage`, {
            channelId: localStorage.getItem("channelId")
        }).then((res) => {
            setHashPer(res.data)

        }).catch((err) => {
            console.log("The channel Id data error - ", err)
        })
    }


    // 3.1
    // Ad Mentions and Mentions Per Day
    const AdzMentions = () => {
        axios.post(`${baseUrl2}/brand/ads`, {
            channelId: localStorage.getItem("channelId")
        }).then((res) => {
            setAdMentions(res.data)

            const paidData = res.data.dailyAds;
            const paidArray = paidData.map(item => Math.round(parseFloat(item.count)));
            setPaidAds(paidArray);



            // console.log("ohh laah laa response : ", res.data)
            // console.log("ohh laah laa : ", paidData)
            // console.log("dennna  : ", res.data.dailyAds[0].count)
        }).catch((err) => {
            console.log("The channel Id data error - ", err)
        })
    }
    // 3.2
    //channel mentions------------------------------------------
    const ChannMention = () => {
        axios.post(`${baseUrl2}/brand/channel-mentions`, {
            channelId: localStorage.getItem("channelId")
        }).then((res) => {
            setChanMen(res.data)
            setMentionsData(res.data.dailyMentions)
            console.log("DAILY MENTIONS DATA", res.data)
            calculateMentions(res.data.dailyMentions);

            // setTimeout(() => {
            // }, 1500);


            // console.log("The OH LAh LAahh -- >", res.data.dailyMentions)
        }).catch((err) => {
            console.log("The channel Id data error - ", err)
        })
    }

    const calculateMentions = (arrayVal) => {
        const last7DaysMentions = [];
        const currentDate = new Date();
        // console.log(`Current date: ${currentDate.toISOString().split('T')[0]}`);

        for (let i = 0; i < 7; i++) {
            const dateToCheck = new Date(currentDate);
            dateToCheck.setDate(currentDate.getDate() - i);
            const dateString = dateToCheck.toISOString().split('T')[0];
            // console.log(`Checking data for date: ${dateString}`);

            const mention = arrayVal.find(m => m.date === dateString);
            if (mention) {
                console.log(`Data found for ${dateString}: ${mention.mentions}`);
            } else {
                // console.log(`No data found for ${dateString}, defaulting to 0.`);
            }
            last7DaysMentions.push(mention ? mention.mentions : 0);
        }

        console.log("Final calculated mentions array:", last7DaysMentions);
        setMentionzArray(last7DaysMentions);
    };

    // HIGHCHARTS -BAR CHARTS
    const options = {
        chart: {
            type: 'column',
        },
        title: {
            text: '',
        },
        xAxis: {
            categories: [' Mon', 'Tue ', 'Wed ', 'Thur ', 'Fri ', 'Sat', 'Sun'],
        },
        yAxis: {
            title: {
                text: '',
            },
        },
        series: [
            {
                name: 'Mentions',
                // data: [3, 6, 9, 12, 15, 12, 43], // Replace with your data for series A
                data: mentionzArray, // Replace with your data for series A
            },
            {
                name: 'Ad Mentions',
                // data: [1, 2, 3, 4, 6, 7], // Replace with your data for series B
                data: paidAds, // Replace with your data for series B
            },
        ],
    };


    // HIGHCHARTS -LINE CHARTS
    const options1 = {
        title: {
            text: ''
        },
        yAxis: {
            title: {
                text: 'Values'
            }
        },
        xAxis: {
            categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
        },
        series: [
            {
                name: 'Total Views',
                data: viewsGrowth,
                // data: [3, 6, 9, 12, 15, 12, 43],

            },
            {
                name: 'New Subscribers Gained',
                data: subscribersGrowth
                // data: [25, 9, 12, 1, 12, 33, 5]
            }
        ]
    };

    // ---------------------------------------------------------

    const FreQ = () => {
        axios.post(`${baseUrl2}/brand/frequency/${localStorage.getItem("channelId")}`, {
            channelId: localStorage.getItem("channelId")
        }).then((res) => {

            console.log("FRE-Q DATA", res.data)
            setFreque(res.data.postFrequencyPercentage)


            // console.log("The OH LAh LAahh -- >", res.data.dailyMentions)
        }).catch((err) => {
            console.log("The channel Id data error - ", err)
        })
    }



    // 4 
    // Paid Partnership Engagement & Views 
    const PaidPartner = () => {
        axios.post(`${baseUrl2}/brand/engagementPaid`, {
            channelId: localStorage.getItem("channelId")
        }).then((res) => {
            // console.log("The channel Id data -- >>", res.data)
            setEngagementPaid(res.data)
            console.log("the paid part", res.data)

            // const paidData = res.data.dailyAds[0];
            // const paidArray = paidData.map(item => Math.round(parseFloat(item.paidAds)));
            // setPaidAds(paidArray);
        }).catch((err) => {
            console.log("The channel Id data error - ", err)
        })
    }



    // 5
    ///Brand Growth
    const ChanGrowth = () => {

        axios.post(`${baseUrl2}/brand/growth`, {
            channelId: localStorage.getItem("channelId")
        }).then((res) => {
            setGrowth1(res.data)


            // console.log("The GROWGROW -- >>", res.data.channelStats.viewCount)
            // console.log("The GROWGROW -- >>", res.data.channelStats.subscriberCount)
            // console.log("The GROWGROW -- >>", res.data.dailyData)
            // setGrowth1(res.data)

            const dailyDData1 = res.data.dailyData;
            const dailyDataArray1 = dailyDData1.map(item => Math.round(parseFloat(item.viewsGrowth)));
            setViewsGrowth(dailyDataArray1);

            const dailyDData2 = res.data.dailyData;
            const dailyDataArray2 = dailyDData2.map(item => Math.round(parseFloat(item.subscribersGrowth)));
            setSubscribersGrowth(dailyDataArray2);

        }).catch((err) => {
            console.log("The channel Id data error - ", err)
        })
    }




    // EXTRAZZ 

    // 1-dreabee score ppie
    const dataaa = {
        labels: ["Dreabee Score : " + dbeeScore + "%"],
        datasets: [
            {
                data: [dbeeScore, 100 - dbeeScore],
                backgroundColor: ['#2D59F5', "gray"],
                borderWidth: 0.5,
            },
        ],
    };

    // 2- gender pie 
    const dataaaG = {
        labels: ["Male : 35%", "Female : 65%"],
        datasets: [
            {
                data: [35, 100 - 35],
                backgroundColor: ['#2D59F5', "#BCBCBC"],
                borderWidth: 0.5,
            },
        ],
    };

    const colors = ["success", "info", "warning", "danger", "primary", "secondary"]

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
                {/* </div> */}


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
                                                    Subscribers
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {(numeral(profileDataY?.usersCount).format('0.0a'))}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Total Video
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    566
                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Avg Likes
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {(numeral(profileDataY?.avgLikes).format('0.0a'))}
                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Avg Comments
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {(numeral(profileDataY?.avgVideoComments).format('0.0a'))}

                                                </div>
                                            </td>

                                            <td>
                                                <div className='instaCard1txt1'>
                                                    Avg Views
                                                </div>

                                                <div className='instaCard1txt2'>
                                                    {(numeral(profileDataY?.avgVideoViews).format('0.0a'))}
                                                </div>
                                            </td>

                                        </tr>
                                    </table>
                                </div>




                            </div>






                        </div>

                        {/* SECTION 2  */}
                        <div className="row my-2  py-2 " id="Insight">
                            {/* card 1  */}
                            <div className="KardzProf mx-2" style={{
                                width: "312px ",
                                height: "409px",
                                borderRadius: "10px",
                                background: "white"
                            }}>



                                <section className='bg py-4  h-100 '>
                                    <span className='mx-2' style={{ "fontSize": "24px", fontWeight: "600" }}>Dreabee Score</span>
                                    <section
                                        src={GRaph}
                                        alt="img"
                                        className=" mt-4 pe-2 ">

                                        <section style={{ height: "300px", width: "300px" }}>
                                            <Doughnut data={dataaa} />
                                        </section>
                                    </section>
                                </section>

                            </div>

                            {/* card 2 ---> hash percentage  */}
                            <div className="KardzProf mx-2" style={{
                                width: "713px ",
                                height: "409px",
                                borderRadius: "10px",
                                background: "white"
                            }}>

                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "24px", fontWeight: "600" }}>Insights</span>


                                    <div className="row">

                                        {
                                            hashPer.slice(0, 8).map((data, index) => (
                                                <div className="col-lg-6 ">
                                                    <div className='row px-2 my-3 py-2 bg- '>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >  {data.hashtag}</div>
                                                        <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>{data.percentage} %</div>
                                                        {/* <input type='range' className='mt-1' /> */}

                                                        <div className='col-12 text-end mt-1 '>
                                                            <ProgressBar variant="success" now={data.percentage} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                                        </div>

                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* SECTION 3 --- Performance */}
                        <div className="row my-2 p-2" id="Performance">
                            <div className="KardzProf mx-2" style={{
                                width: "1027px ",
                                minHeight: "600px",
                                borderRadius: "10px",
                                background: "white"
                            }}>


                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "18px", fontWeight: "600" }}>Content Performance & Benchmark</span>

                                    <div className='row my-3 ' >
                                        {/* 1 */}
                                        <div className='col-lg'>
                                            <h4 style={{ "fontSize": "16px", "fontWeight": "400", "color": "#7E7E7E" }}> Mentions per day </h4>
                                            <h4 style={{ "fontSize": "26px", "fontWeight": "600" }}>
                                                {(chanMen?.totalMentionsPerDay)}
                                                {/* {(chanMen?.totalMentionsPerDay).toFixed(2)} */}
                                                {/* {(chanMen.totalMentionsPerDay).format('0.0a')} ---> to mi;l bil k*/}
                                                {/* {Math.round(parseFloat(chanMen?.totalMentionsPerDay))} */}

                                            </h4>

                                        </div>
                                        {/* 2 */}
                                        <div className='col-lg ps-4' style={{ borderLeft: "1px solid black" }}>
                                            <h4 style={{ "fontSize": "16px", "fontWeight": "400", "color": "#7E7E7E" }}>Ads per day </h4>
                                            <h4 style={{ "fontSize": "26px", "fontWeight": "600" }}> {adMentions.totalAdsPerDay} </h4>

                                        </div>
                                        {/* 3 */}
                                        <div className='col-lg '></div>
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


                                    <div className='row my-4'>
                                        <div style={{ "height": "50px", width: "1000px" }}>


                                            <HighchartsReact highcharts={Highcharts} options={options} />


                                        </div>
                                    </div>


                                </section>


                            </div>
                        </div>

                        {/* SECTION 4  Overall Engagement & Views */}
                        <div className="row mt-2 p-2 pb-1" id="Engagement">
                            <div className="KardzProf mx-2" style={{
                                width: "1027px ",
                                height: "148px",
                                borderRadius: "10px",
                                background: "white"
                            }}>


                                <section className='bg- p-4 pt-3 h-100'>

                                    <span style={{ "fontSize": "18px", fontWeight: "600" }}>Overall Engagement & Views</span>

                                    {/* 2 */}
                                    <div className='w-100 row bg- py-2 mt-3' >

                                        <div className='col-lg-2 bg- text-center'>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6516C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6516 17.6516C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6516 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#C83B93" />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <g clipPath="url(#clip0_3521_3798)">
                                                    <path d="M27.5609 5.5575C26.7481 4.9725 24.4831 4.19531 14.9923 4.19531C4.82187 4.19531 3.31297 5.08781 2.82872 5.37984C0.251533 6.9281 0.0068457 13.7826 -0.015625 15.1725C0.0153125 17.0082 0.312031 23.1155 2.82687 24.6263C3.31019 24.9173 4.81062 25.8047 14.9923 25.8047C24.4892 25.8047 26.7514 25.0312 27.5609 24.4486C29.7575 22.8685 30.0102 17.4267 30.0162 15.1486C30.0106 13.3167 29.8184 7.18362 27.561 5.55753L27.5609 5.5575ZM26.4659 22.927C26.1392 23.1623 24.2632 23.9297 14.9923 23.9297C6.02932 23.9297 4.14869 23.234 3.79338 23.0198C2.88869 22.477 1.93385 19.5956 1.85888 15.1673C1.93294 10.7489 2.90091 7.52341 3.79531 6.98716C4.15156 6.772 6.03919 6.07075 14.9923 6.07075C24.2557 6.07075 26.1368 6.84328 26.4659 7.07953C27.2689 7.65797 28.1286 10.703 28.1412 15.1547C28.1286 19.6762 27.2633 22.3533 26.4659 22.927ZM21.1062 14.2626L12.6707 9.08616C12.5284 9.00041 12.366 8.95397 12.2 8.95158C12.0339 8.94919 11.8702 8.99094 11.7256 9.07257C11.5809 9.1542 11.4604 9.27283 11.3766 9.4163C11.2927 9.55978 11.2485 9.72295 11.2484 9.88913V20.2438C11.2486 20.4924 11.3474 20.7308 11.5232 20.9066C11.699 21.0824 11.9373 21.1812 12.1859 21.1813C12.3566 21.1813 12.524 21.1348 12.6701 21.0468L21.1058 15.8685C21.387 15.6984 21.5591 15.3942 21.5591 15.0656C21.5591 14.7369 21.3875 14.4318 21.1063 14.2626H21.1062ZM13.1239 18.583V11.5489L18.8075 15.0655L13.1239 18.583Z" fill="#C83B93" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_3521_3798">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h4 style={{ "fontSize": "18px", fontWeight: "600", "color": "#C83B93" }}>Videos</h4>
                                        </div>

                                        <div className='col-lg-8 bg-'>
                                            <section className='row px-2'>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Subscribers</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>

                                                        {(numeral(profileDataY?.usersCount).format('0.0a'))}

                                                    </h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Total Video</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>

                                                        {/* {engagementPaid.totalVideos} */}
                                                        266
                                                    </h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Likes</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>

                                                        {(numeral(profileDataY?.avgLikes).format('0.0a'))}

                                                    </h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Comments</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>

                                                        {(numeral(profileDataY?.avgVideoComments).format('0.0a'))}
                                                    </h4>

                                                </div>
                                            </section>
                                        </div>

                                        <div className='col-lg-2 text-center p-1'>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Views</h4>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>

                                                {(numeral(profileDataY?.avgVideoViews).format('0.0a'))}

                                            </h4>

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
                                        <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>

                                            {(numeral(likesRcomments).format('0.0a'))}%
                                            {/* {likesRcomments} % */}
                                            {/* {likesRcomments.toFixed(2)} % */}

                                        </div>

                                        <div className='col-12 text-end mt-1 '>
                                            <ProgressBar variant="success" now={likesRcomments} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                        </div>
                                        {/* <input type='range' className='mt-1' /> */}
                                    </div>
                                </section>
                            </div>



                            <div className="KardzProf mx-2" style={{ width: "508px ", height: "80px", borderRadius: "10px", background: "white" }}>
                                <section className='w-100 h-100 bg- py-2'>
                                    <div className='row px-4 py-2 bg- '>
                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Video View to Like Ratio</div>
                                        <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>

                                            {(numeral(viewsRlikes).format('0.0a'))} %

                                            {/* {viewsRlikes} % */}
                                            {/* {viewsRlikes.toFixed(2)} % */}
                                        </div>

                                        <div className='col-12 text-end mt-1 '>
                                            <ProgressBar variant="warning" now={viewsRlikes} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                        </div>
                                    </div>
                                </section>
                            </div>



                            <div className="KardzProf mx-2 mt-2" style={{ width: "508px ", height: "55px", borderRadius: "10px", background: "white" }}>
                                <section className='w-100 h-100 bg- py-2'>
                                    <div className='row px-4 py-2 bg- '>
                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Post Frequency</div>
                                        <div className='col-4 text-end   bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>
                                            {freque}

                                        </div>
                                        {/* <input type='range' className='mt-1' /> */}
                                    </div>
                                </section>
                            </div>



                        </div>


                        {/* SECTION 6  Paid Partnership Engagement Vies */}
                        <div className="row p-2 pt-1 my-2" id="PaidEngagement">
                            <div className="KardzProf ms-2" style={{
                                width: "1027px ",
                                height: "148px",
                                borderRadius: "10px",
                                background: "white"
                            }}>



                                <section className='bg- p-4 h-100'>

                                    <span style={{ "fontSize": "18px", fontWeight: "600" }}>Paid Partnership Engagement & Views</span>

                                    {/* 2 */}
                                    <div className='w-100 row bg- py-2 mt-2' >

                                        <div className='col-lg-2 bg- text-center'>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M9.75 2.5H20.25C24.25 2.5 27.5 5.75 27.5 9.75V20.25C27.5 22.1728 26.7362 24.0169 25.3765 25.3765C24.0169 26.7362 22.1728 27.5 20.25 27.5H9.75C5.75 27.5 2.5 24.25 2.5 20.25V9.75C2.5 7.82718 3.26384 5.98311 4.62348 4.62348C5.98311 3.26384 7.82718 2.5 9.75 2.5ZM9.5 5C8.30653 5 7.16193 5.47411 6.31802 6.31802C5.47411 7.16193 5 8.30653 5 9.5V20.5C5 22.9875 7.0125 25 9.5 25H20.5C21.6935 25 22.8381 24.5259 23.682 23.682C24.5259 22.8381 25 21.6935 25 20.5V9.5C25 7.0125 22.9875 5 20.5 5H9.5ZM21.5625 6.875C21.9769 6.875 22.3743 7.03962 22.6674 7.33265C22.9604 7.62567 23.125 8.0231 23.125 8.4375C23.125 8.8519 22.9604 9.24933 22.6674 9.54235C22.3743 9.83538 21.9769 10 21.5625 10C21.1481 10 20.7507 9.83538 20.4576 9.54235C20.1646 9.24933 20 8.8519 20 8.4375C20 8.0231 20.1646 7.62567 20.4576 7.33265C20.7507 7.03962 21.1481 6.875 21.5625 6.875ZM15 8.75C16.6576 8.75 18.2473 9.40848 19.4194 10.5806C20.5915 11.7527 21.25 13.3424 21.25 15C21.25 16.6576 20.5915 18.2473 19.4194 19.4194C18.2473 20.5915 16.6576 21.25 15 21.25C13.3424 21.25 11.7527 20.5915 10.5806 19.4194C9.40848 18.2473 8.75 16.6576 8.75 15C8.75 13.3424 9.40848 11.7527 10.5806 10.5806C11.7527 9.40848 13.3424 8.75 15 8.75ZM15 11.25C14.0054 11.25 13.0516 11.6451 12.3483 12.3483C11.6451 13.0516 11.25 14.0054 11.25 15C11.25 15.9946 11.6451 16.9484 12.3483 17.6516C13.0516 18.3549 14.0054 18.75 15 18.75C15.9946 18.75 16.9484 18.3549 17.6516 17.6516C18.3549 16.9484 18.75 15.9946 18.75 15C18.75 14.0054 18.3549 13.0516 17.6516 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25Z" fill="#C83B93" />
                                            </svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <g clipPath="url(#clip0_3521_3798)">
                                                    <path d="M27.5609 5.5575C26.7481 4.9725 24.4831 4.19531 14.9923 4.19531C4.82187 4.19531 3.31297 5.08781 2.82872 5.37984C0.251533 6.9281 0.0068457 13.7826 -0.015625 15.1725C0.0153125 17.0082 0.312031 23.1155 2.82687 24.6263C3.31019 24.9173 4.81062 25.8047 14.9923 25.8047C24.4892 25.8047 26.7514 25.0312 27.5609 24.4486C29.7575 22.8685 30.0102 17.4267 30.0162 15.1486C30.0106 13.3167 29.8184 7.18362 27.561 5.55753L27.5609 5.5575ZM26.4659 22.927C26.1392 23.1623 24.2632 23.9297 14.9923 23.9297C6.02932 23.9297 4.14869 23.234 3.79338 23.0198C2.88869 22.477 1.93385 19.5956 1.85888 15.1673C1.93294 10.7489 2.90091 7.52341 3.79531 6.98716C4.15156 6.772 6.03919 6.07075 14.9923 6.07075C24.2557 6.07075 26.1368 6.84328 26.4659 7.07953C27.2689 7.65797 28.1286 10.703 28.1412 15.1547C28.1286 19.6762 27.2633 22.3533 26.4659 22.927ZM21.1062 14.2626L12.6707 9.08616C12.5284 9.00041 12.366 8.95397 12.2 8.95158C12.0339 8.94919 11.8702 8.99094 11.7256 9.07257C11.5809 9.1542 11.4604 9.27283 11.3766 9.4163C11.2927 9.55978 11.2485 9.72295 11.2484 9.88913V20.2438C11.2486 20.4924 11.3474 20.7308 11.5232 20.9066C11.699 21.0824 11.9373 21.1812 12.1859 21.1813C12.3566 21.1813 12.524 21.1348 12.6701 21.0468L21.1058 15.8685C21.387 15.6984 21.5591 15.3942 21.5591 15.0656C21.5591 14.7369 21.3875 14.4318 21.1063 14.2626H21.1062ZM13.1239 18.583V11.5489L18.8075 15.0655L13.1239 18.583Z" fill="#C83B93" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_3521_3798">
                                                        <rect width="30" height="30" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <h4 style={{ "fontSize": "18px", fontWeight: "600", "color": "#C83B93" }}>Videos</h4>
                                        </div>

                                        <div className='col-lg-8 bg-'>
                                            <section className='row px-2'>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Subscribers</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>


                                                        {(numeral(engagementPaid?.subscribers).format('0.0a'))}

                                                    </h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Total Video</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>
                                                        {engagementPaid?.totalVideos}
                                                    </h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Likes</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>
                                                        {engagementPaid?.avgLikes}
                                                    </h4>

                                                </div>
                                                <div className='col-lg-3 text-center p-1'>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Comments</h4>
                                                    <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>
                                                        {engagementPaid?.avgComments}
                                                    </h4>

                                                </div>
                                            </section>
                                        </div>

                                        <div className='col-lg-2 text-center p-1'>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "700" }}>Avg Views</h4>
                                            <h4 style={{ "fontSize": "14px ", fontWeight: "400" }}>
                                                {engagementPaid?.avgViews}
                                            </h4>

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

                                                        <div className='col-12 text-end mt-1 '>
                                                            <ProgressBar variant="success" now={likesRcomments} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                                        </div>
                                                    </div>


                                                    <div className='row my-5 mb-4 px-2 '>

                                                        <h5 style={{ fontWeight: "400 ", fontSize: "16px", "lineHeight": "10px" }} className=''>Top State </h5>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >Maharashtra</div>
                                                        <div className='col-4 text-end     bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>

                                                        <div className='col-12 text-end mt-1 '>
                                                            <ProgressBar variant="info" now={likesRcomments} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                                        </div>
                                                    </div>


                                                </div>



                                                <div className='col-lg-6  bg-ing '>

                                                    <div className='row my-4 px-2'>
                                                        <h5 style={{ fontWeight: "400 ", fontSize: "16px", "lineHeight": "10px" }} className=''>Top Country </h5>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >India</div>
                                                        <div className='col-4 text-end     bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>

                                                        <div className='col-12 text-end mt-1 '>
                                                            <ProgressBar variant="primary" now={likesRcomments} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                                        </div>

                                                    </div>

                                                    <div className='row my-5 mb-4 px-2'>
                                                        <h5 style={{ fontWeight: "400 ", fontSize: "16px", "lineHeight": "10px" }} className=''>Top Age Group </h5>
                                                        <div className='col-8 bg-er d-flex align-items-end ' style={{ fontWeight: "400 ", fontSize: "16px" }} >20-25</div>
                                                        <div className='col-4 text-end     bg- d-flex align-items-end justify-content-end' style={{ fontWeight: "600" }}>28.9%</div>

                                                        <div className='col-12 text-end mt-1 '>
                                                            <ProgressBar variant="warning" now={likesRcomments} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                                        </div>
                                                    </div>


                                                </div>

                                            </section>

                                        </div>
                                        <div className='col-lg-4   '>
                                            <section className='row d-flex justify-content-center'>

                                                <section className='col-lg-12 ' style={{ height: "200px", width: "200px" }}>
                                                    <Doughnut data={dataaaG} />


                                                    <section className='text-center  col-lg-12' style={{ fontWeight: "500", "fontSize": "16px" }}>
                                                        Genders
                                                    </section>
                                                </section>



                                            </section>
                                        </div>
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




                                    <div className='w-100 row bg-ary mx' >

                                        <div className='col-lg-6 bg-'>
                                            <section className='row ' >



                                                <div className='col-lg-12  py-3' >
                                                    <section className='row' >

                                                        <div className='col text-start' style={{ "fontWeight": "500", fontSize: "16px" }}>United States (USA)</div>
                                                        <div className='col text-end' style={{ "fontWeight": "500", fontSize: "16px" }}> 41.25 %</div>
                                                    </section>
                                                    <ProgressBar variant="primary" now={viewsRlikes} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                                </div>




                                                <div className='col-lg-12 py-2  pb-3' >
                                                    <section className='row' >

                                                        <div className='col text-start' style={{ "fontWeight": "500", fontSize: "16px" }}>United States (USA)</div>
                                                        <div className='col text-end' style={{ "fontWeight": "500", fontSize: "16px" }}> 41.25 %</div>
                                                    </section>

                                                    <ProgressBar variant="warning" now={viewsRlikes} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />


                                                </div>


                                                <div className='col-lg-12 py-2 pb-3' >
                                                    <section className='row' >

                                                        <div className='col text-start' style={{ "fontWeight": "500", fontSize: "16px" }}>United States (USA)</div>
                                                        <div className='col text-end' style={{ "fontWeight": "500", fontSize: "16px" }}> 41.25 %</div>
                                                    </section>

                                                    <ProgressBar variant="success" now={viewsRlikes} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />
                                                </div>



                                                <div className='col-lg-12 py-3' >

                                                    <section className='row' >

                                                        <div className='col text-start' style={{ "fontWeight": "500", fontSize: "16px" }}>United States (USA)</div>
                                                        <div className='col text-end' style={{ "fontWeight": "500", fontSize: "16px" }}> 41.25 %</div>
                                                    </section>

                                                    <ProgressBar variant="info" now={viewsRlikes} style={{ "height": "8px", boxShadow: "0px 1px 8px 1px #888888" }} />

                                                </div>


                                            </section>



                                        </div>




                                        <div className='col-lg-6 text-center'>
                                            <img src={require('../../../../Imagez/Dashboard/Cards/WMap.png')} width={400} />
                                        </div>
                                    </div>



                                </section>

                            </div>
                        </div>










                        {/* SECTION BRANDS MENTION  */}
                        {/* Mention dynamics on YouTube */}
                        <div className='monthly_report_section row  ms-2 Kardz my-4 py-5' id="Growth" style={{
                            width: "1027px",
                            height: "470px",
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
                                            <label className='two' style={{ "position": "relative", top: "18px", "fontSize": "2.375rem" }}><p>

                                                {growth1?.channelStats?.viewCount}

                                            </p></label> &nbsp;
                                        </section>
                                    </span>
                                    <span className='d-flex flex-row align-items-center '>
                                        <section className='Xplore_rectag' />
                                        <section className='d-flex flex-column ms-3' style={{ "borderLeft": "" }}>
                                            <label className='three' style={{ "position": "relative", top: "30px" }}><p>New Followers Gained</p></label>
                                            <label className='two' style={{ "position": "relative", top: "20px" }}><p style={{ "fontSize": "2.375rem" }}>

                                                {growth1?.channelStats?.subscriberCount}
                                            </p></label> &nbsp;
                                        </section>
                                    </span>





                                </div>
                            </div>

                            <div className='col-lg-8'>
                                {/* <img src={require('../../../../Imagez/Dashboard/All/chart.png')} className='my-5 me-4' width={650} /> */}
                                <div style={{ "height": "250px", width: "650px" }}>
                                    <HighchartsReact Highcharts={Highcharts} options={options1} />
                                </div>
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









            </div>



        </>
    )
}

export default ProfileYoutube