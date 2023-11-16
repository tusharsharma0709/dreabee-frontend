import React, { useState } from 'react'
import Social_dropdown from './component/social-dropdown';
import LocationDrop from './component/location-dropdown';
import { Modal } from 'react-bootstrap-v5';
import '../../Styles/Slyider.css';
import { useEffect } from 'react';
import Imagg from '../../Imagez/Common/User.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';
import DbeeScore from './component/SearchSection/DbeeScore';
import numeral from 'numeral';
import Followers from './component/SearchSection/Followers';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import dayjs, { Dayjs } from 'dayjs';
import CountryDropz from './searching-influencers/CountryDropz';
import { baseUrl2 } from '../../Routez/Routey';

export default function YoutubeSearch2() {
    const [planModal, setplanModal] = useState(false);
    const [youtubeActive, setYoutubeactive] = useState('channel');
    const [blow, setBlow] = useState(false);
    const [catShow, setCatShow] = useState(false)

    const [allChannel, setAllChannel] = useState([]);


    const toggleSlide = () => {
        setBlow(!blow);
    };

    const location = useLocation();
    const [loading, setLoading] = useState(false);



    const [ting, setTing] = useState("");
    useEffect(() => {
        setLoading(true)
        console.log(" the whole state : ", location.state);
        console.log(" the thing keyword : ", location.state.tag);
        setTing(location.state.tag)

        ChannelDetailz();
        CatIdz();

        setTimeout(() => {
            videoDetails();
        }, 4000);
        setTimeout(() => {
            setShowPager(true)
        }, 5000);

        localStorage.removeItem("UserName");
        localStorage.removeItem("channelId");




    }, [])


    // _____________________  MAIN APIs START__________________________________
    // 1.Channel Api 
    const ChannelDetailz = (geny, sity, minFoll, maxFoll, minDb, maxDb, avgViewsMin, avgViewsMax, minLikez, maxLikez) => {
        let tagg;
        if (ting != "") {
            tagg = ting
        }
        else {
            tagg = location.state.tag
        }
        axios.post(`${baseUrl2}/youtube/channel-details`, {
            tags: profileLink,
            q: tagg,
            page: 1,

            locations: sity,

            minUsersCount: minFoll,
            maxUsersCount: maxFoll,

            genders: geny,


            minLikes: minLikez,
            maxLikes: maxLikez,

            minViews: avgViewsMin,
            maxViews: avgViewsMax,

            minComments: minComments,
            maxComments: maxComments,


            minQualityScore: minDb,
            maxQualityScore: maxDb,

            minER: minER,
            maxER: maxER,




        }).then((res) => {
            // console.log(" channels youtube #x# : ", res.data)
            // chan.push(res.data)
            console.log("the total result  after----- : ", res.data.data)
            setTotalUser(res.data.total_result)
            setChan(res.data.data)
        }).catch((err) => {
            console.log("the utube channel api error - ", err)
        })
    }

    // 2.Videos Api
    const videoDetails = (typee, durationn, advertisementt, publishDateFilterr, categoryy, countryy, minView, maxView) => {
        let keykey;
        if (ting != "") {
            keykey = ting
        }
        else {
            keykey = location.state.tag
        }
        console.log("DURATION : ", durationn)
        axios.post(`${baseUrl2}/youtube/video-id`, {
            keyword: keykey,
            type: typee,
            duration: durationn,
            advertisement: advertisementt,
            category: categoryy,
            countryCode: countryy,
            publishDateFilter: publishDateFilterr,
            minViews: minView,
            maxViews: maxView,

        }).then(async (response) => {

            console.log("the first api channel id: ", response.data.data[0].channel_id)
            console.log("the first api only id : ", response.data.data[0].id)
            console.log("hitted now")
            const x = response.data.data[0].id;
            const y = response.data.data[0].channel_id;

            // setDataFromFirstApi(response.data.data);
            // setXValue(x);
            // setYValue(y);


            const fetchResult = await Promise.all(
                (response.data.data).map(async (elem) => {
                    const res = await axios.post(`${baseUrl2}/youtube/video-details`,
                        { channel_id: elem.channel_id, id: elem.id })
                    return res.data;
                })
            );
            console.log("the resulttttt :", fetchResult)
            setAllVideo(fetchResult)

            // VIDEO DETAILS =================================>
            // console.log("the second api VIDEO DETAILS THUMBNAIL: ", fetchResult[0].video_details[0].snippet.thumbnails.maxres.url)
            // console.log("the second api VIDEO DETAILS TAGS: ", fetchResult[0].video_details[0].snippet.title)
            // console.log("the second api VIDEO DETAILS PUBLISHED DATE: ", fetchResult[0].video_details[0].snippet.publishedAt)
            // console.log("the second api VIDEO DETAILS VIEW-COUNT: ", fetchResult[0].video_details[0].statistics.viewCount)
            // console.log("the second api VIDEO DETAILS LIKE-COUNT: ", fetchResult[0].video_details[0].statistics.likeCount)
            // console.log("the second api VIDEO DETAILS COMMENT-COUNT: ", fetchResult[0].video_details[0].statistics.commentCount)

            // console.log("the second api VIDEO DETAILS TAGS: ", fetchResult[0].video_details[0].snippet.tags[1])


            // CHANNEL DETAILS ================================>
            // console.log("the second api CHANNEL THUMBNAIL: ", fetchResult[0].channel_details[0].snippet.thumbnails.high.url);
            // console.log("the second api CHANNEL NAME: ", fetchResult[0].channel_details[0].snippet.title);
            // console.log("the second api CHANNEL SUBSCRIBERS : ", fetchResult[0].channel_details[0].statistics.subscriberCount);

        }).catch((error) => {
            console.error('Error fetching data from the first API', error);
        });
    }

    // 3. Categories api
    const CatIdz = () => {
        axios.post(`${baseUrl2}/youtube/catId`).then((res) => {
            console.log("All the Categories : ", res.data)
            setAllCats(res.data);
        }).catch((err) => {
            console.log("the utube video category api error - ", err)
        })
    }

    // 4. Country api
    const CountryIdz = () => {
        axios.post(`${baseUrl2}/youtube/country`).then((res) => {
            console.log("All the Categories : ", res.data)
            setAllCountry(res.data);
        }).catch((err) => {
            console.log("the utube video api country error - ", err)
        })
    }
    // _____________________  MAIN APIs END__________________________________





    const OpenInsta = () => {
        navigate("/Dreabee/Dashboard/search-instagram", { state: { tag: ting } })
    }



    const [profileLink, setProfileLink] = useState("");
    const [pageNo, setPageNo] = useState("1");


    const FilterzIn = () => {
        // setGen(e.target.value);
        ChannelDetailz();
    }




    //    ________________________________     VIDEO APIs    ________________________________      VIDEO APIs    ________________________________     
    const [videoIdz, setvideoIdz] = useState([]);
    const [allvideo, setAllVideo] = useState([]);
    const [tabShow, setTabShow] = useState(false);
    const [allCats, setAllCats] = useState([]);
    const [allCountry, setAllCountry] = useState([]);
    const [catsIdz, setCatsIdz] = useState([]);


    const [videoViews, setVideoViews] = useState("");
    const [videoDuration, setVideoDuration] = useState("any");
    const [videoType, setVideoType] = useState("completed");
    const [videoAds, setVideoAds] = useState("any");
    const [videoPublished, setVideoPublished] = useState("any");
    const [videoCategory, setVideoCategory] = useState("1");
    const [videoCountry, setVideoCountry] = useState("IN");
    const [videoMinView, setVideoMinView] = useState("0");
    const [videoMaxView, setVideoMaxView] = useState("");

    const [videoCatDrop, setVideoCatDrop] = useState(false)
    const [videoCountryDrop, setVideoCountryDrop] = useState(false)















    // const VideoIdz = (chanId) => {
    //     axios.post(`${baseUrl2}/youtube/video-channel`, {
    //         channelId: chanId
    //     }).then((res) => {
    //         console.log("ThIS IS FROM cHANNEL dETAILS aaapiiiss :", res)
    //     }).catch((err) => {
    //         console.log("the video  api error - ", err)
    //     })
    // }

    const ItsOnn = () => {
        setCatShow(true)
    }
    const ItsOff = () => {
        setCatShow(false)
    }


    // _____________________DROPDOWNZ_____________________________
    // DROPDOWN SOCIAL MEDIA
    const [openDrop, setDrop] = useState(false);
    const [selected, setSelelcted] = useState('Youtube');
    const navigate = useNavigate();

    // _____________________DROPDOWNZ_____________________________




    // 1-- DREABEE SCORE DROPDOWN 
    const [dreabeeDrop, setDreabeeDrop] = useState(false);

    const [minimum, setMinimum] = useState("")
    const [maximum, setMaximum] = useState("")

    const [inputs, setInputs] = useState({ DbScore: { min: 0, max: 10 } });

    const ClearDb = () => {
        setMinDrebScore("");
        setMaxDrebScore("");
        ChannelDetailz();
    }

    //2--LOCATION FILTERS
    const [openCityDrop, setCityDrop] = useState(false);
    const [selectedCity, setSelelctedCity] = useState('Location')

    // 3 -- FOLLOWERS COUNT  FILTER 
    const [minimumF, setMinimumF] = useState();
    const [maximumF, setMaximumF] = useState();
    const [fDropz, setFDropz] = useState(false);
    const [inputsFollow, setInputsFollow] = useState({ Followerz: { min: 0, max: 1000000 } });

    // 4 --GENDER
    const [gender, setGender] = useState("");
    const [genGen, setGenGen] = useState(false);

    //  ________________________________    CHANNEL APIs  ________________________________ CHANNEL APIs  ________________________________
    const [chan, setChan] = useState([]);
    const [totalUser, setTotalUser] = useState();





    // ---------------FILTERS STATES----------------
    // 1ST
    const [chanType, setChanType] = useState("");

    const [minViews, setMinViews] = useState("");
    const [maxViews, setMaxViews] = useState("");

    const [videoDurationMin, setVideoDurationMin] = useState("");
    const [videoDurationMax, setVideoDurationMax] = useState("");

    const [city, setCity] = useState("");
    const [countryDrop, setCountryDrop] = useState(false);

    const [minER, setMinER] = useState("");
    const [maxER, setMaxER] = useState("");

    const [minLikes, setMinLikes] = useState("");
    const [maxLikes, setMaxLikes] = useState("");

    const [minComments, setMinComments] = useState("");
    const [maxComments, setMaxComments] = useState("");

    const [minSupChat, setMinSupChat] = useState("");
    const [maxSupChat, setMaxSupChat] = useState("");





    // 2ND
    const [minFollowers, setMinFollowers] = useState("");
    const [maxFollowers, setMaxFollowers] = useState("");

    const [minDrebScore, setMinDrebScore] = useState("");
    const [maxDrebScore, setMaxDrebScore] = useState("");






    // Clear all Filters 
    const EmptyFill = () => {


        setCity("");
        setMinER("");
        setMaxER("");
        setMinLikes("");
        setMaxLikes("");
        setMinComments("");
        setMaxComments("");
        setMinViews("");
        setMaxViews("");


    }
    // ---------------FILTERS STATES----------------
    const [hovrd, setHovrd] = useState(false);
    const [profVal, setProfVal] = useState("");

    // const [handled, setHandled] = useState();
    const ProfileNow = (handled) => {
        console.log("the handled ", handled)
        localStorage.setItem("UserName", handled);


        console.log("this is the value of the proofile username", handled)

        // ProfileNow((data.url).split("@")[1])
        navigate("/Dreabee/Dashboard/Profile", { state: { keyWord: handled } })
    }






    //---------------------------------------------------------------------------
    const [pageNow, setPageNow] = useState(1)
    const [pageAll, setPageAll] = useState(10)
    const DecNo = () => {
        let x = pageNow - 1;
        if (x <= 0) {
            x = 0;
        } else {
            setPageNow(pageNow - 1)
            // InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, city, (pageNow - 1))
        }


    }
    const IncNo = () => {
        let x = pageNow + 1;
        if (x > pageAll) {
            x = pageAll;
        } else {
            setPageNow(pageNow + 1)
            // InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, city, (pageNow + 1))

        }
    }

    const [showPager, setShowPager] = useState(false);
    const [searchNow, setSearchNow] = useState(false);


    return (
        <>
            <div className='row' id='TableTop'>
                <div className='col-lg-12'>


                    {/* Search Field */}
                    <div className='search_section'>
                        <div className='bg-' style={{ width: '66%' }}>
                            <span className='bg-' style={{ pointerEvents: "" }} onClick={() => {
                                videoDetails();
                                ChannelDetailz();
                            }}>
                                <i class="fa fa-search fa-lg"></i>
                            </span>

                            <input type="text" value={ting} onChange={(e) => { setTing(e.target.value); setSearchNow(true); }} />


                            {
                                searchNow && (ting.length != 0)
                                    ?
                                    <span className='' style={{ "height": "0px ", position: "", left: "8rem", "width": "0px", "cursor": "pointer", "zIndex": 20 }}>
                                        <section className='bg-light ' style={{ "minHeight": "100px", "width": "50rem", "zIndex": "20", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}>

                                            <section className=" pt-2   ps-3 align-items-center d-flex justify-content-between" style={{ marginTop: "2.5rem" }} >
                                                <div
                                                    style={{ fontSize: "1.125rem", fontWeight: "700", textTransform: "uppercase", color: "#7E7E7E", }} >
                                                    Search Suggestions
                                                </div>
                                                <button className=''
                                                    onClick={(e) => {
                                                        //  setSearchNow(false); 
                                                    }}
                                                    style={{ border: "none", background: "transparent", }}>
                                                    <i className="bx bx-x me-2 RoundBtnz" style={{ fontSize: "28px", "borderRadius": "50%" }} onClick={() => { setSearchNow(false) }} ></i>
                                                </button>
                                            </section>


                                            {/* 2 - Suggestion tags  */}
                                            <section className="  d-flex flex-wrap flex-column ms" style={{ "zIndex": "20" }}>
                                                <section className=" m-2 pb-2 ps-0 pe-0">
                                                    {/* slicedData.map((data, index) => { */}
                                                    <div className='d-flex align-items-center justify-content-between hoverpe' style={{ "cursor": "default" }}>

                                                        <section className='d-flex align-items-center'>
                                                            <img src={require('../../Imagez/Dashboard/All/iconamoon_search-light_selected.png')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                            <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >     Influencers mentioning
                                                                <text style={{ fontWeight: "800", color: "#C83B93", "cursor": "pointer", }}
                                                                    onClick={() => { ChannelDetailz(); videoDetails(); setSearchNow(false) }}>  "{ting}"  </text>
                                                                in their posts </h5>
                                                        </section>

                                                        <section className=' me-5'>
                                                            {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                            &nbsp; <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp;
                                                        </section>
                                                    </div>

                                                </section>

                                            </section>


                                            {/* 3 - Profile ones */}
                                            <section className="  d-flex flex-column ms-3 mb-5">
                                                <div
                                                    style={{ fontSize: "1.125rem", fontWeight: "700", textTransform: "uppercase", color: "#7E7E7E", }} >
                                                    Influencers Profile
                                                </div>

                                                {/* Profilezzz */}
                                                <div className='box my-2 mb-4'>

                                                    {/* +++++++++++++++++++++++ */}

                                                    <section>
                                                        <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                            <section className='d-flex align-items-center'>
                                                                <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                                <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                                <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                            </section>

                                                            <section className=' me-5'>
                                                                {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                                <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                            </section>
                                                        </div>
                                                    </section>
                                                    {/* +++++++++++++++++++++++ */}
                                                    {/* +++++++++++++++++++++++ */}

                                                    <section>
                                                        <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                            <section className='d-flex align-items-center'>
                                                                <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                                <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                                <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                            </section>

                                                            <section className=' me-5'>
                                                                {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                                <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                            </section>
                                                        </div>
                                                    </section>
                                                    {/* +++++++++++++++++++++++ */}
                                                    {/* +++++++++++++++++++++++ */}

                                                    <section>
                                                        <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                            <section className='d-flex align-items-center'>
                                                                <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                                <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                                <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                            </section>

                                                            <section className=' me-5'>
                                                                {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                                <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                            </section>
                                                        </div>
                                                    </section>
                                                    {/* +++++++++++++++++++++++ */}
                                                    {/* +++++++++++++++++++++++ */}

                                                    <section>
                                                        <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                            <section className='d-flex align-items-center'>
                                                                <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                                <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                                <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                            </section>

                                                            <section className=' me-5'>
                                                                {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                                <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                            </section>
                                                        </div>
                                                    </section>
                                                    {/* +++++++++++++++++++++++ */}
                                                    {/* +++++++++++++++++++++++ */}

                                                    <section>
                                                        <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                            <section className='d-flex align-items-center'>
                                                                <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                                <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                                <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                            </section>

                                                            <section className=' me-5'>
                                                                {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                                <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                            </section>
                                                        </div>
                                                    </section>
                                                    {/* +++++++++++++++++++++++ */}






                                                </div>
                                            </section>

                                        </section>
                                    </span>
                                    :
                                    null
                            }


                        </div>




                        <div style={{ width: "16%" }}>
                            <div className='mx-2'>




                                {/* <Social_dropdown /> */}
                                <div>
                                    <button className=' btn  BtnBlK ' onClick={() => { setDrop(!openDrop) }}>
                                        <div style={{ display: "flex", alignItems: "center", "justifyContent": "center" }}>
                                            <label>
                                                {selected}
                                            </label>
                                            &nbsp;
                                            &nbsp;
                                            {
                                                openDrop
                                                    ?
                                                    <label>
                                                        <i className="fa fa-angle-up"></i>
                                                    </label>
                                                    :
                                                    <label>
                                                        <i className="fa fa-angle-down"></i>
                                                    </label>

                                            }
                                        </div>
                                    </button>

                                    {
                                        openDrop
                                            ?
                                            <section style={{ height: "0px", width: "0px", position: "relative" }}>

                                                <ul className='social_drop_list mt-1 bg-light' style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", width: "200px" }}>
                                                    <li>
                                                        <button className='social_drop btn hoverpe' onClick={() => { setSelelcted('Instagram'); setDrop(false); OpenInsta(); }}>
                                                            <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                            Instagram
                                                        </button>
                                                    </li>

                                                    <li style={{ border: "none" }}>
                                                        <button className='social_drop btn hoverpe' onClick={() => { setSelelcted('Youtube'); setDrop(false); }}>
                                                            <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                            Youtube
                                                        </button>
                                                    </li>
                                                </ul>
                                            </section>


                                            :
                                            null
                                    }
                                </div>



                            </div>
                        </div>



                        <div className='d-flex align-items-center justify-content-evenly'>
                            {/* <input type="checkbox" className='checkbox_section mx-2' /> */}
                            <section>
                                <img alt='img' src={require("../../Imagez/Dashboard/All/mdi_approve.png")} />
                                <label className='labels'>Verified influencers</label>
                            </section>

                            <label class="switchSmall2 m5">
                                <input type="checkbox" onClick={toggleSlide} />
                                <small></small>
                            </label>
                        </div>
                    </div>



                    {/* Youtube CHANNELS & VIDEOS  */}
                    <div className='mt-3 d-flex justify-content-between'>
                        <div className='d-flex'>
                            {/* <button onClick={wow}>showe me </button>/ */}

                            <button className={youtubeActive == 'channel' ? 'channel_tab active_channel_tab' : 'channel_tab'} onClick={() => { setYoutubeactive('channel') }}>
                                Channel
                            </button>

                            <button className={youtubeActive == 'videos' ? 'channel_tab active_channel_tab' : 'channel_tab'} onClick={() => { setYoutubeactive('videos'); }}>
                                Videos
                            </button>
                        </div>

                        <div className='d-flex youtube_filter_head_label justify-content-between'>
                            <label>
                                About 2 channels for "cinema landing page" (filtered)
                            </label>

                            <label>
                                Searched among <span style={{ color: '#C83B93' }}>986,223,232</span> Youtube video is global.
                            </label>
                        </div>
                    </div>


                    {/* Youtube Search channel filter */}

                    {
                        youtubeActive == 'channel'
                            ?
                            <div className=' channell youtube_search_section'>
                                <table className='bg- w-100' >
                                    {/* Type  */}
                                    <tr className=''>
                                        <td className='bg-' >
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Type
                                                </div>
                                                <li>
                                                    <i class="fa fa-info-circle "></i>  
                                                    <span className="tooltip" style={{marginBottom : "4rem"}}>yeah </span>
                                                </li>

                                            </label>
                                        </td>

                                        <td className='b' colSpan={2} >
                                            <button onClick={() => { setChanType("Upload") }} className={chanType == "Upload" ? "activeButtonFilter btn" : "btn"}>
                                                Upload
                                            </button>
                                        </td>

                                        <td className='' colSpan={2}>
                                            <button onClick={() => { setChanType("Live") }} className={chanType == "Live" ? "activeButtonFilter btn" : "btn"}>
                                                Live Stream
                                            </button>
                                        </td>

                                        <td className='' colSpan={1}>
                                            <button onClick={() => { setChanType("Premiere") }} className={chanType == "Premiere" ? "activeButtonFilter btn" : "btn"}>
                                                Premiere
                                            </button>
                                        </td>

                                    </tr>

                                    {/*Avg views  row  */}
                                    <tr>
                                        <td>
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Avg. Views
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => {
                                                setMinViews("10000");
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "", "10000", minLikes, maxLikes);
                                                document.getElementById("Top").scrollIntoView({ behavior: "smooth" })
                                            }} className={minViews == 10000 ? "activeButtonFilter btn" : "btn"} >
                                                10k+
                                            </button>
                                        </td>

                                        <td colSpan={0}>
                                            <button onClick={() => { setMinViews("50000"); ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "50000", "", minLikes, maxLikes); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} className={minViews == 50000 ? "activeButtonFilter btn" : "btn"} >
                                                50k+
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => { setMinViews("100000"); ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "100000", "", minLikes, maxLikes); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} className={minViews == 100000 ? "activeButtonFilter btn" : "btn"} >
                                                100k+
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => { setMinViews("200000"); ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "200000", "", minLikes, maxLikes); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} className={minViews == 200000 ? "activeButtonFilter btn" : "btn"} >
                                                200k+

                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => { setMinViews("500000"); ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "10000", "", minLikes, maxLikes); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} className={minViews == 500000 ? "activeButtonFilter btn" : "btn"} >
                                                500k+
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => { setMinViews("1000000"); ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "10000", "", minLikes, maxLikes); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} className={minViews == 1000000 ? "activeButtonFilter btn" : "btn"} >
                                                1M+
                                            </button>
                                        </td>

                                        <td className='' colSpan={1}>
                                            <button onClick={() => { setMinViews("2000000"); ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "10000", "", minLikes, maxLikes); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} className={minViews == 2000000 ? "activeButtonFilter btn" : "btn"} >
                                                2M+
                                            </button>
                                        </td>
                                        {/* <td className='' colSpan={1}>
                                    <button onClick={() => { setMaxViews("2000000") }} className={maxViews == 2000000 ? "activeButtonFilter btn" : "btn"} >
                                        2M+
                                    </button>
                                </td> */}

                                        <td className='bg- ps-2' colSpan={4} style={{ width: "800px" }}>
                                            <div className='d-flex justify-content-end'>
                                                <input type="text" value={minViews} onChange={(e) => { setMinViews(e.target.value) }} placeholder='Min' />
                                                -
                                                <input type="text" value={maxViews} onChange={(e) => { setMaxViews(e.target.value) }} placeholder='Max' />

                                                <button className='youtube_filter_btn RoundBtnz ' onClick={() => { ChannelDetailz(); }}>
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                                {

                                                    maxViews || minViews
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => { ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "", ""); setMinViews(""); setMaxViews("") }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }

                                            </div>
                                        </td>
                                    </tr>

                                    {/* --- Avg . Likes----- */}
                                    <tr>
                                        <td>
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Avg . Likes
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => {
                                                setMinLikes("1000");
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "1000", "");

                                            }} className={minLikes == "1000" ? "activeButtonFilter btn " : "btn"}>
                                                1K +
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => {
                                                setMinLikes("3000");
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "3000", "");
                                            }} className={minLikes == "3000" ? "activeButtonFilter btn" : "btn"}>
                                                3K +
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => {
                                                setMinLikes("5000");
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "5000", "");
                                            }} className={minLikes == "5000" ? "activeButtonFilter btn" : "btn"}>
                                                5K +
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => {
                                                setMinLikes("10000");
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "10000", "");
                                            }} className={minLikes == "10000" ? "activeButtonFilter btn" : "btn"}>
                                                10K +
                                            </button>
                                        </td>
                                        <td colSpan={1}>
                                            <button onClick={() => {
                                                setMinLikes("20000");
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "20000", "");
                                            }} className={minLikes == "20000" ? "activeButtonFilter btn" : "btn"}>
                                                20K +
                                            </button>
                                        </td>
                                        <td colSpan={2}>
                                            <button onClick={() => {
                                                setMinLikes("30000");
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "30000", "");
                                            }} className={minLikes == "30000" ? "activeButtonFilter btn" : "btn"}>
                                                30K+
                                            </button>
                                        </td>
                                        <td colSpan={1}>

                                        </td>




                                        <td className='bg- ps-2' colSpan={4} style={{ width: "800px" }}>
                                            <div className='d-flex justify-content-end'>
                                                <input type="text" value={minLikes} onChange={(e) => { setMinLikes(e.target.value) }} placeholder='Min' />
                                                -
                                                <input type="text" value={maxLikes} onChange={(e) => { setMaxLikes(e.target.value) }} placeholder='Max' />

                                                <button className='youtube_filter_btn RoundBtnz' onClick={() => { ChannelDetailz(); }} >
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                                {

                                                    maxLikes || minLikes
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => { setMinLikes(""); setMaxLikes(""); ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "", ""); }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }

                                            </div>
                                        </td>
                                    </tr>

                                    {/* --- Avg . cmnts------ */}
                                    <tr>
                                        <td>
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Avg . comments
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => {
                                                setMinComments("1000")
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "1000", "");
                                            }} className={minComments == "1000" ? "activeButtonFilter btn" : "btn"}>
                                                1K +
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => {
                                                setMinComments("3000")
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "3000", "");
                                            }} className={minComments == "3000" ? "activeButtonFilter btn" : "btn"}>
                                                3K +
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => {
                                                setMinComments("5000")
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "5000", "");
                                            }} className={minComments == "5000" ? "activeButtonFilter btn" : "btn"}>
                                                5K +
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => {
                                                setMinComments("10000")
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "10000", "");
                                            }} className={minComments == "10000" ? "activeButtonFilter btn" : "btn"}>
                                                10K +
                                            </button>
                                        </td>
                                        <td colSpan={1}>
                                            <button onClick={() => {
                                                setMinComments("20000")
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "20000", "");
                                            }} className={minComments == "20000" ? "activeButtonFilter btn" : "btn"}>
                                                20K +
                                            </button>
                                        </td>
                                        <td colSpan={2}>
                                            <button onClick={() => {
                                                setMinComments("30000")
                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "30000", "");
                                            }} className={minComments == "30000" ? "activeButtonFilter btn" : "btn"}>
                                                30K+
                                            </button>
                                        </td>
                                        <td colSpan={1}>

                                        </td>

                                        <td className='bg- ps-2' colSpan={4} style={{ width: "800px" }}>
                                            <div className='d-flex justify-content-end'>
                                                <input type="text" value={minComments} onChange={(e) => { setMinComments(e.target.value) }} placeholder='Min' />
                                                -
                                                <input type="text" value={maxComments} onChange={(e) => { setMaxComments(e.target.value) }} placeholder='Max' />

                                                <button className='youtube_filter_btn RoundBtnz'

                                                    onClick={() => { ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, minComments, maxComments); }}
                                                >
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                                {

                                                    minComments || maxComments
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                            setMinComments(""); setMaxComments("");
                                                            ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, minViews, maxViews, "", "");
                                                        }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }


                                            </div>
                                        </td>
                                    </tr>

                                    {/* ---Engagment Rate----- */}
                                    <tr>
                                        <td>
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    E.R %
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => { setMinER("0"); setMaxER("5") }} className={minER == "0" ? "activeButtonFilter btn" : "btn "}>
                                                0 - 5
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => { setMinER("5 "); setMaxER("10") }} className={minER == "5 " ? "activeButtonFilter btn" : "btn"}>
                                                5 - 10
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => { setMinER("10"); setMaxER("20 ") }} className={minER == "10" ? "activeButtonFilter btn" : "btn"}>
                                                10 - 20
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => { setMinER("20"); setMaxER("50 ") }} className={minER == "20" ? "activeButtonFilter btn" : "btn"}>
                                                20 - 50
                                            </button>
                                        </td>
                                        <td colSpan={2}>
                                            <button onClick={() => { setMinER("50"); setMaxER(" ") }} className={minER == "50" ? "activeButtonFilter btn" : "btn"}>
                                                50 +
                                            </button>
                                        </td>
                                        <td colSpan={2}>
                                            <button disabled style={{ "cursor": "none" }}>

                                            </button>
                                        </td>





                                        <td className='bg- ps-2' colSpan={2} style={{ width: "800px" }}>
                                            <div className='d-flex justify-content-end'>
                                                <input type="text" onChange={(e) => { setMinER(e.target.value) }} value={minER} placeholder='Min' />
                                                -
                                                <input type="text" onChange={(e) => { setMaxER(e.target.value) }} value={maxER} placeholder='Max' />

                                                <button className='youtube_filter_btn RoundBtnz'>
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                                {

                                                    minER
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => { setMinER(""); setMaxER(" ") }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }

                                            </div>
                                        </td>
                                    </tr>

                                    {/* Duration row  */}
                                    <tr>
                                        <td >
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Duration
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={3}>
                                            <button onClick={() => { setVideoDurationMax("60") }} className={videoDurationMax == "60" ? "activeButtonFilter btn" : "btn"}>
                                                Short ( 60 sec or less )
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => { setVideoDurationMin("61") }} className={videoDurationMin == "61" ? "activeButtonFilter btn" : "btn"}>61 sec+</button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => { setVideoDurationMin("180") }} className={videoDurationMin == "180" ? "activeButtonFilter btn" : "btn"}>
                                                3 min+
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button style={{ fontSize: "14px" }} onClick={() => { setVideoDurationMin("600") }} className={videoDurationMin == "600" ? "activeButtonFilter btn" : "btn"}>
                                                10 min+
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => { setVideoDurationMin("3600") }} className={videoDurationMin == "3600" ? "activeButtonFilter btn" : "btn"}>
                                                1 hr+
                                            </button>
                                        </td>


                                        <td colSpan={2}>
                                            <div className='d-flex justify-content-end'>
                                                <input type="text" onChange={(e) => { setVideoDurationMin(e.target.value) }} value={videoDurationMin} placeholder='Min ( Second )' />
                                                -
                                                <input type="text" onChange={(e) => { setVideoDurationMax(e.target.value) }} value={videoDurationMax} placeholder='Max ( Second )' />

                                                <button className='youtube_filter_btn RoundBtnz'>
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                                {

                                                    videoDurationMin || videoDurationMax
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => { setVideoDurationMax(""); setVideoDurationMin("") }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }

                                            </div>
                                        </td>
                                    </tr>



                                    {/* More */}
                                    {
                                        tabShow
                                            ?
                                            <>


                                                {/* Views/7days  */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Views/7days
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>



                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            10K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            50K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            100K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            200K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            500K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            1M +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" placeholder='Min' />
                                                            -
                                                            <input type="text" placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>


                                                {/* Views/15days */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Views/15days
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>



                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            10K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            50K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            100K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            200K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            500K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            1M +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" placeholder='Min' />
                                                            -
                                                            <input type="text" placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>


                                                {/* Views/30days */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Views/30days
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>



                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            10K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            50K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            100K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            200K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            500K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            1M +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" placeholder='Min' />
                                                            -
                                                            <input type="text" placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>


                                                {/* ____________________________________________________________________________________________________________ */}

                                                {/* Super Chat */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Super Chat
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMaxSupChat("100") }} className={maxSupChat == "100" ? "activeButtonFilter btn" : "btn"}>
                                                            $100+
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setMaxSupChat("1000") }} className={maxSupChat == "1000" ? "activeButtonFilter btn" : "btn"}>
                                                            $1,000+
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMaxSupChat("5000") }} className={maxSupChat == "5000" ? "activeButtonFilter btn" : "btn"}>
                                                            $5,000+
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setMaxSupChat("10000") }} className={maxSupChat == "10000" ? "activeButtonFilter btn" : "btn"}>
                                                            $10,000+
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}></td>

                                                    <td colSpan={2}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" value={minSupChat} onChange={(e) => { setMinSupChat(e.target.value) }} placeholder='Min' />
                                                            -
                                                            <input type="text" value={maxSupChat} onChange={(e) => { setMaxSupChat(e.target.value) }} placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* ----Weekly Update---- */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Weekly update
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>



                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            1 - 3
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            3-5
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            7 +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            10 +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            15 +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            20 +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" placeholder='Min' />
                                                            -
                                                            <input type="text" placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>


                                                {/* ____________________________________________________________________________________________________________ */}
                                                {/*Views/Subs  */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Views/Subs
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            10% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            30% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            50% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            100% +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            200% +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            300%+

                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" placeholder='Min' />
                                                            -
                                                            <input type="text" placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>


                                                {/* Cmt./Views */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Cmt./Views
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMinER("0"); setMaxER("5") }} className={minER == "0" ? "activeButtonFilter btn" : "btn "}>
                                                            1% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setMinER("5 "); setMaxER("10") }} className={minER == "5 " ? "activeButtonFilter btn" : "btn"}>
                                                            3% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMinER("10"); setMaxER("20 ") }} className={minER == "10" ? "activeButtonFilter btn" : "btn"}>
                                                            5% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setMinER("20"); setMaxER("50 ") }} className={minER == "20" ? "activeButtonFilter btn" : "btn"}>
                                                            10% +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMinER("50"); setMaxER(" ") }} className={minER == "50" ? "activeButtonFilter btn" : "btn"}>
                                                            15% +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button disabled style={{ "cursor": "none" }}>

                                                        </button>
                                                    </td>





                                                    <td className='bg- ps-2' colSpan={2} style={{ width: "800px" }}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" onChange={(e) => { setMinER(e.target.value) }} value={minER} placeholder='Min' />
                                                            -
                                                            <input type="text" onChange={(e) => { setMaxER(e.target.value) }} value={maxER} placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>
                                                            {

                                                                minER
                                                                    ?

                                                                    <button className='youtube_filter_btn RoundBtnz' onClick={() => { setMinER(""); setMaxER(" ") }}>
                                                                        <i class="fa fa-xmark" aria-hidden="true"></i>
                                                                    </button>
                                                                    :
                                                                    null
                                                            }

                                                        </div>
                                                    </td>
                                                </tr>

                                                {/* Like/Views */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Like/Views
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMinER("0"); setMaxER("5") }} className={minER == "0" ? "activeButtonFilter btn" : "btn "}>
                                                            1% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setMinER("5 "); setMaxER("10") }} className={minER == "5 " ? "activeButtonFilter btn" : "btn"}>
                                                            3% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMinER("10"); setMaxER("20 ") }} className={minER == "10" ? "activeButtonFilter btn" : "btn"}>
                                                            5% +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setMinER("20"); setMaxER("50 ") }} className={minER == "20" ? "activeButtonFilter btn" : "btn"}>
                                                            10% +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button onClick={() => { setMinER("50"); setMaxER(" ") }} className={minER == "50" ? "activeButtonFilter btn" : "btn"}>
                                                            15% +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button disabled style={{ "cursor": "none" }}>

                                                        </button>
                                                    </td>





                                                    <td className='bg- ps-2' colSpan={2} style={{ width: "800px" }}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" onChange={(e) => { setMinER(e.target.value) }} value={minER} placeholder='Min' />
                                                            -
                                                            <input type="text" onChange={(e) => { setMaxER(e.target.value) }} value={maxER} placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>
                                                            {

                                                                minER
                                                                    ?

                                                                    <button className='youtube_filter_btn RoundBtnz' onClick={() => { setMinER(""); setMaxER(" ") }}>
                                                                        <i class="fa fa-xmark" aria-hidden="true"></i>
                                                                    </button>
                                                                    :
                                                                    null
                                                            }

                                                        </div>
                                                    </td>
                                                </tr>





                                                {/* ____________________________________________________________________________________________________________ */}

                                                {/* ---LIve Viewrs----- */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Live Viewers
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            1K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            3K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            5K +
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            10K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            20K +
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            30K+
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <div className='d-flex justify-content-end'>
                                                            <input type="text" placeholder='Min' />
                                                            -
                                                            <input type="text" placeholder='Max' />

                                                            <button className='youtube_filter_btn RoundBtnz'>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>

                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* ---Categories----- */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Categories
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>


                                                    <td colSpan={12} style={{ minWidth: "100px" }}>
                                                        <div className='category_filter_section'>

                                                            {
                                                                allCats.length != 0

                                                                    ?
                                                                    allCats.map((data, index) => {

                                                                        return (
                                                                            <button className={CatIdz == data.id ? "activeButtonFilter btn" : "btn"} id={data.id}
                                                                                onClick={() => {
                                                                                    setCatsIdz()
                                                                                    console.log("the vidoidididid : ", data.id)
                                                                                }}
                                                                            >
                                                                                {data.title}
                                                                            </button>
                                                                        )

                                                                        {/* return (
                                                                            <button className={catsIdz == data.id .filter((category) => category !== value)   ? 'activeButtonFilter btn' : 'btn '} id={data.id}
                                                                                onClick={() => { 
                                                                                    setCatsIdz(current => [...current, data.id])
                                                                                    console.log("the vidoidididid : ", data.id) }}
                                                                            >
                                                                                {data.title}
                                                                            </button>
                                                                        ) */}

                                                                    })
                                                                    :
                                                                    null

                                                            }
                                                        </div>

                                                    </td>





                                                </tr>
                                                {/* -----Last Promoted-------- */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Last Promotion
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 7 days
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 15 days
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 30 days
                                                        </button>
                                                    </td>

                                                    <td colSpan={3} className=''>
                                                        <button className='btn '>
                                                            Past 180 days
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Before past 30 days
                                                        </button>
                                                    </td>


                                                </tr>
                                                {/* ----Last Updated--------- */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Last Update
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 24 hours
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 7 days
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 15 days
                                                        </button>
                                                    </td>

                                                    <td colSpan={3}>
                                                        <button className='btn'>
                                                            Past 30 days
                                                        </button>
                                                    </td>
                                                    <td colSpan={0}>
                                                        <button className='btn'>

                                                        </button>
                                                    </td>


                                                </tr>
                                                {/* Publish Date */}
                                                <tr >
                                                    <td>

                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Publish Date
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>

                                                    </td>

                                                    <td colSpan={2} className='bg-'>
                                                        <button className='btn'>
                                                            Past 24 hours
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 7 days
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Past 15 days
                                                        </button>
                                                    </td>

                                                    <td colSpan={3}>
                                                        <button className='btn'>
                                                            Past 30 days
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* Advertisement */}
                                                <tr>
                                                    <td>

                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Advertisement
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={3} className=''>
                                                        <button className='btn ms-1'>
                                                            Includes Paid Promotion
                                                        </button>
                                                    </td>
                                                </tr>
                                                {/* ---Country----- */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Country
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setCity("India") }} className={city == "India" ? "activeButtonFilter btn" : "btn"}>
                                                            India
                                                        </button>

                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setCity("Indonesia") }} className={city == "Indonesia" ? "activeButtonFilter btn" : "btn"}>
                                                            Indonesia
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button onClick={() => { setCity("Japan") }} className={city == "Japan" ? "activeButtonFilter btn" : "btn"}>
                                                            Japan
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setCity("Taiwan") }} className={city == "Taiwan" ? "activeButtonFilter btn" : "btn"}>
                                                            Taiwan
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button onClick={() => { setCity("South Korea") }} className={city == "South Korea" ? "activeButtonFilter btn" : "btn"}>
                                                            South Korea
                                                        </button>
                                                    </td>
                                                    <td className='text-start' colSpan={3}>
                                                        <button onClick={() => { setCity("United States") }} className={city == "United States" ? "activeButtonFilter btn" : "btn"}>
                                                            United States
                                                        </button>
                                                    </td>
                                                    {/* <td className='text-start' colSpan={1}>
                                    <button onClick={() => { setCity("United States") }} className={city == "United States" ? "activeButtonFilter btn" : "btn"}>
                                    
                                    </button>
                                </td> */}





                                                    <td className='bg- ps-5' colSpan={2} style={{ width: "800px" }}>
                                                        <div className='d-flex  justify-content-end'>


                                                            <input type="text" placeholder='Country' style={{ width: "230px" }} onChange={(e) => {
                                                                setCity(e.target.value)
                                                                // setCountryDrop(true)

                                                            }} value={city} />
                                                            <button className={city ? 'youtube_filter_btn RoundBtnz' : 'youtube_filter_btn RoundBtnz '}>
                                                                <i class="fa fa-search" aria-hidden="true"></i>
                                                            </button>



                                                            {
                                                                city != ""
                                                                    ?

                                                                    <span className='bg-info' style={{ "height": "0px", "width": '0px', position: "relative", zIndex: "100", "left": "-2rem", top: "2.8rem" }} >
                                                                        {/* <section className='bg-danger rounded py-1' style={{ "height": "280px", "width": '230px', overflow: "hidden", "overflowY": "scroll" }} >

                                                                            <button className='px-2 py-1 w-100 ' >button 1</button>
                                                                            <CountryDropz />
                                                                        </section> */}

                                                                        <span className='bg-light' style={{
                                                                            "height": "0px", "width": "0px", "position": "relative", left: "-1rem", "zIndex": "10000"
                                                                        }}>
                                                                            <CountryDropz />
                                                                        </span>


                                                                    </span>

                                                                    :
                                                                    null
                                                            }


                                                            {

                                                                city
                                                                    ?

                                                                    <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                                        setTimeout(() => {
                                                                            ChannelDetailz();
                                                                        }, 1000)

                                                                    }}>
                                                                        <i class="fa fa-xmark" aria-hidden="true"></i>
                                                                    </button>
                                                                    :
                                                                    null
                                                            }

                                                        </div>
                                                    </td>
                                                </tr>
                                                {/* ------------- */}



                                                <tr>
                                                    <td className='bg-' onClick={() => { setTabShow(false); document.getElementById("TableTop").scrollIntoView({ behavior: "smooth" }) }}>
                                                        <label className='d-flex justify-content-between align-items-center ' style={{ cursor: "pointer" }}>
                                                            <div>
                                                                Fold
                                                            </div>
                                                            <i class="fa fa-angle-up"></i>
                                                        </label>
                                                    </td>


                                                </tr>

                                            </>
                                            :
                                            <>
                                                <tr className='bg-transparent'>
                                                    <td className='' onClick={() => { setTabShow(true) }}>
                                                        <label className='d-flex justify-content-between align-items-center ' style={{ cursor: "pointer" }}>
                                                            <div>
                                                                More
                                                            </div>
                                                            <i class="fa fa-angle-down"></i>
                                                        </label>
                                                    </td>

                                                    <td className='bg-transparent' colSpan={10}></td>


                                                    <td colSpan={2} className='' style={{ textAlign: 'start', backgroundColor: 'transparent', width: "800px" }}>
                                                        <div className='d-flex ms-2 align-items-center'>
                                                        </div>
                                                    </td>


                                                </tr>
                                            </>

                                    }




                                </table>

                            </div>





                            :







                            <div className='videoo  youtube_search_section'>
                                <table className='bg- w-100'>


                                    {/*views  row  */}
                                    <tr>
                                        <td>
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Views
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={2} className='bg-in text-start ps-1'>
                                            <button onClick={() => {
                                                setVideoMinView("10000");
                                                videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, "10000", videoMaxView)
                                            }} className={videoMinView == 10000 ? "activeButtonFilter btn" : "btn"} >
                                                10k+
                                            </button>
                                        </td>

                                        <td colSpan={0} className='bg- text-start ps-1 '>
                                            <button onClick={() => {
                                                videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, "50000", "")
                                                setVideoMinView("50000"); setVideoMaxView("");
                                            }} className={videoMinView == 50000 ? "activeButtonFilter btn" : "btn"} >
                                                50k+
                                            </button>
                                        </td>

                                        <td colSpan={1} className='bg- text-start ps-1 '>
                                            <button onClick={() => {
                                                setVideoMinView("100000"); setVideoMaxView("");
                                                videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, "100000", "")
                                            }} className={videoMinView == 100000 ? "activeButtonFilter btn" : "btn"} >
                                                100k+
                                            </button>
                                        </td>

                                        <td colSpan={1} className='bg- text-start ps-1 '>
                                            <button onClick={() => {
                                                setVideoMinView("200000"); setVideoMaxView("");
                                                videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, "200000", "")
                                            }} className={videoMinView == 200000 ? "activeButtonFilter btn" : "btn"} >
                                                200k+

                                            </button>
                                        </td>

                                        <td colSpan={1} className='bg- text-start ps-1 '>
                                            <button onClick={() => {
                                                setVideoMinView("500000"); setVideoMaxView("");
                                                videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, "500000", "")
                                            }} className={videoMinView == 500000 ? "activeButtonFilter btn" : "btn"} >
                                                500k+
                                            </button>
                                        </td>

                                        <td colSpan={1} className='bg- text-start ps-1 '>
                                            <button onClick={() => {
                                                setVideoMinView("1000000"); setVideoMaxView("");
                                                videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, "1000000", "")
                                            }} className={videoMinView == 1000000 ? "activeButtonFilter btn" : "btn"} >
                                                1M+
                                            </button>
                                        </td>

                                        <td colSpan={3}></td>

                                        <td className='bg- ps-2' colSpan={4} style={{ width: "800px" }}>
                                            <div className='d-flex justify-content-end'>
                                                <input type="text" value={videoMinView} onChange={(e) => { setVideoMinView(e.target.value) }} placeholder='Min' />
                                                -
                                                <input type="text" value={videoMaxView} onChange={(e) => { setVideoMaxView(e.target.value) }} placeholder='Max' />

                                                <button className='youtube_filter_btn RoundBtnz ' onClick={() => { videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView) }}>
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                                {

                                                    videoMaxView || videoMinView
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                            // ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "", ""); 
                                                            setVideoMinView("0"); setVideoMaxView("");
                                                            videoDetails(videoType, videoDuration, videoAds, videoPublished, videoCategory, videoCountry, "0", "")
                                                        }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }

                                            </div>
                                        </td>


                                    </tr>

                                    {/* Super Chat */}
                                    <tr>
                                        <td>
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Super Chat
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={2} className='bg-i text-start ps-1'>
                                            <button onClick={() => { setMaxSupChat("100") }} className={maxSupChat == "100" ? "activeButtonFilter btn" : "btn"}>
                                                $100+
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => { setMaxSupChat("1000") }} className={maxSupChat == "1000" ? "activeButtonFilter btn" : "btn"}>
                                                $1,000+
                                            </button>
                                        </td>

                                        <td colSpan={2}>
                                            <button onClick={() => { setMaxSupChat("5000") }} className={maxSupChat == "5000" ? "activeButtonFilter btn" : "btn"}>
                                                $5,000+
                                            </button>
                                        </td>

                                        <td colSpan={1}>
                                            <button onClick={() => { setMaxSupChat("10000") }} className={maxSupChat == "10000" ? "activeButtonFilter btn" : "btn"}>
                                                $10,000+
                                            </button>
                                        </td>

                                        <td colSpan={2}></td>
                                        <td colSpan={2}></td>

                                        <td colSpan={2}>
                                            <div className='d-flex justify-content-end    '>
                                                <input type="text" value={minSupChat} onChange={(e) => { setMinSupChat(e.target.value) }} placeholder='Min' />
                                                -
                                                <input type="text" value={maxSupChat} onChange={(e) => { setMaxSupChat(e.target.value) }} placeholder='Max' />

                                                <button className='youtube_filter_btn RoundBtnz'>
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>

                                                {

                                                    minSupChat || maxSupChat
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                            // ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore, "", ""); 
                                                            setMinSupChat(""); setMaxSupChat("")
                                                        }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </td>
                                    </tr>

                                    {/* Duration row  */}
                                    <tr>
                                        <td className='' >
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Duration
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={2} className='bg- text-start ps-1 '>
                                            <button onClick={() => {
                                                setVideoDuration("short")
                                                videoDetails(videoType, "short", videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                            }}
                                                className={videoDuration == "short" ? "activeButtonFilter btn" : "btn"}>
                                                {/* Short(60 sec or less) */}
                                                Short
                                            </button>
                                        </td>

                                        <td colSpan={1} className='bg-inf text-start ' >
                                            <button onClick={() => {
                                                setVideoDuration("medium")
                                                videoDetails(videoType, "medium", videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                            }}
                                                className={videoDuration == "medium" ? "activeButtonFilter btn" : "btn"}>
                                                {/* 61 sec+ */}
                                                Medium
                                            </button>
                                        </td>

                                        <td colSpan={1} className='bg-inf text-start '>
                                            <button onClick={() => {
                                                setVideoDuration("long")
                                                videoDetails(videoType, "long", videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                            }}
                                                className={videoDuration == "long" ? "activeButtonFilter btn" : "btn"}>
                                                {/* 3 min+ */}
                                                Long
                                            </button>
                                        </td>

                                        <td colSpan={3} className='bg-inf text-start '>
                                            {/* <button style={{ fontSize: "14px" }} onClick={() => {
                                                setVideoDuration("any")
                                                videoDetails(videoType, "any", videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                            }}
                                                className={videoDuration == "any" ? "activeButtonFilter btn" : "btn"}>
                                           
                                                Any
                                            </button> */}
                                        </td>


                                        <td colSpan={6}>
                                            <div className='d-flex justify-content-end'>
                                                {
                                                    videoDuration == "long" || videoDuration == "medium" || videoDuration == "short"
                                                        ?
                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                            videoDetails(videoType, "any", videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                                            setVideoDuration("any");
                                                        }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </td>


                                    </tr>

                                    {/* Type  */}
                                    <tr>
                                        <td className='bg-' >
                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Type
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td className='ps-1 text-start' colSpan={2} >
                                            <button onClick={() => {
                                                setVideoType("completed")
                                                videoDetails("completed", videoDuration, videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                            }} className={videoType == "completed" ? "activeButtonFilter btn" : "btn"}>
                                                Upload
                                            </button>
                                        </td>

                                        <td className=' text-start bg- ps-1' colSpan={1}>
                                            <button onClick={() => {
                                                setVideoType("live")
                                                videoDetails("live", videoDuration, videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                            }} className={videoType == "live" ? "activeButtonFilter btn" : "btn"}>
                                                Live Stream
                                            </button>
                                        </td>

                                        <td className=' text-start ps-1' colSpan={1}>
                                            <button onClick={() => {
                                                setVideoType("upcoming")
                                                videoDetails("upcoming", videoDuration, videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                            }} className={videoType == "upcoming" ? "activeButtonFilter btn" : "btn"}>
                                                Premiere
                                            </button>
                                        </td>

                                        <td colSpan={8}>
                                            <div className='d-flex justify-content-end    '>
                                                {

                                                    videoType
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                            // videoDetails(videoType, "any", videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                                            setVideoType("");
                                                            videoDetails("completed", videoDuration, videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                                        }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }
                                            </div>
                                        </td>


                                    </tr>

                                    {/* Advertisement */}
                                    <tr>
                                        <td>

                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Advertisement
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>
                                        </td>

                                        <td colSpan={4} className='text-start ps-1'>
                                            <button className={videoAds == "true" ? "activeButtonFilter text-start btn" : " text-start  btn "}
                                                onClick={() => {
                                                    setVideoAds("true");
                                                    videoDetails(videoType, videoDuration, "true", videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)

                                                }}
                                            >
                                                Includes Paid Promotion
                                            </button>
                                        </td>



                                        <td colSpan={8}>
                                            <div className='d-flex justify-content-end    '>

                                                {

                                                    videoAds == "true"
                                                        ?

                                                        <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                            // videoDetails(videoType, "any", videoAds, videoPublished, videoCategory, videoCountry, videoMinView, videoMaxView)
                                                            setVideoAds("any");
                                                        }}>
                                                            <i class="fa fa-xmark" aria-hidden="true"></i>
                                                        </button>
                                                        :
                                                        null
                                                }


                                            </div>
                                        </td>



                                    </tr>


                                    {/* Publish Date */}
                                    <tr >
                                        <td>

                                            <label className='d-flex justify-content-between align-items-center'>
                                                <div>
                                                    Publish Date
                                                </div>
                                                <i class="fa fa-info-circle"></i>
                                            </label>

                                        </td>

                                        <td colSpan={3} className='bg-ifo text-start ps-1'>
                                            <button className={videoPublished == "Past 24 hours" ? "activeButtonFilter btn " : "btn "}
                                                onClick={() => {
                                                    videoDetails(videoType, videoDuration, videoAds, "Past 24 hours", videoCategory, videoCountry, videoMinView, videoMaxView)
                                                    setVideoPublished("Past 24 hours");
                                                }}>
                                                Past 24 hours
                                            </button>
                                        </td>

                                        <td colSpan={2} className=' text-start ps-1' >
                                            <button className={videoPublished == "Past 7 days" ? "activeButtonFilter btn " : "btn "}
                                                onClick={() => {
                                                    videoDetails(videoType, videoDuration, videoAds, "Past 7 days", videoCategory, videoCountry, videoMinView, videoMaxView)
                                                    setVideoPublished("Past 7 days");
                                                }}>
                                                Past 7 days
                                            </button>
                                        </td>

                                        <td colSpan={2} className=' text-start ps-1'>
                                            <button className={videoPublished == "Past 15 days" ? "activeButtonFilter btn " : "btn "}
                                                onClick={() => {
                                                    videoDetails(videoType, videoDuration, videoAds, "Past 15 days", videoCategory, videoCountry, videoMinView, videoMaxView)
                                                    setVideoPublished("Past 15 days");
                                                }}>
                                                Past 15 days
                                            </button>
                                        </td>

                                        <td colSpan={4} className='bg- text-start ps-1'>
                                            <button className={videoPublished == "Past 30 days" ? "activeButtonFilter btn " : "btn "}
                                                onClick={() => {
                                                    videoDetails(videoType, videoDuration, videoAds, "Past 30 days", videoCategory, videoCountry, videoMinView, videoMaxView)
                                                    setVideoPublished("Past 30 days");
                                                }}>
                                                Past 30 days
                                            </button>
                                        </td>
                                    </tr>


                                    {/* More */}
                                    {
                                        tabShow
                                            ?
                                            <>

                                                {/* ---Categories----- */}
                                                <tr rowSpan={3} style={{ overflow: "revert-layer" }}>


                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Categories
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={12} style={{ minWidth: "100px" }}>
                                                        <div className='category_filter_section'>

                                                            {
                                                                allCats.length != 0

                                                                    ?
                                                                    allCats.map((data, index) => {

                                                                        return (
                                                                            <button className={CatIdz == data.id ? "activeButtonFilter btn" : "btn"} id={data.id}
                                                                                onClick={() => {
                                                                                    setCatsIdz()
                                                                                    console.log("the vidoidididid : ", data.id)
                                                                                }}
                                                                            >
                                                                                {data.title}
                                                                            </button>
                                                                        )

                                                                        {/* return (
                                                                            <button className={catsIdz == data.id .filter((category) => category !== value)   ? 'activeButtonFilter btn' : 'btn '} id={data.id}
                                                                                onClick={() => { 
                                                                                    setCatsIdz(current => [...current, data.id])
                                                                                    console.log("the vidoidididid : ", data.id) }}
                                                                            >
                                                                                {data.title}
                                                                            </button>
                                                                        ) */}

                                                                    })
                                                                    :
                                                                    null

                                                            }
                                                        </div>

                                                    </td>



                                                    {/* 
                                                    {
                                                        allCats.length != 0
                                                            ?

                                                            <td colSpan={3} className='bg- text-start ps-1'>
                                                                <button className={catsIdz != (allCats[0].id) ? 'btn' : "activeButtonFilter btn"} onClick={() => {
                                                                    setCatsIdz(allCats[0].id);

                                                                    console.log("hfhdhdhdhdhdhchb : ", catsIdz)
                                                                }}>
                                                                    {allCats[0].title}
                                                                </button>
                                                            </td>
                                                            :
                                                            null
                                                    } */}



                                                    {/* <td colSpan={1}>
                                                        <button className='btn'>
                                                            Fashion
                                                        </button>
                                                    </td>

                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Travel
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button className='btn'>
                                                            Family
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Fitness
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button className='btn'>
                                                            Gaming
                                                        </button>
                                                    </td> */}


                                                    {/* <td className='bg- ps-5'>
                                                        <div className='d-flex  justify-content-end p'>
                                                            <button className={videoCatDrop ? 'youtube_filter_btn RoundBtnz bg-info' : 'youtube_filter_btn RoundBtnz '}
                                                                onClick={() => {
                                                                    setVideoCatDrop(!videoCatDrop);
                                                                    // console.log("the id of the fashion blaqbla is  :", CatIdz)
                                                                }}
                                                            >

                                                                <i class='bx bx-dots-horizontal-rounded' style={{ fontSize: "34px", fontSize: "600" }}></i>
                                                            </button>


                                                        </div>
                                                    </td> */}




                                                </tr>

                                                {/* ---Country----- */}
                                                <tr>
                                                    <td>
                                                        <label className='d-flex justify-content-between align-items-center'>
                                                            <div>
                                                                Country
                                                            </div>
                                                            <i class="fa fa-info-circle"></i>
                                                        </label>
                                                    </td>

                                                    <td colSpan={2} className=' text-start ps-1'>
                                                        <button onClick={() => { setVideoCountry("IN") }} className={videoCountry == "IN" ? "activeButtonFilter btn" : "btn"}>
                                                            India
                                                        </button>

                                                    </td>

                                                    <td colSpan={1} className=' text-start ps-1'>
                                                        <button onClick={() => { setVideoCountry("IDN") }} className={videoCountry == "IDN" ? "activeButtonFilter btn" : "btn"}>
                                                            Indonesia
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setVideoCountry("JP") }} className={videoCountry == "JP" ? "activeButtonFilter btn" : "btn"}>
                                                            Japan
                                                        </button>
                                                    </td>

                                                    <td colSpan={1}>
                                                        <button onClick={() => { setVideoCountry("TW") }} className={videoCountry == "TW" ? "activeButtonFilter btn" : "btn"}>
                                                            Taiwan
                                                        </button>
                                                    </td>
                                                    <td colSpan={2}>
                                                        <button onClick={() => { setVideoCountry("US") }} className={videoCountry == "US" ? "activeButtonFilter btn" : "btn"}>
                                                            United States
                                                        </button>
                                                    </td>
                                                    <td className='text-start' colSpan={3}>

                                                        <button onClick={() => { setVideoCountry("KR") }} className={videoCountry == "KR" ? "activeButtonFilter btn" : "btn"}>
                                                            South Korea
                                                        </button>
                                                    </td>


                                                    <td className='bg- ps-2' colSpan={2} style={{ width: "800px" }}>
                                                        <div className='d-flex  justify-content-end '>

                                                            <button className={city ? 'youtube_filter_btn RoundBtnz px-3' : 'youtube_filter_btn RoundBtnz px-3'}
                                                                onClick={() => {
                                                                    setVideoCountryDrop(!videoCountryDrop)
                                                                }}>
                                                                {
                                                                    videoCountryDrop
                                                                        ?
                                                                        <i class="fa fa-xmark" aria-hidden="true"></i>
                                                                        :
                                                                        <i class='bx bx-dots-horizontal-rounded'></i>
                                                                }
                                                            </button>

                                                            {
                                                                videoCountryDrop
                                                                    ?
                                                                    <span className='bg-light' style={{
                                                                        "height": "0px", "width": "0px", "position": "relative", left: "-5rem", "zIndex": "10000"
                                                                    }}>
                                                                        <CountryDropz />
                                                                    </span>
                                                                    :
                                                                    null
                                                            }


                                                            {

                                                                videoCountry
                                                                    ?

                                                                    <button className='youtube_filter_btn RoundBtnz' onClick={() => {
                                                                        setVideoCountry("")
                                                                    }}>
                                                                        <i class="fa fa-xmark" aria-hidden="true"></i>
                                                                    </button>
                                                                    :
                                                                    null
                                                            }

                                                        </div>
                                                    </td>
                                                </tr>




                                                <tr className='bg-transparent'>

                                                    <td className='bg-' onClick={() => { setTabShow(false); document.getElementById("TableTop").scrollIntoView({ behavior: "smooth" }) }}>
                                                        <label className='d-flex justify-content-between align-items-center ' style={{ cursor: "pointer" }}>
                                                            <div>
                                                                Fold
                                                            </div>
                                                            <i class="fa fa-angle-up"></i>
                                                        </label>
                                                    </td>

                                                    {/* <td className='bg-o' colSpan={10}></td> */}


                                                    {/* <td colSpan={2} className='bg-' style={{ textAlign: 'start', backgroundColor: 'none', width: "800px",pointerEvents : "" }}>
                                                    
                                                    </td> */}








                                                </tr>


                                            </>
                                            :
                                            <>
                                                <tr className='bg-transparent'>
                                                    <td className='' onClick={() => { setTabShow(true) }}>
                                                        <label className='d-flex justify-content-between align-items-center ' style={{ cursor: "pointer" }}>
                                                            <div>
                                                                More
                                                            </div>
                                                            <i class="fa fa-angle-down"></i>
                                                        </label>
                                                    </td>

                                                    <td className='bg-transparent' colSpan={10}></td>


                                                    <td colSpan={2} className='' style={{ textAlign: 'start', backgroundColor: 'transparent', width: "800px" }}>
                                                        <div className='d-flex ms-2 align-items-center'>
                                                        </div>
                                                    </td>








                                                </tr>
                                            </>

                                    }




                                </table>

                            </div>


                    }
                    {/* Youtube Search videos filter */}


                    <hr />


                    {/* Choosen option section  */}
                    {/* <div className='d-flex'>
                        <div className='mx-3 cancel_filter'>
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </div>

                        <div>
                            <span className='filter_selected'>
                                View: 200k+
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div> */}



                    {/*  ======BLACK BUTTON FILTER SECTION  STARTS====== */}
                    {
                        youtubeActive == 'channel'
                            ?


                            <div className='mt-5 d-flex justify-content-between'>
                                <label className='labels ms-3' style={{ 'fontSize': '18px' }}>
                                    {totalUser} Profiles
                                </label>

                                <div className='plan_filter'>

                                    {/* DREABEESCORE  */}
                                    <div className='mx-2'>
                                        <div >
                                            <button className={dreabeeDrop ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => {
                                                setDreabeeDrop(!dreabeeDrop);
                                                setGenGen(false)
                                                setCityDrop(false)
                                                setFDropz(false);
                                            }}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <label style={{ "fontWeight": "700", "fontSize": "14px" }}>
                                                        ROI Score
                                                    </label>&nbsp;&nbsp;
                                                    {
                                                        dreabeeDrop
                                                            ?
                                                            <label className='bg-io d-flex align-items-center'>
                                                                <i className="fa fa-angle-up"></i>
                                                            </label>
                                                            :
                                                            <label className='d-flex align-items-center'>
                                                                <i className="fa fa-angle-down"></i>
                                                            </label>
                                                    }
                                                </div>
                                            </button>



                                            {
                                                dreabeeDrop
                                                    ?
                                                    <div className='Score_drop Hovely p-4 mt-1' style={{ right: "200px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                                                        <label>
                                                            <b> SELECT ROI SCORE</b>
                                                        </label>



                                                        <section className='my-4'>
                                                            <InputRange
                                                                maxValue={10}
                                                                minValue={0}
                                                                value={inputs?.DbScore}
                                                                onChange={(value) =>
                                                                    setInputs((prev) => ({ ...prev, DbScore: value }))
                                                                }
                                                            />
                                                        </section>



                                                        <section className='container '>
                                                            {/* <section className='row bg-info d-flex '> */}

                                                            <div className='row d-flex align-items-center justify-content-evenly my-3 mb-3 mt-4'>

                                                                <div className='py-1 px-5 my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                                                    <section className='' style={{ "fontSize": "10px", color: "" }}>Min. Score</section>
                                                                    <input type='text' value={inputs.DbScore.min} onChange={() => { setMinDrebScore(inputs.DbScore.min) }} className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                                                </div>




                                                                <div className='py-1 px-5  my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                                                    <section className='b' style={{ "fontSize": "10px", color: "" }}>Max. Score</section>
                                                                    <input type='text' value={inputs.DbScore.max} onChange={(e) => { setMaxDrebScore(e.target.value) }} className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                                                </div>
                                                            </div>

                                                            {/* <button onClick={Go()}>go</button> */}

                                                            {/* </section> */}
                                                        </section>



                                                        <div className='d- flex-column city_search_section px-3 py-3  ' style={{ backgroundColor: "rgba(64, 63, 63, 0.226)", "borderRadius": "10px" }}>


                                                            <p style={{ "fontSize": "15px" }} >ROI Score helps you to filter influencers based on how engaging an influencer’s content is  <span className='text-primary'><u> Read more</u> . </span></p>


                                                            <section div className='row my-2'>
                                                                <div style={{ "fontSize": "15px", color: "green", fontWeight: 600 }} className='col-lg-4 text-center' >8-10</div>
                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-8' >Premium Influencers and Celebs</div>
                                                            </section>
                                                            <section div className='row my-2'>
                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-4 text-center text-' >5-8</div>
                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-8' >Mid Tier Influencers</div>
                                                            </section>
                                                            <section div className='row my-2'>
                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-4 text-center text-danger ' > &lt; 5 </div>
                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-8' >Micro and Nano Influencers</div>
                                                            </section>





                                                            <div className=''>



                                                            </div>
                                                        </div>


                                                        <div className='loaction_footer mt-3 pt-3' style={{ boxShadow: " rgb(0 0 0 / 50%) 0px -6px 6px -6px " }}>
                                                            <button className='btn btnz me-2'
                                                                onClick={() => {
                                                                    ClearDb();
                                                                    setMinDrebScore((0 / 10));
                                                                    setMaxDrebScore((0 / 10));
                                                                    setDreabeeDrop(false);
                                                                    ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore)
                                                                }}>
                                                                Clear Filters
                                                            </button>

                                                            <button className='btn btnz ms-2' onClick={() => {
                                                                setMinDrebScore((inputs.DbScore.min) / 10);
                                                                setMaxDrebScore((inputs.DbScore.max / 10));

                                                                setDreabeeDrop(false);
                                                                console.log("the max score : " + maxDrebScore)
                                                                console.log("the min score : " + minDrebScore)

                                                                ChannelDetailz(gender, city, minFollowers, maxFollowers, (inputs.DbScore.min) / 10, (inputs.DbScore.max) / 10)
                                                                // ChannelDetailz();
                                                                // console.log("the min score ininin : " + inputs.DbScore.min)
                                                                // console.log("the max score ininin : ", inputs.DbScore.max)

                                                            }}>
                                                                Apply
                                                            </button>
                                                        </div>
                                                    </div>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>

                                    {/* LOCATION  */}
                                    <div className='mx-2'>
                                        {/* <LocationDrop /> */}
                                        <div>
                                            <button className={openCityDrop ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => {
                                                setCityDrop(!openCityDrop)
                                                setDreabeeDrop(false);
                                                setGenGen(false);
                                                setFDropz(false);
                                            }}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <label style={{ "fontWeight": "700", "fontSize": "14px" }}>
                                                        {selectedCity}
                                                    </label>
                                                    &nbsp;
                                                    &nbsp;
                                                    {
                                                        openCityDrop
                                                            ?
                                                            <label className='d-flex align-items-center'>
                                                                <i className="fa fa-angle-up"></i>
                                                            </label>
                                                            :
                                                            <label className='d-flex align-items-center'>
                                                                <i className="fa fa-angle-down"></i>
                                                            </label>

                                                    }
                                                </div>
                                            </button>

                                            {
                                                openCityDrop
                                                    ?
                                                    <div className='location_drop p-4 mt-1' style={{ right: "170px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                                                        <label>
                                                            <b> Select Country</b>
                                                        </label>

                                                        <div className='d-flex justify-content-around mt-3'>
                                                            <div className='country_radio'>
                                                                <input type='radio' />
                                                                <label>
                                                                    India
                                                                </label>
                                                            </div>

                                                            <div className='country_radio'>
                                                                <input type='radio' />
                                                                <label>
                                                                    Indonesia
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className='d-flex flex-column city_search_section'>
                                                            <label>
                                                                State/ City
                                                            </label>

                                                            <div className='city_search'>
                                                                <input type="text" onchange={(e) => { setCity(e.target.value) }} />
                                                                <i className='fa fa-search' />
                                                            </div>

                                                            <div className='mt-4'>
                                                                <button className='btn platform_btn' onClick={() => { setCity("delhi") }}>
                                                                    Delhi
                                                                </button>
                                                                <button className='btn platform_btn' onClick={() => { setCity("mumbai") }}>
                                                                    Mumbai
                                                                </button>
                                                            </div>
                                                        </div>

                                                        <div className='loaction_footer mt-4'>
                                                            <button className='btn'
                                                                onClick={() => {
                                                                    ChannelDetailz(gender, "", minFollowers, maxFollowers, minDrebScore, maxDrebScore)
                                                                }}>
                                                                Clear
                                                            </button>

                                                            <button className='btn'
                                                                onClick={() => {
                                                                    setCityDrop(false)
                                                                    ChannelDetailz(gender, city, minFollowers, maxFollowers, minDrebScore, maxDrebScore)


                                                                }}>
                                                                Apply Filters
                                                            </button>
                                                        </div>

                                                    </div>
                                                    :
                                                    null
                                            }
                                        </div>


                                    </div>

                                    {/* GENDER */}
                                    <div className='mx-2'>
                                        <button className={genGen ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => {
                                            setGenGen(!genGen);
                                            setDreabeeDrop(false)
                                            setCityDrop(false)
                                            setFDropz(false);
                                        }}>
                                            <div style={{ display: "flex", alignItems: "center", "justifyContent": "center", "fontWeight": "700", "fontSize": "14px" }}>

                                                <div style={{ display: "flex", alignItems: "center" }}>


                                                    <label className=' d-flex align-items-center'>
                                                        Gender &nbsp;

                                                        {
                                                            genGen
                                                                ?
                                                                <i className="fa fa-angle-up" style={{ "fontWeight": "700" }}></i>
                                                                :
                                                                <i className="fa fa-angle-down" style={{ "fontWeight": "700" }}></i>

                                                        }

                                                    </label>
                                                </div>

                                            </div>
                                        </button>

                                        {
                                            genGen
                                                ?
                                                <section style={{ "height": "0px", width: "0px" }}>
                                                    <ul className='social_drop_list mt-1 bg-light' style={{ position: "relative", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", width: "200px" }}>


                                                        <li>
                                                            <button className='social_drop btn hoverpe' onClick={() => {

                                                                setGender('m');
                                                                setDrop(false);
                                                                setGenGen(false);
                                                                ChannelDetailz("m", city, minFollowers, maxFollowers, minDrebScore, maxDrebScore)
                                                                // InstaAccount((inputs.DbScore.min) / 10, (inputs.DbScore.max) / 10);
                                                            }}>
                                                                {/* <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} /> */}
                                                                <i class='bx bx-male-sign' style={{ "fontSize": "20px" }} ></i> &nbsp; &nbsp;
                                                                Male
                                                            </button>
                                                        </li>

                                                        <li style={{ border: "" }}>
                                                            <button className='social_drop btn hoverpe' onClick={() => {

                                                                setGender('f');
                                                                setDrop(false);
                                                                setGenGen(false);
                                                                ChannelDetailz("f", city, minFollowers, maxFollowers, minDrebScore, maxDrebScore)


                                                            }}>
                                                                {/* <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} /> */}
                                                                <i class='bx bx-female-sign' style={{ "fontSize": "20px" }} ></i> &nbsp;
                                                                Female
                                                            </button>
                                                        </li>
                                                        <li style={{ border: "none" }}>

                                                            <button className='social_drop text-center btn hoverpe ps-5' onClick={() => {
                                                                ChannelDetailz("", city, minFollowers, maxFollowers, minDrebScore, maxDrebScore)
                                                                setGender('');
                                                                setGenGen(false);
                                                                setDrop(false);
                                                            }

                                                            }>
                                                                {/* <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} /> */}
                                                                <i class='bx bx-male-sign' style={{ "fontSize": "20px" }} ></i>
                                                                <i class='bx bx-female-sign' style={{ "fontSize": "20px" }} ></i>

                                                                {/* All */}
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </section>
                                                :

                                                null
                                        }


                                    </div>

                                    {/* Followers  */}
                                    <div className='ms-2'>
                                        <div >
                                            <button className={fDropz ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => {
                                                setFDropz(!fDropz);
                                                setCityDrop(false);
                                                setDreabeeDrop(false);
                                                setGenGen(false);
                                            }}>
                                                <div style={{ display: "flex", alignItems: "center" }}>
                                                    <label style={{ "fontWeight": "700", "fontSize": "14px" }}>
                                                        Followers
                                                    </label>&nbsp;&nbsp;
                                                    {
                                                        fDropz
                                                            ?
                                                            <label className='bg-io d-flex align-items-center'>
                                                                <i className="fa fa-angle-up"></i>
                                                            </label>
                                                            :
                                                            <label className='d-flex align-items-center'>
                                                                <i className="fa fa-angle-down"></i>
                                                            </label>
                                                    }
                                                </div>
                                            </button>



                                            {
                                                fDropz
                                                    ?
                                                    <div className='Score_drop Hovely p-4 mt-1' style={{ right: "30px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                                                        <label>
                                                            <b> SELECT FOLLOWERS</b>
                                                        </label>

                                                        <section className='my-4'>
                                                            <InputRange
                                                                maxValue={1000000}
                                                                minValue={0}
                                                                value={inputsFollow?.Followerz}
                                                                onChange={(value) =>
                                                                    setInputsFollow((prev) => ({ ...prev, Followerz: value }))
                                                                }
                                                            />
                                                        </section>



                                                        <section className='container '>
                                                            {/* <section className='row bg-info d-flex '> */}

                                                            <div className='row d-flex align-items-center justify-content-evenly my-3 mb-3 mt-4'>

                                                                <div className='py-1 px-5 my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                                                    <section className='' style={{ "fontSize": "10px", color: "" }}>Min. Score</section>
                                                                    <input type='text'
                                                                        // value={inputs.DbScore.min}
                                                                        value={(numeral(inputsFollow.Followerz.min).format('0.0a'))}
                                                                        onchange={() => { setMinimumF(inputsFollow.Followerz.min) }}
                                                                        className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                                                </div>




                                                                <div className='py-1 px-5  my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                                                    <section className='b' style={{ "fontSize": "10px", color: "" }}>Max. Score</section>
                                                                    <input type='text'
                                                                        // value={inputs.DbScore.max} 
                                                                        value={(numeral(inputsFollow.Followerz.max).format('0.0a'))}
                                                                        onchange={() => { setMaximumF(inputsFollow.Followerz.max) }}
                                                                        className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                                                </div>
                                                            </div>



                                                            {/* </section> */}
                                                        </section>



                                                        <div className='d- flex-column city_search_section px-3 py-3  ' style={{ backgroundColor: "", "borderRadius": "10px" }}>

                                                            <label>
                                                                <b> SELECT BY INFLUENCER SIZE</b>
                                                            </label>
                                                            {/* <p style={{ "fontSize": "15px" }} >Qoruz Score helps you to filter influencers based on how engaging an influencer’s content is  <span className='text-primary'><u> Read more</u> . </span></p> */}


                                                            <section div className='row my-1 py-2  hoverpe'>
                                                                <div style={{ "fontSize": "15px", color: "", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                                    <input type='radio' name='follower' onClick={() => { setMinimumF("2000"); setMaximumF("10000"); }} /> &nbsp;   Nano
                                                                </div>

                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >2K-10K followers</div>
                                                            </section>
                                                            {/* ___________  */}
                                                            <section div className='row my-1 py-2  hoverpe'>
                                                                <div style={{ "fontSize": "15px", color: "", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                                    <input type='radio' name='follower' onClick={() => { setMinimumF("10000"); setMaximumF("25000"); }} /> &nbsp;   Micro
                                                                </div>

                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >10K-25K followers</div>
                                                            </section>
                                                            {/* ___________  */}
                                                            <section div className='row my-1 py-2  hoverpe'>
                                                                <div style={{ "fontSize": "15px", color: "", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                                    <input type='radio' name='follower' onClick={() => { setMinimumF("25000"); setMaximumF("100000"); }} /> &nbsp;   Mid Tier
                                                                </div>

                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >25K-100K followers</div>
                                                            </section>
                                                            {/* ___________  */}
                                                            <section div className='row my-1 py-2  hoverpe'>
                                                                <div style={{ "fontSize": "15px", color: "", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                                    <input type='radio' name='follower' onClick={() => { setMinimumF("100000"); setMaximumF("250000"); }} /> &nbsp;   Macro
                                                                </div>

                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >100K-250K followers</div>
                                                            </section>
                                                            {/* ___________  */}
                                                            <section div className='row my-1 py-2  hoverpe'>
                                                                <div style={{ "fontSize": "15px", color: "", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                                    <input type='radio' name='follower' onClick={() => { setMinimumF("250000"); setMaximumF("1000000"); }} /> &nbsp;   Mega
                                                                </div>

                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >250K-1M followers</div>
                                                            </section>
                                                            {/* ___________  */}
                                                            <section div className='row my-1 py-2  hoverpe'>
                                                                <div style={{ "fontSize": "15px", color: "", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                                    <input type='radio' name='follower' onClick={() => { setMinimumF("1000000"); setMaximumF(""); }} /> &nbsp;   A-Listers
                                                                </div>
                                                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >1M+ followerss</div>
                                                            </section>
                                                            {/* ___________  */}
                                                            <div className=''>
                                                            </div>
                                                        </div>


                                                        <div className='loaction_footer mt-3 pt-3' style={{ boxShadow: " rgb(0 0 0 / 50%) 0px -6px 6px -6px " }}>
                                                            <button className='btn btnz me-2' onClick={() => {

                                                                setFDropz(false);
                                                                setMinimumF("")
                                                                setMaximumF("")
                                                                ChannelDetailz(gender, city, "", "", minDrebScore, maxDrebScore)


                                                            }}>
                                                                Clear Filters
                                                            </button>

                                                            <button className='btn btnz ms-2'
                                                                onClick={() => {
                                                                    setMinimumF(inputsFollow.Followerz.min)
                                                                    setMaximumF(inputsFollow.Followerz.max)

                                                                    console.log("the folower count min youtue ", minimumF)
                                                                    console.log("the folower count max youtue ", maximumF)
                                                                    ChannelDetailz(gender, city, minimumF, maximumF, minDrebScore, maxDrebScore)
                                                                    // InstaAccount(minDrebScore, maxDrebScore, (inputsFollow.Followerz.min), (inputsFollow.Followerz.max));
                                                                    setFDropz(false);


                                                                }}
                                                            >
                                                                Apply
                                                            </button>
                                                        </div>

                                                    </div>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                            :
                            null
                    }
                    {/*  ======BLACK BUTTON FILTER SECTION ENDS====== */}

                    {/* ______________________________________________________________________________YOUTUBE VIDEO / CHANNEL SECTION ______________________________________________________________________________ */}
                    {
                        youtubeActive == 'channel'
                            ?
                            <>
                                {/* channel  table section */}
                                <div id='Top' className='table-responsive' style={{ overflowX: "hidden" }}>
                                    <table className='plan_table ' style={{ marginBottom: "10rem" }}>


                                        <thead>
                                            <tr>
                                                <th className=' '>
                                                    <input type="checkbox" disabled className='checkbox_section mx-2' />
                                                </th>

                                                <th >
                                                    Youtube Profile
                                                </th>

                                                {/* <th>
                                                    Score <i class="fa fa-info-circle" aria-hidden="true"></i>
                                                </th> */}

                                                <th className='bg- text-center'>
                                                    ROI Score
                                                </th>
                                                <th className='bg- text-center'>
                                                    Followers
                                                </th>

                                                <th className='bg- text-center'>
                                                    Avg Likes
                                                </th>

                                                <th className='bg- text-center'>
                                                    Avg Views
                                                </th>

                                                <th className='bg- text-center'>
                                                    ER <i class="fa fa-info-circle" aria-hidden="true"></i>
                                                </th>

                                                <th className='bg- text-center' >
                                                    Categories
                                                </th>
                                            </tr>


                                        </thead>


                                        {

                                            chan != null
                                                ?
                                                chan.map((data) => {

                                                    return (
                                                        <>
                                                            <tbody >
                                                                <tr className='' >
                                                                    <td className=' ' colSpan={0}>
                                                                        <input type="checkbox" className='checkbox_section mx-2' />
                                                                    </td>
                                                                    <td className=''>
                                                                        <div className='d-flex ' style={{ "width": "200px" }} >
                                                                            {/* <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={40} height={40} /> */}

                                                                            {
                                                                                data.image != ""
                                                                                    ?
                                                                                    <img src={data.image} className='btnz ' alt={Imagg} width={55} height={55} style={{ border: "2px solid #C83B93", "borderRadius": "50%" }} />
                                                                                    :
                                                                                    <img src={require('../../Imagez/Common/User.jpg')} className='btnz ' width={55} height={55} style={{ border: "2px solid #C83B93", "borderRadius": "50%" }} />
                                                                            }
                                                                            <div style={{ textAlign: 'initial', marginLeft: '5px' }}>
                                                                                <div className=' d-flex  align-items-center'>
                                                                                    <label className='navHovTextNoBg ' style={{
                                                                                        wordWrap: "breakWord", "zIndex": "", overflow: "hidden",
                                                                                        textOverflow: "ellipsis", width: "130px",
                                                                                    }} onClick={() => {
                                                                                        ProfileNow((data.url).split("@")[1]);

                                                                                        setProfVal((data.url).split("@")[1])

                                                                                    }}>
                                                                                        {data.name}
                                                                                    </label>
                                                                                    <img className='' src={require('../../Imagez/Dashboard/All/mdi_approve.png')} />
                                                                                </div>

                                                                                <label className='social_handle'>
                                                                                    {/* gururandhawa */}
                                                                                    {(data.url).split(".com/")[1]}

                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </td>


                                                                    <td className=''>
                                                                        {((data.quality_score) * 10).toFixed(0)}
                                                                    </td>


                                                                    <td className='text-uppercase'>


                                                                        {(numeral(data.user_count).format('0.0a'))}

                                                                    </td>

                                                                    <td className='text-uppercase'>
                                                                        {/* 424.1 K */}
                                                                        {(numeral(data.average_likes).format('0.0a'))}
                                                                        {/* {data.average_likes} */}
                                                                    </td>

                                                                    <td className='text-uppercase'>
                                                                        {/* 1.8 M */}
                                                                        {(numeral(data.average_video_views).format('0.0a'))}

                                                                    </td>

                                                                    <td className=''>
                                                                        {((data.average_ER) * 100).toFixed(2)}%
                                                                    </td>


                                                                    <td className=' py-2' colSpan={3}
                                                                        onMouseEnter={ItsOnn} onMouseLeave={ItsOff}
                                                                        style={{ boxShadow: "0 0 0 0 " }}
                                                                    >


                                                                        {/* (catShow == false)

                                                                            ? */}
                                                                        {
                                                                            <div className='categories_row py-2  bg- w-100 ' >
                                                                                <div className='my- bg- w-100'>
                                                                                    <section className='row d-flex justify-content-center ps-6 bg-'>

                                                                                        <span className='plan_categories my-1 mx-1 col-lg-5 rounded' style={{
                                                                                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)", " border ": "1px solid grey",
                                                                                            // whiteSpace: "nowrap",
                                                                                            overflow: "hidden",
                                                                                            width: "160px", "textTransform": "capitalize",
                                                                                            textOverflow: "ellipsis"
                                                                                        }}> # {ting}
                                                                                        </span>

                                                                                        <span className='plan_categories my-1 mx-1 col-lg-5 rounded' style={{
                                                                                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)", " border ": "1px solid grey",
                                                                                            // whiteSpace: "nowrap", 
                                                                                            overflow: "hidden",
                                                                                            width: "160px", "textTransform": "capitalize",
                                                                                            textOverflow: "ellipsis"
                                                                                        }}>#




                                                                                            {
                                                                                                data.suggested_tags
                                                                                                    ?
                                                                                                    data.suggested_tags[1]
                                                                                                    :
                                                                                                    <span> Tag1 </span>


                                                                                            }
                                                                                        </span>



                                                                                    </section>

                                                                                    <section className='row d-flex justify-content-start ps-5 bg-'>
                                                                                        <span className='plan_categories my-1 col-lg-3 rounded ms-3' style={{
                                                                                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)", " border ": "1px solid grey",
                                                                                            // whiteSpace: "nowrap",
                                                                                            overflow: "hidden",
                                                                                            width: "160px",
                                                                                            textOverflow: "ellipsis"
                                                                                        }}>
                                                                                            More
                                                                                            {/* {(data.suggested_tags).length} */}
                                                                                            +
                                                                                        </span>

                                                                                    </section>


                                                                                </div>

                                                                            </div>


                                                                        }

                                                                        {/* <div className='d-flex justify-content-between categories_btn py-2' >
                                                                                <button className='invite_btn btn btnz mx-2 my-4'>
                                                                                    <img src={require('../../Imagez/Dashboard/All/Invite.png')} className='mx-2' />
                                                                                    Add to list
                                                                                </button>

                                                                                <button className='other_btn btn btnz mx-2 my-4'>
                                                                                    <img src={require('../../Imagez/Dashboard/All/₹.png')} />
                                                                                </button>

                                                                                <button className='other_btn btn btnz mx-2 my-4'>
                                                                                    <img src={require('../../Imagez/Dashboard/All/graph.png')} />
                                                                                </button>
                                                                            </div> */}
                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </>

                                                    );
                                                })



                                                :
                                                <>
                                                    <tbody className='mt-2 bg-transparent'  >
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>  <td></td>  <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>  <td></td>  <td></td>  <td></td>  <td></td>  <td></td>

                                                        </tr>
                                                        <tr className='my-2 mt-5 bg-'  >
                                                            <td></td>     <td></td>     <td></td>
                                                            <td className='py-5  d-flex justify-content-center' style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </td>     <td></td>     <td></td>     <td></td>     <td></td>     <td></td>

                                                        </tr>
                                                    </tbody>



                                                    <tbody style={{ "border": "none" }}>
                                                        <tr className='bg-e ' >

                                                            {/* {
                                                                        allChannel.length != 0
                                                                            ? */}
                                                            <th className='' colSpan={10}>
                                                                <div className='bg- w-100'>
                                                                    <section className='d-flex align-items-center py-5 justify-content-center'>

                                                                        <button className='mx-5 bg-transparent text-dark nobg  p-3' onClick={() => { DecNo(); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} style={{ "borderRadius": "50%", "border": " none", }}> <i class='bx bx-chevron-left' style={{ "fontSize": "32px " }} ></i></button>
                                                                        {pageNow} of {pageAll}
                                                                        <button className='mx-5 bg-transparent text-dark ' onClick={() => { IncNo(); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} style={{ "borderRadius": "50%", "border": " none", }}> <i class='bx bx-chevron-right' style={{ "fontSize": "32px " }} ></i></button>
                                                                    </section>

                                                                </div>

                                                            </th>

                                                            {/* <>
                                                                                <th className='' colSpan={12}>
                                                                                    <div className='bg- w-100'>
                                                                                        <section className='d-flex align-items-center ps-5 py-5 justify-content-center'>
                                                                                            <section className='py-5  d-flex justify-content-end' colSpan={10} style={{ "boxShadow": "none" }}>
                                                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                                                            </section>
                                                                                        </section>

                                                                                    </div>
                                                                                </th>
                                                                            </> */}
                                                            {/* } */}


                                                        </tr>
                                                    </tbody>
                                                </>
                                        }



                                        {
                                            chan != null && showPager
                                                ?
                                                <tbody style={{ "border": "none" }}>
                                                    <tr className=' ' >
                                                        <th className='' colSpan={10}>
                                                            <div className='bg- w-100'>
                                                                <section className='d-flex align-items-center py-5 justify-content-center'>
                                                                    <button className='mx-5 bg-transparent text-dark nobg  p-3' onClick={() => { DecNo(); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} style={{ "borderRadius": "50%", "border": " none", }}> <i class='bx bx-chevron-left' style={{ "fontSize": "32px " }} ></i></button>
                                                                    {pageNow} of {pageAll}
                                                                    <button className='mx-5 bg-transparent text-dark ' onClick={() => { IncNo(); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} style={{ "borderRadius": "50%", "border": " none", }}> <i class='bx bx-chevron-right' style={{ "fontSize": "32px " }} ></i></button>
                                                                </section>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </tbody>

                                                :

                                                <tbody className='mt-2 '  >
                                                    <tr className='bg-e ' >


                                                        <th className='' colSpan={10}>
                                                            <div className='d-flex justify-content-center py-5 w-100 bg-in'>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </div>
                                                        </th>


                                                    </tr>
                                                </tbody>
                                        }
                                    </table>
                                </div>

                            </>

                            :

                            <>

                                {/* video  table section */}
                                {
                                    allvideo.length != 0
                                        ?
                                        allvideo.map((data) => {
                                            {/* console.log("the loogogogo : ", data.channel_details[0]) */ }
                                            {/* console.log("the loogogogo : ", data.channel_details[0].snippet.thumbnails.high) */ }

                                            return (
                                                <div className='bg-light d-flex justify-content-between w-100 my-3 p-4   ' style={{ borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}>
                                                    <div className='d-flex '>
                                                        <div className='bg d-flex align-items-center'>
                                                            {
                                                                data.video_details[0].snippet.thumbnails.high === undefined
                                                                    ?
                                                                    <img className='border rounded' src={require('../../Imagez/Dashboard/All/blank.png')} width={300} height={150} />
                                                                    :
                                                                    <img className='' src={data.video_details[0].snippet.thumbnails.high.url} width={300} height={150} style={{ "objectFit": "scaleDown", borderRadius: "10px", border: "5px solid #C83B93" }} alt='thumb' />
                                                            }
                                                            {/* <img className='border rounded' src={require('../../Imagez/Dashboard/All/blank.png')} width={300} height={150} /> */}
                                                        </div>
                                                        {/* 2----------- */}
                                                        <div className='mx-3 d-flex flex-column'>
                                                            <div>
                                                                <label className='font-weight-bold my-1' style={{ fontSize: "16px" }}>
                                                                    {/* {
                                                                        data.video.details.length!=0
                                                                            ?
                                                                            data.video_details[0].snippet.title
                                                                            :
                                                                            null
                                                                    } */}
                                                                    {/* Always Take Calculated Risk | Sandeep Maheshwari | Hindi */}
                                                                    {data.video_details[0].snippet.title}
                                                                </label>
                                                            </div>
                                                            <div>
                                                                {
                                                                    data.video_details[0].snippet.tags
                                                                        ?
                                                                        <>

                                                                            <label className='font-weight-bold  mx-1 py-1 px-2 text-center rounded' style={{ fontSize: "16px", minWidth: "60px", backgroundColor: "whitesmoke", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)", textTransform: "capitalize" }}>
                                                                                # {data.video_details[0].snippet.tags[0]}
                                                                            </label>

                                                                            <label className='font-weight-bold  mx-1 py-1 px-2 text-center rounded' style={{ fontSize: "16px", minWidth: "60px", backgroundColor: "whitesmoke", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)", textTransform: "capitalize" }}>
                                                                                # {data.video_details[0].snippet.tags[1]}
                                                                            </label>

                                                                            <label className='font-weight-bold  mx-1 py-1 px-2 text-center rounded' style={{ fontSize: "16px", minWidth: "60px", backgroundColor: "whitesmoke", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)", textTransform: "capitalize" }}>
                                                                                # {data.video_details[0].snippet.tags[2]}
                                                                            </label>
                                                                        </>
                                                                        :
                                                                        <>
                                                                            <label className='font-weight-bold  mx-1 py-1 px-2 text-center rounded' style={{ fontSize: "16px", minWidth: "60px", backgroundColor: "whitesmoke", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)", textTransform: "capitalize" }}>
                                                                                #{ting}
                                                                            </label>
                                                                        </>
                                                                }
                                                            </div>

                                                            <div className='mt-3'>
                                                                <label className='ps-1 mt-3' style={{ fontSize: "14px" }}>
                                                                    {/* 2023.06.03 */}
                                                                    Published On : {dayjs(data.video_details[0].snippet.publishedAt).format("DD-MM-YYYY")}
                                                                </label>
                                                            </div>

                                                            <div className='mt-1'>
                                                                <span className=' text-secondary ms-1 me-2 '>
                                                                    <i class="fa fa-play-circle" aria-hidden="true"></i> &nbsp;
                                                                    {(numeral(data.video_details[0].statistics.viewCount).format('0.0a'))}
                                                                    {/* 2M */}
                                                                </span>

                                                                <span className=' text-secondary mx-2'>
                                                                    <i class="fa fa-thumbs-up"></i>&nbsp;
                                                                    {(numeral(data.video_details[0].statistics.likeCount).format('0.0a'))}
                                                                    {/* 1.2 M */}
                                                                </span>

                                                                <span className=' text-secondary mx-2'>
                                                                    <i class="fa fa-comment" aria-hidden="true"></i>&nbsp;
                                                                    {(numeral(data.video_details[0].statistics.commentCount).format('0.0a'))}
                                                                    {/* 7.9 K */}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    {/* Right section  */}
                                                    <div className='text-center me-4'>
                                                        {/* 6 */}
                                                        <div>
                                                            {
                                                                data.channel_details[0].snippet.thumbnails.high != undefined
                                                                    ?

                                                                    <img src={data.channel_details[0].snippet.thumbnails.high.url} onClick={() => {
                                                                        // window.open(url, '_blank')
                                                                    }} className='btnz' style={{ "borderRadius": "50%" }} width={100} />
                                                                    :
                                                                    <img src={require('../../Imagez/Dashboard/All/camp_user.png')} width={100} className='p-1 btnz' style={{ borderRadius: "50%", cursor: "grab", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)" }} />
                                                            }
                                                            {/* <img src={data.channel_details[0].snippet.thumbnails.high.url} className='btnz' style={{ "borderRadius": "50%" }} width={100} /> */}
                                                            {/* <img src={require('../../Imagez/Dashboard/All/camp_user.png')} width={100} className='p-1 btnz' style={{ borderRadius: "50%", cursor: "grab", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)" }} /> */}


                                                        </div>
                                                        {/* 4 */}
                                                        <div className='mt-1'>
                                                            <label style={{ fontSize: "16px", textOverflow: "ellipsis" }}>
                                                                {data.channel_details[0].snippet.title}
                                                                {/* Sandeep Maheshwari */}
                                                            </label>
                                                        </div>
                                                        {/* 5 */}
                                                        <label className='text-secondary' style={{ fontSize: "14px" }}>
                                                            <i class="fa fa-user mx-2" aria-hidden="true"></i>
                                                            {/* 27,900,100 */}
                                                            {data.channel_details[0].statistics.subscriberCount}
                                                        </label>
                                                    </div>
                                                </div>
                                            )

                                        })
                                        :
                                        <div className=' d-flex justify-content-center align-items-center w-100  my-5  p-4  Kardz ' style={{ height: "400px", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}>
                                            <FadeLoader color={"#C83B93"} size={10} />
                                        </div>
                                }

                            </>

                    }


                </div>

                <Modal
                    show={planModal}
                    onHide={() => { setplanModal(false) }}
                >
                    <div className='plan_modal'>

                        <div className='create_plan_head'>
                            <label>
                                Create Plan
                            </label>

                            <hr className='tips_line' />
                        </div>
                        <div className='d-flex flex-column mt-3'>
                            <label className='camp_label'>Name of the Plan</label>
                            <input type='text' className='camp_input' placeholder='Enter Plan Name' />
                        </div>

                        <div className='d-flex flex-column mt-3'>
                            <label className='camp_label'>Brand</label>
                            <input type='text' className='camp_input' placeholder='Enter Plan Name' />
                        </div>

                        <div className='d-flex flex-column mt-3'>
                            <label className='camp_label'>I want to add influencers by</label>
                            <div className='d-flex flex-column'>
                                <div>
                                    <input type='radio' className='mx-2' />
                                    <label>
                                        Searching Influencers From Dreabee
                                    </label>
                                </div>

                                <div>
                                    <input type='radio' className='mx-2' />
                                    <label>
                                        Adding Influencers Manually
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='create_plan_btn mt-4'>
                            <button className='btn'>
                                Create Plan
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>


            {/* SlideSection */}
            <div className={`slide-container ${blow ? 'slide-in' : 'slide-out'}`
            }>
                <div className="slide-content" >
                    {/* Your content goes here */}
                    <div className='row' >
                        <div className='col-lg-12 pt-3 m-0 add_plan_setion'>
                            <label>
                                Kindly select a plan to<br /> add influencers
                            </label>

                            <div className='add_plans_inner'>
                                <button className='btn plan_add_btn' onClick={() => { setplanModal(true) }}>
                                    <img src={require('../../Imagez/Dashboard/All/Invite.png')} />
                                    New Plan
                                </button>

                                <div className='added_plan mt-5'>
                                    <label>
                                        New Plan 1
                                    </label>

                                    <div className='list_footer'>
                                        <label>
                                            List 1
                                        </label>

                                        <label>
                                            4th Aug, 2023
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='View_plan_section '>
                                <button className='View_plan_btn btn me-3'>
                                    View Plan
                                </button>
                                {

                                    blow
                                        ?
                                        <button onClick={toggleSlide} className='ps-2 py-2 pb-3'
                                            style={{ "border": "none", background: "white", "position": "relative", "top": "-18.2rem", "left": "-13.5rem", "opacity": "0.6", "borderRadius": " 20px 0 0 20px" }}>
                                            <i class='bx bxs-chevrons-right bx-fade-right' style={{ "fontSize": "3rem" }} ></i>
                                            <span style={{ "position": "relative", "left": "-45px", "fontWeight": "700", "top": "12px", "fontSize": "13px" }}> Close Plans </span></button>
                                        :
                                        <button onClick={toggleSlide} className='ps-2 py-2 pb-3'
                                            style={{ "border": "none", background: "white", "position": "relative", "top": "-38.8rem", "left": "-13.5rem", "opacity": "0.6", "borderRadius": " 20px 0 0 20px" }}>
                                            <i class='bx bxs-chevrons-left bx-fade-right' style={{ "fontSize": "3rem" }} ></i>
                                            <span style={{ "position": "relative", "left": "-45px", "fontWeight": "700", "top": "12px", "fontSize": "13px" }}> View Plans </span></button>

                                }
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
