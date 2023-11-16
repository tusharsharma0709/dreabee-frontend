import React, { useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../Routez/Routey';
const InfluReg3_2 = () => {
    const navigate = useNavigate();
    const [utubeurl, setUtubeurl] = useState('');
    const [utubecost, setUtubecost] = useState('');


    const [instaUrl, setInstaUrl] = useState('');
    const [instaCost, setInstaCost] = useState('');
    // const [costShow, setCostShow] = useState(false);
    const [instaShow1, setInstaShow1] = useState(false);
    const [urlShow1, seturlShow1] = useState(false);
    const [urlShow2, seturlShow2] = useState(false);


    const jump = () => {




        let data = { utubeurl };
        if (utubeurl.length === 0) {
            seturlShow1(true);

        } else {
            if (utubeurl.length >= 60) {
                seturlShow2(true);
            } else {
                if (utubecost.length === 0) {
                    setInstaShow1(true);
                } else {
                    console.log("working till here")


                    // axios.post(`${baseUrl}api/Influencer/ValidatingInstaUrl`, {
                    // url: data.instaUrl,
                    // }).then((res) => {
                    // console.log("the response from url validation api", res)
                    // swal("You are successfully Signed Up", "Try Login", "success");
                    navigate("/Contact_Details", { state: [{ Youtube_link: utubeurl, youtubePerPostCost: utubecost }] });
                    // }).catch((error) => {
                    // console.log("error", error);
                    // swal("Oops!", "Maybe  a Wrong Url ! Try Again with right Url .", "error");
                    // })
                }
            }
        }


    }


    const insta = () => {
        navigate("/Enter_Instagram_Profile");
    }

    return (
        <>
            {/* <section className='Wrap ' style={{ "height": "100vh", "backgroundColor": "black" }}>
                <div className='container'>
                    <div className='row ' bg-dark style={{ "height": "1rem", "width": "100vw" }}>
                        <div className='col-md-6 mt-5' style={{ "marginLeft": "15rem" }}>
                            <span className='' style={{ "position": "" }}>
                                <section className='Ellipse4' style={{ "width": "13rem", "height": "13rem" }} />
                                <section className='Ellipse3' style={{ "maxWidth": "26rem", "height": "26rem" }} />
                            </span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md text-light text-center' style={{ "height": "1rem" }}>

                            <img src={logo} alt='hehe' style={{ "width": "136px", "marginTop": "2rem" }} />
                            <section className='invBoxx ' style={{ "marginTop": "36rem", "marginLeft": "17.5rem", "height": "30rem" }}>



                                <div className='row mt-5 text-center' style={{ "marginLeft": "-2rem" }}>
                                    <div className='col-md '>
                                        <h4 style={{ "fontSize": "38px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Youtube Profile & Commercials</h4>
                                        <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>This will help us to give you more relevant campaigns! <br />
                                        </p>







                                        <section>
                                            <input type='text' value={utubeurl} name='utubeurl' onChange={(e) => { setUtubeurl(e.target.value) }} placeholder='Enter here' className='bg-dark' style={{ "marginTop": "4rem", "marginLeft": "1rem", "paddingLeft": "1rem", "fontSize": "16px", "height": "59px", "borderRadius": "10px", "width": "424px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                            <section className=' ' style={{ "fontWeight": "600", "position": "relative", "top": "-5.5rem", "left": "-7.4rem" }}><span style={{ "color": "#FFFFF" }}> <i className="fa-brands fa-youtube" style={{"color":"#FFFFFF"}} />  Profile handle/URL*</span></section>
                                        </section>

                                        <section style={{ "marginTop": "-2rem"}}>
                                            <input type='text' value={utubecost} name='utubecost' onChange={(e) => { setUtubecost(e.target.value) }} placeholder='Enter your charges for 1 post' className='bg-dark' style={{ "marginTop": "4rem", "marginLeft": "1rem", "paddingLeft": "1rem", "fontSize": "16px", "height": "59px", "borderRadius": "10px", "width": "424px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                            <section className=' ' style={{ "fontWeight": "600", "position": "relative", "top": "-5.5rem", "left": "-7.7rem" }}><span style={{ "color": "#FFFFF" }}>  <i className="fa-solid fa-indian-rupee-sign" style={{"color": "#ffffff"}}></i> Youtube post cost*</span></section>
                                        </section>


                                        

                                        <section style={{"marginTop":"-1rem"}}>
                                        <section className=' mb-3' onClick={insta} style={{ "fontWeight": "600", "marginTop": "2rem", "marginLeft": "2rem","cursor":"pointer" }}><span style={{ "color": "aqua" }}>Back to Instagram details</span></section>
                                        <button onClick={jump} className='bigB col-md  ' style={{ "marginLeft": "1.2rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                        </section>
                                    </div>
                                </div>


                            </section>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* -------------------------------------------------------------------------------------------------------------------- */}



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
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Youtube Profile & Commercials</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>This will help us to give you more relevant campaigns! <br />
                                </p>





                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-4'>
                                        <div className='py-4' style={{ border: "" }}>


                                            {/* Form fields */}


                                            {/* Fields  */}
                                            {/* --handel-- */}
                                            <section>
                                                <section className=' text-start ps-5 text-light' style={{ "fontWeight": "600" }}><span style={{ "color": "#FFFFF" }}><i className="fa-brands fa-youtube" style={{ "color": "#FFFFFF" }} />  Profile handle / URL</span></section>
                                                <input type='text' value={utubeurl} name='utubeurl' onChange={(e) => { setUtubeurl(e.target.value); seturlShow1(false)}}
                                                    placeholder='Enter here' className='bg-dark' style={{ "marginTop": "", "marginLeft": "1rem", "paddingLeft": "1rem", "fontSize": "16px", "height": "59px", "borderRadius": "10px", "width": "424px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>


                                                {urlShow1 && (instaUrl.length === 0) ?
                                                    <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Youtube Profile Url  can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                    : null}
                                                {urlShow2 && (instaUrl.length >= 60) ?
                                                    <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Youtube Profile Url can not exceed 60 words. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                    : null}
                                                {/* {errow && email.length <= 0 ? */}


                                            </section>




                                            {/* --cost-- */}
                                            <section className='my-4'>
                                                <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600" }}><span style={{ "color": "#FFFFF" }}><i className="fa-solid fa-indian-rupee-sign" style={{ "color": "#ffffff" }}></i> Youtube post cost</span></section>
                                                <input type='text' value={utubecost} name='utubecost' onChange={(e) => { setUtubecost(e.target.value); setInstaShow1(false) }}
                                                    // value={instaCost} name='instaCost' onChange={(e)=>{setInstaCost(e.target.value)}}
                                                    placeholder='Enter your charges for 1 post' className='bg-dark' style={{ "marginTop": "", "marginLeft": "1rem", "paddingLeft": "1rem", "fontSize": "16px", "height": "59px", "borderRadius": "10px", "width": "424px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                {instaShow1 && (instaCost.length == 0) ?
                                                    <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Youtube post cost  can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                    : null
                                                }

                                            </section>



                                            {/* button  */}
                                            <section className='my-2 mt-3 ' onClick={insta} style={{ "fontWeight": "600", "marginTop": "0rem", "marginLeft": "1rem", "cursor": "pointer" }}><span style={{ "color": "aqua" }}>Back to Instagram details</span></section>
                                            <button onClick={jump} className='bigB  mt-3  ' style={{ "marginLeft": "1.2rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />






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

export default InfluReg3_2