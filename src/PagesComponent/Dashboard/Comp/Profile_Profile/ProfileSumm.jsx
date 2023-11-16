import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import profiler from "../../../../Imagez/Dashboard/All/Profile.png";
import GRaph from "../../../../Imagez/Dashboard/All/Pie Chart.png";
import Pepsi from "../../../../Imagez/Dashboard/All/Pepsico.png";
import '../../../../Styles/Slyider.css';
import axios from "axios";
import numeral from "numeral";
import { baseUrl2 } from "../../../../Routez/Routey";
const ProfileSumm = () => {
  let location = useLocation();
  // console.log("----location----", location.state.keyWord);

  // const [influencerData, setInfluencerData] = useState([]);
  useEffect(() => {
    // setInfluencerData(location?.state?.userData[0]);
  }, []);
  // scroll to section/ change the color on click ___________________
  const flag1 = () => {
    // console.log("---influencerData?.Instagram_detail[0]?.Instagram_username", influencerData?.Instagram_detail[0]?.Instagram_username)
    document.getElementById("sec1").scrollIntoView({ behavior: "smooth" });
    document.getElementById("icoon1").style.color = "#C83B93";
    document.getElementById("txxt1").style.color = "#C83B93";

    document.getElementById("icoon2").style.color = "black";
    document.getElementById("txxt2").style.color = "black";
    document.getElementById("icoon3").style.color = "black";
    document.getElementById("txxt3").style.color = "black";
  };
  const flag2 = () => {
    document.getElementById("sec2").scrollIntoView({ behavior: "smooth" });
    document.getElementById("icoon2").style.color = "#C83B93";
    document.getElementById("txxt2").style.color = "#C83B93";

    document.getElementById("icoon1").style.color = "black";
    document.getElementById("txxt1").style.color = "black";
    document.getElementById("icoon3").style.color = "black";
    document.getElementById("txxt3").style.color = "black";
  };
  const flag3 = () => {
    document.getElementById("sec3").scrollIntoView({ behavior: "smooth" });
    document.getElementById("icoon3").style.color = "#C83B93";
    document.getElementById("txxt3").style.color = "#C83B93";

    document.getElementById("icoon1").style.color = "black";
    document.getElementById("txxt1").style.color = "black";
    document.getElementById("icoon2").style.color = "black";
    document.getElementById("txxt2").style.color = "black";
  };
  // scroll to section/ change the color on click ___________________


  const [planModal, setplanModal] = useState(false);
  const [blow, setBlow] = useState(false);

  const [allDetails, setAllDetails] = useState([]);
  const toggleSlide = () => {
    setBlow(!blow);
  };

  useEffect(() => {
    ProfileDetails();
    ProfileDetailsI();
  }, [])

  const [profileDataY, setProfileDataY] = useState([]);

  // YOUTUBE 
  const ProfileDetails = () => {
    // console.log("the end ",location.state.keyWord)
    axios.post(`${baseUrl2}/youtube/profile-details`, {
      name: localStorage.getItem("UserName")

    }).then((res) => {
      console.log("the values", res.data)
      setProfileDataY(res.data)
    }).catch((err) => {
      console.log("the utube channel api error - ", err)
    })
  }


  const [profileDataI, setProfileDataI] = useState([]);
  // INSTAGRAM 
  const ProfileDetailsI = () => {
    // console.log("the insta end ", location.state.keyWord)
    axios.post(`${baseUrl2}/instagram/profile-details`, {
      name: localStorage.getItem("UserName")
    }).then((res) => {
      console.log("THE Instagram API PROFILE DATA -", res.data)
      setProfileDataI(res.data)
    }).catch((err) => {
      console.log("the profile insta page errorr - ", err)
    })
  }



  return (
    <>
      <div className="row">
        {/* Left NAvbar  */}
        <div className="col-2 Kardz  StickSide" style={{ borderRadius: "" }}>
          <ul className="nav-list" style={{ listStyleType: "none" }}>
            <li
              className=" ms-3"
              onClick={flag1}
              style={{ marginTop: "6.5rem", cursor: "pointer" }}
            >
              <i
                className="bx bxs-shapes"
                id="icoon1"
                style={{
                  fontWeight: "700",
                  fontSize: "26px",
                  color: "#C83B93",
                }}
              ></i>{" "}
              &nbsp;{" "}


              <span id="txxt1" className="navHovTextNoBg " style={{ fontSize: "18px", fontWeight: "700", color: "#C83B93", }}>
                Platforms
              </span>
            </li>

            <li
              className="mt-4 ms-3"
              onClick={flag2}
              style={{ marginTop: "", cursor: "pointer" }}
            >
              <i
                className="bx bx-layer"
                id="icoon2"
                style={{ fontWeight: "700", fontSize: "26px", color: "" }}
              ></i>{" "}
              &nbsp;{" "}
              <span
                id="txxt2"
                className="navHovTextNoBg"
                style={{ fontSize: "18px", fontWeight: "700", color: "" }}
              >
                Contents
              </span>
            </li>
            <li
              className="mt-4 ms-3"
              onClick={flag3}
              style={{ marginTop: "", cursor: "pointer" }}
            >
              <i
                className="bx bx-star "
                id="icoon3"
                style={{ fontWeight: "700", fontSize: "26px", color: "" }}
              ></i>{" "}
              &nbsp;{" "}
              <span
                id="txxt3"
                className="navHovTextNoBg"
                style={{ fontSize: "18px", fontWeight: "700", color: "" }}
              >
                Brands
              </span>
            </li>
          </ul>
        </div>

        {/* Right SEcTion  */}
        <div
          className="col-10 bg-"
          style={{
            border: "0px solid black",
            height: "66vh",
            position: "fixed",
            top: "15rem",
            left: "24.5rem",
            width: "67.5rem",
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          <div className="bg-" style={{ height: "200vh", width: "100%" }}>
            {/* SECTION 1  */}
            <div className="row mt-2 p-2" id="sec1">
              {/* Card 1  */}
              <div
                className=" mx-2 KardzProf"
                style={{
                  backgroundColor: "white",
                  width: "32rem ",
                  height: "11rem",
                  borderRadius: "10px",
                }}
              >
                {/* ABOVE ROW  */}
                <div className="row  mt-4">
                  <div className="col-6 ">
                    <i
                      className="bx bxl-instagram-alt"
                      style={{ fontSize: "28px", fontWeight: "600" }}
                    ></i>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                        position: "relative",
                        bottom: "7px",
                      }}>

                      @{profileDataI?.screenName}

                    </span>
                  </div>
                  <div className="col-6  text-end">
                    <i
                      className="bx bxs-message-rounded ms-3"
                      style={{
                        fontSize: "24px",
                        position: "relative",
                        top: "5px",
                      }}
                    ></i>{" "}
                    &nbsp;
                    {((profileDataI?.qualityScore) * 10).toFixed(0)}
                  </div>
                </div>
                {/* BOTTOM ROW  */}
                <div className="row bg mt-4">

                  {/* Follwoers  */}
                  <div className="col text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Followers
                    </section>
                    <section>
                      {(numeral(profileDataI?.usersCount).format('0.0a'))}
                      {/* {profileDataI?.usersCount} */}
                    </section>
                  </div>


                  {/* Avg Likes  */}
                  <div className="col-2 text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Avg Likes
                    </section>
                    <section>
                      {(numeral(profileDataI?.avgLikes).format('0.0a'))}
                      {/* {profileDataI?.avgLikes} */}

                    </section>
                  </div>


                  {/* Avg Comments */}
                  <div className="col-3 text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Avg Comments
                    </section>
                    <section>
                      {(numeral(profileDataI?.avgVideoComments).format('0.0a'))} %
                      {/* {profileDataI?.avgVideoComments} */}
                    </section>
                  </div>


                  {/* Avg Reels Views */}
                  <div className="col-3 text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Avg Reel Views
                    </section>
                    <section>
                      {(numeral(profileDataI?.avgVideoViews).format('0.0a'))}
                      {/* {profileDataI?.avgVideoViews} */}
                    </section>
                  </div>


                  {/* ER  */}
                  <div className="col text-center ">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      ER{" "}
                      <i
                        className="bx bx-info-circle"
                        style={{ position: "relative", top: "1px" }}
                      ></i>
                    </section>
                    <section>
                      {((profileDataI?.avgER) * 100).toFixed(2)}%
                      {/* {profileDataI?.avgER} */}
                    </section>
                  </div>

                </div>
              </div>

              {/* Card 2  */}
              <div
                className="KardzProf mx-2"
                style={{
                  width: "32rem ",
                  height: "11rem",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
              >
                {/* ABOVE ROW  */}
                <div className="row bg- mt-4">
                  <div className="col-6 bg-">
                    <i
                      className="bx bxl-youtube"
                      style={{ fontSize: "28px", fontWeight: "600" }}
                    ></i>{" "}
                    <span
                      style={{
                        fontWeight: "600",
                        position: "relative",
                        bottom: "7px",
                      }}
                    >
                      {/* @{influencerData?.Instagram_detail[0]?.Instagram_username} */}
                      {profileDataY?.screenName}
                    </span>
                  </div>
                  <div className="col-6 bg- text-end">
                    <i
                      className="bx bxs-message-rounded ms-3"
                      style={{
                        fontSize: "24px",
                        position: "relative",
                        top: "5px",
                      }}
                    ></i>{" "}
                    &nbsp;

                    {((profileDataY?.qualityScore) * 10).toFixed(0)}
                    {/* {profileDataY?.qualityScore} */}
                  </div>
                </div>


                {/* BOTTOM ROW  */}
                <div className="row bg- mt-4">
                  {/* Subscribers  */}
                  <div className="col text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Subscribers
                    </section>
                    <section>
                      {(numeral(profileDataY?.usersCount).format('0.0a'))}
                      {/* {profileDataY?.usersCount} */}
                    </section>
                  </div>

                  {/* Total Videos  */}
                  <div className="col-2 text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Total Video
                    </section>
                    <section>xx</section>
                  </div>


                  {/* Avg Likes */}
                  <div className="col text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Avg Likes
                    </section>
                    <section>
                      {(numeral(profileDataY?.avgLikes).format('0.0a'))}
                      {/* {profileDataY?.avgLikes} */}
                    </section>
                  </div>


                  {/* Avg Comments */}
                  <div className="col-3 text-center">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Avg Comments
                    </section>
                    <section>
                      {(numeral(profileDataY?.avgVideoComments).format('0.0a'))}
                      {/* {profileDataY?.avgVideoComments} */}
                    </section>
                  </div>


                  {/* Avg Videos Views */}
                  <div className="col-3 text-center ">
                    <section
                      style={{
                        fontSize: "14px",
                        fontWeight: "600",
                        marginBottom: "0.8rem",
                      }}
                    >
                      Avg Videos Views
                    </section>
                    <section>
                      {/* {profileDataY?.avgVideoViews} */}
                      {(numeral(profileDataY?.avgVideoViews).format('0.0a'))}
                    </section>
                  </div>


                </div>
              </div>
            </div>

            {/* SECTION 2  */}
            <div className="row mt-5 p-2" id="sec2">
              {/* Card 1  */}
              <div
                className="KardzProf mx-2"
                style={{
                  width: "65rem ",
                  height: "30rem",
                  borderRadius: "10px",
                  background: "white",
                }}
              >
                {/* ABOVE ROW  */}
                <div className="row bg- mt-4">
                  <div className="col-12 bg-">
                    <i
                      className="  bx bx-layer"
                      style={{
                        fontSize: "28px",
                        fontWeight: "600",
                        marginLeft: "2rem",
                      }}
                    ></i>
                    <span style={{ fontWeight: "700", fontSize: "24px" }}>
                      Content
                    </span>
                  </div>
                </div>
                {/* BOTTOM ROW  */}
                <div className="row bg- mt-4">
                  {/* LEFT SIDE  */}
                  <div className="col-4">
                    <img
                      src={GRaph}
                      alt="img"
                      className="ms-3"
                      style={{ width: "20rem" }}
                    />
                  </div>

                  {/* RIGHT SIDE  */}
                  <div className="col-8">
                    <div className="row">
                      <div className="col">
                        <ul
                          className="ms-2"
                          style={{
                            listStyle: "none",
                            fontSize: "18px",
                            fontWeight: "700",
                          }}
                        >
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            ✈ Travel
                          </li>
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            🎨 Art & Entertainment
                          </li>
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            🦾 Fitness
                          </li>
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            🦾 Health & Fitness
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul
                          className="ms-2"
                          style={{
                            listStyle: "none",
                            fontSize: "18px",
                            fontWeight: "700",
                          }}
                        >
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            👚 Fashion
                          </li>
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            👪 Family & Parenting
                          </li>
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            🎓 Education
                          </li>
                          <li style={{ marginTop: "", marginBottom: "3.2rem" }}>
                            Others
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3  */}
            <div className="row mt-5 p-2" id="sec3">
              {/* Card 1  */}
              <div
                className="KardzProf mx-2"
                style={{
                  width: "65rem ",
                  height: "30rem",
                  borderRadius: "10px",
                  background: "white",
                }}
              >
                {/* ABOVE ROW  */}
                <div className="row bg- mt-5">
                  <div className="col-12 bg-">
                    <i
                      className="bx bx-star"
                      style={{
                        fontWeight: "700",
                        fontSize: "26px",
                        marginLeft: "2rem",
                      }}
                    ></i>{" "}
                    &nbsp;{" "}
                    <span
                      className=""
                      style={{ fontWeight: "700", fontSize: "24px" }}
                    >
                      Brands
                    </span>
                    {/* <i class='bx bxl-instagram-alt' style={{ "fontSize": "28px", "fontWeight": "600" }} ></i>
            <span style={{ "fontWeight": "700", "fontSize": "24px" }}>Content</span> */}
                  </div>
                </div>
                {/* BOTTOM ROW  */}
                <div className="row bg- mt-4">
                  <div className="col d-flex">
                    <span
                      style={{
                        paddingLeft: "1rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#C83B93",
                      }}
                    >
                      All
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      Automobile
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      Device
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      Telecommunication
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      Watches And Eyewear
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      Non-Alcoholic Beverages
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      E-Commerce
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      FMCG
                    </span>
                    <span
                      style={{
                        paddingLeft: "2rem",
                        fontSize: "13.5px",
                        fontWeight: "600",
                        color: "#7E7E7E",
                      }}
                    >
                      Applications
                    </span>
                    {/* <span style={{"paddingLeft":"2rem"}} >hi10</span> */}
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div
                      className="bg  d-flex justify-content-evenly p-1 py-3 mt-5"
                      style={{ width: "100%", backgroundColor: "#F8F5FF" }}
                    >
                      <section
                        className="bg text-center  ms-2 p-2"
                        style={{
                          backgroundColor: "whitesmoke",
                          boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                          height: "12rem",
                          width: "12rem",
                        }}
                      >
                        <span
                          style={{ fontSize: "14px", paddingBottom: "2px" }}
                        >
                          {" "}
                          <u>15 Posts </u>{" "}
                        </span>
                        <section>
                          {" "}
                          <img
                            src={Pepsi}
                            alt="img"
                            style={{ width: "7rem" }}
                          ></img>{" "}
                        </section>
                        <section>Pepsi</section>
                        <section style={{ fontSize: "12px" }}>@Pepsi</section>
                      </section>
                      <section
                        className="bg text-center  p-2"
                        style={{
                          backgroundColor: "whitesmoke",
                          boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                          height: "12rem",
                          width: "12rem",
                        }}
                      >
                        <span
                          style={{ fontSize: "14px", paddingBottom: "2px" }}
                        >
                          {" "}
                          <u>15 Posts </u>{" "}
                        </span>
                        <section>
                          {" "}
                          <img
                            src={Pepsi}
                            alt="img"
                            style={{ width: "7rem" }}
                          ></img>{" "}
                        </section>
                        <section>Pepsi</section>
                        <section style={{ fontSize: "12px" }}>@Pepsi</section>
                      </section>
                      <section
                        className="bg text-center  p-2"
                        style={{
                          backgroundColor: "whitesmoke",
                          boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                          height: "12rem",
                          width: "12rem",
                        }}
                      >
                        <span
                          style={{ fontSize: "14px", paddingBottom: "2px" }}
                        >
                          {" "}
                          <u>15 Posts </u>{" "}
                        </span>
                        <section>
                          {" "}
                          <img
                            src={Pepsi}
                            alt="img"
                            style={{ width: "7rem" }}
                          ></img>{" "}
                        </section>
                        <section>Pepsi</section>
                        <section style={{ fontSize: "12px" }}>@Pepsi</section>
                      </section>
                      <section
                        className="bg text-center  p-2"
                        style={{
                          backgroundColor: "whitesmoke",
                          boxShadow: " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
                          height: "12rem",
                          width: "12rem",
                        }}
                      >
                        <span
                          style={{ fontSize: "14px", paddingBottom: "2px" }}
                        >
                          {" "}
                          <u>15 Posts </u>{" "}
                        </span>
                        <section>
                          {" "}
                          <img
                            src={Pepsi}
                            alt="img"
                            style={{ width: "7rem" }}
                          ></img>{" "}
                        </section>
                        <section>Pepsi</section>
                        <section style={{ fontSize: "12px" }}>@Pepsi</section>
                      </section>
                      {/* <section className='bg text-center mx-1 p-2' style={{ "backgroundColor": "whitesmoke", "boxShadow": " 0px 5px 30px 0px rgba(0, 0, 0, 0.10)", "height": "12rem", "width": "12rem" }}>
                <span style={{ "fontSize": "14px", "paddingBottom": "2px" }}> <u>15 Posts </u> </span>
                <section>   <img src={Pepsi} alt='img' style={{ "width": "7rem" }}></img>  </section>
                <section>Pepsi</section>
                <section style={{ "fontSize": "12px" }}>@Pepsi</section>
              </section> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
};

export default ProfileSumm;
