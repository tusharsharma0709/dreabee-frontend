import React from 'react'
import photo2 from '../../Imagez/PaidCollabsLandingPgImg/Key Features.png'
import line from '../../Imagez/PaidCollabsLandingPgImg/Hexagon lined up.png'
import hexago from '../../Imagez/PaidCollabsLandingPgImg/Ticked_Hexagon.png'
import img from '../../Imagez/PaidCollabsLandingPgImg/image 27.png'
import imgT from '../../Imagez/PaidCollabsLandingPgImg/Faded Image_Top.png'
import imgB from '../../Imagez/PaidCollabsLandingPgImg/Faded Image_Bottom.png'
import bar1 from '../../Imagez/PaidCollabsLandingPgImg/Bars1.png'
import bar2 from '../../Imagez/PaidCollabsLandingPgImg/Bars2.png'
import image from '../../Imagez/PaidCollabsLandingPgImg/Paid-Collab_works.png'
import CommFoot from '../CommonComponents/CommFoot'
import CommCard2 from '../CommonComponents/CommCard2'
import BussCard1 from '../Business_LandingPg/BussCard1'
import Slider from 'react-slick'
import { useState } from 'react'
import Kard2 from '../Landinpg/LandinPg_Sub/Kard2'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'



const PaidLandingSec2 = () => {

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
                    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
                    // background: "white",
                    // border: "1px solid gray",



                }}
                onClick={onClick}
            >
                <i class='bx bx-chevron-right' style={{ fontSize: "32px" }}></i>
            </div>
        );
    }
    const settings3 = {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        nextArrow: <SquareNextArrow2 />,
        prevArrow: <SquarePrevArrow2 />,
    
        // prevArrow: false,
        // nextArrow: false,
    };

    const textRef = useRef(null);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.4,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref4, inView4] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });


    const [ref5, inView5] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });
    const [ref6a, inView6a] = useInView({
        // triggerOnce: true,
        threshold: 0.5,
    });
    const [ref6b, inView6b] = useInView({
        // triggerOnce: true,
        threshold: 0.6,
    });

    const [ref7, inView7] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    const [ref8a, inView8a] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    const [ref8b, inView8b] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })


    const [ref9, inView9] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })
    const [ref10, inView10] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })




    const [message, setMessage] = useState(false);
    const [message1, setMessage1] = useState(false);
    const [message2, setMessage2] = useState(false);
    const [message3, setMessage3] = useState(false);
    const [message4, setMessage4] = useState(false);
    const [message5, setMessage5] = useState(false);


    const navigate = useNavigate();

    const signIn = () => {
        navigate("/LogIn")
    }
    return (
        <>
            <section className='row' style={{ height: "0px" }}>
                {/* part 1 /logo bar */}
                <section style={{ "backgroundColor": "" }}>
                    <section style={{ "position": "relative", "top": "-0.899rem" }}>
                        <div className='col-10 '  >
                            <section className={`fade-in-text-up ${inView1 ? 'fade-in-up huhuL  Kardz' : 'huhuL  Kardz'}`} ref={ref1} style={{ "boxSizing": "borderBox", "position": "relative", "width": "1320px", "height": "122px", "left": "5rem", "top": "-6.8rem" }}>
                                {/* logo row  */}
                                <div className='row d-flex justify-evenly pt-4' >
                                    <div className='col-1'></div>
                                    <div className='col '>
                                        <i className="GlowOne fa-brands fa-apple mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
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
                    </section>
                </section>

                {/* part 2 */}
                <section style={{ "height": "36rem", "background": "" }} id='Works'>
                    <div className='row' style={{ "marginTop": "-2rem" }}>
                        <div className={`fade-in-text-right ${inView2 ? 'fade-in-right col-12 text-center' : 'col-12 text-center'}`} ref={ref2}>
                            <h1 style={{ "fontWeight": "700", "fontSize": "3.1rem", "color": "#C83B93" }}>How Paid Collab Works?</h1> <hr className=' mx-auto' style={{ "width": "10%", "height": "6px", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem" }} />
                            <label style={{ "color": "#7E7E7E", "fontWeight": "700", "fontSize": "1.2rem" }}>Get started with your campaign in 3 easy step.</label>
                        </div>
                    </div>

                    <div className='row' style={{ "marginTop": "3.5rem" }}>
                        <div className='col-6  ' style={{ "height": "60vh" }}>
                            <section className={`fade-in-text-up ${inView3 ? 'fade-in-up  ' : ' '}`} ref={ref3} style={{ "paddingTop": "10rem", "width": "35rem", "marginLeft": "5rem" }}>
                                <h1 className='mb-4' style={{ "fontWeight": "700", "fontSize": "3.1rem", "color": "#C83B93" }}>Post Campaign Brief</h1>
                                <span className='' style={{ "color": "#7E7E7E", "fontWeight": "700", "fontSize": "1.2rem", "paddingTop": " 2rem" }}>Post your requirement with your campaign objective, budget & influencer demography (category, location) and <span style={{ "color": "black" }}> forecast the result of your campaign.</span></span><br />


                                <button onClick={signIn} className='UnEvenBtnz' style={{ "width": "330px", "height": "64px", "backgroundColor": "white", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "1.8rem" }}>
                                    <span style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93" }}>Post Campaign Brief <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */} </span>
                                </button>
                            </section>
                        </div>

                        <div className='col-6 '>
                            <img src={image} alt='image' className={`fade-in-text-up ${inView4 ? 'fade-in-up  Kardz' : ' Kardz'}`} ref={ref4} style={{ "width": "32rem", "position": "relative", "top": "0rem", "left": "2rem", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.0)" }} />
                        </div>
                    </div>
                    {/* back glow  */}
                    {/* <section style={{ "position": "relative", "top": "" }}> */}
                    {/* <span style={{ "width": "0rem", "position": "relative", "top": "-84rem", "left": "-4rem" }}> <section className='Ellipse4' style={{ "width": "15rem", "height": "10rem" }} />   </span> */}
                    <span style={{ "width": "0rem", "position": "relative", "top": "-40rem", "left": "-40rem" }}> <section className='Ellipse4' style={{ "width": "12rem", "height": "10rem" }} />   </span> {/* pink 2 top  */}
                    <span style={{ "width": "20rem", "position": "relative", "top": "-15rem", "left": "40rem" }}> <section className='Ellipse3' style={{ "width": "8rem", "height": "8rem" }} />  </span>    {/* aqua 3 top  */}
                    {/* </section> */}

                </section>

                {/* part 3 */}
                <section style={{ "marginTop": "12rem", "backgroundColor": "", "height": "45rem" }} id='Cases'>
                    <div className='row'>
                        <div className='col-6 '>
                            <section className={`fade-in-text-up ${inView5 ? 'fade-in-up  ' : ' '}`} ref={ref5} style={{ "paddingTop": "15rem", "width": "35rem", "marginLeft": "6rem" }}>
                                <h1 className='mb-4' style={{ "fontWeight": "700", "fontSize": "3.1rem", "color": "" }}>Campaign Types</h1>
                                <span className='' style={{ "color": "#7E7E7E", "fontWeight": "700", "fontSize": "1.2rem", "paddingTop": " 2rem" }}>DREABEE Paid Collabs works with the creators and <span style={{ "color": "black" }}> executes the campaign on your behalf. If there are any changes from your end, they get it sorted for you.</span></span><br />


                                <button className='UnEvenBtnz' onClick={signIn} style={{ "width": "330px", "height": "64px", "backgroundColor": "transparent", "border": "2px solid #D12C8B", "borderRadius": "500px", "marginTop": "1.8rem" }}>
                                    <span style={{ "fontWeight": "700", "fontSize": "24px", "lineHeight": "34px", "textAlign": "center", "color": "#C83B93" }}>Post Campaign Brief <i style={{ "color": "#C83B93" }} className="fa-solid fa-arrow-trend-up"></i> {/* <i className="fa-solid fa-arrow-up-right-from-square" style={{"color":"white"}}></i> */} </span>
                                </button>
                            </section>

                        </div>
                        <div className='col-6 '>
                            {/* <section style={{"poistion":"relative","left":"-10rem"}}> */}
                            <section className='row' style={{ "position": "relative", "left": "0rem" }}>


                                <div className={`fade-in-text-up ${inView6a ? 'fade-in-up  col-6 text-center' : ' col-6 text-center'}`} ref={ref6a} style={{ "zIndex": "2 " }}>

                                    <img src={img} alt='img' className='Kardz' style={{ "height": "18rem", "marginTop": "2rem", "borderRadius": "20px" }} />
                                    <img src={img} alt='img' className='Kardz' style={{ "height": "18rem", "marginTop": "4rem", "borderRadius": "20px" }} />
                                </div>
                                <div className={`fade-in-text-up ${inView6b ? 'fade-in-up col-6 ' : ' col-6'}`} ref={ref6b}>
                                    <img src={imgT} className='z' alt='img' style={{ "height": "18rem", "borderRadius": "20px", "marginTop": "-8rem" }} />
                                    <img src={img} className='Kardz' alt='img' style={{ "height": "18rem", "borderRadius": "20px", "marginTop": "3rem" }} />
                                    <img src={imgB} className='z' alt='img' style={{ "height": "18rem", "borderRadius": "20px", "marginTop": "3rem" }} />

                                </div>
                            </section>

                            <section style={{ "position": "relative", "top": "-61rem", "height": "0px" }}>
                                <span><img src={bar2} style={{ "width": "60rem", "position": "relative", "top": "-5rem", "left": "-50rem", "transform": "rotate(-15deg)", "zIndex": "1 " }} alt='bar2' /></span>
                                <span><img src={bar1} style={{ "width": "60rem", "position": "relative", "top": "-7rem", "left": "-50rem", "transform": "rotate(15deg)", "zIndex": "1", "marginTop": "6rem", pointerEvents: "none" }} alt='bar1' /></span>
                            </section>
                            {/* </section> */}

                        </div>
                    </div>
                </section>

                {/* part 6 /key features */}
                <section style={{ "height": "45rem", "marginTop": "10rem", "background": "" }} id='Features'>
                    {/* heading  */}
                    <div className={`fade-in-text-right ${inView7 ? 'fade-in-right row text-center' : 'row text-center'}`} ref={ref7}>
                        <div className='col-12 text-center mt-3 mb-3'>  <h1 style={{ "fontWeight": "700", "fontSize": "3.1rem", "color": "" }}>Key Features</h1> <hr className=' mx-auto' style={{ "width": "10%", "height": "6px", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem" }} />
                        </div>
                    </div>
                    {/* text /image */}
                    <div className='row mt-4'>
                        <div className={`fade-in-text-up ${inView8a ? 'fade-in-up  col-6' : ' col-6'}`} ref={ref8a}>

                            <div className='row' style={{ "marginLeft": "-1rem" }}>
                                <div className='col-3 text-end'>
                                    <span style={{ "position": "", }}>
                                        <img src={line} alt='line' style={{ "height": "35rem" }} />
                                    </span>

                                </div>
                                <div className='col-9'>
                                    <section>
                                        <h4 style={{ "fontWeight": "700", "fontSize": "1.2rem", "marginTop": "1rem" }}>Forecast Campaign</h4>
                                        <span>
                                            <h4 style={{ "fontWeight": "700", "fontSize": "1.2rem", "marginTop": "4.5rem" }}>Simplify Campaign Measurement</h4>
                                            <span style={{ "color": "#7E7E7E", "fontWeight": "600", "fontSize": "1rem" }}>With Qoruz, you can generate standardized reports for <br />all campaigns. It can be shared with team members to <br />measure the campaign outcome.</span>
                                            <span className='row'>
                                                <span className='col-1'>
                                                    <span> <img src={hexago} alt='hexago' style={{ "width": "1.5rem", "marginTop": "1.8rem" }} /> </span>
                                                    <span> <img src={hexago} alt='hexago' style={{ "width": "1.5rem", "marginTop": "1.9rem" }} /> </span>
                                                    <span> <img src={hexago} alt='hexago' style={{ "width": "1.5rem", "marginTop": "1.9rem" }} /> </span>
                                                </span>
                                                <span className='col-11'>
                                                    <p style={{ "color": "#7E7E7E", "fontWeight": "600", "fontSize": "1rem", "marginLeft": "0.5rem", "marginTop": "2rem" }}>Budget vs. Campaign Reach</p>
                                                    <p style={{ "color": "#7E7E7E", "fontWeight": "600", "fontSize": "1rem", "marginLeft": "0.5rem", "marginTop": "2rem" }}>Reach (Historical vs. Actual)</p>
                                                    <p style={{ "color": "#7E7E7E", "fontWeight": "600", "fontSize": "1rem", "marginLeft": "0.5rem", "marginTop": "2rem" }}>Influencer’s CPV & CPE</p>
                                                </span>
                                            </span>
                                        </span>

                                        <h4 style={{ "fontWeight": "700", "fontSize": "1.2rem", "marginTop": "1.6rem" }}>Accelerate Campaign Launch</h4>
                                        <h4 style={{ "fontWeight": "700", "fontSize": "1.2rem", "marginTop": "4.4rem" }}>Overcome Bandwidth Limitation</h4>
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div className={`fade-in-text-up ${inView8b ? 'fade-in-up  col-6' : 'col-6 '}`} ref={ref8b}>
                            <span> <img className='Kardz' style={{ "width": "40rem", "marginTop": "5rem", "borderRadius": "30px" }} src={photo2} alt='photo2' /></span>
                        </div>
                    </div>

                    <span style={{ "width": "20rem", "position": "relative", "top": "-50rem", "left": "-40rem" }}> <section className='Ellipse4' style={{ "width": "10rem", "height": "12rem", "zIndex": "-6" }} />  </span>    {/* aqua 3 top  */}
                    <span style={{ "width": "20rem", "position": "relative", "top": "-10rem", "left": "80rem" }}> <section className='Ellipse3' style={{ "width": "10rem", "height": "12rem", "zIndex": "-6" }} />  </span>    {/* aqua 3 top  */}

                </section>

                {/* part 4 */}
                <section style={{ "backgroundColor": "", "height": "40rem", "paddingTop": "8rem" }} id='Customers'>
                    <div className='row text-center'>
                        <div className='col-12 text-center'>

                            <div className={`fade-in-text-right ${inView9 ? 'fade-in-right col-12 text-center mb-3' : 'col-12 text-center mb-3'}`} ref={ref9}>  <h1 style={{ "fontWeight": "700", "fontSize": "3.1rem", "color": "" }}>Customer Love </h1> <hr className=' mx-auto' style={{ "width": "10%", "height": "6px", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem" }} /></div>


                            <section className='cardss' style={{ "position": "relative", "top": "-4rem", "left": "0rem" }}>
                                <div className='mb-5'>
                                    <Slider {...settings3} style={{ "width": "100%", "marginLeft": "0rem", "paddingLeft": "0rem", "zIndex": "2" }}>
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
                    <section style={{ "position": "relative", "top": "-61rem", "height": "0px" }}>
                        <span><img src={bar2} style={{ "width": "60rem", "position": "relative", "top": "0rem", "left": "50rem", "transform": "rotate(135deg)", "zIndex": "1 ", pointerEvents: "none" }} alt='bar2' /></span>
                        <span><img src={bar1} style={{ "width": "60rem", "position": "relative", "top": "-36rem", "left": "-10rem", "transform": "rotate(45deg)", "zIndex": "1", "marginTop": "6rem", pointerEvents: "none" }} alt='bar1' /></span>
                    </section>
                </section>

                {/* part 5-fAQ */}
                <section style={{ "marginTop": "4rem", "paddingBottom": "2rem", "backgroundColor": "", "minHeight": "50rem" }} id="FAQz">
                    <section className='row'>
                        <section className='col-12' style={{ "paddingBottom": "4rem" }}>
                            <h1 className={`fade-in-text-right ${inView10 ? 'fade-in-right text-center' : 'text-center'}`} ref={ref10} style={{ "fontWeight": "700", "fontSize": "" }}>FAQs</h1>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-5 px-5 pt-4 pb-3 Kardz Faqz' onClick={(e) => { setMessage(!message) }} style={{ cursor :"pointer","border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage(!message) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}><i className="fa-solid fa-angle-down"></i></span></h3>
                                    {message ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>


                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz'  onClick={(e) => { setMessage1(!message1) }} style={{ cursor :"pointer","border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage1(!message1) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}><i className="fa-solid fa-angle-down"></i></span></h3>
                                    {message1 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz'  onClick={(e) => { setMessage2(!message2) }} style={{ cursor :"pointer","border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage2(!message2) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}><i className="fa-solid fa-angle-down"></i></span></h3>
                                    {message2 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz'  onClick={(e) => { setMessage3(!message3) }} style={{ cursor :"pointer","border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage3(!message3) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}><i className="fa-solid fa-angle-down"></i></span></h3>
                                    {message3 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz'  onClick={(e) => { setMessage4(!message4) }} style={{ cursor :"pointer","border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage4(!message4) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}><i className="fa-solid fa-angle-down"></i></span></h3>
                                    {message4 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                            {/* span1  */}
                            <span>
                                <section className='mx-auto mt-4 px-5 pt-4 pb-3 Kardz Faqz'  onClick={(e) => { setMessage5(!message5) }} style={{ cursor :"pointer","border": "0px solid gray", "boxShadow": "0px 0px 10px 1px gray", "width": "50rem", "minHeight": "4.5rem", "backgroundColor": "", "borderRadius": "40px" }}>
                                    <h3 style={{ "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "600" }}>Why should I sign up with DREABEE ?   <span onClick={(e) => { setMessage5(!message5) }} style={{ "position": "relative", "left": "24rem", "top": "5px", "fontWeight": "800", }}><i className="fa-solid fa-angle-down"></i></span></h3>
                                    {message5 ?
                                        <p className='mb-2  mt-4' style={{ "display": "", "position": "", "left": "3rem", "top": "1.8rem", "fontSize": "1.2rem", "fontWeight": "500" }}>Lorem ipsum dolor sit amet, ex cibo velit quaestio cum, idque debet debitis eu mei. Tantas inciderint nam in. Error epicurei ut per, nusquam inimicus cu mea, graecis deleniti placerat an eum. Adhuc vitae usu ei, enim causae elaboraret duo in. Dolores officiis omittantur id cum, est doming aeterno ad. Nec no quodsi nusquam minimum.</p>
                                        : null
                                    }

                                </section>
                            </span>

                        </section>
                    </section>
                </section>

                <CommFoot />

            </section>
        </>
    )
}

export default PaidLandingSec2