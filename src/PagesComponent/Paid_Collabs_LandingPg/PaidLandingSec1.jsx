import { useInView } from 'react-intersection-observer';
import image from '../../Imagez/PaidCollabsLandingPgImg/Paid_Collab_Illustrator3.png'
import React, { useRef } from 'react'

const PaidLandingSec1 = () => {
    const textRef = useRef(null);
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.3, // Trigger when at least 50% of the element is in view
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.8, // Trigger when at least 50% of the element is in view
    });

    return (
        <section className='row'>
            <div className='col-6'>

                <section className={`fade-in-text ${inView1 ? 'fade-in text-light' : 'text-light'}`} ref={ref1}
                    style={{ "height": "35rem", "width": "40rem", "marginLeft": "6rem", "marginTop": "7rem" }}>
                    <h1 style={{ "fontSize": "3rem", "fontWeight": "700", "color": "#C83B93" }}>Run Predictable Influencers Campaigns.</h1>
                    <p style={{ "fontSize": "1.3rem", "fontWeight": "600", "marginTop": "2rem" }}>Push your campaign live in less than 5 days..</p>
                    <button className='btnz' style={{ "width": "330px", "height": "64px", "backgroundColor": "white", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "1.8rem" }}>
                        <span style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93" }}>Get Started for free <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */} </span>
                    </button>
                </section>


            </div>
            <div className='col-6 '>
                <img 
                    src={image} alt='image' className={`fade-in-text ${inView2 ? 'fade-in nobg' : ' nobg'}`} ref={ref2}
                    style={{ "width": "52rem", "position": "relative", "top": "2px", "left": "-6rem" }} />
            </div>
        </section>
    )
}

export default PaidLandingSec1