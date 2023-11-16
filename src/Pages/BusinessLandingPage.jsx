import React from 'react'
import LandinNav from '../PagesComponent/Landinpg/LandinPg_Sub/LandinNav'
import NavBuss from '../PagesComponent/Business_LandingPg/NavBuss'
import BussLandinSec1 from '../PagesComponent/Business_LandingPg/BussLandinSec1'
import BussLandinSec2 from '../PagesComponent/Business_LandingPg/BussLandinSec2'

const BusinessLanding = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className="row" >
          <section style={{ "height": "140vh", "backgroundColor": "black" }}>
            <LandinNav />
            <NavBuss />
            <BussLandinSec1 />
          </section>
        </div>
        <div className="row h-25  " >
          <section style={{ "height": "1rem", "backgroundColor": "" }}>
            <BussLandinSec2 />
          </section>
        </div>
      </div>
    </>
  )
}

export default BusinessLanding