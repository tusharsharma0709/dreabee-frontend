import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Imagez/Common/logo.png'
const BrandsOn3 = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [company, setCompany] = useState()
    const [companySize, setCompanySize] = useState();
    const [campaignFrequency, setCampaignFrequency] = useState("")
    // ______________________________________________________________________________________     
    const jump = () => {
        navigate("/Onboarding4", { state: { company, companySize, CampaignFrequency: campaignFrequency } });
    }
    // ______________________________________________________________________________________     

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const boom1 = () => {
        ref1.current.checked = true;
        console.log(ref1.current.value)
        setCampaignFrequency(ref1.current.value)

        document.getElementById('boom1').style.backgroundColor = '#20F0BC';
        document.getElementById('boom1').style.borderRadius = '60px';
        document.getElementById('boom2').style.backgroundColor = '';
        document.getElementById('boom2').style.borderRadius = '';
        document.getElementById('boom3').style.backgroundColor = '';
        document.getElementById('boom3').style.borderRadius = '';
    }
    const boom2 = () => {
        ref2.current.checked = true;
        console.log(ref2.current.value)
        setCampaignFrequency(ref2.current.value)

        document.getElementById('boom2').style.backgroundColor = '#20F0BC';
        document.getElementById('boom2').style.borderRadius = '60px';
        document.getElementById('boom1').style.backgroundColor = '';
        document.getElementById('boom1').style.borderRadius = '';
        document.getElementById('boom3').style.backgroundColor = '';
        document.getElementById('boom3').style.borderRadius = '';
    }
    const boom3 = () => {
        ref3.current.checked = true;
        console.log(ref3.current.value)
        setCampaignFrequency(ref3.current.value)

        document.getElementById('boom3').style.backgroundColor = '#20F0BC';
        document.getElementById('boom3').style.borderRadius = '60px';
        document.getElementById('boom2').style.backgroundColor = '';
        document.getElementById('boom2').style.borderRadius = '';
        document.getElementById('boom1').style.backgroundColor = '';
        document.getElementById('boom1').style.borderRadius = '';
    }

    // ______________________________________________________________________________________     
    useEffect(() => {
        console.log(location.state.company);
        setCompany(location.state.company);
        setCompanySize(location.state.companySize);
    }, [])
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
                                <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px", "width": "", "marginLeft": "" }}>How do you currently run influencer campaigns?</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginLeft": "", "marginBottom": "2rem" }}>We’ll streamline your experience accordingly.<br />
                                </p>


                                {/* Fields  */}



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-7'>
                                        <div className='py-4'>



                                            <section style={{ "marginTop": "0rem" }}>
                                                {/* line1 */}
                                                <section className=''>


                                                    {/* row 1 languages  */}
                                                    <button className='smallB' onClick={boom1} id='boom1' style={{ "width": "30rem" }}>
                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>In-House Team <input type="radio" value="In-House Team" name='Frequency' hidden ref={ref1} /></span>
                                                    </button>




                                                    {/* row 2 languages  */}
                                                    <button className='smallB my-4' onClick={boom2} id='boom2' style={{ "width": "30rem" }}>
                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>An External Agency <input type="radio" value="An External Agency" name='Frequency' hidden ref={ref2} /></span>
                                                    </button>



                                                    {/* row 3 languages  */}
                                                    <button className='smallB' onClick={boom3} id='boom3' style={{ "width": "30rem" }}>
                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Both <input type="radio" value="Both" name='Frequency' hidden ref={ref3} /></span>
                                                    </button>




                                                </section>
                                            </section>
                                            {/* button  */}
                                            <button onClick={jump} className='bigB col-md  mt-5' style={{ "marginLeft": "-0.8rem", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />





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

export default BrandsOn3