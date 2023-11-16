import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Invite from "../../../../Imagez/Dashboard/All/Invite.png";
// import icon3 from "../../../../Imagez/Dashboard/All/Insta.png";
// import banner1 from "../../../../Imagez/Dashboard/All/Card1.png";
// import Play from "../../../../Imagez/Dashboard/All/PLay.png";
import icon from "../../../../Imagez/Dashboard/All/icon1.png";
// import banner2 from "../../../../Imagez/Dashboard/All/Card2.png";
import eyeBlackIcon from "../../../../Imagez/Dashboard/All/eye-black.svg";
import plusIcon from "../../../../Imagez/Dashboard/All/plus-black.svg";
import chartIcon from "../../../../Imagez/Dashboard/All/line-chart.svg";
import saveIcon from "../../../../Imagez/Dashboard/All/save-file-black.svg";

const ReportzHome = () => {
  return (
    <>
      {/* new design */}
      <div className="mt-5 campaign-wrap overflow-hidden">
        <div className="row">
          <div className="col-12 col-lg-9 col-md-9 text-center mt-2">
            <h5 style={{ marginLeft: "15rem", fontWeight: "700" }}>REPORTS</h5>
          </div>

          <div className="col-12 col-lg-3 col-md-3">
            <div className="d-flex justify-content-end me-2">
              <button
                className="text-center px-3 py-2 btnz"
                style={{
                  fontWeight: "600",
                  fontSize: "1.05rem",
                  borderRadius: "10px",
                  color: "white",
                  backgroundColor: "#C83B93",
                  border: "none",
                  marginLeft: "4rem",
                }}
              >
                <span>View All</span>
              </button>
            </div>
          </div>
        </div>

        {/* slider */}
        <div className="mt-4">
          <Carousel
            touch={true}
            controls={false}
            indicators={true}
          >
            <Carousel.Item className="custom-carousel-item">
              <div className="row">
                {/* card 2 design */}
                <div className="col-12 col-lg-7 col-md-7">
                  <div
                    className="px-3 pb-3"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div className="row justify-content-around pt-2 px-1">
                      <div className="text-center">
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Analyse your brand and competitors
                        </span>
                      </div>
                    </div>

                    <div className="row text-center px-2 mt-3">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="d-flex align-items-center">
                          <div>
                            <img
                              src={eyeBlackIcon}
                              alt="eyeBlackIcon"
                              style={{ width: "2rem", marginRight: "0.5rem" }}
                            />
                          </div>
                          <h4
                            className="mb-0"
                            style={{ fontSize: "18px", fontWeight: "600" }}
                          >
                            View influencer’s post for any brand
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="d-flex align-items-center">
                          <div>
                            <img
                              src={plusIcon}
                              alt="plusIcon"
                              style={{ width: "2rem", marginRight: "0.5rem" }}
                            />
                          </div>
                          <h4
                            className="mb-0"
                            style={{ fontSize: "18px", fontWeight: "600" }}
                          >
                            Add any brand & its keywords
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/* row 2 */}
                    <div className="row text-center px-2 mt-3">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="d-flex align-items-center">
                          <div>
                            <img
                              src={chartIcon}
                              alt="eyeBlackIcon"
                              style={{ width: "2rem", marginRight: "0.5rem" }}
                            />
                          </div>
                          <h4
                            className="mb-0"
                            style={{ fontSize: "18px", fontWeight: "600" }}
                          >
                            Track influencers used by any brand
                          </h4>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="d-flex align-items-center">
                          <div>
                            <img
                              src={saveIcon}
                              alt="plusIcon"
                              style={{ width: "2rem", marginRight: "0.5rem" }}
                            />
                          </div>
                          <h4
                            className="mb-0"
                            style={{ fontSize: "18px", fontWeight: "600" }}
                          >
                            Save influencers and content ideas
                          </h4>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <div className="mt-4 d-flex justify-content-center">
                      <button
                        className="align-items-center d-flex p-2  btnz"
                        style={{
                          fontWeight: "600",
                          fontSize: "1.05rem",
                          borderRadius: "10px",
                          color: "white",
                          backgroundColor: "#C83B93",
                          border: "none",
                        }}
                      >
                        {" "}
                        <img
                          src={Invite}
                          alt="add"
                          style={{
                            width: "1.8rem",
                            border: "2px solid white",
                            borderRadius: "10px",
                          }}
                        />{" "}
                        &nbsp;Create a Report
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-5 col-md-5">
                  <div
                    className="Kardz"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div
                      className="row justify-content-around pt-3 px-1"
                      style={{}}
                    >
                      <div className="col-8">
                        <img
                          src={icon}
                          alt="icon1"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />{" "}
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Untitled
                        </span>
                      </div>
                      <div className="col-2 ps-4 " >
                        <i
                          className="bx bx-right-arrow-alt p-1  RoundBtnz"
                          style={{
                            color: "#C83B93",
                            border: "1px solid #C83B93 ",
                            fontWeight: "700",
                            fontSize: "18px",
                            borderRadius: "50%",
                            cursor: "pointer"
                          }}
                        ></i>
                      </div>
                    </div>

                    <div
                      className="row text-center ps-2 px-1"
                      style={{ height: "6rem", paddingTop: "1.8rem" }}
                    >
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Accepted Influencers
                        </div>
                      </div>
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Confirmed Influencers
                        </div>
                      </div>
                      <div className="col-3">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Posts Live
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12  d-flex justify-content-evenly align-items-center">
                        <div
                          className="w-100 py-3 px-3 d-flex align-items-center justify-content-between"
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
                              Created on Jun 28,2023
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="px-3 py-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                border: "none",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "10px",
                              }}
                            >
                              View Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="custom-carousel-item">
              <div className="row">
                {/* card 2 design */}
                <div className="col-12 col-lg-4 col-md-4">
                  <div
                    className="Kardz"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div
                      className="row justify-content-around pt-3 px-1"
                      style={{}}
                    >
                      <div className="col-8">
                        <img
                          src={icon}
                          alt="icon1"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />{" "}
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Untitled
                        </span>
                      </div>
                      <div className="col-2 ps-4">
                        <i
                          className="bx bx-right-arrow-alt p-1  RoundBtnz"
                          style={{
                            color: "#C83B93",
                            border: "1px solid #C83B93 ",
                            fontWeight: "700",
                            fontSize: "18px",
                            borderRadius: "50%",
                            cursor :"pointer"
                          }}
                        ></i>
                      </div>
                    </div>

                    <div
                      className="row text-center ps-2 px-1"
                      style={{ height: "6rem", paddingTop: "1.8rem" }}
                    >
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Accepted Influencers
                        </div>
                      </div>
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Confirmed Influencers
                        </div>
                      </div>
                      <div className="col-3">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Posts Live
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12  d-flex justify-content-evenly align-items-center">
                        <div
                          className="w-100 py-3 px-3 d-flex align-items-center justify-content-between"
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
                              Created on Jun 28,2023
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="px-3 py-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                border: "none",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "10px",
                              }}
                            >
                              View Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4">
                  <div
                    className="Kardz"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div
                      className="row justify-content-around pt-3 px-1"
                      style={{}}
                    >
                      <div className="col-8">
                        <img
                          src={icon}
                          alt="icon1"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />{" "}
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Untitled
                        </span>
                      </div>
                      <div className="col-2 ps-4">
                        <i
                          className="bx bx-right-arrow-alt p-1  RoundBtnz"
                          style={{
                            color: "#C83B93",
                            border: "1px solid #C83B93 ",
                            fontWeight: "700",
                            fontSize: "18px",
                            borderRadius: "50%",
                            cursor :"pointer"
                          }}
                        ></i>
                      </div>
                    </div>

                    <div
                      className="row text-center ps-2 px-1"
                      style={{ height: "6rem", paddingTop: "1.8rem" }}
                    >
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Accepted Influencers
                        </div>
                      </div>
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Confirmed Influencers
                        </div>
                      </div>
                      <div className="col-3">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Posts Live
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12  d-flex justify-content-evenly align-items-center">
                        <div
                          className="w-100 py-3 px-3 d-flex align-items-center justify-content-between"
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
                              Created on Jun 28,2023
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="px-3 py-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                border: "none",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "10px",
                              }}
                            >
                              View Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4">
                  <div
                    className="Kardz"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div
                      className="row justify-content-around pt-3 px-1"
                      style={{}}
                    >
                      <div className="col-8">
                        <img
                          src={icon}
                          alt="icon1"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />{" "}
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Untitled
                        </span>
                      </div>
                      <div className="col-2 ps-4">
                        <i
                          className="bx bx-right-arrow-alt p-1  RoundBtnz"
                          style={{
                            color: "#C83B93",
                            border: "1px solid #C83B93 ",
                            fontWeight: "700",
                            fontSize: "18px",
                            borderRadius: "50%",
                            cursor :"pointer"
                          }}
                        ></i>
                      </div>
                    </div>

                    <div
                      className="row text-center ps-2 px-1"
                      style={{ height: "6rem", paddingTop: "1.8rem" }}
                    >
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Accepted Influencers
                        </div>
                      </div>
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Confirmed Influencers
                        </div>
                      </div>
                      <div className="col-3">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Posts Live
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12  d-flex justify-content-evenly align-items-center">
                        <div
                          className="w-100 py-3 px-3 d-flex align-items-center justify-content-between"
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
                              Created on Jun 28,2023
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="px-3 py-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                border: "none",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "10px",
                              }}
                            >
                              View Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="custom-carousel-item">
              <div className="row">
                {/* card 2 design */}
                <div className="col-12 col-lg-4 col-md-4">
                  <div
                    className="Kardz"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div
                      className="row justify-content-around pt-3 px-1"
                      style={{}}
                    >
                      <div className="col-8">
                        <img
                          src={icon}
                          alt="icon1"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />{" "}
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Untitled
                        </span>
                      </div>
                      <div className="col-2 ps-4">
                        <i
                          className="bx bx-right-arrow-alt p-1  RoundBtnz"
                          style={{
                            color: "#C83B93",
                            border: "1px solid #C83B93 ",
                            fontWeight: "700",
                            fontSize: "18px",
                            borderRadius: "50%",
                            cursor :"pointer"
                          }}
                        ></i>
                      </div>
                    </div>

                    <div
                      className="row text-center ps-2 px-1"
                      style={{ height: "6rem", paddingTop: "1.8rem" }}
                    >
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Accepted Influencers
                        </div>
                      </div>
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Confirmed Influencers
                        </div>
                      </div>
                      <div className="col-3">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Posts Live
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12  d-flex justify-content-evenly align-items-center">
                        <div
                          className="w-100 py-3 px-3 d-flex align-items-center justify-content-between"
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
                              Created on Jun 28,2023
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="px-3 py-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                border: "none",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "10px",
                              }}
                            >
                              View Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4">

                  <div
                    className="Kardz"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div
                      className="row justify-content-around pt-3 px-1"
                      style={{}}
                    >
                      <div className="col-8">
                        <img
                          src={icon}
                          alt="icon1"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />{" "}
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Untitled
                        </span>
                      </div>
                      <div className="col-2 ps-4">
                        <i
                          className="bx bx-right-arrow-alt p-1  RoundBtnz"
                          style={{
                            color: "#C83B93",
                            border: "1px solid #C83B93 ",
                            fontWeight: "700",
                            fontSize: "18px",
                            borderRadius: "50%",
                            cursor :"pointer"
                          }}
                        ></i>
                      </div>
                    </div>

                    <div
                      className="row text-center ps-2 px-1"
                      style={{ height: "6rem", paddingTop: "1.8rem" }}
                    >
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Accepted Influencers
                        </div>
                      </div>
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Confirmed Influencers
                        </div>
                      </div>
                      <div className="col-3">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Posts Live
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12  d-flex justify-content-evenly align-items-center">
                        <div
                          className="w-100 py-3 px-3 d-flex align-items-center justify-content-between"
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
                              Created on Jun 28,2023
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="px-3 py-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                border: "none",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "10px",
                              }}
                            >
                              View Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-md-4">
                  <div
                    className="Kardz"
                    style={{
                      background: "white",
                      borderRadius: "10px",
                      filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <div
                      className="row justify-content-around pt-3 px-1"
                      style={{}}
                    >
                      <div className="col-8">
                        <img
                          src={icon}
                          alt="icon1"
                          style={{ width: "2rem", marginRight: "0.5rem" }}
                        />{" "}
                        <span style={{ fontSize: "18px", fontWeight: "700" }}>
                          Untitled
                        </span>
                      </div>
                      <div className="col-2 ps-4">
                        <i
                          className="bx bx-right-arrow-alt p-1  RoundBtnz"
                          style={{
                            color: "#C83B93",
                            border: "1px solid #C83B93 ",
                            fontWeight: "700",
                            fontSize: "18px",
                            borderRadius: "50%",
                            cursor :"pointer"
                          }}
                        ></i>
                      </div>
                    </div>

                    <div
                      className="row text-center ps-2 px-1"
                      style={{ height: "6rem", paddingTop: "1.8rem" }}
                    >
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Accepted Influencers
                        </div>
                      </div>
                      <div className="col">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Confirmed Influencers
                        </div>
                      </div>
                      <div className="col-3">
                        <div style={{ fontWeight: "700", fontSize: "16px" }}>
                          NA
                        </div>
                        <div style={{ fontWeight: "500", fontSize: "14px" }}>
                          Posts Live
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12  d-flex justify-content-evenly align-items-center">
                        <div
                          className="w-100 py-3 px-3 d-flex align-items-center justify-content-between"
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
                              Created on Jun 28,2023
                            </span>
                          </div>
                          <div className="">
                            <button
                              className="px-3 py-2"
                              style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                border: "none",
                                background: "#fff",
                                color: "#000",
                                borderRadius: "10px",
                              }}
                            >
                              View Report
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default ReportzHome;
