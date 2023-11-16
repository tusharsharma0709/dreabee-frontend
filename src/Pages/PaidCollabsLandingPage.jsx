import React from 'react'
import LandinNav from '../PagesComponent/Landinpg/LandinPg_Sub/LandinNav'
import NavbarPaid from '../PagesComponent/Paid_Collabs_LandingPg/NavbarPaid'
import PaidLandingSec2 from '../PagesComponent/Paid_Collabs_LandingPg/PaidLandingSec2'
import PaidLandingSec1 from '../PagesComponent/Paid_Collabs_LandingPg/PaidLandingSec1'

const PaidCollabsLandingPage = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className="row" >
          <section style={{ "height": "120vh", "backgroundColor": "black" }}>
            <LandinNav />
            <NavbarPaid/>
            <PaidLandingSec1/>

          </section>
        </div>


        <div className="row" >
          <section style={{ "height": "200vh", "backgroundColor": "" }}>
            <PaidLandingSec2/>

          </section>



        </div>
      </div>
    </>
  )
}

export default PaidCollabsLandingPage