import React, { useState } from 'react'

export default function LocationDrop() {

    const [openCityDrop, setCityDrop] = useState(false);

    const [selectedCity, setSelelctedCity] = useState('Location')
    return (
        <div>
            <button className={openCityDrop ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => { setCityDrop(!openCityDrop) }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{ "fontWeight": "700", "fontSize": "14px" }}>
                        {selectedCity}
                    </label>
                    &nbsp;
                    &nbsp;
                    {
                        openCityDrop
                            ?
                            <label className='d-flex align-items-center'>
                                <i className="fa fa-angle-up"></i>
                            </label>
                            :
                            <label className='d-flex align-items-center'>
                                <i className="fa fa-angle-down"></i>
                            </label>

                    }
                </div>
            </button>

            {
                openCityDrop
                    ?
                    <div className='location_drop p-4 mt-1' style={{ right: "170px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                        <label>
                            <b> Select Country</b>
                        </label>

                        <div className='d-flex justify-content-around mt-3'>
                            <div className='country_radio'>
                                <input type='radio' />
                                <label>
                                    India
                                </label>
                            </div>

                            <div className='country_radio'>
                                <input type='radio' />
                                <label>
                                    Indonesia
                                </label>
                            </div>
                        </div>

                        <div className='d-flex flex-column city_search_section'>
                            <label>
                                State/ City
                            </label>

                            <div className='city_search'>
                                <input type="text" />
                                <i className='fa fa-search' />
                            </div>

                            <div className='mt-4'>
                                <button className='btn platform_btn'>
                                    Delhi
                                </button>
                                <button className='btn platform_btn'>
                                    Mumbai
                                </button>
                            </div>
                        </div>

                        <div className='loaction_footer mt-4'>
                            <button className='btn'>
                                Clear
                            </button>

                            <button className='btn'>
                                Apply Filters
                            </button>
                        </div>

                    </div>
                    :
                    null
            }
        </div>
    )
}
