import React from 'react'
import { useState } from 'react';

const ProfileUp = () => {
// ______________________________________________________






// all update api 
// ${baseUrl}api/Brands/UpdatePage/:username  
// {
//   "BrandName":"puma",
//   "email": "Puma@gmail.com",
//   "phone": 8928192819,
//   "photo": "https://res.cloudinary.com/dmvthpfdq/image/upload/v1689080959/eajswlkn1m3dnsfvv39k.png"
// }



// ______________________________________________________


  const [show, setShow] = useState(false);
  const now = () => {
    setShow(!show);
    setProShow(false)
   

    // document.getElementById("overlay").style.display = "none";
  }
  const [proShow, setProShow] = useState(false);
  const ProfUp = () => {
    // document.getElementById("overlay").style.display = "block";
    setShow(false)
    setProShow(true)
  }






  const Cross = () => {
    // document.getElementById("overlay").style.display = "none";
    setProShow(false)
   
    setShow(false);
  }
  const Glow = () => {
    document.getElementById("tada").style.color = "red";
  }
  const GlowEnd = () => {
    document.getElementById("tada").style.color = "white";
  }


  return (
    <>
      <div id="overlay" style={{
        "position": "fixed", "width": "100%", "height": "100%", "zIndex": "2",
        "top": "0", "left": "0", "right": "0", "bottom": "0", "backgroundColor": "rgba(0,0,0,0.5)", "cursor": "default"
      }} >


        <span>
          {/* button  */}
          <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "25", "position": "relative", "top": "50%", "left": "30rem" }} onClick={Cross} > <i class='bx bx-x-circle bx-spin' id='tada' onMouseOver={Glow} onMouseLeave={GlowEnd} style={{ "fontSize": "38px", "color": "white" }} /> </button>
          {/* Update Section  */}
          <section style={{ "height": "99vh", "width": "24vw", "background": "whitesmoke", "zIndex": "600", "position": "relative", "left": "6.5rem", "top": "-2.5rem", "overflow": "scroll", "overflowX": "hidden" }}>
            <span className='ps-4' style={{ "fontSize": "26px", "fontWeight": "600" }}>Update Profile</span>
            <section className='bg ms-2'>
              <section className=''>
                <i class='bx bx-user-circle' style={{ "fontSize": "10rem" }}></i>
                <i class='bx bxs-camera-plus' style={{ "background": "gray", "color": "white", "cursor": "pointer", "padding": "10px", "borderRadius": "50%", "fontSize": "1.4rem", "position": "relative", "left": "-3rem", "top": "-1.2rem" }} ></i>
              </section>



              {/* Name / Phone / Email /Photo  */}
              <section className='ps-2' >
                <h4 className='ps-1 mb-4' style={{ "color": "#C83B93", "fontSize": "22px" }}> Personal Details</h4>
                {/* Name  */}
                <span className=' '>
                  <input type='text' className='mt-4 ps-3' placeholder='monkey d luffy' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                  <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Name</span>
                </span>
                {/* Phone  */}
                <span className=' '>
                  <input type='tel' className='mt-3 ps-3' placeholder='+91-28-2928-29' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                  <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Phone No.</span>
                </span>
                {/* Email  */}
                <span className=' '>
                  <input type='email' className='mt-3 ps-3' placeholder='KingOfPirates@gmail.com' style={{
                    "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px",
                    "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)"
                  }} />
                  <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Email</span>
                </span>
                {/* button  */}
                <button style={{
                  "fontSize": "16px", "fontWeight": "600", "width": "21rem", "height": "2.6rem", "borderRadius": "20px",
                  "border": "0.2px solid whitesmoke", "background": "#C83B93", "color": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)"
                }} >Save Changes</button>

              </section>


              {/* Password Reset  */}
              <section className='mt-5 ps-2 mb-5' >
                <h4 className='ps-1 mb-4' style={{ "color": "#C83B93", "fontSize": "22px" }}> Password Setting</h4>
                {/* Name  */}
                <span className=' '>
                  <input type='text' className='mt-4 ps-3' placeholder='monkey d luffy' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                  <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Old Password</span>
                </span>
                {/* Name  */}
                <span className=' '>
                  <input type='text' className='mt-3 ps-3' placeholder='monkey d luffy' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                  <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>New Password</span>
                </span>
                {/* button  */}
                <button style={{
                  "fontSize": "16px", "fontWeight": "600", "width": "21rem", "height": "2.6rem", "borderRadius": "20px",
                  "border": "0.2px solid whitesmoke", "background": "#C83B93", "color": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)"
                }} >Update Password</button>

              </section>




            </section>
          </section>
        </span>


      </div>
    </>
  )
}

export default ProfileUp