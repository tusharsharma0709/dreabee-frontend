import React, { useEffect, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
const InfluReg4 = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const [Instagram_detail, setInstagram_Detail] = useState();
    const [phone, setPhone] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [email, setEmail] = useState("");
    // ____________________

    const [phshow, setPhShow] = useState(false);
    const [show, setShow] = useState(false);
    const [washow, setWaShow] = useState(false);
    const [esshow, setEsShow] = useState(false);
    const [maile, setMaile] = useState(false);
    const [validNo, setValidNo] = useState(false)
    const [valdyNo, setValdyNo] = useState('')
    // ____________________


    useEffect(() => {
        // console.log(location.state);
        setInstagram_Detail(location.state);
        setValdyNo(localStorage.getItem('Validated_PhNo'));
        console.log("yeah: ", valdyNo);

    }, [])

    // || email.length == 0

    const [isValid, setIsValid] = useState(false);
    const validateEmail = () => {
        // const regex =  /\b\w+@\w+\.\w{2,4}\b/;
        const regex = /\b\w+@\w+\.com\b/;
        const isMatch = regex.test(email);
        setIsValid(isMatch);
    };

    const [numm1, setNumm1] = useState();
    const numm1Show = (e) => {
        const value = e.target.value;
        setPhone(value)
        if (value.length === 10) {
            setPhShow(true);
        }

    }

    const jump = () => {

        validateEmail();

        if (phone.length != 10 && whatsapp.length != 10) {
            setWaShow(true);
            setPhShow(true);
            console.log("the ressuullltt of jump  check 1 ",)
        } else {
            if (email.length == 0) {
                setMaile(true);
                console.log("the ressuullltt of jump  check 2 ",)
            } else {
                if (valdyNo != phone) {
                    setValidNo(true);
                    console.log("the ressuullltt of jump  check 3 ",)
                } else {
                    if (isValid) {
                        navigate("/Personal_Details", { state: { Instagram_detail, phone: phone, email: email, whatsapp: whatsapp } });
                    }
                    if (!isValid) {
                        setEsShow(true)
                        console.log("the ressuullltt of jump  check 4 ",)
                    }
                }
            }
        }

    }



    // navigate("/e", { state: { Instagram_detail, phone: "+91" + phone, email: email, whatsapp: "+91" + whatsapp } });

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
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Enter your Contact Details</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>This will help us to give you more relevant campaigns! <br />
                                </p>



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-4'>
                                        <div className='py-4' style={{ border: "" }}>















                                            {/* INPUT FIELDS  */}
                                            <section className='my-'>
                                                {/* line1 */}
                                                <section className='mb-4'>

                                                    <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600", }}><span style={{ "color": "#FFFFF" }}>Mobile Number*</span>

                                                        <span className=' bg  text-light  ' style={{ "position": 'relative', "left": "-7.2rem", "top": "2.58rem", "width": "70px" }}>IN (+91) </span>

                                                    </section>
                                                    <input type='number' minLength={10} value={phone} maxLength="10" name='phone'
                                                        onChange={(e) => { setPhone(e.target.value) }}
                                                        placeholder='Enter your Mobile Number' className='bg-dark  ' style={{ "height": "59px", "width": "424px", "marginLeft": "-1rem", "paddingLeft": "5rem", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }} />



                                                    {phshow && phone.length !== 10 ?
                                                        <section style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Mobile Number have to be 10 numbers. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></section>
                                                        : null
                                                    }
                                                    {validNo ?
                                                        <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Mobile Number should match the validated phone number. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                        : null
                                                    }

                                                </section>




                                                {/* line2 */}
                                                <section>
                                                    <section className='mb-4'>
                                                        <section className='text-start ps-5 text-light ' style={{ "fontWeight": "600", }}><span style={{ "color": "#FFFFF" }}>Whatsapp Number*</span>
                                                        <span className=' bg  text-light  ' style={{ "position": 'relative', "left": "-8.5rem", "top": "2.6rem", "width": "70px" }}>IN (+91) </span>

                                                        </section>

                                                        <input type='number' maxLength={10} value={whatsapp} name='whatsapp' onChange={(e) => { setWhatsapp(e.target.value) }}
                                                            // value={wphone} name='wphone' onChange={(e) => { setWphone(e.target.value) }}
                                                            placeholder='Enter your Mobile Number' className='bg-dark  '
                                                            style={{ "height": "59px", "width": "424px", "marginLeft": "-1rem", "paddingLeft": "5rem", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }} />

                                                        {washow && whatsapp.length !== 10 ?
                                                            <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Mobile Number have to be 10 numbers. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                            :
                                                            <section className='  text-start ps-5 text-light ' style={{ "color": "whitesmoke", "fontWeight": "700", "width": "30rem" }}><span >
                                                                <input type='checkbox'  /> Same as phone number</span></section>
                                                        }

                                                    </section>


                                                </section>



                                                {/* line3 */}
                                                <section className="mb-4">
                                                    {/* <section className='bg-dark d-flex justify-content-start  ' style={{ "marginTop": "2.5rem", "height": "59px", "width": "424px", "marginLeft": "5.8rem", "borderRadius": "10px" }}> */}
                                                    <section className=' text-start ps-5 text-light ' style={{ "fontWeight": "600", "width": "30rem" }}><span style={{ "color": "#FFFFF" }}>Email*</span></section>
                                                    <input type='text' value={email} name='email' onChange={(e) => { setEmail(e.target.value); }}
                                                        // value={email} name='email' onChange={(e) => { setEmail(e.target.value) }} 
                                                        placeholder='Enter your Email' className='bg-dark' style={{ "height": "59px", "width": "424px", "marginLeft": "-1rem", "paddingLeft": "1rem", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>

                                                    {
                                                        maile && email.length == 0 ?
                                                            <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Email can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                            : null
                                                    }
                                                    {
                                                        esshow && email.length !== 0 ?
                                                            <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600" }}>Email Format is wrong . If email is right click continue again.  &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "red" }} /></label>
                                                            : null
                                                    }

                                                    {/* <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "-2.4rem", "left": "-6.5rem" }}>Email can not be empty. &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "white" }} /></label> */}

                                                </section>

                                                {/* button  */}
                                                {/* <section className=' mb-3 ' style={{ "fontWeight": "600", "marginTop": "1.5rem", "marginLeft": "-1rem" }}><span style={{ "color": "aqua" }}>I don't have Instagram</span></section> */}
                                                <section>
                                                    <button onClick={jump} className='bigB col-md  ' style={{ "marginLeft": "-0.8rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                                </section>







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

export default InfluReg4