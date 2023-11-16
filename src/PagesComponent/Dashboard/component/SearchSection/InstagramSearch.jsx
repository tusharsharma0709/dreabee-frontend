import React from 'react'
import { Modal } from 'react-bootstrap-v5';
import '../../../../Styles/Slyider.css';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Social_dropdown from '../social-dropdown';
import LocationDrop from '../location-dropdown';
import { useState } from 'react';
import DbeeScore from './DbeeScore';
import { data } from 'jquery';
import numeral from 'numeral';
import Followers from './Followers';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import { FadeLoader } from 'react-spinners';
import { baseUrl2 } from '../../../../Routez/Routey';

const InstagramSearch = () => {


    const location = useLocation();

    const [youtubeActive, setYoutubeactive] = useState('channel');
    const [planModal, setplanModal] = useState(false);
    const [blow, setBlow] = useState(false);

    const [allChannel, setAllChannel] = useState([]);
    const [allvideo, setAllVideo] = useState();

    const [ting, setTing] = useState("");



    const [catShow, setCatShow] = useState(false)


    const [gen, setGen] = useState();
    const [city, setCity] = useState("")
    const [minDrebScore, setMinDrebScore] = useState("");
    const [maxDrebScore, setMaxDrebScore] = useState("");
    const [maxFollowers, setMaxFollowers] = useState("")
    const [minFollowers, setMinFollowers] = useState("")
    const [profileCount, setProfileCount] = useState("");




    useEffect(() => {
        console.log("INSTAGRAM TAG ", location.state.tag);
        // setTing(location.state.tag)

        setTimeout(() => {
            InstaAccount();
        }, 2000);
    }, [])



    const toggleSlide = () => {
        setBlow(!blow);
    };

    let tagg;
    if (ting != "") {
        tagg = ting
    }
    else {
        tagg = location.state.tag
    }


    const InstaAccount = (min, max, minf, maxf, gend, sity, pg) => {
        // console.log("DETAILS TING :", ting)
        console.log("DETAILSdsssdfdhsh jkjlidnnells cdikm,yhts fkosl,h TING :", sity)
        axios.post(`${baseUrl2}/instagram/details`, {
            page: pg,
            q: tagg,

            minQualityScore: min,
            maxQualityScore: max,

            locations: sity,
            genders: gend,

            minUsersCount: minf,
            maxUsersCount: maxf,

        }).then((res) => {
            console.log("All instagram channels : ", res.data);
            setAllChannel(res.data.data);
            setProfileCount(res.data.total_result)
            // setPageAll(Math.round((res.data.total_pages) / 20))
            setPageAll(res.data.total_pages)
        }).catch((error) =>
            console.log("the insta channel error - ", error));


        // console.log("THEEE MAAAXXXX :  ", maxDrebScore)
        // console.log("THEEE MIIINNNN :", minDrebScore)
    }

    const SearchGen = () => {
        // setGen(e.target.value);
        InstaAccount();
    }
    const SearchGen2 = () => {
        InstaAccount();
    }


    const ItsOnn = () => {
        setCatShow(true)
    }
    const ItsOff = () => {
        setCatShow(false)
    }


    // DROPDOWN SOCIAL MEDIA
    const [openDrop, setDrop] = useState(false);
    const [selected, setSelelcted] = useState('Instagram');
    const navigate = useNavigate();
    const OpenInsta = () => {
        // navigate("/Dreabee/Dashboard/Search")
    }
    const OpenYoutube = () => {
        navigate("/Dreabee/Dashboard/search-youtube", { state: { tag: ting } })
    }


    // DREABEE SCORE DROPDOWN 
    const [dreabeeDrop, setDreabeeDrop] = useState(false);
    const [minimum, setMinimum] = useState("")
    const [maximum, setMaximum] = useState("")
    const [inputs, setInputs] = useState({ DbScore: { min: 0, max: 10 } });

    // FOLLOWERS COUNT  FILTER 
    const [minimumF, setMinimumF] = useState();
    const [maximumF, setMaximumF] = useState();


    const [fDropz, setFDropz] = useState(false);
    const [inputsFollow, setInputsFollow] = useState({ Followerz: { min: 0, max: 1000000 } });

    // LOCATION FILTERS
    const [openCityDrop, setCityDrop] = useState(false);
    const [selectedCity, setSelelctedCity] = useState('Location')

    // 4 --GENDER
    const [gender, setGender] = useState("");
    const [genGen, setGenGen] = useState(false);



    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // InstaAccount();
            updateXValue();
        }
    };


    // 90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000


    // 90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    const updateXValue = () => {
        // navigate("/Dreabee/Dashboard/search-instagram", { replace: true });

        navigate("/Dreabee/Dashboard/search-instagram", { state: { tag: ting } })


        setTimeout(() => {
            InstaAccount()
        }, 100);
    }

    // 90000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000

    const [pageNow, setPageNow] = useState(1)
    const [pageAll, setPageAll] = useState(10)
    const DecNo = () => {
        let x = pageNow - 1;
        if (x <= 0) {
            x = 0;
        } else {
            setPageNow(pageNow - 1)
            InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, city, (pageNow - 1))
        }


    }
    const IncNo = () => {
        let x = pageNow + 1;
        if (x > pageAll) {
            x = pageAll;
        } else {
            setPageNow(pageNow + 1)
            InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, city, (pageNow + 1))

        }
    }

    return (
        <>
            <div className='row'>
                <div className='col-lg-12'>
                    {/* Search Field */}
                    <div className='search_section'>
                        <div style={{ width: '66%' }}>
                            <span>
                                <i class="fa fa-search fa-lg"></i>
                            </span>

                            <input type="text" onKeyPress={handleKeyPress} value={ting} onChange={(e) => { setTing(e.target.value) }} />
                        </div>
                        <div style={{ width: "16%" }}>
                            <div className='mx-2'>
                                {/* <Social_dropdown /> */}

                                {/* DROPDOWN SOCIAL MEDIAS  */}
                                {/* <div>
                                    <button className=' btn drop_box py-1 mx-1 ' onClick={() => { setDrop(!openDrop) }}>
                                        <div style={{ display: "flex", alignItems: "center", "justifyContent": "center" }}>
                                            <label>
                                                {selected}
                                            </label>

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
                                            <ul className='social_drop_list mt-1'>
                                                <li>
                                                    <button className='social_drop btn' onClick={() => { setSelelcted('Instagram'); setDrop(false) }}>
                                                        <img src={require('../../../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                        Instagram
                                                    </button>
                                                </li>

                                                <li>
                                                    <button className='social_drop btn' onClick={() => { setSelelcted('Youtube'); setDrop(false); OpenYoutube(); }}>
                                                        <img src={require('../../../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        Youtube
                                                    </button>
                                                </li>

                                            </ul>
                                            :
                                            null
                                    }
                                </div> */}
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
                                            <section style={{ height: "0px", width: "0px", position: "relative", zIndex: "2" }}>

                                                <ul className='social_drop_list mt-1 bg-light' style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", width: "200px" }}>
                                                    <li>
                                                        <button className='social_drop btn hoverpe' onClick={() => { setSelelcted('Instagram'); setDrop(false); OpenInsta(); }}>
                                                            <img src={require('../../../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                            Instagram
                                                        </button>
                                                    </li>

                                                    <li style={{ border: "none" }}>
                                                        <button className='social_drop btn hoverpe' onClick={() => { setSelelcted('Youtube'); setDrop(false); OpenYoutube(); }}>
                                                            <img src={require('../../../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
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
                                <img alt='img' src={require("../../../../Imagez/Dashboard/All/mdi_approve.png")} />
                                <label className='labels'>Verified influencers</label>
                            </section>

                            <label class="switchSmall2 m5">
                                <input type="checkbox" onClick={toggleSlide} />
                                <small></small>
                            </label>
                        </div>
                    </div>

                    {/* Youtube Search filter */}


                    <hr style={{ zIndex: "1" }} />


                    {/* filter section */}
                    <div className='mt-2 d-flex justify-content-between'>
                        <label className='labels mx-3' style={{ 'fontSize': '18px' }}>
                            {profileCount} Profile
                        </label>

                        <div className='plan_filter me-3'>
                            {/* <div className='mx-1'>
                                <Social_dropdown />
                            </div> */}

                            {/* dbScore  */}
                            <div className='mx-2'>
                                <div >
                                    <button className={dreabeeDrop ? 'BtnWy btn  ' : "btn  BtnBlK"}
                                        onClick={() => {


                                            setFDropz(false);
                                            setDreabeeDrop(!dreabeeDrop);
                                            setGenGen(false);
                                            setCityDrop(false)

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
                                            <div className='Score_drop Hovely p-4 mt-1' style={{ right: "220px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
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
                                                    <div className='row d-flex align-items-center justify-content-evenly my-3 mb-3 mt-4'>

                                                        <div className='py-1 px-5 my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                                            <section className='' style={{ "fontSize": "10px", color: "" }}>Min. Score</section>
                                                            <input type='text' value={inputs.DbScore.min} onChange={() => { setMinDrebScore((inputs.DbScore.min) / 10) }} className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                                        </div>




                                                        <div className='py-1 px-5  my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                                            <section className='b' style={{ "fontSize": "10px", color: "" }}>Max. Score</section>
                                                            <input type='text' value={inputs.DbScore.max} onChange={(e) => { setMaxDrebScore((inputs.DbScore.max) / 10) }} className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                                        </div>
                                                    </div>
                                                </section>
                                                <div className='d- flex-column city_search_section px-3 py-3  ' style={{ backgroundColor: "rgba(64, 63, 63, 0.226)", "borderRadius": "10px" }}>


                                                    <p style={{ "fontSize": "15px" }} >Dreabee Score helps you to filter influencers based on how engaging an influencer’s content is  <span className='text-primary'><u> Read more</u> . </span></p>


                                                    <section div className='row my-2'>
                                                        <div style={{ "fontSize": "15px", color: "green", fontWeight: 600 }} className='col-lg-4 text-center' >8-10</div>
                                                        <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-8' >Premium Influencers and Celebs</div>
                                                    </section>
                                                    <section div className='row my-2'>
                                                        <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-4 text-center text-warning' >5-8</div>
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

                                                    <button className='btn btnz me-2' onClick={() => {
                                                        setMinDrebScore("");
                                                        setMaxDrebScore("");
                                                        setDreabeeDrop(false)
                                                        InstaAccount(0, 10, minimumF, maximumF, gender, city);
                                                    }} >
                                                        Clear Filters
                                                    </button>

                                                    <button className='btn btnz ms-2' onClick={() => {
                                                        //  ChannelDetailz();


                                                        setMinDrebScore((inputs.DbScore.min) / 10)
                                                        setMaxDrebScore((inputs.DbScore.max) / 10)


                                                        InstaAccount((inputs.DbScore.min) / 10, (inputs.DbScore.max) / 10, minimumF, maximumF, gender, city);
                                                        setDreabeeDrop(false);



                                                        console.log("the min score : ", + minDrebScore)
                                                        console.log("the max score : " + maxDrebScore)
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


                            {/* Location  */}
                            <div className='mx-2'>

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
                                            <div className='location_drop p-4 mt-1' style={{ right: "190px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                                                <label>
                                                    <b> Select Country</b>
                                                </label>



                                                <div className='d-flex flex-column city_search_section'>
                                                    {/* <label>
                                                        State/ City
                                                    </label> */}

                                                    <div className='mt-4'>
                                                        <button className='btn platform_btn'
                                                            onClick={() => { InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, "india", pageNow); setCityDrop(false) }}
                                                        >
                                                            India
                                                        </button>


                                                        <button className='btn platform_btn'
                                                            onClick={() => { InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, "united-states", pageNow); setCityDrop(false) }}
                                                        >
                                                            U.S
                                                        </button>


                                                        <button className='btn platform_btn'
                                                            onClick={() => { InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, "korea", pageNow); setCityDrop(false) }}
                                                        >
                                                            Korea
                                                        </button>
                                                    </div>


                                                    <div className='city_search mt-3'>
                                                        <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} />
                                                        <i className='fa fa-search' />
                                                    </div>

                                                </div>

                                                <div className='loaction_footer mt-4'>
                                                    <button className='btn mx-2' onClick={() => { InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, "", pageNow); setCityDrop(!openCityDrop) }}>
                                                        Clear
                                                    </button>

                                                    <button className='btn mx-2' onClick={() => { InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, gender, city, pageNow); setCityDrop(!openCityDrop) }}>
                                                        Apply Filters
                                                    </button>
                                                </div>

                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>

                            {/* Gender */}
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
                                            <ul className='social_drop_list mt-1 bg-light' style={{ position: "", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)", width: "200px" }}>
                                                <li>
                                                    <button className='social_drop btn hoverpe' style={{ fontSize: "18px", fontWeight: "700" }} onClick={() => {

                                                        setGender('m');
                                                        setDrop(false);
                                                        setGenGen(false);
                                                        InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, "m", city, pageNow);


                                                        // InstaAccount((inputs.DbScore.min) / 10, (inputs.DbScore.max) / 10);
                                                    }}>
                                                        {/* <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} /> */}
                                                        <i class='bx bx-male-sign' style={{ "fontSize": "20px" }} ></i> &nbsp; &nbsp;
                                                        Male
                                                    </button>
                                                </li>

                                                <li style={{ border: "" }}>
                                                    <button className='social_drop btn hoverpe' style={{ fontSize: "18px", fontWeight: "700" }} onClick={() => {
                                                        setGender('f');
                                                        setDrop(false);
                                                        setGenGen(false);
                                                        InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, "f", city, pageNow);
                                                    }}>
                                                        {/* <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} /> */}
                                                        <i class='bx bx-female-sign' style={{ "fontSize": "20px" }} ></i> &nbsp;
                                                        Female
                                                    </button>
                                                </li>
                                                <li style={{ border: "none" }}>

                                                    <button className='social_drop text-center btn hoverpe ps-5' style={{ fontSize: "24px", fontWeight: "600" }} onClick={() => {
                                                        setGender('');
                                                        setGenGen(false);
                                                        setDrop(false);
                                                        InstaAccount(minDrebScore, maxDrebScore, minimumF, maximumF, "", city, pageNow);
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
                            <div className='mx-2'>
                                <div >
                                    <button className={fDropz ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => {
                                        setFDropz(!fDropz);
                                        setDreabeeDrop(false);
                                        setGenGen(false);
                                        setCityDrop(false)

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
                                            <div className='Score_drop Hovely p-4 mt-1' style={{ right: "55px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
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
                                                        <div style={{ "fontSize": "15px", color: " #000", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                            <input type='radio' name='follower' onClick={() => {
                                                                InstaAccount(minDrebScore, maxDrebScore, "2000", "10000", gender, city); setFDropz(false);
                                                            }}

                                                            /> &nbsp;   Nano
                                                        </div>

                                                        <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >2K-10K followers</div>
                                                    </section>
                                                    {/* ___________  */}
                                                    <section div className='row my-1 py-2  hoverpe'>
                                                        <div style={{ "fontSize": "15px", color: " #000", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                            <input type='radio' name='follower' onClick={() => {
                                                                InstaAccount(minDrebScore, maxDrebScore, "10000", "25000", gender, city); setFDropz(false);
                                                            }} /> &nbsp;   Micro
                                                        </div>

                                                        <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >10K-25K followers</div>
                                                    </section>
                                                    {/* ___________  */}
                                                    <section div className='row my-1 py-2  hoverpe'>
                                                        <div style={{ "fontSize": "15px", color: " #000", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                            <input type='radio' name='follower' onClick={() => {
                                                                InstaAccount(minDrebScore, maxDrebScore, "25000", "100000", gender, city); setFDropz(false);


                                                            }} /> &nbsp;   Mid Tier
                                                        </div>

                                                        <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >25K-100K followers</div>
                                                    </section>
                                                    {/* ___________  */}
                                                    <section div className='row my-1 py-2  hoverpe'>
                                                        <div style={{ "fontSize": "15px", color: " #000", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                            <input type='radio' name='follower' onClick={() => { InstaAccount(minDrebScore, maxDrebScore, "100000", "250000", gender, city); setFDropz(false); }}
                                                            /> &nbsp;   Macro
                                                        </div>

                                                        <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >100K-250K followers</div>
                                                    </section>
                                                    {/* ___________  */}
                                                    <section div className='row my-1 py-2  hoverpe'>
                                                        <div style={{ "fontSize": "15px", color: " #000", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                            <input type='radio' name='follower' onClick={() => {
                                                                InstaAccount(minDrebScore, maxDrebScore, "250000", "1000000", gender, city); setFDropz(false);
                                                            }} /> &nbsp;   Mega
                                                        </div>

                                                        <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >250K-1M followers</div>
                                                    </section>
                                                    {/* ___________  */}
                                                    <section div className='row my-1 py-2  hoverpe'>
                                                        <div style={{ "fontSize": "15px", color: " #000", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                                            <input type='radio' name='follower' onClick={() => { InstaAccount(minDrebScore, maxDrebScore, "1000000", "", gender, city); setFDropz(false); }} /> &nbsp;   A-Listers
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

                                                        InstaAccount(minDrebScore, maxDrebScore, "", "", gender, city);


                                                    }}>
                                                        Clear Filters
                                                    </button>

                                                    <button className='btn btnz ms-2'
                                                        onClick={() => {
                                                            setMinimumF(("the mnmax followers : ", inputsFollow.Followerz.min))
                                                            setMaximumF(("the mnmax followers : ", inputsFollow.Followerz.max))
                                                            // 
                                                            console.log("the folower count min ", minimumF)
                                                            console.log("the folower count max ", maximumF)

                                                            // InstaAccount(minDrebScore, maxDrebScore, inputsFollow.Followerz.min, inputsFollow.Followerz.max, gender, city);
                                                            InstaAccount(minDrebScore, maxDrebScore, (inputsFollow.Followerz.min), (inputsFollow.Followerz.max), gender, city);



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


                    {/* ___________________________YOUTUBE CHANNEL SECTION ___________________________ */}

                    {/* channel  table section */}
                    <div className='table-responsive' id='Top' style={{ overflowX: "hidden" }}>
                        <table className='plan_table ' style={{ marginBottom: "0rem" }}>
                            <thead>
                                <tr>
                                    <th className=''>
                                        <input type="checkbox" disabled className='checkbox_section mx-2 ' />
                                    </th>

                                    <th>
                                        Instagram Profile
                                    </th>

                                    {/* <th> Score <i class="fa fa-info-circle" aria-hidden="true"></i> </th> */}

                                    <th>
                                        ROI Score
                                    </th>
                                    <th>
                                        Followers
                                    </th>

                                    <th>
                                        Avg Likes
                                    </th>

                                    <th>
                                        Avg Views
                                    </th>

                                    <th>
                                        ER <i class="fa fa-info-circle" aria-hidden="true"></i>
                                    </th>

                                    {/* <th></th> */}

                                    <th className=' text-center'>
                                        Categories
                                    </th>
                                </tr>
                            </thead>

                            <tbody className='' >






                                {/* ++++++++ */}


                                {
                                    allChannel.length != 0
                                        ?
                                        allChannel.map((data) => {

                                            return (
                                                <>
                                                    <tr className='' >
                                                        <td className=' '   >
                                                            <input type="checkbox" className='checkbox_section mx-2' />
                                                        </td>

                                                        <td className=''>
                                                            <div className='d-flex' >
                                                                {/* <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={40} height={40} /> */}
                                                                <img src={data.image} width={55} height={55} style={{ border: "2px solid #C83B93", "borderRadius": "50%" }} />
                                                                <div style={{ textAlign: 'initial', marginLeft: '5px' }}>
                                                                    <div className='d-flex align-items-center'>
                                                                        <label className='bg-' style={{
                                                                            whiteSpace: "nowrap",
                                                                            width: "120px",
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis"
                                                                        }}>
                                                                            {/* Guru Randhawa */}
                                                                            {data.name}
                                                                        </label>
                                                                        <img className='mx-2' src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                                                    </div>

                                                                    <label className='social_handle'>
                                                                        {/* gururandhawa */}
                                                                        @
                                                                        {/* {data.name} */}
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

                                                        <td className='bg- '>
                                                            {((data.average_ER) * 100).toFixed(2)}%
                                                        </td>

                                                        {/* <td className=''>
                                                            <label>
                                                                Gurgaon
                                                            </label>
                                                        </td> */}

                                                        <td className=' py-2' colSpan={2}
                                                            onMouseEnter={ItsOnn} onMouseLeave={ItsOff}
                                                            style={{ boxShadow: "0 0 0 0 " }}
                                                        >




                                                            <div className='categories_row py-2  bg- w-100 vizElement ' >
                                                                <div className='my- bg- w-100'>
                                                                    <section className='row d-flex justify-content-start ps-5 bg-'>

                                                                        {
                                                                            (data.tags.length) != 0
                                                                                ?
                                                                                <span className='plan_categories my-1 col-lg-5 rounded' style={{
                                                                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)", " border ": "1px solid grey", textTransform: "capitalize", whiteSpace: "nowrap",
                                                                                    overflow: "hidden",
                                                                                    textOverflow: "ellipsis",
                                                                                    //  width: "120px",
                                                                                }}>
                                                                                    #     {data.tags[0]}
                                                                                </span>
                                                                                :
                                                                                null
                                                                        }

                                                                        {
                                                                            (data.tags.length) != 0
                                                                                ?
                                                                                <span className='plan_categories my-1 col-lg-5 rounded' style={{
                                                                                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)", " border ": "1px solid grey", textTransform: "capitalize", whiteSpace: "nowrap",
                                                                                    overflow: "hidden",
                                                                                    textOverflow: "ellipsis",
                                                                                    //  width: "120px",
                                                                                }}>
                                                                                    #  {data.tags[1]}
                                                                                </span>

                                                                                :
                                                                                null
                                                                        }



                                                                        <span className='plan_categories my-1 col-lg-4 rounded' style={{
                                                                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)", " border ": "1px solid grey", whiteSpace: "nowrap",
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            //  width: "120px",
                                                                        }}>
                                                                            More +
                                                                        </span>

                                                                    </section>


                                                                </div>

                                                            </div>

                                                            <div className='categories_btn py-2 w-100 revElement'>

                                                                <div className=' my-4 '>
                                                                    <section className='row d-flex justify-content-center '>

                                                                        <span className=' my-1 col-lg-6 rounded'>
                                                                            <button className='invite_btn py-2 btnz w-100 '>
                                                                                <img src={require('../../../../Imagez/Dashboard/All/Invite.png')} width={30} className='mx-2' />
                                                                                Add to list
                                                                            </button>
                                                                        </span>


                                                                        <span className=' d-flex justify-content-center   col-lg-2 rounded'>
                                                                            <button className='other_btn  btnz '>
                                                                                <img src={require('../../../../Imagez/Dashboard/All/₹.png')} height={20} />
                                                                            </button>
                                                                        </span>


                                                                        <span className=' d-flex justify-content-center col-lg-2 rounded'>
                                                                            <button className='other_btn  btnz '>
                                                                                <img src={require('../../../../Imagez/Dashboard/All/graph.png')} />
                                                                            </button>
                                                                        </span>


                                                                    </section>
                                                                </div>
                                                            </div>






                                                        </td>
                                                    </tr>


                                                </>
                                            );
                                        })


                                        :

                                        <>
                                            <tr className='my-2 mt-5 bg-'  >
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
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
                                                <td className='py-5  d-flex justify-content-end' style={{ "boxShadow": "none" }}>
                                                    <FadeLoader color={"#C83B93"} size={2} />
                                                </td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>

                                            </tr>

                                        </>


                                }



                            </tbody>


                            <tbody style={{ "border": "none" }}>
                                <tr className='bg-e ' >

                                    {
                                        allChannel.length != 0
                                            ?
                                            <th className='' colSpan={10}>
                                                <div className='bg- w-100'>
                                                    <section className='d-flex align-items-center py-5 justify-content-center'>

                                                        <button className='mx-5 bg-transparent text-dark nobg  p-3' onClick={() => { DecNo(); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} style={{ "borderRadius": "50%", "border": " none", }}> <i class='bx bx-chevron-left' style={{ "fontSize": "32px " }} ></i></button>
                                                        {pageNow} of {pageAll}
                                                        <button className='mx-5 bg-transparent text-dark ' onClick={() => { IncNo(); document.getElementById("Top").scrollIntoView({ behavior: "smooth" }) }} style={{ "borderRadius": "50%", "border": " none", }}> <i class='bx bx-chevron-right' style={{ "fontSize": "32px " }} ></i></button>
                                                    </section>

                                                </div>

                                            </th>
                                            :
                                            <>
                                                <th className='' colSpan={12}>
                                                    <div className='bg- w-100'>
                                                        <section className='d-flex align-items-center ps-5 py-5 justify-content-center'>
                                                            <section className='py-5  d-flex justify-content-end' colSpan={10} style={{ "boxShadow": "none" }}>
                                                                <FadeLoader color={"#C83B93"} size={2} />
                                                            </section>
                                                        </section>

                                                    </div>
                                                </th>
                                            </>
                                    }


                                </tr>
                            </tbody>



                        </table>
                    </div>

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

            <div className={`slide-container ${blow ? 'slide-in' : 'slide-out'}`}>
                <div className="slide-content" >
                    {/* Your content goes here */}
                    <div className='row' >
                        <div className='col-lg-12 pt-3 m-0 add_plan_setion'>
                            <label>
                                Kindly select a plan to<br /> add influencers
                            </label>

                            <div className='add_plans_inner'>
                                <button className='btn plan_add_btn' onClick={() => { setplanModal(true) }}>
                                    <img src={require('../../../../Imagez/Dashboard/All/Invite.png')} />
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
                                        <button onClick={toggleSlide} className='ps-2 py-2 pb-3' style={{ "border": "none", background: "white", "position": "relative", "top": "-18.2rem", "left": "-13.5rem", "opacity": "0.6", "borderRadius": " 20px 0 0 20px" }}> <i class='bx bxs-chevrons-right bx-fade-right' style={{ "fontSize": "3rem" }} ></i><span style={{ "position": "relative", "left": "-45px", "fontWeight": "700", "top": "12px", "fontSize": "13px" }}> Close Plans </span></button>
                                        :
                                        <button onClick={toggleSlide} className='ps-2 py-2 pb-3' style={{ "border": "none", background: "white", "position": "relative", "top": "-18.2rem", "left": "-13.5rem", "opacity": "0.6", "borderRadius": " 20px 0 0 20px" }}> <i class='bx bxs-chevrons-left bx-fade-right' style={{ "fontSize": "3rem" }} ></i><span style={{ "position": "relative", "left": "-45px", "fontWeight": "700", "top": "12px", "fontSize": "13px" }}> View Plans </span></button>

                                }
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstagramSearch



