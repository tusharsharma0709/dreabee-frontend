import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useLocation, useNavigate } from 'react-router-dom'
const InfluReg9 = () => {

    const navigate = useNavigate();



    const location = useLocation();
    const [ContentCategories, setContentCategories] = useState([]);
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
    // ____________________________________________________________________

    const [marry, setMarry] = useState("");
    const [haveKids, setHaveKids] = useState("No")
    const [kage, setKage] = useState("")

    const [onKids, setOnKids] = useState(false)
    const [noOfKids, setNoOfKids] = useState(false)
    const [kidsGender, setKidsGender] = useState("")

    // ____________________________________________________________________
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);



    // ____________________________________________________________________
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
        setContentCategories(location.state.ContentCategories)
    })

    // ____________________________________________________________________
    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const kik1 = () => {

        setMarry("yes")
        setOnKids(true)
        console.log(onKids);

        ref1.current.checked = true;
        console.log(ref1.current.value)
        setMarry(ref1.current.value)
        // setOnKids(false) 
        // setNoOfKids(false) 
        document.getElementById('yeo1').style.backgroundColor = '#20F0BC';
        document.getElementById('yeo1').style.borderRadius = '60px';
        document.getElementById('yeo2').style.backgroundColor = '';
        document.getElementById('yeo2').style.borderRadius = '';

    }
    const kik2 = () => {
        setOnKids(false); setNoOfKids(false)
        ref2.current.checked = true;
        console.log(ref2.current.value)
        setMarry(ref2.current.value)
        document.getElementById('yeo2').style.backgroundColor = '#20F0BC';
        document.getElementById('yeo2').style.borderRadius = '60px';
        document.getElementById('yeo1').style.backgroundColor = '';
        document.getElementById('yeo1').style.borderRadius = '';
    }


    // _____________________________________ROW 2- DO U HAVE KIDS________________________________________________________

    const ref21 = useRef(null);
    const ref22 = useRef(null);
    const ref23 = useRef(null);

    const kik21 = () => {
        ref21.current.checked = true;
        console.log(ref21.current.value)
        setHaveKids(ref21.current.value)
        setNoOfKids(true)

        document.getElementById('kik21').style.backgroundColor = '#20F0BC';
        document.getElementById('kik21').style.borderRadius = '60px';

        document.getElementById('kik22').style.backgroundColor = '';
        document.getElementById('kik22').style.borderRadius = '';
        document.getElementById('kik23').style.backgroundColor = '';
        document.getElementById('kik23').style.borderRadius = '';

    }
    const kik22 = () => {
        ref22.current.checked = true;
        console.log(ref22.current.value)
        setHaveKids(ref22.current.value)
        setNoOfKids(false)

        document.getElementById('kik22').style.backgroundColor = '#20F0BC';
        document.getElementById('kik22').style.borderRadius = '60px';

        document.getElementById('kik21').style.backgroundColor = '';
        document.getElementById('kik21').style.borderRadius = '';
        document.getElementById('kik23').style.backgroundColor = '';
        document.getElementById('kik23').style.borderRadius = '';
    }
    const kik23 = () => {
        ref23.current.checked = true;
        console.log(ref23.current.value)
        setHaveKids(ref23.current.value)
        setNoOfKids(false)

        document.getElementById('kik23').style.backgroundColor = '#20F0BC';
        document.getElementById('kik23').style.borderRadius = '60px';

        document.getElementById('kik22').style.backgroundColor = '';
        document.getElementById('kik22').style.borderRadius = '';
        document.getElementById('kik21').style.backgroundColor = '';
        document.getElementById('kik21').style.borderRadius = '';
    }


    // _____________________________________ROW 3- CHILD NO 1________________________________________________________


    const ref31 = useRef(null);
    const ref32 = useRef(null);


    const kik31 = () => {
        ref31.current.checked = true;
        console.log(ref31.current.value)
        setKidsGender(ref31.current.value)


        document.getElementById('kik31').style.backgroundColor = '#20F0BC';
        document.getElementById('kik31').style.borderRadius = '60px';
        document.getElementById('kik32').style.backgroundColor = '';
        document.getElementById('kik32').style.borderRadius = '';


    }
    const kik32 = () => {
        ref32.current.checked = true;
        console.log(ref32.current.value)
        setKidsGender(ref32.current.value)

        document.getElementById('kik32').style.backgroundColor = '#20F0BC';
        document.getElementById('kik32').style.borderRadius = '60px';
        document.getElementById('kik31').style.backgroundColor = '';
        document.getElementById('kik31').style.borderRadius = '';


    }



    // _____________________________________ROW 4- CHILD NO 2________________________________________________________







    const jump = () => {
        console.log("marry is or not",)
        console.log("kids age -", kage)
        console.log("kids gender -", kidsGender)
        if (marry.length == 0) {
            setShow1(true);
        } else {
            navigate("/Pets_Info", { state: { FamilyInfo: [{ child_Gender: kidsGender, child_Age: kage }], email, Influencer_Firstname, Influencer_Lastname, city, age, gender, phone, whatsapp, Instagram_detail, language, ContentCategories } });
        }

    }





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
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Are you Married?</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>Select Yes or No ! <br />
                                </p>



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-7 bg-'>
                                        <div className='py-4' style={{ border: "" }}>






















                                            {/* Fields  */}
                                            <section className='my-4'>
                                                {/* line1 */}
                                                <section className=''>





                                                    {/* __________________________________________________________________________________________________________________________________________________________________________ */}

                                                    {/* row 1 married  */}
                                                    <section className='row d-flex justify-content-evenly mb-4 ' style={{ "marginLeft": "", "marginTop": "1rem" }}>

                                                        <section className='col '>
                                                            <button className='smallB' onClick={kik1} id='yeo1' style={{ "width": "15rem", "border": "1px solid aqua " }}>
                                                                {/* <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Yes<input type="radio" value={marry} name='marry' style={{"position":"relative","top":"3px","left":"5px"}} onClick={(e) => { setMarry("yes") }} /> </span> */}
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Yes<input type="radio" value="yes" hidden ref={ref1} name='marry' style={{ "position": "relative", "top": "3px", "left": "5px" }} /> </span>
                                                            </button>

                                                        </section>



                                                        {/* button1 */}
                                                        <section className='col' style={{ "marginLeft": "" }}>
                                                            <button className='smallB' onClick={kik2} id='yeo2' style={{ "width": "15rem", "border": "1px solid aqua " }}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>No<input type="radio" value="no" hidden ref={ref2} name='marry' style={{ "position": "relative", "top": "3px", "left": "5px" }} onClick={(e) => { setMarry("no"); setGender(null); setAge(null); setOnKids(false); setNoOfKids(false) }} /> </span>
                                                            </button>

                                                        </section>
                                                        {/* button2 */}



                                                    </section>




                                                    {/* __________________________________________________________________________________________________________________________________________________________________________ */}



                                                    {
                                                        onKids ?

                                                            <>
                                                                <section className='text-start ps-5 text-light pb-2 ' style={{ "fontWeight": "600", "width": "30rem", "position": "", "top": "2.5rem", "left": "-7.2rem" }}><span style={{ "color": "#FFFFF" }}>Do you have Kids ?</span></section>
                                                                <section className='row d-flex justify-content-evenly' style={{ "marginLeft": "", "marginTop": "", "width": "" }}>


                                                                    {/* button1 */}
                                                                    <section className='col '>
                                                                        <button className='smallB' onClick={kik21} id='kik21' style={{ "width": "15rem", "border": "1px solid aqua " }}>
                                                                            {/* <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Yes<input type="radio" value={marry} name='marry' style={{"position":"relative","top":"3px","left":"5px"}} onClick={(e) => { setMarry("yes") }} /> </span> */}
                                                                            <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Yes<input type="radio" hidden ref={ref21} value="yes" name='haveKids' style={{ "position": "relative", "top": "3px", "left": "5px" }} /> </span>
                                                                        </button>

                                                                    </section>

                                                                    {/* button2 */}
                                                                    <section className='col 
                                                                    ' style={{ "marginLeft": "" }}>
                                                                        <button className='smallB' onClick={kik22} id='kik22' style={{ "width": "15rem", "border": "1px solid aqua " }}>
                                                                            <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>No<input type="radio" hidden ref={ref22} value="no" name='haveKids' style={{ "position": "relative", "top": "3px", "left": "5px" }} onClick={(e) => { setHaveKids("No"); setNoOfKids(false) }} /> </span>
                                                                        </button>



                                                                    </section>
                                                                    {/* button3 */}
                                                                    <section className='col 
                                                                    ' style={{ "marginLeft": "" }}>
                                                                        <button className='smallB' onClick={kik23} id='kik23' style={{ "width": "15rem", "border": "1px solid aqua " }}>
                                                                            <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>I'm Expecting<input type="radio" hidden ref={ref23} value="Expecting" name='haveKids' style={{ "position": "relative", "top": "3px", "left": "5px" }} onClick={(e) => { setHaveKids("Expecting"); setNoOfKids(false) }} /> </span>
                                                                        </button>

                                                                    </section>



                                                                </section>
                                                            </>
                                                            : null}

                                                    {/* __________________________________________________________________________________________________________________________________________________________________________ */}

                                                    {
                                                        noOfKids ?
                                                            <>
                                                                {/* second kid exp */}
                                                                <section className='my-4'>
                                                                    <section className='text-start ps-5 text-light pb-2  py-1' style={{ "fontWeight": "600", "width": "30rem", "position": "", "top": "-0.3rem", "left": "-8rem" }}><span style={{ "color": "#FFFFF" }}>What's the child's gender ?</span></section>


                                                                    <section className='row d-flex justify-content-evenly' style={{ "marginLeft": "2.6rem", "marginTop": "" }}>
                                                                        {/* <section className=' ' style={{ "fontWeight": "600", "fontSize": "1.6rem", "width": "30rem", "position": "relative", "top": "-0.3rem", "left": "-10.4rem" }}><span style={{ "color": "#FFFFF" }}>Child No 1</span></section> */}

                                                                        <section className='col '>
                                                                            <button className='smallB' id='kik31' onClick={kik31} style={{ "width": "15rem", "border": "1px solid aqua " }}>
                                                                                {/* <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Yes<input type="radio" value={marry} name='marry' style={{"position":"relative","top":"3px","left":"5px"}} onClick={(e) => { setMarry("yes") }} /> </span> */}
                                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Male<input type="radio" hidden value="male" ref={ref31} name='kidsGender' style={{ "position": "relative", "top": "3px", "left": "5px" }} onClick={(e) => { setKidsGender("Male") }} /> </span>
                                                                            </button>

                                                                        </section>
                                                                        {/* button1 */}
                                                                        <section className='col ' style={{ "marginLeft": "8rem" }}>
                                                                            <button className='smallB' id="kik32" onClick={kik32} style={{ "width": "15rem", "border": "1px solid aqua " }}>
                                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Female<input type="radio" hidden ref={ref32} value="female" name='kidsGender' style={{ "position": "relative", "top": "3px", "left": "5px" }} onClick={(e) => { setKidsGender("female") }} /> </span>
                                                                            </button>

                                                                        </section>
                                                                        {/* button2 */}









                                                                    </section>


                                                                    <section className='row d-flex justify-content-center ' style={{ "marginTop": "2.5rem" }}>
                                                                        <section className='col-7  '>
                                                                            <section className='text-start ps-3 text-light pb-2  ' style={{ "fontWeight": "600", "width": "30rem", "position": "", "top": "-5.4rem", "left": "-10rem" }}><span style={{ "color": "#FFFFF" }}>How old is the child</span></section>
                                                                            <input type='number' value={kage} name='kage' onChange={(e) => { setKage(e.target.value) }} placeholder='Enter Age' className='bg-dark d-flex justify-content-center ps-3' style={{ "height": "59px", "width": "515px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                                        </section>
                                                                    </section>

                                                                </section>



                                                                {/* add more button exp */}
                                                                {/* <button className='smallB mt-2' style={{ "width": "32rem", "border": "1px solid aqua " }}     > <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Add more +</span></button><br /> */}

                                                            </>
                                                            : null}



                                                </section>
                                            </section>







                                            {/* button  */}
                                            <button onClick={jump} className='bigB col-md  mt-5' style={{ "marginLeft": "-0.8rem", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                            {show1 && marry.length == 0 ?
                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "-6rem", "left": "-0rem" }}>Select an option yes or no ! &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "white" }} /></label>
                                                : null}
                                            {show2 && haveKids.length == 0 ?
                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "-6rem", "left": "-0rem" }}>Select an option &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "white" }} /></label>
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

export default InfluReg9