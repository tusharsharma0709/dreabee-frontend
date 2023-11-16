import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
const InfluReg6 = () => {
    const navigate = useNavigate();
    const location = useLocation()


    const [Influencer_Firstname, setInfluencer_Firstname] = useState();
    const [Influencer_Lastname, setInfluencer_Lastname] = useState();
    const [city, setCity] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [Instagram_detail, setInstagram_Detail] = useState();

    // _________________________________________________________________________
    const [language, setLanguage] = useState([]);
    const [show, setShow] = useState(false);
    // _________________________________________________________________________

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);


    const lang1 = () => {
        console.log(ref1.current.value)
        language.push(ref1.current.value)
        document.getElementById('lang1').style.backgroundColor = '#20F0BC';
        document.getElementById('lang1').style.borderRadius = '60px';
    }
    const lang2 = () => {
        language.push(ref2.current.value)
        document.getElementById('lang2').style.backgroundColor = '#20F0BC';
        document.getElementById('lang2').style.borderRadius = '60px';
    }
    const lang3 = () => {
        language.push(ref3.current.value)
        document.getElementById('lang3').style.backgroundColor = '#20F0BC';
        document.getElementById('lang3').style.borderRadius = '60px';
    }
    const lang4 = () => {
        language.push(ref4.current.value)
        document.getElementById('lang4').style.backgroundColor = '#20F0BC';
        document.getElementById('lang4').style.borderRadius = '60px';
    }
    const lang5 = () => {
        language.push(ref5.current.value)
        document.getElementById('lang5').style.backgroundColor = '#20F0BC';
        document.getElementById('lang5').style.borderRadius = '60px';
    }
    const lang6 = () => {
        language.push(ref6.current.value)
        document.getElementById('lang6').style.backgroundColor = '#20F0BC';
        document.getElementById('lang6').style.borderRadius = '60px';
    }
    const lang7 = () => {
        language.push(ref7.current.value)
        document.getElementById('lang7').style.backgroundColor = '#20F0BC';
        document.getElementById('lang7').style.borderRadius = '60px';
    }
    const lang8 = () => {
        language.push(ref8.current.value)
        document.getElementById('lang8').style.backgroundColor = '#20F0BC';
        document.getElementById('lang8').style.borderRadius = '60px';
    }


    const jump = () => {
        console.log("lonf one  -", language.length)

        if (language.length == 0) {
            setShow(true)
        } else {
            navigate("/Content_Categoris", { state: { email, Influencer_Firstname, Influencer_Lastname, city, age, gender, phone, whatsapp, Instagram_detail, language: language } });
        }


    }
    // _________________________________________________________________________





    useEffect(() => {
        console.log(location);
        setEmail(location.state.email)
        setPhone(location.state.phone)
        setWhatsapp(location.state.whatsapp)
        setInstagram_Detail(location.state.Instagram_detail)
        setInfluencer_Firstname(location.state.Influencer_Firstname)
        setInfluencer_Lastname(location.state.Influencer_Lastname)
        setCity(location.state.city)
        setAge(location.state.age)
        setGender(location.state.gender)
    }
    )




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
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Select Languages</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>Select upto 3 languages that you enjoy creating content for ! <br />
                                </p>



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-6 bg-inf'>
                                        <div className='py-4' style={{ border: "" }}>









                     

                                                    {/* Fields  */}
                                                    <section className='my-4'>
                                                        {/* line1 */}
                                                        <section className=''>







                                                            {/* row 1 languages  */}
                                                            <section className='row d-flex justify-content-evenly' style={{ "marginLeft": "", "marginTop": "1rem" }}>

                                                                <section className='col-md-2  '>
                                                                    <button className='smallB' id='lang1' onClick={lang1}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Hindi &nbsp;           <input value="hindi" ref={ref1} hidden name='language' onChange={(e) => { language.push('hindi') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button1 */}
                                                                <section className='col-md-2  ' >
                                                                    <button className='smallB' id='lang2' onClick={lang2}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>English&nbsp;           <input value="english" ref={ref2} hidden name='language' onChange={(e) => { language.push('English') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button2 */}
                                                                <section className='col-md-2  ' >
                                                                    <button className='smallB' id='lang3' onClick={lang3}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Sanskrit&nbsp;           <input value="sanskrit" ref={ref3} hidden name='language' onChange={(e) => { language.push('Sanskrit') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button3 */}
                                                                <section className='col-md-2  '>
                                                                    <button className='smallB' id='lang4' onClick={lang4}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Bengali&nbsp;           <input value="bengali" ref={ref4} hidden name='language' onChange={(e) => { language.push('Bengali') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button4 */}


                                                            </section>


                                                            {/* row 2 languages  */}
                                                            <section className='row d-flex justify-content-evenly' style={{ "marginLeft": "", "marginTop": "1rem" }}>

                                                                <section className='col-md-2  '>
                                                                    <button className='smallB' id='lang5' onClick={lang5}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>kanada&nbsp;           <input value="kanada" ref={ref5} hidden name='language' onChange={(e) => { language.push('Kanada') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button1 */}
                                                                <section className='col-md-2  ' >
                                                                    <button className='smallB' id='lang6' onClick={lang6}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Tamil&nbsp;           <input value="tamil" ref={ref6} hidden name='language' onChange={(e) => { language.push('Tamil') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button2 */}
                                                                <section className='col-md-2  ' >
                                                                    <button className='smallB' id='lang7' onClick={lang7}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Telugu&nbsp;           <input value="telugu" ref={ref7} hidden name='language' onChange={(e) => { language.push('Telugu') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button3 */}
                                                                <section className='col-md-2  '>
                                                                    <button className='smallB' id='lang8' onClick={lang8}>
                                                                        <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Malayalam&nbsp;           <input value="malayalam" ref={ref8} hidden name='language' onChange={(e) => { language.push('Malayalam') }} type="checkbox" /> &nbsp; </span>
                                                                    </button>

                                                                </section>
                                                                {/* button4 */}


                                                            </section>




                                                        </section>
                                                    </section>

                                                    {/* button  */}
                                                    <button onClick={jump} className='bigB col-md  mt-5' style={{ "marginLeft": "-0.8rem", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                                    {show && language.length == 0 ?
                                                        <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "-6rem", "left": "-0rem" }}>Choose atleast one language  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "white" }} /></label>
                                                        : null}




                             










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

export default InfluReg6