import React, { useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { baseUrl } from '../../Routez/Routey';
const InfluReg3 = () => {
    const [instaUrl, setInstaUrl] = useState('');
    const [instaCost, setInstaCost] = useState('');
    // const [costShow, setCostShow] = useState(false);
    const [instaShow1, setInstaShow1] = useState(false);
    const [urlShow1, seturlShow1] = useState(false);
    const [urlShow2, seturlShow2] = useState(false);

    const navigate = useNavigate();

    // const urlLength = instaUrl.length;
    // const costLength = instaCost.length;
    // const errowLength = errow.length;



    const jump = () => {




        let data = { instaUrl };
        if (instaUrl.length === 0) {
            seturlShow1(true);

        } else {
            if (instaUrl.length >= 60) {
                seturlShow2(true);
            } else {
                if (instaCost.length === 0) {
                    setInstaShow1(true);
                } else {
                    console.log("working till here")
                    console.log("working till here-", instaUrl)


                    axios.post(`${baseUrl}api/Influencer/ValidatingInstaUrl`, {
                        url: data.instaUrl,
                    }).then((res) => {
                        console.log("the response from url validation api", res)
                        // swal("You are successfully Signed Up", "Try Login", "success");
                        navigate("/Contact_Details", { state: [{ Instagram_link: instaUrl, InstaPerPostCost: instaCost }] });
                    }).catch((error) => {
                        console.log("error", error);
                        swal("Oops!", "Maybe  a Wrong Url ! Try Again with right Url .", "error");
                    })
                }
            }
        }


    }

    const insta = () => {
        navigate("/Enter_Youtube_Profile");
    }

    return (
        <>
            <section className='regUpForm ' style={{ "minHeight": "", "width": "100vw", "backgroundColor": "black" }}>
                <div className='row text-center bg-'>


                    {/* LOgo  */}
                    <div className='col-lg-12 bg-' style={{ "marginTop": "2.2rem" }}>
                        <img src={logo} alt='hehe' style={{ "width": "136px", }} />
                    </div>



                    {/* FoRm  */}
                    <div className='col-lg-12 ' style={{ "marginTop": "2.2rem" }}>
                        <div className='row mt-2'>
                            <div className='col-md'>
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Instagram Profile & Commercials</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>This will help us to give you more relevant campaigns! <br />
                                </p>



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-4'>
                                        <div className='py-4' style={{ border: "" }}>




                                            {/* Fields  */}
                                            {/* --handel-- */}
                                            <section>
                                                <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600" }}><span style={{ "color": "#FFFFF" }}><i className="fa-brands fa-instagram" style={{ "color": "#FFFFFF" }}></i> Profile handle / URL</span></section>

                                                <input type='text' value={instaUrl} name='instaUrl' onChange={(e) => { setInstaUrl(e.target.value) }}
                                                    //  value={instaUrl} name='instaUrl' onChange={(e)=>{setInstaUrl(e.target.value)}}
                                                    placeholder='Enter here' className='bg-dark' style={{ "marginTop": "", "marginLeft": "", "paddingLeft": "1rem", "fontSize": "16px", "height": "59px", "borderRadius": "10px", "width": "424px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>


                                                {urlShow1 && (instaUrl.length === 0) ?
                                                    <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Instagram Profile Url  can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                    : null}
                                                {urlShow2 && (instaUrl.length >= 60) ?
                                                    <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600"}}>Instagram Profile Url can not exceed 60 words. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                    : null}
                                                {/* {errow && email.length <= 0 ? */}


                                            </section>




                                            {/* --money-- */}
                                            <section className='my-4'>
                                                <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600" }}><span style={{ "color": "#FFFFF" }}><i className="fa-solid fa-indian-rupee-sign" style={{ "color": "#ffffff" }}></i> Instagram post cost.</span></section>

                                                <input type='number' value={instaCost} name='instaCost' onChange={(e) => { setInstaCost(e.target.value) }}
                                                    placeholder='Enter your charges for 1 post' className='bg-dark' style={{ "marginTop": "", "marginLeft": "", "paddingLeft": "1rem", "fontSize": "16px", "height": "59px", "borderRadius": "10px", "width": "424px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>


                                                {instaShow1 && (instaCost.length == 0) ?
                                                    <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Instagram post cost  can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                    : null
                                                }

                                            </section>

                                            {/* button  */}
                                            <section className=' my-2 mt-3' onClick={insta} style={{ "fontWeight": "600", "marginTop": "0rem", "marginLeft": "", "cursor": "pointer" }}><span style={{ "color": "aqua" }}>I don't have Instagram</span></section>
                                            <button onClick={jump} className='bigB   mt-3 ' style={{ "marginLeft": "" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />








                                        </div>
                                    </section>
                                </section>




                            </div>
                        </div>
                    </div>




                </div>
            </section>

        </>
    )
}

export default InfluReg3