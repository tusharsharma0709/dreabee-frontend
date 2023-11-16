import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

const FlowerPhoto1 = () => {
    const navigate = useNavigate();
    const Go = () => {
        navigate("/SignUp")
    }
    const Logyn = () => {
        navigate("/LogIn")
    }
    const textRef = useRef(null);
    // REFFF 1
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view

    });
    return (
        <>
            <section className={`fade-in-text ${inView ? 'fade-in ' : ''}`} ref={ref}>
                <h4 style={{ "position": 'relative', "width": "", "left": "", "top": "-6rem", "fontWeight": "700", "fontSize": "44px", "lineHeight": "70px", "color": "#C83B93" }}>Your search for the perfect<br /> creators ends now. </h4>
                <p style={{ "position": "relative", "width": "", "left": "", "top": "-6rem", "fontWeight": "600", "fontSize": "24px", "lineHeight": "40px", "color": "#FFFFFF", "marginTop": "2rem" }}>Build brand awareness & long-lasting customer <br />relationships while driving sales with creator collaborations. <br />Get started today.</p>

                <span style={{ "position": "relative", "top": "-4rem" }}>

                    <button className=' revCol' onClick={Go} style={{ "width": "419px", "height": "64px", "backgroundColor": "transparent", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "" }}>
                        <span className='revColText' style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93", }}>Start now to Get Free Access <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */}</span>
                    </button>

                    <br />
                    <button className='btnz' onclick={() => { navigate("/LogIn") }} style={{ "width": "348px", "height": "64px", "backgroundColor": "white", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "2rem" }}>
                        <span onclick={Go} style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93" }}>Post a Campaign Brief <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */} </span>
                    </button>
                </span>

            </section>
        </>
    )
}

export default FlowerPhoto1






