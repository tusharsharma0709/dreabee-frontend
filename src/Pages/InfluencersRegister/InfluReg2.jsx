import React, { useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom';
const InfluReg2 = () => {
    const navigate = useNavigate();
    
    const [otpass, setOtpass] = useState();
    const jump = () => {
        navigate("/c1");
    }


    return (
        <>
            <section className='Wrap ' style={{ "height": "100vh", "backgroundColor": "black" }}>
                <div className='container'>
                    {/* backlight  */}
                    <div className='row ' bg-dark style={{ "height": "1rem", "width": "100vw" }}>
                        <div className='col-md-6 mt-5' style={{ "marginLeft": "15rem" }}>
                            <span className='' style={{ "position": "" }}>
                                <section className='Ellipse4' style={{ "width": "13rem", "height": "13rem" }} />
                                <section className='Ellipse3' style={{ "maxWidth": "26rem", "height": "26rem" }} />
                            </span>
                        </div>
                    </div>
                    {/* Form fields */}
                    <div className='row'>
                        <div className='col-md text-light text-center' style={{ "height": "1rem" }}>

                            <img src={logo} alt='hehe' style={{ "width": "136px", "marginTop": "2rem" }} />
                            <section className='invBoxx ' style={{ "marginTop": "37rem", "marginLeft": "17rem", "height": "30rem" }}>



                                <div className='row '>
                                    <div className='col-md mt-3 '>
                                    
                                        <section style={{ "marginLeft": "-1rem" }}>
                                            <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Verify OTP</h4>
                                            <p style={{ "fontSize": "18px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "1rem" }}>We’ve sent you an OTP on your mobile number <br />
                                                XXXXXX8965</p>
                                        </section>


                                        <section className='' style={{ "position": "relative", "top": "" }}>
                                            <input className='bg-dark d-flex justify-content-center' style={{ "marginTop": "3rem", "height": "59px", "width": "424px", "marginLeft": "5.8rem", "borderRadius": "10px", "paddingLeft": "1.5rem", "fontSize": "16px", "fontWeight": "700", "border": "none", }} placeholder='Enter Here' />
                                            <span className=' mb-2' style={{ "marginLeft": "-14rem", "position": "relative", "top": "0.2rem", "left": "12rem", "fontWeight": "600" }}>Didn’t Received OTP<span style={{ "color": "aqua" }}> Send Again.</span></span>
                                            <section className='col-md-2 ' style={{ "color": "aqua", "position": "relative", "top": "-4.1rem", "left": "27rem" }}> <text>OTP</text></section>
                                        </section>



                                        <button onClick={jump} className='bigB col-md mt-4 ' > <span className='' style={{ "fontSize": "24px", "fontWeight": "900", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />

                                    </div>
                                </div>


                            </section>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default InfluReg2


