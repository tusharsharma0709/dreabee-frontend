import React from 'react'
import image2 from '../../Imagez/BusinessLandinPgImg/BusinessLanding3.png'
import r1 from '../../Imagez/BusinessLandinPgImg/Round1.png'
import r2 from '../../Imagez/BusinessLandinPgImg/Round2.png'

const BusinessLanding3Img = () => {
    return (
        <>
            <div className='row'>
                <div className='col-12  bg- text-center'>
                    <img className='nobg ' src={image2} alt='image' style={{ "zIndex": "2", "width": "62rem", "position": "", "top": "-5rem", "left": "-12rem", "overflow": "hidden", "pointerEvents": "none" }} />

                    <div className='d-flex align-items-center justify-content-evenly  flex-column ' style={{ position: "relative", top: "-32rem", left: "15rem", width: "80%", "height": "0px" }}>
                        <div className='d-flex flex-direction-row w-100 align-items-center justify-content-evenly ' style={{ "position": "relative", "top": "-5rem" }}>
                            <img className=' Kardz' src={r1} alt='imgro1' width={60} style={{ position: "relative", left: "10px" }} />
                            <img className=' Kardz' src={r2} alt='imgro1' width={70} height={70} style={{ position: "relative", left: "14px", top: "22px" }} />
                            <img className=' Kardz' src={r1} alt='imgro1' width={60} style={{ position: "relative", left: "10px" }} />
                        </div>


                        <div className='d-flex  flex-direction-row w-100  align-items-center  justify-content-evenly '>

                            <img className=' Kardz' src={r1} alt='imgro1' width={80} style={{ position: "relative", left: "-10px" }} />
                            <img className=' Kardz' src={r2} alt='imgro1' width={60} height={60} style={{ position: "relative", left: "-50px", top: "-40px" }} />
                            <img className=' Kardz' src={r2} alt='imgro1' width={60} height={60} style={{ position: "relative", left: "80px", top: "40px" }} />
                            <img  className=' Kardz'src={r1} alt='imgro1' width={80} style={{ position: "relative", left: "50px" }} />
                        </div>


                        <div className='d-flex flex-direction-row w-100 align-items-center justify-content-evenly bg-' style={{ "position": "relative", "top": "25px" }}>
                            <img className=' Kardz' src={r2} alt='imgro1' width={60} style={{ position: "relative", left: "10px", "top": "50px" }} />
                            <img className=' Kardz' src={r1} alt='imgro1' width={80} height={80} style={{ position: "relative", left: "14px", top: "22px" }} />
                            <img className=' Kardz' src={r2} alt='imgro1' width={60} style={{ position: "relative", left: "10px", "top": "50px" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BusinessLanding3Img