import React, { useState } from 'react'
import logo from "../../../Imagez/Common/logo.png"
import trapBox from '../../../Imagez/signIn_LogIn/Login_pattern2.png'

import SignUpHead from '../SignUp/SignUpHead';
import BrandsOtpFor from '../WithOtpForm/BrandsOtpFor';

const BrandLogINOtp = () => {

  return (
    <>
      <div className='conatiner-fluid'>


        <div className='' style={{ "height": "120vh", "backgroundColor": "black", "zIndex": "-5" }}>

          {/* Navbar  */}
          <div className=''>
            <SignUpHead />
          </div>


          <div className='row'>
            <section style={{ "marginTop": "-2rem" }}>
              <div className='col-md-6 text-center '><img src={logo} alt='img' style={{ "width": "136px", "marginLeft": "11rem", "position": "relative", "top": "-1rem" }} /></div><div className='col-md-6 '></div>
              <div className='col-md-12 mt-4'><h1 style={{ "fontWeight": "600", "fontSize": "42px", "color": "#FFFFFF", "paddingLeft": "14.5rem" }}>Welcome Back , Lets get in ..</h1></div>
            </section>
          </div>


          <div className='row ' style={{ "height": "1rem" }}>

            <div className=' col-md-6 d-flex justify-content-center' style={{ "height": "1rem" }}>
              <section style={{ "marginLeft": "15rem", "marginTop": "2rem" }}>
                <BrandsOtpFor />
              </section>

            </div>

            <div className='col-md-6' style={{ "height": "1rem" }}>

              {/* front card */}
              <section className='' style={{ "position": "relative", "top": "-3rem", "left": "5rem", "height": "1rem", "width": "5rem", "zIndex": "1" }}>
                <img src={trapBox} alt='trapBox' className='glassStick' style={{ "width": "38rem", "position": "" }} />
              </section>

              {/* backlight */}
              <section className='backGlow' style={{ "zIndex": "-2" }}>
                <section className='Ellipse4' style={{ "width": "13rem", "height": "13rem" }} />
                <section className='Ellipse3' style={{ "width": "26rem", "height": "23.6rem" }} />
              </section>

            </div>

          </div>


        </div>




      </div>
    </>
  )


}

export default BrandLogINOtp
