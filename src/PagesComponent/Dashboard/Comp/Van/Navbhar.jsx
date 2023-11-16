import $ from 'jquery'
import '../../../../Styles/van.css'
import React, { useState } from 'react'
import log from '../../../../Imagez/Common/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import swal from 'sweetalert'
// import pik1 from '../../../../Imagez/Common/TayTay.jpg'
import pik1 from '../../../../Imagez/Dashboard/All/wat/profLOgo.jpg'
import { googleLogout } from '@react-oauth/google'
import { baseUrl } from '../../../../Routez/Routey'

const Navbhar = () => {
  const boom = () => {
    let slide = document.getElementById("close");
    slide.classList.toggle("open");
  }



  //BRAND ANALYSIS
  const [showBrandz, setShowBrandz] = useState(false);
  const Branz = () => {
    setShow(false);
    setShowNoty(false);
    setShowBrandz(!showBrandz);
  }


  // PROFILE 
  const [show, setShow] = useState(false);
  const now = () => {
    setShow(!show);
    setProShow(false)
    setShowNoty(false)
    setShowBrandz(false);


    // document.getElementById("overlay").style.display = "none";
  }
  const [proShow, setProShow] = useState(false);
  const ProfUp = () => {
    // document.getElementById("overlay").style.display = "block";
    setShow(false)
    setProShow(true)
  }


  // PROFILE 

  const Cross = () => {
    // document.getElementById("overlay").style.display = "none";
    setProShow(false)
    setShowNoty(false)
    setShow(false);
    setShowBrandz(false);
  }

  // NOTIFICATION 
  // ______________________________________________________________________ 

  const [showNoty, setShowNoty] = useState(false);
  const nowty = () => {
    setShow(false);
    setShowNoty(!showNoty);
    setShowBrandz(false);


  }
  // NOTIFICATION
  
  // CHAT WITH BOT 
  const Pop=()=>{
    swal("UNDER MAINTAINANCE ","✂️", "info");

  }

  // ______________________________________________________________________ 

  // Cross Button 
  const Glow = () => {
    document.getElementById("tada").style.color = "aqua";
  }
  const GlowEnd = () => {
    document.getElementById("tada").style.color = "#C83B93";
  }
  // Profile Upload 
  const Glow1 = () => {
    document.getElementById("tada1").style.border = "#C83B93 3.5px solid";
    document.getElementById("tada1").style.boxShadow = "0px 15px 25px 0px rgba(0, 0, 0, 0.30)";
  }
  const GlowEnd1 = () => {
    document.getElementById("tada1").style.border = " aqua 3px solid";
    document.getElementById("tada1").style.boxShadow = "0px 10px 20px 0px rgba(0, 0, 0, 0.20)";
  }


  // __________________________________________________________________________
  //  PROFILE PICTURE GET AND PREVIEW 

  const [noImg, setNoImg] = useState(false);
  const PreviewImage = () => {
    var oFReader = new FileReader();
    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

    oFReader.onload = function (oFREvent) {
      document.getElementById("uploadPreview").src = oFREvent.target.result;
    }

  }

  // ______________________________________________________________________ 

  const [ulr, setulr] = useState("")
  // +++++++++++Api2++++++++++++++
  // Details 

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const BrandName = "";
  const Updayte = () => {

    let data = { name, email, phone, ulr };
    axios.post(`${baseUrl}api/Brands//UpdatePage/${BrandName}`, {
      email: data.email,
      phone: data.phone,
      name: data.name,
      photo: data.ulr

    }).then((resp) => {
      swal("You are successfully logged in", "", "success");
    }).catch((error) => {
      console.log("Login Api Error - ", error);
      swal("Oops!", "Maybe a Wrong Entry ,Try Again !! ", "warning");
    })

  }



  // +++++++++++Api3++++++++++++++
  // Password 
  const id = 7522323232;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const RestPress = () => {

    let data = { oldPassword, newPassword, rePassword };
    // console.warn(data.id);

    // axios.patch(`${baseUrl}/api/Admin/resetPasswordAdmin/${identityNo}`, {
    axios.patch(`${baseUrl}api/Brands/resetpassword/${id} `, {
      old: data.oldPassword,
      neew: data.newPassword,
      cpassword: data.rePassword
    }).then((res) => {
      swal("Updated", "Successfully Updated", "success");
      // navigate("/admin/dashboard/");
    }).catch((error) => {
      console.log("error", error);
      swal("Oops!", "Something went wrong! Try Again.", "error");
    })

  }


  // +++++++++++++++++++++++++
  // LOGOUT 
  const navigate = useNavigate();

  const LogOut = () => {
    window.localStorage.removeItem("isLoggedIn");
    window.localStorage.removeItem("Access-Id");
    window.localStorage.removeItem("Gmail-Auth");
    googleLogout();

    swal("Logged out!", "You have logged out Successfully, Login Again.", "success");
    navigate("/LogIn");
  }
  // ______________________________________________________________________ 


  return (
    <section style={{zIndex : "1500"}}>

      {/* PROFILE UPDATE  */}
      {/* ______________________________________________________________________  */}
      {
        proShow ?
          <>
            <div id="overlay" style={{
              "position": "fixed", "width": "100%", "height": "100%", "zIndex": "2",
              "top": "0", "left": "0", "right": "0", "bottom": "0", "backgroundColor": "rgba(0,0,0,0.5)", "cursor": "default"
            }} >


              <span>
                {/* button __ */}
                <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "650", "position": "relative", "top": "4%", "left": "26.2rem" }} onClick={Cross} > <i class='bx bx-x-circle ' id='tada' onMouseOver={Glow} onMouseLeave={GlowEnd} style={{ "fontSize": "38px", "color": "gray" }} /> </button>
                {/* Update Section __ */}
                <section className='py-4 Kardz' style={{ "height": "94vh", "width": "24vw", "background": "whitesmoke", "zIndex": "600", "position": "relative", "left": "6rem", "top": "-1.2rem", borderRadius :"10p" ,"overflow": "scroll", "overflowX": "hidden" }}>
                  <span className='ps-4' style={{ "fontSize": "26px", "fontWeight": "600" }}>Update Profile</span>
                  <section className='bg ms-2'>

                    {/* Profile picture  */}
                    <section className='mt-3'>

                      <img alt='profpik' src={pik1} id="uploadPreview" style={{ "height": "10rem", "width": "10rem", "border": "3px solid aqua", "borderRadius": "50%", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                      <i class='bx bxs-camera-plus' onClick={() => { $('#uploadImage').click() }} style={{ "background": "gray", "border": "aqua 3px solid", "color": "white", "cursor": "pointer", "padding": "10px", "borderRadius": "50%", "fontSize": "1.4rem", "position": "relative", "left": "-3rem", "top": "4rem", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} id='tada1' onMouseOver={Glow1} onMouseLeave={GlowEnd1}  ></i>
                      <input id="uploadImage" hidden name="image" type="file" accept=".jpg,.jpeg,.png" onChange={PreviewImage} placeholder="hi" />

                    </section>



                    {/* Name / Phone / Email /Photo __ */}
                    <section className='ps-2 mt-2' >
                      <h4 className='ps-1 mb-3' style={{ "color": "#C83B93", "fontSize": "22px" }}> Personal Details</h4>
                      {/* Name __ */}
                      <span className=' '>
                        <input type='text' onChange={(e) => { setName(e.target.value) }} value={name} className='mt-4 ps-3' placeholder='monkey d luffy' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                        <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Name</span>
                      </span>
                      {/* Phone __ */}
                      <span className=' '>
                        <input type='tel' onChange={(e) => { setPhone(e.target.value) }} value={phone} className='mt-3 ps-3' placeholder='+91-28-2928-29' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                        <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Phone No.</span>
                      </span>
                      {/* Email __ */}
                      <span className=' '>
                        <input type='email' onChange={(e) => { setEmail(e.target.value) }} value={email} className='mt-3 ps-3' placeholder='KingOfPirates@gmail.com' style={{
                          "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px",
                          "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)"
                        }} />
                        <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Email</span>
                      </span>
                      {/* button __ */}
                      <button style={{
                        "fontSize": "16px", "fontWeight": "600", "width": "21rem", "height": "2.6rem", "borderRadius": "20px",
                        "border": "0.2px solid whitesmoke", "background": "#C83B93", "color": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)"
                      }} onClick={Updayte} >Save Changes</button>

                    </section>




                    {/* Password Reset  __ */}
                    <section className='mt-5 ps-2 mb-5' >
                      <h4 className='ps-1 mb-4' style={{ "color": "#C83B93", "fontSize": "22px" }}> Password Setting</h4>
                      {/* Old Password __ */}
                      <span className=' '>
                        <input type='text' onChange={(e) => { setOldPassword(e.target.value) }} value={oldPassword} className='mt-4 ps-3' placeholder='monkey luffy' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                        <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>Old Password</span>
                      </span>
                      {/* New Password __ */}
                      <span className=' '>
                        <input type='text' onChange={(e) => { setNewPassword(e.target.value) }} value={newPassword} className='mt-3 ps-3' placeholder='monkey d luffy' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                        <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>New Password</span>
                      </span>
                      {/* New Re-Password __ */}
                      <span className=' '>
                        <input type='text' onChange={(e) => { setRePassword(e.target.value) }} value={rePassword} className='mt-3 ps-3' placeholder='monkey d luffy' style={{ "fontSize": "16px", "fontWeight": "400", "width": "21rem", "height": "2.6rem", "borderRadius": "20px", "border": "0.2px solid whitesmoke", "background": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)" }} />
                        <span style={{ "position": "relative", "top": "-4.1rem", "fontWeight": "500", "left": "1.2rem", "fontSize": "15px", "color": "gray" }}>New Re-Password</span>
                      </span>
                      {/* button __ */}
                      <button style={{
                        "fontSize": "16px", "fontWeight": "600", "width": "21rem", "height": "2.6rem", "borderRadius": "20px",
                        "border": "0.2px solid whitesmoke", "background": "#C83B93", "color": "white", "boxShadow": "0px 10px 20px 0px rgba(0, 0, 0, 0.20)"
                      }} onClick={RestPress} >Update Password</button>



                    </section>




                  </section>
                </section>
              </span>
            </div>
          </>
          : null
      }




      {/* NOTIFIICATION  */}
      {/* ______________________________________________________________________  */}
      {
        showNoty ?
          <>
            <div id="overlay" style={{
              "position": "fixed", "width": "100%", "height": "100%", "zIndex": "2",
              "top": "0", "left": "0", "right": "0", "bottom": "0", "backgroundColor": "rgba(0,0,0,0.5)", "cursor": "default"
            }} >

              <span>
                {/* button  */}
                <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "650", "position": "relative", "top": "3%", "left": "47rem" }} onClick={Cross} > <i class='bx bx-x-circle ' id='tada' onMouseOver={Glow} onMouseLeave={GlowEnd} style={{ "fontSize": "38px", "color": "gray" }} /> </button>
                {/* Update Section  */}
                <section style={{ "height": "99vh", "width": "46vw", "background": "whitesmoke", "zIndex": "600", "position": "relative", "left": "6.5rem", "top": "-2.5rem", "overflow": "scroll", "overflowX": "hidden" }}>

                  <section className='row pt-3'>
                    <div className='col-4 bg-'>   <span className='ps-4' style={{ "fontSize": "26px", "fontWeight": "600" }}>Notification</span>   </div>
                    <div className='col-4 text-end pe-4 pt-1' style={{ "borderRight": "gray solid  1px  ", "cursor": "pointer" }}> <span style={{ "fontSize": "14px", "color": "#666666", "fontWeight": "600" }}>Only show unread  &nbsp; <span className='' style={{ "position": "relative", "top": "6px" }}><i class='bx bx-toggle-left' style={{ "fontSize": "26px" }} /></span></span> </div>
                    <div className='col-3 text-start ps-4 pt-2' > <span style={{ "fontSize": "14px", "color": "#666666", "fontWeight": "600", "cursor": "pointer" }}>Mark all as read</span></div>
                    <div className='col-1  ' > </div>

                  </section>
                  <hr style={{ "color": "gray", "fontWeight": "700" }} />
                  <section style={{ "height": "80vh" }}>

                    <section className='row h-100 w-100 d-flex align-items-center  justify-content-center'>
                      <section className=' d-flex align-items-center  justify-content-center flex-column'>
                        <section><i class='bx bx-bell' style={{ "fontSize": "10rem", "color": "#6666" }}></i></section>
                        <h5 style={{ "color": "#6666" }}>You don’t have any notification yet.</h5>
                        {/* <i class='bx bxs-camera-plus' style={{ "background": "gray", "color": "#C83B93", "padding": "10px", "borderRadius": "50%", "fontSize": "1.4rem", "position": "", "left": "-3rem", "top": "-1.2rem" }} ></i> */}

                      </section>
                    </section>

                  </section>
                </section>

              </span>

            </div>
          </>
          : null
      }
      {/* ____________________BRAND ANALYSISIs__________________________________________________  */}


      {
        showBrandz ? <>

          {/* <div id="overlay" style={{
            "position": "fixed", "width": "100%", "height": "100%", "zIndex": "2",
            "top": "0", "left": "0", "right": "0", "bottom": "0", "backgroundColor": "rgba(0,0,0,0.3)", "cursor": "default"
          }} >

            <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "25", "position": "relative", "top": "25.5rem", "left": "18.5rem" }} onClick={Cross} > <i class='bx bx-x-circle bx-spin' id='tada' onMouseOver={Glow} onMouseLeave={GlowEnd} style={{ "fontSize": "38px", "color": "white" }} /> </button>

            <section style={{ "height": "8rem", "width": "12rem", "background": "whitesmoke", "zIndex": "600", "position": "relative", "left": "6.5rem", "top": "23rem", "borderRadius": "10px", boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)" }}>


              <div className=' h-100 w-100 p-2 py-4 d-flex justify-content-center align-items-center flex-column'  >

                <Link className=' d-flex align-items-center  bg- w-100 text-center mb-1  h-50 p-2' onClick={Cross} to="BrandSites" style={{ "textDecoration": "none", "borderBottom": "1px solid grey" }} >
                  <h5 className='bg- w-100 text-center h-50  '>Brands</h5>
                </Link>


                <Link className=' bg- w-100 text-center  h-50 p-2  mt-1' to="BrandGames" onClick={Cross} style={{ "textDecoration": "none", "borderTop": "1px solid grey" }} >
                  <h5 className='bg- w-100 text-center h-50 '>Games </h5>
                </Link>
              </div>
            </section>
          </div> */}

          {/* ______________________________________________________________________ */}

          <div id="overlay" style={{
            "position": "fixed", "width": "100%", "height": "100%", "zIndex": "2",
            "top": "0", "left": "0", "right": "0", "bottom": "0", "backgroundColor": "rgba(0,0,0,0.3)", "cursor": "default"
          }} >


            <section className='p-3 ps-4' style={{ "position": "relative", "borderRadius": "20px", "border": "#6666 2px solid", "top": "26.5rem", "left": "6.5rem", "height": "7rem", "width": "12rem", "background": "white" }}>


          

              {/* <Link to="ProfileUp" style={{"textDecoration":"none","color":"black"}}> */}
              <span className='row  pb-3 ps-3' style={{ "height": "20px", "cursor": "pointer" }}>
                <section className='col-2 pt-1' > <i class='bx bx-loader-circle' style={{ "color": "black", "fontSize": "24px", "lineHeight": "0px" }} /> </section>
                <section className='col-10 ps-4 '>
                  <Link className='w-100 ' onClick={Cross} to="BrandSites" style={{ "textDecoration": "none", "borderBottom": "1px solid grey" }} >
                    <h5 style={{ "fontSize": "18px", "fontWeight": "600", "color": "#C83B93" }}>Brands</h5>
                  </Link>
                </section>
              </span>
              {/* </Link> */}

              <hr />

              <span className='row w-100 pb-3 ps-3' style={{ "height": "30px", "cursor": "pointer" }}>
                <section className='col-2' style={{ "paddingTop": "2px" }} > <i class='bx bx-game' style={{ "color": "black", "fontSize": "24px", "lineHeight": "0px" }}></i>   </section>
                <section className='col-8 ps-4 '>
                  <Link className=' w-100 ' to="BrandGames" onClick={Cross} style={{ "textDecoration": "none" }} >
                    <h5 style={{ "fontSize": "18px", "fontWeight": "600", "color": "#C83B93" }}>
                      Games
                    </h5>
                  </Link>
                </section>
              </span>

              <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "25", "position": "relative", "top": "-5.8rem", "left": "8.5rem", "height":"0px" }} onClick={Cross} > <i class='bx bx-x ' id='tada' onMouseOver={Glow} onMouseLeave={(e) => { document.getElementById("tada").style.color = "#6666"; }} style={{ "fontSize": "26px", "color": "black" }} /> </button>

            </section>
        
          </div>






        </> : null
      }



      <div className="sidebar close" style={{ "zIndex": "2" }} id='close'>
        {/* LOGO  */}
        <div className="logo-details">
          <img src={log} style={{ "width": "3rem", "paddingTop": "2rem", "marginLeft": "8px" }} alt='img' />
        </div>

        <hr />

        {/* ICONS  */}
        <ul className="nav-list bg-da">

          <li className=''>
            <Link to="Home" >
              {/* <i class='bx bx-home bx-sm'></i> */}
              <img src={require('../../../../Imagez/Dashboard/All/home.png')} style={{ width: '30px', height: '20px', margin: '15px -3px', marginTop: "20px" }} />
              <span className="links_name ">Dashboard</span> </Link>
            <span className="tooltip">Dashboard</span>
          </li>

          <li>
            <Link to="Search" >
              {/* <i className='bx bx-search-alt' ></i> */}
              <img src={require('../../../../Imagez/Dashboard/All/search.png')} style={{ width: '30px', height: '20px', margin: '15px -3px' }} />
              <span className="links_name">Search</span> </Link>
            <span className="tooltip">Search</span>
          </li>
          <li>
            <Link to="Plans" >
              {/* <i className="bx bx-pie-chart-alt-2"></i> */}
              <img src={require('../../../../Imagez/Dashboard/All/plan_icon.png')} style={{ width: '20px', height: '20px', margin: '15px -3px' }} />

            </Link>
            <span className="tooltip">Plan</span>
          </li>

          <li>
            <Link to="Report" >
              {/* <i className='bx bx-task'></i>  */}
              <img src={require('../../../../Imagez/Dashboard/All/report.png')} style={{ width: '20px', height: '20px', margin: '15px -3px' }} />
            </Link>
            <span className="tooltip">Reports</span>

          </li>

          <li>
            <Link to="Campagin" >
              {/* <i className='bx bx-pin'></i> */}
              <img src={require('../../../../Imagez/Dashboard/All/fluent_megaphone-loud-24-regular.png')} style={{ width: '20px', height: '40px', margin: '5px 0' }} />
            </Link>
            <span className="tooltip">Campaigns</span>
          </li>


          {/* <li className='mt-2'>
            <Link to="Profile">
              <img src={require('../../../../Imagez/Dashboard/All/bulb.png')} style={{ width: '20px', height: '35px', margin: '0px 0' }} />
            </Link>
            <span className="tooltip">Content Inspiration</span>
          </li> */}

          <li className='' style={{ "cursor": "pointer" }} onClick={Branz}>
            <img src={require('../../../../Imagez/Dashboard/All/pie.png')} style={{ width: '20px', height: '25px', margin: '15px -3px' }} />
            <span className="tooltip">Brand Analysis</span>
          </li>




          {/* LOWER SECTION NAVBAR  */}

          {/* notifications */}
          <span className='mt-1'>

            <li style={{ "marginTop": "5rem", "cursor": "pointer" }}>
              <i className='bx bx-bell' onClick={nowty}></i>
              <span className="tooltip">Notifications</span>
            </li>

            {/* chat  */}
            <li className='' onClick={Pop}>
                {/* <i className='bx bx-conversation'></i> */}
                <img src={require('../../../../Imagez/Dashboard/All/chat.png')} style={{ width: '20px', height: '35px', margin: '5px 0' }} />
              <span className="tooltip">Chat with Us</span>
            </li>


            {/* profile  */}
            <li style={{ "cursor": "pointer" }}>
              <i class='bx bx-user' onClick={now}></i>
              <span className="tooltip">Profile</span>
            </li>

            {/* PROFILE POP UP  */}
            {
              show ?
                <>

                  <section className='p-3 ps-4 Kardz' style={{ "position": "relative", "borderRadius": "10px", "border": "#6666 2px solid", "top": "-9.8rem", "left": "1.9rem", "height": "11.5rem", "width": "20rem", "background": "white" }}>

                    <span className='row bg' style={{ "height": "40px" }}>
                      <section className='col-2 pt-3' > <i class='bx bx-user' style={{ "color": "black", "fontSize": "24px", "lineHeight": "0px" }} /> </section>
                      <section className='col-8' >
                        <section style={{ "color": "#C83B93", "fontSize": "17px", "marginBottom": "-8px" }}>Monkey D Luffy</section>
                        <span style={{ "fontSize": "13px", "marginTop": "", "fontWeight": "600", "color": "gray" }}>KingofPirates@gmail.com</span>

                      </section>
                    </span>

                    <hr />
                    {/* <Link to="ProfileUp" style={{"textDecoration":"none","color":"black"}}> */}
                    <span className='row' onClick={ProfUp} style={{ "height": "20px", "cursor": "pointer" }}>
                      <section className='col-2 pt-1' > <i class='bx bx-loader-circle' style={{ "color": "black", "fontSize": "24px", "lineHeight": "0px" }} /> </section>
                      <section className='col-10 '>
                        <h5 style={{ "fontSize": "16px", "fontWeight": "400" }}>Update profile</h5>
                      </section>
                    </span>
                    {/* </Link> */}

                    <hr />
                    <span className='row ' onClick={LogOut} style={{ "height": "30px", "cursor": "pointer" }}>
                      <section className='col-2' style={{ "paddingTop": "2px" }} >  <i class='bx bx-log-out-circle' style={{ "color": "black", "fontSize": "24px", "lineHeight": "0px" }} /> </section>
                      <section className='col-10 '>
                        <h5 style={{ "fontSize": "16px", "fontWeight": "400" }}>Logout</h5>
                      </section>
                    </span>


                  </section>
                  <button className=' ' style={{ "background": "none", "border": "none", "zIndex": "25", "position": "relative", "top": "-22rem", "left": "20rem" }} onClick={Cross} > <i class='bx bx-x ' id='tada' onMouseOver={Glow} onMouseLeave={(e) => { document.getElementById("tada").style.color = "#6666"; }} style={{ "fontSize": "26px", "color": "black" }} /> </button>

                </>
                :
                null
            }

          </span>
        </ul>
      </div>

    </section>
  )
}

export default Navbhar