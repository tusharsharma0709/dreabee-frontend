import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
const TestApp = () => {

    const [num, setNum] = useState();
    const [opt, setOpt] = useState();

    const handelOnClick = () => {
        // let recap = new firebase.auth.RecaptchaVerifier("reecap")
        // let number = "";
        // firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
        //     let code = prompt("Enter otp");
        //     if (code == null) {
        //         return;
        //     }
        //     e.confirm(code).then((res) => {
        //         console.log(res, "...............")
        //     })
        // }).catch(()=>{
        //     console.log("error")
        // })

    }



    return (
        <>
            <div className='bg dark  align-items-center d-flex flex-column justify-content-center' style={{ "width": "100vw", "height": "100vh" }}>
                {/* <input type='tel' value={num} onChange={(e) => { setNum(e.target.value) }} placeholder='enter phone number' style={{ "width": "10rem" }} /> */}
                <PhoneInput defaultCountry='IN' placeholder="Enter phone number" value={num} onChange={setNum} style={{ "width": "22.5rem", "marginLeft": "-3rem", "paddingLeft": "2rem" }} />
                <br />
                <div id="reecap"  ></div>
                <br />
                {/* <Button variant="secondary">Get OTP</Button> */}
                <button onClick={handelOnClick}>GET OTP</button>
                <br />
                <input type='number' value={opt} onChange={(e) => { setOpt(e.target.value) }} placeholder='enter otp' style={{ "width": "20rem" }} />
                <br />
                <button>go</button>
            </div>
        </>
    )
}

export default TestApp