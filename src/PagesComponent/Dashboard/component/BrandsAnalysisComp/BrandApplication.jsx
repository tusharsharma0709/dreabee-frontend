import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function BrandApplication() {
    const navigate = useNavigate();
    const BranDet = () => {
        navigate('/Dreabee/Dashboard/BrandDetails');
    }
    return (
        <div>
            <div className='brand_header'>
                <i class="fa fa-arrow-left"></i>
                <label>
                    Competitive Analysis “Apps”
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





            <div className='application_header d-flex justify-space-between  mb-2'>


                <h2>
                    Applications &nbsp;
                    <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>

                </h2>

                <div className='me-2'>
                    <img className='mx-2 pt-' src={require('../../../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                    <label className='mx-2 pt-2'>
                        <b>Youtube</b>
                    </label>
                    <span>2.58M</span>
                </div>



            </div>

            <div>
                <table className='application_table'>
                    <thead>
                        <tr>
                            <th>
                                Application Name
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

                            <th>
                                Platform
                            </th>

                            <th>
                                Categories
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className='d-flex justify-content-around'>
                                    <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                    <div className='d-flex flex-column'>
                                        <label style={{ fontSize: '18px' }}>
                                            <b>PUBG</b>
                                        </label>

                                        <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                            Developer
                                        </label>
                                    </div>

                                    <div>
                                        <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
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

                            <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td>

                            <td className='d-flex justify-content-'>
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
                                        +2More..
                                    </span>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <div className='d-flex justify-content-around'>
                                    <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                    <div className='d-flex flex-column'>
                                        <label style={{ fontSize: '18px' }}>
                                            <b>PUBG</b>
                                        </label>

                                        <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                            Developer
                                        </label>
                                    </div>

                                    <div>
                                        <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
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

                            <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td>

                            <td>
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
                                        +2More..
                                    </span>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <div className='d-flex justify-content-around'>
                                    <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                    <div className='d-flex flex-column'>
                                        <label style={{ fontSize: '18px' }}>
                                            <b>PUBG</b>
                                        </label>

                                        <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                            Developer
                                        </label>
                                    </div>

                                    <div>
                                        <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
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

                            <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td>

                            <td>
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
                                        +2More..
                                    </span>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <div className='d-flex justify-content-around'>
                                    <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                    <div className='d-flex flex-column'>
                                        <label style={{ fontSize: '18px' }}>
                                            <b>PUBG</b>
                                        </label>

                                        <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                            Developer
                                        </label>
                                    </div>

                                    <div>
                                        <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
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

                            <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td>

                            <td>
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
                                        +2More..
                                    </span>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <div className='d-flex justify-content-around'>
                                    <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                    <div className='d-flex flex-column'>
                                        <label style={{ fontSize: '18px' }}>
                                            <b>PUBG</b>
                                        </label>

                                        <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                            Developer
                                        </label>
                                    </div>

                                    <div>
                                        <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
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

                            <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td>

                            <td>
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
                                        +2More..
                                    </span>
                                </div>
                            </td>
                        </tr>


                        <tr>
                            <td>
                                <div className='d-flex justify-content-around'>
                                    <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                    <div className='d-flex flex-column'>
                                        <label style={{ fontSize: '18px' }}>
                                            <b>PUBG</b>
                                        </label>

                                        <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                            Developer
                                        </label>
                                    </div>

                                    <div>
                                        <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
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

                            <td>
                                <i class="fa-brands fa-google-play mx-2"></i>

                                <i class="fa fa-apple"></i>
                            </td>

                            <td>
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
                                        +2More..
                                    </span>
                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>



                {/* <div class="bg-image"></div> */}
                <div class="bg-text text-center  mb-4">
                    <img src={require('../../../../Imagez/Dashboard/All/lock.png')} width={100} />
                    <h5 style={{ "font-size": '20px' ,"marginTop":"1rem" }}>Apps list Is limited</h5>
                </div>

            </div>

        </div>
    )
}
