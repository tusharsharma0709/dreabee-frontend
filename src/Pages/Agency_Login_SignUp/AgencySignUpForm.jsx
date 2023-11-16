import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import 'react-phone-input-2/lib/style.css'
import { baseUrl } from '../../Routez/Routey';
const AgencySignUpForm = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState();
    const [password, setPassword] = useState("");
    const [repass, setRePass] = useState("");
    const [errow, setErrow] = useState(false);
    const navigate = useNavigate();


    const saveUser = () => {
        console.log({ name, email, password, repass, mobile });
        let data = { name, email, password, repass, mobile };
        // console.log("length - ",data.name.length());

        if (name.length == 0 || email.length == 0 || password.length == 0 || repass.length == 0 || errow.length == 0 || mobile.length != 10 || mobile.length == 0) {
            setErrow(true)
        } else {
            axios.post(`${baseUrl}api/agency/AgencyRegister`, {
                admin_name: data.name,
                email: data.email,
                password: data.password,
                repassword: data.repass,
                phone: data.mobile
            }).then((res) => {
                navigate("/LogIn");
                swal("You are successfully Signed Up", "Try Login", "success");
            }).catch((error) => {
                console.log("error", error);
                swal("Oops!", "Something went wrong! Try Again.", "error");
            })


        }

    }

    const jump = () => {
        console.log("length - ", name.length);
        navigate("/logIn");
    }

    const go2 = () => {
        navigate("/SignUp");

    }

    const GoName = (event) => {
        const value = event.target.value;
        const Name1 = value.replace(/[^A-Za-z]/g, '');
        setName(Name1);
    };







    return (

        <>
            <section className='row'>


                {/* agency brands buttons */}
                <section className='text-start'>
                    <h5 className='sub'>SignUp As</h5>
                    <button onClick={go2} className='batton2 col-md p-2' style={{ "fontSize": "" }}>Brands</button>
                    <button className='activeButton col-md ms-5' >Agency</button>
                </section>


                {/* form fields  */}
                <section className='mt-1 text-start'>

                    <section>
                        {/* Name  */}
                        <section>
                            <h5 className='sub mt-4'>Name</h5>
                            <input type='text' value={name} name='name' required onChange={GoName} placeholder='Enter Here' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />

                            {errow && name.length <= 0 ?
                                <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px" }}>Name can not be empty.  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                                : ""
                            }
                        </section>

                        {/* BusineEmail  */}
                        <section>
                            <h5 className='sub mt-4'>Business Email</h5>
                            <input type='email' value={email} name='email' required onChange={(e) => { setEmail(e.target.value) }} placeholder='example@examplemail.com' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />
                            {errow && email.length <= 0 ?
                                <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px" }}>Email cannot be empty  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                                : ""
                            }

                        </section>

                        {/* Mobile  */}
                        <section>
                            <h5 className='sub mt-4'>Mobile</h5>
                            <input type='number' value={mobile} name='mobile' pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={(e) => { setMobile(e.target.value) }} maxLength={10} minLength={10} placeholder='Enter Here' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />
                            {errow && mobile.length <= 0 ?
                                <> <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px" }}>Phone number cannot be empty  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label> <br /></>
                                : ""
                            }
                            {errow && mobile.length != 10 ?
                                <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px" }}>Phone number have to be 10 digits  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                                : ""
                            }


                        </section>

                        {/* Password  */}
                        <section>
                            <h5 className='sub mt-4'>Password</h5>
                            <input type='password' value={password} name='password' required onChange={(e) => { setPassword(e.target.value) }} placeholder='Enter Here' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} />
                            {errow && password.length <= 0 ?
                                <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px" }}>Password cannot be empty  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                                : ""
                            }

                        </section>

                        {/*confirm Password  */}
                        <section>
                            <h5 className='sub mt-4'>Confirm Password</h5>
                            <input type='text' value={repass} name='repassword' required onChange={(e) => { setRePass(e.target.value) }} placeholder='Enter Here' className='fifi' style={{ "paddingLeft": "12px", "color": "white" }} /><span style={{ "position": "relative", "left": "-6%" }}> <i className="fa-solid fa-eye text-light"></i></span> <br />
                            {errow && repass.length <= 0 ?
                                <label style={{ "color": "red", "fontSize": "16px", "fontWeight": "600", "marginLeft": "5px" }}>Password cannot be empty  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "#ea0b0b" }} /></label>
                                : ""
                            }
                            <br />
                            <input className="ms-1 " type="checkbox" value="" id="" style={{ "backgroundColor": "transparent", "color": "transparent" }} />  <label className='rme'> Remember Me </label>
                            {/* { errow && name.length<=0 ?
                            <label style={{"color":"red","fontSize":"16px","fontWeight":"600","marginLeft":"5px"}}>name cannot be empty  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{"color": "#ea0b0b"}} /></label>
                            :""
                            } */}

                        </section>


                        <button onClick={saveUser} className='bigB col-md mt-4'> <span className='bigBt'>SIGN UP</span></button><br />
                        <label className='rme ps-2'>Already have an account ? <span onClick={jump} style={{ "color": "aqua", "fontWeight": "600", "cursor": 'pointer' }}>LOG IN NOW</span> </label>

                    </section>



                </section>

            </section>
        </>)
}

export default AgencySignUpForm