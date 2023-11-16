import React from 'react'
import Brand_explore from './component/Brand_expore'
import { useState } from 'react'
import Video_analysis from './component/Video_analysis'

export default function BrandDetails() {
    const[active,setActive]=useState('Explore')
    return (
        <div className="pt-4">
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
                    <img className='mx-2' src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                    <label className='mx-2'>
                        <b>Youtube</b>
                    </label>
                    <span>2.58M</span>
                </div>
            </div>

            <div className='brand_profile_section p-3 mt-4'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../Imagez/Dashboard/All/Profile.png')} />
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
                                <img className='mx-1' src={require('../../Imagez/Dashboard/All/collection_icon.png')} width={30} />
                                <img className='mx-1' src={require('../../Imagez/Dashboard/All/collection_icon.png')} width={30} />
                                <img className='mx-1' src={require('../../Imagez/Dashboard/All/collection_icon.png')} width={30} />
                            </div>


                        </div>

                        <div>
                            <img className='mx-1' src={require('../../Imagez/Dashboard/All/search_img.png')} width={300} />
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

            <div className='brands_features mt-3'>
                <div className='brands_features_box'>
                    <div className='d-flex justify-content-between'>
                        <img src={require('../../Imagez/Dashboard/All/solar_user-broken.png')} height={40} width={40} />
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
                        <img src={require('../../Imagez/Dashboard/All/Play_Vector.png')} height={40} width={40} />
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
                        <img src={require('../../Imagez/Dashboard/All/Play_Vector.png')} height={40} width={40} />
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
                        <img src={require('../../Imagez/Dashboard/All/solar_eye-broken.png')} height={40} width={40} />
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
                        <img src={require('../../Imagez/Dashboard/All/heroicons_currency-rupee.png')} height={40} width={40} />
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

            <div className='mt-5'>
                <button onClick={()=>{setActive('Explore')}} className={active=='Explore'?'tabs_btn brand_active_tab':'tabs_btn'}>
                    Explore
                </button>

                <button onClick={()=>{setActive('Videos')}} className={active=='Videos'?'tabs_btn brand_active_tab':'tabs_btn'}>
                    Videos
                </button>

                <button onClick={()=>{setActive('Influencers')}} className={active=='Influencers'?'tabs_btn brand_active_tab':'tabs_btn'}>
                    Influencers
                </button>
            </div>

            <div>
                {
                    active=="Explore"
                    ?
                    <Brand_explore/>
                    :
                    active=="Videos"
                    ?
                    <Video_analysis/>
                    :
                    "Influencers"
                }
            </div>
        </div>
    )
}
