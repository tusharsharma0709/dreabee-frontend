import React from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'
import { useEffect } from 'react'
import { Auth, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from '../../BireFase/firebase';
import swal from 'sweetalert';
import FadeLoader from "react-spinners/FadeLoader";
import { useState } from 'react';



const InfluReg1 = () => {
    const navigate = useNavigate();
    const [num, setNum] = useState('');
    const [opt, setOpt] = useState();
    const [user, setUser] = useState();
    const [show, setShow] = useState(false);
    const [num10, setNum10] = useState(false);

    const sendOtp = async () => {

        if ((num.length) != 10) {
            // alert("enter 10 numbers")
            setNum10(true);
        } else {
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

    }




    const verifyOtp = async () => {
        // try {
        //     await user.confirm(opt)
        //     navigate("/Enter_Instagram_Profile");
        //     localStorage.setItem('Validated_PhNo', num);
        // } catch (err) {
        //     // swal("Ooops!", "Seems like wrong otp , refresh the page and try again.", "error")
        // }
        localStorage.setItem('Validated_PhNo', num);
        navigate("/Enter_Instagram_Profile");

    }

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
                            />

                        </div>
                    </section>
                ) : (
                    <section className='regUpForm ' style={{ "minHeight": "", "width": "100vw", "backgroundColor": "" }}>
                        <div className='row text-center bg-'>

                            {/* LOgo  */}
                            <div className='col-lg-12 bg-' style={{ "marginTop": "2.2rem" }}>
                                <img src={logo} alt='hehe' style={{ "width": "136px", }} />
                            </div>

                            {/* FOrm  */}
                            <div className='col-lg-12 ' style={{ "marginTop": "2.2rem" }}>
                                <div className='row mt-2'>
                                    <div className='col-lg-12 text-center'>

                                        {/* headings */}
                                        <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Welcome to DREABEE</h4>



                                        <section className='row d-flex justify-content-center'>
                                            <section className='col-lg-6'>
                                                <div className='py-2'
                                                //  style={{ border: "1px solid blACK" }}
                                                >

                                                    <section className='row d-flex justify-content-center'>
                                                        <section className='col-lg-8'>
                                                            <div className='py-3'
                                                                style={{ border: "" }}
                                                            >




                                                                <section>
                                                                    <section className=' '>
                                                                        <section className=' text-light ps-5 text-start' style={{ "marginLeft": "", "fontWeight": "600", "position": "", "top": "" }}>Enter your Mobile Number.</section>
                                                                        <input type='number' value={num} onChange={(e) => { setNum(e.target.value); setShow(true) }} className='bg-dark '
                                                                            style={{ "marginTop": "", "color": "#FFFFFF", "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "paddingLeft": "1.5rem", "fontSize": "16px", "fontWeight": "700", "border": "none", }}
                                                                            placeholder='+91 XXXX-XXXX-XX' />

                                                                        {num10 && (num.length != 10) ?
                                                                            <label className='' style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "", "top": "0rem", "left": "" }}>Enter 10 digits for phone number. &nbsp;
                                                                                <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "white" }} /></label>
                                                                            : null
                                                                        }
                                                                    </section>


                                                                    <button onClick={() => { sendOtp() }} className='bigB col-md mt-4' > <span className='' style={{ "fontSize": "24px", "fontWeight": "900", "lineHeight": "36px", "color": "#FFFFFF" }}>Request OTP</span></button><br />
                                                                    {/* ____________________________________________recaptcha______________ */}

                                                                    {
                                                                        show
                                                                            ?
                                                                            <section style={{ "marginLeft": "6rem", "marginTop": "2rem" }}>
                                                                                <div id='recaptcha' style={{ "background": "none", "height": "4rem" }}></div>
                                                                            </section>
                                                                            :
                                                                            null
                                                                    }

                                                                    {/* ____________________________________________recaptcha______________ */}


                                                                    <section className='my-4' style={{ "position": "", "top": "" }}>
                                                                        <section className='mt-1 text-light ps-5 text-start' style={{ "marginLeft": "", "fontWeight": "600", "position": "", "top": "" }}>Enter OTP </section>

                                                                        <input type='number' value={opt} onChange={(e) => { setOpt(e.target.value) }} className='bg-dark '
                                                                            style={{ "marginTop": "", "color": "#FFFFFF", "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "paddingLeft": "1.5rem", "fontSize": "16px", "fontWeight": "700", "border": "none", }} placeholder='Enter Here' />
                                                                        <section className=' mb-2 text-end pe-3 text-light' style={{ "marginLeft": "", "position": "", "top": "", "left": "", "fontWeight": "600" }}>Didn’t Received OTP<span style={{ "color": "aqua", cursor: "pointer" }} onClick={sendOtp}  > Send Again.</span>
                                                                            <span className='col-md-2 ' style={{ "color": "aqua", "position": "relative", "top": "-2.5rem", "left": "-2.2rem", height: " 0px", "width": "0px " }}> <text>OTP</text></span>
                                                                        </section>
                                                                    </section>
                                                                    <button onClick={verifyOtp} className='bigB col-md mt-3 ' > <span className='' style={{ "fontSize": "24px", "fontWeight": "900", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />


                                                                </section>










                                                            </div>
                                                        </section>
                                                    </section>





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

export default InfluReg1