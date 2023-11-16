import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PremiumPopUp from '../PremiumPopUp';

const BrandGames = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState('Gamez')
    const GamezDetailz = () => {
        navigate('/Dreabee/Dashboard/GamesDetails');
    }
    const Glow = () => {
        document.getElementById("tada").style.color = "aqua";
    }
    const GlowEnd = () => {
        document.getElementById("tada").style.color = "white";
    }
    const [premiumShow, setPremiumShow] = useState(false);
    const showPremium = () => {
        setPremiumShow(!premiumShow);
    }

    return (

        <>
            {
                premiumShow ?
                    <>
                        <section style={{ zIndex: "100" }}>
                            <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "25", "position": "relative", "top": "20%", "left": "72.5rem" }} onClick={showPremium} > <i class='bx bx-x-circle bx-spin' id='tada' onMouseOver={Glow} onMouseLeave={GlowEnd} style={{ "fontSize": "38px", "color": "white" }} /> </button>
                            <PremiumPopUp />
                        </section>
                    </>
                    : null

            }



            <div>
                <div className='brand_header'>
                    <i class="fa fa-arrow-left"></i>
                    <label>
                        Competitive Analysis "Games"
                    </label>
                </div>

                <div className='row mt-5 p-3'>
                    <div className='p-3 brand_desc col-lg-6'>
                        <h3>
                            <b>Competitive Analysis Heading</b>
                        </h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                        <button  >
                            Book a Demo
                        </button>
                    </div>

                    <div className='col-lg-6'>
                        <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ objectFit: 'cover', width: '44vw' }} />

                    </div>
                </div>

                <div className='application_header d-flex justify-space-between '>
                    <h2>
                        Games &nbsp;
                        <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>

                    </h2>
                </div>

                <div className='application_header d-flex justify-space-between mb-2 '>
                    <div className='mb-2 bg-'>
                        <button onClick={() => { setActive('Gamez') }} className={active == 'Gamez' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                            Games
                        </button>

                        <button onClick={() => { setActive('Genrez') }} className={active == 'Genrez' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                            Genres
                        </button>

                        <button onClick={() => { setActive('Platformz') }} className={active == 'Platformz' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                            Platforms
                        </button>

                        <button onClick={() => { setActive('Shopz') }} className={active == 'Shopz' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                            Shops
                        </button>

                        <button onClick={() => { setActive('Developerz') }} className={active == 'Developerz' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                            Developers
                        </button>

                        <button onClick={() => { setActive('Publisherz') }} className={active == 'Publisherz' ? 'tabs_btn brand_active_tab' : 'tabs_btn'}>
                            Publishers
                        </button>
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

                <div>
                    <table className='application_table'>
                        <thead className='' >
                            <tr className=''>
                                <th className='pe-5'>
                                    Games
                                </th>
                                <th className='text-center'>
                                    Influencers
                                </th>

                                <th>
                                    Video Count
                                </th>

                                <th>
                                    Views
                                </th>


                                <th>
                                    Platform
                                </th>

                                <th>
                                    Game Genres
                                </th>

                            </tr>
                        </thead>

                        <tbody className=' Glassy'>
                            <tr className=' Glassy ' style={{ "cursor": "pointer" }} onClick={GamezDetailz}>
                                <td className='text-center pe-5 '>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />


                                        <div className='d-flex flex-row text-center '>
                                            <div className='d-flex flex-column text-center '>
                                                <label style={{ fontSize: '18px' }}>
                                                    <b>PUBG </b>
                                                </label>

                                                <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                    Developer
                                                </label>
                                            </div> &nbsp; &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>
                                        </div>


                                    </div>
                                </td>
                                <td className='text-center'>
                                    424.1 K
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    2,06,07,896
                                </td>


                                {/* <td>
                                $100.11M - $250.30M
                            </td> */}

                                <td className='bg-'>
                                    <i class="fa-brands fa-google-play mx-2"></i>

                                    <i class="fa fa-apple"></i>
                                </td>

                                <td className='d-flex justify-content-center bg-'>
                                    <div className='categories_row '>
                                        <div className='my-2 mt-3 '>
                                            <span className='plan_categories'>
                                                Arts
                                            </span>

                                            <span className='plan_categories'>
                                                Movies
                                            </span>
                                        </div>

                                        <span className='plan_categories'>
                                            +2 More...
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr className=''>
                                <td className='text-center pe-5'>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />


                                        <div className='d-flex flex-row text-center '>
                                            <div className='d-flex flex-column text-center '>
                                                <label style={{ fontSize: '18px' }}>
                                                    <b>PUBG </b>
                                                </label>

                                                <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                    Developer
                                                </label>
                                            </div> &nbsp; &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>
                                        </div>


                                    </div>
                                </td>
                                <td className='text-center'>
                                    424.1 K
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    2,06,07,896
                                </td>


                                {/* <td>
                                $100.11M - $250.30M
                            </td> */}

                                <td className=''>
                                    <i class="fa-brands fa-google-play mx-2"></i>

                                    <i class="fa fa-apple"></i>
                                </td>

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row '>
                                        <div className='my-2 mt-3 '>
                                            <span className='plan_categories'>
                                                Arts
                                            </span>

                                            <span className='plan_categories'>
                                                Movies
                                            </span>
                                        </div>

                                        <span className='plan_categories'>
                                            +2 More...
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center pe-5 '>
                                    <div className='d-flex justify-content-around '>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />


                                        <div className='d-flex flex-row text-center  '>
                                            <div className='d-flex flex-column text-center '>
                                                <label style={{ fontSize: '18px' }}>
                                                    <b>PUBG </b>
                                                </label>

                                                <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                    Developer
                                                </label>
                                            </div> &nbsp; &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>
                                        </div>


                                    </div>
                                </td>
                                <td className='text-center'>
                                    424.1 K
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    2,06,07,896
                                </td>


                                {/* <td>
                                $100.11M - $250.30M
                            </td> */}

                                <td className=''>
                                    <i class="fa-brands fa-google-play mx-2"></i>

                                    <i class="fa fa-apple"></i>
                                </td>

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row '>
                                        <div className='my-2 mt-3 '>
                                            <span className='plan_categories'>
                                                Arts
                                            </span>

                                            <span className='plan_categories'>
                                                Movies
                                            </span>
                                        </div>

                                        <span className='plan_categories'>
                                            +2 More...
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center pe-5'>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />


                                        <div className='d-flex flex-row text-center '>
                                            <div className='d-flex flex-column text-center '>
                                                <label style={{ fontSize: '18px' }}>
                                                    <b>PUBG </b>
                                                </label>

                                                <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                    Developer
                                                </label>
                                            </div> &nbsp; &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>
                                        </div>


                                    </div>
                                </td>
                                <td className='text-center'>
                                    424.1 K
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    2,06,07,896
                                </td>


                                {/* <td>
                                $100.11M - $250.30M
                            </td> */}

                                <td className=''>
                                    <i class="fa-brands fa-google-play mx-2"></i>

                                    <i class="fa fa-apple"></i>
                                </td>

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row '>
                                        <div className='my-2 mt-3 '>
                                            <span className='plan_categories'>
                                                Arts
                                            </span>

                                            <span className='plan_categories'>
                                                Movies
                                            </span>
                                        </div>

                                        <span className='plan_categories'>
                                            +2 More...
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center pe-5'>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />


                                        <div className='d-flex flex-row text-center '>
                                            <div className='d-flex flex-column text-center '>
                                                <label style={{ fontSize: '18px' }}>
                                                    <b>PUBG </b>
                                                </label>

                                                <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                    Developer
                                                </label>
                                            </div> &nbsp; &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>
                                        </div>


                                    </div>
                                </td>
                                <td className='text-center'>
                                    424.1 K
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    2,06,07,896
                                </td>


                                {/* <td>
                                $100.11M - $250.30M
                            </td> */}

                                <td className=''>
                                    <i class="fa-brands fa-google-play mx-2"></i>

                                    <i class="fa fa-apple"></i>
                                </td>

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row '>
                                        <div className='my-2 mt-3 '>
                                            <span className='plan_categories'>
                                                Arts
                                            </span>

                                            <span className='plan_categories'>
                                                Movies
                                            </span>
                                        </div>

                                        <span className='plan_categories'>
                                            +2 More...
                                        </span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td className='text-center pe-5'>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />


                                        <div className='d-flex flex-row text-center '>
                                            <div className='d-flex flex-column text-center '>
                                                <label style={{ fontSize: '18px' }}>
                                                    <b>PUBG </b>
                                                </label>

                                                <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                    Developer
                                                </label>
                                            </div> &nbsp; &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>
                                        </div>


                                    </div>
                                </td>
                                <td className='text-center'>
                                    424.1 K
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    2,06,07,896
                                </td>


                                {/* <td>
                                $100.11M - $250.30M
                            </td> */}

                                <td className=''>
                                    <i class="fa-brands fa-google-play mx-2"></i>

                                    <i class="fa fa-apple"></i>
                                </td>

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row '>
                                        <div className='my-2 mt-3 '>
                                            <span className='plan_categories'>
                                                Arts
                                            </span>

                                            <span className='plan_categories'>
                                                Movies
                                            </span>
                                        </div>

                                        <span className='plan_categories'>
                                            +2 More...
                                        </span>
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>

 
                    <div class="bg-text text-center Glassy" onClick={showPremium}>
                        <img src={require('../../../../Imagez/Dashboard/All/lock.png')} width={100} />
                        <h5 style={{ "font-size": '20px', "marginTop": "1rem" }}>Games list Is limited</h5>
                    </div>




                </div>

            </div>



        </>

    )
}

export default BrandGames