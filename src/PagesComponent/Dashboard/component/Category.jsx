import React, { useState, useEffect } from 'react'

export default function Category({ style }) {
    const [openDropCat, setDropCat] = useState(false);

    const [selected, setSelelcted] = useState('All Category');

    useEffect(() => {
        console.log(style)
    }, [])

    return (
        <div>
            <button style={style} className={openDropCat ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => { setDropCat(!openDropCat) }}>
                <div style={{ display: "flex", alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                    <label>
                        {selected}
                    </label>
                    &nbsp;
                    &nbsp;
                    {
                        openDropCat
                            ?
                            <label className=' d-flex align-items-center'>
                                &nbsp; <i className="fa fa-angle-up"></i>
                            </label>
                            :
                            <label className=' d-flex align-items-center'>
                                &nbsp; <i className="fa fa-angle-down"></i>
                            </label>

                    }
                </div>
            </button>

            {
                openDropCat
                    ?
                    <section style={{ "height": "0px", "width": "0px" }}>
                        <ul className='dropDownz mt-1' style={{ right: '110px',width: "250px",  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                            <li>
                                <button className='text-start social_drop btn' onClick={() => { setSelelcted('Fitness'); setDropCat(false) }}>
                                    <img src={require('../../../Imagez/Dashboard/All/circle.png')} width={40} /> &nbsp;
                                    Fitness
                                </button>
                            </li>

                            <li>
                                <button className='text-start social_drop btn' onClick={() => { setSelelcted('Beauty'); setDropCat(false) }}>
                                    <img src={require('../../../Imagez/Dashboard/All/circle.png')} width={40} />  &nbsp;
                                    Beauty
                                </button>
                            </li>

                            <li>
                                <button className='text-start social_drop btn' onClick={() => { setSelelcted('Fashion'); setDropCat(false) }}>
                                    <img src={require('../../../Imagez/Dashboard/All/circle.png')} width={40} />  &nbsp;
                                    Fashion
                                </button>
                            </li>

                            <li>
                                <button className='text-start social_drop btn' onClick={() => { setSelelcted('Education'); setDropCat(false) }}>
                                    <img src={require('../../../Imagez/Dashboard/All/circle.png')} width={40} />  &nbsp;
                                    Education
                                </button>
                            </li>

                            <li>
                                <button className='text-start social_drop btn' onClick={() => { setSelelcted(' Arts & Entertainment'); setDropCat(false) }}>
                                    <img src={require('../../../Imagez/Dashboard/All/circle.png')} width={40} />  &nbsp;
                                    Arts & Entertainment
                                </button>
                            </li>

                            <li style={{ border: "none" }}>
                                <button className='text-start social_drop btn' onClick={() => { setSelelcted(' Family Partnering'); setDropCat(false) }}>
                                    <img src={require('../../../Imagez/Dashboard/All/circle.png')} width={40} />  &nbsp;
                                    Family Partnering
                                </button>
                            </li>



                        </ul>
                    </section>

                    :
                    null
            }
        </div>
    )
}
