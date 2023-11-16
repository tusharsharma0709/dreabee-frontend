import React, { useState } from 'react'
import Social_dropdown from './component/social-dropdown';
import LocationDrop from './component/location-dropdown';
import { Modal } from 'react-bootstrap-v5';


export default function YoutubeSearch() {
    const [planModal, setplanModal] = useState(false);
    const [youtubeActive, setYoutubeactive] = useState('channel');

    return (
        <div className='row'>
            <div className='col-lg-9'>
                {/* Search Field */}
                <div className='search_section'>
                    <div style={{ width: '75%' }}>
                        <span>
                            <i class="fa fa-search fa-lg"></i>
                        </span>

                        <input type="text" />
                    </div>

                    <div className='d-flex align-items-center'>
                        <div className='mx-2'>
                            <Social_dropdown />
                        </div>
                        <input type="checkbox" className='checkbox_section mx-2' />

                        <label className='labels'>Register influencers</label>

                        <label class="switchSmall2 m5">
                            <input type="checkbox" />
                            <small></small>
                        </label>
                    </div>
                </div>

                {/* Youtube Search filter */}
                <div className='mt-3 d-flex justify-content-between'>
                    <div className='d-flex'>
                        <button className={youtubeActive == 'channel' ? 'channel_tab active_channel_tab' : 'channel_tab'} onClick={() => { setYoutubeactive('channel') }}>
                            Channel
                        </button>

                        <button className={youtubeActive == 'videos' ? 'channel_tab active_channel_tab' : 'channel_tab'} onClick={() => { setYoutubeactive('videos') }}>
                            Videos
                        </button>
                    </div>

                    <div className='d-flex youtube_filter_head_label justify-content-between'>
                        <label>
                            About 2 channels for "cinema landing page" (filtered)
                        </label>

                        <label>
                            Searched among <span style={{ color: '#C83B93' }}>986,223,232</span> Youtube video is global.
                        </label>
                    </div>
                </div>

                <div className='youtube_search_section'>
                    <table>
                        <tr>
                            <td>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        Views
                                    </div>
                                    <i class="fa fa-info-circle"></i>
                                </label>
                            </td>

                            <td>
                                <button className='btn'>
                                    10k+
                                </button>
                            </td>

                            <td>
                                <button className='btn'>
                                    50k+
                                </button>
                            </td>

                            <td>
                                <button className='btn'>
                                    100k+
                                </button>
                            </td>

                            <td>
                                <button className='btn active_filter'>
                                    200k+
                                    <i class="fa fa-times fa-sm"></i>
                                </button>
                            </td>

                            <td>
                                <button className='btn'>
                                    500k+
                                </button>
                            </td>

                            <td>
                                <button className='btn'>
                                    1M+
                                </button>
                            </td>

                            <td>
                                <button className='btn'>
                                    2M+
                                </button>
                            </td>

                            <td colSpan={3}>
                                <div className='d-flex text-right'>
                                    <input type="text" placeholder='Min' />
                                    -
                                    <input type="text" placeholder='Max' />

                                    <button className='youtube_filter_btn'>
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        Duration
                                    </div>
                                    <i class="fa fa-info-circle"></i>
                                </label>
                            </td>

                            <td>
                                Short ( 60 second or less )
                            </td>

                            <td>
                                61 second+
                            </td>

                            <td>
                                3 minutes+
                            </td>

                            <td>
                                10 minutes+
                            </td>

                            <td>
                                1 hour+
                            </td>

                            <td colSpan={3}>
                                <div className='d-flex text-right'>
                                    <input type="text" placeholder='Min ( Second )' />
                                    -
                                    <input type="text" placeholder='Max ( Second )' />

                                    <button className='youtube_filter_btn'>
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        Type
                                    </div>
                                    <i class="fa fa-info-circle"></i>
                                </label>
                            </td>

                            <td>
                                Upload
                            </td>

                            <td>
                                Live Stream
                            </td>

                            <td>
                                Premiere
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        Advertisement
                                    </div>
                                    <i class="fa fa-info-circle"></i>
                                </label>
                            </td>

                            <td>
                                Includes Paid Promotion
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        Super Chat
                                    </div>
                                    <i class="fa fa-info-circle"></i>
                                </label>
                            </td>

                            <td>
                                $100+
                            </td>

                            <td>
                                $1,000+
                            </td>

                            <td>
                                $5,000+
                            </td>

                            <td>
                                $10,000+
                            </td>

                            <td colSpan={3}>
                                <div className='d-flex'>
                                    <input type="text" placeholder='Min' />
                                    -
                                    <input type="text" placeholder='Max' />

                                    <button className='youtube_filter_btn'>
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>

                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        Publish Date
                                    </div>
                                    <i class="fa fa-info-circle"></i>
                                </label>
                            </td>

                            <td>
                                Past 24 hours
                            </td>

                            <td>
                                Past 7 days
                            </td>

                            <td>
                                Past 15 days
                            </td>

                            <td>
                                Past 30 days
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        More
                                    </div>
                                    <i class="fa fa-angle-down"></i>
                                </label>
                            </td>

                            <td colSpan={8} style={{ textAlign: 'right', backgroundColor: 'transparent' }}>
                                <label>
                                    Request a new filter
                                </label>
                            </td>
                        </tr>

                    </table>
                </div>

                <hr />

                <div className='d-flex'>
                    <div className='mx-3 cancel_filter'>
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </div>

                    <div>
                        <span className='filter_selected'>
                            View: 200k+
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
                {/* filter section */}
                <div className='mt-5 d-flex justify-content-between'>
                    <label className='labels mx-3' style={{ 'fontSize': '18px' }}>
                        17,110 Profile
                    </label>

                    <div className='plan_filter'>
                        <div className='mx-1'>
                            <Social_dropdown />
                        </div>

                        <div className='mx-1'>
                            <LocationDrop />
                        </div>


                        <div>
                            <select>
                                <option>Gender</option>
                            </select>
                        </div>

                        <div>
                            <select>
                                <option>Followers</option>
                            </select>
                        </div>

                        {
                            youtubeActive == 'channel'
                                ?
                                <>
                                    <div>
                                        <select>
                                            <option>Drebee Score</option>
                                        </select>
                                    </div>

                                    <div>
                                        <select>
                                            <option>More</option>
                                        </select>
                                    </div>
                                </>
                                :
                                null
                        }

                    </div>
                </div>

                {
                    youtubeActive == 'channel'
                        ?
                        <>
                            {/* table section */}
                            <div className='table-responsive'>
                                <table className='plan_table'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" className='checkbox_section mx-2' />
                                            </th>

                                            <th>
                                                Instagram Profile
                                            </th>

                                            {/* <th>
                                                Score <i class="fa fa-info-circle" aria-hidden="true"></i>
                                            </th> */}

                                            <th>
                                                Followers
                                            </th>

                                            <th>
                                                Avg Likes
                                            </th>

                                            <th>
                                                Avg Reel Views
                                            </th>

                                            <th>
                                                ER <i class="fa fa-info-circle" aria-hidden="true"></i>
                                            </th>

                                            <th>

                                            </th>

                                            <th>
                                                Categories
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="checkbox" className='checkbox_section mx-2' />
                                            </td>

                                            <td>
                                                <div className='d-flex' >
                                                    <img src={require('../../Imagez/Dashboard/All/camp_user.png')} width={40} height={40} />

                                                    <div style={{ textAlign: 'initial', marginLeft: '5px' }}>
                                                        <div>
                                                            <label>
                                                                Guru Randhawa
                                                            </label>
                                                            <img className='mx-2' src={require('../../Imagez/Dashboard/All/mdi_approve.png')} />
                                                        </div>

                                                        <label className='social_handle'>
                                                            gururandhawa
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* <td style={{ color: '#C83B93' }}>
                                                9.29
                                            </td> */}

                                            <td>
                                                34.2 M
                                            </td>

                                            <td>
                                                424.1 K
                                            </td>

                                            <td>
                                                1.8 M
                                            </td>

                                            <td>
                                                1.25 %
                                            </td>

                                            <td>
                                                <label>
                                                    Gurgaon
                                                </label>
                                            </td>

                                            <td className='categories_section'>
                                                <div className='categories_row' id="categories_row">
                                                    <div className='my-2'>
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

                                                <div className='d-flex justify-content-between categories_btn' id='categories_btn'>
                                                    <button className='invite_btn btn mx-2'>
                                                        <img src={require('../../Imagez/Dashboard/All/Invite.png')} className='mx-2' />
                                                        Add to list
                                                    </button>

                                                    <button className='other_btn btn mx-2'>
                                                        <img src={require('../../Imagez/Dashboard/All/₹.png')} />
                                                    </button>

                                                    <button className='other_btn btn mx-2'>
                                                        <img src={require('../../Imagez/Dashboard/All/graph.png')} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                        :
                        <>
                            {/* Youtube Video section */}
                            <div className='bg-light d-flex justify-content-between w-100 my-3 p-4 rounded'>
                                <div className='d-flex'>
                                    <div>
                                        <img className='border rounded' src={require('../../Imagez/Dashboard/All/blank.png')} width={200} height={150} />
                                    </div>

                                    <div className='mx-3 d-flex flex-column'>
                                        <div>
                                            <label className='font-weight-bold'>
                                                Always Take Calculated Risk | Sandeep Maheshwari | Hindi
                                            </label>
                                        </div>

                                        <div className='py-4'>
                                            <span className='hashtags rounded'>
                                                #Positive
                                            </span>

                                            <span className='hashtags rounded'>
                                                #Thinking
                                            </span>

                                            <span className='hashtags rounded'>
                                                #Positive
                                            </span>

                                            <span className='hashtags rounded'>
                                                #Thinking
                                            </span>
                                        </div>

                                        <div>
                                            <label>
                                                2023.06.03
                                            </label>
                                        </div>

                                        <div>
                                            <button className='btn text-secondary'>
                                                <i class="fa fa-play-circle" aria-hidden="true"></i>
                                                1.2 M
                                            </button>

                                            <button className='btn text-secondary'>
                                                <i class="fa fa-thumbs-up"></i>
                                                1.2 M
                                            </button >

                                            <button className='btn text-secondary'>
                                                <i class="fa fa-comment" aria-hidden="true"></i>
                                                7.9 K
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div>
                                        <img src={require('../../Imagez/Dashboard/All/camp_user.png')} width={100} />
                                    </div>

                                    <div>
                                        <label>
                                            Sandeep Maheshwari
                                        </label>
                                    </div>

                                    <label className='text-secondary'>
                                        <i class="fa fa-user mx-2" aria-hidden="true"></i>
                                        27,900,100
                                    </label>
                                </div>
                            </div>
                        </>

                }


            </div>

            <div className='col-lg-3 pt-3 m-0 add_plan_setion'>
                <label>
                    Kindly select a plan to<br /> add influencers
                </label>

                <div className='add_plans_inner'>
                    <button className='btn plan_add_btn' onClick={() => { setplanModal(true) }}>
                        <img src={require('../../Imagez/Dashboard/All/Invite.png')} />
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

                <div className='View_plan_section'>
                    <button className='View_plan_btn btn'>
                        View Plan
                    </button>
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
    )
}
