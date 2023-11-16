import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Invite from "../../Imagez/Dashboard/All/Invite.png";
import Linee from "../../Imagez/Dashboard/All/Line.png";
// import eyeOutline from "../../Imagez/Dashboard/All/eye_outline.svg";
import { useNavigate } from "react-router-dom";
import { postRequest, getRequest, deleteRequest } from "../../config/apiClient";
import Urls from "../../config/url";
import dayjs from "dayjs";

const Plans = () => {
  const navigate = useNavigate();
  const [planShow, setPlanShow] = useState(false);
  const [viewPlanShow, setViewPlanShow] = useState(false);
  const [planFormData, setPlanFormData] = useState({
    planName: "",
    brandName: "",
    influencerRadio: "",
  });
  const [planList, setPlanList] = useState([]);
  const [activePlanStatus, setActivePlanStatus] = useState('active');

  const { planName, influencerRadio } = planFormData;

  const NewPlan = () => {
    setPlanShow(true);
  };
  const ViewPlan = (parems) => {
    navigate("/Dreabee/Dashboard/PlanDetails", {
      state: { brandName: parems.Brand_name, planName: parems.PlanName },
    });
  };

  const Cross = () => {
    // document.getElementById("overlay").style.display = "none";
    setPlanShow(false);
    setViewPlanShow(false);
  };
  const Glow = () => {
    document.getElementById("tada").style.color = "aqua";
  };
  const GlowEnd = () => {
    document.getElementById("tada").style.color = "white";
  };

  // get all input fields values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanFormData({ ...planFormData, [name]: value });
  };

  //submit to create plan
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const payload = {
        Brand_name: planFormData.brandName,
        PlanName: planFormData.planName,
      };
      let response = await postRequest(Urls.CREATE_PLAN, payload);
      if (influencerRadio === "search") {
        navigateSearchPage();
      } else {
       navigateMannuallyPage(response);
      }
    } catch (error) {
      console.error("Error while making the API call:", error);
    }
  };

  const navigateSearchPage = () => {
    navigate("/Dreabee/Dashboard/search-influencers");
  }

  const navigateMannuallyPage = (response) => {
    navigate("/Dreabee/Dashboard/Mannually", {
      state: { planData: response },
    });
  }

  const getPlans = async (type) => {
    try {
      const res = await getRequest(`${Urls.GET_ALL_PLANS}/${type}`);
      // const res = await getRequest(`${Urls.GET_ALL_PLANS}`);
      setPlanList(res.data);
      console.log("this is the get plans ; " , res.data)
    } catch (error) {
      console.error("Error while making the API call:", error);
    }
  };

  const deletePlan = async (id) => {
    try {
      const res = await deleteRequest(`${Urls.DELETE_PLAN}/${id}`);
      if (res.status) {
        getPlans('Active');
      }
    } catch (error) {
      console.error("Error while making the API call:", error);
    }
  };

  const handleChangeStatus = async (rowItem) => {
    try {
      if (rowItem.status === "Active") {
        await postRequest(Urls.CHANGE_STATUS_ARCHIVE_PLAN, {
          planname: rowItem.PlanName,
        });
      }
      if (rowItem.status === "Archive") {
        await postRequest(Urls.CHANGE_STATUS_UNARCHIVE_PLAN, {
          planname: rowItem.PlanName,
        });
      }
      getPlans('Active');
    } catch (error) {
      console.log("error=====", error);
    }
  };

  const handleStatusTabs = (tab) => {
    console.log('tab===', tab);
    setActivePlanStatus(tab);
    if(tab === "active"){
      getPlans('Active');
    }
    if(tab === "archived"){
      // const archivePlanist =  planList.filter((item) => item.status === "Archive")
      // console.log("avtivePlanist===", archivePlanist);
      getPlans('Archive');
    }
  }

  const mouseEnterStatusChange = (status, PlanIndex) => {
  const updatedPlanList = planList.map((plan, index) => {
    if (index === PlanIndex) {
      return {
        ...plan,
        status: status === 'Active' ? 'Archive' : 'Active'
      };
    }
    return plan;
  });
  setPlanList(updatedPlanList);
  }

  useEffect(() => {
    getPlans('Active');
  }, []);

  return (
    <>
      {planShow || viewPlanShow ? (
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
            <span className="" style={{ position: "relative" }}>
              {/* button __ */}
              <button
                style={{
                  background: "none",
                  border: "none",
                  zIndex: "999",
                  position: "absolute",
                  top: "10%",
                  left: "36.2rem",
                }}
                onClick={Cross}
              >
                {" "}
                <i
                  id="tada"
                  onMouseOver={Glow}
                  onMouseLeave={GlowEnd}
                  style={{ fontSize: "38px", color: "rgb(200, 59, 147)" }}
                  className="bx bx-x-circle bx-spin"
                />{" "}
              </button>
              {/* Update Section __ */}
              <section
                style={{
                  width: "48vw",
                  background: "whiteSmoke",
                  zIndex: "600",
                  borderRadius: "20px",
                  position: "relative",
                  left: "-6rem",
                  top: "2rem",
                  padding: "2rem 0"
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
                  {viewPlanShow ? "View Plan" : "Create Plan"}
                </section>
                <img
                  src={Linee}
                  alt="line"
                  style={{ width: "30rem", marginLeft: "2rem" }}
                />
                {!viewPlanShow && (
                  <form onSubmit={handleSubmit}>
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
                          value={planName}
                          onChange={handleChange}
                          name="planName"
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
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          style={{
                            width: "40rem",
                            padding: " 14px 0 14px 20px ",
                            fontSize: "16px",
                            fontWeight: "600",
                            borderRadius: "10px",
                            border: "1px solid #7E7E7E",
                          }}
                          name="brandName"
                          onChange={handleChange}
                        >
                          <option selected>
                            Choose from the Following list
                          </option>
                          <option value="instagram">Pepsi</option>
                          <option value="youtube">Boat</option>
                          <option value="youtube">Mama Earth</option>
                          <option value="youtube">Boat</option>
                        </select>
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
                            value="search"
                            onChange={handleChange}
                            name="influencerRadio"
                            id="influencerRadio1"
                          />
                          <label
                            className="form-check-label ps-2"
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
                            value="manually"
                            onChange={handleChange}
                            name="influencerRadio"
                            id="influencerRadio2"
                          />
                          <label
                            className="form-check-label ps-2"
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
                        className="text-center p-2 btnz"
                        type="submit"
                        style={{
                          width: "13rem",
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
                  </form>
                )}
              </section>
            </span>
          </div>
        </>
      ) : null}



      <div>
        {/* SECTION! -Search /button  */}
        <div className="row pt-4">
          {/* search file  */}
          <div className="col-10">
          </div>

          {/* new plans button  */}
          {/* <div className="col-2">
            <button
              className="text-center p-2"
              onClick={NewPlan}
              style={{
                width: "10rem",
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
              <img
                src={Invite}
                alt="add"
                style={{
                  width: "1.8rem",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              />{" "}
              &nbsp; New Plan
            </button>
          </div> */}
        </div>

        {/* SECTION2 -Buttons  */}
        <div className="row mt-2">
          {/* Heading Text  */}
          <div className="col-6">
            <h4 style={{ fontWeight: "700", fontSize: "26px" }}>Plans</h4>
          </div>
          {/* Active and Archived - button */}
          <div className="col-6 mt-3 d-flex justify-content-end">
          <div className="d-flex">
            <button
              className={`text-center p-2 tab-btn tab-btn-left ${ activePlanStatus === 'active' ? 'active' : ''} `}
              onClick={() => handleStatusTabs("active")}
            >
              {" "}
              ACTIVE
            </button>

            <button
              className={`text-center p-2 tab-btn tab-btn-right ${ activePlanStatus === 'archived' ? 'active' : ''} `}
              onClick={() => handleStatusTabs("archived")}
            >
              {" "}
              ARCHIVED
            </button>
            </div>
            <div className="ms-4">
            <button
              className="text-center p-2 btnz "
              onClick={NewPlan}
              style={{
                width: "10rem",
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
              <img
                src={Invite}
                alt="add"
                style={{
                  width: "1.8rem",
                  border: "2px solid white",
                  borderRadius: "10px",
                }}
              />{" "}
              &nbsp; New Plan
            </button>
            </div>
          </div>
        </div>

        {/* SECTION3 -Heading Bar  */}
        <div className="row mt-4">
          <div className="col-12 bg">
            <div style={{ height: "4rem", backgroundColor: "black" }}>
              <div className="row px-2 h-100 d-flex align-items-center">
                <div className="col-2 text-light text-center">Brands</div>
                <div className="col-2 text-light">Plan Name</div>
                <div className="col-2 text-light">Status</div>
                <div className="col-2 text-light">
                  {" "}
                  Created On <i className="bx bx-down-arrow-alt"></i>{" "}
                </div>
                <div className="col-4 text-light"> </div>
                {/* <div className='col text-light'> hi 5</div> */}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION4 - Plan List Table  */}
        <div className="row mt-2 ">
          {/* Bar 1  */}
          {planList?.map((item, index) => {
            return (
              <div key={index} className="col-12 mt-4 bg">
                <div
                  style={{
                    height: "4rem",
                    boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.20) ",
                  }}
                >
                  <div className="row h-100 px-2 d-flex align-items-center">
                    <div className="col-2 text-dark text-center">{item.Brand_name}</div>
                    <div className="col-2 text-dark d-flex justify-content-between">
                      {item.PlanName}
                    </div>
                    <div className="col-2 text-dark">
                      <span
                        className="p-2 px-3 active-btn"
                        style={{
                          background: "#00C191",
                          color: "black",
                          borderRadius: "10px",
                        }}
                        onClick={() => handleChangeStatus(item)}
                        onMouseEnter={ ()=> mouseEnterStatusChange(item.status, index)}
                        onMouseLeave={ ()=> mouseEnterStatusChange(item.status, index)}
                      >
                        {item.status}
                      </span>
                    </div>
                    <div className="col-2  text-dark">
                      {dayjs(item.CreatedAt).format("DD-MM-YYYY hh:mm A")}
                      <i
                        className="bx bxs-calendar mx-2"
                        style={{ color: "#7E7E7E" }}
                      ></i>{" "}
                    </div>
                    <div className="col-4 text-dark d-flex align-items-center">
                      <div
                        onClick={() => ViewPlan(item)}
                        className="p-2 mx-2"
                        style={{
                          cursor: "pointer",
                          background: "#C83B93",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        <i className="bx bxs-bullseye"></i> View Plan
                      </div>
                      <div>
                        <Dropdown>
                          <Dropdown.Toggle
                            style={{
                              cursor: "pointer",
                              background: "#C83B93",
                              color: "white",
                              borderRadius: "10px",
                              outline: "none",
                              border: "none",
                            }}
                            variant="success"
                            id="dropdown-basic"
                          >
                            <i className="bx bx-plus-circle"></i> Add Influencer
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item onClick={()=> navigateSearchPage()}>New Search</Dropdown.Item>
                            <Dropdown.Item onClick={()=> navigateMannuallyPage(item)}>Add Manually</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div
                        className="mx-2 py-2 px-4 btn"
                        onClick={() => deletePlan(item._id)}
                      >
                        <i className="bx bx-trash-alt"></i>
                      </div>
                      {/* <span style={{ position: "relative", top: "4px" }}>
                        <i
                          className="bx bx-dots-vertical-rounded mx-1"
                          style={{ cursor: "pointer", fontSize: "22px" }}
                        ></i>
                      </span> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Plans;
