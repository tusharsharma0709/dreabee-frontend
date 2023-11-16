import React from 'react'

export default function Video_analysis() {
    return (
        <div className='bg-light rounded p-3 mt-3'>
            {/* search box */}
            <div className='d-flex flex-content-between align-items-center w-100'>
                <div className='brand_search'>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type='text' />
                </div>

                <div className='mx-3'>
                    <button className='brand_filter_btn'>
                        Filters
                    </button>
                </div>
            </div>

            {/* Filter section */}
            <div className='d-flex filter_select_option mt-3'>
                <select className='active_search_filter'>
                    <option>
                        Views
                    </option>
                </select>

                <select>
                    <option>
                        Subscribers
                    </option>
                </select>

                <select>
                    <option>
                        Publication Date
                    </option>
                </select>

                <select>
                    <option>
                        Price $
                    </option>
                </select>

                <select>
                    <option>
                        Influencers Country
                    </option>
                </select>

                <select>
                    <option>
                        Broadcast Language
                    </option>
                </select>

                <select>
                    <option>
                        Video Type
                    </option>
                </select>
            </div>

            <div className='row mt-4'>
                <div className='col-lg-3'>
                    <div>
                        <img src={require('../../../Imagez/Dashboard/All/blank.png')} width={250} />
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
                        </button >

                        <button className='btn text-secondary'>
                            <i class="fa fa-comment" aria-hidden="true"></i>
                            7.9 K
                        </button>
                    </div>
                </div>

                <div className='col-lg-3'>
                    <div>
                        <img src={require('../../../Imagez/Dashboard/All/blank.png')} width={250} />
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
                        </button >

                        <button className='btn text-secondary'>
                            <i class="fa fa-comment" aria-hidden="true"></i>
                            7.9 K
                        </button>
                    </div>
                </div>

                <div className='col-lg-3'>
                    <div>
                        <img src={require('../../../Imagez/Dashboard/All/blank.png')} width={250} />
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
                        </button >

                        <button className='btn text-secondary'>
                            <i class="fa fa-comment" aria-hidden="true"></i>
                            7.9 K
                        </button>
                    </div>
                </div>

                <div className='col-lg-3'>
                    <div>
                        <img src={require('../../../Imagez/Dashboard/All/blank.png')} width={250} />
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
                        </button >

                        <button className='btn text-secondary'>
                            <i class="fa fa-comment" aria-hidden="true"></i>
                            7.9 K
                        </button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
