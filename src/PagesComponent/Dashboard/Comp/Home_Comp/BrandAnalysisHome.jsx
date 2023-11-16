import React from 'react'
import Invite from '../../../../Imagez/Dashboard/All/Invite.png'
import banner1 from '../../../../Imagez/Dashboard/All/Card1.png'
import Play from '../../../../Imagez/Dashboard/All/PLay.png'


const BrandAnalysisHome = () => {
    return (
        <>
            <div className='row mt-5  ' style={{ "height": "25rem", "borderRadius": "10px", "background": "whitesmoke", "border": "1px solid #C83B93", "filter": "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))", }}>


                <div className='col-12'>

                    {/* ROW 1 */}
                    <div className='row ' style={{ "height": "4rem", "paddingTop": "2.5rem" }}>
                        <div className='col-12  d-flex justify-content-center align-items-center'>   <h5 style={{ "marginLeft": "0rem", "fontWeight": "700" }}>BRAND ANALYSIS </h5>     </div>
                    </div>

                    {/* ROW 2 */}
                    <div className='row  d-flex justify-content-evenly align-items-center mt-2' style={{ "height": "20rem" }}>
                        <div className='col-12 bg  justify-content-evenly align-items-center' >
                            <img src={banner1} alt='banner2 ' className='' style={{ "width": "60rem", "marginLeft": "12rem" }} />


                            <div className='row  d-flex justify-content-center align-items-center '>
                                {/* Button 1 */}
                                <div className='col-3 bg  justify-content- align-items-center'>


                                    <button className='text-center p-1  ' style={{
                                        "width": "13rem", "height": "2.8rem", "height": "2.8rem",
                                        "fontWeight": "600",
                                        "fontSize": "1.05rem",
                                        "borderRadius": "10px",
                                        "color": "white",
                                        "backgroundColor": "#C83B93", "border": "none",
                                        "marginLeft": "2rem",
                                        "position": "relative", "bottom": "6.2rem"
                                    }}><img src={Invite} alt='add' style={{ "width": "1.8rem", "border": "2px solid white", "borderRadius": "10px" }} /> &nbsp;
                                        <span style={{ "position": "relative", "top": "2px" }}> New Plan </span></button>

                                </div>
                                {/* Button 2 */}
                                <div className='col-3 bg  justify-content-evenly align-items-center'>

                                    <button className='text-center p-1  ' style={{
                                        "width": "13rem", "height": "2.8rem", "height": "2.8rem",
                                        "fontWeight": "600",
                                        "fontSize": "1.05rem",
                                        "borderRadius": "10px",
                                        "color": "white",
                                        "backgroundColor": "#FFFFFF", "border": "1px solid  #7E7E7E",
                                        "marginLeft": "-4rem",
                                        "position": "relative", "bottom": "6.2rem"
                                    }}><img src={Play} alt='add' style={{ "width": "1.8rem", "border": "", "borderRadius": "10px" }} /> &nbsp;
                                        <span style={{ "position": "relative", "top": "2px", "color": "#7E7E7E" }}> See how it works </span></button>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BrandAnalysisHome