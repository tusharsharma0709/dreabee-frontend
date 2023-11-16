import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Imagez/Common/logo.png'
import swal from 'sweetalert';
import axios from 'axios';
import { baseUrl } from '../../../Routez/Routey';
const BrandsOn4 = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [company, setCompany] = useState()
    const [companySize, setCompanySize] = useState();
    const [campaignFrequency, setCampaignFrequency] = useState("")
    const [hopewithDREABEE, setHopewithDREABEE] = useState([]);
    const [show, setShow] = useState(false);
    // ______________________________________________________________________________________     
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const boom1 = () => {
        console.log(ref1.current.value)
        hopewithDREABEE.push(ref1.current.value)
        document.getElementById('boom1').style.backgroundColor = '#20F0BC';
        document.getElementById('boom1').style.borderRadius = '60px';
    }
    const boom2 = () => {
        console.log(ref2.current.value)
        hopewithDREABEE.push(ref2.current.value)
        document.getElementById('boom2').style.backgroundColor = '#20F0BC';
        document.getElementById('boom2').style.borderRadius = '60px';
    }
    const boom3 = () => {
        console.log(ref3.current.value)
        hopewithDREABEE.push(ref3.current.value)
        document.getElementById('boom3').style.backgroundColor = '#20F0BC';
        document.getElementById('boom3').style.borderRadius = '60px';
    }
    const boom4 = () => {
        console.log(ref4.current.value)
        hopewithDREABEE.push(ref4.current.value)
        document.getElementById('boom4').style.backgroundColor = '#20F0BC';
        document.getElementById('boom4').style.borderRadius = '60px';
    }

    // ______________________________________________________________________________________     
    useEffect(() => {
        console.log(location);
        setCompany(location.state.company);
        setCompanySize(location.state.companySize);
        setCampaignFrequency(location.state.CampaignFrequency);
    }, [])
    // ______________________________________________________________________________________     
    const jump = () => {

        let data = {
            companySize,
            campaignFrequency,
            hopewithDREABEE
        };

        if (hopewithDREABEE.length == 0) {
            setShow(true);
        } else {
            //1. POST LOGIN API___ 
            axios.post(`${baseUrl}api/Brands/UpdateExtraInfo`, {
                email: "example2@gmail.com",
                companySize: data.companySize,
                CampaignFrequency: data.campaignFrequency,
                hopewithDREABEE: data.hopewithDREABEE

            }).then((resp) => {
                console.log("Login response - ", resp.data)
                // console.log("pets data -",PetInfo)
                swal("Yasss!", "We Are In..", "success");
                navigate("/LogIn");
            }).catch((error) => {
                console.log("Register Api Error - ", error);
            })
        }

    }

    // ______________________________________________________________________________________     
    return (
        <>
            <section className='regUpForm ' style={{ "minHeight": "", "width": "100vw", "backgroundColor": "black" }}>
                <div className='row text-center bg-'>

                    {/* LOgo  */}
                    <div className='col-lg-12 bg-' style={{ "marginTop": "2.2rem" }}>
                        <img src={logo} alt='hehe' style={{ "width": "136px", }} />
                    </div>








                    {/* fORM  */}
                    <div className='col-lg-12 ' style={{ "marginTop": "2.2rem" }}>
                        <div className='row mt-2'>
                            <div className='col-lg-12 text-center'>
                                {/* headings */}
                                <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px", "width": "", "marginLeft": "" }}>What do you hope to achieve with DREABEE?</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginLeft": "-3rem", "marginBottom": "2rem" }}>Select all the relevant options.<br />
                                </p>


                                {/* Fields  */}

                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-7'>
                                        <div className='py-4'>

                                            <section style={{ "marginTop": "" }}>
                                                <section className=''>


                                                    {/* line1 */}
                                                    <section className='row  d-flex justify-content-evenly' style={{ "marginLeft": "", "marginTop": "1rem" }}>


                                                        <button className='smallB' onClick={boom1} id='boom1' style={{ "width": "16rem" }}>
                                                            <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Find Influencer  <input type="radio" value="Find Influencer " name='hopewithDREABEE' hidden ref={ref1} /></span>
                                                        </button>
                                                        {/* button1 */}


                                                        <button className='smallB' onClick={boom2} id='boom2' style={{ "width": "16rem" }}>
                                                            <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}> Influencer Contact Details  <input type="radio" value="Influencer Contact Details" name='hopewithDREABEE' hidden ref={ref2} /></span>
                                                        </button>
                                                        {/* button2 */}



                                                        <button className='smallB' onClick={boom3} id='boom3' style={{ "width": "16rem" }}>
                                                            <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Track Campaigns  <input type="radio" value="Track Campaigns " name='hopewithDREABEE' hidden ref={ref3} /></span>
                                                        </button>
                                                        {/* button3 */}


                                                    </section>

                                                    {/* line2 */}
                                                    <section className='row d-flex justify-content-evenly ' style={{ "marginLeft": "", "marginTop": "2rem" }}>

                                                        {/* button1 */}


                                                        <button className='smallB' onClick={boom4} id='boom4' style={{ "width": "16rem" }}>
                                                            <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Others  <input type="radio" value="Others" name='hopewithDREABEE' hidden ref={ref4} /></span>
                                                        </button>





                                                    </section>

                                                    
                                                </section>
                                            </section>
                                            {/* button  */}
                                            <button onClick={jump} className='bigB col-md  mt-5' style={{ "marginLeft": "-0.8rem", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                            {
                                                show ?
                                                    <h1>__</h1>
                                                    : null
                                            }


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

export default BrandsOn4