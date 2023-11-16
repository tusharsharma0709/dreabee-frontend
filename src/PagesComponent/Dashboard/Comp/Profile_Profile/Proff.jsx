import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Invite from "../../../../Imagez/Dashboard/Iconz/AddToList-Pink.png";
import Costz from "../../../../Imagez/Dashboard/Iconz/Cost-gray.png";
import Contactz from "../../../../Imagez/Dashboard/Iconz/Contact-gray.png";



import profiler from "../../../../Imagez/Dashboard/All/Profile.png";
import GRaph from "../../../../Imagez/Dashboard/All/Pie Chart.png";
import Pepsi from "../../../../Imagez/Dashboard/All/Pepsico.png";
import ProfileSumm from "./ProfileSumm";
import { Link } from "react-router-dom";
import ProfilerRou from "../../../../Routez/ProfilerRou";
import axios from "axios";
import { baseUrl2 } from "../../../../Routez/Routey";
const Proff = ({ }) => {
  const location = useLocation();

  // const [influencerData, setInfluencerData] = useState([]);
  const [showOpz, setShowOpz] = useState(false)
  const [profileDataY, setProfileDataY] = useState([]);
  const [profileDataI, setProfileDataI] = useState([]);
  const [ming, setMing] = useState();
  useEffect(() => {
    // console.log("the location state from the profile is  : ", location.state)
    ProfileDetailsY();
    setMing(localStorage.getItem("UserName"))
    // console.log("the one any oiny : ", localStorage.getItem("UserName"))

    setTimeout(() => {
      ProfileDetailsI();
      // console.log("the ratatatat descroiption", profileDataI?.description)
    }, 4000);
  }, []);








  // YOUTUBE 
  const ProfileDetailsY = () => {
    // console.log("the youtube end ", location.state.keyWord)
    axios.post(`${baseUrl2}/youtube/profile-details`, {
      name: localStorage.getItem("UserName")
    }).then((res) => {
      // console.log("THE YOUTUBER API PROFILE DATA -", res.data)
      setProfileDataY(res.data)

      const inputString = res.data.cid;
      const match = inputString.match(/YT:(\S+)/);
      if (match) {
        const extractedValue = match[1];
        // console.log("The Channel Id", extractedValue);
        localStorage.setItem("channelId", extractedValue);
      } else {
        console.log("No match found");
      }

      console.log("proff Yooutube- > ", res.data)
      // localStorage.setItem("channelId", handled);
      // localStorage.setItem("videoId", handled);
    }).catch((err) => {
      console.log("the profile utube page errorr - ", err)
    })
  }


  // INSTAGRAM 
  const ProfileDetailsI = () => {
    // console.log("the insta end ", location.state.keyWord)
    axios.post(`${baseUrl2}/instagram/profile-details`, {
      name: localStorage.getItem("UserName")
    }).then((res) => {
      // console.log("THE Instagram API PROFILE DATA -", res.data)
      setProfileDataI(res.data)
    }).catch((err) => {
      console.log("the profile insta page errorr - ", err)
    })
  }





  const flag1 = () => {
    document.getElementById("icon1").style.color = "#C83B93";
    document.getElementById("txt1").style.color = "#C83B93";

    document.getElementById("icon2").style.color = "black";
    document.getElementById("txt2").style.color = "black";
    document.getElementById("icon3").style.color = "black";
    document.getElementById("txt3").style.color = "black";
  };
  const flag2 = () => {
    document.getElementById("icon2").style.color = "#C83B93";
    document.getElementById("txt2").style.color = "#C83B93";

    document.getElementById("icon1").style.color = "black";
    document.getElementById("txt1").style.color = "black";
    document.getElementById("icon3").style.color = "black";
    document.getElementById("txt3").style.color = "black";
  };
  const flag3 = () => {
    document.getElementById("icon3").style.color = "#C83B93";
    document.getElementById("txt3").style.color = "#C83B93";

    document.getElementById("icon1").style.color = "black";
    document.getElementById("txt1").style.color = "black";
    document.getElementById("icon2").style.color = "black";
    document.getElementById("txt2").style.color = "black";
  };


  // const desc = profileDataY?.description.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|")
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div
            className="col StickTop "
            style={{
              background: "white",
              borderRadius: " 10px",
              // border: "1px solid black",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.3)",
              height: "210px",
              width: "84rem",
            }}
          >
            {/* ROW ! - PROFILE ONLY  */}
            <div className="row bg-">
              {/* IMAGES  */}
              <div className="col-2 bg- mt-3 text-center   ps-4">
                {/* <img src={influencerData?.image} alt="profiler" style={{ width: "8rem" }} /> */}
                <img src={profileDataY?.image} alt="profiler" width={150} className="border border-3 border-info" style={{ borderRadius: "50%", border: "1px solid #c83b93" }} />
                {/* <img src={require("../../../../Imagez/Common/Rock.jpg")} alt="profiler" width={135} style={{ borderRadius: "50%", border: "1px solid #c83b93" }} /> */}
              </div>

              {/* TEXTS */}
              <div className="col-5 p-2 pt-4 mt-2 bg- d-flex flex-column ">
                <div className="" style={{ fontSize: "14px", fontWeight: "600" }}>
                  <h5 className="pt" style={{ fontWeight: "700", fontSize: "24px" }}>
                    {/* Valmakry */}
                    {/* {influencerData?.name} */}
                    {/* therock  */}
                    {profileDataY?.name}

                    &nbsp;
                  </h5>
                  {/* console.log("tuetuUEIYRYUWEYHUFHKUWDFHKJSDHFJKHKFHSKHKUHFS: ", data.suggestedTags); */}








                  {/* <span className="py-1 me-2 px-2" style={{ fontWeight: "600", fontSize: "14px", background: "#F5F5F5", borderRadius: " 5px", textTransform: "capitalize" }}> {profileDataY?.suggestedTags[0]}  </span> */}
                  {/* <span className="py-1 me-2 px-2" style={{ fontWeight: "600", fontSize: "14px", background: "#F5F5F5", borderRadius: " 5px", textTransform: "capitalize" }}> {profileDataY?.suggestedTags[1]}  </span> */}
                  {/* <span className="py-1 me-2 px-2" style={{ fontWeight: "600", fontSize: "14px", background: "#F5F5F5", borderRadius: " 5px", textTransform: "capitalize" }}> {profileDataY?.suggestedTags[2]}  </span> */}


                  {/* <section style={{ lineHeight: "25px", textTransform: "capitalize" }}> */}
                  {/* 💭Creator of @valkyat comics 🚗 Exploring with @kyatgirl & @boandarro_  */}
                  {/* {profileDataI?.description} */}
                  {/* <br /> */}
                  {/* {profileDataY?.tags}  |      {profileDataY?.tags[1]}  |      {profileDataY?.tags[2]}|      {profileDataY?.tags[3]} |      {profileDataY?.tags[4]} */}
                  {/* ☀️ Travel  | Photography  | Auto| Tech | Vegan 🌱 . 🏡... */}
                  {/* </section> */}


                  <section className="my-2" style={{ lineHeight: "25px", textTransform: "capitalize" }}>
                    {" "}
                    {/* <i className="bx bx-current-location"></i> */}
                    <i class="fa-solid fa-location-dot"></i>
                    &nbsp;
                    {profileDataY?.country} -- &nbsp;   {profileDataY?.city} --
                  </section>
                </div>


                {/* ROW 2 - SOCIAL  HANDELS  */}
                <div className="row bg- d-flex ms-5  pt-3 justify-content-start "
                  style={{ marginTop: "0rem", marginBottom: "3rem", height: "4rem", }} >
                  {/* <div className="col-2 bg-success"></div> */}

                  {/* Button 1  */}
                  <div className="col-4 bg-  text-start">
                    <Link to="Summary">
                      {" "}
                      <button
                        onClick={flag1}
                        style={{ background: "transparent", border: "none" }}
                      >
                        <i class='bx bx-user'
                          id="icon1"
                          style={{
                            fontSize: "26px",
                            fontWeight: "600",
                            color: "#C83B93",
                          }}
                        ></i>
                        <section
                          className=""
                          id="txt1"
                          style={{
                            marginTop: "2px",
                            fontWeight: "600",
                            color: "#C83B93",
                          }}
                        >
                          Profile Summary
                        </section>
                      </button>{" "}
                    </Link>
                  </div>

                  {/* Button 2  */}
                  <div className="col-4  text-start">
                    <Link to="Instagram">
                      {" "}
                      <button
                        onClick={flag2}
                        style={{ background: "transparent", border: "none" }}
                      >
                        <i class='bx bxl-instagram'
                          id="icon2"
                          style={{ fontSize: "28px", fontWeight: "600" }}
                        ></i>

                        <section id="txt2" style={{ fontWeight: "600" }}>
                          {/* {influencerData?.Instagram_detail[0]?.Instagram_username} */}
                          {/* @therock */}
                          @{profileDataI?.screenName}
                        </section>
                      </button>
                    </Link>
                  </div>

                  {/* Button 3 */}
                  <div className="col-4  text-start">
                    <Link to="Youtube">
                      {" "}
                      <button
                        onClick={flag3}
                        style={{ background: "transparent", border: "none" }}
                      >
                        <i
                          className="bx bxl-youtube"
                          id="icon3"
                          style={{ fontSize: "30px", fontWeight: "600", color: "" }}
                        ></i>

                        <section id="txt3" style={{ fontWeight: "600", color: "" }}>
                          {/* @{influencerData?.Youtube_detail[0]?.youtube_username } */}
                          {profileDataY?.screenName}
                          {/* @therock */}
                        </section>
                      </button>
                    </Link>
                  </div>
                  {/* <div className='col-6 bg-info'>hi</div> */}
                </div>
              </div>

              {/* BUTTONS  */}
              <div className="col-5 bg- pt-4  bg- ">
                <div className="row bg-">
                  <div className="col-4">
                    {/* <button
                      className="text-center p-1  "
                      style={{
                        width: "8.2rem",
                        height: "2.5rem",
                        fontWeight: "600",
                        fontSize: "0.8rem",
                        borderRadius: "10px",
                        color: "#C83B93",
                        backgroundColor: "white",
                        border: "2px solid #C83B93",
                        marginLeft: "0rem",
                      }}
                    >
                      <img
                        src={Invite}
                        alt="add"
                        style={{
                          width: "1.8rem",
                          border: "2px solid white",
                          borderRadius: "10px",
                        }}
                      />{" "}
                      &nbsp;
                      <span style={{ position: "relative", top: "2px" }}>
                        {" "}
                        Add to List
                      </span>
                    </button> */}
                  </div>
                  <div className="col-5 text-end ms-5 ">
                    <button
                      className="text-center p-1  "
                      style={{
                        width: "8rem",
                        height: "2.5rem",
                        fontWeight: "600",
                        fontSize: "0.8rem",
                        borderRadius: "10px",
                        color: "#7E7E7E",
                        backgroundColor: "white",
                        border: "2px solid #C83B93",
                        marginLeft: "0rem",
                      }}
                    >
                      <img
                        src={Invite}
                        alt="add"
                        style={{
                          width: "1.8rem",
                          border: "2px solid white",
                          borderRadius: "10px",
                        }}
                      />{" "}
                      &nbsp;
                      <span style={{ position: "relative", top: "2px", color: "#C83B93" }}>
                        {" "}
                        Add to list{" "}
                      </span>
                    </button>
                  </div>


                  <div className="col-1 ms-2">
                    <button
                      className="text-center p-1  "
                      style={{
                        width: "38px",
                        height: "38px",
                        fontWeight: "600",
                        fontSize: "0.8rem",
                        borderRadius: "10px",
                        color: "#7E7E7E",
                        backgroundColor: "#C83B93",
                        border: "none",
                        marginLeft: "0rem",
                      }}
                      onClick={() => { setShowOpz(!showOpz) }}

                    >

                      {
                        showOpz ?
                          <i class="fa-solid fa-xmark" style={{ color: "white" }}></i>
                          :
                          <i class='bx bx-dots-vertical-rounded' style={{ color: "white" }}></i>

                      }

                    </button>


                    {
                      showOpz ?
                        <section className="mt-3" style={{ height: "0px", position: "relative", "right": "10rem" }}>
                          <div className="bg-  row" style={{ height: "100px", width: "100px" }} >
                            <div className="col-lg">
                              <button
                                className="text-start p-1 px-3  "
                                style={{
                                  width: "8rem",
                                  height: "2.5rem",
                                  fontWeight: "600",
                                  fontSize: "0.8rem",
                                  borderRadius: "10px",
                                  color: "#7E7E7E",
                                  backgroundColor: "white",
                                  border: "2px solid #C83B93",
                                  marginLeft: "0rem",
                                }}
                              >
                                <img
                                  src={Contactz}
                                  alt="add"
                                  style={{
                                    width: "1.8rem",
                                    border: "2px solid white",
                                    borderRadius: "10px",
                                  }}
                                />{" "}
                                &nbsp;
                                <span style={{ position: "relative", top: "2px", color: "#C83B93" }}>
                                  {" "}
                                  Contacts{" "}
                                </span>
                              </button>





                            </div>
                            <div className="col-lg">
                              <button
                                className="text-start px-3 p-1  "
                                style={{
                                  width: "8rem",
                                  height: "2.5rem",
                                  fontWeight: "600",
                                  fontSize: "0.8rem",
                                  borderRadius: "10px",
                                  color: "#7E7E7E",
                                  backgroundColor: "white",
                                  border: "2px solid #C83B93",
                                  marginLeft: "0rem",
                                }}
                              >
                                <img
                                  src={Costz}
                                  alt="add"
                                  style={{
                                    width: "1.8rem",
                                    border: "2px solid white",
                                    borderRadius: "10px",
                                  }}
                                />


                                {" "}


                                &nbsp;
                                <span style={{ position: "relative", top: "2px", color: "#C83B93" }}>
                                  {" "}
                                  Cost{" "}
                                </span>
                              </button>
                            </div>
                          </div>
                        </section>
                        :
                        null
                    }


                  </div>
                </div>
              </div>
            </div>



          </div>

          {/* _________________________________________________ */}

          {/* <ProfileSumm /> */}
          <ProfilerRou
            influencerData={profileDataY}
          />
        </div>
      </div>


    </>

  );
};

export default Proff;
