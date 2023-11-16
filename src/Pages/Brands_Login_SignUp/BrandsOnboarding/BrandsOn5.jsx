import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../../Imagez/Common/logo.png'
const BrandsOn5 = () => {
    const navigate = useNavigate();

    const jump = () => {
        navigate("/b1");
    }
    return (
        <>
            <section className='Wrap ' style={{ "height": "100vh", "backgroundColor": "black" }}>
                <div className='container'>
                    {/* backlight  */}
                    <div className='row ' bg-dark style={{ "height": "1rem", "width": "100vw" }}>
                        <div className='col-md-4 ' style={{ "marginLeft": "16rem", "marginTop": "5.6rem" }}>
                            <span className='' style={{ "position": "" }}>
                                <section className='Ellipse4' style={{ "width": "12rem", "height": "13rem" }} />
                                <section className='Ellipse3' style={{ "maxWidth": "26rem", "height": "26rem" }} />
                            </span>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-md text-light text-center' style={{ "height": "1rem" }}>

                            <img src={logo} alt='hehe' style={{ "width": "136px", "marginTop": "2rem" }} />
                            <section className='invBoxx ' style={{ "marginTop": "37rem", "marginLeft": "18rem", "height": "30rem" }}>



                                <div className='row mt-5 text-center' style={{ "marginLeft": "-2rem" }}>
                                    <div className='col-md '>
                                        {/* headings */}
                                        <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px", "width": "50rem", "marginLeft": "-6rem" }}>Invite your teammates?</h4>
                                        <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginLeft": "-3rem", "marginBottom": "2rem" }}>Work together on influencer lists, campaign reports etc.<br />
                                        </p>


                                        {/* Fields  */}
                                        <section style={{ "marginTop": "2rem" }}>
                                            {/* line1 */}
                                            <section className=''>


                                                <section className='row ' style={{ "marginTop": "1rem" }}>
                                                    <section className='col-md-12  '>
                                                        <input type='text' placeholder='Add Email Address 1' className='bg-dark d-flex justify-content-center ps-3' style={{ "height": "59px", "width": "424px", "marginLeft": "5.8rem", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                        {/* <section className=' ' style={{ "fontWeight": "600", "width": "30rem", "position": "relative", "top": "-5.4rem", "left": "-7.6rem" }}><span style={{ "color": "#FFFFF" }}>Email</span></section> */}
                                                    </section>
                                                </section>
                                                <section className='row ' style={{ "marginTop": "1rem" }}>
                                                    <section className='col-md-12  '>
                                                        <input type='text' placeholder='Add Email Address 1' className='bg-dark d-flex justify-content-center ps-3' style={{ "height": "59px", "width": "424px", "marginLeft": "5.8rem", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                        {/* <section className=' ' style={{ "fontWeight": "600", "width": "30rem", "position": "relative", "top": "-5.4rem", "left": "-7.6rem" }}><span style={{ "color": "#FFFFF" }}>Email</span></section> */}
                                                    </section>
                                                </section>

                                                <section className='row ' style={{ "marginTop": "1rem" }}>
                                                    <section className='col-md-12  '>
                                                        <input type='text' placeholder='Add Email Address 1' className='bg-dark d-flex justify-content-center ps-3' style={{ "height": "59px", "width": "424px", "marginLeft": "5.8rem", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                        {/* <section className=' ' style={{ "fontWeight": "600", "width": "30rem", "position": "relative", "top": "-5.4rem", "left": "-7.6rem" }}><span style={{ "color": "#FFFFF" }}>Email</span></section> */}
                                                    </section>
                                                </section>

                                                <section className='row ' style={{ "marginTop": "1rem" }}>
                                                    <section className='col-md-12  '>
                                                        {/* <input type='text' placeholder='Add Email Address 1' className='bg-dark d-flex justify-content-center ps-3' style={{ "height": "59px", "width": "424px", "marginLeft": "5.8rem", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input> */}
                                                        <section className=' mt-1' style={{ "fontWeight": "700", "width": "30rem", "position": "relative", "top": "", "left": "4rem", "cursor": "pointer" }}><span style={{ "color": "#FFFFF" }}>+ Add More</span></section>
                                                    </section>
                                                </section>



                                            </section>
                                        </section>




                                        {/* button  */}
                                        <section className='row'>
                                            <section className='col-md-8'>
                                                <button onClick={jump} className='bigB col-md  mt-4 ' style={{ "marginLeft": "-0.8rem", "width": "16rem","position":"relative","left":"1.2rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button>

                                            </section>
                                            <section className='col-md-4'>
                                                <button onClick={jump} className='bigC col-md  mt-4 ' style={{ "marginLeft": "-0.8rem", "width": "  10rem","position":"relative","left":"-5rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "aqua" }}>Skip</span></button><br />

                                            </section>
                                        </section>





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

export default BrandsOn5