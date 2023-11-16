import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { baseUrl } from '../../../Routez/Routey';
const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errow, setErrow] = useState(false);

    const glogin = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)

            window.localStorage.setItem("isLoggedIn", true);
            window.localStorage.setItem("Gmail-Auth", tokenResponse.access_token)
            navigate("/Dreabee/Dashboard");

            swal("You are successfully Logged In", "👍", "success");

        }
    })

    const loggIn = () => {
        // console.log({ name, email, password, repass, mobile });
        console.log("name");
        let data = { email, password };
        if (email.length == 0 || password.length == 0 || errow.length == 0) {
            setErrow(true)
        } else {
            axios.post(`${baseUrl}api/Brands/BrandLogin`, {

                email: data.email,
                password: data.password

            }).then((res) => {
                console.log("login response - ", res.data.Id)
                navigate("/Dreabee/Dashboard");
                swal("You are successfully Logged In", "👍", "success");


                window.localStorage.setItem("isLoggedIn", true);
                window.localStorage.setItem("Access-Id", res.data.Id)


            }).catch((error) => {
                console.log("error", error);
                swal("Oops!", "Maybe a wrong email or password! Try Again.", "error");
            })

        }
    }

    const navigate = useNavigate();

    const jump = () => {
        navigate("/signUp")
    }
    const go2 = () => {
        navigate("/LogInAgency");
    }


    // const go3 = () => {.
    //     GoogleAuth();
    // }

    // const GoogleAuth = () => {
    //     axios.get(`https://space-owl.azurewebsites.net/login/google/auth`)
    //         .then((res) => {
    //             console.log(res)
    //         })
    //         .catch((error) =>
    //             console.log("Google auth api- ", error));


    // }










    return (
        <>
            <section className='row bg-ifo'>


                <section className='text-start '>



                    <h5 className='sub'>Login As</h5>
                    <button className='activeButton col-md p-2' style={{ "fontSize": "" }}>Brands</button>
                    <button onClick={go2} className='batton2 col-md ms-5'>Agency</button>
                    <button id='google' onClick={() => { glogin() }} className='batton2 col-md ms-5'>   <img src={require('../../../Imagez/Common/Gologo.png')} width={30} /></button>




                </section>




                <section className='text-start'>
                    <h5 className='sub mt-4'>Business Email</h5>
                    <input type='email' value={email} name='Email' onChange={(e) => { setEmail(e.target.value) }} placeholder='example@examplemail.com' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />
                    {errow && email.length <= 0 ?
                        <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px", "marginTop": "2px" }}>Email can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                        : ""
                    }

                    <h5 className='sub mt-3'>Password</h5>
                    <input type='email' value={password} name='password' onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Here' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />
                    {errow && password.length <= 0 ?
                        <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px", "marginTop": "2px" }}>Password cannot be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                        : ""
                    }
                    {/* <span style={{"position":"relative" ,"left":"-8%","color":"aqua","fontWeight":"600"}}>OTP</span> */}

                    <br />
                    <input className="ms-1 " type="checkbox" value="" id="" /><label className='rme ps-2'>Remember Me</label>
                    <br />
                    {/* <label className='rme ' style={{"marginLeft":"4.5rem"}}>Didn't recieved OTP , <span style={{"color":"aqua","fontWeight":"600"}}>Send Again .</span></label> */}

                    <button className='bigB col-md mt-4' onClick={loggIn}> <span className='bigBt'>LOG IN</span></button><br />
                    <label className='rme ps-2'>Didn't Registered yet ? <span onClick={jump} style={{ "color": "aqua", "cursor": "pointer" }}>JOIN NOW</span></label>




                </section>
            </section>
        </>
    )
}

export default LoginForm