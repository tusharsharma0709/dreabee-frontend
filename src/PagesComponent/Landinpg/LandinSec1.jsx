import React, { useRef } from 'react'
import LandinNav from './LandinPg_Sub/LandinNav'
import { TransparentCard } from '../CommonComponents/TransparentCard'
import { useInView } from 'react-intersection-observer';

const LandinSec1 = () => {

    const textRef = useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.8, // Trigger when at least 50% of the element is in view

    });
    return (
        <>
            <div className='' style={{ "height": "125vh", "backgroundColor": "black", "zIndex": "-5" }}>

                <div className='Navabarr'>
                    <LandinNav />
                </div>

                
                <div className='row'>

                    <div className=' col-md-6 d-flex justify-content-center' style={{ "height": "1rem" }}>
                        <section className={`fade-in-text ${inView ? 'fade-in' : ''}`} ref={ref} style={{ "marginLeft": "5rem", "marginTop": "4rem", "height": "28rem", "width": "45rem" }}>
                            <h2 className='' style={{ "fontSize": "60px", "fontWeight": "700", "lineHeight": "71px", "color": "#C83B93", "marginTop": "6rem" }}> <section className='' style={{ "marginLeft": "1rem" }}> Where Creator Collaborations Happen</section></h2>
                            <span className='' style={{ "lineHeight": "40px", "fontSize": "30px", "fontWeight": "600", "color": "#FFFFFF" }}><section className='' style={{ "marginLeft": "1.5rem", "marginTop": "2rem" }}>DREABEE helps brands to find, connect and <br />collaborate with the most relevant influencers</section></span>
                            <section>
                                <label className='' style={{ 'position': 'relative', 'left': '50px', "top": "6.8rem", "fontWeight": "600", "fontSize": "24px", "lineHeight": "34px", "height": "34px", "color": "#F34E55" }}><span><i className="fa-brands fa-instagram" style={{ "color": "#df20a3", "position": "relative", "left": "-5%", "top": "5%" }}></i></span>  Instagram <span style={{ "position": "relative", "top": "10%", "left": "2%" }}><i className="fa-solid fa-angle-down " /></span> </label>
                                <input placeholder='Search creators & categries' style={{ "boxSizing": "borderbox", "width": "680px", "height": "90px", "background": "#FFFFFF", "border": "4px solid #D12C8B", "borderRadius": "500px", "marginTop": "3rem", "fontWeight": "600", "fontSize": "24px", "lineHeight": "34px", "paddingLeft": "15rem" }} />
                            </section>
                        </section>
                    </div>


                    <div className='col-md-6'>
                        <section className='backGlow' style={{ "zIndex": "-2" }}>
                            <section className='Ellipse4' style={{ "width": "13rem", "height": "13rem" }} />
                            <section className='Ellipse3' style={{ "maxWidth": "26rem", "height": "26rem" }} />
                        </section>

                        <section className='' style={{ "position": "relative", "top": "-2rem", "height": "10rem", "width": "5rem" }}>
                            <TransparentCard />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandinSec1