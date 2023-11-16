import React from 'react'
import { useState } from 'react';
import InputRange from 'react-input-range';

const DbeeScore = () => {

    const [dreabeeDrop, setDreabeeDrop] = useState(false);

    const [selected, setSelelcted] = useState('Dreabee Score')
    const [minimum, setMinimum] = useState("")
    const [maximum, setMaximum] = useState("")

    const [inputs, setInputs] = useState({ DbScore: { min: 0, max: 10 } });

    return (

        <div >
            <button className={dreabeeDrop ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => { setDreabeeDrop(!dreabeeDrop) }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{ "fontWeight": "700", "fontSize": "14px" }}>
                        Dreabee Score
                    </label>&nbsp;&nbsp;
                    {
                        dreabeeDrop
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
                dreabeeDrop
                    ?
                    <div className='Score_drop Hovely p-4 mt-1' style={{ right: "200px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                        <label>
                            <b> SELECT DREABEE SCORE</b>
                        </label>



                        <section className='my-4'>
                            <InputRange
                                maxValue={10}
                                minValue={0}
                                value={inputs?.DbScore}
                                onChange={(value) =>
                                    setInputs((prev) => ({ ...prev, DbScore: value }))
                                }
                            />
                        </section>



                        <section className='container '>
                            {/* <section className='row bg-info d-flex '> */}

                            <div className='row d-flex align-items-center justify-content-evenly my-3 mb-3 mt-4'>

                                <div className='py-1 px-5 my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                    <section className='' style={{ "fontSize": "10px", color: "" }}>Min. Score</section>
                                    <input type='text' value={inputs.DbScore.min} onChange={(e) => { setMinimum(inputs.DbScore.min) }} className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                </div>




                                <div className='py-1 px-5  my-1 btnz col-md-5' style={{ "border": "1px solid #0E0E0E", "borderRadius": "10px" }}>
                                    <section className='b' style={{ "fontSize": "10px", color: "" }}>Max. Score</section>
                                    <input type='text' value={inputs.DbScore.max} onChange={(e) => { setMaximum(inputs.DbScore.max) }} className='bg-transparent' style={{ width: "100px", outline: "none", border: "none", "fontSize": "16px", fontWeight: "600", color: "#7e7e7e" }} />
                                </div>
                            </div>

                            {/* <button onClick={Go()}>go</button> */}

                            {/* </section> */}
                        </section>



                        <div className='d- flex-column city_search_section px-3 py-3  ' style={{ backgroundColor: "rgba(64, 63, 63, 0.226)", "borderRadius": "10px" }}>


                            <p style={{ "fontSize": "15px" }} >Qoruz Score helps you to filter influencers based on how engaging an influencer’s content is  <span className='text-primary'><u> Read more</u> . </span></p>


                            <section div className='row my-2'>
                                <div style={{ "fontSize": "15px", color: "green", fontWeight: 600 }} className='col-lg-4 text-center' >8-10</div>
                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-8' >Premium Influencers and Celebs</div>
                            </section>
                            <section div className='row my-2'>
                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-4 text-center text-warning' >5-8</div>
                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-8' >Mid Tier Influencers</div>
                            </section>
                            <section div className='row my-2'>
                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-4 text-center text-danger ' > &lt; 5 </div>
                                <div style={{ "fontSize": "15px", fontWeight: 600 }} className='col-lg-8' >Micro and Nano Influencers</div>
                            </section>





                            <div className=''>



                            </div>
                        </div>


                        <div className='loaction_footer mt-3 pt-3' style={{ boxShadow: " rgb(0 0 0 / 50%) 0px -6px 6px -6px " }}>
                            <button className='btn btnz me-2' onClick={
                                () => {
                                    setMinimum("");
                                    setMaximum("");
                                }}>
                                Clear Filters
                            </button>

                            <button className='btn btnz ms-2'
                                onClick={
                                    () => {
                                        setMinimum(inputs.DbScore.min);
                                        setMaximum(inputs.DbScore.max);
                                        alert("max & min :" + maximum )
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

export default DbeeScore