import React, { useEffect, useRef, useState } from "react";
import Invite from "../../../../Imagez/Dashboard/All/Invite.png";
import icon from "../../../../Imagez/Dashboard/All/icon1.png";
import icon2 from "../../../../Imagez/Dashboard/All/icon2.png";
import insta from "../../../../Imagez/Dashboard/All/Insta.png";
import Linee from "../../../../Imagez/Dashboard/All/Line.png";
import listIcon from "../../../../Imagez/Dashboard/All/list.svg";
import eyeIcon from "../../../../Imagez/Dashboard/All/ei_rounded-eye.svg";
import userIcon from "../../../../Imagez/Dashboard/All/user_icon.svg";
import { baseUrl } from "../../../../Routez/Routey";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { useInView } from "react-intersection-observer";

const PlanzHome = () => {
  const [planShow, setPlanShow] = useState(false);
  const [listShow, setListShow] = useState(false);
  const navigate = useNavigate();

  const NewPlan = () => {
    setPlanShow(true);
    // setListShow(true)
  };

  const GoNext = () => {
    navigate("/Dreabee/Dashboard/ChoosingFromDb");
  };
  const Cross = () => {
    // document.getElementById("overlay").style.display = "none";
    setPlanShow(false);
    setListShow(false);
  };
  const Glow = () => {
    document.getElementById("tada").style.color = "aqua";
  };

  const GlowEnd = () => {
    document.getElementById("tada").style.color = "white";
  };

  const PlanAll = () => {
    navigate("/Dreabee/Dashboard/Plans")
  }



  useEffect(() => {
    ApiAll();
  }, [])



  const [plan1, setPlan1] = useState();
  const [date1, setDate1] = useState();


  const [plan2, setPlan2] = useState();
  const [brand2, setBrand2] = useState();
  const [date2, setDate2] = useState();
  // const [plan1id, setPlan1Id] = useState();
  // const [plan2id, setPlan2Id] = useState();
  const [ids, setIds] = useState();
  const [allPlan, setAllPlan] = useState();



  const ApiAll = () => {
    axios.get(`${baseUrl}api/Brands/getPLan`)
      .then((res) => {

        setPlan1(res.data[0].PlanName);
        setDate1(res.data[0].CreatedAt)

        setPlan2(res.data[1].PlanName);
        setBrand2(res.data[1].Brand_name);
        setDate2(res.data[1].CreatedAt)





        // console.log("here all plan  data 2:", res.data[0])
        // console.log("here all campaign  data  :", res.data)
        // console.log("here all campaign  data 1 :", res.data[0]._id)
        // console.log("here all campaign  data 2 :", res.data[1]._id)


        // setCamp1(res.data[0].CreatorPreferences[0].CampaignDetail[0].CampaignName)
        // setCamp1Id(res.data[0]._id)

        // setCamp2(res.data[1].CreatorPreferences[0].CampaignDetail[0].CampaignName)
        // setCamp2Id(res.data[1]._id)

      }).catch((error) =>
        console.log("the all data error - ", error));
  }




  const textRef = useRef(null);
  // REFFF 
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when at least 50% of the element is in view
    // delay: 2000
  });
  // REFFF 1
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when at least 50% of the element is in view
  
  });
  // REFFF 2
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when at least 50% of the element is in view
  });

  return (
    <>
      {planShow ? (
        <>
          <div
            id="overlay"
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              zIndex: "2",
              paddingLeft: "30rem",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundColor: "rgba(0,0,0,0.5)",
              cursor: "default",
            }}
          >
            <span className="" style={{}}>
              {/* button __ */}
              <button
                className=" "
                style={{
                  background: "none",
                  border: "none",
                  zIndex: "25",
                  position: "relative",
                  top: "11%",
                  left: "40.2rem",
                }}
                onClick={Cross}
              >
                {" "}
                <i
                  className="bx bx-x-circle bx-spin"
                  id="tada"
                  onMouseOver={Glow}
                  onMouseLeave={GlowEnd}
                  style={{ fontSize: "38px", color: "white" }}
                />{" "}
              </button>
              {/* Update Section __ */}
              <section
                style={{
                  height: "78vh",
                  width: "48vw",
                  background: "whiteSmoke",
                  zIndex: "600",
                  borderRadius: "20px",
                  position: "relative",
                  left: "-6rem",
                  top: "2rem",
                }}
              >
                <section
                  className="ps-5 "
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    paddingTop: "2rem",
                  }}
                >
                  Create Plan
                </section>
                <img
                  src={Linee}
                  alt="line"
                  style={{ width: "30rem", marginLeft: "2rem" }}
                />

                {/* form section  */}
                <section className="mt-4">
                  <div className="ms-5">
                    <div
                      style={{
                        padding: " 0 0 2px 18px",
                        color: "Black",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Name of the Plan
                    </div>
                    <input
                      type="text"
                      className=""
                      onC
                      placeholder="Plan 1"
                      style={{
                        width: "40rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                  </div>
                  <div className="ms-5 mt-4">
                    <div
                      style={{
                        padding: " 0 0 2px 18px",
                        color: "Black",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Brand{" "}
                    </div>
                    <input
                      type="text"
                      className=""
                      placeholder="Choose from the Following list"
                      style={{
                        width: "40rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                  </div>
                </section>

                {/* checkbox section  */}
                <section className="mt-5 " style={{ marginLeft: "2rem" }}>
                  <div
                    style={{
                      padding: " 0 0 2px 18px",
                      color: "#7E7E7E",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    I want to add Influencer by
                  </div>

                  <section className="ps-2 bg">
                    <div className="mt-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked
                      />
                      <label
                        className="form-check-label ps-2"
                        for="flexRadioDefault1"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        {" "}
                        Searching Influencers From Dreabee{" "}
                      </label>
                    </div>

                    <div className="mt-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id=""
                      />
                      <label
                        className="form-check-label ps-2"

                        for="flexRadioDefault2"
                        style={{ fontSize: "16px", fontWeight: "600" }}
                      >
                        {" "}
                        Adding Influencers Manually{" "}
                      </label>
                    </div>
                  </section>
                </section>

                <section className="bg mt-4">
                  <button
                    className="text-center p-2 "
                    onClick={GoNext}
                    style={{
                      width: "13rem",
                      height: "2.8rem",
                      height: "2.8rem",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#C83B93",
                      border: "none",
                      marginLeft: "30rem",
                      marginTop: "0rem",
                    }}
                  >
                    {" "}
                    Create Plan
                  </button>
                </section>
              </section>
            </span>
          </div>
        </>
      ) : null}

      {listShow ? (
        <>
          <div
            id="overlay"
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              zIndex: "2",
              paddingLeft: "30rem",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              backgroundColor: "rgba(0,0,0,0.5)",
              cursor: "default",
            }}
          >
            <span className="" style={{}}>
              {/* button __ */}
              <button
                className=" "
                style={{
                  background: "none",
                  border: "none",
                  zIndex: "25",
                  position: "relative",
                  top: "6%",
                  left: "40.2rem",
                }}
                onClick={Cross}
              >
                {" "}
                <i
                  className="bx bx-x-circle bx-spin"
                  id="tada"
                  onMouseOver={Glow}
                  onMouseLeave={GlowEnd}
                  style={{ fontSize: "38px", color: "white" }}
                />{" "}
              </button>
              {/* Update Section __ */}
              <section
                style={{
                  height: "90vh",
                  width: "48vw",
                  background: "whiteSmoke",
                  zIndex: "600",
                  borderRadius: "20px",
                  position: "relative",
                  left: "-6rem",
                  top: "0rem",
                }}
              >
                <section
                  className="ps-5 "
                  style={{
                    fontSize: "26px",
                    fontWeight: "600",
                    paddingTop: "2rem",
                  }}
                >
                  Create New List
                </section>
                <img
                  src={Linee}
                  alt="line"
                  style={{ width: "30rem", marginLeft: "2rem" }}
                />

                {/* form section  */}
                <section className="mt-4">
                  <div className="ms-5">
                    <div
                      className="mb-1"
                      style={{
                        padding: " 0 0 2px 18px",
                        color: "Black",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      List Name
                    </div>
                    <input
                      type="text"
                      className=""
                      onC
                      placeholder="Enter List Name"
                      style={{
                        width: "40rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                  </div>
                  <div className="ms-5 mt-4">
                    <div
                      className="mb-1"
                      style={{
                        padding: " 0 0 2px 18px",
                        color: "Black",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Choose the Platforms{" "}
                    </div>

                    {/* Insta  */}
                    <button
                      className="text-center p-2 me-2 "
                      style={{
                        width: "13rem",
                        height: "2.8rem",
                        height: "2.8rem",
                        fontWeight: "600",
                        fontSize: "1.05rem",
                        borderRadius: "10px",
                        color: "white",
                        backgroundColor: "#C83B93",
                        border: "none",
                        marginLeft: "0rem",
                        marginTop: "0rem",
                      }}
                    >
                      {" "}
                      Instagram
                    </button>

                    {/* Youtube  */}
                    <button
                      className="text-center p-2  "
                      style={{
                        width: "13rem",
                        height: "2.8rem",
                        height: "2.8rem",
                        fontWeight: "600",
                        fontSize: "1.05rem",
                        borderRadius: "10px",
                        color: "black",
                        backgroundColor: "white",
                        border: "1px solid #C83B93",
                        marginLeft: "0rem",
                        marginTop: "0rem",
                      }}
                    >
                      {" "}
                      Youtube
                    </button>
                  </div>

                  <div className="ms-5 mt-4">
                    <div
                      className="mb-1"
                      style={{
                        padding: " 0 0 2px 18px",
                        color: "Black",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      {" "}
                      Set Deliverables{" "}
                    </div>
                    <input
                      type="text"
                      className=""
                      onC
                      placeholder="Set Deliverables"
                      style={{
                        width: "20rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                    <input
                      type="number"
                      className="mx-1"
                      onC
                      placeholder="Posts"
                      style={{
                        width: "10rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                    <input
                      type="number"
                      className=""
                      onC
                      placeholder="Costs"
                      style={{
                        width: "10rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                  </div>
                </section>

                {/* checkbox section  */}
                <section className="mt-5 " style={{ marginLeft: "2rem" }}>
                  {/* <div style={{ "padding": " 0 0 2px 18px", "color": "#7E7E7E", "fontSize": "14px", "fontWeight": "600" }}> I want to add Influencer by</div> */}

                  <section className="ps-2 bg mx-2">
                    <div
                      className="bg-"
                      style={{
                        width: "96%",
                        height: "5rem",
                        background: "#c83b9258",
                      }}
                    >
                      <section
                        className="p-3  text-dark"
                        style={{ fontSize: "16px", lineHeight: "22px" }}
                      >
                        Setting Deliverables for your plan allows you to reach
                        out to the influencers to get the cost and get access to
                        metrics like Estimated Video Views, CPE, and CPV.
                      </section>
                    </div>
                  </section>
                </section>

                {/* Bottom buttom and text  */}
                <section className="bg- mt-4">
                  <span
                    className="ps-5"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      position: "relative",
                      top: "1.4rem",
                    }}
                  >
                    * Deliverables, Posts & Costs will be applied to all the
                    profiles in the list
                  </span>

                  <button
                    className="text-center p-2  "
                    style={{
                      width: "10rem",
                      height: "2.8rem",
                      height: "2.8rem",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#C83B93",
                      border: "none",
                      marginLeft: "34rem",
                      marginTop: "-1rem",
                    }}
                  >
                    {" "}
                    Create Lists
                  </button>
                </section>
              </section>
            </span>
          </div>
        </>
      ) : null}

      <div className="mt-5 campaign-wrap">
        <div className="row">
          <div className="col-12 col-lg-9 col-md-9 text-center mt-2">
            {" "}
            <h5 style={{ marginLeft: "15rem", fontWeight: "700" }}>
              PLANS (2){" "}
            </h5>{" "}
          </div>

          <div className="col-12 col-lg-3 col-md-3">
            <div className="d-flex justify-content-end me-2">
              <button
                onClick={GoNext}
                className="align-items-center d-flex p-2 btnz"
                style={{
                  width: "10rem",
                  fontWeight: "600",
                  fontSize: "1.05rem",
                  borderRadius: "10px",
                  color: "white",
                  backgroundColor: "#C83B93",
                  border: "none",
                  marginLeft: "4rem",
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
                <span className="ms-4"> New Plan </span>
              </button>
            </div>
          </div>
        </div>

        {/* card design old */}
        {/* <div
            className="row  d-flex justify-content-evenly align-items-center mt-2"
            style={{ height: "20rem" }}
          >
            <div className="col-4 bg-  justify-content-evenly align-items-center">
              <div
                className="bg-"
                style={{
                  background: "white",
                  border: "1px solid #C83B93",
                  height: "14rem",
                  width: "30rem",
                  borderRadius: "10px",
                  filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                }}
              >
                <div
                  className="row justify-content-around pt-3"
                  style={{ height: "4rem" }}
                >
                  <div className="col-8 ">
                    <img src={icon} alt="icon1" style={{ width: "2rem" }} />{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      PLAN 1
                    </span>
                    <hr style={{ opacity: "0.1" }} />
                  </div>
                  <div className="col-2 ps-4">
                    <i
                      className="bx bx-user-plus p-1 "
                      style={{
                        color: "#C83B93",
                        border: "1px solid #C83B93 ",
                        fontWeight: "700",
                        fontSize: "18px",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </div>
                </div>

                <div
                  className="row text-center ps-2 "
                  style={{ height: "6rem", paddingTop: "1.8rem" }}
                >
                  <div className="col">
                    <div style={{ fontWeight: "700", fontSize: "16px" }}>1</div>
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#7E7E7E",
                      }}
                    >
                      List
                    </div>
                  </div>
                  <div className="col">
                    <div style={{ fontWeight: "700", fontSize: "16px" }}>0</div>
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#7E7E7E",
                      }}
                    >
                      Influencers
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-12  d-flex justify-content-evenly align-items-center "
                    style={{
                      background: "#C83B93",
                      height: "3.5rem",
                      width: "95.5%",
                      marginLeft: "0.7rem",
                      borderRadius: "0 0 10px 10px",
                      position: "relative",
                      top: "8px",
                    }}
                  >
                    <div className="row w-100 d-flex justify-content-evenly">
                      <div className="col-8">
                        <span
                          style={{
                            fontWeight: "700",
                            fontSize: "16px",
                            color: "white",
                          }}
                        >
                          Created on Jun 28,2023
                        </span>
                      </div>
                      <div className="col-2">
                        <button
                          className="px-3 ms-3 "
                          style={{
                            height: "1.8rem",
                            fontSize: "10px",
                            border: "none",
                            backgroundColor: "transparent",
                            borderRadius: "10px",
                          }}
                        >
                          {" "}
                          <img
                            src={icon3}
                            alt="icon1"
                            style={{ width: "1.6rem" }}
                          />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-4   justify-content-evenly align-items-center">
              <div
                className="bg-"
                style={{
                  background: "white",
                  border: "1px solid #C83B93",
                  height: "14rem",
                  width: "30rem",
                  borderRadius: "10px",
                  filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                }}
              >
                <div
                  className="row justify-content-around pt-3"
                  style={{ height: "4rem" }}
                >
                  <div className="col-8 ">
                    <img src={icon2} alt="icon1" style={{ width: "2rem" }} />{" "}
                    <span style={{ fontSize: "16px", fontWeight: "700" }}>
                      PLAN 2
                    </span>
                    <hr style={{ opacity: "0.1" }} />
                  </div>
                  <div className="col-2 ps-4">
                    <i
                      className="bx bx-right-arrow-alt p-1 "
                      style={{
                        color: "#C83B93",
                        border: "1px solid #C83B93 ",
                        fontWeight: "700",
                        fontSize: "18px",
                        borderRadius: "50%",
                      }}
                    ></i>
                  </div>
                </div>

                <div
                  className="row text-center ps-2 "
                  style={{ height: "6rem", paddingTop: "1.8rem" }}
                >
                  <div className="col">
                    <div style={{ fontWeight: "700", fontSize: "16px" }}>1</div>
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#7E7E7E",
                      }}
                    >
                      List
                    </div>
                  </div>
                  <div className="col">
                    <div style={{ fontWeight: "700", fontSize: "16px" }}>
                      15
                    </div>
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#7E7E7E",
                      }}
                    >
                      Influencers
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div
                    className="col-12  d-flex justify-content-evenly align-items-center "
                    style={{
                      background: "#C83B93",
                      height: "3.5rem",
                      width: "95.5%",
                      marginLeft: "0.7rem",
                      borderRadius: "0 0 10px 10px",
                      position: "relative",
                      top: "8px",
                    }}
                  >
                    <div className="row w-100 d-flex justify-content-evenly">
                      <div className="col-8">
                        <span
                          style={{
                            fontWeight: "700",
                            fontSize: "16px",
                            color: "white",
                          }}
                        >
                          Created on Jun 28,2023
                        </span>
                      </div>
                      <div className="col-2">
                        <button
                          className="px-3 ms-2"
                          style={{
                            height: "1.8rem",
                            fontSize: "10px",
                            border: "none",
                            backgroundColor: "transparent",
                            borderRadius: "10px",
                          }}
                        >
                          {" "}
                          <img
                            src={icon3}
                            alt="icon3"
                            style={{ width: "1.6rem" }}
                          />{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-2   justify-content-evenly align-items-center">
              <div
                className=""
                style={{
                  background: "whitesmoke",
                  border: "1px solid #C83B93",
                  height: "14rem",
                  width: "10rem",
                  filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                  borderRadius: "10px",
                }}
              >
                <div className="row h-100 ">
                  <div className="col-12 d-flex justify-content-center align-items-center">
                    <span style={{ fontWeight: "700", fontSize: "16px" }}>
                      {" "}
                      View All
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        <div className="row mt-4 px-4 pb-4 ">
          {/* card 1 design */}
          <div className="col-12 col-lg-5 col-md-5 ">
            <div className={`fade-in-text ${inView ? 'fade-in Kardz ' : 'Kardz '}`} ref={ref}
              style={{
                background: "white",
                borderRadius: "10px",
                filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                height: "233px",
                position: "relative",
              }}
            >
              <div className="d-flex justify-content-between align-items-center w-100 pt-3 px-3">
                <div className="d-flex align-items-center">
                  <img
                    src={listIcon}
                    alt="icon1"
                    style={{ width: "2rem", marginRight: "0.5rem" }}
                  />{" "}

                  <span style={{ fontSize: "18px", fontWeight: "700" }}>
                    {plan1}
                  </span>




                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="text-center p-2 me-3 btnz"
                    style={{
                      fontWeight: "600",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#C83B93",
                      border: "none",
                      fontSize: "15px",
                    }}
                  >
                    <img
                      src={userIcon}
                      alt="add"
                      style={{
                        width: "30px",
                      }}
                    />{" "}
                    &nbsp;
                    <span className="mt-3">Add Influencer</span>
                  </button>
                  <div>
                    <img src={eyeIcon} alt="pensil" style={{ width: "45px" }} />
                  </div>
                </div>
              </div>

              <div
                className="row text-center ps-2 px-1 justify-content-center"
                style={{ height: "6rem", paddingTop: "1.8rem" }}
              >
                <div className="col-3">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>1</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    List
                  </div>
                </div>
                <div className="col-3">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>0</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    Influencers
                  </div>
                </div>
              </div>

              <div
                style={{ position: "absolute", bottom: "0px", width: "100%" }}
              >
                <div className="d-flex justify-content-evenly align-items-center ">
                  <div
                    className="w-100 px-3 py-3 px-1 d-flex align-items-center justify-content-between"
                    style={{
                      background: "#000",
                      borderRadius: "0 0 0.4rem 0.4rem",
                    }}
                  >
                    <div className="">
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "white",
                        }}
                      >
                        {/* Created on Jun 28,2023 */}

                        Created on  {dayjs(date1).format("DD-MM-YYYY ")}
                      </span>
                    </div>
                    <div className="">
                      <img src={insta} alt="insta" style={{ width: "2rem" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 2 design */}
          <div className="col-12 col-lg-5 col-md-5">
            <div className={`fade-in-text ${inView1 ? 'fade-in Kardz ' : 'Kardz '}`} ref={ref1}
              style={{
                background: "white",
                borderRadius: "10px",
                filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                height: "233px",
                position: "relative",
              }}
            >
              <div className="d-flex justify-content-between align-items-center w-100 pt-3 px-3">
                <div className="d-flex align-items-center">
                  <img
                    src={listIcon}
                    alt="icon1"
                    style={{ width: "2rem", marginRight: "0.5rem" }}
                  />{" "}
                  <div>
                    <span style={{ fontSize: "18px", fontWeight: "700" }}>
                      {plan2}
                    </span>
                    <p className="mb-0">{brand2}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="text-center p-2 me-3 btnz"
                    style={{
                      fontWeight: "600",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#C83B93",
                      border: "none",
                      fontSize: "15px",
                    }}
                  >
                    <img
                      src={userIcon}
                      alt="add"
                      style={{
                        width: "30px",
                      }}
                    />{" "}
                    &nbsp;
                    <span className="mt-3">Add Influencer</span>
                  </button>
                  <div>
                    <img src={eyeIcon} alt="pensil" style={{ width: "45px" }} />
                  </div>
                </div>
              </div>

              <div
                className="row text-center ps-2 px-1 justify-content-center"
                style={{ height: "6rem", paddingTop: "1.8rem" }}
              >
                <div className="col-3">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>1</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    List
                  </div>
                </div>
                <div className="col-3">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>15</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    Influencers
                  </div>
                </div>
              </div>

              <div
                style={{ position: "absolute", bottom: "0px", width: "100%" }}
              >
                <div className="d-flex justify-content-evenly align-items-center ">
                  <div
                    className="w-100 px-3 py-3 px-1 d-flex align-items-center justify-content-between"
                    style={{
                      background: "#000",
                      borderRadius: "0 0 0.4rem 0.4rem",
                    }}
                  >
                    <div className="">
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "white",
                        }}
                      >
                        {/* Created on Jun 28,2023 */}

                        Created on  {dayjs(2).format("DD-MM-YYYY ")}
                      </span>
                    </div>
                    <div className="">
                      <img src={insta} alt="insta" style={{ width: "2rem" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 3 design */}
          <div className="col-12 col-lg-2 col-md-2 Hovly"
            onClick={PlanAll}
            style={{
              cursor: "pointer", "border": "1px solid  #00000010 "
            }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                View All
              </h3>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default PlanzHome;
