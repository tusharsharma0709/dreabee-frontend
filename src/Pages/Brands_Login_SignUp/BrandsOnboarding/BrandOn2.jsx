import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Imagez/Common/logo.png'
const BrandsOn2 = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [company, setCompany] = useState("")
    const [companySize, setCompanySize] = useState()



    const jump = () => {
        navigate("/Onboarding3", { state: { company, companySize: companySize } });
    }
    // ______________________________________________________________________________________
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);



    const boom1 = () => {
        ref1.current.checked = true;
        console.log(ref1.current.value)
        setCompanySize(ref1.current.value)

        document.getElementById('boom1').style.backgroundColor = '#20F0BC';
        document.getElementById('boom1').style.borderRadius = '60px';


        document.getElementById('boom2').style.backgroundColor = '';
        document.getElementById('boom2').style.borderRadius = '';
        document.getElementById('boom3').style.backgroundColor = '';
        document.getElementById('boom3').style.borderRadius = '';
        document.getElementById('boom4').style.backgroundColor = '';
        document.getElementById('boom4').style.borderRadius = '';
        document.getElementById('boom5').style.backgroundColor = '';
        document.getElementById('boom5').style.borderRadius = '';

    }
    const boom2 = () => {
        ref2.current.checked = true;
        console.log(ref2.current.value)
        setCompanySize(ref2.current.value)
        document.getElementById('boom2').style.backgroundColor = '#20F0BC';
        document.getElementById('boom2').style.borderRadius = '60px';

        document.getElementById('boom1').style.backgroundColor = '';
        document.getElementById('boom1').style.borderRadius = '';
        document.getElementById('boom3').style.backgroundColor = '';
        document.getElementById('boom3').style.borderRadius = '';
        document.getElementById('boom4').style.backgroundColor = '';
        document.getElementById('boom4').style.borderRadius = '';
        document.getElementById('boom5').style.backgroundColor = '';
        document.getElementById('boom5').style.borderRadius = '';
    }
    const boom3 = () => {
        ref3.current.checked = true;
        console.log(ref3.current.value)
        setCompanySize(ref3.current.value)
        document.getElementById('boom3').style.backgroundColor = '#20F0BC';
        document.getElementById('boom3').style.borderRadius = '60px';

        document.getElementById('boom2').style.backgroundColor = '';
        document.getElementById('boom2').style.borderRadius = '';
        document.getElementById('boom1').style.backgroundColor = '';
        document.getElementById('boom1').style.borderRadius = '';
        document.getElementById('boom4').style.backgroundColor = '';
        document.getElementById('boom4').style.borderRadius = '';
        document.getElementById('boom5').style.backgroundColor = '';
        document.getElementById('boom5').style.borderRadius = '';
    }
    const boom4 = () => {
        ref4.current.checked = true;
        console.log(ref4.current.value)
        setCompanySize(ref4.current.value)
        document.getElementById('boom4').style.backgroundColor = '#20F0BC';
        document.getElementById('boom4').style.borderRadius = '60px';

        document.getElementById('boom2').style.backgroundColor = '';
        document.getElementById('boom2').style.borderRadius = '';
        document.getElementById('boom3').style.backgroundColor = '';
        document.getElementById('boom3').style.borderRadius = '';
        document.getElementById('boom1').style.backgroundColor = '';
        document.getElementById('boom1').style.borderRadius = '';
        document.getElementById('boom5').style.backgroundColor = '';
        document.getElementById('boom5').style.borderRadius = '';
    }
    const boom5 = () => {
        ref5.current.checked = true;
        console.log(ref5.current.value)
        setCompanySize(ref5.current.value)
        document.getElementById('boom5').style.backgroundColor = '#20F0BC';
        document.getElementById('boom5').style.borderRadius = '60px';

        document.getElementById('boom2').style.backgroundColor = '';
        document.getElementById('boom2').style.borderRadius = '';
        document.getElementById('boom3').style.backgroundColor = '';
        document.getElementById('boom3').style.borderRadius = '';
        document.getElementById('boom4').style.backgroundColor = '';
        document.getElementById('boom4').style.borderRadius = '';
        document.getElementById('boom1').style.backgroundColor = '';
        document.getElementById('boom1').style.borderRadius = '';
    }








    // ______________________________________________________________________________________

    useEffect(() => {
        // console.log(location.state);
        setCompany(location.state.Company);
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
                                <h4 style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px", "width": "", "marginLeft": "" }}>What is your company size?</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginLeft": "-3rem", "marginBottom": "2rem" }}>This helps us curate a plan tailor made for your company!<br />
                                </p>


                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-7'>
                                        <div className='py-4'>



                                            {/* 1 */}
                                            <section className='row  d-flex justify-content-evenly' style={{ "marginLeft": "", "marginTop": "1rem" }}>
                                                <button className='smallB' id='boom1' onClick={boom1} style={{ "width": "16rem" }}>
                                                    <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>0-10 Employees &nbsp;           <input value=" 0 - 10" ref={ref1} hidden name='0-10' type="checkbox" /></span>
                                                </button>

                                                {/* button1 */}
                                                <button className='smallB' id='boom2' onClick={boom2} style={{ "width": "16rem" }}>
                                                    <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>10-50 Employees &nbsp;           <input value="10 - 50" ref={ref2} hidden name='10-50' type="checkbox" /></span>
                                                </button>


                                                {/* button2 */}
                                                <button className='smallB' id='boom3' onClick={boom3} style={{ "width": "16rem" }}>
                                                    <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>50-100 Employees &nbsp;           <input value="50 -100" ref={ref3} hidden name='50-100' type="checkbox" /></span>
                                                </button>



                                            </section>

                                            {/* 2 */}
                                            <section className='row d-flex justify-content-evenly' style={{ "marginLeft": "", "marginTop": "2rem" }}>


                                                {/* button1 */}
                                                <button className='smallB' id='boom4' onClick={boom4} style={{ "width": "16rem" }}>
                                                    <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>100-500 Employees &nbsp;           <input value="100-500" ref={ref4} hidden name='100-500' type="checkbox" /></span>
                                                </button>


                                                {/* button2 */}
                                                <button className='smallB' id='boom5' onClick={boom5} style={{ "width": "16rem" }}>
                                                    <span className='' style={{ "fontSize": "14px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>500+ Employees &nbsp;           <input value="500+" ref={ref5} hidden name='500+' type="checkbox" /></span>
                                                </button>




                                            </section>

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

export default BrandsOn2