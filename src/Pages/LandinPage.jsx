import React from 'react'

import LandinSec1 from '../PagesComponent/Landinpg/LandinSec1'
import LandinSec2 from '../PagesComponent/Landinpg/LandinSec2'
import LandinFoot from '../PagesComponent/Landinpg/LandinFoot'

export const LandinPage = () => {
    return (
        <>
           
                <div className='conatiner-fluid'>
                    <LandinSec1 />
                    <LandinSec2 />
                    <LandinFoot />
                </div>
           
        </>
    )
}
