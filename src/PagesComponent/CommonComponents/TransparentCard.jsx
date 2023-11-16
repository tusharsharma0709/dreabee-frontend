import React from 'react'
import phone from '../../Imagez/LandinPgImg/phone.png'
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

export const TransparentCard = () => {

    const textRef = useRef(null);
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.8, // Trigger when at least 50% of the element is in view

    });
    const [ref2, inView2] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.8, // Trigger when at least 50% of the element is in view

    });
    const [ref3, inView3] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.8, // Trigger when at least 50% of the element is in view
delay:100
    });
    return (
        <>
            {/* `fade-in-text ${inView1 ? 'fade-in' : ''}`} ref={ref1} */}
            {/* <div className='boxx Kardz'> */}
            <div className={`fade-in-text ${inView1 ? 'fade-in boxx Kardz' : 'boxx Kardz'}`} ref={ref1}>
                <section className='row' >
                    <div className={`fade-in-text ${inView3 ? 'fade-in col-md-6 d-flex flex-column ' : 'col-md-6 d-flex flex-column '}`} ref={ref3} style={{ "height": "604px" }}>
                        <h4 className='' style={{ "marginTop": "5rem", "marginLeft": "2rem", "fontWeight": "600", "fontSize": "24px", "lineHeight": "31px", "color": "#FFFFFF" }}>Experience a whole new REALM OF INFLUENCER</h4>
                        <p className='' style={{ "marginTop": "1rem", "marginLeft": "2rem", "fontWeight": "600", "fontSize": "18px", "lineHeight": "20px", "color": "#FFFFFF" }}>Become a DREABEE Member & Get</p>
                        <ul className='ulli' style={{ "marginTop": "0rem", "marginLeft": "1rem", "fontWeight": "400", "fontSize": "15px", "lineHeight": "20px", "color": "#FFFFFF" }}>
                            <li className=''>300000+ Unique Influencers across Platforms</li>
                            <li className='mt-2'>Super Flexible Search like #tags, bio, profession and more </li>
                            <li className='mt-2'>Robust Scoring system for every Influencer & every Profile</li>
                            <li className='mt-2'>Advanced Search filters with extensive filters</li>
                        </ul>
                        <p id='tangs' style={{ "marginLeft": "3rem", "marginTop": "0.5rem", "fontStyle": "italic", "fontSize": "18px", "fontWeight": "600", "lineHeight": "24px", "color": "#FFFFFF" }}>And best of all ,<br />FREE FOREVER</p>
                    </div>
                    <div className=' col-md-6 d-flex justify-content-center align-items-center ' style={{ "height": "604px" }}>  <img src={phone} className={`fade-in-text ${inView2 ? 'fade-in phone' : 'phone'}`} ref={ref2} style={{ "width": "280px", "zIndex": "" }} alt='logo' /> </div>
                </section>
            </div>
        </>

    )
}
