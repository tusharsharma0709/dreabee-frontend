import React from 'react'
import { useNavigate } from 'react-router-dom';
import PremiumPopUp from '../PremiumPopUp';
import { useState } from 'react';

const BrandSites = () => {
    const navigate = useNavigate();
    const BranDet = () => {
        navigate('/Dreabee/Dashboard/BrandDetails');
    }


    const BrandDetailz = () => {
        navigate('/Dreabee/Dashboard/BrandDetails');
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
                            <PremiumPopUp/>
                        </section>
                    </>
                    : null

            }

            <div>
                <div className='brand_header'>
                    <i class="fa fa-arrow-left"></i>
                    <label>
                        Competitive Analysis “Brands”
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

                        <button onClick={BranDet} >
                            Book a Demo
                        </button>
                    </div>

                    <div className='col-lg-6'>
                        <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ objectFit: 'cover', width: '44vw' }} />

                    </div>
                </div>

                <div className='application_header d-flex justify-space-between  my-3'>


                    <h2>
                        Sites &nbsp;
                        <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>
                    </h2>

                    {/* <div className='me-2'>
                    <img className='mx-2' src={require('../../../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                    <label className='mx-2 pt-2'>
                        <b>Youtube</b>
                    </label>
                    <span>2.58M</span>
                </div> */}

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
                        <thead>
                            <tr>
                                <th>
                                    Sites
                                </th>

                                <th>
                                    Mentions
                                </th>

                                <th>
                                    Sponsored
                                </th>

                                <th>
                                    Influencers
                                </th>

                                <th>
                                    Advertising Budget
                                </th>

                                {/* <th>
                                Platform
                            </th> */}

                                <th>
                                    Categories
                                </th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr className=' Hovly' style={{ "cursor": "pointer" }} onClick={BrandDetailz}>
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex text-center align-items-center'>
                                            <label style={{ fontSize: '18px' }}>
                                                <b>amazon.com</b>
                                            </label>
                                            &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    34.2 k
                                </td>

                                <td>
                                    424.1 K
                                </td>

                                <td>
                                    $100.11M - $250.30M
                                </td>




                                {/* <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td> */}

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row'>
                                        <div className='my-2 mt-3'>
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
                            {/* ______ */}
                            <tr className=' Hovly' style={{ "cursor": "pointer" }} >
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex text-center align-items-center'>
                                            <label style={{ fontSize: '18px' }}>
                                                <b>amazon.com</b>
                                            </label>
                                            &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    34.2 k
                                </td>

                                <td>
                                    424.1 K
                                </td>

                                <td>
                                    $100.11M - $250.30M
                                </td>




                                {/* <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td> */}

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row'>
                                        <div className='my-2 mt-3'>
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
                            {/* ______ */}
                            <tr className=' Hovly' style={{ "cursor": "pointer" }} >
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex text-center align-items-center'>
                                            <label style={{ fontSize: '18px' }}>
                                                <b>amazon.com</b>
                                            </label>
                                            &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    34.2 k
                                </td>

                                <td>
                                    424.1 K
                                </td>

                                <td>
                                    $100.11M - $250.30M
                                </td>




                                {/* <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td> */}

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row'>
                                        <div className='my-2 mt-3'>
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
                            {/* ______ */}
                            <tr className=' Hovly' style={{ "cursor": "pointer" }} >
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex text-center align-items-center'>
                                            <label style={{ fontSize: '18px' }}>
                                                <b>amazon.com</b>
                                            </label>
                                            &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    34.2 k
                                </td>

                                <td>
                                    424.1 K
                                </td>

                                <td>
                                    $100.11M - $250.30M
                                </td>




                                {/* <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td> */}

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row'>
                                        <div className='my-2 mt-3'>
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
                            {/* ______ */}
                            <tr className='Hovly' style={{ "cursor": "pointer" }} >
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex text-center align-items-center'>
                                            <label style={{ fontSize: '18px' }}>
                                                <b>amazon.com</b>
                                            </label>
                                            &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    34.2 k
                                </td>

                                <td>
                                    424.1 K
                                </td>

                                <td>
                                    $100.11M - $250.30M
                                </td>




                                {/* <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td> */}

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row'>
                                        <div className='my-2 mt-3'>
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
                            {/* ______ */}
                            <tr className=' Hovly' style={{ "cursor": "pointer" }} >
                                <td>
                                    <div className='d-flex justify-content-around'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex text-center align-items-center'>
                                            <label style={{ fontSize: '18px' }}>
                                                <b>amazon.com</b>
                                            </label>
                                            &nbsp;
                                            <div>
                                                <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                            </div>


                                        </div>
                                    </div>
                                </td>

                                <td>
                                    34.5k
                                </td>

                                <td>
                                    34.2 k
                                </td>

                                <td>
                                    424.1 K
                                </td>

                                <td>
                                    $100.11M - $250.30M
                                </td>




                                {/* <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td> */}

                                <td className='d-flex justify-content-center'>
                                    <div className='categories_row'>
                                        <div className='my-2 mt-3'>
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
                            {/* ______ */}





                        </tbody>
                    </table>



                    {/* <div class="bg-image"></div> */}

                    <div class="bg-text Glassy text-center" onClick={showPremium}>
                        <img src={require('../../../../Imagez/Dashboard/All/lock.png')} width={100} />
                        <h6 style={{ "font-size": '20px', "marginTop": "1rem" }}>Sites list Is limited</h6>
                    </div>

                </div>

            </div>

        </>
    )
}

export default BrandSites