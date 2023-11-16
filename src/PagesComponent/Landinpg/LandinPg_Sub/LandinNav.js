import React, { useState } from 'react'
import logo from '../../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom';

const LandinNav = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const InfluencersJump = () => {
        navigate("/Creators_LandingPage")
    }
    const showw = () => {
        setShow(true);
    }
    const notshoww = () => {
        setShow(false);
    }
    const buzz1 = () => {
        navigate("/Business_LandingPage")
        notshoww();
    }
    const buzz2 = () => {
        navigate("/Paid_Collabs_LandingPage")
        notshoww();
    }

    const signIn = () => {
        navigate("/SignUp")
    }
    const signUp = () => {
        navigate("/LogIn")
    }
    const Landed = () => {
           navigate("/")
       }
   
    return (
        <>
            <div className='container-fluid'>
                <div className='row' style={{ "zIndex": "5", "position": "sticky" }}>
                    <section className='navBar'>
                        <div className='row mt-3'>
                            <div className='col-2 d-flex align-items-center justify-content-evenly '> <img src={logo} className='Kardz' onClick={Landed} alt='logo' style={{ "width": "6rem", "position": "", "top": "-35%" , cursor : "pointer" }} />   </div>

                            {/* for influencers  */}
                            <div className='col-2  d-flex align-items-center  justify-content-center'>
                                <section className='col-md texty navHovText' onClick={InfluencersJump} style={{ "fontWeight": "600", "fontSize": "16px", "color": "#FFFFFF", "position": "relative", "left": "-20%", "cursor": "pointer" }}>For Influencers</section>
                            </div>

                            {/* for brands  */}
                            <div className='col-1 d-flex align-items-center justify-content-center'>
                                <section className='col-md texty  navHovText d-flex align-items-center' onMouseOver={showw} style={{ "fontWeight": "600", "fontSize": "16px", "color": "#FFFFFF", "position": "relative", "left": "-120%", "cursor": "pointer" }}>For Brands
                                    {
                                        show
                                            ?
                                            <i class='bx bx-chevron-up' style={{"fontSize":"20px"}}></i>
                                            :
                                            <i class='bx bx-chevron-down' style={{"fontSize":"20px"}}></i>
                                    }

                                </section>
                            </div>
                            <div className='col-2'></div>

                            {/* sign in  */}
                            <div className='col-1 d-flex align-items-center justify-content-center pt-3' onClick={signUp} >
                                <span className=''> <p className='texty navHovText1 ' style={{ "fontSize": "16px", "fontWeight": "700", "color": "#C83B93", "cursor": "pointer" }} > <u>Sign in</u> </p></span>
                            </div>

                            {/* sign up  */}
                            <div className='col-2 d-flex align-items-center justify-content-start' onClick={signIn}>
                                <span className='ms-2 d-flex justify-content-center align-items-center navHovText2 '
                                    style={{ "border": "2px solid #FFFFFF", "borderRadius": "600px", "width": "140px", "height": "50px", "cursor": "pointer" }}>
                                    <p className='text1 '  >Sign up</p> </span>
                            </div>

                            {/* campaign */}
                            <div className='col-2 d-flex align-items-center justify-content-start ' onClick={signUp}>
                                <span className='bg-light d-flex justify-content-center align-items-center btnz' style={{
                                    "border": "2px solid #FFFFFF", "borderRadius": "700px",
                                    "width": "250px", "height": "50px", "position": "relative", "top": "0%", "left": "-24%", "cursor": "pointer"
                                }}>
                                    <p className='text1' style={{ "color": "#C83B93" }}> Post a Campaign Brief &nbsp;<i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> </p></span>
                            </div>


                        </div>
                    </section>
                </div>
            </div>
            {show ?
                <section onMouseEnter={showw} onMouseLeave={notshoww} style={{ "height": "0rem", "width": "18rem", "backgroundColor": "", "": "relative", "left": "24.8rem", "zIndex": "5" }} >
                    <section className='py-3' style={{ "zIndex": "5", "height": "", "width": "15.5rem", "backgroundColor": "black", "border": "aqua 3px solid ", "position": "relative", "top": "0.6rem", "left": "20rem", "top": "-1rem", "borderRadius": "20px" }}>
                        <h1 className='py-2 hoverpe text-center text-light' onClick={buzz1} style={{ "fontSize": "1.1rem", "marginTop": "", "cursor": "pointer", "position": "", "left": "2rem", "top": "0.5rem" }}>DREABEE Business Suite   </h1>
                        <h1 className='pt-2 hoverpe text-center text-light' onClick={buzz2} style={{ "fontSize": "1.1rem", "marginTop": "", "cursor": "pointer", "position": "", "left": "2rem", "top": "0.5rem" }}>DREABEE Paid Collabs </h1>
                    </section>
                </section>
                : null
            }

        </>
    )
}

export default LandinNav