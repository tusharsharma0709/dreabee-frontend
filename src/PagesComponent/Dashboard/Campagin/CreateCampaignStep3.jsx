import axios from 'axios';
import { event } from 'jquery';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { baseUrl } from '../../../Routez/Routey';
import Insta_Img from '../../../Imagez/Dashboard/All/Insta.png'
import Insta_Vid from '../../../Imagez/Dashboard/All/Reel.png'

import Insta_Reel from '../../../Imagez/Dashboard/All/Reel.png'
// import Insta_Story from '../../../Imagez/Dashboard/InstaIcons/Insta.png'
export default function Create_Campaign3() {
    const InputRef = useRef()
    const BrandLogo = useRef();
    const MaleRef = useRef();
    const FemaleRef = useRef();
    const otherRef = useRef();

    const FamilyParenting = useRef();
    const InvestmentFinance = useRef();
    const FoodDrink = useRef();
    const StyleFashion = useRef();
    const Travel = useRef();
    const Lifestyle = useRef();
    const Fitness = useRef();
    const Beauty = useRef();

    const Nano = useRef();
    const Micro = useRef();
    const MidTier = useRef();
    const Macro = useRef();

    const ProductImg = useRef();

    const [listName, setListName] = useState('Campaign info');

    const [showModal, setShowModal] = useState(false)

    const navigate = useNavigate();

    const GoToDash = () => {
        navigate('/Dreabee/Dashboard/Campagin')
        // navigate('/Dreabee/Dashboardyy')
    }

    const [work_as, setWork_as] = useState("");
    const [ids, setIds] = useState("");
    const location = useLocation()

    useEffect(() => {
        localStorage.getItem("Edit-Id")
        // console.log(location)
        console.log(location.state)
        setIds(location.state.idz)
        setWork_as(location.state.work_as)

        if (localStorage.getItem("Edit-Id")) {
            // alert("Wohoowhooo")
            GetAllById();
        } else {
            console.log("no editing here")
        }

    }, [])
    // __________________________________________________________________

    const GetAllById = () => {
        axios.get(`${baseUrl}api/Campaign/CampaignDetails/${localStorage.getItem("Edit-Id")}`).then((res) => {
            console.log("WHOLE DATTACAMP3 HERERERER :", res.data)

            setCampaign_banner(res.data.CreatorPreferences[0].CampaignBanner);
            setCampaign_brief(res.data.CreatorPreferences[0].Campaign_Brief);
            setAdditional_requirement(res.data.CreatorPreferences[0].AdditionalRequirement);

            setCampaign_name(res.data.CreatorPreferences[0].CampaignDetail[0].CampaignName);
            setBrand_name(res.data.CreatorPreferences[0].CampaignDetail[0].Brand_Name);
            setBrand_logo(res.data.CreatorPreferences[0].CampaignDetail[0].Brand_Logo);
            setProductValue(res.data.CreatorPreferences[0].CampaigType[0].Value);
            setProduct_offer(res.data.CreatorPreferences[0].CampaigType[0].ProductOffer);
            setDescription(res.data.CreatorPreferences[0].CampaigType[0].description);
            setImage(res.data.CreatorPreferences[0].CampaigType[0].Image);
            setQuantity(res.data.CreatorPreferences[0].Deliverables[0].quantity);
            setType(res.data.CreatorPreferences[0].Deliverables[0].type);


            // console.log("creators prefferences AdditionalRequirement: ", res.data.CreatorPreferences[0].AdditionalRequirement)
            // console.log("creators prefferences Campaign_Brief: ", res.data.CreatorPreferences[0].Campaign_Brief)
            // console.log("creators prefferences CampaignBanner: ", res.data.CreatorPreferences[0].CampaignBanner)
            // console.log("creators prefferences Brand_Logo: ", res.data.CreatorPreferences[0].CampaignDetail[0].Brand_Logo)
            // console.log("creators prefferences Brand_Name: ", res.data.CreatorPreferences[0].CampaignDetail[0].Brand_Name)
            // console.log("creators prefferences CampaignName: ", res.data.CreatorPreferences[0].CampaignDetail[0].CampaignName)
            // console.log("creators prefferences ProductOffer: ", res.data.CreatorPreferences[0].CampaigType[0].ProductOffer)
            // console.log("creators prefferences Value: ", res.data.CreatorPreferences[0].CampaigType[0].Value)
            // console.log("creators prefferences description: ", res.data.CreatorPreferences[0].CampaigType[0].description)
            // console.log("creators prefferences Image: ", res.data.CreatorPreferences[0].CampaigType[0].Image)
            // console.log("creators prefferences quantity: ", res.data.CreatorPreferences[0].Deliverables[0].quantity)
            // console.log("creators prefferences type: ", res.data.CreatorPreferences[0].Deliverables[0].type)




            setPerks(res.data.ProfileS[0].NoOfPerks);
            setGender(res.data.ProfileS[0].Creator_Preferences[0].Creator_Gender);
            setCreator_location(res.data.ProfileS[0].Creator_Preferences[0].Creator_Location);
            setInfluencer_type(res.data.ProfileS[0].Creator_Preferences[0].Influencer_Type);
            setContactDetails(res.data.ProfileS[0].ContactDetails);
            setContent_categories(res.data.ProfileS[0].Creator_Preferences[0].Content_Categories);



            // console.log("creators ProfileS NoOfPerks  type: ", res.data.ProfileS[0].NoOfPerks)
            // console.log("creators ProfileS ContactDetails  type: ", res.data.ProfileS[0].ContactDetails)
            // console.log("creators ProfileS Creator_Gender type: ", res.data.ProfileS[0].Creator_Preferences[0].Creator_Gender)
            // console.log("creators ProfileS Creator_Location type: ", res.data.ProfileS[0].Creator_Preferences[0].Creator_Location)
            // console.log("creators ProfileS Influencer_Type type: ", res.data.ProfileS[0].Creator_Preferences[0].Influencer_Type)
            // console.log("creators ProfileS Content_Categories type: ", res.data.ProfileS[0].Creator_Preferences[0].Content_Categories)



        }).catch((error) =>
            console.log("the all data error - ", error));




        // setWork_as("Paid Collaboration")
        // localStorage.setItem('Achievee', achieveit);


        // if (work_as === "Perks") {
        //     PerkClick();
        // }
        // else if (work_as === "Paid Collaboration") {
        //     CollabClick();
        // } else {
        // }
    }





    // __________________________________________________________________
    //
    // CreatorPreferences//
    // CreatorPreferences//
    const [campaign_banner, setCampaign_banner] = useState("");
    const [campaign_brief, setCampaign_brief] = useState("");
    const [additional_requirement, setAdditional_requirement] = useState("");

    // CampaignDetail
    const [campaign_name, setCampaign_name] = useState("");
    const [brand_name, setBrand_name] = useState("");
    const [brand_logo, setBrand_logo] = useState("");



    // CampaigType
    const [productValue, setProductValue] = useState();
    const [product_offer, setProduct_offer] = useState();
    const [description, setDescription] = useState();
    const [image, setImage] = useState();

    // Deliverables
    // const [quantity, setQuantity] = useState();
    // const [type, setType] = useState("your contact type");


    // ProfileS//
    // ProfileS//

    const [perks, setPerks] = useState();
    const [contactDetails, setContactDetails] = useState();


    // const [selectedOption, setSelectedOption] = useState(''); // State to store the selected option









    const handleOptionChange = (event) => {
        setPerks(event.target.value); // Update the state with the selected option
    };

    const [gender, setGender] = useState('');
    const [creator_location, setCreator_location] = useState("");
    const [influencer_type, setInfluencer_type] = useState("");
    const [content_categories, setContent_categories] = useState([]);

    const [bannerImg, setBannerImg] = useState(false)
    const [BrandLogoImg, setBrandLogoImg] = useState(false)
    const [prodImg, setProdImg] = useState(false)

    const banner_upload = (e) => {
        const file1 = e.target.files[0];
        if (file1) {
            const imageURL1 = URL.createObjectURL(file1);
            setCampaign_banner(imageURL1);
        }
        setBannerImg(true)
    }
    const brandLogo_upload = (e) => {
        const file2 = e.target.files[0];
        if (file2) {
            const imageURL2 = URL.createObjectURL(file2);
            setBrand_logo(imageURL2);
        }
        setBrandLogoImg(true);
    }
    const handleProductImage = (event) => {
        const file = event.target.files[0];
        setProdImg(true)
        if (file) {
            const imageURL = URL.createObjectURL(file);
            setImage(imageURL);
        }
    };


    const [quantity, setQuantity] = useState([]);
    const [type, setType] = useState([]);


    const [inputPairs, setInputPairs] = useState([
        { quantity: '', brand_name: '' }
    ]);

    const handleChange = (index, field, event) => {
        const pairs = [...inputPairs];
        pairs[index][field] = event.target.value;
        setInputPairs(pairs);
    };

    const handleAddPair = () => {
        const pairs = [...inputPairs];
        pairs.push({ quantity: '', brand_name: '' });
        setInputPairs(pairs);
    };

    const [isOpenQty, setIsOpenQty] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['1 qty', '2 qty', '3 qty', '4 qty', '5 qty', '6 qty', '7 qty', '8 qty', '9 qty', '10 qty'];

    const toggleDropdownnQty = () => {
        setIsOpenQty(!isOpenQty);
    };

    const handleQtySelect = (option) => {
        setQuantity(option);
        setIsOpenQty(false);
    };


    const [isBold, setIsBold] = useState(false);
    const handleBoldClick = () => {
        setIsBold(!isBold);
    };

    const [isItalic, setIsItalic] = useState(false);
    const handleItalicClick = () => {
        setIsItalic(!isItalic);
    };
    const handleBulletClick = () => {
        const items = campaign_brief.split('\n');
        const bulletList = items.map((item, index) => `・ ${item}`).join('\n');
        setCampaign_brief(bulletList);
    };

    const handleNumberedListClick = () => {
        const items = campaign_brief.split('\n');
        const numberedList = items.map((item, index) => `${index + 1}. ${item}`).join('\n');
        setCampaign_brief(numberedList);
    };







    // __________________________________________________________________________________________________

    const Camp_Draft = () => {

        let data = {
            brand_name,
            work_as,
            CreatorPreferences: [{
                AdditionalRequirement: additional_requirement,
                Campaign_Brief: campaign_brief,
                CampaignBanner: campaign_banner,
                CampaignDetail: [{
                    Brand_Logo: brand_logo,
                    Brand_Name: brand_name,
                    CampaignName: campaign_name,
                }],
                CampaigType: [{
                    ProductOffer: product_offer,
                    Value: productValue,
                    description: description,
                    Image: image,
                }],
                Deliverables: [{
                    quantity: quantity,
                    type: type
                }]
            }],

            ProfileS: [{
                NoOfPerks: perks,
                ContactDetails: contactDetails,
                Creator_Preferences: [{
                    Creator_Gender: gender,
                    Creator_Location: creator_location,
                    Influencer_Type: influencer_type,
                    Content_Categories: content_categories
                }],
            }]
        };

        console.log("the higher o0ne campaignm", data)

        setTimeout(() => {
            axios.post(`${baseUrl}api/Campaign/createCampaignDraft`, {

                workAs: data.work_as,
                CreatorPreferences: data.CreatorPreferences,
                ProfileS: data.ProfileS,
                BrandName: data.brand_name,





                // CampaignBanner: data.CreatorPreferences[0].campaign_banner,
                // Campaign_Brief: data.CreatorPreferences[0].campaign_brief,
                // AdditionalRequirement: data.CreatorPreferences[0].additional_requirement,

                // CampaignName: data.CreatorPreferences[0].CampaignDetail[0].campaign_name,
                // BrandName: data.CreatorPreferences[0].CampaignDetail[0].brand_name,
                // Brand_Logo: data.CreatorPreferences[0].CampaignDetail[0].brand_logo,

                // ProductOffer: data.CreatorPreferences[0].CampaigType[0].product_offer,
                // Value: data.CreatorPreferences[0].CampaigType[0].value,
                // description: data.CreatorPreferences[0].CampaigType[0].description,
                // Image: data.CreatorPreferences[0].CampaigType[0].image,

                // quantity: data.CreatorPreferences[0].Deliverables[0].quantity,
                // type: data.CreatorPreferences[0].Deliverables[0].type,






                // NoOfPerks: data.ProfileS[0].perks,
                // ContactDetails: data.ProfileS[0].contactDetails,

                // Creator_Gender: data.ProfileS[0].Creator_Preferences[0].creator_gender,
                // Creator_Location: data.ProfileS[0].Creator_Preferences[0].creator_location,
                // Influencer_Type: data.ProfileS[0].Creator_Preferences[0].influencer_type,
                // Content_Categories: data.ProfileS[0].Creator_Preferences[0].content_categories,



            }).then((resp) => {
                console.log("Login response - ", resp.data)

                swal("Data Sent Successfully!", "", "success");

            }).catch((error) => {
                console.log("Campaign page error - ", error);
                swal("Yasss!", "We Are In..", "danger");
                console.log("Login response - ", error.data)
            })
        }, 5000);
    }
    // __________________________________________________________________________________________________









    // __________________________________________________________________________________________________

    const ChooseOne = () => {
        if (ids == null) {
            Camp_Draft();
            // alert("DRAFT")
        } else {
            // alert("EDIT")
            Camp_Edit();
        }
    }
    // __________________________________________________________________________________________________

    const Camp_Edit = () => {

        let data = {
            brand_name,
            work_as,
            ids,
            CreatorPreferences: [{
                AdditionalRequirement: additional_requirement,
                Campaign_Brief: campaign_brief,
                CampaignBanner: campaign_banner,
                CampaignDetail: [{
                    Brand_Logo: brand_logo,
                    Brand_Name: brand_name,
                    CampaignName: campaign_name,
                }],
                CampaigType: [{
                    ProductOffer: product_offer,
                    Value: productValue,
                    description: description,
                    Image: image,
                }],
                Deliverables: [{
                    quantity: quantity,
                    type: type
                }]
            }],

            ProfileS: [{
                NoOfPerks: perks,
                ContactDetails: contactDetails,
                Creator_Preferences: [{
                    Creator_Gender: gender,
                    Creator_Location: creator_location,
                    Influencer_Type: influencer_type,
                    Content_Categories: content_categories
                }],
            }]
        };



        setTimeout(() => {
            console.log("ALL DATTTTT", data)
        }, 1000);

        setTimeout(() => {
            axios.patch(`${baseUrl}api/Campaign/editDetailsCampaign`, {
                _id: data.ids,
                workAs: data.work_as,
                CreatorPreferences: data.CreatorPreferences,
                ProfileS: data.ProfileS,
                BrandName: data.brand_name


                // CampaignBanner: data.CreatorPreferences[0].campaign_banner,
                // Campaign_Brief: data.CreatorPreferences[0].campaign_brief,
                // AdditionalRequirement: data.CreatorPreferences[0].additional_requirement,
                // CampaignName: data.CreatorPreferences[0].CampaignDetail[0].campaign_name,
                // BrandName: data.CreatorPreferences[0].CampaignDetail[0].brand_name,
                // Brand_Logo: data.CreatorPreferences[0].CampaignDetail[0].brand_logo,
                // ProductOffer: data.CreatorPreferences[0].CampaigType[0].product_offer,
                // Value: data.CreatorPreferences[0].CampaigType[0].value,
                // description: data.CreatorPreferences[0].CampaigType[0].description,
                // Image: data.CreatorPreferences[0].CampaigType[0].image,
                // quantity: data.CreatorPreferences[0].Deliverables[0].quantity,
                // type: data.CreatorPreferences[0].Deliverables[0].type,
                // NoOfPerks: data.ProfileS[0].perks,
                // ContactDetails: data.ProfileS[0].contactDetails,
                // Creator_Gender: data.ProfileS[0].Creator_Preferences[0].creator_gender,
                // Creator_Location: data.ProfileS[0].Creator_Preferences[0].creator_location,
                // Influencer_Type: data.ProfileS[0].Creator_Preferences[0].influencer_type,
                // Content_Categories: data.ProfileS[0].Creator_Preferences[0].content_categories,



            }).then((resp) => {
                console.log("Draft edit  response - ", resp.data)
                swal("Data Updated Successfully!", "", "success");

            }).catch((error) => {
                console.log("Campaign page error - ", error);
                swal("OOps!", "Reload page and try again.", "danger");
                console.log("draft edit response - ", error.data)
            })
        }, 5000);
    }


    function Budget() {
        return (
            <>
                <div className='form_section'>
                    <label>
                        Campaign Budget
                    </label>
                    {/* budget field */}
                    <div className='d-flex flex-column'>
                        <label className='camp_label'>What is your overall budget for this campaign?</label>
                        {/* <input type='text' value={perks} onChange={(e) => { setPerks(e.target.value) }} className='camp_input' placeholder='Eg. 500000' /> */}
                        <select value={perks} onChange={handleOptionChange} className=' camp_input_perks' >
                            <option value="10">10 perks</option>
                            <option value="25">25 Perks</option>
                            <option value="50">50 Perks</option>
                            <option value="100">100 Perks </option>
                            <option value="200">200 Perks </option>
                            <option value="500">500 Perks </option>
                        </select>
                        {/* <p>Selected option: {perks || 'None'}</p> */}
                    </div>

                    <label className='mt-3'>
                        Creator Preferences
                    </label>

                    {/* gender  */}
                    <div className='d-flex flex-column'>
                        <label className='camp_label'>Creator Gender</label>
                        <div className='d-flex mt-3'>
                            <div className='m-2 '>
                                <input type='checkbox' ref={MaleRef} style={{ display: 'none', cursor: "pointer" }} />
                                <span className={gender == 'Male' ? 'gender active_gender btnzOpt' : 'gender btnzOpt'} onClick={() => { MaleRef.current.click(); setGender('Male') }}>
                                    Male
                                </span>
                            </div>

                            <div className='m-2'>
                                <input type='checkbox' ref={FemaleRef} style={{ display: 'none', cursor: "pointer" }} />
                                <span className={gender == 'Female' ? 'gender active_gender btnzOpt' : 'gender btnzOpt'} onClick={() => { FemaleRef.current.click(); setGender('Female') }}>
                                    Female
                                </span>
                            </div>

                            <div className='m-2'>
                                <input type='checkbox' ref={otherRef} style={{ display: 'none', cursor: "pointer" }} />
                                <span className={gender == 'Other' ? 'gender active_gender btnzOpt' : 'gender btnzOpt'} onClick={() => { otherRef.current.click(); setGender('Other') }}>
                                    Other
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* location  */}
                    <div className='d-flex flex-column mt-3'>
                        <label className='camp_label'>Creator Location</label>
                        <input type='text' value={creator_location} onChange={(e) => { setCreator_location(e.target.value) }} className='camp_input' placeholder='Eg. Mumbai, Delhi' />
                    </div>

                    {/* influencer type  */}
                    <div className='d-flex flex-column'>
                        <label className='camp_label'>Influencer Type</label>
                        <div className='d-flex flex-column'>

                            <div className='mb-2 btnzOpt' >
                                <span className={influencer_type == 'Nano' ? 'Camp_Type active_Camp_Type' : 'Camp_Type '} style={{ "cursor": "pointer", "width": "100%", "display": "flex", "justifyContent": "space-between" }} onClick={() => { Nano.current.click(); setInfluencer_type('Nano') }}>
                                    Nano (2K-10K Followers)
                                    <input type='checkbox' ref={Nano} hidden />
                                </span>
                            </div>

                            <div className='my-2 btnzOpt'>
                                <span style={{ "cursor": "pointer", "width": "100%", "display": "flex", "justifyContent": "space-between" }} className={influencer_type == 'Micro' ? 'Camp_Type active_Camp_Type' : 'Camp_Type'} onClick={() => { Micro.current.click(); setInfluencer_type('Micro') }}>
                                    Micro (10K-25K Followers)
                                    <input type='checkbox' ref={Micro} hidden />
                                </span>
                            </div>

                            <div className='my-2 btnzOpt'>
                                <span style={{ "cursor": "pointer", "width": "100%", "display": "flex", "justifyContent": "space-between" }} className={influencer_type == 'Mid-Tier' ? 'Camp_Type active_Camp_Type' : 'Camp_Type'} onClick={() => { MidTier.current.click(); setInfluencer_type('Mid-Tier') }}>
                                    Mid Tier (25K-100K Followers)
                                    <input type='checkbox' ref={MidTier} hidden />
                                </span>
                            </div>
                            <div className='my-2 btnzOpt'>
                                <span style={{ "cursor": "pointer", "width": "100%", "display": "flex", "justifyContent": "space-between" }} className={influencer_type == 'Macro' ? 'Camp_Type active_Camp_Type' : 'Camp_Type'} onClick={() => { Macro.current.click(); setInfluencer_type('Macro') }}>
                                    Macro (100K-250K Followers)
                                    <input type='checkbox' ref={Macro} hidden />
                                </span>
                            </div>



                        </div>
                    </div>

                    {/* Categories */}
                    <div className='d-flex flex-column'>
                        <label className='camp_label'>Content Categories</label>
                        <div className='d-flex w-100 flex-row'>

                            {/* 👨‍👩‍👧‍👦  Family & Parenting */}
                            <div className='m-2 mt-1 '>
                                <span className='btnzOpt gender  d-flex justify-content-between' style={{ "maxWidth": "15rem", "cursor": "pointer" }} onClick={() => { FamilyParenting.current.click(); content_categories.push('Family & Parenting') }}>
                                    👨‍👩‍👧‍👦  Family & Parenting &nbsp;
                                    <input type='checkbox' ref={FamilyParenting} />
                                </span>
                            </div>
                            {/* 💰Investment & Finance*/}
                            <div className='m-1 '>
                                <span className='btnzOpt  gender  d-flex justify-content-between' style={{ "maxWidth": "15rem", "cursor": "pointer" }} onClick={() => { InvestmentFinance.current.click(); content_categories.push('Investment & Finance') }}>
                                    💰Investment & Finance &nbsp;
                                    <input type='checkbox' ref={InvestmentFinance} />
                                </span>
                            </div>
                            {/* 🍟 Food & Drink */}
                            <div className='m-1 '>
                                <span className='gender  d-flex justify-content-between btnzOpt' style={{ "maxWidth": "12rem", "cursor": "pointer" }} onClick={() => { FoodDrink.current.click(); content_categories.push(' Food & Drink') }}>
                                    🍟 Food & Drink &nbsp;
                                    <input type='checkbox' ref={FoodDrink} />
                                </span>
                            </div>
                        </div>




                        <div className='d-flex w-100 flex-row'>
                            {/* 👚 Style & Fashion */}
                            <div className='m-2 '>
                                <span className='btnzOpt gender  d-flex justify-content-between' style={{ "maxWidth": "12rem", "cursor": "pointer" }} onClick={() => { StyleFashion.current.click(); content_categories.push('  Style & Fashion') }}>
                                    👚 Style & Fashion &nbsp;
                                    <input type='checkbox' ref={StyleFashion} />
                                </span>
                            </div>
                            {/* 🌏 Travel */}
                            <div className='m-2 '>
                                <span className='btnzOpt gender  d-flex justify-content-between' style={{ "maxWidth": "8rem", "cursor": "pointer" }} onClick={() => { Travel.current.click(); content_categories.push('  Travel') }}>
                                    🌏 Travel &nbsp;
                                    <input type='checkbox' ref={Travel} />
                                </span>
                            </div>
                            {/* 🏘️ Lifestyle */}
                            <div className='m-2 '>
                                <span className='btnzOpt gender  d-flex justify-content-between' style={{ "maxWidth": "9rem", "cursor": "pointer" }} onClick={() => { Lifestyle.current.click(); content_categories.push('  Lifestyle') }}>
                                    🏘️ Lifestyle &nbsp;
                                    <input type='checkbox' ref={Lifestyle} />
                                </span>
                            </div>
                            {/* 💪  Fitness */}
                            <div className='m-2 '>
                                <span className='btnzOpt gender  d-flex justify-content-between' style={{ "maxWidth": "9rem", "cursor": "pointer" }} onClick={() => { Fitness.current.click(); content_categories.push('   Fitness') }}>
                                    💪  Fitness &nbsp;
                                    <input type='checkbox' ref={Fitness} />
                                </span>
                            </div>
                            {/* 💄 Beauty */}
                            <div className='m-2 btnzOpt'>
                                <span className='gender  d-flex justify-content-between' style={{ "maxWidth": "9rem", "cursor": "pointer" }} onClick={() => { Beauty.current.click(); content_categories.push(' Beauty') }}>
                                    💄 Beauty &nbsp;
                                    <input type='checkbox' ref={Beauty} />
                                </span>
                            </div>





                        </div>
                    </div>


                    {/* Contact  */}
                    <label className='mt-3'>
                        Contact Details
                    </label>
                    {/* contact details  */}
                    <div className='d-flex flex-column'>
                        <label className='camp_label'>Sharing your phone number will help us reach you faster, we won't spam you.</label>
                        <input type='text' value={contactDetails} onChange={(e) => { setContactDetails(e.target.value) }} className='camp_input' placeholder='Enter your phone number' />

                    </div>
                </div>

                <div className='camp_footer'>
                    <button className='continue_btn back_btn btnz' style={{ "border": "1px solid grey" }} onClick={() => { setListName('Campaign info') }}>
                        Back
                    </button>

                    <button className='continue_btn btnz ms-2' onClick={() => {
                        setListName('Profile Screener');
                        ChooseOne();
                    }}>
                        Screen profile
                    </button>
                </div>
            </>
        )
    }

    function CampInfo() {
        return (
            <>
                <div className='form_section'>
                    <div>
                        <label>1. Campaign Banner</label>

                        <input type='file' onChange={banner_upload} id="camp_banner" hidden name="campaign_banner" accept=".jpg,.jpeg,.png" ref={InputRef} className='file_upload' />

                        <div className='upload_section' onClick={() => { InputRef.current.click() }}>
                            {bannerImg ?
                                campaign_banner && <img src={campaign_banner} className='mb-5 mt-2' style={{ "height": "10rem" }} alt="Select Correct Format. " />
                                :
                                null
                            }



                            <img src={require('../../../Imagez/Dashboard/All/solar_upload-broken.png')} style={{ width: '30px' }} />


                            <label>
                                Click to <Link className="browse_btn" onClick={() => { InputRef.current.click(); }}>Browse</Link> files or Drag & Drop to upload
                            </label>
                        </div>
                        <label className='notes'>
                            Supported image resolutions are 1920x1080, 1024x576, 800x450, 640x360
                        </label>
                    </div>


                    {/* 2. Campaign Details */}
                    <div style={{ marginTop: '30px' }}>
                        <label>2. Campaign Details</label>

                        <div className='d-flex flex-column'>
                            <label className='camp_label'>Campaign Name</label>
                            <input type='text' value={campaign_name} onChange={(e) => { setCampaign_name(e.target.value) }} className='camp_input' placeholder='Enter the campaign name' />
                        </div>
                        <div className='d-flex flex-column'>
                            <label className='camp_label'>Brand Name</label>
                            <input type='text' value={brand_name} onChange={(e) => { setBrand_name(e.target.value) }} className='camp_input' placeholder='Select brand name' />
                        </div>

                        <div className='d-flex flex-column'>
                            <label className='camp_label'>Brand logo</label>

                            <input type='file' onChange={brandLogo_upload} ref={BrandLogo} className='file_upload' />
                            <div className='upload_section' style={{ marginTop: '0' }} onClick={() => { BrandLogo.current.click() }}>


                                {BrandLogoImg ?
                                    brand_logo && <img src={brand_logo} className='mb-5 mt-2' style={{ "height": "10rem" }} alt="Select Correct Format. " />
                                    : null}


                                <img src={require('../../../Imagez/Dashboard/All/solar_upload-broken.png')} style={{ width: '30px' }} />
                                <label>
                                    Click to <Link className="browse_btn" onClick={() => { BrandLogo.current.click() }}>Browse</Link> files or Drag & Drop to upload
                                </label>
                            </div>
                            {/* <label className='notes'>
                                Supported image resolutions are 1920x1080, 1024x576, 800x450, 640x360
                            </label> */}
                        </div>


                    </div>


                    {/* 3. Campaign Brief */}
                    <div style={{ marginTop: '30px' }}>
                        <label>3. Campaign Brief</label>

                        <div className='d-flex flex-column'>
                            {/* <label className='camp_label'>Campaign Name</label> */}
                            <div style={{ "position": "relative", "top": "1rem", "width": "100", "height": "0" }} className='d-flex flex-row flex-direction-evenly'>
                                <button onClick={handleBoldClick} className='py-1 ms-3 me-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px" }}>Bold  </button>
                                <button onClick={handleItalicClick} className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}> Italic</button>
                                <button onClick={handleBulletClick} className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "mnWidth": "" }}>Bullet List</button>
                                <button onClick={handleNumberedListClick} className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}>Numbered List</button>
                                {/* <button className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}>Highlight </button> */}
                            </div>

                            {/* <input type='text' value={campaign_brief} onChange={(e) => { setCampaign_brief(e.target.value) }} */}
                            <textarea value={campaign_brief} onChange={(e) => { setCampaign_brief(e.target.value) }}
                                className={isItalic ? 'italic-text camp_input mt-2 py-5' : 'camp_input mt-2 py-5' + isBold ? 'bold-text camp_input mt-2 py-5' : 'camp_input mt-2 py-5'}
                                placeholder='' />
                        </div>
                    </div>



                    {/* 4. Campaign Type */}
                    <div style={{ marginTop: '30px' }}>
                        <label>4. Campaign Type</label>
                        <div className='d-flex flex-column'>
                            <label className='ps-2 mt-3' style={{ "fontWeight": "500", "fontSize": "20px" }}>Product Details</label>
                            <label className='camp_label'>What is the product on offer?</label>
                            <input type='text' value={product_offer} onChange={(e) => { setProduct_offer(e.target.value) }} className='camp_input' placeholder='Enter the name of the product.' />
                        </div>
                        <div className='d-flex flex-column'>
                            <label className='camp_label'>What is the value of the product?</label>
                            <input type='text' value={productValue} onChange={(e) => { setProductValue(e.target.value) }} className='camp_input' placeholder='Enter the amount in INR' />
                        </div>
                        <div className='d-flex flex-column'>
                            <label className='camp_label'>  Add a description for the product:</label>
                            <input type='text' value={description} onChange={(e) => { setDescription(e.target.value) }}
                                className='camp_input mt pb-5'
                                placeholder='Kindly enter a brief about the campaign here.' />
                        </div>


                        <div className='d-flex flex-column'>
                            <label className='camp_label'>Kindly upload a picture of the product</label>

                            <input type='file' onChange={handleProductImage} ref={ProductImg} className='file_upload' />
                            <div className='upload_section' style={{ marginTop: '0' }} onClick={() => { ProductImg.current.click() }}>

                                {prodImg ?
                                    image && <img src={image} className='mb-5 mt-2' style={{ "height": "10rem" }} alt="Select Correct Format. " />
                                    : null}

                                <img src={require('../../../Imagez/Dashboard/All/solar_upload-broken.png')} style={{ width: '30px' }} />
                                <label>
                                    Click to <Link className="browse_btn" onClick={() => { ProductImg.current.click() }}>Browse</Link> files or Drag & Drop to upload
                                </label>

                            </div>
                            <label className='notes'> 💡 Uploading images of products on offer, can boost campaign adoption by upto 60%.    </label>
                        </div>

                    </div>




                    {/* 5. Campaign Deliverables */}

                    <div style={{ marginTop: '30px' }}>
                        <label>5. Deliverables</label>

                        <div className='d-flex flex-column'>
                            {/* <label className='camp_label'>Deliverable No. 1</label> */}
                            {/* <div className='d-flex flex-row'> */}

                            {/* <input type='text' value={quantity} onChange={(e) => { setQuantity(e.target.value) }} className=' w-25 mx-1 camp_input' placeholder='1 Qty' />
                                <input type='text' value={brand_name} onChange={(e) => { setBrand_name(e.target.value) }} className=' w-75 mx-1 camp_input' placeholder='Search brand name' /> */}


                            {inputPairs.map((pair, index) => (

                                <div key={index} className="pair-container  mb-1">
                                    <label className='camp_label'>Deliverable No. {index + 1}</label>
                                    <div className='d-flex flex-row' >

                                        {/* <input className=' w-25 mx-1 camp_input' placeholder='1 Qty' type="text" value={pair.quantity} onChange={(event) => handleChange(index, 'quantity', event)} /> */}

                                        <select value={pair.quantity} onChange={(event) => { handleChange(index, 'quantity', event); setQuantity(event.target.value) }} className=' w-25 mx-1 camp_input_perks' >
                                            <option value="1 ">1 Qty</option>
                                            <option value="2 ">2 Qty</option>
                                            <option value="3 ">3 Qty</option>
                                            <option value="4 ">4 Qty </option>
                                            <option value="5 ">5 Qty </option>
                                            <option value="6 ">6 Qty </option>
                                            <option value="7 ">7 Qty </option>
                                            <option value="8 ">8 Qty </option>
                                            <option value="9 ">9 Qty </option>
                                            <option value="10 ">10 Qty </option>
                                        </select>

                                        {/* <input type="text" className=' w-100 mx-1 camp_input' placeholder='Select the type of deliverables' value={pair.secondValue} onChange={(event) => handleChange(index, 'secondValue', event)} /> */}
                                        <select value={pair.secondValue} onChange={(event) => {
                                            handleChange(index, 'secondValue', event);
                                            setType(event.target.value)
                                        }

                                        } className=' w-100 mx-1 camp_input_perks' >
                                            <option value="" style={{ "color": "#2f2c2c41" }}> Select the type of deliverables</option>
                                            <option value="Instagram "> <img src={Insta_Img} className='' style={{ "height": "1rem" }} alt="Select Correct Format. " />  Instagram Image</option>
                                            <option value="Instagram "> <img src={Insta_Vid} className='' style={{ "height": "1rem" }} alt="Select Correct Format. " />  Instagram Video</option>
                                            <option value="Instagram "> <img src={Insta_Reel} className='' style={{ "height": "3rem" }} alt="Select Correct Format. " />  Instagram Reels</option>
                                            <option value="Instagram "> <i class='bx bxl-instagram-alt' style={{ color: "rgba(221,13,123,0.83)" }}  ></i> Instagram Story </option>

                                            <option value="Youtube "> <img src={Insta_Img} className='' style={{ "height": "1rem" }} alt="Select Correct Format. " />  Youtube Image</option>
                                            <option value="Youtube "> <img src={Insta_Vid} className='' style={{ "height": "1rem" }} alt="Select Correct Format. " />  Youtube Video</option>
                                            <option value="Youtube "> <img src={Insta_Reel} className='' style={{ "height": "3rem" }} alt="Select Correct Format. " />  Youtube Shorts</option>

                                        </select>
                                    </div>

                                </div>
                            ))}



                            {/* </div> */}
                            <button onClick={handleAddPair} style={{ "fontSize": "16px", "color": "#c83b93", "fontWeight": "600", "border": "1px solid #c83b93", "borderRadius": "8px" }} className='p-2 mt-3'> <i className='bx bx-plus ' style={{ "fontSize": "24px", "position": "relative", "top": "5px", "fontWeight": "600" }} ></i> Add another deliverable</button>
                        </div>
                    </div>


                    {/* 5. Additional Requirements */}
                    <div style={{ marginTop: '30px' }}>
                        <label>5. Additional Requirements</label>
                        <div className='d-flex flex-column'>
                            {/* <label className='camp_label'>Campaign Name</label> */}



                            <div style={{ "position": "relative", "top": "1rem", "width": "100", "height": "0" }} className='d-flex flex-row flex-direction-evenly'>
                                {/* <button className='py-1 ms-3 me-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px" }}>Bold  </button>
                                <button className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}> Italic</button>
                                <button className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "mnWidth": "" }}>Bullet List</button>
                                <button className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}>Numbered List</button> */}
                                {/* <button className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}>Highlight </button> */}




                                <button onClick={handleBoldClick} className='py-1 ms-3 me-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px" }}>Bold  </button>
                                <button onClick={handleItalicClick} className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}> Italic</button>
                                <button onClick={handleBulletClick} className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "mnWidth": "" }}>Bullet List</button>
                                <button onClick={handleNumberedListClick} className='py-1 mx-2 px-2 ' style={{ "border": "1px solid black", "borderRadius": "10px", "height": "32px", "width": "" }}>Numbered List</button>

                            </div>


                            {/* <input type='text' value={additional_requirement} onChange={(e) => { setAdditional_requirement(e.target.value) }} className='camp_input mt-2 py-5' placeholder='' /> */}
                            <textarea value={additional_requirement} onChange={(e) => { setAdditional_requirement(e.target.value) }}
                                className={isItalic ? 'italic-text camp_input mt-2 py-5' : 'camp_input mt-2 py-5' + isBold ? 'bold-text camp_input mt-2 py-5' : 'camp_input mt-2 py-5'}
                                placeholder='' />



                        </div>
                    </div>



                </div>


                {/* foot  */}
                <div className='camp_footer'>
                    <button className='continue_btn back_btn btnz' style={{ "border": "1px solid grey" }} onClick={() => { setListName('Campaign info') }}>
                        Back
                    </button>

                    <button className='continue_btn btnz ms-2' onClick={() => {
                        setListName('Budget & Targeting');
                        // console.log("the values youtube & Instagram" + inputPairs[0].brand_name);
                    }}>
                        Set Budget & Targeting
                    </button>
                </div>
            </>
        )
    }

    function Profile_screen() {
        return (
            <>
                <div className='profile_screen'>
                    <img src={require('../../../Imagez/Dashboard/All/Play_Video.png')} className='mt-3' style={{ width: '200px' }} />

                    <p className='mt-5'>
                        Help us understand your influencer preferences.<br />
                        Rate the below influencer profiles with a 👍🏼 YES if you like this kind of profile or 👎🏼 NO if you don’t!
                    </p>

                    <div className='def_note mt-5' style={{ margin: '10px 100px' }}>
                        <p style={{ fontSize: '10px', textAlign: "center", fontWeight: "bold" }}>
                            No profiles are being shortlisted in this step. This is only to help us recommend better profiles to you!No profiles are being shortlisted in this step. This is only to help us recommend better profiles to you!
                        </p>
                    </div>
                </div>

                <div>
                    <div className='profile_screen_list d-flex justify-content-between'>
                        <img src={require('../../../Imagez/Dashboard/All/camp_user.png')} style={{ width: '50px' }} />

                        <div className='d-flex flex-column tags_name'>
                            <label>
                                Guru Randhawa
                            </label>
                            <span>
                                gururandhawa
                            </span>
                        </div>

                        <div className='d-flex flex-column tags_name'>
                            <label>
                                9.29
                            </label>
                            <span>
                                Dreabee Score
                            </span>
                        </div>

                        <div className='d-flex flex-column tags_name'>
                            <label>
                                34.2 M
                            </label>
                            <span>
                                Followers
                            </span>
                        </div>

                        <div className='d-flex flex-column tags_name'>
                            <label>
                                424.1 K
                            </label>
                            <span>
                                Avg Likes
                            </span>
                        </div>

                        <div className='d-flex flex-column tags_name'>
                            <label>
                                1.8 M
                            </label>
                            <span>
                                Avg . Comments
                            </span>
                        </div>

                        <div className='d-flex flex-column tags_name'>
                            <label>
                                1.25
                            </label>
                            <span>
                                Engagement
                            </span>
                        </div>

                        <div className='d-flex flex-column tags_name'>
                            <label>
                                1.25
                            </label>
                            <span>
                                Engagement
                            </span>
                        </div>

                        <div className='d-flex tags_name'>
                            <button className='btn'>
                                <img style={{ width: '30px' }} src={require('../../../Imagez/Dashboard/All/solar_like-outline.png')} />
                            </button>

                            <button className='btn'>
                                <img style={{ width: '30px' }} src={require('../../../Imagez/Dashboard/All/solar_dislike-linear.png')} />
                            </button>
                        </div>

                    </div>


                </div>

                <div className='camp_footer'>
                    <button className='continue_btn back_btn btnz' style={{ "border": "1px solid grey" }} onClick={() => { setListName('Budget & Targeting') }}>
                        Back
                    </button>

                    <button className='continue_btn btnz ms-2' onClick={() => { setListName('Finished') }}>
                        Submit & Review
                    </button>
                </div>
            </>
        )
    }

    function Finish() {
        return (
            <>
                <div className='w-100    d-flex justify-content-center align-items-center' style={{ "paddingBottom": "8rem", "marginTop": "4rem" }}>

                    <div className='camp_fin   d-flex flex-column justify-content-center align-items-center'>
                        <i class='bx bx-check-circle' style={{ "fontSize": "80px", "color": "#c83b93" }}></i>
                        <p style={{ "fontSize": "24px", "fontWeight": "700" }} className='text-center my-3'>Thanks for getting in touch! A member of our A-team will be<br />contacting you within the next 12 hours.</p>
                        <button className='p-3 px-5' style={{ "color": "white", "border": "none", "background": "#c83b93", "borderRadius": "10px", "fontSize": "18px", "fontWeight": "600" }} onClick={GoToDash}>Take me to dashboard</button>
                    </div>
                </div>



            </>
        )
    }

    return (
        <div className='row'>


            <div className='d-flex camp_header'>
                <div className='campaign_head ps-3' >
                    <i class="fa fa-arrow-left" style={{ color: '#C83B93' }} aria-hidden="true"></i>
                    <label style={{ marginLeft: '20px' }}>
                        Post New Campaign
                    </label>
                </div>

            </div>

            <div className={(listName == "Profile Screener") || (listName == "Finished") ? 'col-sm-12' : "col-sm-8"} style={{ "backgroundColor": "#fff" }}>
                <div>
                    <div className='steps_section'>
                        <img src={listName == 'Campaign info' ? require('../../../Imagez/Dashboard/All/step_icon.png') : require('../../../Imagez/Dashboard/All/step_icon2.png')} style={{ width: '20px', height: '20px' }} />
                        <label className='steps_label'>

                            {
                                listName == "Finished"
                                    ?
                                    "Budget & Targeting"
                                    :
                                    "Campaign info"
                            }
                        </label>

                        <hr class="new4" />

                        <img src={listName == 'Budget & Targeting' ? require('../../../Imagez/Dashboard/All/step_icon.png') : require('../../../Imagez/Dashboard/All/step_icon2.png')} style={{ width: '20px', height: '20px' }} />
                        <label className='steps_label'>

                            {
                                listName == "Finished"
                                    ?
                                    "Profile Screener"
                                    :
                                    "Budget & Targeting"
                            }

                        </label>

                        <hr class="new4" />

                        <img src={(listName == 'Profile Screener') || (listName == 'Finished') ? require('../../../Imagez/Dashboard/All/step_icon.png') : require('../../../Imagez/Dashboard/All/step_icon2.png')} style={{ width: '20px', height: '20px' }} />
                        <label className='steps_label'>
                            {
                                listName == "Finished"
                                    ?
                                    "Finished"
                                    :
                                    "Profile Screener"
                            }
                        </label>
                    </div>
                </div>



                {
                    listName == 'Campaign info'
                        ?
                        CampInfo()
                        :
                        listName == 'Budget & Targeting'
                            ?
                            Budget()
                            :
                            listName == 'Profile Screener'
                                ?
                                Profile_screen()
                                :
                                Finish()
                }

            </div>

            {
                (listName == "Profile Screener") || (listName == "Finished")
                    ?
                    null
                    :
                    <div className='col-sm-4'>
                        <div className='camp_sidebox'>
                            <label><b>Influencer Definition</b></label>
                            <label>Your influencer definition is  <b>NA</b></label>

                            <div>
                                <div className='d-flex justify-content-between mt-4'>
                                    <img src={require('../../../Imagez/Dashboard/All/def3.png')} style={{ width: '70px' }} />
                                    <img src={require('../../../Imagez/Dashboard/All/def1.png')} style={{ width: '70px' }} />
                                    <img src={require('../../../Imagez/Dashboard/All/def2.png')} style={{ width: '70px' }} />
                                </div>

                                <div className='d-flex justify-content-between mb-4'>
                                    <div>
                                        <label style={{ color: '#555555', fontSize: '14px' }}>Blood</label>
                                    </div>

                                    <div>
                                        <label style={{ color: '#555555', fontSize: '14px' }}>Narrow</label>
                                    </div>
                                </div>

                                <div className='def_note'>
                                    <p>
                                        For best results, keep the influencer definition in green zone!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='camp_sidebox'>
                            <label><b>Creator & Budget Definition</b></label>

                            <div>
                                <div className='d-flex justify-content-between'>
                                    <p className='def_details'>
                                        The creator & budget definitions will be populated once you start entering information in the left section.
                                    </p>
                                </div>

                                <div className='def_note d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img src={require('../../../Imagez/Dashboard/All/ph_users.png')} style={{ width: '20px', height: '20px' }} />
                                        <p style={{ marginLeft: '10px' }}>
                                            Followers Reach : NA
                                        </p>
                                    </div>

                                    <div>
                                        <img src={require('../../../Imagez/Dashboard/All/icon-park-outline_info.png')} style={{ width: '20px', height: '20px' }} />
                                    </div>
                                </div>

                                <div className='def_note d-flex justify-content-between'>
                                    <div className='d-flex'>
                                        <img src={require('../../../Imagez/Dashboard/All/ph_users.png')} style={{ width: '20px', height: '20px' }} />
                                        <p style={{ marginLeft: '10px' }}>
                                            Estimated Reach : NA
                                        </p>
                                    </div>

                                    <div>
                                        <img src={require('../../../Imagez/Dashboard/All/icon-park-outline_info.png')} style={{ width: '20px', height: '20px' }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }


        </div>
    )
}
