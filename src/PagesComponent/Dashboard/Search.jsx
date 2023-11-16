import React, { useEffect, useState } from 'react'
import Social_dropdown from './component/social-dropdown'
import Category from './component/Category'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import inss from "../../Imagez/Dashboard/All/mdi_instagram.png";
import { getRequest, postRequest } from "../../config/apiClient";
import Urls from "../../config/url";
import { baseUrl2 } from '../../Routez/Routey';
import pik1 from "../../Imagez/Dashboard/All/mdi_approve.png";
import pik2 from "../../Imagez/Dashboard/All/image 39.png";
import pik3 from "../../Imagez/Dashboard/All/mdi_instagram.png";
import pik4 from "../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png";
import { FadeLoader } from 'react-spinners';
import { Button } from 'react-bootstrap-v5';

export default function Search() {





    const [contentCategories, setContentCategories] = useState([]);
    const [now, setNow] = useState(false);
    const [dropNow, setDropNow] = useState(false);
    const [valueInput, setValueInput] = useState("");
    const [nameHandel, setNameHandel] = useState("Instagram");
    const [inviteTeammates, setInviteTeammates] = useState(false);
    const [categoriesList, setCategoriesList] = useState([]);
    const [showTalktoExpert, setShowTalktoExpert] = useState(false);

    const navigate = useNavigate();


    const influencersList = [
        { title: "Dwayne Johnson", value: "Dwaynejohnson" },
        { title: "Dipika Padukon", value: "dipikapadukon" },
        { title: "Alia Bhatt", value: "aliabhatt" },
        { title: "King", value: "king" },
        { title: "Badshah", value: "badshah" },
        { title: "Priyanka Chopara", value: "priyankachopara" },
    ];
    const handleRemoveTag = (index) => {
        const updatedItems = [...contentCategories];
        updatedItems.splice(index, 1); // Remove one element at the specified index
        setContentCategories(updatedItems);
    };
    const handleOnSearch = async (isFromUser, item) => {
        try {
            let rawData = {
                handleName: nameHandel,
                categories: contentCategories,
                username: "",
                name: isFromUser === true ? item.title : valueInput,
                tags: "",
                gender: "",
                socialType: "",
                country: "",
            };

            let response = await postRequest(Urls.SEARCH_INFLUENCER, rawData);

            if (response) {
                if (isFromUser === true && response !== "No Record found!") {
                    navigate("/Dreabee/Dashboard/Profile", {
                        state: { userData: response },
                    });
                } else if (response !== "No Record found!") {
                    navigate("/Dreabee/Dashboard/ChoosingFromDb", {
                        // state: { userData: response },
                        state: { handleName: nameHandel, categories: contentCategories, name: valueInput },
                    });
                } else {
                    swal("oops!", "No Record found!", "danger");
                }
            }
        } catch (error) {
            // console.error("Error while making the API call:", error);
            // swal("Nooo!", "Check console", "danger");
        }
    };
    const dropIt = () => {
        setDropNow(!dropNow);
    };

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            // Add the item to the array if it's checked
            setContentCategories([...contentCategories, value]);
        } else {
            // Remove the item from the array if it's unchecked
            setContentCategories(contentCategories.filter((item) => item !== value));
        }
    };



    // const slicedData = sugg.slice(0, 5);
    // const [sugg1, setSugg1] = useState();
    // const [sugg2, setSugg2] = useState();
    // const [sugg3, setSugg3] = useState();
    // const [sugg4, setSugg4] = useState();
    // const [sugg5, setSugg5] = useState();
    // const [sugg6, setSugg6] = useState();
    // const [sugg7, setSugg7] = useState();
    // const [sugg8, setSugg8] = useState();




    // SEARCH SECTIONS ESSENTIALS START

    const [sugg, setSugg] = useState([]);
    const [openDrops, setOpenDrops] = useState(false);
    const [openDrop, setDrop] = useState(false);
    const [selected, setSelelcted] = useState('Youtube');
    const [searchNow, setSearchNow] = useState(false);
    const [ting, setTing] = useState();
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            GoFor();
            // Perform the action you want when Enter is pressed, e.g., submit a form
            // alert(`Enter key pressed with value: hehe`);x    
            // You can replace the alert with your custom action here.
        }
    };
    const Reccom = () => {
        setSearchNow(true);
        axios.post(`${baseUrl2}/youtube/auto-suggest`, {
            keyword: ting
        }).then((res) => {
            // console.log("serarch  data: ", res.data);
            setSugg(res.data.video.items)
            // setSugg1(res.data.video.items[0]);
            // setSugg2(res.data.video.items[1]);
            // setSugg3(res.data.video.items[2]);
            // setSugg4(res.data.video.items[3]);
            // setSugg5(res.data.video.items[4]);
            // setSugg6(res.data.video.items[5]);
            // setSugg7(res.data.video.items[6]);
            // setSugg8(res.data.video.items[7]);

            // console.log("1 : ", sugg1);
            // console.log("2 : ", sugg2);
            // console.log("3 : ", sugg3);
            // console.log("4 : ", sugg4);
            // console.log("5 : ", sugg5);
            // console.log("6 : ", sugg6);
            // console.log("7 : ", sugg7);
            // console.log("8 : ", sugg8);
        }).catch((error) =>
            console.log("the search suggestion error - ", error));
    }



    const GoFor = () => {
        {
            ting
                ?
                Choosy()
                :
                swal("Search field is Empty", "🔍", "warning");
        }
    }
    const Choosy = () => {
        if (selected !== "Youtube") {
            setTimeout(() => {
                OpenInsta();
            }, 2000);

        } else {

            setTimeout(() => {
                // IdGettinY();
                OpenYoutube();
            }, 2000);

        }
    }
    const OpenYoutube = () => {

        // alert("hoho reached to end did it work as planned", idTing)
        {
            ting
                ?
                // navigate("/Dreabee/Dashboard/search-youtube", { state: { Ting: ting, Idz: idTing } })
                navigate("/Dreabee/Dashboard/search-youtube", { state: { tag: ting, Idz: idTing } })
                :
                // alert("LOADING")
                console.log("there is no thing in the entry")
        }
    }
    const OpenInsta = () => {
        navigate("/Dreabee/Dashboard/search-instagram", { state: { tag: ting } })
    }




    // SEARCH SECTIONS ESSENTIALS ENDS









    // const SearchNow = (event) => {
    //     const value = event.target.value;
    //     setTing(value);
    // }


    // const Yutyou = () => {
    //     navigate("/Dreabee/Dashboard/search-youtube", { state: { Ting: ting } })
    // }
    // const Insta = () => {
    //     navigate("/Dreabee/Dashboard/search-instagram", { state: { Ting: ting } })
    // }




    useEffect(() => {
        // AllApis();
        Entertainment();


        setTimeout(() => {
            console.log("BOM BOM BO BOM ARRRAYYYAyy: ", ent1)
        }, 20000);



    }, [])

    const AllApis = () => {

        // setTimeout(() => {
        //     Entertainment();
        // }, 500);


        setTimeout(() => {

            Fitness();
        }, 2000);





        // setTimeout(() => {
        //     Beauty();
        // }, 3000);


        // setTimeout(() => {
        //     Fashion();
        // }, 5000);


        // setTimeout(() => {
        //     Education();
        // }, 7000);


        // setTimeout(() => {
        //     Family();
        // }, 9000);


        // setTimeout(() => {
        //     Travel();
        // }, 11000);
    }

    // DROPDOWN SOCIAL MEDIA CARDS FILTERING 
    const [arrow, setArrow] = useState(true);
    const [platformz, setPlatformz] = useState(false);
    const [selected1, setSelelcted1] = useState('youtube');


    // 1
    const [ent, setEnt] = useState("");
    const [ent1, setEnt1] = useState();



    const [entImg, setEntImg] = useState("");
    const [entImg2, setEntImg2] = useState("");
    const Entertainment = () => {
        // axios.post(`{baseUrl2}/${selected1}/hashtag`, {
        axios.post(`${baseUrl2}/youtube/hashtag`, {
            hashtag: "entertainment"
        }).then((res) => {
            console.log("THE ENTERTAINEMNET DATA : - ", res.data)
            console.log("THE ENTERTAINEMNET DATA VIDEO COUNT : - ", res.data.videoCount)
            console.log("THE ENTERTAINEMNET DATA VIDEO COUNT : - ", res.data.videoList[0].snippet.thumbnails.default.url)




            const paidData = res.data.videoList;
            console.log("boom boom  starts", paidData)


            const paidArray = paidData.slice(0, 15).map(item => (item.snippet.thumbnails.default.url));
            console.log("boom boom  ends", paidArray)
            setEnt1(paidArray);



            setEnt(res.data);



            // const parts = (res.data.count).split("•");
            // const afterDot = parts[1] ? parts[1].trim() : "";
            // const indexOfChannels = afterDot.indexOf("channels");
            // const EntNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";

            // console.log("Entertainemnt data: ", res.data.data[2].image_url);
            // console.log("Entertainemnt data: ", res.data.data[3].image_url);
            // setEntImg(res.data.data[0].image_url)
            // setEntImg2(res.data.data[1].image_url)
        }).catch((error) =>
            console.log("the Entertainemnt error - ", error));
    }


    // 2
    const [fitness, setFitness] = useState("");
    const [fitmage, setFitmage] = useState([]);
    const [fitImg, setFitImg] = useState("");
    const [fitImg2, setFitImg2] = useState("");
    const Fitness = () => {
        // axios.post(`{baseUrl2}/${selected1}/hashtag`, {
        axios.post(`${baseUrl2}/youtube/hashtag`, {
            hashtag: "fitness"
        }).then((res) => {

            // const parts = (res.data.count).split("•");
            // const afterDot = parts[1] ? parts[1].trim() : "";
            // const indexOfChannels = afterDot.indexOf("channels");
            // const TrimedNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";


            console.log("FITNESS DATA : -", res.data)
            // console.log("Fitness data: ", res.data.count);
            // console.log("Fitness data: ", res.data.data);

            // setFitness(TrimedNo);
            // setFitmage(res.data.data)
            // setFitImg(res.data.data[0].image_url)
            // setFitImg2(res.data.data[1].image_url)

        })
            .catch((err) => {
                console.log("the Fitness error - ", err)
            })
    }


    // 3
    const [beauty, setBeauty] = useState("");
    const [beautyImage, setBeautyImage] = useState([]);
    const [beautyImg, setBeautyImg] = useState("");
    const [beautyImg2, setBeautyImg2] = useState("");
    const Beauty = () => {
        axios.post(`${baseUrl2}/youtube/hashtag`, {
            hashtag: "beauty"
        }).then((res) => {

            const parts = (res.data.count).split("•");
            const afterDot = parts[1] ? parts[1].trim() : "";
            const indexOfChannels = afterDot.indexOf("channels");
            const TrimedNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";


            // console.log(res.data)
            // console.log("Beauty data: ", res.data.count);
            // console.log("Beauty data: ", res.data.data);

            setBeauty(TrimedNo);
            // setFitmage(res.data.data)
            setBeautyImg(res.data.data[0].image_url)
            setBeautyImg2(res.data.data[1].image_url)

        })
            .catch((err) => {
                console.log("the Beauty error - ", err)
            })
    }


    // 4
    const [fashion, setFashion] = useState("");
    const [fashionImage, setFashionImage] = useState([]);
    const [fashionImg, setFashionImg] = useState("");
    const [fashionImg2, setFashionImg2] = useState("");
    const Fashion = () => {
        axios.post(`${baseUrl2}/youtube/hashtag`, {
            hashtag: "fashion"
        }).then((res) => {

            const parts = (res.data.count).split("•");
            const afterDot = parts[1] ? parts[1].trim() : "";
            const indexOfChannels = afterDot.indexOf("channels");
            const TrimedNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";


            // console.log(res.data)
            // console.log("Beauty data: ", res.data.count);
            // console.log("Beauty data: ", res.data.data);

            setFashion(TrimedNo);
            // setFitmage(res.data.data)
            setFashionImg(res.data.data[0].image_url)
            setFashionImg2(res.data.data[1].image_url)

        })
            .catch((err) => {
                console.log("the Beauty error - ", err)
            })
    }


    // 5
    const [edu, setEdu] = useState("");
    const [eduImage, setEduImage] = useState([]);
    const [eduImg, setEduImg] = useState("");
    const [eduImg2, setEduImg2] = useState("");
    const Education = () => {
        axios.post(`${baseUrl2}/youtube/hashtag`, {
            hashtag: "education"
        }).then((res) => {

            const parts = (res.data.count).split("•");
            const afterDot = parts[1] ? parts[1].trim() : "";
            const indexOfChannels = afterDot.indexOf("channels");
            const TrimedNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";


            // console.log(res.data)
            // console.log("Beauty data: ", res.data.count);
            // console.log("Beauty data: ", res.data.data);

            setEdu(TrimedNo);
            // setFitmage(res.data.data)
            setEduImg(res.data.data[0].image_url)
            setEduImg2(res.data.data[1].image_url)

        })
            .catch((err) => {
                console.log("the Beauty error - ", err)
            })
    }


    // 6
    const [family, setFamily] = useState("");
    const [familyImage, setFamilyImage] = useState([]);
    const [familyImg, setFamilyImg] = useState("");
    const [familyImg2, setFamilyImg2] = useState("");
    const Family = () => {
        axios.post(`${baseUrl2}/youtube/hashtag`, {
            hashtag: "family"
        }).then((res) => {

            const parts = (res.data.count).split("•");
            const afterDot = parts[1] ? parts[1].trim() : "";
            const indexOfChannels = afterDot.indexOf("channels");
            const TrimedNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";


            // console.log(res.data)
            // console.log("Beauty data: ", res.data.count);
            // console.log("Beauty data: ", res.data.data);

            setFamily(TrimedNo);
            // setFitmage(res.data.data)
            setFamilyImg(res.data.data[0].image_url)
            setFamilyImg2(res.data.data[1].image_url)

        })
            .catch((err) => {
                console.log("the Beauty error - ", err)
            })
    }


    // 7
    const [travel, setTravel] = useState("");
    const [travelImage, setTravelImage] = useState([]);
    const [travelImg, setTravelImg] = useState("");
    const [travelImg2, setTravelImg2] = useState("");
    const Travel = () => {
        axios.post(`${baseUrl2}/youtube/hashtag`, {
            hashtag: "travel"
        }).then((res) => {

            const parts = (res.data.count).split("•");
            const afterDot = parts[1] ? parts[1].trim() : "";
            const indexOfChannels = afterDot.indexOf("channels");
            const TrimedNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";


            // console.log(res.data)
            // console.log("Beauty data: ", res.data.count);
            // console.log("Beauty data: ", res.data.data);

            setTravel(TrimedNo);
            // setFitmage(res.data.data)
            setTravelImg(res.data.data[0].image_url)
            setTravelImg2(res.data.data[1].image_url)

        })
            .catch((err) => {
                console.log("the Beauty error - ", err)
            })
    }





    // DROPDOWN SOCIAL MEDIA SEARCH BAR 


    const [ming, setMing] = useState("");
    const [ting2, setTing2] = useState("");
    const [idTing, setIdTing] = useState([]);

    // const navigate = useNavigate();
    // instagram send api section ----




    const ChoosyKrds = (thing) => {


        if (selected !== "Youtube") {
            navigate("/Dreabee/Dashboard/search-instagram", { state: { tag: thing } })

        } else {

            navigate("/Dreabee/Dashboard/search-youtube", { state: { tag: thing } })
        }


    }



    const imag = [
        'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
        'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
        'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
        'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
        'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
        'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
        'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
        'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',

    ]





    return (
        <div>
            <div className='search_section pt-4 '>
                <div className='d-flex' style={{ width: '80%' }}>

                    <input type="text" value={ting} onKeyPress={handleKeyPress} onChange={(e) => { setTing(e.target.value); Reccom(); }} />

                    {
                        searchNow && (ting.length != 0)
                            ?
                            <span className='' style={{ "height": "0px ", "width": "0px", "cursor": "pointer", "zIndex": 20 }}>
                                <section className='bg-light ' style={{ "minHeight": "100px", "width": "50rem", "zIndex": "20", borderRadius: "20px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" }}>

                                    <section className=" pt-2   ps-3 align-items-center d-flex justify-content-between" style={{ marginTop: "2.5rem" }} >
                                        <div
                                            style={{ fontSize: "1.125rem", fontWeight: "700", textTransform: "uppercase", color: "#7E7E7E", }} >
                                            Search Suggestions
                                        </div>
                                        <button className='' onClick={(e) => { setSearchNow(false); }}
                                            style={{ border: "none", background: "transparent", }}>
                                            <i className="bx bx-x me-2 RoundBtnz" style={{ fontSize: "28px", "borderRadius": "50%" }} ></i>
                                        </button>
                                    </section>
                                    {/* 2 - Suggestion tags  */}
                                    <section className="  d-flex flex-wrap flex-column ms" style={{ "zIndex": "20" }}>
                                        {/* <section className=" m-2 pb-2 ps-3">
                   
                                            {
                                                sugg ?

                                                    sugg.map((data, index) => {
                                                        return (
                                                            <>
                                                                <p className='Reccom1' key={index} onKeyPress={handleKeyPress} onClick={(e) => {
                                                                    setTing(data);
                                                                    setSugg(false);
                                                                
                                                                }} style={{ "fontWeight": "700" }}>
                                                                    <h6>{data}</h6> </p>
                                                            </>
                                                        );
                                                    })
                                                    :
                                                    null
                                            }

                                        </section> */}




                                        <section className=" m-2 pb-2 ps-0 pe-0">
                                            {/* slicedData.map((data, index) => { */}
                                            <div className='d-flex align-items-center justify-content-between hoverpe' style={{ "cursor": "default" }}>

                                                <section className='d-flex align-items-center'>
                                                    <img src={require('../../Imagez/Dashboard/All/iconamoon_search-light_selected.png')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                    <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >     Influencers mentioning
                                                        <text style={{ fontWeight: "800", color: "#C83B93", "cursor": "pointer", }} onClick={() => { GoFor(); }}>  "{ting}"  </text>
                                                        in their posts </h5>
                                                </section>

                                                <section className=' me-5'>
                                                    {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                    &nbsp; <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp;
                                                </section>
                                            </div>

                                        </section>

                                    </section>


                                    {/* 3 - Profile ones */}
                                    <section className="  d-flex flex-column ms-3 mb-5">
                                        <div
                                            style={{ fontSize: "1.125rem", fontWeight: "700", textTransform: "uppercase", color: "#7E7E7E", }} >
                                            Influencers Profile
                                        </div>

                                        {/* Profilezzz */}
                                        <div className='box my-2 mb-4'>

                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}






                                        </div>
                                    </section>

                                </section>
                            </span>
                            :
                            null
                    }






                    <span>
                        <button onClick={GoFor} className='p- px-4  py-2' style={{ "position": "relative", "left": "-1.5rem", "borderRadius": " 35% 0 0 35% ", "top": "-0.4rem", "background": "none", "border": "none" }}>    <i className="fa fa-search fa-lg"></i> </button>
                    </span>
                </div>

                <div style={{ width: "20%", position: "relative", left: "-2rem" }}>

                    {/* DROPDOWN SOCIAL MEDIAS SEARCH BAR  */}
                    <div>
                        <button className=' btn drop_box py-2 mx-1 ' style={{ "borderRadius": " 0 25px  25px 0" }} onClick={() => { setOpenDrops(true) }}>
                            <div style={{ display: "flex", alignItems: "center", "justifyContent": "center" }}>
                                <label>
                                    {selected}
                                </label>

                                {
                                    openDrop
                                        ?
                                        <label>
                                            <i className="fa fa-angle-up"></i>
                                        </label>
                                        :
                                        <label>
                                            <i className="fa fa-angle-down"></i>
                                        </label>

                                }
                            </div>
                        </button>

                        {
                            openDrops
                                ?

                                <>
                                    {/* <ul className='social_drop_list mt-1 px-4'>
                                    <li>
                                        <button className='social_drop btn' onClick={() => { setSelelcted('Instagram'); setOpenDrops(false); }}>
                                            <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                            Instagram
                                        </button>
                                    </li>

                                    <li>
                                        <button className='social_drop btn' onClick={() => { setSelelcted('Youtube'); setOpenDrops(false); }}>
                                            <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                            Youtube
                                        </button>
                                    </li>
                                </ul> */}



                                    <section style={{ "height": "0px", "width": "0px" }}>

                                        <ul className='dropDownz bg-light mt-1 px' style={{ width: "275px", right: "0px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                                            <li>
                                                <button className='dropDownz btn hoverpe' onClick={() => { setSelelcted('Youtube'); setOpenDrops(false); }}>
                                                    <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} /> &nbsp;
                                                    Youtube
                                                </button>
                                            </li>

                                            <li style={{ border: "none" }}>
                                                <button className='dropDownz btn hoverpe' onClick={() => { setOpenDrops(false); setSelelcted('Instagram'); }}>
                                                    <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} /> &nbsp;
                                                    Instagram
                                                </button>
                                            </li>

                                        </ul>
                                    </section>
                                </>
                                :
                                null
                        }
                    </div>



                </div>

            </div>
            <div className='mt-5'>
                {/* <section> </section> */}



                {/* filter and heading**  */}
                <label className='head_label d-flex'>

                    <div style={{ width: '60%' }}>
                        ✨ Influencer lists, curated for you!
                    </div>



                    <div className='d-flex align-items-center justify-content-end ' style={{ width: '40%' }}>
                        <div className='plan_filter'>

                            {/* DROPDOWN SOCIAL MEDIAS  CARDS*/}
                            <div className='mx-2 px-2'>
                                <button className={platformz ? 'BtnWy btn  ' : "btn  BtnBlK"} onClick={() => { setPlatformz(!platformz) }}>
                                    <div style={{ display: "flex", alignItems: "center", "justifyContent": "center" }}>
                                        <label>
                                            {
                                                selected1 !== "youtube"
                                                    ?
                                                    <>
                                                        Instagram
                                                    </>
                                                    :
                                                    <>
                                                        Youtube
                                                    </>

                                            }
                                        </label>
                                        &nbsp;
                                        &nbsp;
                                        {
                                            arrow
                                                ?
                                                <label className=' d-flex align-items-center'>
                                                    <i className="fa fa-angle-down"></i>
                                                </label>
                                                :
                                                <label className=' d-flex align-items-center'>
                                                    <i className="fa fa-angle-up"></i>
                                                </label>

                                        }
                                    </div>
                                </button>

                                {
                                    platformz
                                        ?
                                        <section style={{ "height": "0px", "width": "0px" }}>

                                            <ul className='dropDownz bg-light mt-1 px' style={{ width: "200px", right: "45px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                                                <li>
                                                    <button className='dropDownz btn hoverpe' onClick={() => { setSelelcted1('youtube'); setPlatformz(false); AllApis(); }}>
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} /> &nbsp;
                                                        Youtube
                                                    </button>
                                                </li>

                                                <li style={{ border: "none" }}>
                                                    <button className='dropDownz btn hoverpe' onClick={() => { setPlatformz(!platformz); setSelelcted1('instagram'); AllApis(); }}>
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} /> &nbsp;
                                                        Instagram
                                                    </button>
                                                </li>

                                            </ul>
                                        </section>

                                        :
                                        null
                                }
                            </div>


                            <div className='mx-3 px-1'>
                                <span style={{ "height": "0px", width: "0px" }}>
                                    <Category />
                                </span>
                            </div>
                        </div>
                    </div>

                </label>


                <div className='d-flex row me-1' style={{ flexWrap: 'wrap' }}>

                    {/* VLOGGING  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column  mt-4 mx-1 Kardz' style={{ "cursor": "pointer" }} onClick={() => {
                            setTing("vlogs");
                            setTimeout(() => {
                                ChoosyKrds("vlogs");
                            }, 1000);
                        }}
                        >
                            {
                                imag ?
                                    <section>
                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Art & Entertainment.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>


                                        <div className="row my-4">


                                            {imag.slice(0, 10).map((src, index) => (
                                                <span style={{ width: "0px" }} >
                                                    <img src={src} key={index} style={{ position: "", left: "0px" }} alt={`Image ${index}`} className="border rounded-circle border-info border-1" width={40} height={40} />
                                                </span>
                                            ))}


                                            {/* <section className='d-flex flex-row text-start mt-3 '>
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />

                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + ent.videoCount}</span>

                                        </section> */}




                                            <span style={{ width: "0px" }} >
                                                <section className="more-images rounded-circle text-light bg-dark d-flex justify-content-center align-items-center" style={{ minHeight: "40px", minWidth: "40px" }}  >
                                                    +54
                                                </section>
                                            </span>






                                        </div>


                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                VLOGGING
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>


                                    </section>

                                    :

                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }


                        </div>
                    </section>
                    {/* ENTERTAINMENT  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column  mt-4 mx-1 Kardz' style={{ "cursor": "pointer" }} onClick={() => {
                            setTing("entertainment");
                            setTimeout(() => {
                                ChoosyKrds("entertainment");
                            }, 1000);
                        }}
                        >
                            {
                                ent ?
                                    <section>
                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Art & Entertainment.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>

                                        <section className='d-flex flex-row text-start mt-3 '>
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />

                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={entImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={entImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + ent.videoCount}</span>

                                        </section>

                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                Entertainment
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>
                                    </section>

                                    :

                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }


                        </div>
                    </section>

                    {/* FITNESS  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column Kardz mt-4 mx-1' style={{ "cursor": "pointer" }}
                            onClick={() => {
                                setTing("fitness");

                                setTimeout(() => {
                                    ChoosyKrds("fitness");
                                }, 1000);
                            }}>
                            {
                                fitness ?
                                    <section className='b'>
                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Fitness.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>
                                        <section className='d-flex flex-row text-start mt-3 bg-'>
                                            <img className='bg-dark' src={fitImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            {/* <img className='bg-dark' src={fitImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={fitImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={fitImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={fitImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />

                                            <img className='bg-dark' src={fitImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={fitImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={fitImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
 */}



                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + fitness}</span>

                                        </section>
                                        {/* <img src={require('../../Imagez/Dashboard/All/search_card_img.png')} className='mt-3' width={200} /> */}

                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                Fitness
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>

                                    </section>
                                    :
                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }

                        </div>
                    </section>

                    {/* BEAUTY  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column Kardz mt-4 mx-1'
                            style={{ "cursor": "pointer" }}
                            onClick={() => {
                                setTing("beauty");
                                setTimeout(() => {
                                    ChoosyKrds("beauty");
                                }, 1000);
                            }}
                        >
                            {
                                beauty ?
                                    <section>
                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Blink.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>
                                        <section className='d-flex flex-row text-start mt-3 '>
                                            <img className='bg-dark' src={beautyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            <img className='bg-dark' src={beautyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={beautyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={beautyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={beautyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />
                                            <img className='bg-dark' src={beautyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={beautyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={beautyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + beauty}</span>

                                        </section>
                                        {/* <img src={require('../../Imagez/Dashboard/All/search_card_img.png')} className='mt-3' width={200} /> */}

                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                Beauty
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>

                                    </section>
                                    :
                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }


                        </div>
                    </section>


                    {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}


                    {/* FASHION  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column Kardz mt-4 mx-1'
                            style={{ "cursor": "pointer" }}
                            onClick={() => {
                                setTing("fashion");
                                setTimeout(() => {
                                    ChoosyKrds("fashion");
                                }, 1000);
                            }}
                        >
                            {
                                fashion ?
                                    <section>


                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Fashion.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>
                                        <section className='d-flex flex-row text-start mt-3 '>
                                            <img className='bg-dark' src={fashionImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            <img className='bg-dark' src={fashionImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={fashionImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={fashionImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={fashionImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />

                                            <img className='bg-dark' src={fashionImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={fashionImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={fashionImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + fashion}</span>

                                        </section>
                                        {/* <img src={require('../../Imagez/Dashboard/All/search_card_img.png')} className='mt-3' width={200} /> */}
                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                Fashion
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>
                                    </section>
                                    :
                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }



                        </div>


                    </section>

                    {/* EDUCATION  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column Kardz mt-4 mx-1'
                            style={{ "cursor": "pointer" }}
                            onClick={() => { setTing("education"); ChoosyKrds("education"); }}
                        >

                            {
                                edu ?
                                    <section>
                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Education.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>
                                        <section className='d-flex flex-row text-start mt-3 '>
                                            <img className='bg-dark' src={eduImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            <img className='bg-dark' src={eduImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={eduImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={eduImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={eduImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />

                                            <img className='bg-dark' src={eduImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={eduImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={eduImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + edu}</span>

                                        </section>
                                        {/* <img src={require('../../Imagez/Dashboard/All/search_card_img.png')} className='mt-3' width={200} /> */}

                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                Education
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>

                                    </section>
                                    :
                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }



                        </div>


                    </section>


                    {/* FAMILY AND PAENTING  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column Kardz mt-4 mx-1'
                            style={{ "cursor": "pointer" }}
                            onClick={() => { setTing("family "); ChoosyKrds("family"); }}
                        >


                            {
                                family ?
                                    <section>
                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Family & Parenting.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>
                                        <section className='d-flex flex-row text-start mt-3 '>
                                            <img className='bg-dark' src={familyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            <img className='bg-dark' src={familyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={familyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={familyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={familyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />

                                            <img className='bg-dark' src={familyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={familyImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={familyImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + family}</span>

                                        </section>
                                        {/* <img src={require('../../Imagez/Dashboard/All/search_card_img.png')} className='mt-3' width={200} /> */}

                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                Family & Parenting
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>

                                    </section>
                                    :
                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }




                        </div>


                    </section>


                    {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}

                    {/* TRAVEL  */}
                    <section className='col-lg-4 '>
                        <div className='w-100 search_card d-flex flex-column Kardz mt-4 mx-1'
                            style={{ "cursor": "pointer" }}
                            onClick={() => { setTing("travel"); ChoosyKrds("travel"); }}
                        >

                            {
                                travel ?
                                    <section>

                                        <label>
                                            <img alt='img' className='p-1 ' style={{ "border": "1px solid #C83B93", borderRadius: "50%" }} src={require('../../Imagez/Dashboard/All/icons/Travel.png')} /> &nbsp; Exclusive Bling Talents
                                        </label>
                                        <section className='d-flex flex-row text-start mt-3 '>
                                            <img className='bg-dark' src={travelImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua" }} alt='thumb' />
                                            <img className='bg-dark' src={travelImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-20px" }} alt='img' />
                                            <img className='bg-dark' src={travelImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-40px" }} alt='img' />
                                            <img className='bg-dark' src={travelImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-60px" }} alt='img' />
                                            <img className='bg-dark' src={travelImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-80px" }} alt='img' />

                                            <img className='bg-dark' src={travelImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-100px" }} alt='img' />
                                            <img className='bg-dark' src={travelImg} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-120px" }} alt='img' />
                                            <img className='bg-dark' src={travelImg2} width={200} height={50} style={{ "objectFit": "fit", "borderRadius": "50%", "border": "2px solid aqua", "position": "relative", left: "-140px" }} alt='img' />
                                            <span className=' p-2 d-flex justify-content-center align-items-center ' style={{ borderRadius: "50%", width: "65px", "fontWeight": "600", "fontSize": "18px", color: "white", background: "#1f1111", "position": "relative", left: "-160px" }} > {"+" + travel}</span>

                                        </section>
                                        {/* <img src={require('../../Imagez/Dashboard/All/search_card_img.png')} className='mt-3' width={200} /> */}

                                        <div className='d-flex justify-content-between align-item-center mt-5'>
                                            <span className='search_tagss'>
                                                <img className='mx-2' src={require('../../Imagez/Dashboard/All/streamline_entertainment-radio-antenna-audio-music-radio.png')} />
                                                Travel
                                            </span>

                                            <span style={{ display: 'flex', alignItems: "center" }}>
                                                {
                                                    selected1 === "youtube"
                                                        ?
                                                        <img src={require('../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} />
                                                        :
                                                        <img src={require('../../Imagez/Dashboard/All/mdi_instagram.png')} />
                                                }

                                            </span>
                                        </div>

                                    </section>
                                    :
                                    <section >
                                        <section className=' d-flex justify-content-center align-items-center' style={{ "height": "11.8rem" }} >
                                            <FadeLoader color={"#C83B93"} size={2} />
                                        </section>
                                    </section>
                            }



                        </div>


                    </section>

                    {/* ++++++++++++++++++++++++++++++++++++++++++++++ */}

                </div>
            </div>
            <div className='load_more my-5 mt-4'>
                <button className=' btnz' style={{ border: "none" }}>
                    Load More
                </button>
            </div>
        </div>
    )
}
