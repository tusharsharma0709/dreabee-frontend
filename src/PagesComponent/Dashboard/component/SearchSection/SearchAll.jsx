import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const SearchAll = () => {
    const navigate = useNavigate();
    const [idTing, setIdTing] = useState([]);
    const [sugg, setSugg] = useState([]);
    const [openDrops, setOpenDrops] = useState(false);
    const [openDrop, setDrop] = useState(false);
    const [selected, setSelelcted] = useState('Youtube');
    const [searchNow, setSearchNow] = useState(false);
    const [ting, setTing] = useState();
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            GoFor();
        }
    };
    const Reccom = () => {
        setSearchNow(true);
        axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/auto-suggest`, {
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


    return (
        <>
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
                                                    <img src={require('../../../../Imagez/Dashboard/All/iconamoon_search-light_selected.png')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                    <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >     Influencers mentioning
                                                        <text style={{ fontWeight: "800", color: "#C83B93", "cursor": "pointer", }} onClick={() => { GoFor(); }}>  "{ting}"  </text>
                                                        in their posts </h5>
                                                </section>

                                                <section className=' me-5'>
                                                    {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                    &nbsp; <img src={require('../../../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp;
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
                                                        <img src={require('../../../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
                                                    </section>
                                                </div>
                                            </section>
                                            {/* +++++++++++++++++++++++ */}
                                            {/* +++++++++++++++++++++++ */}

                                            <section>
                                                <div className='d-flex align-items-center justify-content-between hoverpe'>

                                                    <section className='d-flex align-items-center'>
                                                        <img src={require('../../../../Imagez/Common/TayTay.jpg')} width={30} height={30} style={{ "border": "1px solid black", borderRadius: "50%" }} /> &nbsp; &nbsp;
                                                        <h5 className='pt-1' style={{ "fontSize": "16px", "fontWeight": "700" }} >Disha Patani </h5> &nbsp; &nbsp;
                                                        <h6 className='text-secondary pt-2' style={{ "fontSize": "14px", "fontweigh": "600" }}>🐮@dishapatani21</h6>
                                                    </section>

                                                    <section className=' me-5'>
                                                        {/* <button className='btnz'><i class="fa-solid fa-arrow-trend-up p-1" style={{"border" :"1px solid black", borderRadius: "50%" }}></i></button> */}
                                                        <img src={require('../../../../Imagez/Common/Redirect.png')} width={40} height={40} /> &nbsp; &nbsp;
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
                                    <section className='mt-1' style={{ "height": "0px", "width": "0px", position: "relative" }}>

                                        <ul className='dropDownz bg-light mt- px' style={{ width: "275px", right: "0px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}>
                                            <li>
                                                <button className='dropDownz btn hoverpe' onClick={() => { setSelelcted('Youtube'); setOpenDrops(false); }}>
                                                    <img src={require('../../../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png')} /> &nbsp;
                                                    Youtube
                                                </button>
                                            </li>

                                            <li style={{ border: "none" }}>
                                                <button className='dropDownz btn hoverpe' onClick={() => { setOpenDrops(false); setSelelcted('Instagram'); }}>
                                                    <img src={require('../../../../Imagez/Dashboard/All/mdi_instagram.png')} /> &nbsp;
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
        </>
    )
}

export default SearchAll