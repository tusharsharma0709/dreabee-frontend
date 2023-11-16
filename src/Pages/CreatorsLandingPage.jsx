import React from 'react'
import NavbarCreators from '../PagesComponent/Creators_LandingPg/NavbarCreators'
import CreatorsLandingSec1 from '../PagesComponent/Creators_LandingPg/CreatorsLandingSec1'
import CreatorsLandingSec2 from '../PagesComponent/Creators_LandingPg/CreatorsLandingSec2'

const CreatorsLandingPage = () => {


  return (
    <>
      <div className='container-fluid'>
        <div className="row" >
          <section style={{ "height": "100vh",width :"100vw"  , "backgroundColor": "black" }}>
            <NavbarCreators />
            <CreatorsLandingSec1 />
          </section>
        </div>
        <div className="row" >
          <section style={{ "height": "200vh", "backgroundColor": "" }}>
            <CreatorsLandingSec2 />
          </section>
        </div>
      </div>
    </>
  )
}

export default CreatorsLandingPage