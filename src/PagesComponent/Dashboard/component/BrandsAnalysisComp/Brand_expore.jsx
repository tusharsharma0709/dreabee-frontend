import React from 'react'
import { useState } from 'react'

export default function Brand_explore() {
    const [active, setActive] = useState('Latest_video')

    return (
        <div className='py-5 pt-2'>
            {/*Brands Cards section  */}
            {/* <div className='row  mt-2  '></div> */}

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
