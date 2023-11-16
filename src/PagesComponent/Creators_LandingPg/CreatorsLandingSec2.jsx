import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CommFoot from '../CommonComponents/CommFoot'

import img from '../../Imagez/CreatorsLandingPgImg/Why Dreabee Section1.png'
import img2 from '../../Imagez/CreatorsLandingPgImg/Why Dreabee Section2.png'
import card from '../../Imagez/CreatorsLandingPgImg/card.png'

import bar1 from '../../Imagez/CreatorsLandingPgImg/Bars1.png'
import bar2 from '../../Imagez/CreatorsLandingPgImg/Bars2.png'

import logo1 from '../../Imagez/CreatorsLandingPgImg/Icons/iconamoon_search-light.png'
import logo2 from '../../Imagez/CreatorsLandingPgImg/Icons/solar_user-outline.png'
import logo3 from '../../Imagez/CreatorsLandingPgImg/Icons/solar_eye-scan-linear.png'
import logo4 from '../../Imagez/CreatorsLandingPgImg/Icons/radix-icons_speaker-loud.png'

import img1 from '../../Imagez/CreatorsLandingPgImg/Amazon.png'
import img22 from '../../Imagez/CreatorsLandingPgImg/Starbucks.png'
import img3 from '../../Imagez/CreatorsLandingPgImg/Spectrum.png'
import img4 from '../../Imagez/CreatorsLandingPgImg/Tesla.png'
import img5 from '../../Imagez/CreatorsLandingPgImg/Youtubee.png'
import img6 from '../../Imagez/CreatorsLandingPgImg/Delotte.png'
import photo from '../../Imagez/CreatorsLandingPgImg/pink-line-section.png'
import { useInView } from 'react-intersection-observer'





const CreatorsLandingSec2 = () => {

    const navigate = useNavigate();

    const signIn = () => {
        navigate("/SignUp")
    }
    const InflueReg = () => {
        navigate("/Phone_Verification_Influencers")
    }

    const [message, setMessage] = useState(false);
    const [message1, setMessage1] = useState(false);
    const [message2, setMessage2] = useState(false);
    const [message3, setMessage3] = useState(false);
    const [message4, setMessage4] = useState(false);
    const [message5, setMessage5] = useState(false);





    const textRef = useRef(null);
    // REFFF 1
    const [ref1, inView1] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 1000
    });
    // REFFF 2------WHYY DReabee
    const [ref2a, inView2a] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 1500

    });
    // REFFF 2------WHYY DReabee
    const [ref2b, inView2b] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 2000

    });
    // REFFF 3
    const [ref3, inView3] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 1000
    });
    // REFFF 4
    const [ref4, inView4] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 2000

    });
    const [ref4a, inView4a] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.9, // Trigger when at least 50% of the element is in view
        delay: 1000

    });
    const [ref4b, inView4b] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.9, // Trigger when at least 50% of the element is in view
        delay: 1000

    });
    // REFFF 5
    const [ref5, inView5] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 2000

    });
    // REFFF 6 ----Up 6b
    const [ref6a, inView6a] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 2000

    });
    const [ref6b, inView6b] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 1000

    });
    // REFFF 7 ----Up-side 7b
    const [ref7a, inView7a] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 2000

    });
    const [ref7b, inView7b] = useInView({
        triggerOnce: true, // Only trigger the anixmation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view
        delay: 1000

    });


    return (
        <>
            <section className='row' style={{ "height": "0px" }}>
                {/* part 2 */}
                <section style={{ "height": "65rem", "backgroundColor": "" }}>

                    <div className='row' style={{ "marginTop": "4rem" }}>
                        <div className='col-12 text-center'>
                            <h1 className={`fade-in-text-right  ${inView1 ? 'fade-in-right  ' : ' '}`} ref={ref1} style={{ "fontWeight": "700", "fontSize": "2.4rem", "color": "#C83B93" }}>Why DREABEE ?</h1>
                        </div>
                    </div>
                    <div className='row' style={{ "marginTop": "-4rem" }}>
                        <div className='col-6 '>
                            <section style={{ "position": "relative", "left": "3rem", top: "4rem" }}>
                                <section>
                                    <span style={{ "position": "relative", "top": "35rem", "left": "3.4rem", "zIndex": "4" }}>   <img className={`pop-in ${inView2b ? 'pop  ' : ' '}`} ref={ref2b} src={img2} alt='img2' style={{ "width": "11rem" }} /></span>
                                    <span style={{ "position": "relative", "top": "7rem", "left": "1rem", "zIndex": "4" }}>   <img className={`pop-in ${inView2b ? 'pop  ' : ' '}`} ref={ref2b} src={img2} alt='img2' style={{ "width": "11rem" }} /></span>
                                    <span style={{ "position": "relative", "top": "24.5rem", "left": "8rem", "zIndex": "4" }}>   <img className={`pop-in ${inView2b ? 'pop  ' : ' '}`} ref={ref2b} src={img2} alt='img2' style={{ "width": "11rem" }} /></span>
                                </section>
                                <section>
                                    <span style={{ "position": "relative", "left": "", "top": "10rem", "zIndex": "3" }}> <img src={img} className='Kardz' alt='img1' style={{ "width": "18rem", borderRadius: "10px" }} /></span>
                                    <span style={{ "position": "relative", "left": "", "top": "", "zIndex": "3" }}> <img src={img} className='Kardz' alt='img1' style={{ "width": "18rem", borderRadius: "10px" }} /></span>
                                    <span style={{ "position": "relative", "left": "18.5rem", "top": "", "zIndex": "3" }}> <img src={img} className='Kardz' alt='img1' style={{ "width": "18rem", borderRadius: "10px" }} /></span>
                                </section>
                            </section>
                            <span>
                            </span>
                        </div>
                        <div className={`fade-in-text ${inView2a ? 'fade-in  col-6' : ' col-6'}`} ref={ref2a} style={{ "height": "60vh", "zIndex": "3" }}>

                            <section style={{ "paddingTop": "15rem", "width": "34.5rem", "marginLeft": "5rem" }}>
                                <h1 className='mb-2' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "#C83B93" }}>Join the #1 destination where brands search Influencers for brand campaigns in India</h1>
                                <h1 className='mb-4' style={{ "fontWeight": "600", "fontSize": "1rem", "color": "#7E7E7E" }}>
                                    Be a part of the community where 6700+ brands search for Influencers every month for campaigns/events.
                                </h1>
                                <span style={{ "position": "relative", "left": "-5rem", "top": "-6rem" }}><img src={logo1} style={{ "width": "" }} alt='logo1' /> </span>
                            </section>
                            {/* _______________link up_______________ */}
                            <section style={{ "paddingTop": "1.5rem", "width": "34.5rem", "marginLeft": "5rem" }}>
                                <h1 className='mb-2' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "#C83B93" }}> Create a free Profile in a hassle free manner</h1>
                                <h1 className='mb-4' style={{ "fontWeight": "600", "fontSize": "1rem", "color": "#7E7E7E" }}>
                                    By creating your profile on Qoruz the chances of being visible to brands is 3x compared to any other platforms. </h1>
                                <span style={{ "position": "relative", "left": "-5rem", "top": "-5.2rem" }}><img src={logo2} style={{ "width": "" }} alt='logo2' /></span>
                            </section>

                            <section style={{ "paddingTop": "1rem", "width": "34.5rem", "marginLeft": "5rem" }}>
                                <h1 className='mb-2' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "#C83B93" }}>Be visible to6700+ Brands throughout the country</h1>
                                <h1 className='mb-4' style={{ "fontWeight": "600", "fontSize": "1rem", "color": "#7E7E7E" }}>
                                    Be on top of the brand searches by creating your profile on Qoruz and work on different brand collaborations in your niche.</h1>
                                <span style={{ "position": "relative", "left": "-5rem", "top": "-5.2rem" }}><img src={logo3} style={{ "width": "" }} alt='logo3' /></span>
                            </section>

                            <section style={{ "paddingTop": "1rem", "width": "34.5rem", "marginLeft": "5rem" }}>
                                <h1 className='mb-2' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "#C83B93" }}>Get exclusive access to brand campaigns, events etc</h1>
                                <h1 className='mb-4' style={{ "fontWeight": "600", "fontSize": "1rem", "color": "#7E7E7E" }}>
                                    Not just paid collaborations, build strong relationships with the brands and get exclusive access to the brand events and much more. </h1>
                                <span style={{ "position": "relative", "left": "-5rem", "top": "-5rem" }}><img src={logo4} style={{ "zIndex": "3" }} alt='logo4' />
                                    {/* <span style={{ "width": "0rem", "position": "relative", "top": "-4rem", "left": "-4.5rem" }}> <section className='EllipseBg' style={{ "width": "3rem", "height": "3rem" ,"zIndex":"1" }} />  </span>     */}
                                </span>
                            </section>

                        </div>

                    </div>
                    {/* bars  */}
                    <section style={{ "position": "relative", "top": "-60rem" }}>
                        <span><img src={bar2} style={{ "width": "60rem", "position": "relative", "top": "", "left": "-22rem", "zIndex": "1 " }} alt='bar2' /></span>
                        <span><img src={bar1} style={{ "width": "60rem", "position": "relative", "top": "", "left": "-22rem", "zIndex": "1", "marginTop": "6rem" }} alt='bar1' /></span>
                    </section>
                    {/* back glow  */}
                    <section style={{ "position": "relative", "top": "" }}>
                        <span style={{ "width": "0rem", "position": "relative", "top": "-84rem", "left": "-4rem" }}> <section className='Ellipse4' style={{ "width": "15rem", "height": "10rem" }} />   </span> {/* pink 1 bottom  */}
                        <span style={{ "width": "0rem", "position": "relative", "top": "-142rem", "left": "0rem" }}> <section className='Ellipse4' style={{ "width": "10rem", "height": "8rem" }} />   </span> {/* pink 2 top  */}
                        <span style={{ "width": "20rem", "position": "relative", "top": "-142rem", "left": "80rem" }}> <section className='Ellipse3' style={{ "width": "20rem", "height": "20rem" }} />  </span>    {/* aqua 3 top  */}
                    </section>

                </section>

                {/* part 3 */}
                <section style={{ "height": "50rem", "backgroundColor": "" }} id='Benifits'>
                    <div className='row' style={{ "marginTop": "4rem" }}>
                        <div className={`fade-in-text-right  ${inView3 ? 'fade-in-right  col-12 text-center' : 'col-12 text-center '}`} ref={ref3}>
                            <h1 className='mb-3' style={{ "fontWeight": "700", "fontSize": "2.8rem", "color": "#C83B93" }}>Get more than just Sponsored Partnerships.</h1>
                            <h1 className='mx-auto' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "#7E7E7E", "width": "30rem" }}>Collaborate with more than 6700+ brands in the country, on different types of projects.</h1>
                        </div>
                    </div>


                    <div className='row mt-4'>
                        <div className='col-6'>
                            <section className={`fade-in-text-right  ${inView4b ? 'fade-in-right   ' : ' '}`} ref={ref4b} style={{ "marginLeft": "6.5rem", "marginTop": "2rem" }}>
                                {/* card 1 */}
                                <section className='KardzLandz ' style={{ "height": "9rem", "width": "35rem", "borderRadius": "20px", "backgroundColor": "" }}>
                                    <section style={{ "paddingTop": "1.8rem", "width": "32rem", "marginLeft": "6rem" }}>
                                        <h1 className='mb-3 ' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "" }}>
                                            Create a free Profile in a hassle free manner
                                        </h1>
                                        <h1 className='mb-4' style={{ "fontWeight": "500", "fontSize": "1rem", "color": "" }}>
                                            By creating your profile on Qoruz the chances of being visible to <br />brands is 3x  compared to any other platforms.
                                        </h1>
                                        <h1 style={{ "position": "relative", "top": "-5rem", "left": "-4rem" }}><i class='bx bx-money' style={{ "color": "" }}></i></h1>
                                    </section>
                                </section>
                                {/* card 2 */}
                                <section className='KardzLandz' style={{ "height": "9rem", "width": "35rem", "borderRadius": "20px", "backgroundColor": "", "marginTop": "2rem", }}>
                                    <section style={{ "paddingTop": "2.5rem", "width": "32rem", "marginLeft": "6rem" }}>
                                        <h1 className='mb-3 ' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "" }}>
                                            Access to Exclusive events Music
                                        </h1>
                                        <h1 className='mb-4' style={{ "fontWeight": "500", "fontSize": "1rem", "color": "" }}>
                                            fest, Brand launches, Invite only meetups and more. </h1>
                                        <h1 style={{ "position": "relative", "top": "-5rem", "left": "-4rem" }}><i class='bx bx-music' ></i></h1>
                                    </section>
                                </section>
                                {/* card 3 */}
                                <section className='KardzLandz' style={{ "height": "9rem", "width": "35rem", "borderRadius": "20px", "backgroundColor": "", "marginTop": "1rem" }}>
                                    <section style={{ "paddingTop": "2.5rem", "width": "32rem", "marginLeft": "6rem" }}>
                                        <h1 className='mb-3 ' style={{ "fontWeight": "700", "fontSize": "1.2rem", "color": "" }}>
                                            Brand Rewards and Goodies
                                        </h1>
                                        <h1 className='mb-4' style={{ "fontWeight": "500", "fontSize": "1rem", "color": "" }}>
                                            Get to try products and experiences ahead of everybody else.
                                        </h1>
                                        <h1 style={{ "position": "relative", "top": "-5rem", "left": "-4rem" }}><i class='bx bx-gift' ></i></h1>
                                    </section>
                                </section>
                            </section>
                        </div>



                        <div className='col-6'>
                            <img src={card} alt='card' className={`fade-in-text-right  ${inView4b ? 'fade-in-right   ' : ' '}`} ref={ref4b} style={{ "width": "46rem", "position": "relative", "left": "-6rem", "top": "0rem", "zIndex": "2" }} />
                        </div>
                    </div>

                    <section style={{ "position": "relative", "top": "-60rem" }}>
                        <span><img src={bar2} style={{ "width": "60rem", "position": "relative", "top": "40rem", "left": "70rem", "zIndex": "1 " }} alt='bar2' /></span>

                    </section>
                </section>

                {/* part 4  logos main section*/}
                <section style={{ "height": "50rem", "backgroundColor": "whitesmoke" }}>
                    <section>

                        <section className='row'>
                            <section className={`fade-in-text-left  ${inView5 ? 'fade-in-left  col-6 ' : ' col-6'}`} ref={ref5} style={{ "paddingTop": "14rem", "paddingLeft": "4rem", "width": "", "zIndex": "2" }}>
                                <h1 style={{ "position": "", "top": "", "fontSize": "3rem", "fontWeight": "700", "color": "#C83B93" }}>Over 6700 Brands are <br />
                                    searching for influencers</h1>
                                <p style={{ "color": "#7E7E7E", "fontSize": "1.6rem", "fontWeight": "600", "marginTop": "2rem", "marginBottom": "2rem" }}>Top brands from all over the globe are searching <br />for influencers like you on Dreebee.</p>


                                <button className='btnz' onClick={signIn} style={{ "position": "relative", "left": "0rem", "width": "316px", "borderRadius": "500px", "height": "64px", "backgroundColor": "#C83B93", "color": "#FFFFFF", "fontSize": "24px", "fontWeight": "700", "border": "none", "boxShadow": "#7E7E7E 0px 0px 10px 2px " }}>Create my Profile &nbsp; <i style={{ "color": "#FFFFFF" }} className="fa-solid fa-arrow-trend-up"></i>
                                </button>
                            </section>
                            <section className={`fade-in-text-left  ${inView5 ? 'fade-in-left  col-6 ' : ' col-6'}`} ref={ref5} style={{ "marginLeft": "-6rem", "marginTop": "5rem", "zIndex": "2" }}>
                                <div className='row'>
                                    <div className='col-4'><img src={img1} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img22} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img3} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'><img src={img6} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img3} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img5} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'><img src={img4} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img6} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img1} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'><img src={img6} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img3} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                    <div className='col-4'><img src={img22} className='Kardz' alt='img1' style={{ "borderRadius": "10px", "width": "15rem" }} /></div>
                                </div>

                            </section>
                        </section>

                        {/* back glow  */}
                        <section style={{ "position": "relative", "top": "" }}>
                            <span style={{ "width": "0rem", "position": "relative", "top": "-8rem", "left": "-30rem", "zIndex": "1" }}> <section className='Ellipse4' style={{ "width": "10rem", "height": "10rem", "zIndex": "1" }} />   </span> {/* pink 1 bottom  */}
                            <span style={{ "width": "0rem", "position": "relative", "top": "-30rem", "left": "40rem", "zIndex": "1" }}> <section className='Ellipse4' style={{ "width": "10rem", "height": "8rem", "zIndex": "1" }} />   </span> {/* pink 2 top  */}
                            <span style={{ "width": "20rem", "position": "relative", "top": "-50rem", "left": "10rem", "zIndex": "1" }}> <section className='Ellipse3' style={{ "width": "15rem", "height": "12rem", "zIndex": "1" }} />  </span>    {/* aqua 3 top  */}
                            <span style={{ "width": "20rem", "position": "relative", "top": "-40rem", "left": "50rem", "zIndex": "1" }}> <section className='Ellipse3' style={{ "width": "20rem", "height": "20rem", "zIndex": "1" }} />  </span>    {/* aqua 4 bottom  */}
                        </section>

                    </section>
                </section>

                {/* part 6 campaign */}
                <section style={{ "marginTop": "4rem", "paddingBottom": "1rem", "backgroundColor": "", "height": "38rem" }}>
                    <section className='row' style={{ "zIndex": "4" }} >
                        <section className='col-12 ' style={{ "zIndex": "3" }}>
                            <h1 className={`fade-in-text-left  ${inView6a ? 'fade-in-left   text-center' : 'text-center '}`} ref={ref6a} style={{ "fontSize": "3.2rem", "fontWeight": "700", "color": "#C83B93" }}>Some of the brand<br />
                                campaigns you just missed</h1>
                        </section>

                        <section className='col-12  mt-5' style={{ "zIndex": "5" }} >

                            <section className='row justify-content-evenly' style={{ "zIndex": "4" }} >
                                {/* card1 */}
                                <section className={`fade-in-text-up   ${inView6b ? 'fade-in-up    col-3' : ' col-3'}`} ref={ref6b} style={{ "zIndex": "5" }} >
                                    <section className='Kardz ' style={{ "height": "22rem", "width": "22rem", "borderRadius": "10px", "background": "#FFF", "boxShadow": "0px 10px 30px 0px", "zIndex": "4" }}>
                                        <h5 className='text-center' style={{ "paddingTop": "6.5rem", "zIndex": "3" }}>Barter Campaign</h5>
                                        <h4 className='text-center mt-4' style={{ "fontWeight": "700" }}>#grandlingeriefestival</h4>
                                        <h4 className='text-center mt-2' style={{ "fontSize": "1rem" }}>Style & Fashion | Lifestyle</h4>
                                    </section>
                                    {/* base line  */}
                                    <section style={{ "height": "10vh", "position": "relative", "top": "-4.5rem", "width": "22rem", "background": "#FFE7E7", "borderRadius": "0 0 10px 10px" }}>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <p style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "paddingLeft": "1rem", "paddingTop": "10px" }}>Platform</p>
                                            </div>

                                            <div className='col-6'>
                                                <p style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "paddingTop": "10px", "paddingLeft": "1rem" }}>Cash Reward</p>
                                                <span style={{ "fontSize": "1.2rem", "fontWeight": "500", "position": "relative", "top": "-1rem", "paddingLeft": "1rem" }}>$3000</span><span style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "position": "relative", "top": "-1rem", "paddingLeft": "10px" }}>Onwards</span>
                                            </div>
                                        </div>
                                    </section>
                                </section>

                                {/* card2  */}
                                <section className={`fade-in-text-up   ${inView6b ? 'fade-in-up    col-3' : ' col-3'}`} ref={ref6b}>
                                    <section className='Kardz ' style={{ "height": "22rem", "width": "22rem", "backgroundColor": "red", "borderRadius": "10px", "background": "#FFF", "boxShadow": "0px 10px 30px 0px" }}>
                                        <h5 className='text-center' style={{ "paddingTop": "6.5rem" }}>Barter Campaign</h5>
                                        <h4 className='text-center mt-4' style={{ "fontWeight": "700" }}>#BingoMadholi</h4>
                                        <h4 className='text-center mt-2' style={{ "fontSize": "1rem" }}>Food | Lifestyle</h4>
                                    </section>
                                    {/* base line  */}
                                    <section style={{ "height": "10vh", "position": "relative", "top": "-4.5rem", "width": "22rem", "background": "#FFE7E7", "borderRadius": "0 0 10px 10px" }}>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <p style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "paddingLeft": "1rem", "paddingTop": "10px" }}>Platform</p>
                                            </div>

                                            <div className='col-6'>
                                                <p style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "paddingTop": "10px", "paddingLeft": "1rem" }}>Cash Reward</p>
                                                <span style={{ "fontSize": "1.2rem", "fontWeight": "500", "position": "relative", "top": "-1rem", "paddingLeft": "1rem" }}>$3000</span><span style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "position": "relative", "top": "-1rem", "paddingLeft": "10px" }}>Onwards</span>
                                            </div>
                                        </div>
                                    </section>
                                </section>

                                {/* card3  */}
                                <section className={`fade-in-text-up   ${inView6b ? 'fade-in-up   col-3 ' : 'col-3 '}`} ref={ref6b}>
                                    <section className='Kardz ' style={{ "height": "22rem", "width": "22rem", "backgroundColor": "red", "borderRadius": "10px", "background": "#FFF", "boxShadow": "0px 10px 30px 0px" }}>
                                        <h5 className='text-center' style={{ "paddingTop": "6.5rem" }}>Barter Campaign</h5>
                                        <h4 className='text-center mt-4' style={{ "fontWeight": "700" }}>#BingoMadholi</h4>
                                        <h4 className='text-center mt-2' style={{ "fontSize": "1rem" }}>Food</h4>
                                    </section>
                                    {/* base line  */}
                                    <section style={{ "height": "10vh", "position": "relative", "top": "-4.5rem", "width": "22rem", "background": "#FFE7E7", "borderRadius": "0 0 10px 10px" }}>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <p style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "paddingLeft": "1rem", "paddingTop": "10px" }}>Platform</p>
                                            </div>

                                            <div className='col-6'>
                                                <p style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "paddingTop": "10px", "paddingLeft": "1rem" }}>Cash Reward</p>
                                                <span style={{ "fontSize": "1.2rem", "fontWeight": "500", "position": "relative", "top": "-1rem", "paddingLeft": "1rem" }}>$3000</span><span style={{ "fontSize": "0.8rem", "fontWeight": "700", "color": "#7E7E7E", "position": "relative", "top": "-1rem", "paddingLeft": "10px" }}>Onwards</span>
                                            </div>
                                        </div>
                                    </section>
                                </section>

                            </section>
                        </section>

                    </section>
                    {/* bars  */}
                    <section style={{ "position": "relative", "top": "-60rem" }}>
                        <span><img src={bar2} style={{ "width": "60rem", "position": "relative", "top": "20rem", "left": "-22rem", "zIndex": "2 " }} alt='bar2' /></span>
                        <span><img src={bar1} style={{ "width": "60rem", "position": "relative", "top": "-20rem", "left": "52rem", "zIndex": "1", "marginTop": "6rem" }} alt='bar1' /></span>
                    </section>
                </section>

                {/* part 7 pink bg line  */}
                <section style={{ "marginTop": "1rem", "height": "26rem", "backgroundColor": "#C83B93", "marginTop": "4rem", "marginBottom": "9rem" }}>

                    <div className='row'>
                        {/* text sec  */}
                        <div className={`fade-in-text-left  ${inView7a ? 'fade-in-left   col-6' : 'col-6 '}`} ref={ref7a} style={{ "paddingLeft": "6rem" }}>
                            <h1 className=' mt-5 pt-5' style={{ "fontSize": "3rem", "fontWeight": "700", "color": "#FFF" }}>Be on EVERY Top<br />Brand’s phonebook   </h1>
                            <button className='mt-4 btnz' onClick={InflueReg} style={{ "position": "relative", "left": "0rem", "width": "316px", "borderRadius": "10px", "height": "64px", "backgroundColor": "#FFFFFF", "color": "#C83B93", "fontSize": "24px", "fontWeight": "700", "border": "none", "boxShadow": "#7E7E7E 0px 0px 10px 2px " }}>Create my Profile &nbsp; <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i>
                            </button>

                        </div>

                        {/* image  */}
                        <div className='col-6'>
                            <span style={{ "position": "relative", "top": "12rem", "left": "2rem" }}>
                                <img src={photo} className={`pop-in  ${inView7b ? 'pop   ' : ' '}`} ref={ref7b} alt='photo' style={{ "width": "32rem", "background": "", "boxShadow": "" }} />
                            </span>
                        </div>
                    </div>
                </section>

                {/* part 5-fAQ */}
                <section style={{ "marginTop": "4rem", "paddingBottom": "2rem", "backgroundColor": "", "minHeight": "50rem" }} id="FAQ">
                    <section className='row'>
                        <section className={`fade-in-only ${inView4 ? 'fade-only   col-12' : 'col-12 '}`} ref={ref4} style={{ "paddingBottom": "4rem" }}>
                            <h1 className='text-center' style={{ "fontWeight": "700", "fontSize": "" }}>FAQs</h1>




                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-5 px-5 pt-4 pb-3 Kardz  Faqz' onClick={(e) => { setMessage(!message) }} style={{ "border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage(!message) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}>
                                        {message
                                            ?
                                            <i className="fa-solid fa-angle-up"></i>
                                            :
                                            <i className="fa-solid fa-angle-down"></i>
                                        }
                                    </span>
                                    </h3>
                                    {message ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3  Kardz Faqz' onClick={(e) => { setMessage1(!message1) }} style={{ "border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage1(!message1) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}>
                                    
                                     {message1
                                            ?
                                            <i className="fa-solid fa-angle-up"></i>
                                            :
                                            <i className="fa-solid fa-angle-down"></i>
                                        }

                                    </span></h3>
                                    {message1 ?
                                        <p className='mb-2  mt-4 ' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz  Faqz' onClick={(e) => { setMessage2(!message2) }} style={{ "border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage2(!message2) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}>
                                    
                                     {message2
                                            ?
                                            <i className="fa-solid fa-angle-up"></i>
                                            :
                                            <i className="fa-solid fa-angle-down"></i>
                                        }

                                    </span></h3>
                                    {message2 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz' onClick={(e) => { setMessage3(!message3) }} style={{ "border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage3(!message3) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}>
                                    
                                     {message3
                                            ?
                                            <i className="fa-solid fa-angle-up"></i>
                                            :
                                            <i className="fa-solid fa-angle-down"></i>
                                        }

                                    </span></h3>
                                    {message3 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz' onClick={(e) => { setMessage4(!message4) }} style={{ "border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage4(!message4) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}>
                                    
                                     {message4
                                            ?
                                            <i className="fa-solid fa-angle-up"></i>
                                            :
                                            <i className="fa-solid fa-angle-down"></i>
                                        }

                                    </span></h3>
                                    {message4 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz' onClick={(e) => { setMessage5(!message5) }} style={{ "border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage5(!message5) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}>
                                    
                                     {message5
                                            ?
                                            <i className="fa-solid fa-angle-up"></i>
                                            :
                                            <i className="fa-solid fa-angle-down"></i>
                                        }

                                    </span></h3>
                                    {message5 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                        </section>
                    </section>
                </section>


                {/* footer  */}
                <CommFoot />

            </section>
        </>
    )
}

export default CreatorsLandingSec2