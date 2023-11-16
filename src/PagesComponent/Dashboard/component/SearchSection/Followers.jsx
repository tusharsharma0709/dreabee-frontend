import numeral from 'numeral';
import React from 'react'
import { useState } from 'react';
import InputRange from 'react-input-range';
const Followers = () => {

    
    const [selected, setSelelcted] = useState('Dreabee Score')
    
    
    
    
    const [minimumF, setMinimumF] = useState();
    const [maximumF, setMaximumF] = useState();
    
    
    const [fDropz, setFDropz] = useState(false);
    const [inputsFollow, setInputsFollow] = useState({ Followerz: { min: 0, max: 2000000 } });


    return (

        <div >
            <button className={fDropz ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => { setFDropz(!fDropz) }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{ "fontWeight": "700", "fontSize": "14px" }}>
                        Followers
                    </label>&nbsp;&nbsp;
                    {
                        fDropz
                            ?
                            <label className='bg-io d-flex align-items-center'>
                                <i className="fa fa-angle-up"></i>
                            </label>
                            :
                            <label className='d-flex align-items-center'>
                                <i className="fa fa-angle-down"></i>
                            </label>
                    }
                </div>
            </button>



            {
                fDropz
                    ?
                    <div className='Score_drop Hovely p-4 mt-1' style={{ right: "30px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                        <label>
                            <b> SELECT FOLLOWERS</b>
                        </label>

                        <section className='my-4'>
                            <InputRange
                                maxValue={2000000}
                                minValue={0}
                                value={inputsFollow?.Followerz}
                                onChange={(value) =>
                                    setInputsFollow((prev) => ({ ...prev, Followerz: value }))
                                }
                            />
                        </section>



                        <section className='container '>
                            {/* <section className='row bg-info d-flex '> */}

                            <div className='row d-flex align-items-center justify-content-evenly my-3 mb-3 mt-4'>

                                <div className='py-1 px-5 my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                    <section className='' style={{ "fontSize": "10px", color: "" }}>Min. Score</section>
                                    <input type='text'
                                        // value={inputs.DbScore.min}
                                        value={(numeral(inputsFollow.Followerz.min).format('0.0a'))}
                                        // onchange={(e) => { setMinimumF(e.target.value) }} 
                                        className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                </div>




                                <div className='py-1 px-5  my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                    <section className='b' style={{ "fontSize": "10px", color: "" }}>Max. Score</section>
                                    <input type='text'
                                        // value={inputs.DbScore.max} 
                                        value={(numeral(inputsFollow.Followerz.max).format('0.0a'))}
                                        // onchange={(e) => { setMaximumF(e.target.value) }} 
                                        className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                </div>
                            </div>



                            {/* </section> */}
                        </section>



                        <div className='d- flex-column city_search_section px-3 py-3  ' style={{ backgroundColor: "", "borderRadius": "10px" }}>

                            <label>
                                <b> SELECT BY INFLUENCER SIZE</b>
                            </label>
                            {/* <p style={{ "fontSize": "15px" }} >Qoruz Score helps you to filter influencers based on how engaging an influencer’s content is  <span className='text-primary'><u> Read more</u> . </span></p> */}


                            <section div className='row my-1 py-2  hoverpe'>
                                <div style={{ "fontSize": "15px", color: "green", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                    <input type='radio' name='follower' /> &nbsp;   Nano
                                </div>

                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >2K-10K followers</div>
                            </section>
                            {/* ___________  */}
                            <section div className='row my-1 py-2  hoverpe'>
                                <div style={{ "fontSize": "15px", color: "yellow", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                    <input type='radio' name='follower' /> &nbsp;   Micro
                                </div>

                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >10K-25K followers</div>
                            </section>
                            {/* ___________  */}
                            <section div className='row my-1 py-2  hoverpe'>
                                <div style={{ "fontSize": "15px", color: "blue", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                    <input type='radio' name='follower' /> &nbsp;   Mid Tier
                                </div>

                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >25K-100K followers</div>
                            </section>
                            {/* ___________  */}
                            <section div className='row my-1 py-2  hoverpe'>
                                <div style={{ "fontSize": "15px", color: "pink", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                    <input type='radio' name='follower' /> &nbsp;   Macro
                                </div>

                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >100K-250K followers</div>
                            </section>
                            {/* ___________  */}
                            <section div className='row my-1 py-2  hoverpe'>
                                <div style={{ "fontSize": "15px", color: "purple", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                    <input type='radio' name='follower' /> &nbsp;   Mega
                                </div>

                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >250K-1M followers</div>
                            </section>
                            {/* ___________  */}
                            <section div className='row my-1 py-2  hoverpe'>
                                <div style={{ "fontSize": "15px", color: "red", fontWeight: 600 }} className='col-lg text-start d-flex' >
                                    <input type='radio' name='follower' /> &nbsp;   A-Listers
                                </div>
                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg text-center' >1M+ followerss</div>
                            </section>
                            {/* ___________  */}
                            <div className=''>
                            </div>
                        </div>


                        <div className='loaction_footer mt-3 pt-3' style={{ boxShadow: " rgb(0 0 0 / 50%) 0px -6px 6px -6px " }}>
                            <button className='btn btnz me-2' onClick={() => { setFDropz(false) }}>
                                Clear Filters
                            </button>

                            <button className='btn btnz ms-2'
                                onClick={() => {
                                    setMinimumF(inputsFollow.Followerz.min)
                                    setMaximumF(inputsFollow.Followerz.max)

                                    console.log("the folower count min " , minimumF)
                                    console.log("the folower count max " + maximumF)
                                }}
                            >
                                Apply
                            </button>
                        </div>

                    </div>
                    :
                    null
            }
        </div>
    )
}

export default Followers