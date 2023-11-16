import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Create_Campaign2() {
    const navigate = useNavigate();
    const [work_as, setWork_as] = useState();
    const [achieve, setAchieve] = useState("");
    const [ids, setIds] = useState();

    useEffect(() => {
        console.log(location.state.work_as)
        console.log(location.state.idz)
        setIds(location.state.idz)
        setWork_as(location.state.work_as)
        // setAchieve(localStorage.getItem('Achievee'));
        // console.log("here is achieve :", achieve)

        const timer = setTimeout(() => {
            // console.log("here is achieve :", achieve)
            Optionz();

        }, 1000);
        // return () => clearTimeout(timer);



    }, [])

    const Optionz = () => {
        setAchieve(localStorage.getItem('Achievee'));


        if (achieve === "Product Launch") {
            Option1();
        } else if (achieve === "Get Reviews") {
            Option2();
        } else if (achieve === "Creating Word of Mouth") {
            Option3();
        } else if (achieve === "Product Demonstration") {
            Option4();
        } else if (achieve === "Reposting Content") {
            Option5();
        }
    }



    const onRedirectCampaignSetp3 = () => {
        navigate("/Dreabee/Dashboard/CampaginStep3", { state: { work_as, achieve,idz:ids } })
        console.log("the achieve is :", achieve);
    }
    const location = useLocation()


    const ChazeBackCol = () => {
        document.getElementById('a').style.color = "#C83B93";
        document.getElementById('b').style.color = "";
        document.getElementById('c').style.color = "";
    }
    const ChanzeCol = () => {
        document.getElementById('a').style.color = "white";
        document.getElementById('b').style.color = "white";
        document.getElementById('c').style.color = "white";
    }
    const ChazeBackCol1 = () => {
        document.getElementById('d').style.color = "#C83B93";
        document.getElementById('e').style.color = "";
        document.getElementById('f').style.color = "";
    }
    const ChanzeCol1 = () => {
        document.getElementById('d').style.color = "white";
        document.getElementById('e').style.color = "white";
        document.getElementById('f').style.color = "white";
    }
    const ChazeBackCol2 = () => {
        document.getElementById('g').style.color = "#C83B93";
        document.getElementById('h').style.color = "";
        document.getElementById('i').style.color = "";
    }
    const ChanzeCol2 = () => {
        document.getElementById('g').style.color = "white";
        document.getElementById('h').style.color = "white";
        document.getElementById('i').style.color = "white";
    }
    const ChazeBackCol3 = () => {
        document.getElementById('j').style.color = "#C83B93";
        document.getElementById('k').style.color = "";
        document.getElementById('l').style.color = "";
    }
    const ChanzeCol3 = () => {
        document.getElementById('j').style.color = "white";
        document.getElementById('k').style.color = "white";
        document.getElementById('l').style.color = "white";
    }
    const ChazeBackCol4 = () => {
        document.getElementById('m').style.color = "#C83B93";
        document.getElementById('n').style.color = "";
        document.getElementById('o').style.color = "";
    }
    const ChanzeCol4 = () => {
        document.getElementById('m').style.color = "white";
        document.getElementById('n').style.color = "white";
        document.getElementById('o').style.color = "white";
    }


    const Option1 = () => {
        setAchieve("Product Launch");
        document.getElementById('Option1').style.border = "2px solid #c83b93";
        document.getElementById('Option2').style.border = "none";
        document.getElementById('Option3').style.border = "none";
        document.getElementById('Option4').style.border = "none";
        document.getElementById('Option5').style.border = "none";
    }
    const Option2 = () => {
        setAchieve("Get Reviews");
        document.getElementById('Option2').style.border = "2px solid #c83b93";
        document.getElementById('Option1').style.border = "none"
        document.getElementById('Option3').style.border = "none";
        document.getElementById('Option4').style.border = "none";
        document.getElementById('Option5').style.border = "none";
    }
    const Option3 = () => {
        setAchieve("Creating Word of Mouth");
        document.getElementById('Option3').style.border = "2px solid #c83b93";
        document.getElementById('Option1').style.border = "none";
        document.getElementById('Option2').style.border = "none";
        document.getElementById('Option4').style.border = "none";
        document.getElementById('Option5').style.border = "none";
    }
    const Option4 = () => {
        setAchieve("Product Demonstration");
        document.getElementById('Option4').style.border = "2px solid #c83b93";
        document.getElementById('Option1').style.border = "none";
        document.getElementById('Option2').style.border = "none";
        document.getElementById('Option3').style.border = "none";
        document.getElementById('Option5').style.border = "none";
    }
    const Option5 = () => {
        setAchieve("Reposting Content");
        document.getElementById('Option5').style.border = "2px solid #c83b93";
        document.getElementById('Option1').style.border = "none";
        document.getElementById('Option2').style.border = "none";
        document.getElementById('Option3').style.border = "none";
        document.getElementById('Option4').style.border = "none";

    }




    return (
        <div>
            <div>
                <div className='d-flex camp_header bg-transparent  ' style={{ "border": "none" }}>
                    <div className='campaign_head'>
                        <i class="fa fa-arrow-left" style={{ color: '#C83B93' }} aria-hidden="true"></i>
                        <label style={{ marginLeft: '20px' }}>
                            Post New Campaign
                        </label>
                    </div>

                </div>
                <div className='camp_questions '>
                    <label>What do you want to achieve from this campaign?</label>

                    <div className='d-flex answer_section mt-4'>
                        <div className='answer_box' id='Option1' onClick={Option1} onMouseLeave={ChazeBackCol} onMouseEnter={ChanzeCol}>
                            {/* <img src={require('../../../Imagez/Dashboard/All/ic_round-rocket-launch.png')} /> */}
                            <i id='a' class='bx bxs-rocket' style={{ "fontSize": "40px", "color": "#c83b93" }} ></i>
                            <label id='b'>Product Launch</label>

                            <p id='c'>Create buzz for a new product launch </p>
                        </div>

                        <div className='answer_box' id='Option2' onClick={Option2} onMouseLeave={ChazeBackCol1} onMouseEnter={ChanzeCol1}>
                            {/* <img src={require('../../../Imagez/Dashboard/All/material-symbols_reviews.png')} /> */}
                            <i id='d' class='bx bxs-message-edit' style={{ "fontSize": "40px", "color": "#c83b93" }} ></i>
                            <label id='e'>Get Reviews</label>

                            <p id='f'>
                                Get reviews on Amazon, Flipkart etc.
                            </p>
                        </div>

                        <div className='answer_box' id='Option3' onClick={Option3} onMouseLeave={ChazeBackCol2} onMouseEnter={ChanzeCol2}>
                            {/* <img src={require('../../../Imagez/Dashboard/All/solar_volume-loud-bold.png')} /> */}
                            <i id='g' class='bx bxs-volume-full' style={{ "fontSize": "40px", "color": "#c83b93" }} ></i>
                            <label id='h'>Creating Word of Mouth</label>

                            <p id='i'>
                                Make people aware about your product
                            </p>
                        </div>
                    </div>

                    <div className='d-flex justify-content-center answer_section'>
                        <div className='answer_box mx-5' id='Option4' onClick={Option4} onMouseLeave={ChazeBackCol3} onMouseEnter={ChanzeCol3}>
                            {/* <img src={require('../../../Imagez/Dashboard/All/solar_box-bold.png')} /> */}
                            <i id='j' class='bx bx-package' style={{ "fontSize": "40px", "color": "#c83b93" }} ></i>
                            <label id='k'>Product Demonstration</label>

                            <p id='l'>
                                Increase product awareness & trust
                            </p>
                        </div>

                        <div className='answer_box mx-5' id='Option5' onClick={Option5} onMouseLeave={ChazeBackCol4} onMouseEnter={ChanzeCol4}>
                            {/* <img src={require('../../../Imagez/Dashboard/All/zondicons_repost.png')} /> */}
                            <i id='m' class='bx bx-repost' style={{ "fontSize": "40px", "color": "#c83b93" }} ></i>
                            <label id='n' >Reposting Content</label>

                            <p id='o' >
                                Improve engagement on social media
                            </p>
                        </div>
                    </div>



                </div>

                <div className='camp_footer  bg-transparent mt-5 ' style={{ "borderTop": " 2px solid #2f2c2c20", "marginTop": "3rem" }} >
                    <button className='continue_btn back_btn btnz' style={{border :"1px solid grey"}}>
                        Back
                    </button>

                    <button className='continue_btn btnz ms-2' onClick={onRedirectCampaignSetp3}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}
