import React from 'react'
import logo from '../../../Imagez/Common/logo.png'
import FadeLoader from "react-spinners/FadeLoader";
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'

import { useState } from 'react';

// __________________________________________________________ 

import { useEffect } from 'react'
import { Auth, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from '../../../BireFase/firebase';
import swal from 'sweetalert';

// import { auth } from './firebase';
// import { Auth } from 'firebase/auth';


const BrandsOn = () => {
    const navigate = useNavigate();
    const jump = () => {

        navigate("/v");
    }

    // __________________________________________________________ 
    // const auth = getAuth();
    // window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    //     'size': 'invisible',
    //     'callback': (response) => {

    //         verifyOtp();
    //     }
    // }, auth);

    // __________________________________________________________ 


    // const [country, setCountry] = useState('in');
    const [num, setNum] = useState('');
    const [opt, setOpt] = useState();
    const [user, setUser] = useState();
    const [show, setShow] = useState(false);

    const sendOtp = async () => {

        try {
            let recaptchaVerifier = await new RecaptchaVerifier("recaptcha", {}, auth);
            console.log(recaptchaVerifier)
            let confirmation = await signInWithPhoneNumber(auth, "+91" + num, recaptchaVerifier);
            console.log(confirmation)
            setUser(confirmation)
        } catch (err) {
            console.log(err)
            swal("Ooops!", "Invalid Phone Number , refresh the page and try again.", "warning")
        }
    }
    const verifyOtp = async () => {
        try {
            await user.confirm(opt)
            navigate("/Onboarding1");
            swal("Phone Number Verified!", "Fill all the following details to speed things up.", "success")
        } catch (err) {
            swal("Ooops!", "Seems like wrong otp , refresh the page and try again.", "error")
        }
    }







    // useEffect(() => {
    //     console.log(num,)
    // }, [num]);



    // __________________________________________________________ 



    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


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


                            {/* Form   */}
                            <div className='col-lg-12 ' style={{ "marginTop": "2.2rem" }}>
                                <div className='row mt-2'>
                                    <div className='col-md'>
                                        <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Welcome to DREABEE</h4>




                                        <section className='row d-flex justify-content-center'>
                                            <section className='col-lg-4'>
                                                <div className='py-4' style={{ border: "" }}>





                                                    <div >
                                                        <section className='text-start ps-5 text-light' style={{ "fontWeight": "600", "position": "", "top": "" }}>Enter your Mobile Number.</section>
                                                        <input type='tel' value={num} onChange={(e) => { setNum(e.target.value); setShow(true) }} className='bg-dark'
                                                            style={{
                                                                "marginTop": "", "color": "#FFFFFF", "height": "59px", "width": "424px", "marginLeft": " ", "borderRadius": "10px",
                                                                "paddingLeft": "1.5rem", "fontSize": "16px", "fontWeight": "700", "border": "none",
                                                            }} placeholder='+91 XXXX-XXXX-XX' /></div>


                                                    <button onClick={() => { sendOtp(); setShow(true) }} className='bigB col-md mt-4' > <span className='' style={{ "fontSize": "24px", "fontWeight": "900", "lineHeight": "36px", "color": "#FFFFFF" }}>Request OTP</span></button><br />
                                                    {/* ____________________________________________recaptcha______________ */}

                                                    {
                                                        show
                                                            ?
                                                            <section className='my-4 text-center' style={{ "marginLeft": "6rem", "marginTop": "" }}>
                                                                <div id='recaptcha' style={{ "background": "none", "height": "4rem" }}></div>
                                                            </section>
                                                            :
                                                            <section style={{ "height": "0px ", width: "0px" }}>

                                                            </section>
                                                    }

                                                    {/* ____________________________________________recaptcha______________ */}


                                                    <section className='' style={{ "position": "", "top": "" }}>

                                                        <div>

                                                            <section className='mt- text-start text-light ps-5' style={{ "marginLeft": "", "fontWeight": "600", "position": "", "top": "" }}>Enter OTP </section>
                                                            <input type='number' value={opt} onChange={(e) => { setOpt(e.target.value) }} className='bg-dark '
                                                                style={{
                                                                    "marginTop": "", "color": "#FFFFFF", "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px",
                                                                    "paddingLeft": "1.5rem", "fontSize": "16px", "fontWeight": "700", "border": "none",
                                                                }} placeholder='Enter Here' />

                                                        </div>
                                                        <div >

                                                            <span className='col-md-2 ' style={{ "color": "aqua", "height": "0px", "width": "0px", position: "relative", "top": "-2.5rem", "left": "11rem" }}> <text>OTP</text></span>
                                                            <span className=' mb-2 text-light' style={{ "marginLeft": "-14rem", "position": "relative", "top": "0.2rem", "left": "12rem", "fontWeight": "600" }}>Didn’t Received OTP<span style={{ "color": "aqua" }}> Send Again.</span></span>
                                                        </div>
                                                    </section>
                                                    <button onClick={verifyOtp} className='bigB col-md mt-3 ' > <span className='' style={{ "fontSize": "24px", "fontWeight": "900", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                                    {/* <span className=''>IN (+91)  <PhoneInput country={Number} placeholder='enter phone number' onChange={(value) => { setNumber(value) }}/>  </span> */}

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

export default BrandsOn