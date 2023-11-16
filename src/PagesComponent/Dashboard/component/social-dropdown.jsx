import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Social_dropdown({ style }) {

    const [openDrop, setDrop] = useState(false);

    const [selected, setSelelcted] = useState('Instagram');

    useEffect(() => {
        console.log(style)
    }, [])

    const navigate = useNavigate();

    const OpenInsta = () => {
        navigate("/Dreabee/Dashboard/Search")
    }
    const OpenYoutube = () => {
        // navigate("/Dreabee/Dashboard/search-youtube");
    }

   
    return (
        <div>
            <button style={style} className=' btn drop_box  py-1 mx-1 ' onClick={() => { setDrop(!openDrop) }}>
                <div style={{ display: "flex", alignItems: "center" ,"justifyContent":"center" }}>
                    <label>
                        {selected}
                    </label>

                    {
                        openDrop
                            ?
                            <label>
                                <i className="fa fa-angle-up"></i>
                            </label>
                            :
                            <label>
                                <i className="fa fa-angle-down"></i>
                            </label>

                    }
                </div>
            </button>

            {
                openDrop
                    ?
                    <ul className='social_drop_list inviBtnz mt-1'>
                        <li>
                            <button className='social_drop btn' onClick={() => { setSelelcted('Instagram'); setDrop(false); OpenInsta(); }}>
                                <img src={require('../../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                Instagram
                            </button>
                        </li>

                        <li>
                            <button className='social_drop btn' onClick={() => { setSelelcted('Youtube'); setDrop(false); OpenYoutube(); }}>
                                <img src={require('../../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                Youtube
                            </button>
                        </li>
                    </ul>


                    :
                    null
            }
        </div>
    )
}
