import React, { useRef } from 'react'
import image from '../../Imagez/BusinessLandinPgImg/Business_Landing3.png'
import image2 from '../../Imagez/BusinessLandinPgImg/BusinessLanding3.png'
import BusinessLanding3Img from './BusinessLanding3Img'
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
const BussLandinSec1 = () => {

    const navigate = useNavigate();

    const signIn = () => {
        navigate("/SignUp")
    }


    const textRef = useRef(null);
    // REFFF 2
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view

    });
    // REFFF 3
    const [ref2, inView2] = useInView({
        // triggerOnce: true, // Only trigger the animation once
        threshold: 0.2, // Trigger when at least 50% of the element is in view
    });
    return (
        <section className='row'>
            <div className={`fade-in-text ${inView1 ? 'fade-in  col-6' : 'col-6 '}`} ref={ref1} >

                <section className='text-light' style={{ "height": "30rem", "width": "40rem", "marginLeft": "6rem", "marginTop": "10rem" }}>
                    <h1 style={{ "fontSize": "3rem", "fontWeight": "700", "color": "#C83B93" }}>Next-Generation Influencer Marketing Platform</h1>
                    <p style={{ "fontSize": "1.3rem", "fontWeight": "600", "marginTop": "2rem" }}>Be it conversions, engagement, reach or views, DREABEE Business Suite has your back.</p>
                    <button className='btnz' onClick={signIn} style={{ "zIndex": "2", "width": "330px", "height": "64px", "backgroundColor": "white", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "1.8rem", "cursor": "pointer" }}>
                        <span style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93" }}>Get Started for free <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */} </span>
                    </button>
                </section>


            </div>
            <div className={`fade-in-text ${inView2 ? 'fade-in  col-6' : 'col-6 '}`} ref={ref2} style={{ "zIndex": "2" }}>
                {/* <img className='nobg ' src={image2} alt='image' style={{ "zIndex":"2","width": "62rem", "position": "relative", "top": "-5rem", "left": "-12rem", "overflow":"hidden" , "pointerEvents": "none" }} /> */}
                <span className=' ' style={{ "zIndex": "2", "width": "62rem", "position": "relative", "top": "-5rem", "left": "-12rem", "overflow": "hidden", "pointerEvents": "none" }}>
                    <BusinessLanding3Img />
                </span>
            </div>
        </section>
    )
}

export default BussLandinSec1