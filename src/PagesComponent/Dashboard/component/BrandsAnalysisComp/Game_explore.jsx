import React from 'react'
import { useState } from 'react'

const Game_explore = () => {
    const [active, setActive] = useState('Latest_video')

    return (
        <div className='py-5 pt-2'>
            {/* Game Cards section  */}
            {/* <div className='row  mt-2  '></div> */}


            {/* Game details  */}
            <div className='row   mt-2  '>

                <div className=' col-lg-9  '>
                    <div className='monthly_report_section '>
                        <div className=''>
                            {/* 1  */}
                            <section className='mt-1'>
                                <div className='d-flex flex-column mx-2'>
                                    <label style={{ fontSize: '18px', "fontWeight": "600" }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>
                            </section>

                            {/* 2  */}
                            <section className='mt-4'>
                                <table className='brands_reports_table '>
                                    <tr>
                                        <td>
                                            <div>
                                                Youtube mentions
                                            </div>

                                            <div>
                                                N 1
                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                Metacritic rating
                                            </div>

                                            <div>
                                                N 83
                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                Rating in Arcade
                                            </div>

                                            <div>
                                                N 3
                                            </div>
                                        </td>

                                        <td>
                                            <div>
                                                Top 2009Views
                                            </div>

                                            <div>
                                                N 4
                                            </div>
                                        </td>



                                    </tr>
                                </table>
                            </section>

                            {/* 3 */}
                            <section className='mt-3'>
                                <div className='row'>


                                    <div className='col-lg-6'>
                                        <div className='d-flex flex-column'>

                                            {/* ##  */}
                                            <section className='mb-3'>
                                                <div className='d-flex flex-column mx-2'>

                                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                        Genre
                                                    </label>

                                                    <label style={{ fontSize: '18px', "fontWeight": "600" }}>
                                                        Action, Simulation, Arcade
                                                    </label>


                                                </div>
                                            </section>
                                            {/* ##  */}
                                            <section className='mb-3'>
                                                <div className='d-flex flex-column mx-2'>

                                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                        Official site
                                                    </label>

                                                    <label style={{ fontSize: '18px', "fontWeight": "600" }}>
                                                        https://classic.minicraft.net/
                                                    </label>


                                                </div>
                                            </section>
                                            {/* ##  */}
                                            <section className='mb-3'>
                                                <div className='d-flex flex-column mx-2'>

                                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                        Publisher
                                                    </label>

                                                    <label style={{ fontSize: '18px', "fontWeight": "600" }}>
                                                        Microsoft Studios
                                                    </label>


                                                </div>
                                            </section>


                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='d-flex flex-column'>


                                            {/* ##  */}
                                            <section className='mb-3'>
                                                <div className='d-flex flex-column mx-2'>

                                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                        Developers
                                                    </label>

                                                    <label style={{ fontSize: '18px', "fontWeight": "600" }}>
                                                        Mojang, 4J Studios
                                                    </label>


                                                </div>
                                            </section>
                                            {/* ##  */}
                                            <section className='mb-3'>
                                                <div className='d-flex flex-column mx-2'>

                                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                        Published at
                                                    </label>

                                                    <label style={{ fontSize: '18px', "fontWeight": "600" }}>
                                                        2009-05-10
                                                    </label>


                                                </div>
                                            </section>
                                            {/* ##  */}
                                            <section className='mb-3'>
                                                <div className='d-flex flex-column mx-2'>

                                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                        Published at
                                                    </label>

                                                    <label style={{ fontSize: '18px', "fontWeight": "600" }}>
                                                        26 h.
                                                    </label>


                                                </div>
                                            </section>


                                        </div>
                                    </div>



                                </div>
                            </section>

                            {/* 4 */}
                            <section className='mt-2'>
                                <div className='row'>
                                    <div className='col-lg'>
                                        <div className='d-flex flex-column mx-2'>  <label style={{ fontSize: '12px', color: '#7E7E7E' }}> Platforms </label></div>
                                        {/* ##1row## */}
                                        <div className='d-flex flex-row justify-content-between    mt-2 ms-2 mb-3'>

                                            <div className='text-start w-100'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Android </label>

                                            </div>
                                            <div className='text-start w-100'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> PlayStation Vita </label>

                                            </div>
                                            <div className='text-start w-100'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> PlayStation 4 </label>

                                            </div>
                                            <div className='text-start w-100'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> PlayStation 3 </label>

                                            </div>
                                            <div className='text-start w-100'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Xbox 360 </label>

                                            </div>
                                            <div className='text-start w-100'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Nintendo 3DS </label>

                                            </div>
                                        </div>

                                        {/* ##2row## */}
                                        <div className='d-flex flex-row justify-content-between mt-2 ms-1 mb-3 '>

                                            <div className='text-start w-100 ps-1'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> macOS </label>

                                            </div>
                                            <div className='text-start w-100 pe-'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Windows </label>

                                            </div>
                                            <div className='text-start w-100 pe-'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> iOS </label>

                                            </div>
                                            <div className='text-start w-100 pe-'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Wii U </label>

                                            </div>
                                            <div className='text-start w-100 pe-'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Xbox One </label>

                                            </div>
                                            <div className='text-start w-100 pe-'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Xbox One </label>
                                            </div>
                                            <div className='text-start w-100 pe-1'>
                                                <i class='bx bxl-play-store' style={{ fontSize: '18px', color: '#7E7E7E' }}></i> &nbsp;
                                                <label style={{ fontSize: '16px', "fontWeight": "600" }}> Nintendo Switch </label>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 5 */}
                            <section className='mt-3'>
                                <div className='row'>
                                    <div className='col-lg'>
                                        <div className='d-flex flex-column mx-2'>  <label style={{ fontSize: '12px', color: '#7E7E7E' }}> Tags </label>
                                            <div className='d-flex flex-row justify-content-between  mt-2 mb-3'>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> Multiplayer </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> Sandbox </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> Crafting </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> Building </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> 3D </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> vr mod </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> Open-world </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> cube </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> Moddling </label>
                                                </div>


                                                <div className='text-start '>
                                                    <label className='p-2' style={{ fontSize: '12px', "fontWeight": "600", "background": "#EFE5FF", "borderRadius": "3px" }}> Procedural-Generation </label>
                                                </div>







                                            </div>
                                        </div>
                                    </div>
                                </div>





                            </section>

                            <section>
                                <div className='d-flex mb-3 ms-2' style={{ "borderTop": "1px solid #C4C4C4" }} >
                                    <label className='mt-2  pt-1' style={{ "fontWeight": "600", "fontSize": "14px" }}>  One of the most popular games of the 2010s, Minecraft allows you to rebuild the environment around you. The world of the game is open, infinitely wide, and procedurally generated. It is composed of small 3D cubes that represent specific types of materials or terrain. The gameplay is centered on<span style={{ "cursor": "pointer", "color": "blue" }}>...More </span></label>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>


                <div className=' col-lg-3  '>
                    <div className='monthly_report_section '>
                        <div className='d-flex mb-3'>
                            <label className='mt-2 ps-2' style={{ "cursor": "pointer", "fontWeight": "600", "fontSize": "14px" }}>  Other developers games</label>
                        </div>
                        <div className='d-flex flex-column'>


                            {/* ### */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>

                            </div>
                            {/* ### 2*/}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>
                            {/* ### */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>
                            {/* ### */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>
                            {/* ###5 */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>
                            {/* ### */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>
                            {/* ### */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>
                            {/* ### */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>
                            {/* ###10 */}
                            <div className='d-flex my-1 '>
                                <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '18px' }}>
                                        Grand Theft Auto V
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                        Action, Adventure
                                    </label>
                                </div>


                            </div>


                            {/*  */}
                            <div className='d-flex mt-1 '>
                                <label className='Xplore_Card_Pink mt-2 ps-2' style={{ "cursor": "pointer", "fontWeight": "600" }}>  View all 12 videos </label>
                            </div>



                        </div>
                    </div>
                </div>
            </div>


            {/* Report for 1 month  */}
            <div className='monthly_report_section row mt-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex flex-column month_labels'>
                        <label>
                            Report for 1 month
                        </label>

                        <label>
                            Reporting period: 07 July 2023 - 07 August 2023
                        </label>
                    </div>

                    <div className='d-flex'>
                        <div className='months_tabs_section'>
                            <button className='month_tabs active_month_tabs'>
                                1 month
                            </button>

                            <button className='month_tabs'>
                                3 month
                            </button>

                            <button className='month_tabs'>
                                6 month
                            </button>
                        </div>

                        <button className='mx-2 calender_btn'>
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                        </button>
                    </div>

                </div>

                {/* table of the content */}
                <div>
                    <table className='brands_reports_table'>
                        <tr>
                            <td>
                                <div>
                                    Influencers <span style={{ color: '#FF0000' }}>-19%</span>
                                </div>

                                <div>
                                    273
                                </div>
                            </td>

                            <td>
                                <div>
                                    Mentions <span style={{ color: '#FF0000' }}>-19%</span>
                                </div>

                                <div>
                                    566
                                </div>
                            </td>

                            <td>
                                <div>
                                    Ad. Mentions <span style={{ color: '#FF0000' }}>-19%</span>
                                </div>

                                <div>
                                    559
                                </div>
                            </td>

                            <td>
                                <div>
                                    Views <span style={{ color: '#FF0000' }}>-19%</span>
                                </div>

                                <div>
                                    30.65M
                                </div>
                            </td>

                            <td>
                                <div>
                                    Approx. budget <span style={{ color: '#FF0000' }}>-19%</span>
                                </div>

                                <div>
                                    $748.51k
                                </div>
                            </td>

                        </tr>
                    </table>
                </div>
            </div>



            {/* Mention dynamics on YouTube */}
            <div className='monthly_report_section row mt-3'>
                <div className='col-lg-4'>
                    <label className='Xplore_Card_Topic'>Mention dynamics on YouTube</label> &nbsp;
                    <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>
                    <div>

                        <span className='d-flex flex-row align-items-center '>
                            <section className='Xplore_rectab' />
                            <section className='d-flex flex-column ms-3' style={{ "borderLeft": "" }}>
                                <label className='three' style={{ "position": "relative", top: "32px" }}><p>Total views</p></label>
                                <label className='two' style={{ "position": "relative", top: "18px", "fontSize": "2.375rem" }}><p>30.65M</p></label> &nbsp;
                            </section>
                        </span>
                        <span className='d-flex flex-row align-items-center '>
                            <section className='Xplore_rectag' />
                            <section className='d-flex flex-column ms-3' style={{ "borderLeft": "" }}>
                                <label className='three' style={{ "position": "relative", top: "30px" }}><p>Video</p></label>
                                <label className='two' style={{ "position": "relative", top: "20px" }}><p style={{ "fontSize": "2.375rem" }}>566</p></label> &nbsp;
                            </section>
                        </span>





                    </div>
                </div>

                <div className='col-lg-8'>
                    <img src={require('../../../../Imagez/Dashboard/All/chart.png')} className='my-5' width={800} />
                </div>
            </div>


            {/* Mention Geography  */}
            <div className='monthly_report_section row mt-3 '>
                <div className='col-lg-4'>
                    <label className='Xplore_Card_Topic'>Mention Geography </label> &nbsp;
                    <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>


                    <div>

                    </div>
                </div>

                <div className='col-lg-8  text-center'>
                    <img className='' src={require('../../../../Imagez/Dashboard/All/map.png')} width={700} />
                </div>
            </div>


            {/* Mention Calender  |  Distribution of publications by day     */}
            <div className='row  mt-2  '>

                <div className=' col-lg-6  '>
                    <div className='monthly_report_section '>
                        <div className=''>
                            <label className='Xplore_Card_Topic'> Mention Calender </label> &nbsp;
                            <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>
                        </div>

                        <div className='mb-3 mt-5 text-center'>
                            <img className='' src={require('../../../../Imagez/Dashboard/All/Seatz.png')} width={600} />
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 '>
                    <div className='monthly_report_section '>
                        <div className=' '>
                            <label> Distribution of publications by day  </label> &nbsp;
                            <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>
                        </div>


                        <div className='d-flex flex-row justify-content-between' >
                            {/* table  */}
                            <section className='text-start'>
                                <table className='brands_reports_table d-flex flex-row' >
                                    <tr className='px-3'>
                                        <td className='pe-4'>
                                            <div>
                                                Mentions per day
                                            </div>

                                            <div>
                                                0.19
                                            </div>
                                        </td>

                                        <td className='ps-4'>
                                            <div>
                                                Ads per day
                                            </div>

                                            <div>
                                                17.38
                                            </div>
                                        </td>

                                    </tr>
                                </table>
                            </section>
                            {/* Circle pointers */}
                            <section>
                                <section>  <section className='Xplore_Round1' /><label className='Xplore_Pie'> Mentions      </label>  <label> </label>    </section>
                                <section><section className='Xplore_Round4' /><label className='Xplore_Pie'> Ad Mentions      </label>  <label> </label>    </section>

                            </section>



                        </div>

                        <div className=' my-5 text-center'>
                            <img className='' src={require('../../../../Imagez/Dashboard/All/BarGraph1.png')} width={600} />
                        </div>



                    </div>
                </div>

            </div>


            {/* Influencer Category  |   */}
            <div className='row  mt-2  '>
                <label className='Xplore_Pie mt-4 ps-3' style={{ "fontSize": "1.125rem", "fontWeight": "600" }}> Influencer Portrait  </label>

                <div className=' col-lg-6  '>
                    <div className='monthly_report_section '>
                        <div className=''>
                            <label className='Xplore_Card_Topic'>   Influencer Category  </label> &nbsp;
                            <i class='bx bx-info-circle' style={{ "position": "relative", "top": " 3px" }}></i>
                        </div>

                        <section className='d-flex flex-row justify-content-'>
                            <div className='my-5  mx-5 text-start'>
                                <img className='' src={require('../../../../Imagez/Dashboard/All/Pie3Chart1.png')} width={200} />
                            </div>

                            <div className=' mx-5 mt-5 d-flex flex-column'>
                                <section>  <section className='Xplore_Round1' /><label className='Xplore_Pie'> Gaming    <span className='Xplore_Pie2'>127 influencers</span>  </label>  <label> </label>    </section>
                                <section><div className='Xplore_Round2' /><label className='Xplore_Pie'> Entertainment    <span className='Xplore_Pie2'>127 influencers</span>  </label>  <label> </label>    </section>
                                <section><div className='Xplore_Round3' /><label className='Xplore_Pie'> People & Blogs    <span className='Xplore_Pie2'>127 influencers</span>  </label>  <label> </label>    </section>
                                <section><div className='Xplore_Round4' /><label className='Xplore_Pie'> Comedy    <span className='Xplore_Pie2'>127 influencers</span>  </label>  <label> </label>    </section>
                                <section><div className='Xplore_Round5' /><label className='Xplore_Pie'> Other    <span className='Xplore_Pie2'>127 influencers</span>  </label>  <label> </label>    </section>

                            </div>
                        </section>

                        <div className=''>
                            <label className='Xplore_Card_Pink'>   View all 12 categories  </label>
                        </div>
                    </div>
                </div>

                <div className='col-lg-6 '>
                    <div className='row '>
                        {/* 1 */}
                        <div className=' col-lg-6  '><div className=' monthly_report_section d-flex flex-column text-start'>

                            <label className='one'>   Average Views  </label>
                            <label className='two'>   141K  </label> &nbsp;
                            <span>
                                <label className=' three'>   Median  </label>&nbsp; &nbsp;
                                <label className=' four'>   54 537  </label> &nbsp;
                            </span>
                        </div>
                        </div>


                        {/* 2 */}
                        <div className=' col-lg-6  '><div className=' monthly_report_section d-flex flex-column text-start'>

                            <label className='one'>   Average Subscribers  </label>
                            <label className='two'>   141K  </label> &nbsp;
                            <span>
                                <label className='my- three'>   Median  </label>&nbsp; &nbsp;
                                <label className=' four'>   54 537  </label> &nbsp;
                            </span>
                        </div>
                        </div>

                        {/* 3  */}
                        <div className=' col-lg-6  '><div className=' monthly_report_section d-flex flex-column text-start'>

                            <label style={{ "fontSize": "", "fontWeight": "" }} className='one'>  Average ER%  </label>
                            <label style={{ "fontSize": "", "fontWeight": "" }} className='my- two'>   141K  </label> &nbsp;
                            <span>

                                <label style={{ "fontSize": "", "fontWeight": "", "color": "#7E7E7E" }} className='my- three'>   Median  </label>&nbsp; &nbsp;
                                <label style={{ "fontSize": "", "fontWeight": "" }} className='four'>   54 537  </label> &nbsp;
                            </span>
                        </div>
                        </div>
                        {/* 4 */}
                        <div className=' col-lg-6  '><div className=' monthly_report_section d-flex flex-column text-start'>

                            <label style={{ "fontSize": "", "fontWeight": "" }} className='one'>  Average Price Per Influencer </label>
                            <label style={{ "fontSize": "", "fontWeight": "" }} className='my- two'>   141K  </label> &nbsp;
                            <span>

                                <label style={{ "fontSize": "", "fontWeight": "", "color": "#7E7E7E" }} className='my- three'>   Median  </label>&nbsp; &nbsp;
                                <label style={{ "fontSize": "", "fontWeight": "" }} className='four'>   54 537  </label> &nbsp;
                            </span>
                        </div>
                        </div>
                    </div>
                </div>

            </div>



            {/* Product Rating */}
            <div className='row  mt-2  '>
                <label className='Xplore_Pie mt-4 ps-3' style={{ "fontSize": "1.125rem", "fontWeight": "600" }}> Product Rating</label>

                <div className='brands_features mt-3'>

                    <div className='brands_features_box'>
                        <div className='d-flex justify-content-between'>
                            <img src={require('../../../../Imagez/Dashboard/All/heroicons_currency-rupee.png')} height={40} width={40} />
                            <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                ₹10M
                            </label>
                        </div>

                        <div className='mt-3'>
                            <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                By Budget
                            </label>
                        </div>

                    </div>

                    <div className='brands_features_box'>
                        <div className='d-flex justify-content-between'>
                            <img src={require('../../../../Imagez/Dashboard/All/Play_Vector.png')} height={40} width={40} />
                            <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                10
                            </label>
                        </div>

                        <div className='mt-3'>
                            <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                By Mentions
                            </label>
                        </div>

                    </div>

                    <div className='brands_features_box'>
                        <div className='d-flex justify-content-between'>
                            <img src={require('../../../../Imagez/Dashboard/All/Play_Vector.png')} height={40} width={40} />
                            <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                20
                            </label>
                        </div>

                        <div className='mt-3'>
                            <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                By Mentions
                            </label>
                        </div>

                    </div>

                    <div className='brands_features_box'>
                        <div className='d-flex justify-content-between'>
                            <img src={require('../../../../Imagez/Dashboard/All/solar_user-broken.png')} height={40} width={40} />
                            <label style={{ fontSize: '26px', fontWeight: 'bold' }}>
                                30
                            </label>
                        </div>

                        <div className='mt-3'>
                            <label style={{ fontSize: '18px', fontWeight: 'bold' }}>
                                By Influencers
                            </label>
                        </div>

                    </div>

                </div>

            </div>



            {/* Publications examples */}
            <div className='row  mt-2  '>
                <label className='Xplore_Pie mt-4 ps-3' style={{ "fontSize": "1.125rem", "fontWeight": "600" }}> Publications examples</label>

                <table className='application_table mt-3 bg-white'>
                    <thead>
                        <tr>

                            <th>
                                Influencer
                            </th>

                            <th>
                                Subscribers
                            </th>

                            <th>
                                Views
                            </th>

                            <th>
                                The Last Video
                            </th>

                            <th>
                                Broadcast Language
                            </th>

                            <th>
                                Price
                            </th>

                            <th>
                                Number
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <section className='d-flex ps-4'>
                                    <input type='checkbox' />

                                    <div className='d-flex  my-4 ps-3'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex flex-column mx-4'>
                                            <label style={{ fontSize: '18px' }}>
                                                Guru
                                            </label>

                                            <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                🇮🇳 India
                                            </label>
                                        </div>

                                        <div>
                                            <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                        </div>
                                    </div>
                                </section>

                            </td>


                            <td>
                                34.5k
                            </td>

                            <td>
                                2.72 k
                            </td>

                            <td>
                                06.08.2023
                            </td>

                            <td>
                                English
                            </td>

                            <td>
                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '16px' }}>
                                        $45.57 - $120.64
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>

                                        $15 - $45
                                    </label>
                                </div>

                            </td>

                            <td className=''>
                                6658
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <section className='d-flex ps-4'>
                                    <input type='checkbox' />

                                    <div className='d-flex  my-4 ps-3'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex flex-column mx-4'>
                                            <label style={{ fontSize: '18px' }}>
                                                Guru
                                            </label>

                                            <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                🇮🇳 India
                                            </label>
                                        </div>

                                        <div>
                                            <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                        </div>
                                    </div>
                                </section>

                            </td>


                            <td>
                                34.5k
                            </td>

                            <td>
                                2.72 k
                            </td>

                            <td>
                                06.08.2023
                            </td>

                            <td>
                                English
                            </td>

                            <td>
                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '16px' }}>
                                        $45.57 - $120.64
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>

                                        $15 - $45
                                    </label>
                                </div>

                            </td>

                            <td className=''>
                                6658
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <section className='d-flex ps-4'>
                                    <input type='checkbox' />

                                    <div className='d-flex  my-4 ps-3'>
                                        <img src={require('../../../../Imagez/Dashboard/All/camp_user.png')} width={50} />

                                        <div className='d-flex flex-column mx-4'>
                                            <label style={{ fontSize: '18px' }}>
                                                Guru
                                            </label>

                                            <label style={{ fontSize: '12px', color: '#7E7E7E' }}>
                                                🇮🇳 India
                                            </label>
                                        </div>

                                        <div>
                                            <img src={require('../../../../Imagez/Dashboard/All/mdi_approve.png')} />
                                        </div>
                                    </div>
                                </section>

                            </td>


                            <td>
                                34.5k
                            </td>

                            <td>
                                2.72 k
                            </td>

                            <td>
                                06.08.2023
                            </td>

                            <td>
                                English
                            </td>

                            <td>
                                <div className='d-flex flex-column mx-4'>
                                    <label style={{ fontSize: '16px' }}>
                                        $45.57 - $120.64
                                    </label>

                                    <label style={{ fontSize: '12px', color: '#7E7E7E' }}>

                                        $15 - $45
                                    </label>
                                </div>

                            </td>

                            <td className=''>
                                6658
                            </td>
                        </tr>




                        <tr>
                            <td>
                                <label className='Xplore_Card_Pink my-2' style={{ "cursor": "pointer", "fontWeight": "600" }}>  View all 1000 influencer </label>
                            </td>
                        </tr>


                    </tbody>

                </table>

            </div>



            {/* Recognize Domains     */}
            <div className='row  mt-2  '>
                <label className='Xplore_Pie mt-4 ps-3' style={{ "fontSize": "1.125rem", "fontWeight": "600" }}> Publications examples</label>

                <div className=' bg-light  '>

                    {/* Route button  */}
                    <div className='mt-2'>
                        <button onClick={() => { setActive('Latest_video') }} className={active == 'Latest_video' ? 'tabs_btn  brand_active_tab' : 'tabs_btn  '}>
                            Latest video
                        </button>

                        <button onClick={() => { setActive('popular_video') }} className={active == 'popular_video' ? 'tabs_btn  brand_active_tab' : 'tabs_btn '}>
                            Most popular video
                        </button>


                    </div>
                    {/* videos row  */}
                    <div className=' row mt-4 ms-2'>
                        <div className='col-lg-3'>
                            <div className=''>
                                <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={280} />
                            </div>
                            <div>
                                Always Take Calculated Risk | Sandeep Maheshwari | Hindi
                            </div>

                            <div>
                                <button className='btn text-secondary'>
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-thumbs-up"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                    7.9 K
                                </button>
                            </div>
                        </div>


                        <div className='col-lg-3'>
                            <div>
                                <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={280} />
                            </div>

                            <div>
                                Always Take Calculated Risk | Sandeep Maheshwari | Hindi
                            </div>

                            <div>
                                <button className='btn text-secondary'>
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-thumbs-up"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                    7.9 K
                                </button>
                            </div>
                        </div>



                        <div className='col-lg-3'>
                            <div>
                                <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={280} />
                            </div>
                            <div>
                                Always Take Calculated Risk | Sandeep Maheshwari | Hindi
                            </div>

                            <div>
                                <button className='btn text-secondary'>
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-thumbs-up"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                    7.9 K
                                </button>
                            </div>
                        </div>



                        <div className='col-lg-3'>
                            <div>
                                <img src={require('../../../../Imagez/Dashboard/All/blank.png')} style={{ "borderRadius": "15px" }} width={280} />
                            </div>
                            <div>
                                Always Take Calculated Risk | Sandeep Maheshwari | Hindi
                            </div>

                            <div>
                                <button className='btn text-secondary'>
                                    <i class="fa fa-play-circle" aria-hidden="true"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-thumbs-up"></i>
                                    1.2 M
                                </button>

                                <button className='btn text-secondary'>
                                    <i class="fa fa-comment" aria-hidden="true"></i>
                                    7.9 K
                                </button>
                            </div>
                        </div>


                        <label className='Xplore_Card_Pink mt-3 mb-4' style={{ "cursor": "pointer", "fontWeight": "600" }}>  View all 12 videos </label>

                    </div>



                </div>
            </div>



        </div>
    )
}

export default Game_explore