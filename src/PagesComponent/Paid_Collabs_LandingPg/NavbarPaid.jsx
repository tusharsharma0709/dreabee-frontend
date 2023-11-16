import React from 'react'
import hexo from '../../Imagez/PaidCollabsLandingPgImg/Hexagon.png'

const NavbarPaid = () => {
    return (
        <>
            <section className='row bussNavv' style={{ "height": "6rem", "zIndex": "4" }}>

                <div className='col-4 ' style={{ "zIndex": "4" }}>
                    <h6 className='text-light' style={{ "fontSize": "1.1rem", "fontWeight": "600", "paddingLeft": "6rem", "paddingTop": "2.2rem" }}>  <span><img src={hexo} alt='hexo' style={{ "width": "2rem" }} /></span>  DREABEE Paid Collabs</h6>
                </div>
                <div className='col-8 '>

                    <div className='row ' style={{ "color": "white", "paddingTop": "2.2rem" }}>
                        <div className='col-3'></div>
                        <div className='col-9 py-auto' style={{ "marginLeft": "-1.2rem" }}>
                            <div className='row'>

                                <div className='col-4 text-center ps-5'>
                                    <h6 className='navHovText0'  onClick={(e) => { document.getElementById("Works").scrollIntoView({ behavior: "smooth" }) }} style={{ "cursor": "pointer", "fontSize": "1.05rem", "fontWeight": "600", "zIndex": "4", "color": "white" }}>How It Works ?</h6>
                                </div>
                                <div className='col-2'>
                                    <h6 className='navHovText0'  onClick={(e) => { document.getElementById("Cases").scrollIntoView({ behavior: "smooth" }) }} style={{ "cursor": "pointer", "fontSize": "1.05rem", "fontWeight": "600" }}>Use Cases</h6>
                                </div>

                                <div className='col-2'>
                                    <h6 className='navHovText0'  onClick={(e) => { document.getElementById("Features").scrollIntoView({ behavior: "smooth" }) }} style={{ "cursor": "pointer", "fontSize": "1.05rem", "fontWeight": "600", "zIndex": "4", "color": "white" }}>Key Features</h6>
                                </div>

                                <div className='col-2'>
                                    <h6 className='navHovText0'  onClick={(e) => { document.getElementById("Customers").scrollIntoView({ behavior: "smooth" }) }} style={{ "cursor": "pointer", "fontSize": "1.05rem", "fontWeight": "600" }}>Customers</h6>
                                </div>

                                <div className='col-2'>
                                    <h6 className='navHovText0'  onClick={(e) => { document.getElementById("FAQz").scrollIntoView({ behavior: "smooth" }) }} style={{ "cursor": "pointer", "fontSize": "1.05rem", "fontWeight": "600" }}>FAQs</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default NavbarPaid