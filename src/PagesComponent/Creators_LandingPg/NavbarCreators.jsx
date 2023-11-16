import React, { useEffect } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom'


// import { klik } from '../../../Action/Indexx'
// import state from 'sweetalert/typings/modules/state'
// const myState = useSelector((state)=> state.)
const NavbarCreators = () => {
    const navigate = useNavigate();
    const InflueReg = () => {
        navigate("/Phone_Verification_Influencers")
    }
    const Landed = () => {
        navigate("/")
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <section className='navBar' style={{ "zIndex": "10" }}>
                        <div className='row mt-3' >
                            <div className='col-2 d-flex align-items-center justify-content-evenly'> <img src={logo} onClick={Landed} alt='logo' style={{ "width": "6rem", "position": "", "top": "-35%","cursor":"pointer" }} />   </div>

                            {/* for influencers  */}
                            <div className='col-2  d-flex align-items-center  justify-content-center'>
                                {/* <section className='col texty' style={{ "fontWeight": "600", "fontSize": "16px", "color": "#FFFFFF", "position": "relative", "left": "-20%", "cursor": "pointer" }}>For Influencers</section> */}
                            </div>

                            {/* for brands  */}
                            <div className='col-1 d-flex align-items-center justify-content-center'>
                                {/* <section className='col texty ' style={{ "fontWeight": "600", "fontSize": "16px", "color": "#FFFFFF", "position": "relative", "left": "-120%", "cursor": "pointer" }}>For Brands</section> */}
                            </div>
                            <div className='col-2'></div>

                            {/* Benifits*/}
                            <div className='col-1 d-flex align-items-center justify-content-center pt-3' onClick={(e) => { document.getElementById("Benifits").scrollIntoView({ behavior: "smooth" }) }}>
                                <span className=''> <p className='navHovText ' style={{ "fontSize": "16px", "fontWeight": "700", "color": "#FFFFFF", "cursor": "pointer" }} > Benefits </p></span>
                            </div>


                            {/* FAQs  */}
                            <div className='col-2 d-flex align-items-center justify-content-start' onClick={(e) => { document.getElementById("FAQ").scrollIntoView({ behavior: "smooth" }) }}>
                                <span className='ms-2 d-flex justify-content-center align-items-center'
                                    style={{ "border": "", "borderRadius": "600px", "width": "140px", "height": "50px", "cursor": "pointer" }}  >
                                    <p className='text1 navHovText' style={{ "fontWeight": "700" }} >FAQs</p> </span>
                                <div className='col-1 d-flex align-items-center justify-content-center'>
                                    {/* <section className='col texty ' style={{ "fontWeight": "600", "fontSize": "16px", "color": "#FFFFFF", "position": "relative", "left": "-120%", "cursor": "pointer" }}>For Brands</section> */}
                                </div>

                            </div>

                            {/* campaign */}
                            <div className='col-2 d-flex align-items-center justify-content-start ' >
                                <span className='bg-light d-flex justify-content-center align-items-center btnz'
                                    onClick={InflueReg}
                                    style={{
                                        "border": "2px solid #FFFFFF", "borderRadius": "700px",
                                        "width": "250px", "height": "50px", "position": "relative", "top": "0%", "left": "-24%", "cursor": "pointer"
                                    }}>
                                    <p className='text1 ' style={{ "color": "#C83B93", "cursor": "pointer" }}> Create my Profile &nbsp;<i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> </p></span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default NavbarCreators