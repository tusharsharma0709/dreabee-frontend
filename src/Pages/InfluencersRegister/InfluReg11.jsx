import React, { useEffect, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom';
import pik from '../../Imagez/InfluencersReg/pik.png'
import axios from 'axios';
import { baseUrl } from '../../Routez/Routey';
const InfluReg11 = () => {
    const navigate = useNavigate();
    const [instaUrl, setInstaUrl] = useState();


    const UrlSent = () => {
        let data = { instaUrl }
        axios.post(`${baseUrl}api/Influencer/updateInstaData`, {
            user_name: data.instaUrl
        }).then((resp) => {
            console.log("Insta url update Api  response - ", resp.data)
            //   navigate("/k",{state: {Instagram_detail }});
        }).catch((error) => {
            console.log("Insta url update Api Error - ", error);
        })
    }



    useEffect(() => {
        // console.log(location.state.Instagram_detail.Instagram_link);
        // setInstaUrl(location.state.Instagram_detail.);
        // UrlSent();
    }, [])


    const jump = () => {
        // window.location.replace("https://www.instagram.com/neymarjr/");
        window.open("https://www.instagram.com/henrycavill/", "_blank", "noreferrer")
        setTimeout(() => {
            navigate("/Dreabee/Dashboard/home");
        }, 2000)
    }

    return (
        <>

            {/* _______  */}
            <section className='regUpForm ' style={{ "minHeight": "", "width": "100vw", "backgroundColor": "black" }}>
                <div className='row text-center bg-'>


                    {/* LOgo  */}
                    <div className='col-lg-12 bg-' style={{ "marginTop": "2.2rem" }}>
                        <img src={logo} alt='hehe' style={{ "width": "136px", }} />
                    </div>



                    {/* FoRm  */}
                    <div className='col-lg-12 ' >
                        <div className='row mt-2'>
                            <div className='col-md'>
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Yaay!! You are all done.</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>Being a part of DRAEBEE Creator Network, you'll now receive opportunities <br /> directly from Brands on your WhatsApp.
                                </p>



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-5 '>
                                        <div className='py-1' style={{ border: "" }}>


                                            <div className='row text-center' style={{ "marginLeft": "" }}>
                                                <div className='col-md-12 '>

                                                    <img src={pik} alt='pik' style={{ "width": "365px" }} />
                                                    <section style={{ "fontSize": "18px", "fontWeight": "300", "lineHeight": "20px", "color": "#FFFFFF", "marginLeft": "", "marginBottom": "1rem" }}>
                                                        Also, follow us on Instagram to get tips, tricks & interesting hacks about<br /> growing your profile. </section>
                                                    {/* button  */}
                                                    <button onClick={jump} className='bigB col-md  mt-2' style={{ "marginLeft": "-0.8rem", "width": "  30rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}><i className="fa-brands fa-instagram" style={{ "color": "#FFFFFF" }}></i> Follow us on Instagram</span></button><br />


                                                </div>
                                            </div>











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

export default InfluReg11