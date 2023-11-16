import React from 'react'

import CommFoot from '../CommonComponents/CommFoot'
import FlowerPhoto2 from '../Landinpg/LandinPg_Sub/FlowerPhoto2'

import line from '../../Imagez/BusinessLandinPgImg/Radio_Lined Up.png'
import bar1 from '../../Imagez/BusinessLandinPgImg/Bars1.png'
import bar2 from '../../Imagez/BusinessLandinPgImg/Bars2.png'
import left from '../../Imagez/BusinessLandinPgImg/left.png'
import right from '../../Imagez/BusinessLandinPgImg/right.png'
import trapbox from '../../Imagez/BusinessLandinPgImg/Credits1.png'
import BussCard1 from './BussCard1'
import { BussCard2 } from './BussCard2'
import Kard1 from '../Landinpg/LandinPg_Sub/kard1'
import Slider from 'react-slick'
import Kard2 from '../Landinpg/LandinPg_Sub/Kard2'
import RangeBar1 from './RangeBar1'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'



const BussLandinSec2 = () => {

    function SquarePrevArrow(props) {
        const { btnz, style, onClick } = props;
        return (
            <div
                className="btnz"
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: "2",
                    position: "relative",
                    left: "43.8rem", top: "35rem",
                    height: "60px",
                    width: "60px",
                    borderRadius: "50% 0 0 50%",
                    // background: "white",
                    // border: "1px solid gray",
                    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"

                }
                }
                onClick={onClick} >
                <i class='bx bx-chevron-left' style={{ fontSize: "32px" }}></i>
            </div>
        );
    }
    function SquareNextArrow(props) {
        const { btnz, style, onClick } = props;
        return (
            <div
                className="btnz"
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: "2",
                    position: "relative",
                    top: "1.2rem", left: "49.6rem",
                    height: "60px",
                    width: "60px",
                    borderRadius: " 0 50% 50% 0",
                    // background: "white",
                    // border: "1px solid gray",
                    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"

                }}
                onClick={onClick}
            >
                <i class='bx bx-chevron-right' style={{ fontSize: "32px" }}></i>
            </div>
        );
    }
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 3,
        nextArrow: <SquareNextArrow />,
        prevArrow: <SquarePrevArrow />
    };

    function SquarePrevArrow2(props) {
        const { btnz, style, onClick } = props;
        return (
            <div
                className="btnz"
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: "2",
                    position: "relative",
                    left: "42rem", top: "25rem",
                    height: "60px",
                    width: "60px",
                    borderRadius: "50% 0 0 50%",
                    // background: "white",
                    // border: "1px solid gray",
                    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"


                }
                }
                onClick={onClick} >
                <i class='bx bx-chevron-left' style={{ fontSize: "32px" }}></i>
            </div>
        );
    }
    function SquareNextArrow2(props) {
        const { btnz, style, onClick } = props;
        return (
            <div
                className="btnz"
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: "2",
                    position: "relative",
                    top: "-8.7rem", left: "48rem",
                    height: "60px",
                    width: "60px",
                    borderRadius: " 0 50% 50% 0",
                    // background: "white",
                    // border: "1px solid gray",
                    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"


                }}
                onClick={onClick}
            >
                <i class='bx bx-chevron-right' style={{ fontSize: "32px" }}></i>
            </div>
        );
    }
    const settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        nextArrow: <SquareNextArrow2 />,
        prevArrow: <SquarePrevArrow2 />
    };





    const textRef = useRef(null);

    // REFFF 1
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.4
    });



    // REFFF 2
    const [ref2, inView2] = useInView({
        // triggerOnce: true, 
        threshold: 0.4
    });
    // REFFF 3
    const [ref3, inView3] = useInView({
        // triggerOnce: true, 
        threshold: 0.4
    });


    // REFFF 4
    const [ref4, inView4] = useInView({
        // triggerOnce: true, 
        threshold: 0.4
    });
    // REFFF 5
    const [ref5, inView5] = useInView({
        // triggerOnce: true, 
        threshold: 0.4
    });


    // REFFF 6
    const [ref6, inView6] = useInView({
        // triggerOnce: true, 
        threshold: 0.4
    });
    // REFFF 7
    const [ref7, inView7] = useInView({
        // triggerOnce: true, 
        threshold: 0.4
    });


    // REFFF 8
    const [ref8, inView8] = useInView({
        // triggerOnce: true, 
        threshold: 0.8
    });
    // REFFF 9
    const [ref9, inView9] = useInView({
        // triggerOnce: true, 
        threshold: 0.5
    });
    // REFFF 10
    const [ref10, inView10] = useInView({
        // triggerOnce: true, 
        threshold: 0.2
    });


    // REFFF 11
    const [ref11, inView11] = useInView({
        // triggerOnce: true, 
        threshold: 0.5
    });
    // REFFF 12
    const [ref12, inView12] = useInView({
        // triggerOnce: true, 
        threshold: 0.8,
        delay: 1000
    });



    // REFFF 13
    const [ref13, inView13] = useInView({
        // triggerOnce: true, 
        threshold: 0.5
    });
    // REFFF 14
    const [ref14, inView14] = useInView({
        // triggerOnce: true, 
        threshold: 0.5,
        delay: 1000
    });








    const navigate = useNavigate();

    const signIn = () => {
        navigate("/SignUp")
    }


    return (
        <>
            <section className='row h-25'>
                {/* part 1 -logoz box */}
                <section style={{ "backgroundColor": "" }}>
                    <section style={{ "position": "relative", "top": "-0.899rem" }}>
                        <div className='col-10 '  >
                            <section className={`fade-in-text-up ${inView1 ? 'fade-in-up huhuL Kardz' : 'huhuL Kardz'}`} ref={ref1} style={{ "boxSizing": "borderBox", "position": "relative", "width": "1320px", "height": "122px", "left": "5rem", "top": "-6.8rem", zIndex: "10" }}>
                                {/* logo row  */}
                                <div className='row d-flex justify-evenly pt-4 ' style={{ zIndex: "10" }}>
                                    <div className='col-1'></div>
                                    <div className='col '>
                                        <i className=" GlowOne fa-brands fa-apple mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>

                                    <div className='col '>
                                        <i className="GlowOne fa-brands fa-amazon me-3" style={{ "fontSize": "5rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "1.5rem" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className="GlowOne fa-brands fa-google mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "6rem", "top": "1.5rem" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className="GlowOne fa-brands fa-youtube mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "8rem", "top": "1.5rem" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className="GlowOne fa-solid fa-hippo mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className="GlowOne fa-brands fa-wordpress mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className="GlowOne fa-brands fa-windows" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                            </section>
                        </div>


                        <section style={{ "backgroundColor": "none", "position": "relative", "top": "" }}>
                            <div className='row'>
                                <div className={`fade-in-text-right ${inView2 ? 'fade-in-right  col' : ' col'}`} ref={ref2} style={{ "position": "relative", "left": "8rem", "zIndex": "2" }}>
                                    <h3 style={{ "fontSize": "2.8rem", "fontWeight": "700", "color": "" }}>The difference</h3>
                                    <h3 style={{ "fontSize": "3.2rem", "fontWeight": "700", "color": "#C83B93" }}>DREABEE makes</h3>

                                </div>
                                <div className={`fade-in-text-right ${inView3 ? 'fade-in-right  col' : ' col'}`} ref={ref3} style={{ "position": "relative", "left": "-4rem", "zIndex": "2" }}>
                                    <h3 style={{ "fontSize": "1.2rem", "fontWeight": "700", "width": "37rem", "marginTop": "0.5rem", "lineHeight": "30px" }}>DREABEE gives a simplified experience at every step of your journey to run measurable influencer campaigns. Even with low bandwidth, no expertise & limited budget.</h3>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>

                {/* part 2 */}
                <section style={{ "backgroundColor": "", "height": "40rem", "marginTop": "5rem" }} id='BusSuite'>
                    <div className='row'>
                        <div className={`fade-in-text-up ${inView4 ? 'fade-in-up  col-6' : ' col-6'}`} ref={ref4}>
                            {/* <span style={{ "height": "0", "width": "0", "position": "relative" }}>
                                <div className='bg-info p-3' style={{ "height": "", "width": "px" }}> hehe</div>
                            </span> */}
                            <span style={{ "position": "relative", "left": "11rem", "top": "5.5rem" }}>
                                <div className='row' style={{ "width": "28rem" }}>
                                    <p style={{ "fontSize": "1.2rem", "fontWeight": "600" }}> Discover relevant creators from our extensive database of over 300,000. Filter them by category, location, follower range, and more.  </p>
                                </div>
                                <div className='row'>
                                    <h2 style={{ "fontWeight": "700", "fontSize": "2.2rem", "marginTop": "2rem" }}>Request to Collaborate</h2>
                                </div>
                                <div className='row'>
                                    <h2 style={{ "fontWeight": "700", "fontSize": "2.2rem", "marginTop": "4rem", "paddingTop": "" }}>Negotiate Cost</h2>
                                </div>
                                <div className='row'>
                                    <h2 style={{ "fontWeight": "700", "fontSize": "2.2rem", "marginTop": "4rem" }}>Measure Result</h2>
                                </div>
                                <img src={line} alt='line' style={{ "height": "30rem", "position": "relative", "left": "-6rem", "top": "-30rem" }} />
                            </span>
                        </div>
                        <div className={`fade-in-text-up ${inView5 ? 'fade-in-up  col-6' : ' col-6'}`} ref={ref5}>
                            <span style={{ "position": "relative", "top": "-2rem", "left": "-16rem" }}><FlowerPhoto2 style={{ "width": "12rem" }} /></span>
                        </div>
                    </div>
                    <section style={{ "position": "relative", "top": "" }}>
                        <span style={{ "width": "0rem", "position": "relative", "top": "-80rem", "left": "10rem", "zIndex": "1" }}> <section className='Ellipse4' style={{ "width": "15rem", "height": "10rem", "zIndex": "1", }} />   </span> {/* pink 1 bottom  */}
                        <span style={{ "width": "0rem", "position": "relative", "top": "10rem", "left": "20rem", "zIndex": "-11" }}> <section className='Ellipse3' style={{ "width": "10rem", "height": "2rem", "zIndex": "1" }} />   </span> {/* pink 2 top  */}
                        {/* <span style={{ "width": "10rem", "position": "relative", "top": "-110rem", "left": "-10rem", "zIndex": "1" }}> <section className='Ellipse3' style={{ "width": "15rem", "height": "18rem", "zIndex": "1" }} />  </span> */}
                        <span style={{ "width": "20rem", "position": "relative", "top": "-95rem", "left": "50rem", "zIndex": "1" }}> <section className='Ellipse3' style={{ "width": "10rem", "height": "15rem", "zIndex": "1" }} />  </span>
                    </section>

                </section>

                {/* part 3 SQUARE CARDS  */}
                <section style={{ "backgroundColor": "", "height": "55rem" }} id='keyFeaturez'>
                    <div className='row py-5' style={{ "color": "" }}>

                        <div className={`fade-in-text-right ${inView6 ? 'fade-in-right col-12 text-center' : 'col-12 text-center'}`} ref={ref6} >  <h1 style={{ "fontWeight": "700", "fontSize": "3rem", "color": "", "zIndex": "4" }}>Key Features</h1> <hr className=' mx-auto' style={{ "width": "10%", "height": "6px", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem", "zIndex": "4" }} /></div>
                        <div className={`fade-in-text-right ${inView6 ? 'fade-in-right col-12  mt-4' : 'col-12  mt-4'}`} ref={ref6}><h1 className='text-center' style={{ "lineHeight": "35px", "fontSize": "1.2rem", "fontWeight": "700", "marginLeft": "15rem", "width": "60rem" }}>You are all covered with DREABEE, from finding influencers, and collaborating to measuring the campaign ROI. We have every tool required to run a successful influencer campaign.</h1></div>

                        <div className='col-12'>
                            <div className='row' style={{ "position": "relative", "top": "-0rem", "left": "-15rem" }}>
                                <div className='col-12'>
                                    <Slider className='roundImg ' {...settings2} style={{ "width": "100vw", "height": "20rem", "marginLeft": "13.8rem", "paddingBottom": "" }}>

                                        <div className=''>
                                            <section className='' style={{ "position": "relative", "top": "1rem" }}>
                                                <Kard1 />
                                            </section>

                                        </div>
                                        <div className=''>
                                            <section style={{ "position": "relative", "top": "10rem" }}>
                                                <Kard1 />
                                            </section>
                                        </div>
                                        <div className=''>
                                            <section style={{ "position": "relative", "top": "10rem" }}>
                                                <Kard1 />
                                            </section>
                                        </div>
                                        <div className=''>
                                            <section style={{ "position": "relative", "top": "1rem" }}>
                                                <Kard1 />
                                            </section>
                                        </div>
                                        <div className=''>
                                            <section style={{ "position": "relative", "top": "10rem" }}>
                                                <Kard1 />
                                            </section>
                                        </div>
                                        <div className=''>
                                            <section style={{ "position": "relative", "top": "10rem" }}>
                                                <Kard1 />
                                            </section>
                                        </div>

                                    </Slider>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* part 4 */}
                <section style={{ "backgroundColor": "", "height": "45rem", "paddingTop": "5rem", "zIndex": "2" }}>
                    <div className='row' style={{ "zIndex": "2" }}>

                        <div className='col-4 text-center' style={{ "zIndex": "2" }}>
                            <img src={left} className={`pop-in ${inView10 ? 'pop pt-5' : 'pt-5'}`} ref={ref10} alt='img1' style={{ "width": "22rem", "zIndex": "2" }} />
                        </div>


                        <div className='col-4' >


                            <section className={`fade-in-text-up ${inView7 ? 'fade-in-up ' : ''}`} ref={ref7} >

                                <h1 style={{ "width": "50rem", "position": "relative", "left": "-6rem", "top": "7rem" }}> <span style={{ "fontWeight": "700", "fontSize": "3rem", "color": "#7E7E7E", }}>Low to No experience running </span> <br />
                                </h1>

                                <h1 style={{ "width": "50rem", "position": "relative", "top": "6rem", "left": "1rem", "fontWeight": "700", "fontSize": "3rem", }}>
                                    influencer campaigns?
                                </h1>

                                <hr className={`fade-in-text-right ${inView9 ? 'fade-in-right mx-auto' : 'mx-auto'}`} ref={ref9} style={{ "width": "30%", "height": "6px", "position": "relative", "top": "5.5rem", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem" }} />
                            </section>


                            <section className={`fade-in-text-up ${inView8 ? 'fade-in-up ' : ''}`} ref={ref8} >
                                <h1 style={{ "width": "50rem", "position": "relative", "top": "12rem", "left": "2rem", "fontWeight": "700", "fontSize": "3rem", "color": "#C83B93" }}>
                                    DREABEE for you!
                                </h1>

                                {/* button  */}
                                <button className='UnEvenBtnz' onClick={signIn} style={{ "zIndex": "2", "width": "310px", "height": "64px", "backgroundColor": "transparent", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "13rem", "marginLeft": "4rem" }}>
                                    <span style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93" }}>Get Started for free <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */} </span>
                                </button>
                            </section>



                        </div>

                        <div className='col-4 text-center'>
                            <img src={right} alt='img2' className={`pop-in ${inView10 ? 'pop pt-5' : 'pt-5'}`} ref={ref10} style={{ "width": "20rem", "zIndex": "1" }} />
                        </div>

                    </div>

                    <section style={{ "position": "relative", "top": "" }}>
                        <span style={{ "width": "0rem", "position": "relative", "top": "-40rem", "left": "30rem", "zIndex": "1" }}> <section className='Ellipse4' style={{ "width": "10rem", "height": "10rem" }} />   </span>
                        <span style={{ "width": "20rem", "position": "relative", "top": "-40rem", "left": "" }}> <section className='Ellipse3' style={{ "width": "15rem", "height": "15rem", "zIndex": "1" }} />  </span>
                        <span style={{ "width": "20rem", "position": "relative", "top": "-50rem", "left": "50rem", "zIndex": "1" }}> <section className='Ellipse3' style={{ "width": "10rem", "height": "15rem", "zIndex": "1" }} />  </span>

                    </section>
                </section>

                {/* part 4 LONG CARDS RECTANGLE   */}
                <section style={{ "backgroundColor": "", "height": "32rem", "marginTop": "10rem", "marginBottom": "0rem" }} id='Testimonialz'>
                    <div className='row text-center'>
                        <div className='col-12 text-center'>

                            <div className='col-12 text-center mb-3'>  <h1 className={`fade-in-text-right ${inView11 ? 'fade-in-right ' : ''}`} ref={ref11} style={{ "fontWeight": "700", "fontSize": "3.1rem", "color": "" }}>Customer Love </h1> <hr className={`fade-in-text-right ${inView12 ? 'fade-in-right mx-auto' : 'mx-auto'}`} ref={ref12} style={{ "width": "10%", "height": "6px", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem" }} /></div>

                            {/* <hr className=' mx' style={{ "width": "10%", "height": "6px", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem" }} /> */}
                            {/* <section className='d-flex'>
                                <BussCard1 />
                                <BussCard1 />
                                <BussCard1 />

                            </section> */}
                            <section className='cardss' style={{ "position": "relative", "top": "-4rem", "left": "0rem" }}>
                                <div className='mb-5'>
                                    <Slider {...settings3} style={{ "width": "100%", "height": "0px", "marginLeft": "0rem", "paddingLeft": "0rem", "zIndex": "2" }}>
                                        <div className=''>
                                            <Kard2 />
                                        </div>
                                        <div className='' style={{ "marginLeft": "1rem" }}>
                                            <Kard2 />
                                        </div>
                                        <div className='' style={{ "marginLeft": "1rem" }}>
                                            <Kard2 />
                                        </div>
                                        <div className='' style={{ "marginLeft": "1rem" }}>
                                            <Kard2 />
                                        </div>
                                        <div className='' style={{ "marginLeft": "1rem" }}>
                                            <Kard2 />
                                        </div>
                                        <div className='' style={{ "marginLeft": "1rem" }}>
                                            <Kard2 />
                                        </div>

                                    </Slider>
                                </div>
                            </section>
                        </div>



                    </div>
                    <section style={{ "position": "relative", "top": "-21rem", height: "0px" }}>
                        <span><img src={bar2} style={{ "width": "60rem", "position": "relative", "top": "0rem", "left": "45rem", "transform": "rotate(135deg)", "zIndex": "1 " }} alt='bar2' /></span>
                        <span><img src={bar1} style={{ "width": "60rem", "position": "relative", "top": "-36rem", "left": "-10rem", "transform": "rotate(45deg)", "zIndex": "1", "marginTop": "6rem" }} alt='bar1' /></span>
                    </section>
                </section>

                {/* part 5 -colors bars */}
                <div className='' style={{ "height": "82rem", "backgroundColor": "black", "zIndex": "-5", "overflow": "hidden" }} id='Pricing'>

                    <section className='bAckColORs' >
                        <section className='Ellipse2F' style={{ "position": "relative", "left": "65rem", "top": "10rem", "zIndex": "" }} />
                        <section className='Ellipse1F' style={{ "position": "relative", "width": " 15rem", "left": "46rem", "top": "3rem" }} />
                    </section>


                    {/* footer 1  */}
                    <section className=" mb-5" style={{ "position": "relative", "top": "-32rem", "height": "2rem" }}>
                        <div className='container'>
                            <div className='row ' style={{ "height": "0px" }}>
                                <div className='col-8 ' style={{ "height": "0px" }}>
                                    {/* <Tezt /> */}
                                    <section className={`fade-in-text-right ${inView13 ? 'fade-in-right' : ''}`} ref={ref13} style={{ "marginTop": "6rem" }}>
                                        <h4 style={{ "position": 'relative', "width": "", "left": "", "top": "-6rem", "fontWeight": "700", "fontSize": "44px", "lineHeight": "70px", "color": "#C83B93" }}>Your search for the perfect<br /> creators ends now. </h4>
                                        <p style={{ "position": "relative", "width": "", "left": "", "top": "-6rem", "fontWeight": "600", "fontSize": "24px", "lineHeight": "40px", "color": "#FFFFFF", "marginTop": "2rem" }}>Build brand awareness & long-lasting customer <br />relationships while driving sales with creator <br />collaborations. Get started today.</p>
                                    </section>

                                </div>

                                <div className='col-4 text-center ' style={{ "height": "0px" }}>
                                    <section className={`fade-in-text-right ${inView13 ? 'fade-in-right' : ''}`} ref={ref13}  style={{ "paddingLeft": "10rem", "position": "relative", "top": "-8rem", "left": "-25rem" }}>

                                        {/* Buttons  */}
                                        <section >
                                            <button className='pb-2 btnz' style={{ "width": "630px", "height": "75px", "boxShadow": "#D12C8B 0px 5px 2px 2px ", "backgroundColor": "white", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "" }}>
                                                <div style={{ "color": "#7E7E7E", "fontSize": "12px" }}>STARTER PLAN</div>
                                                <span style={{ "fontWeight": "700", "paddingBottom": "", "fontSize": "24px", "lineHeight": "0px", "textAlign": "center", "color": "#C83B93", }}>Marketing Planning + Reporting <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */}</span>
                                            </button>
                                            <button className='pb-2 mt-5 mb-5 btnz' style={{ "width": "630px", "height": "75px", "boxShadow": "#D12C8B 0px 5px 2px 2px ", "backgroundColor": "white", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "" }}>
                                                <div style={{ "color": "#7E7E7E", "fontSize": "12px" }}>ENTERPRISE PLAN</div>
                                                <span style={{ "fontWeight": "700", "paddingBottom": "", "fontSize": "24px", "lineHeight": "0px", "textAlign": "center", "color": "#C83B93", }}>Custom Planning + Reporting <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */}</span>
                                            </button>
                                        </section>


                                        <section>
                                            <span >

                                                {/* <img src={trapbox} alt='trapbox' style={{ "height": "28rem", "position": "", "top": "-4rem" }} />
                                                <span style={{ "position": "relative", "top": "-26rem", "left": "10rem" }}><button style={{ "height": "3.5rem", "fontWeight": "800", "width": "12rem", "border": "none", "borderRadius": "40px", "backgroundColor": "#D12C8B ", "color": "white" }}>0 Credits</button></span>
                                                <span style={{ "position": "relative", "top": "-10rem", "left": "24rem" }}><button style={{ "height": "3.5rem", "fontWeight": "800", "width": "12rem", "border": "none", "borderRadius": "40px", "backgroundColor": "#D12C8B ", "color": "white" }}>0 Credits</button></span> */}
                                                <RangeBar1 />

                                            </span>
                                            {/* <FlowerFoto /> */}


                                        </section>

                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                    <CommFoot />
                </div>
                {/* footer 2  */}

            </section>
        </>
    )
}

export default BussLandinSec2