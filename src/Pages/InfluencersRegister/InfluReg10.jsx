import React, { useEffect, useRef, useState } from 'react'
import logo from '../../Imagez/Common/logo.png'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import { baseUrl } from '../../Routez/Routey';
const InfluReg10 = () => {
    const navigate = useNavigate();
    const location = useLocation();





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
        setContentCategories(location.state.ContentCategories)
        setFamilyInfo(location.state.FamilyInfo)
        setMarry(location.state.marry)
    })
    // _________________________________________________________________________________
    const [pets, setPets] = useState([]);
    const [petName, setPetName] = useState("");
    const [marry, setMarry] = useState();
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
    const [FamilyInfo, setFamilyInfo] = useState();
    const [bShow, setBShow] = useState(false)

    // _________________________________________________________________________________
    const [show, setShow] = useState(false);

    // _________________________________________________________________________________



    const ref1 = useRef(null);
    const ref2 = useRef(null);

    const pyes = () => {
        ref1.current.checked = true;
        console.log(ref1.current.value)
        setPets(ref1.current.value)
        setBShow(true);
        document.getElementById('pko').style.backgroundColor = '#20F0BC';
        document.getElementById('pko').style.borderRadius = '60px';
        document.getElementById('pki').style.backgroundColor = '';
        document.getElementById('pki').style.borderRadius = '';
    }
    const pno = () => {
        ref2.current.checked = true;
        console.log(ref2.current.value)
        setPets(ref2.current.value)
        setBShow(false);
        document.getElementById('pki').style.backgroundColor = '#20F0BC';
        document.getElementById('pki').style.borderRadius = '60px';
        document.getElementById('pko').style.backgroundColor = '';
        document.getElementById('pko').style.borderRadius = '';
    }



    // _________________________________________________________________________________
    // const jump =()=>{
    //     console.log(location.state)
    //     navigate("/k", { state: { FamilyInfo: { child_Gender: kidsGender, child_Age: kage },PetInfo :{petBreed:petName} ,email, Influencer_Firstname, Influencer_Lastname, city, age, gender, phone, whatsapp, Instagram_detail, language, ContentCategories } });

    // }

    const jump = () => {
        // navigate("/t11",{state:{PetInfo:pets, }})
        // navigate("/t11", { state: { FamilyInfo, PetInfo: pets, email, Influencer_Firstname, Influencer_Lastname, city, age, gender, phone, whatsapp, Instagram_Detail, language, ContentCategories } })

        let data = {
            pets: [{ petBreed: petName }],
            marry,
            ContentCategories
            , Influencer_Firstname
            , Influencer_Lastname
            , city
            , age
            , gender
            , email
            , phone
            , whatsapp
            , Instagram_detail
            , language
            , FamilyInfo
        };

        if (pets.length == 0) {
            setShow(true);
        } else {
            //1. POST LOGIN API___ 

            console.log("The data of the influencers regestration : ", data)
            axios.post(`${baseUrl}api/Influencer/influencerCreateProfile`, {
                PetInfo: data.pets,
                FamilyInfo: data.marry,
                ContentCategories: data.ContentCategories,
                Instagram_detail: data.Instagram_detail,
                phone: data.phone,
                language: data.language,
                gender: data.gender,
                city: data.city,
                email: data.email,
                Influencer_Lastname: data.Influencer_Lastname,
                Influencer_Firstname: data.Influencer_Firstname,
                watsaap: data.whatsapp,
                Street_Address: data.city

            }).then((resp) => {
                console.log("Influencers Register  response - ", resp.data)
                // console.log("pets data -",PetInfo)
                swal("Yasss!", "We Are In..", "success");
                navigate("/Done");
            }).catch((error) => {
                console.log("Register Api Error - ", error);
            })


        }

    }
    const PetName = (event) => {
        const value = event.target.value;
        const Name = value.replace(/[^A-Za-z]/g, '');
        setPetName(Name);
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
                                <h4 className='' style={{ "fontSize": "42px", "fontWeight": "700", "color": "#FFFFFF", "lineHeight": "60px" }}>Do you have Pets?</h4>
                                <p style={{ "fontSize": "16px", "fontWeight": "600", "lineHeight": "26px", "color": "#FFFFFF", "marginTop": "" }}>Select Yes or No ! <br />
                                </p>



                                <section className='row d-flex justify-content-center'>
                                    <section className='col-lg-5 bg-'>
                                        <div className='py-4' style={{ border: "" }}>







                                            {/* Fields  */}
                                            <section className='my-4'>
                                                {/* line1 */}
                                                <section className=''>







                                                    {/* row 1 languages  */}
                                                    <section className='row ' style={{ "marginLeft": "", "marginTop": "1rem" }}>

                                                        <section className='col  '>
                                                            <button className='smallB' onClick={pyes} id='pko' style={{ "width": "15rem" }}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>Yes <input type="radio" hidden ref={ref1} value="yes" name='pets' onClick={(e) => { setPets("yes") }} /> </span>
                                                            </button>

                                                        </section>
                                                        {/* button1 */}
                                                        <section className='col' style={{ "marginLeft": "" }}>
                                                            <button className='smallB' onClick={pno} id='pki' style={{ "width": "15rem" }}>
                                                                <span className='' style={{ "fontSize": "15px", "fontWeight": "600", "lineHeight": "36px", "color": "#FFFFFF" }}>No <input type="radio" hidden ref={ref2} value="no" name='pets' onClick={(e) => { setPets("no") }} /> </span>
                                                            </button>

                                                        </section>
                                                        {/* button2 */}


                                                        {
                                                            bShow ?
                                                                <section className='col-md-12 ' style={{ "marginTop": "2rem" }}>
                                                                    <section className='text-start ps-5 text-light pb-2 ' style={{ "fontWeight": "600", "width": "30rem", "position": "", "top": "-5.4rem", "left": "-9.2rem" }}><span style={{ "color": "#FFFFF" }}>Which pet do you have ? </span></section>
                                                                    <input type='text' value={petName} name='petName'
                                                                        // onChange={(e) => { setPetName(e.target.value) }} 
                                                                        onChange={PetName}
                                                                        placeholder='Choose among cat or dog only.' className='bg-dark  ps-3' style={{ "height": "59px", "width": "515px", "marginLeft": "", "borderRadius": "10px", "fontSize": "16px", "fontWeight": "700", "border": "none", "background": "none", "lineHeight": "", "color": "#FFFFFF" }}></input>
                                                                </section>
                                                                : null
                                                        }

                                                    </section>
                                                    {/* <section className='row ' style={{ "marginTop": "2.5rem" }}>

                                                </section> */}



                                                </section>
                                            </section>


                                            {/* button  */}
                                            <button onClick={jump} className='bigB col-md  mt-4' style={{ "marginLeft": "", "width": "  32rem" }}> <span className='' style={{ "fontSize": "24px", "fontWeight": "700", "lineHeight": "36px", "color": "#FFFFFF" }}>Continue</span></button><br />
                                            {show && pets.length == 0 ?
                                                <label style={{ "color": "white", "fontSize": "16px", "fontWeight": "600", "position": "relative", "top": "-6rem", "left": "-0rem" }}>Select an option yes or no ! &nbsp; <i className="fa-solid fa-circle-exclamation fa-shake" style={{ "color": "white" }} /></label>
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

export default InfluReg10