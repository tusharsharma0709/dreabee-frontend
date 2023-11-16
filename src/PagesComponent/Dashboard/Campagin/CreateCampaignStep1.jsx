import React, { useEffect, useState } from 'react'
import Invite from '../../../Imagez/Dashboard/All/Invite.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { baseUrl } from '../../../Routez/Routey';
export default function Create_Campaign() {
    const navigate = useNavigate();
    const location = useLocation();
    const [work_as, setWork_as] = useState("");
    const [ids, setIds] = useState("");
    const [idsLength, setIdsLength] = useState();
    const [achieveit, setAchieveIt] = useState("Product Demonstration");

    useEffect(() => {
        console.log(location.state.idz)
        setIds(localStorage.getItem("Edit-Id"))
        console.log("the id  " + ids)

        if (localStorage.getItem("Edit-Id")) {

            GetAllById();
        } else {
            console.log("no editing here")
        }

    }, [])

    const GetAllById = () => {
        axios.get(`${baseUrl}api/Campaign/CampaignDetails/${localStorage.getItem("Edit-Id")}`).then((res) => {
            console.log("here now  :", res.data.workAs)
            console.log("here now wooooohoooo  :", res.data)
            setWork_as(res.data.workAs)

        }).catch((error) =>
            console.log("the all data error - ", error));




        // setWork_as("Paid Collaboration")
        // localStorage.setItem('Achievee', achieveit);


        if (work_as === "Perks") {
            PerkClick();
        }
        else if (work_as === "Paid Collaboration") {
            CollabClick();
        } else {

        }
    }


    const onRedirectCampaignSetp2 = () => {
        navigate("/Dreabee/Dashboard/CampaginStep2", { state: { work_as, idz: ids } })
    }
    const ChanzeCol = () => {
        document.getElementById('Collabid1').style.color = "white";
        document.getElementById('Collabid2').style.color = "white";
        document.getElementById('Collabid3').style.color = "white";
    }
    const ChazeBackCol = () => {
        document.getElementById('Collabid1').style.color = "#c83b93";
        document.getElementById('Collabid2').style.color = "#c83b93";
        document.getElementById('Collabid3').style.color = "#c83b93";

    }
    const ChanzeColPerk = () => {
        document.getElementById('PerkId1').style.color = "white";
        document.getElementById('PerkId2').style.color = "white";
        document.getElementById('PerkId3').style.color = "white";
    }
    const ChazeBackColPerk = () => {
        document.getElementById('PerkId1').style.color = "#c83b93";
        document.getElementById('PerkId2').style.color = "#c83b93";
        document.getElementById('PerkId3').style.color = "#c83b93";

    }
    const PerkClick = () => {
        document.getElementById('PerkBox').style.border = "2px solid #c83b93";
        document.getElementById('CollabBox').style.border = "none";
        setWork_as("Perks")
    }
    const CollabClick = () => {
        document.getElementById('CollabBox').style.border = "2px solid #c83b93";
        document.getElementById('PerkBox').style.border = "none";
        setWork_as("Paid Collaboration")
    }


    return (
        <div>
            <div className='d-flex camp_header bg-transparent  ' style={{ "border": "none" }} >
                <div className='campaign_head ' >
                    <i class="fa fa-arrow-left" style={{ color: '#c83b93' }} aria-hidden="true"></i>
                    <label style={{ marginLeft: '20px' }}>
                        Post New Campaign
                    </label>
                </div>

            </div>
            <div className='camp_questions'>
                <label>How do you want to work with influencers?</label>



                <div className='d-flex justify-content-center  answer_section'>
                    {/* Box section  */}
                    <div className='answer_box mx-5 Kardz' id='CollabBox' onClick={CollabClick} onMouseLeave={ChazeBackCol} onMouseEnter={ChanzeCol}>
                        <i class="  fa-solid fa-money-bills" id='Collabid1' style={{ "color": "#c83b93", "fontSize": "70px" }}></i>
                        <label id='Collabid2'  >Paid Collaboration</label>
                        <p id='Collabid3'  >In a paid collaboration, the influencers are compensated in cash for their work & influence. </p>
                    </div>

                    <div className='answer_box mx-5 Kardz' id='PerkBox' onClick={PerkClick} onMouseLeave={ChazeBackColPerk} onMouseEnter={ChanzeColPerk}>
                        <i id='PerkId1' class="fa-solid fa-gift" style={{ "fontSize": "70px", "color": "#c83b93" }}></i>
                        <label id='PerkId2' >Perks</label>
                        <p id='PerkId3' >These kind of collaborations require the influencer to be gratified with products & experiences.</p>
                    </div>
                </div>


                {/* Info sec  */}
                <div className='d-flex answer_section justify-content-center '>
                    <div className='note_section mx-5'>
                        <label>Why do a paid collaboration?</label>

                        <ul>
                            <li>Definitive outcomes on influencer campaigns.</li>
                            <li>Tighter control over content & influencer selection.</li>
                        </ul>

                        <div className='d-flex play-section'>
                            <img src={require('../../../Imagez/Dashboard/All/play_icon.png')} />

                            <div>
                                <label>Why do a paid collaboration?</label>

                                <p>
                                    Learn more about paid collaborations & see how different brands use them.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className='note_section mx-5'>
                        <label>Why do a paid collaboration?</label>

                        <ul>

                            <li> Earn true word of mouth</li>
                            <li> Create relationships with influencers</li>
                            <li> Tighter control over content & influencer selection</li>
                        </ul>

                    </div>
                </div>
            </div>

            <div className='camp_footer bg-transparent mt-4 ' style={{ "borderTop": " 2px solid #2f2c2c20" }}>
                <button className='continue_btn  btnz' onClick={onRedirectCampaignSetp2} >
                    Continue
                </button>
            </div>
        </div>
    )
}
