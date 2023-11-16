import React, { useEffect, useState } from 'react'
import { Auth, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier } from "firebase/auth";
import { auth } from './firebase';
import PhoneInput from 'react-phone-input-2';
import PhoneInputWithCountrySelect from 'react-phone-number-input';
import { Route } from 'react-router-dom';
const Ape = () => {

    const [country, setCountry] = useState('in');
    const [num, setNum] = useState("");
    const [opt, setOpt] = useState();
    const [user, setUser] = useState();
    console.log(auth.currentUser)

    const sign = "+";
    const fnum = sign + num;
    // const rnum = parseInt(fnum, 10);

    const sendOtp = async () => {
        console.log(typeof (fnum))
        console.log(fnum)
        // console.log(rnum)
        // console.log(typeof (rnum))
        try {
            let recaptchaVerifier = await new RecaptchaVerifier("recaptcha", {}, auth)
            let confirmation = await signInWithPhoneNumber(auth,"+91" + num, recaptchaVerifier);
            console.log(confirmation)
            setUser(confirmation)
        } catch (err) {
            console.log(err)
        }

    }


    const verifyOtp = async () => {
        await user.confirm(opt)
    }



    useEffect(() => {
        console.log(fnum,)
    }, [fnum]);


    // const logOut=()=>{

    // }

    return (
        <div className='bg dark  align-items-center d-flex flex-column justify-content-center' style={{ "width": "100vw", "height": "100vh" }}>
            {/* <input type='tel' value={num} onChange={(e) => { setNum(e.target.value) }} placeholder='enter phone number' style={{ "width": "10rem" }} /> */}
            {/* <PhoneInputWithCountrySelect defaultCountry='IN' placeholder="Enter phone number" onChange={(e) => { setNum(e.target.value) }} style={{ "width": "22.5rem", "marginLeft": "-3rem", "paddingLeft": "2rem" }} /> */}
            {/* <input type='tel' maxLength={12} placeholder="Enter phone number" value={num} onChange={setNum} style={{ "width": "22.5rem", "marginLeft": "-3rem", "paddingLeft": "2rem" }} /> */}
            <br />

            <PhoneInput
                country={country}
                placeholder='enter phone number'
                onChange={(value) => { setNum(value) }}
                countryCodeEditable={false}
                inputClass='inputs'
            />

            <br />

            {/* <div id="reecap"  ></div> */}
            <br />
            {/* <Button variant="secondary">Get OTP</Button> */}
            <button onClick={sendOtp}>GET OTP</button>
            <br />
            <div id='recaptcha'></div>
            <br />
            <input type='number' value={opt} onChange={(e) => { setOpt(e.target.value) }} placeholder='enter otp' style={{ "width": "20rem" }} />
            <br />
            <button onClick={verifyOtp}>VERIFY  OTP</button>
            <br />
            <button>go</button>
        </div>
    )
}

export default Ape