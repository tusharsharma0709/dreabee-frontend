import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { baseUrl } from '../../../Routez/Routey';
const BrandsOtpFor = () => {
    const [email, setEmail] = useState("");
    const [opt, setOpt] = useState("");
    const [errow,setErrow] =useState(false);


    const loggIn = () => {
        // console.log({ name, email, password, repass, mobile });
        // console.log("name");
        let data = { email, opt };
        if ( email.length == 0 || opt.length == 0 ||  errow.length == 0) {
            setErrow(true)
        } else {
        axios.post(`${baseUrl}api/Brands/`, {

            email: data.email,
            password: data.opt

        }).then((res) => {
            navigate("/1");
            swal("You are successfully Signed Up", "Try Login", "success");
        }).catch((error) => {
            console.log("error", error);
            swal("Oops!", "Something went wrong! Try Again.", "error");
        })

    }
    }

    const navigate = useNavigate();

    const jump = () => {
        navigate("/signUp")
    }
    return (
        <>
            <section className='row'>
                <section className='row'>

                    <section className='battans'>
                        <h5 className='sub'>Login As</h5>
                        <button className='batton col-md p-2' style={{ "fontSize": "" }}>Brands</button>
                        <button className='batton2 col-md ms-5'>Agency</button>
                    </section>



                </section>



                <section className='fieldz'>
                    <h5 className='sub mt-4'>Business Email</h5>
                    <input type="email" value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} placeholder='example@examplemail.com' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />
                    {errow && email.length <= 0 ?
                                <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px","marginTop":"2px" }}>Email can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{"color": "#ea0b0b"}} /></label>
                                : ""
                            }

                    <h5 className='sub mt-3 ps-1'>OTP</h5>
                    <input type='text' value={opt} name='opt' onChange={(e) => { setOpt(e.target.value) }} placeholder='Enter Here' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />
                    {errow && opt.length <= 0 ?
                                <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px","marginTop":"2px" }}>OTP cannot be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{"color": "#ea0b0b"}} /></label>
                                : ""
                            }
                    {/* <span style={{"position":"relative" ,"left":"-8%","color":"aqua","fontWeight":"600"}}>OTP</span> */}

                    <br />
                    <input className="ms-1 " type="checkbox" checked value="" id="" /><label className='rme ps-2'>Remember Me</label>
                    <br />
                    {/* <label className='rme ' style={{"marginLeft":"4.5rem"}}>Didn't recieved OTP , <span style={{"color":"aqua","fontWeight":"600"}}>Send Again .</span></label> */}

                    <button className='bigB col-md mt-4' onClick={loggIn}> <span className='bigBt'>LOG IN</span></button><br />
                    <label className='rme ps-2'>Didn't Registered yet ? <span onClick={jump} style={{ "color": "aqua", "cursor": "pointer" }}>JOIN NOW</span></label>




                </section>
            </section>
        </>
    )
}

export default BrandsOtpFor