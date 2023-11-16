import React, { useEffect } from "react";
import Invite from "../../../../Imagez/Dashboard/All//Invite.png";
import icon from "../../../../Imagez/Dashboard/All/icon1.png";
import editIcon from "../../../../Imagez/Dashboard/All/ei_rounded_pensil.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { baseUrl } from "../../../../Routez/Routey";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const CampaignzHome = () => {
  const navigate = useNavigate();

  const [searchting, setSearchTing] = useState("");
  const CampNow = () => {
    navigate('/Dreabee/Dashboard/CampaginStep1', { state: { Ting: searchting } })
  }

  const CampAll = () => {
    navigate("/Dreabee/Dashboard/Campagin")
  }


  useEffect(() => {
    ApiAll2();
  }, [])



  const [camp1, setCamp1] = useState();
  const [camp1id, setCamp1Id] = useState();
  const [camp2, setCamp2] = useState();
  const [camp2id, setCamp2Id] = useState();
  const [ids, setIds] = useState();



  const ApiAll2 = () => {
    axios.get(`${baseUrl}api/Campaign/AllDraft`)
      .then((res) => {
        // console.log("here all campaign  data  :", res.data)

        // console.log("here all campaign  data 1 :", res.data[0].CreatorPreferences[0].CampaignDetail[0].CampaignName)
        // console.log("here all campaign  data 2:", res.data[1].CreatorPreferences[0].CampaignDetail[0].CampaignName)
        // console.log("here all campaign  data 1 :", res.data[0]._id)
        // console.log("here all campaign  data 2 :", res.data[1]._id)


        setCamp1(res.data[0].CreatorPreferences[0].CampaignDetail[0].CampaignName)
        setCamp1Id(res.data[0]._id)


        setCamp2(res.data[1].CreatorPreferences[0].CampaignDetail[0].CampaignName)
        setCamp2Id(res.data[1]._id)

      }).catch((error) =>
        console.log("the all data error - ", error));
  }


  const EditNow = () => {


    console.log(ids)
    {
      ids
        ?
        navigate('/Dreabee/Dashboard/CampaginStep1', { state: { idz: ids } })
        :
        <>
          <h1>loading bi**</h1>
        </>
    }

  }





  const textRef = useRef(null);
  // REFFF 
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when at least 50% of the element is in view
  });
  // REFFF 1
  const [ref1, inView1] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when at least 50% of the element is in view
    // delay:2000
  });
  // REFFF 2
  const [ref2, inView2] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.4, // Trigger when at least 50% of the element is in view
  });

// _______________________________________________




  return (
    <>
      {/* ROW ! */}
      <div className="campaign-wrap">
        <div className="row">
          <div className=" bg col-12 col-lg-10 col-md-9 text-center mt-2">
            {" "}
            <h5 style={{ fontWeight: "700" }}>CAMPAIGN (2) </h5>{" "}
          </div>
          <div className=" bg  col-12 col-lg-2 col-md-3">
            <div className="d-flex justify-content-end me-2">
              <button
                className="align-items-center d-flex p-2 btnz"
                onClick={CampNow}
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
                &nbsp; New Campaign
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4 px-4 pb-4">


          {/* card 1 design */}
          <div className={`fade-in-text ${inView ? 'fade-in  col-12 col-lg-5 col-md-5 ' : ' col-12 col-lg-5 col-md-5 '}`} ref={ref}
          >
            <div className="Kardz"
              style={{
                background: "white",
                borderRadius: "10px",
                filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
              }}
            >
              <div
                className="row justify-content-around align-items-center pt-3 px-1"
                style={{}}
              >
                <div className="col-8">
                  <img
                    src={icon}
                    alt="icon1"
                    style={{ width: "2rem", marginRight: "0.5rem" }}
                  />{" "}
                  <span style={{ fontSize: "18px", fontWeight: "700" }}>
                    {camp1}
                  </span>
                </div>
                <div className="col-2 ps-4">
                  <img src={editIcon} alt="pensil " className="RoundBtnz" onClick={() => { setIds(camp1id); EditNow(); }} style={{ width: "45px", cursor: "pointer", "borderRadius": "50%" }} />
                </div>
              </div>

              <div
                className="row text-center ps-2 px-1"
                style={{ height: "6rem", paddingTop: "1.8rem" }}
              >
                <div className="col">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>NA</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    Accepted Influencers
                  </div>
                </div>
                <div className="col">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>NA</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    Confirmed Influencers
                  </div>
                </div>
                <div className="col-3">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>NA</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    Posts Live
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 d-flex justify-content-evenly align-items-center ">
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
                        Created on Jun 28,2023
                      </span>
                    </div>
                    <div className="">
                      <span
                        className="px-3 py-2"
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          border: "none",
                          backgroundColor: "whitesmoke",
                          borderRadius: "10px",
                        }}
                      >
                        DRAFT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* card 2 design */}
          <div className={`fade-in-text ${inView1 ? 'fade-in  col-12 col-lg-5 col-md ' : ' col-12 col-lg-5 col-md '}`} ref={ref1}>
            <div className="Kardz"
              style={{
                background: "white",
                borderRadius: "10px",
                filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))",
              }}
            >
              <div
                className="row justify-content-around align-items-center pt-3 px-1"
                style={{}}
              >
                <div className="col-8">
                  <img
                    src={icon}
                    alt="icon1"
                    style={{ width: "2rem", marginRight: "0.5rem" }}
                  />{" "}
                  <span style={{ fontSize: "18px", fontWeight: "700" }}>
                    {camp2}
                  </span>
                </div>
                <div className="col-2 ps-4">
                  <img src={editIcon} className="bg-inf RoundBtnz" alt="pensil" onClick={() => { setIds(camp2id); EditNow(); }} style={{ width: "45px", cursor: "pointer", "borderRadius": "50%" }} />
                </div>
              </div>

              <div
                className="row text-center ps-2 px-1"
                style={{ height: "6rem", paddingTop: "1.8rem" }}
              >
                <div className="col">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>NA</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    Accepted Influencers
                  </div>
                </div>
                <div className="col">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>NA</div>
                  <div style={{ fontWeight: "500", fontSize: "14px" }}>
                    Confirmed Influencers
                  </div>
                </div>
                <div className="col-3">
                  <div style={{ fontWeight: "700", fontSize: "16px" }}>NA</div>
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
                      <span
                        className="px-3 py-2"
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          border: "none",
                          backgroundColor: "whitesmoke",
                          borderRadius: "10px",
                        }}
                      >
                        DRAFT
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* card 3 design */}
          <div className="col-12 col-lg-2 col-md-2 Hovly"
            onClick={CampAll}
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

export default CampaignzHome;
