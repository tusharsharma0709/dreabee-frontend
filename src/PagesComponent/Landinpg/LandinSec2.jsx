import React, { useState } from 'react'
import pho1 from '../../Imagez/LandinPgImg/photo1.png'
import pho2 from '../../Imagez/LandinPgImg/photo2.png'
import img1 from '../../Imagez/LandinPgImg/img-1.png'
import img2 from '../../Imagez/LandinPgImg/img-2.png'
import graph from '../../Imagez/LandinPgImg/Graph.png'
import Kard1 from './LandinPg_Sub/kard1'
import Kard2 from './LandinPg_Sub/Kard2'
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { isVisible } from '@testing-library/user-event/dist/utils'
import { $CombinedState } from 'redux'


const LandinSec2 = () => {
    function RoundPrevArrow(props) {
        const { RoundArrowP, style, onClick } = props;

        return (
            <div
                className={RoundArrowP}
                style={{
                    left: "25px",
                    top: "21rem",
                    // marginTop: "5rem",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    position: "relative",
                    zIndex: "2",
                    background: "white",
                    border: "1px solid gray",
                    height: "60px",
                    width: "60px",
                    borderRadius: "0 50% 50% 0",
                    marginLeft: "-2rem",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"

                }
                }
                onClick={onClick} >
               <i class='bx bx-chevron-left' style={{fontSize : "32px"}}></i>
            </div>
        );
    }
    function RoundNextArrow(props) {
        const { RoundArrowN, style, onClick } = props;
        return (
            <div
                className={RoundArrowN}
                style={{
                    zIndex: "2",
                    display: "flex", justifyContent: "center", alignItems: "center",
                    position: "relative", top: "-12.8rem",
                    left: "90rem",
                    background: "white",
                    border: "1px solid gray",
                    height: "60px",
                    width: "60px",
                    borderRadius: "50% 0 0 50%",
                    marginLeft: "2rem",
                    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)"
                }}
                onClick={onClick}

            >
                 <i class='bx bx-chevron-right' style={{fontSize : "32px"}}></i>
            </div>
        );
    }
    const settings1 = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: false,
        nextArrow: false,
        nextArrow: <RoundNextArrow />,
        prevArrow: <RoundPrevArrow />
    };
    function SquarePrevArrow(props) {
        const { btnz, style, onClick } = props;
        return (
            <div
                className="btnz"
                style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    zIndex: "2",
                    position: "relative",
                    left: "44rem", top: "35rem",
                    // background: "white",
                    // border: "1px solid gray",
                    height: "60px",
                    width: "60px",
                    borderRadius: "50% 0 0 50%",
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
                    top: "1.2rem", left: "50rem",
                    // background: "white",
                    // border: "1px solid gray",
                    height: "60px",
                    width: "60px",
                    borderRadius: " 0 50% 50% 0",
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
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: false,
        nextArrow: false,
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
                    left: "42.8rem", top: "25rem",
                    // background: "white",
                    // border: "1px solid gray",
                    height: "60px",
                    width: "60px",
                    borderRadius: "50% 0 0 50%",
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
                    top: "-8.7rem", left: "48.7rem",
                    // background: "white",
                    // border: "1px solid gray",
                    height: "60px",
                    width: "60px",
                    borderRadius: " 0 50% 50% 0",
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
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        nextArrow: <SquareNextArrow2 />,
        prevArrow: <SquarePrevArrow2 />
    };

    const navigate = useNavigate();
    const GoToLogin = () => {
        navigate("/LogIn")
    }


    // animation section start


    const textRef = useRef(null);
    // REFFF 1
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view

    });
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
    // REFFF 4
    const [ref4, inView4] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.5, // Trigger when at least 50% of the element is in view

    });
    // REFFF 5
    const [ref5, inView5] = useInView({
        // triggerOnce: true, // Only trigger the animation once
        threshold: 0.4, // Trigger when at least 50% of the element is in view

    });
    // REFFF 6
    const [ref6, inView6] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.5, // Trigger when at least 50% of the element is in view

    });
    // REFFF 
    const [ref7, inView7] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.8, // Trigger when at least 50% of the element is in view

    });
    // REFFF REFF REFFREFF REFF

    document.addEventListener("DOMContentLoaded", function () {
        const flipElement = document.querySelector(".flip-element");

        if (flipElement) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            flipElement.classList.add("flip-start");
                            observer.unobserve(flipElement); // Stop observing once it's in view
                        }
                    });
                },
                {
                    threshold: 0.5, // Trigger when at least 50% of the element is in view
                }
            );

            observer.observe(flipElement);
        }
    });

    // animation section end



    const [active, setActive] = useState(false)





    return (
        <>
            <section className='container-fluid'>
                <div className='' style={{ "height": "100%", "backgroundColor": "white", "zIndex": "-5" }}>
                    <div className='row ' style={{ "height": "65rem" }}>

                        {/* logos section  */}
                        <div className='col-10 '  >
                            <section
                                className={`fade-in-text-up ${inView ? 'fade-in-up huhu Kardz' : 'huhu Kardz'}`} ref={ref}

                                style={{ "boxSizing": "borderBox", "position": "relative", "width": "1220px", "height": "250px", "left": "8rem", "top": "-6.8rem" }}>
                                <div className='row d-flex justify-evenly pt-4'>

                                    <div className='col-1'></div>

                                    <div className='col '>
                                        <i className=" GlowOne fa-brands fa-apple mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className=" GlowOne fa-brands fa-amazon me-3" style={{ "fontSize": "5rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "1.5rem" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className=" GlowOne fa-brands fa-google mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "6rem", "top": "1.5rem" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className=" GlowOne fa-brands fa-youtube mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "8rem", "top": "1.5rem" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className=" GlowOne fa-solid fa-hippo mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className=" GlowOne fa-brands fa-wordpress mx-3" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>
                                    <div className='col '>
                                        <i className=" GlowOne fa-brands fa-windows" style={{ "fontSize": "4rem", "color": "#FFFFFF", "position": "", "left": "4rem", "top": "" }}></i>
                                    </div>
                                    <div className='col-1'></div>


                                    <div className='row mt-4'>
                                        <div className='col-1 ' style={{ "marginLeft": "3.5rem" }}></div>

                                        <div className='col-3'>
                                            <section className='row  '>
                                                <section className='col-1'>
                                                    <i className="fa-solid fa-user pt-2 mt-1 text-center" style={{ "marginLeft": "", "fontSize": "1rem", "width": "2.2rem", "height": "2.2rem", "backgroundColor": "black", "color": "white", "borderRadius": "50%" }}></i>
                                                </section>
                                                <section className='col-10 ' style={{ "position": "relative", "left": "20px" }}>
                                                    <h4 style={{ "fontSize": "2rem", "fontWeight": "700", "color": "black" }}>375K</h4>
                                                    <p className='' style={{ "fontSize": "1rem", "fontWeight": "700", "color": "#7E7E7E", "marginLeft": "4px" }}>Creators & Influencers</p>
                                                </section>

                                            </section>
                                        </div>

                                        <div className='col-3'>
                                            <section className='row  '>
                                                <section className='col-1'>
                                                    <i className="fa-solid fa-user pt-2 mt-1 text-center" style={{ "marginLeft": "", "fontSize": "1rem", "width": "2.2rem", "height": "2.2rem", "backgroundColor": "black", "color": "white", "borderRadius": "50%" }}></i>

                                                </section>
                                                <section className='col-10 ' style={{ "position": "relative", "left": "20px" }}>
                                                    <h4 style={{ "fontSize": "2rem", "fontWeight": "700", "color": "black" }}>189K</h4>
                                                    <p className='' style={{ "fontSize": "1rem", "fontWeight": "700", "color": "#7E7E7E", "marginLeft": "4px" }}>Creators Created</p>
                                                </section>

                                            </section>
                                        </div>
                                        <div className='col-3'>
                                            <section className='row  '>
                                                <section className='col-1'>
                                                    <i className="fa-solid fa-user pt-2 mt-1 text-center" style={{ "marginLeft": "", "fontSize": "1rem", "width": "2.2rem", "height": "2.2rem", "backgroundColor": "black", "color": "white", "borderRadius": "50%" }}></i>

                                                </section>
                                                <section className='col-10 ' style={{ "position": "relative", "left": "20px" }}>
                                                    <h4 style={{ "fontSize": "2rem", "fontWeight": "700", "color": "black" }}>$89.7cr</h4>
                                                    <p className='' style={{ "fontSize": "1rem", "fontWeight": "700", "color": "#7E7E7E", "marginLeft": "4px" }}>Marketing Budget saved</p>
                                                </section>

                                            </section>
                                        </div>

                                        <div className='col-1'></div>
                                    </div>

                                </div>
                            </section>


                            <section className='handlerr ' style={{ "position": "relative", "top": "-2rem", "left": "4rem" }}>
                                <section className='rect '></section>
                                <section className='rect2 '></section>
                                <section className='rect3 '></section>
                            </section>

                        </div>


                        {/* buttons and three cards  */}
                        <div className='row ' style={{ "zIndex": "2", "position": "relative", "top": "-12rem" }}>
                            <div className='col-6  '>
                                <section style={{ "marginLeft": "8rem" }} className={`fade-in-text-up ${inView1 ? 'fade-in-up  ' : ' '}`} ref={ref1}>
                                    <span className='' style={{
                                        "position": "relative", "left": "2px", "top": "-2rem", "fontWeight": "700", "fontSize": "48px", "lineHeight": "60px", "color": "#C83B93"
                                    }}>Powerful tools to find,<br />
                                        connect, and<br />
                                        collaborate</span>

                                    <section>

                                        <button className='' style={{
                                            "width": "500px", "height": "100px", "border": "none", "background": "#FFFFFF", "boxShadow": "0px 5px 20px rgba(0, 0, 0, 0.15)", "borderRadius": "500px"
                                        }}>
                                            <div className='row'>
                                                <div className='col-1'><span className='hex'></span> </div>
                                                <div className='col-11 ps-1'>
                                                    <div style={{
                                                        "position": "relative", "width": "290px", "height": "34px", "left": "2.1rem", "top": "12px", "fontWeight": "600", "fontSize": "18px", "lineHeight": "34px", "color": "#7E7E7E"
                                                    }}>Explore our powerful tools</div>

                                                    <div style={{
                                                        "position": "relative", "width": "455px", "height": "56px", "bottom": "4px", "left": "1rem", "fontWeight": "600", "fontSize": "32px", "lineHeight": "56px", "color": "#000000"
                                                    }}>DREABEE Business Suite</div>
                                                </div>
                                            </div>
                                        </button>


                                        <section className=''>
                                            <button className={`fade-in-text-up ${inView1 ? 'fade-in-up  mula-hov' : ' mula-hov'}`} ref={ref1} style={{ "boxShadow": "0px 5px 20px rgba(0, 0, 0, 0.15)" }}>
                                                <div className='row'>
                                                    <div className='col-1'><span className='mulaHex'></span> </div>
                                                    <div className='col-11'>
                                                        <div className='text-start ps-5 ms-3 mulaText'>Creator Search</div>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className={`fade-in-text-up ${inView1 ? 'fade-in-up  mula-hov' : ' mula-hov'}`} ref={ref1} style={{ "boxShadow": "0px 5px 20px rgba(0, 0, 0, 0.15)" }} >
                                                <div className='row'>
                                                    <div className='col-1'><span className='mulaHex'></span> </div>
                                                    <div className='col-11'>
                                                        <div className='text-start ps-5 ms-3 mulaText' >Creator Profile</div>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className={`fade-in-text-up ${inView1 ? 'fade-in-up  mula-hov' : ' mula-hov'}`} ref={ref1} style={{ "boxShadow": "0px 5px 20px rgba(0, 0, 0, 0.15)" }}   >
                                                <div className='row'>
                                                    <div className='col-1'><span className='mulaHex'></span> </div>
                                                    <div className='col-11'>
                                                        <div className='text-start ps-5 ms-3 mulaText' >Creator Outreach</div>
                                                    </div>
                                                </div>
                                            </button>
                                            <button className={`fade-in-text-up ${inView1 ? 'fade-in-up  mula-hov' : ' mula-hov'}`} ref={ref1} style={{ "boxShadow": "0px 5px 20px rgba(0, 0, 0, 0.15)" }}  >
                                                <div className='row'>
                                                    <div className='col-1'><span className='mulaHex'></span> </div>
                                                    <div className='col-11'>
                                                        <div className='text-start ps-5 ms-3 mulaText '>Creator Reporting</div>
                                                    </div>
                                                </div>
                                            </button>
                                        </section>

                                    </section>
                                </section>
                            </div>





                            <div className='col-6 '>
                                <div className='row'>
                                    <div className='col-12' >
                                        <section className={`fade-in-text-up ${inView1 ? 'fade-in-up  ' : ' '}`} ref={ref1}><img src={img2} alt='img' style={{ "width": "32rem", "position": "relative", "left": "4rem" }} /></section>
                                    </div>
                                    <div className='col-6'>
                                        <section className={`fade-in-text-up ${inView2 ? 'fade-in-up  ' : ' '}`} ref={ref2}><img src={img1} alt='img1' style={{ "width": "14rem", "position": "relative", "top": "-32rem", "left": "-6rem" }} /></section>
                                    </div>
                                    <div className='col-6'>
                                        <section className={`fade-in-text-up ${inView2 ? 'fade-in-up  ' : ' '}`} ref={ref2}><img src={img1} alt='img1' style={{ "width": "14rem", "position": "relative", "top": "-18rem", "left": "9rem" }} /></section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* ROUND SLiDES  */}
                    <div className='row  my-5' style={{ "height": "50rem" }}>
                        <div className='row' style={{ "height": "10rem", "width": "20rem", "position": "relative", "top": "-4rem", "left": "25rem" }}>
                            <span className='Ellipse3'></span>
                        </div>




                        <section style={{ "marginTop": "-4rem" }}>

                            <div className='row '>
                                <section className='col '>
                                    <section className={`fade-in-text-right ${inView4 ? 'fade-in-right ' : ''}`} ref={ref4} style={{ "position": "relative", "top": "-7rem" }}>
                                        <span className='text-light text-center'>  <div className='txt1'>Collaborate with <div className='txt2'> top creators  </div> <hr className=' mx-auto' style={{ "width": "10%", "height": "6px", "color": "none", "backgroundColor": "#D42E90", "borderRadius": "20rem" }} /> </div>  </span>
                                    </section>
                                </section>
                            </div>


                            <span className='' style={{ "backgroundColor": "blue" }}></span>
                            {/* ROUND SLiDES 1 */}
                            <div className=' ' style={{ "height": "40rem", "position": "relative", "top": "-8rem" }}>
                                {/* _________________________________________ROUND SLiDES 1_________________________________________ */}


                                <Slider className='roundImg ' {...settings1} style={{ "width": "100vw", "height": "20rem", "marginLeft": "-10px", "paddingBottom": "" }}>

                                    <div className='RoundSliders '>
                                        <section className='bg- align-items-center ' style={{ "position": "relative", "top": "10rem" }}>
                                            <img src={pho1} className='Kardz' alt='img1' style={{ "width": "18rem", "border": "2px aqua solid", "borderRadius": "600px", "boxShadow": "red 2px 6px 2px 2px " }} />
                                            <span style={{ "position": "relative", "top": "-6rem", "left": "3rem", "WebkitTextStroke": "1px black" }}> <h6 className='name1 navHovText0'>Shirisha</h6><h5 className='name2'>LifeStyle</h5></span>
                                        </section>
                                    </div>
                                    <div className=' '>
                                        <section style={{ "position": "relative", "top": "2rem" }}>
                                            <img src={pho2} className='Kardz' alt='img1' style={{ "width": "18rem", "border": "2px aqua solid", "borderRadius": "600px", "boxShadow": "red 2px 6px 2px 2px " }} />
                                            <span style={{ "position": "relative", "top": "-6rem", "left": "3rem", "WebkitTextStroke": "1px black" }}> <h6 className='name1'>Akhil</h6><h5 className='name2'>LifeStyle</h5></span>
                                        </section>
                                    </div>
                                    <div className=''>
                                        <section style={{ "position": "relative", "top": "10rem" }}>
                                            <img src={pho1} className='Kardz' alt='img2' style={{ "width": "18rem", "border": "2px aqua solid", "borderRadius": "600px", "boxShadow": "red 2px 6px 2px 2px " }} />
                                            <span style={{ "position": "relative", "top": "-6rem", "left": "3rem", "WebkitTextStroke": "1px black" }}> <h6 className='name1'>Shirisha</h6><h5 className='name2'>LifeStyle</h5></span>
                                        </section>
                                    </div>
                                    <div className=''>
                                        <section style={{ "position": "relative", "top": "2rem" }}>
                                            <img src={pho2} className='Kardz' alt='img1' style={{ "width": "18rem", "border": "2px aqua solid", "borderRadius": "600px", "boxShadow": "red 2px 6px 2px 2px " }} />
                                            <span style={{ "position": "relative", "top": "-6rem", "left": "3rem", "WebkitTextStroke": "1px black" }}> <h6 className='name1'>Ramanan</h6><h5 className='name2'>LifeStyle</h5></span>
                                        </section>
                                    </div>
                                    <div className=''>
                                        <section style={{ "position": "relative", "top": "10rem" }}>
                                            <img src={pho1} className='Kardz' alt='img1' style={{ "width": "18rem", "border": "2px aqua solid", "borderRadius": "600px", "boxShadow": "red 2px 6px 2px 2px " }} />
                                            <span style={{ "position": "relative", "top": "-6rem", "left": "3rem", "WebkitTextStroke": "1px black" }}> <h6 className='name1'>Shirisha</h6><h5 className='name2'>LifeStyle</h5></span>
                                        </section>
                                    </div>
                                    <div className=''>
                                        <section style={{ "position": "relative", "top": "2rem" }}>
                                            <img src={pho2} className='Kardz' alt='img1' style={{ "width": "18rem", "border": "2px aqua solid", "borderRadius": "600px", "boxShadow": "red 2px 6px 2px 2px " }} />
                                            <span style={{ "position": "relative", "top": "-6rem", "left": "3rem", "WebkitTextStroke": "1px black" }}> <h6 className='name1'>Luffy</h6><h5 className='name2'>LifeStyle</h5></span>
                                        </section>
                                    </div>
                                </Slider>


                            </div>
                            <div className='row' style={{ "position": "relative", "top": "-14rem" }}>
                                <div className='col text-center' >
                                    <button className='btnz' onClick={GoToLogin} style={{ "backgroundColor": "whitesmoke", "padding": "10px 4rem 10px 4rem", "border": " 3px solid #D42E90 ", "borderRadius": "2rem", "color": "#D42E90 ", "fontWeight": "700", "fontSize": "18px" }}>View All </button>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>


                {/* Graph Image section  */}
                <div className='row d-flex align-items-center mb-4 ' style={{ "height": "40rem" }}>
                    <div className={`fade-in-text-up ${inView5 ? 'fade-in-up col-6 text-center' : 'col-6 text-center'}`} ref={ref5}>
                        <img src={graph} alt='graph' style={{ "width": "26rem", "marginTop": "3rem" }} />
                        <section className='text-start ' style={{ "marginLeft": "10rem" }}>
                            <h1 style={{ "color": "black", "fontWeight": "700", "fontsize": "15rem" }}>3x more effective</h1>
                            <h3 style={{ "color": " #7E7E7E", "fontWeight": "700" }}>than traditional advertising.</h3>
                        </section>
                    </div>
                    <div className={`fade-in-text-up ${inView5 ? 'fade-in-up col-6 ' : 'col-6 '}`} ref={ref5}>
                        <section><img src={img2} alt='img' style={{ "width": "32rem", "position": "relative", "left": "4rem" }} /></section>
                    </div>
                </div>

                {/* SQUARE SLDES  */}
                <div className='row d-flex align-items-center py-5' style={{ "height": "50rem" }}>
                    <section className={`fade-in-text-right ${inView6 ? 'fade-in-right ' : ''}`} ref={ref6}>
                        <h1 className='text-center' style={{ "fontSize": "2.2rem", "fontWeight": "700", "color": "#D461A8" }}> What do you want to achieve?</h1>
                        <h1 className='text-center' style={{ "fontSize": "2.8rem", "fontWeight": "700", "color": "black", "position": "relative", "top": "" }}> Get to your business goals faster with<br /> DRAEBEE.</h1>
                    </section>
                    <div className='row mb-5' style={{ "position": "relative", "top": "-6rem", "left": "-15rem" }}>
                        <div className='col-12'>



                            {/* ________________________________________________SQUARE SLDES________________________________________________  */}

                            {/* <section className='d-flex '> */}
                            <Slider className='roundImg ' {...settings2} style={{ "width": "100vw", "height": "20rem", "marginLeft": "13.8rem", "paddingBottom": "" }}>

                                <div className=''>
                                    <section className='' style={{ "position": "relative", "top": "1rem", "borderRadius": "0px" }}>
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
                                <div className=''>
                                    <section style={{ "position": "relative", "top": "1rem" }}>
                                        <Kard1 />
                                    </section>
                                </div>
                            </Slider>




                            {/* </section> */}
                        </div>
                    </div>
                </div>




                {/* Testimonials  */}
                <div className='row align-items-center  mt-5' style={{ "height": "40rem" }}>
                    <section className={`fade-in-text-right ${inView7 ? 'fade-in-right ' : ''}`} ref={ref7} style={{ "marginTop": "6rem", "marginBottom": "0rem" }}>
                        <h1 className='text-center' style={{ "fontSize": "2rem", "fontWeight": "700", "color": "#D461A8" }}> What Make us special -</h1>
                        <h1 className='text-center' style={{ "fontSize": "2.8rem", "fontWeight": "700", "color": "black", "position": "relative", "top": "" }}>Trusted by All business</h1>
                    </section>
                    <section className='' style={{ "position": "relative", "top": "-4rem" }}>
                        <div className='mb-2'>


                            {/* _________________________________________________ NORMAL SLIDERS_________________________________________________ */}
                            <Slider {...settings3} style={{ "width": "100%", "marginLeft": "0rem", "paddingLeft": "0rem" }}>
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
            </section>
        </>
    )
}

export default LandinSec2