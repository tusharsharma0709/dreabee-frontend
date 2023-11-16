import React from 'react'
import pho1 from '../../../Imagez/LandinPgImg/girl1.png'
import pho2 from '../../../Imagez/LandinPgImg/Shirsha.png'
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';
const FlowerPhoto2 = () => {
    const textRef = useRef(null);
    // REFFF 1
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view

    });
    return (
        <>
            <span className={`fade-in-text ${inView ? 'fade-in d-flex Kardz' : 'd-flex Kardz'}`} ref={ref} style={{ height: "0px" }}>
                <span className='Kardz' style={{ "position": "relative", "top": "7rem", "left": "14rem", "zIndex": "1" }}>
                    <img src={pho2} alt='' style={{ "border": "2px solid blue", "height": "", "width": "240px", "borderRadius": "4rem" }} />
                    <span className='text-light' style={{ "position": "relative", "bottom": "90px", left: "0px" }}>
                        <section style={{ fontWeight: 800, "fontSize": "36px", "lineHeight": "30px" }}>Shirisha</section>
                        <section style={{ fontWeight: 700, "fontSize": "20px" }}>Fashion</section>
                    </span>
                </span>



                <span className='Kardz' style={{ "position": "relative", "top": "", "left": "12rem", "zIndex": "2" }}> <img src={pho2} alt='' style={{ "border": "2px solid blue", "height": "", "width": "240px", "borderRadius": "4rem" }} />
                    <span className='text-light' style={{ "position": "relative", "bottom": "90px", left: "0px" }}>
                        <section style={{ fontWeight: 800, "fontSize": "36px", "lineHeight": "30px" }}>Shirisha</section>
                        <section style={{ fontWeight: 700, "fontSize": "20px" }}>Fashion</section>
                    </span>
                </span>
                <span className='Kardz' style={{ "position": "relative", "top": "11rem", "left": "9rem", "zIndex": "3" }}> <img src={pho2} alt='' style={{ "border": "2px solid blue", "height": "", "width": "240px", "borderRadius": "4rem" }} />
                    <span className='text-light' style={{ "position": "relative", "bottom": "90px", left: "0px" }}>
                        <section style={{ fontWeight: 800, "fontSize": "36px", "lineHeight": "30px" }}>Shirisha</section>
                        <section style={{ fontWeight: 700, "fontSize": "20px" }}>Fashion</section>
                    </span>
                </span>
                <span className='Kardz' style={{ "position": "relative", "top": "17rem", "left": "-18rem", "zIndex": "4" }}> <img src={pho2} alt='' style={{ "border": "2px solid blue", "height": "", "width": "240px", "borderRadius": "4rem" }} />
                    <span className='text-light' style={{ "position": "relative", "bottom": "90px", left: "0px" }}>
                        <section style={{ fontWeight: 800, "fontSize": "36px", "lineHeight": "30px" }}>Shirisha</section>
                        <section style={{ fontWeight: 700, "fontSize": "20px" }}>Fashion</section>
                    </span>
                </span>
            </span>
        </>
    )
}

export default FlowerPhoto2