import React, { useRef } from 'react'
import image from '../../Imagez/CreatorsLandingPgImg/Creators_Illustrator.png'
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
const CreatorsLandingSec1 = () => {
    const navigate = useNavigate();
    const InflueReg = () => {
        navigate("/Phone_Verification_Influencers")
    }



    const textRef = useRef(null);
    // REFFF 1
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay : 4000
    });
    // REFFF 2
    const [ref2, inView2] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
    });



    return (
        <section className='row d-flex flex-space-between' >
            <div className='col-12 col-md-6'>

                <section className={`fade-in-text ${inView1 ? 'fade-in  text-light' : ' text-light'}`} ref={ref1}  style={{ "height": "28rem", "width": "40rem", "marginLeft": "6rem", "marginTop": "10rem" }}>
                    <h1 style={{ "fontSize": "3rem", "fontWeight": "700", "color": "#C83B93" }}><span style={{"color":'white'}}>Be where everyone searches creators for</span> Brand Collaboration.</h1>
                    <p style={{ "fontSize": "1.3rem", "fontWeight": "600", "marginTop": "2rem" }}>The only place where brands will be calling you directly With more Brands, Earn more via brand collaboration</p>
                    <button onClick={InflueReg} className='btnz' style={{ "width": "330px", "height": "64px", "backgroundColor": "white", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "1.8rem" }}>
                        <span style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93" }}>Create my Profile <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */} </span>
                    </button>
                </section>


            </div>
            <div className='col-12 col-md-6' style={{"backgroundColor":""}}>
                <span style={{"position":"relative","top":"2rem","left":"-0rem","zIndex":"1"}}>
                <img src={image} alt='image' className={`pop-in ${inView2 ? 'pop  ' : ' '}`} ref={ref2} style={{"height":"40rem","backgroundColor":""}} />
                </span>
            </div>
        </section>
    )
}

export default CreatorsLandingSec1