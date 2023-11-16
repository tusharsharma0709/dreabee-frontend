import React from 'react'
import { useState } from 'react';

const RangeBar1 = () => {
    const [rayng, setRayng] = useState();
    return (
        <>

            {/* <div class="slidecontainer">
                <input type="range" min="1" max="36" value={rayng} onChange={(e) => { setRayng(e.target.value) }} className="slider" id="myRange" />
                <p>Value: {rayng}</p>
            </div> */}

            <div className='bg-  Glassy' style={{ height: "450px", width: "650px", "borderRadius": "80px" }}>


                <section className='mt-5'>
                    <span style={{ "position": "", "top": "-26rem", "left": "10rem" }}><button className='btnz' style={{ "height": "3.5rem", "fontWeight": "800", "width": "12rem", "border": "none", "borderRadius": "40px", "backgroundColor": "#D12C8B ", "color": "white" }}>{rayng} Credits</button></span>
                </section>


                <section className='d-flex justify-content-center my-5' style={{ width: "100%" }}>

                    <div class="slidecontainer">
                        <input type="range" min="1" max="36" value={rayng} onChange={(e) => { setRayng(e.target.value) }} className="slider" id="myRange" />
                        <section className='d-flex flex-direction-row justify-content-between text-light w-100 mt-1 px-2' style={{ fontweight: 700 }}>
                            <p className='text-center' style={{ fontweight: "700" }}>0</p>
                            <p className='text-center' style={{ fontweight: "700" }}>4</p>
                            <p className='text-center' style={{ fontweight: "700" }}>8</p>
                            <p className='text-center' style={{ fontweight: "700" }}>12</p>
                            <p className='text-center' style={{ fontweight: "700" }}>16</p>
                            <p className='text-center' style={{ fontweight: "700" }}>20</p>
                            <p className='text-center' style={{ fontweight: "700" }}>24</p>
                            <p className='text-center' style={{ fontweight: "700" }}>28</p>
                            <p className='text-center' style={{ fontweight: "700" }}>32</p>
                            <p className='text-center' style={{ fontweight: "700" }}>36</p>
                        </section>
                    </div>

                </section>


                <section className='mt-4' style={{ width: "90%" }}>
                    <div className='row'>
                        <div className='col text-light text-start px-5'>
                            <p style={{ lineHeight: "2px", "fontSize": "18px" }}> <i class='bx bx-check ' style={{ "fontSize": "26px", "lineHeight": "12px" }} /> Search Wizard</p>
                            <p style={{ lineHeight: "2px", "fontSize": "18px" }}> <i class='bx bx-check ' style={{ "fontSize": "26px", "lineHeight": "12px" }} /> Influencer Profile Analytics</p>
                            <p style={{ lineHeight: "2px", "fontSize": "18px" }}> <i class='bx bx-check ' style={{ "fontSize": "26px", "lineHeight": "12px" }} /> Campaign Reporting</p>
                            <p style={{ lineHeight: "2px", "fontSize": "18px" }}> <i class='bx bx-check ' style={{ "fontSize": "26px", "lineHeight": "12px" }} /> Influencer Outreach</p>
                            <p style={{ lineHeight: "2px", "fontSize": "18px" }}> <i class='bx bx-check ' style={{ "fontSize": "26px", "lineHeight": "12px" }} /> Future Upgrades</p>
                            <p style={{ lineHeight: "2px", "fontSize": "18px" }}> <i class='bx bx-check ' style={{ "fontSize": "26px", "lineHeight": "12px" }} /> Dedicated Support</p>
                        </div>


                        <div className='col text-light mt-2'>
                            <section className='text-end mt-4'>

                                <p className='my-1  me-3' style={{ lineHeight: "12px", "fontSize": "18px", "fontWeight": "700" }}> For 0 Influencers</p>
                                <p className='my-1 me-3' style={{ lineHeight: "12px", "fontSize": "42px", "fontWeight": "700" }}>  <i class='bx bx-rupee' style={{position : "relative", top  : "5px"}} ></i>  0</p>
                                <span className='' style={{ "position": "", "top": "-10rem", "left": "0rem" }}><button className='btnz mt-2' style={{ "height": "3.5rem", "fontWeight": "800", "width": "12rem", "border": "none", "borderRadius": "40px", "backgroundColor": "#D12C8B ", "color": "white" }}>0 Credits</button></span>

                            </section>

                        </div>
                    </div>


                </section>

            </div>

        </>
    )
}

export default RangeBar1