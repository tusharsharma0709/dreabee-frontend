import React from 'react'
import hexo from '../../Imagez/BusinessLandinPgImg/Hexagon.png'


const NavBuss = () => {
    return (
        <>
            {/* <div className='container'> */}
            <section className='row bussNavv' style={{ "height": "6rem", }}>

                <div className='col-4 ' style={{}}>
                    <h6 className='text-light' style={{ "fontSize": "1.1rem", "fontWeight": "600", "paddingLeft": "6rem", "paddingTop": "2.2rem" }}>  <span><img src={hexo} alt='hexo' style={{"width":"2rem"}}/></span>  DREABEE Business Suite</h6>
                </div>
                <div className='col-8 ' style={{}}>

                    <div className='row ' style={{ "color": "white", "paddingTop": "2.2rem" , }}>
                        <div className='col-5'></div>
                        <div className='col-7 py-auto' style={{ "marginLeft": "-1.2rem", }}>
                            <div className='row' style={{}}>
                                <div className='col-4' style={{}}>
                                    <h6 className='navHovText0 ' style={{ "fontSize": "1.05rem", "fontWeight": "600", "cursor":"pointer", }} onClick={(e)=>{document.getElementById("BusSuite").scrollIntoView({behavior:"smooth"})}} >Why Business Suite</h6>
                                </div>

                                <div className='col'>
                                    <h6 className='navHovText0 ' style={{ "fontSize": "1.05rem", "fontWeight": "600", "cursor":"pointer","zIndex":"4","color":"white" }} onClick={(e)=>{document.getElementById("keyFeaturez").scrollIntoView({behavior:"smooth"})}}>Our Features</h6>
                                </div>

                                <div className='col'>
                                    <h6 className='navHovText0 ' style={{ "fontSize": "1.05rem", "fontWeight": "600", "cursor":"pointer" }} onClick={(e)=>{document.getElementById("Testimonialz").scrollIntoView({behavior:"smooth"})}}>Testimonials</h6>
                                </div>

                                <div className='col'>
                                    <h6 className='navHovText0 ' style={{ "fontSize": "1.05rem", "fontWeight": "600", "cursor":"pointer" }} onClick={(e)=>{document.getElementById("Pricing").scrollIntoView({behavior:"smooth"})}}>Pricing</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>
        </>
    )
}

export default NavBuss