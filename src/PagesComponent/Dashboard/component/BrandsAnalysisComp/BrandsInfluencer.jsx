import React from 'react'

const BrandsInfluencer = () => {
    return (
        <div className='bg-light rounded px-3 pt-3 mt-3 mb-5 ' style={{ "paddingBottom": "15rem" }}>
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
                -
                {/* <select>
                    <option>
                        Video Type
                    </option>
                </select> */}
            </div>




            {/* Table Row Section */}
            <div>
                <table className='application_table mt-3'>
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


                        


                    </tbody>
                </table>



                {/* <div class="bg-image"></div> */}
                <div class="bg-text text-center   mb-4">
                    <img src={require('../../../../Imagez/Dashboard/All/lock.png')} width={100} />
                    <h5 style={{ "font-size": '20px', "marginTop": "1rem" }}>Apps list Is limited</h5>
                </div>

            </div>
        </div>
    )
}

export default BrandsInfluencer