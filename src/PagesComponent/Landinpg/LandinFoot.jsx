import React from 'react'
import { useNavigate } from 'react-router-dom'

import CommFoot from '../CommonComponents/CommFoot'
import FlowerPhoto1 from './LandinPg_Sub/FlowerPhoto1'
import FlowerPhoto2 from './LandinPg_Sub/FlowerPhoto2'


const LandinFoot = () => {
    const navigate = useNavigate();
    const InflueReg = () => {
        navigate("/Phone_Verification_Influencers")
    }


    
    return (
        <>
            <div className='' style={{ "height": "80rem", "backgroundColor": "black", "zIndex": "-5", "overflow": "hidden" }}>
                <section className='bAckColORs' >
                    <section className='Ellipse2F' style={{ "position": "relative", "left": "65rem", "top": "6rem", "zIndex": "" }} />
                    <section className='Ellipse1F' style={{ "position": "relative", "left": "48rem", "top": "2rem" }} />
                </section>

                <section style={{ "position": "relative", "top": "-32rem", "height": "2rem" }}>
                    <div className='container'>
                        <div className='row '>
                            <div className='col-8'>
                             <FlowerPhoto1/>
                            </div>

                            <div className='col-4 text-center'>
                                <section  style={{height:"0px" , "paddingLeft": "", "position": "relative", "top": "-8rem", "left": "-25rem" }}>
                                    <FlowerPhoto2/>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                <CommFoot/>
            </div>

        </>
    )
}

export default LandinFoot