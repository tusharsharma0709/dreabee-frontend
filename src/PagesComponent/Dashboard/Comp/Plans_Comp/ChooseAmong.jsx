import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { postRequest } from "../../../../config/apiClient";
import Urls from "../../../../config/url";
import Invite from "../../../../Imagez/Dashboard/All/Invite.png";
import Linee from "../../../../Imagez/Dashboard/All/Line.png";
import { formatNumber } from "../../../../common/calculation";
import { error } from "jquery";
const ChooseAmong = () => {
  const location = useLocation();
  let handleName = location?.state?.handleName;
  let categories = location?.state?.categories;
  let name = location?.state?.name;
  const [shoew, setShoew] = useState(true);
  const [listShow, setListShow] = useState(false);
  const [influencerData, setInfluencerData] = useState([]);
  const Glow = () => {
    document.getElementById("tada").style.color = "aqua";
  };
  const GlowEnd = () => {
    document.getElementById("tada").style.color = "white";
  };
  const Cross = () => {
    setListShow(false);
  };


  const onDataFetch = async () => {
    try {
      let rawData = {
        handleName: handleName,
        categories: categories,
        username: "",
        name: name,
        tags: "",
        gender: "",
        socialType: "",
        country: "",
      };

      let response = await postRequest(Urls.SEARCH_INFLUENCER, rawData);

      if (response) {
       
        setInfluencerData(response)
        } else {
          console.log("---Error",error)
        }
      
    } catch (error) {
      // console.error("Error while making the API call:", error);
      // swal("Nooo!", "Check console", "danger");
    }
  };
  
  useEffect(() => {
    onDataFetch()
  }, []);

 
  return (
    <>
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

      {/* search bar section  */}
      <section>
        <div className="row">
          <div className="col-9 bg-">
            <div className="col-lg-8">
              <input
                className=""
                style={{
                  width: "150%",
                  height: "3rem",
                  paddingLeft: "4.6rem",
                  paddingBottom: "4px",
                  marginTop: "0.1rem",
                  flexShrink: "0",
                  borderRadius: "1.9375rem",
                  boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
                  border: "none",
                }}
                type="text"
                placeholder="Type names, categories, topics, bio keywords, #anything!"
              />
              <span>
                <i
                  className="bx bx-search-alt"
                  style={{
                    position: "relative",
                    top: "-2.2rem",
                    left: "1.5rem",
                    fontSize: "25px",
                  }}
                ></i>
              </span>
            </div>
          </div>
          <div className="col-3">
            <span style={{ fontSize: "18px", fontWeight: "600" }}>
              <i
                className="bx bxs-check-circle"
                style={{
                  color: "#C83B93",
                  fontSize: "24px",
                  position: "relative",
                  top: "5px",
                }}
              ></i>
              <span className="me-2">Registered influencers </span>{" "}
              <i
                className="bx bx-toggle-left"
                style={{
                  color: "",
                  fontSize: "32px",
                  position: "relative",
                  bottom: "-8px",
                }}
              ></i>{" "}
            </span>
          </div>
        </div>
      </section>

      {/* all filters section  */}
      <section>
        <div className="row">
          <div className="col-2 bg">
            <h6
              style={{
                fontSize: "18px",
                fontWeight: "600",
                paddingTop: "10px",
              }}
            >
              {" "}
              17,110 Profile
            </h6>
          </div>

          <div className="col-10 bg- d-flex justify-content-end">
            <section
              style={{
                width: "10rem",
                borderRadius: "10px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="p-2 mx-2 text-center bg-dark text-white"
            >
              {" "}
              Instagram{" "}
              <span>
                <i
                  className="bx bx-chevron-down"
                  style={{
                    position: "relative",
                    top: "3px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                ></i>{" "}
              </span>
            </section>
            <section
              style={{
                width: "10rem",
                borderRadius: "10px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="p-2 mx-2 text-center bg-light"
            >
              {" "}
              Location{" "}
              <span>
                <i
                  className="bx bx-chevron-down"
                  style={{
                    position: "relative",
                    top: "3px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                ></i>{" "}
              </span>
            </section>
            <section
              style={{
                width: "10rem",
                borderRadius: "10px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="p-2 mx-2 text-center bg-light"
            >
              {" "}
              Gender{" "}
              <span>
                <i
                  className="bx bx-chevron-down"
                  style={{
                    position: "relative",
                    top: "3px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                ></i>{" "}
              </span>
            </section>
            <section
              style={{
                width: "10rem",
                borderRadius: "10px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="p-2 mx-2 text-center bg-light"
            >
              {" "}
              Followers{" "}
              <span>
                <i
                  className="bx bx-chevron-down"
                  style={{
                    position: "relative",
                    top: "3px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                ></i>{" "}
              </span>
            </section>
            <section
              style={{
                width: "10rem",
                borderRadius: "10px",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
              }}
              className="p-2 mx-2 text-center bg-light"
            >
              {" "}
              More{" "}
              <span>
                <i
                  className="bx bx-chevron-down"
                  style={{
                    position: "relative",
                    top: "3px",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                ></i>{" "}
              </span>
            </section>
          </div>
        </div>
      </section>

      {/* table bar section  */}
      <section className="row mt-4 ">
        {/* heading  */}
        <div
          className="d-flex"
          style={{
            width: "100%",
            borderRadius: "5px",
            height: "4rem",
            backgroundColor: "black",
          }}
        >
          <div className="col-2 ms-3 h-100 bg text-light d-flex justify-content-start ps-4 align-items-center">
            {" "}
            <text style={{ fontSize: "16px", fontWeight: "600" }}>
              Instagram Profile
            </text>{" "}
          </div>
          <div className="col-1 h-100 bg text-light d-flex justify-content-center bg- align-items-center">
            {" "}
            <text style={{ fontSize: "16px", fontWeight: "600" }}>
              Followers
            </text>{" "}
          </div>
          <div className="col-1 h-100 bg text-light d-flex justify-content-center bg- align-items-center">
            {" "}
            <text style={{ fontSize: "16px", fontWeight: "600" }}>
              Avg Likes
            </text>{" "}
          </div>
          <div className="col-2 h-100 bg text-light d-flex justify-content-center bg- align-items-center">
            {" "}
            <text style={{ fontSize: "16px", fontWeight: "600" }}>
              Avg Reel Views{" "}
            </text>{" "}
          </div>
          <div className="col-1 h-100 bg text-light d-flex justify-content-center bg- align-items-center">
            {" "}
            <text style={{ fontSize: "16px", fontWeight: "600" }}>
              ER{" "}
              <i
                className="bx bx-info-circle"
                style={{ position: "relative", top: "1px" }}
              />
            </text>{" "}
          </div>
          <div className="col-2 h-100 bg text-light d-flex justify-content-center bg- align-items-center">
            {" "}
            <text style={{ fontSize: "16px", fontWeight: "600" }}>
              Location
            </text>{" "}
          </div>
          <div className="col-3 h-100 bg text-light d-flex justify-content-center bg- align-items-center">
            {" "}
            <text style={{ fontSize: "16px", fontWeight: "600" }}>
              Categories
            </text>{" "}
          </div>
        </div>

        {/* Body Main To USE*/}
        {influencerData?.map((item) => {
          return (
            <div
              className="d-flex mt-2 mb-2"
              onMouseEnter={(e) => {
                setShoew(true);
              }}
              onMouseLeave={(e) => {
                setShoew(false);
              }}
              style={{
                width: "100%",
                borderRadius: "5px",
                height: "6rem",
                backgroundColor: "",
                boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20) ",
              }}
            >
              <div className="col-2 ms-3 h-100 bg text-dark d-flex justify-content-start ps-4 align-items-center">
                {" "}
                <text style={{ fontSize: "16px", fontWeight: "600" }}>
                  <div className="row">
                    <div className="col-3 d-flex align-items-center">
                      <span>
                        {" "}
                        <img
                          src={
                            item?.Influencer_Image_url == undefined || null
                              ? "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
                              : item?.Influencer_Image_url
                          }
                          alt="imageProfile"
                          style={{
                            width: "2.5rem",
                            border: "1px soild aqua",
                            borderRadius: "50%",
                            boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20) ",
                          }}
                        />{" "}
                      </span>
                    </div>
                    <div className="col-9">
                      <text> {item?.InfluencerName}</text>
                      <br />
                      <text style={{ fontSize: "13px", color: "#7E7E7E" }}>
                        @LuffyRandhawa
                      </text>
                    </div>
                  </div>
                </text>
                <span style={{ position: "relative", right: "13.2rem" }}>
                  {" "}
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    style={{
                      boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
                      border: "1px solid #7E7E7E",
                    }}
                  ></input>
                </span>
              </div>
              <div className="col-1 h-100 bg text-dark d-flex justify-content-center bg- align-items-center">
                {" "}
                <text style={{ fontSize: "16px", fontWeight: "600" }}>
                  {item?.InfluencerFollowers == null || undefined
                    ? "-"
                    : formatNumber(item?.InfluencerFollowers)}
                </text>{" "}
              </div>
              <div className="col-1 h-100 bg text-dark d-flex justify-content-center bg- align-items-center">
                {" "}
                <text style={{ fontSize: "16px", fontWeight: "600" }}>
                  {item?.InfluencerAvgLikes == null || undefined
                    ? "-"
                    : formatNumber(item?.InfluencerAvgLikes)}
                </text>{" "}
              </div>
              <div className="col-2 h-100 bg text-dark d-flex justify-content-center bg- align-items-center">
                {" "}
                <text style={{ fontSize: "16px", fontWeight: "600" }}>
                  {item?.InfluencerAvgReelsView == undefined || null
                    ? "-"
                    : formatNumber(item?.InfluencerAvgReelsView)}
                </text>{" "}
              </div>
              <div className="col-1 h-100 bg text-dark d-flex justify-content-center bg- align-items-center">
                {" "}
                <text style={{ fontSize: "16px", fontWeight: "600" }}>
                  {item?.InfluencerER == undefined || null
                    ? "-"
                    : (item?.InfluencerER * 100).toFixed(2) + "%"}
                </text>{" "}
              </div>
              <div className="col-2 h-100 bg text-dark d-flex justify-content-center bg- align-items-center">
                {" "}
                <text style={{ fontSize: "16px", fontWeight: "600" }}>
                  {item?.InfluencerLocation == undefined || null
                    ? "-"
                    : item?.InfluencerLocation}
                </text>{" "}
              </div>

              <div className="col-3 h-100 bg text-dark d-flex justify-content-center flex-direction-row bg- align-items-center">
                {" "}
                <text style={{ fontSize: "16px", fontWeight: "600" }}>
                  {/*--> On hover hide categories   */}
                  {!shoew ? (
                    <>
                      <section className="mt-1">
                        <span
                          style={{
                            width: "10rem",
                            borderRadius: "10px",
                            backgroundColor: "#EFE5FF",
                            boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
                          }}
                          className="p-2  px-3 mx-2 text-center "
                        >
                          {" "}
                          Arts & Ent.{" "}
                        </span>
                        <span
                          style={{
                            width: "10rem",
                            borderRadius: "10px",
                            backgroundColor: "#EFE5FF",
                            boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
                          }}
                          className="p-2 px-3 mx-2 text-center "
                        >
                          {" "}
                          Fasion{" "}
                        </span>
                        <span
                          style={{
                            width: "10rem",
                            borderRadius: "10px",
                            backgroundColor: "#EFE5FF",
                            boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
                          }}
                          className="p-2 px-3 mx-2 text-center"
                        >
                          {" "}
                          Movies{" "}
                        </span>
                      </section>
                      <section
                        style={{
                          width: "10rem",
                          borderRadius: "10px",
                          backgroundColor: "#EFE5FF",
                          boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20)",
                          marginLeft: "6rem",
                          marginTop: "12px",
                        }}
                        className="p-2 px-3   text-center text-primary"
                      >
                        +2 more{" "}
                      </section>
                    </>
                  ) : null}
                </text>
              </div>

              {/*--> On hover show add list button  */}
              {shoew ? (
                <>
                  <section
                    className="d-flex justiify-content-center align-items-center"
                    style={{ position: "relative", right: "20.2rem" }}
                  >
                    {/* Add to list button  */}
                    <button
                      className="text-center p-2"
                      onClick={(e) => {
                        setListShow(true);
                      }}
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
                        marginLeft: "",
                        marginTop: "0rem",
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
                      &nbsp; Add to List
                    </button>

                    <button
                      className="text-center p-2  mx-1 "
                      style={{
                        width: "4rem",
                        height: "2.8rem",
                        height: "2.8rem",
                        fontWeight: "600",
                        fontSize: "1.05rem",
                        borderRadius: "10px",
                        color: "white",
                        backgroundColor: "#C83B93",
                        border: "none",
                        marginLeft: "",
                        marginTop: "0rem",
                      }}
                    >
                      {" "}
                      <i
                        className="bx bx-rupee"
                        style={{
                          width: "1.8rem",
                          fontSize: "20px",
                          borderRadius: "10px",
                        }}
                      ></i>{" "}
                    </button>

                    <button
                      className="text-center p-2  mx-1 "
                      style={{
                        width: "4rem",
                        height: "2.8rem",
                        height: "2.8rem",
                        fontWeight: "600",
                        fontSize: "1.05rem",
                        borderRadius: "10px",
                        color: "white",
                        backgroundColor: "#C83B93",
                        border: "none",
                        marginLeft: "",
                        marginTop: "0rem",
                      }}
                    >
                      {" "}
                      <i
                        className="bx bx-trending-up pt-1"
                        style={{
                          width: "1.8rem",
                          fontSize: "24px",
                          borderRadius: "10px",
                        }}
                      ></i>{" "}
                    </button>
                  </section>
                </>
              ) : null}
            </div>
          );
        })}

        {/* ________________________________________________________ */}
      </section>
    </>
  );
};

export default ChooseAmong;
