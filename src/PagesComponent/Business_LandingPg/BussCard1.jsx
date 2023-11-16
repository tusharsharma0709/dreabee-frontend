import React from 'react'
import image from '../../Imagez/BusinessLandinPgImg/photo1.png';
const BussCard1 = () => {
    return (
        <>
            <div className='row'>
            {/* <section style={{"marginBottom":"5rem"}}>
                        <h1 className='text-center' style={{ "fontSize": "2rem", "fontWeight": "700", "color": "#D461A8" }}> What Make us special -</h1>
                        <h1 className='text-center' style={{ "fontSize": "2.8rem", "fontWeight": "700", "color": "black", "position": "relative", "top": "" }}>Trusted by All business</h1>
                    </section> */}
                <div className='col-md-12 mx-5 my-5 text-center' style={{"zIndex": "2 "}}> 
                    <div style={{ "width": "55rem", "height": "16rem","background":"#FFF" ,"border": "2px solid #D461A8", "borderRadius": "20px"}}>

                        <div className='row d-flex align-items-center'>
                            <div className='col-md-4 ' style={{ "paddingLeft": "2rem" }}><img src={image} alt='image' style={{ "width": "14rem", "borderRadius": "20px", "position": "relative", "top": "0.8rem" }} /></div>
                            <div className='col-md-8' style={{"zIndex":"2"}}>
                                <h6 className='text-start' style={{ "fontSize": "1rem", "fontWeight": "600", "width": "35rem", "position": "relative", "left": "0rem", "top": "1rem" }}>DREABEE has helped us immensely by providing a dashboard of influencers to quickly find the right influencers for our business - saved a lot of time & effort of scouting influencers manually. Really happy with the god speed of account managers.</h6>

                                <section className='row text-start' style={{ "position": "relative", "top": "2rem" }}>
                                    <div className='col-md-4' > <span className='mulaHex' style={{ "position": "relative", "left": "-2.4rem", "top": "-1.8rem" }}></span></div>
                                    <div className='col-md-8'>
                                        <section className='text-start ' style={{ "position": "relative", "left": "-9rem", "top": "-6px" }}>
                                            <h6 style={{ "fontweight": "800", "fontSize": "", "position": "relative", "top": "6px" }}> AKSHIT JAIN</h6>
                                            <p style={{ "fontweight": "700", "fontSize": "14px" }}> Growth Lead<br />
                                                Pep.Live</p>
                                        </section>
                                    </div>
                                </section>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BussCard1