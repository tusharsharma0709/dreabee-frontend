import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Brand_explore from './Brand_expore';
import Video_analysis from './Video_analysis';
import BrandsInfluencer from './BrandsInfluencer';

export default function BrandDetails() {
    const [active, setActive] = useState('Explore')
    const navigate = useNavigate();
    const Brandliss = () => {
        navigate('/Dreabee/Dashboard/BrandSites');
    }
    return (
        <div className="pt-4">

            {/* route and youtube  */}
            <div className='brand_details_header'>
                <div className='application_route'>
                    <label>
                        Application
                    </label>
                    <i class="fa fa-long-arrow-right"></i>
                    <label>
                        Youtube
                    </label>
                    <i class="fa fa-long-arrow-right"></i>
                    <label style={{ color: '#C83B93', fontWeight: 'bold' }}>
                        amazon.com
                    </label>
                </div>

                <div>
                    <span className='me-4 bg p-3 Hovly' style={{ " border": "1px solid red", "borderRadius": "20px", "cursor": "pointer" }}>
                        <img className='mx-1  ' style={{ "cursor": "pointer" }} src={require('../../../../Imagez/Dashboard/All/Insta.png')} width={20} />
                        <label className='mx-1 pt-3'>
                            <b>Instagram</b>
                        </label>
                        <span>10.7M</span>
                    </span>
                    <span className='me-2  bg p-3 Hovly' style={{ " border": "1px solid red", "borderRadius": "20px", "cursor": "pointer" }}>
                        <img className='mx-1 ' style={{ "cursor": "pointer" }} src={require('../../../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                        <label className='mx-1 pt-3'>
                            <b  > Youtube</b>
                        </label>
                        <span   >2.58M</span>
                    </span>
                </div>
            </div>
            {/* common top section  */}
            <div className='brand_profile_section p-3 mt-4'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../../../Imagez/Dashboard/All/Profile.png')} />
                        </div>

                        <div className='d-flex flex-column mx-3'>
                            <label>
                                <h3>
                                    <b>
                                        RAID: Shadow Legends
                                    </b>
                                </h3>
                            </label>

                            <label>
                                <span style={{ color: '#bbbb13', marginRight: '5px', fontSize: '14px' }}>
                                    ★
                                </span>

                                <span>
                                    <b>
                                        4.7
                                    </b>
                                </span>

                                <span style={{ color: '#7E7E7E', marginRight: '5px', fontSize: '14px' }}>
                                    . Games
                                </span>

                                <span style={{ color: '#7E7E7E', marginRight: '5px', fontSize: '14px' }}>
                                    . Premium
                                </span>

                                <span style={{ color: '#7E7E7E', marginRight: '5px', fontSize: '14px' }}>
                                    . Free
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className='d-flex align-items-center'>
                        <div className='other_company_products'>
                            <label>
                                Other Company Products
                            </label>
                            <div>
                                <img className='mx-1' src={require('../../../../Imagez/Dashboard/All/collection_icon.png')} width={30} />
                                <img className='mx-1' src={require('../../../../Imagez/Dashboard/All/collection_icon.png')} width={30} />
                                <img className='mx-1' src={require('../../../../Imagez/Dashboard/All/collection_icon.png')} width={30} />
                            </div>


                        </div>

                        <div>
                            <img className='mx-1' src={require('../../../../Imagez/Dashboard/All/search_img.png')} width={300} />
                        </div>
                    </div>
                </div>

                <div className='brand_details '>
                    <p>
                        Battle your way through a visually-stunning realistic fantasy RPG with hundreds of Champions from 15 playable factions.
                        To save the world of Teleria, you will recruit its most legendary warriors from the forces of Light and
                    </p>
                </div>
            </div>

            {/* Common cards for all the brands pages  */}
            <div className='brands_features mt-3'>
                <div className='brands_features_box'>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../../../../Imagez/Dashboard/All/solar_user-broken.png')} height={40} width={40} />

                        <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                            8.89K
                        </label>
                    </div>

                    <div className='mt-3'>
                        <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Total Influencers
                        </label>
                    </div>

                </div>

                <div className='brands_features_box'>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../../../../Imagez/Dashboard/All/Play_Vector.png')} height={40} width={40} />
                        <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                            34.82K
                        </label>
                    </div>

                    <div className='mt-3'>
                        <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Total Mentions
                        </label>
                    </div>

                </div>

                <div className='brands_features_box'>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../../../../Imagez/Dashboard/All/Play_Vector.png')} height={40} width={40} />
                        <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                            8.89K
                        </label>
                    </div>

                    <div className='mt-3'>
                        <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Ad. Mentions
                        </label>
                    </div>

                </div>

                <div className='brands_features_box'>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../../../../Imagez/Dashboard/All/solar_eye-broken.png')} height={40} width={40} />
                        <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                            8.89B
                        </label>
                    </div>

                    <div className='mt-3'>
                        <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Total Views
                        </label>
                    </div>

                </div>

                <div className='brands_features_box'>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../../../../Imagez/Dashboard/All/heroicons_currency-rupee.png')} height={40} width={40} />
                        <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                            ₹10M- ₹20M
                        </label>
                    </div>

                    <div className='mt-3'>
                        <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            Approx. Budget
                        </label>
                    </div>

                </div>
            </div>


            {/* 3 Buttons for the page routes  */}
            <div className='mt-5'>
                <button onClick={() => { setActive('Explore') }} className={active == 'Explore' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                    Explore
                </button>

                <button onClick={() => { setActive('Videos') }} className={active == 'Videos' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                    Videos
                </button>

                <button onClick={() => { setActive('Influencers') }} className={active == 'Influencers' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                    Influencers
                </button>
            </div>

            {/* <Explore / Videos /Influencers /> */}
            <div>
                {
                    active == "Explore"
                        ?
                        <Brand_explore />
                        :
                        active == "Videos"
                            ?
                            <Video_analysis />
                            :
                            <BrandsInfluencer />
                }
            </div>
        </div>
    )
}

// "Influencers"