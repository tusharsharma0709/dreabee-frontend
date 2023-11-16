import React from 'react'
import logo from '../../Imagez/LandinPgImg/logo.png'
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
const CommFoot = () => {
    const navigate = useNavigate();
    const Go = () => {
        navigate("/Phone_Verification_Influencers")
    }

    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view

    });

    return (
        <>
            <div style={{ "height": "80vh", "paddingTop": "3rem", "backgroundColor": "black", "zIndex": "-5", "overflow": "hidden" }}>

                <section>
                    <div className='container-fluid '>
                        <div className='row'>


                            <div
                                className={`fade-in-text ${inView ? 'fade-in col-md-3 mt-3 ps-5' : 'col-md-3 mt-3 ps-5'}`} ref={ref}
                            >

                                <img src={logo} alt='img' style={{ "width": "8rem" }} />
                                <p className='text-start mt-4 mb-4' style={{ "fontSize": "18px", "fontWeight": "700", "lineHeight": "35px", "color": "#FFFFFF" }}>DREABEE is an influencer marketing and intelligence platform, that enables superior influencer discovery, quick and easy influencer outreach.</p>
                                <i className="fa-brands fa-linkedin fa-2xl  " style={{ "color": "#FFFFFF" }}></i>
                                <i className="fa-brands fa-youtube  fa-2xl  ms-4" style={{ "color": "#FFFFFF" }}></i>
                                <i className="fa-brands fa-twitter  fa-2xl  ms-4" style={{ "color": "#FFFFFF" }}></i>
                                <i className="fa-brands fa-instagram  fa-2xl  ms-4" style={{ "color": "#FFFFFF" }}></i>
                                <i className="fa-brands fa-square-facebook  fa-2xl  ms-4" style={{ "color": "#FFFFFF" }}></i>
                            </div>



                            <div
                                className={`fade-in-text ${inView ? 'fade-in col-md-3 text-center mt-5' : 'col-md-3 text-center mt-5'}`} ref={ref}
                            >

                                <h2 style={{ "fontSize": "28px", "fontWeight": "700", "color": "#C83B93" }}>For Business</h2>
                                <ul className='text-start' style={{ "paddingLeft": "6.2rem" }}>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Qoruz Business Suite</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Qoruz Paid Collabs</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Qoruz Perks</a></li>
                                </ul>

                                <h2 style={{ "fontSize": "28px", "fontWeight": "700", "color": "#C83B93", "marginTop": "2rem" }}>For Influencers</h2>
                                {/* <button className='btnz' onClick={Go} style={{ "cursor": "pointer", "position": "relative", "left": "3rem", "width": "316px", "borderRadius": "500px", "height": "64px", "backgroundColor": "#FFFFFF", "color": "#C83B93", "fontSize": "24px", "fontWeight": "700" }}>Create my Profile <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> */}
                                <button className='mt-4 btnz' onClick={Go} style={{ "position": "relative", "left": "4rem", "width": "316px", "borderRadius": "10px", "height": "64px", "backgroundColor": "#FFFFFF", "color": "#C83B93", "fontSize": "24px", "fontWeight": "700", "border": "none", "boxShadow": "#7E7E7E 0px 0px 1px 2px " }}>Create my Profile &nbsp; <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i>

                                </button>
                            </div>


                            <div 
                                className={`fade-in-text ${inView ? 'fade-in col-md-3 text-center ps-5 mt-5' : 'col-md-3 text-center ps-5 mt-5'}`} ref={ref}
                            >
                                <h2 style={{ "fontSize": "28px", "fontWeight": "700", "color": "#C83B93" }}>Company</h2>
                                <ul className='text-start' style={{ "paddingLeft": "6.4rem" }}>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">About us</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Careers</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Contact us</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Terms of Use</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Privacy Policy</a></li>
                                </ul>
                            </div>


                            <div
                                className={`fade-in-text ${inView ? 'fade-in col-md-3 text-center mt-5' : 'col-md-3 text-center mt-5'}`} ref={ref}
                            >
                                <h2 style={{ "fontSize": "28px", "fontWeight": "700", "color": "#C83B93" }}>Resources</h2>
                                <ul className='text-start' style={{ "paddingLeft": "7.3rem" }}>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Case Studies</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Reports</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Blog</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Playbooks</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Compare</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Find influencers</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Tools</a></li>
                                    <li style={{ "color": "#FFFFFF", "fontSize": "16px", "fontWeight": "600", "listStyleType": "none", "lineHeight": "40px" }}> <a className='navHovText0' style={{ "textDecoration": "none" }} href="#">Templates</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='Ellipse3F' style={{ "width": "", "height": "", "position": "relative", "top": "-5rem", "left": "-400px" }} />
            </div>
        </>
    )
}

export default CommFoot