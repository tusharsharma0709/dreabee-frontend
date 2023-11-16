import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../../Imagez/Common/logo.png'
import { useState } from 'react';
import { useRef } from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import { useEffect } from 'react';
const BrandsOn1 = () => {
    const navigate = useNavigate();

    const [company, setCompany] = useState("");
    const [show, setShow] = useState(false);
    // ____________________________________
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    // ____________________________________
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const boom1 = () => {
        ref1.current.checked = true;
        console.log(ref1.current.value)
        setCompany(ref1.current.value)

        document.getElementById('boom1').style.backgroundColor = '#20F0BC';
        document.getElementById('boom1').style.borderRadius = '60px';
        document.getElementById('boom2').style.backgroundColor = '';
        document.getElementById('boom2').style.borderRadius = '';
    }
    const boom2 = () => {
        ref2.current.checked = true;
        console.log(ref2.current.value)
        setCompany(ref2.current.value)

        document.getElementById('boom2').style.backgroundColor = '#20F0BC';
        document.getElementById('boom2').style.borderRadius = '60px';
        document.getElementById('boom1').style.backgroundColor = '';
        document.getElementById('boom1').style.borderRadius = '';
    }


    // ____________________________________


    const jump = () => {
        if (company.length == 0) {
            setShow(true)
        } else {
            navigate("/Onboarding2", { state: { Company: company } });
        }
    }
    return (
        <>
            {
                loading ? (
                    <section className='' style={{ "height": "100vh", "width": "100vw", "background": "black" }} >
                        <div className=' d-flex justify-content-center align-items-center  h-100'>

                            <FadeLoader
                                color={"aqua"}
                                loading={loading}
                                // cssOverride={override}
                                size={50}
                            // aria-label="Loading Spinner"
                            // data-testid="loader"
                            />

                        </div>
                    </section>
                ) : (
                    <section className='regUpForm ' style={{ "minHeight": "", "width": "100vw", "backgroundColor": "black" }}>
                        <div className='row text-center bg-'>

                            {/* LOgo  */}
                            <div className='col-lg-12 bg-' style={{ "marginTop": "2.2rem" }}>
                                <img src={logo} alt='hehe' style={{ "width": "136px", }} />
                            </div>



                            {/* fORM  */}
                            <div className='col-lg-12 ' style={{ "marginTop": "2.2rem" }}>
                                <div className='row mt-2'>
                                    <div className='col-lg-12 text-center'>


                                        {/* headings */}
                                        <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px", "width": "", "marginLeft": "" }}>What best describes your company?</h4>
                                        <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginLeft": "-3rem", "marginBottom": "2rem" }}>This helps us to optimize the platform for you!<br />
                                        </p>



                                        <section className='row d-flex justify-content-center'>
                                            <section className='col-lg-6'>
                                                <div className='py-4'
                                                //  style={{ border: "1px solid blACK" }}
                                                 >



                                                    {/* Fields  */}
                                                    <section style={{ "marginTop": "0rem" }}>
                                                        {/* line1 */}
                                                        <section className=''>

                                                            {/* row 1 buttons   */}

                                                            <button className='smallB  mb-4' onClick={boom1} id='boom1' style={{ "width": "30rem" }}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>A Brand <input type="radio" value="brand" name='company' hidden ref={ref1} /></span>
                                                            </button>


                                                            {/* row 2 buttons   */}

                                                            <button className='smallB mb-' onClick={boom2} id='boom2' style={{ "width": "30rem" }}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>An Agency <input type="radio" value="agency" name='company' hidden ref={ref2} /></span>
                                                            </button>



                                                        </section>
                                                    </section>

                                                    {/* button  */}
                                                    <button onClick={jump} className='bigB col-md  mt-5' style={{ "marginLeft": "-0.8rem", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue </span></button><br />
                                                    {show && company.length == 0 ?
                                                        <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "-6rem", "left": "-0rem" }}>Select an option ! &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                                                        : null}




                                                </div>
                                            </section>
                                        </section>




                                    </div>
                                </div>
                            </div>
                        </div>


                    </section>

                )}
        </>
    )
}

export default BrandsOn1