import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const InfluReg5 = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const [Influencer_Firstname, setInfluencer_Firstnamee] = useState("");
    const [Influencer_Lastname, setInfluencer_Lastnamee] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState();
    const [postal, setPostal] = useState()

    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [showMess, setShowMess] = useState(false);




    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [whatsapp, setWhatsapp] = useState();
    const [Instagram_detail, setInstagram_Detail] = useState();


    useEffect(() => {
        console.log(location);
        setEmail(location.state.email)
        setPhone(location.state.phone)
        setWhatsapp(location.state.whatsapp)
        setInstagram_Detail(location.state.Instagram_detail)
        // console.log(location.state.Instagram_Detail)
        localStorage.removeItem('Validated_PhNo')
    }, [])



    const onChangeP = (postel) => {
        // console.log(postal);
        axios.get(`https://api.postalpincode.in/pincode/${postel}`)
            .then((res) => {
                console.log("here now Country :", res.data[0].PostOffice[0].Country)
                console.log("here now state :", res.data[0].PostOffice[0].State)
                console.log("here now District :", res.data[0].PostOffice[0].District)
                setCity(res.data[0].PostOffice[0].District);
                setCountry(res.data[0].PostOffice[0].Country);
                setState(res.data[0].PostOffice[0].State);
            }).catch((error) =>
                console.log("the postal code get data error - ", error));
    }





    const jump = () => {
        if (Influencer_Firstname.length == 0) {
            setShow1(true);
        } else if (Influencer_Lastname.length == 0) { setShow2(true); }
        else if (postal.length == 0) { setShow5(true); }
        else if (age.length == 0) { setShow4(true); }
        else if (gender.length == 0) { setShow3(true); }
        else {

            navigate("/Languages", { state: { Influencer_Firstname: Influencer_Firstname, Influencer_Lastname: Influencer_Lastname, city: city, age: age, gender: gender, email, phone, whatsapp, Instagram_detail } });
        }
    }


    const ref = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const clik = () => {
        // setGender(gender)
        ref.current.checked = true;
        console.log(ref.current.value)
        setGender(ref.current.value)
        document.getElementById('clik').style.backgroundColor = '#20F0BC';
        document.getElementById('clik').style.borderRadius = '60px';
        document.getElementById('clik2').style.borderRadius = '';
        document.getElementById('clik3').style.borderRadius = '';

        document.getElementById('clik2').style.backgroundColor = '';
        document.getElementById('clik3').style.backgroundColor = '';
    }


    const clik2 = () => {
        // setGender(gender)
        ref2.current.checked = true;
        console.log(ref2.current.value)
        setGender(ref2.current.value)
        document.getElementById('clik2').style.backgroundColor = '#20F0BC';
        document.getElementById('clik2').style.borderRadius = '60px';
        document.getElementById('clik').style.borderRadius = '';
        document.getElementById('clik3').style.borderRadius = '';
        document.getElementById('clik').style.backgroundColor = '';
        document.getElementById('clik3').style.backgroundColor = '';
    }


    const clik3 = () => {
        // setGender(gender)
        ref3.current.checked = true;
        console.log(ref3.current.value)
        setGender(ref3.current.value)

        document.getElementById('clik').style.backgroundColor = '';
        document.getElementById('clik2').style.backgroundColor = '';
        document.getElementById('clik3').style.backgroundColor = '#20F0BC';

        document.getElementById('clik3').style.borderRadius = '60px';
        document.getElementById('clik2').style.borderRadius = '';
        document.getElementById('clik').style.borderRadius = '';

    }

    const FirstName = (event) => {
        const value = event.target.value;
        const Name1 = value.replace(/[^A-Za-z]/g, '');
        setInfluencer_Firstnamee(Name1);
    };
    const LasttName = (event) => {
        const value = event.target.value;
        const Name2 = value.replace(/[^A-Za-z]/g, '');
        setInfluencer_Lastnamee(Name2);
    };
    const CityName = (event) => {
        const value = event.target.value;
        const Name3 = value.replace(/[^A-Za-z]/g, '');
        setCity(Name3);
    };


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
                                    <section className='col-lg-4'>
                                        <div className='py-4' style={{ border: "" }}>









                                            {/* Fields  */}
                                            <section className='my-4'>
                                                {/* line1 */}
                                                <section className=''>
                                                    {/* name  */}
                                                    <section className='mb-4 '>
                                                        <section className=' text-start ps-5 text-light ' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>First Name*</span></section>
                                                        <input type='text' value={Influencer_Firstname} name='Influencer_Firstname' onChange={FirstName}
                                                            placeholder='Enter your Full Name' className='bg-dark  ps-3' style={{ "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                        {
                                                            show1 && Influencer_Firstname.length == 0 ?
                                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "0rem", "left": "-6rem" }}>First-name cannot be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                                : null
                                                        }

                                                    </section>




                                                    {/* Last nam3  */}
                                                    <section className=' mb-4'>
                                                        <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>Last Name*</span></section>
                                                        <input type='text' value={Influencer_Lastname} name='Influencer_Lastname'
                                                            // onChange={(e) => { setInfluencer_Lastnamee(e.target.value) }} 
                                                            onChange={LasttName}
                                                            placeholder='Enter your Last Name' className='bg-dark ps-3' style={{ "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                        {
                                                            show2 && Influencer_Lastname.length == 0 ?
                                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "", "top": "", "left": "-6rem" }}>Last-name cannot be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                                : null}

                                                    </section>


                                                    {/* gender */}
                                                    <section>
                                                        <section className=' text-start ps-5 text-light' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>Gender*</span></section>

                                                        <section className='row d-flex justify-content-evenly bg mb-4' >

                                                            <section className='col-md-2'>
                                                                <button className='smallB ' onClick={clik} id='clik'>
                                                                    <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}><input type="radio" ref={ref} value="Male" hidden name='gender' onClick={(e) => { setGender("Male") }} />&nbsp;Male</span>
                                                                </button>

                                                            </section>
                                                            <section className='col-md-2 ms-5 me-5'>
                                                                <button className='smallB' onClick={clik2} id='clik2'>
                                                                    <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}> <input type="radio" ref={ref2} value="female" hidden name='gender' onClick={(e) => { setGender("female") }} /> &nbsp;Female</span>
                                                                </button>

                                                            </section>
                                                            <section className='col-md-2  '>
                                                                <button className='smallB ' onClick={clik3} id='clik3'>
                                                                    <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}> <input type="radio" ref={ref3} value="other" hidden name='gender' onClick={(e) => { setGender("Other") }} /> &nbsp;Others</span>
                                                                </button>

                                                            </section>


                                                            {
                                                                show3 && gender.length == 0 ?
                                                                    <label className='my-1' style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "", "top": "-1.2rem", "left": "-10.4rem" }}>Age cannot be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                                    : null}

                                                        </section>
                                                    </section>






                                                    {/* age  */}
                                                    <section className='mb-4 '>
                                                        <section className=' text-start ps-5 text-light' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>Age*</span></section>
                                                        <input type='number' maxLength="2" value={age} name='age' onChange={(e) => { setAge(e.target.value) }} placeholder='Enter your Age' className='bg-dark  ps-3'
                                                            style={{ "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                        {
                                                            show4 && age.length == 0 ?
                                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Age cannot be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                                : null}
                                                    </section>

                                                    {/* Postal  */}
                                                    <section className='  mb-4'>
                                                        <section className=' text-start ps-5 text-light' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>Postal Code </span></section>
                                                        <input type='text' value={postal} name='postal'
                                                            // onChange={(e) => { setCity(e.target.value) }} 
                                                            onChange={(event) => { setPostal(event.target.value); onChangeP(event.target.value);  }}
                                                            placeholder='Enter your City Name' className='bg-dark  ps-3' style={{ "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                        {
                                                            show5 && postal.length == 0 ?
                                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "", "top": "-1.4rem", "left": "-7.2rem" }}>Postal code cannot be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                                : null}
                                                        {/* {
                                                            showMess ?
                                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "", "top": "-1.4rem", "left": "-5rem" }}>Give a space after your postal code. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                                : null} */}

                                                    </section>

                                                    {/* City  */}
                                                    <section className=' mb-4 '>
                                                        <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>City</span></section>
                                                        <input type='text' value={city} name='city' disabled
                                                            placeholder='Enter the Postal code to find your City.' className='bg-dark ps-3' style={{ "cursor": "not-allowed", "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>


                                                    </section>

                                                    {/* state  */}
                                                    <section className='mb-4  '>
                                                        <section className=' text-start ps-5 text-light' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>State</span></section>
                                                        <input type='text' value={state} name='state' disabled
                                                            placeholder='Enter the Postal code to find your State.' className='bg-dark  ps-3' style={{ "cursor": "not-allowed", "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>


                                                    </section>




                                                    {/* Country  */}
                                                    <section className=' mb-4 '>
                                                        <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>Country</span></section>
                                                        <input type='text' value={country} name='country' disabled
                                                            placeholder='Enter the Postal code to find your Country.' className='bg-dark ps-3' style={{ "cursor": "not-allowed", "height": "59px", "width": "424px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                    </section>






                                                </section>


                                                {/* line2 */}
                                                {/* button  */}
                                                <button onClick={jump} className='bigB col-md  mt-3' style={{ "marginLeft": "-0.8rem", "marginTop": "" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />

                                            </section>












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

export default InfluReg5