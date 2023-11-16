import React from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom';
const InfluReg8 = () => {
        
    const navigate = useNavigate();

    const jump=()=>{
        navigate("/i");
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
                                    <div className='col-md-12 '>
                                        {/* headings */}
                              <section style={{"width":""}}>         <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px","width":"" }}>Are you interested in DREABEE perks?</h4></section> 
                                        <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginLeft": "-3rem", "marginBottom": "2rem" }}>Exclusive hamper curated and sent to you by Premium brands like <br/>Tommy Hilfiger, Goibibo etc.<br />
                                        </p>                                        


                                 {/* Fields  */}
                                 <section style={{ "marginTop": "4rem" }}>
                                            {/* line1 */}
                                            <section className=''>







                                                {/* row 1 languages  */}
                                                <section className='row ' style={{ "marginLeft": "2.6rem", "marginTop": "1rem" }}>

                                                    <section className='col-md-2 me-5 '>
                                                        <button className='smallB' style={{"width":"15rem"}}>
                                                            <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Interested</span>
                                                        </button>

                                                    </section>
                                                    {/* button1 */}
                                                    <section className='col-md-2 ' style={{"marginLeft":"8rem"}}>
                                                        <button className='smallB' style={{"width":"15rem"}}>
                                                            <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Not Interested</span>
                                                        </button>

                                                    </section>
                                                    {/* button2 */}
                                               


                                                </section>




                                                </section>
                                                </section>







                                        {/* button  */}
                                        <button onClick={jump} className='bigB col-md  mt-5' style={{ "marginLeft": "-0.8rem", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />


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

export default InfluReg8