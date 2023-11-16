import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
const InflueReg7 = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [ContentCategories, setContentCategories] = useState([]);
    // _________________________________________________________________________
    const [Influencer_Firstname, setInfluencer_Firstname] = useState();
    const [Influencer_Lastname, setInfluencer_Lastname] = useState();
    const [city, setCity] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [Instagram_detail, setInstagram_Detail] = useState();
    const [language, setLanguage] = useState();
    const [show, setShow] = useState();
    // _________________________________________________________________________________


    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);


    const Cat1 = () => {
        console.log(ref1.current.value)
        ContentCategories.push(ref1.current.value)
        document.getElementById('catt1').style.backgroundColor = '#20F0BC';
        document.getElementById('catt1').style.borderRadius = '60px';
    }
    const Cat2 = () => {
        ContentCategories.push(ref2.current.value)
        document.getElementById('catt2').style.backgroundColor = '#20F0BC';
        document.getElementById('catt2').style.borderRadius = '60px';
    }
    const Cat3 = () => {
        ContentCategories.push(ref3.current.value)
        document.getElementById('catt3').style.backgroundColor = '#20F0BC';
        document.getElementById('catt3').style.borderRadius = '60px';
    }
    const Cat4 = () => {
        console.log(ref1.current.value)
        ContentCategories.push(ref4.current.value)
        document.getElementById('catt4').style.backgroundColor = '#20F0BC';
        document.getElementById('catt4').style.borderRadius = '60px';
    }
    const Cat5 = () => {
        ContentCategories.push(ref5.current.value)
        document.getElementById('catt5').style.backgroundColor = '#20F0BC';
        document.getElementById('catt5').style.borderRadius = '60px';
    }
    const Cat6 = () => {
        ContentCategories.push(ref6.current.value)
        document.getElementById('catt6').style.backgroundColor = '#20F0BC';
        document.getElementById('catt6').style.borderRadius = '60px';
    }









    const jump = () => {
        console.log("longer", ContentCategories)
        if (ContentCategories == 0) {
            setShow(true)
        } else {
            navigate("/Family_Info", { state: { email, Influencer_Firstname, Influencer_Lastname, city, age, gender, phone, whatsapp, Instagram_detail, language, ContentCategories: ContentCategories } });
        }
    }
    // _________________________________________________________________________________

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
        setLanguage(location.state.language)
    })





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
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Enter your Personal Details</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>This will help us to give you more relevant campaigns!! <br />
                                </p>



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-5 bg-inf'>
                                        <div className='py-4' style={{ border: "" }}>



                                            {/* Fields  */}
                                            <section className='my-4'>
                                                {/* line1 */}
                                                <section className=''>

                                                    {/* row 1 languages  */}
                                                    <section className='row d-flex justify-content-evenly ' style={{ "marginLeft": "", "marginTop": "1rem" }}>

                                                        <section className='col-md-2  '>
                                                            <button className='smallB' id='catt1' onClick={Cat1} style={{ "width": "15rem" }}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Arts & Entertainment &nbsp;           <input value="Arts &Entertainment" hidden ref={ref1} name='ContentCategories' onChange={(e) => { ContentCategories.push("Arts & Entertainment") }} type="checkbox" /> &nbsp;</span>
                                                            </button>

                                                        </section>
                                                        {/* button1 */}
                                                        <section className='col-md-2 ' style={{ "marginLeft": "7rem" }} >
                                                            <button className='smallB' id='catt2' onClick={Cat2}>
                                                                <span className='pt-5 mt-5' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF", "position": "relative", "top": "0rem" }}>Automobile    <input hidden ref={ref2} value="Automobile" name='ContentCategories' onChange={(e) => { ContentCategories.push("Automobile") }} type="checkbox" /> </span>
                                                            </button>

                                                        </section>
                                                        {/* button2 */}
                                                        <section className='col-md-2 ' >
                                                            <button className='smallB' id='catt3' onClick={Cat3}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Tech  &nbsp;           <input value="Tech" name='ContentCategories' hidden ref={ref3} onChange={(e) => { ContentCategories.push("Tech") }} type="checkbox" /> &nbsp;</span>
                                                            </button>

                                                        </section>



                                                    </section>


                                                    {/* row 2 languages  */}
                                                    <section className='row d-flex justify-content-evenly' style={{ "marginLeft": "", "marginTop": "1rem" }}>

                                                        <section className='col-md-2  '>
                                                            <button className='smallB' id='catt4' onClick={Cat4} style={{ "width": "15rem" }}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Family & Parenting &nbsp;   <input value="Family & Parenting" hidden ref={ref4} name='ContentCategories' onChange={(e) => { ContentCategories.push("Family & Parenting") }} type="checkbox" /> &nbsp;</span>
                                                            </button>

                                                        </section>
                                                        {/* button1 */}
                                                        <section className='col-md-2  ' style={{ "marginLeft": "7rem" }}  >
                                                            <button className='smallB' id='catt5' onClick={Cat5}>
                                                                <span className='pt-5' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF", "marginTop": "2rem" }}>Fasion&nbsp;<input value="Fasion" hidden ref={ref5} name='ContentCategories' onChange={(e) => { ContentCategories.push("Fasion") }} type="checkbox" /> </span>
                                                            </button>

                                                        </section>
                                                        {/* button2 */}
                                                        <section className='col-md-2 ' >
                                                            <button className='smallB' id='catt6' onClick={Cat6}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Fitness&nbsp;  <input value="Fitness" name='ContentCategories' hidden ref={ref6} onChange={(e) => { ContentCategories.push("Fitness") }} type="checkbox" /> &nbsp;</span>
                                                            </button>

                                                        </section>
                                                        {/* button3 */}


                                                    </section>




                                                </section>
                                            </section>

                                            {/* button  */}
                                            <button onClick={jump} className='bigB col-md  mt-5' style={{ "marginLeft": "-0.8rem", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                            {show && ContentCategories.length == 0 ?
                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "-6rem", "left": "-0rem" }}>Choose atleast one Category  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "white" }} /></label>
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

export default InflueReg7