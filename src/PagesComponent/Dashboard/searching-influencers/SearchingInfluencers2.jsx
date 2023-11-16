import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap-v5";
import Social_dropdown from "../component/social-dropdown";
import LocationDrop from "../component/location-dropdown";

export default function PlanCreate2() {
    const [planModal, setplanModal] = useState(false);
    const [blow, setBlow] = useState(false);


    const toggleSlide = () => {
        setBlow(!blow);
    };
    return (
        <>
            <div className="row">
                <div className="col-lg-12 pt-4">
                    {/* Search Field */}
                    <div className="search_section">
                        <div style={{ width: "75%" }}>
                            <span>
                                <i className="fa fa-search fa-lg"></i>
                            </span>

                            <input type="text" />
                        </div>

                        <div className="d-flex align-items-center">
                            <div className="mx-1">
                                <Social_dropdown />
                            </div>

                            <input type="checkbox" className="checkbox_section mx-2" />

                            <label className="labels">Register influencers</label>

                            <label className="switchSmall2 m5">
                                <input type="checkbox" />
                                <small></small>
                            </label>
                        </div>
                    </div>

                    {/* filter section */}
                    <div className="mt-5 d-flex justify-content-between">
                        <label className="labels mx-3" style={{ fontSize: "18px" }}>
                            17,110 Profile
                        </label>

                        <div className="plan_filter">

                            <div className="mx-1">
                                <LocationDrop />
                            </div>

                            <div>
                                <select>
                                    <option selected hidden>Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>

                            <div>
                                <select>
                                    <option>Followers</option>
                                </select>
                            </div>

                            {/* <div>
              <select>
                <option>Drebee Score</option>
              </select>
            </div> */}
                        </div>
                    </div>

                    {/* table section */}
                    <div className="table-responsive">
                        <table className="plan_table">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" className="checkbox_section mx-2" />
                                    </th>

                                    <th>Instagram Profile</th>

                                    {/* <th>
                  Score <i className="fa fa-info-circle" aria-hidden="true"></i>
                </th> */}

                                    <th>Followers</th>

                                    <th>Avg Likes</th>

                                    <th>Avg Reel Views</th>

                                    <th>
                                        ER <i className="fa fa-info-circle" aria-hidden="true"></i>
                                    </th>

                                    <th>Location</th>

                                    <th>Categories</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" className="checkbox_section mx-2" />
                                    </td>

                                    <td>
                                        <div className="d-flex">
                                            <img
                                                src={require("../../../Imagez/Dashboard/All/camp_user.png")}
                                                width={40}
                                                height={40}
                                            />

                                            <div style={{ textAlign: "initial", marginLeft: "5px" }}>
                                                <div>
                                                    <label>Guru Randhawa</label>
                                                    <img
                                                        className="mx-2"
                                                        src={require("../../../Imagez/Dashboard/All/mdi_approve.png")}
                                                    />
                                                </div>

                                                <label className="social_handle">gururandhawa</label>
                                            </div>
                                        </div>
                                    </td>

                                    {/* <td style={{ color: "#C83B93" }}>9.29</td> */}

                                    <td>34.2 M</td>

                                    <td>424.1 K</td>

                                    <td>1.8 M</td>

                                    <td>1.25 %</td>

                                    <td>
                                        <label>Gurgaon</label>
                                    </td>

                                    <td className="categories_section py-3">
                                        <div className="categories_row me-5" id="categories_row">
                                            <div className="my-2">
                                                <span className="plan_categories">Arts</span>

                                                <span className="plan_categories">Movies</span>
                                            </div>

                                            <span className="plan_categories">+2 More...</span>
                                        </div>

                                        <div
                                            className="d-flex justify-content-between categories_btn"
                                            id="categories_btn"
                                        >
                                            <button className="invite_btn btn mx-2">
                                                <img
                                                    src={require("../../../Imagez/Dashboard/All/Invite.png")}
                                                    className="mx-2"
                                                />
                                                Add to list
                                            </button>

                                            <button className="other_btn btn mx-2">
                                                <img
                                                    src={require("../../../Imagez/Dashboard/All/₹.png")}
                                                />
                                            </button>

                                            <button className="other_btn btn mx-2">
                                                <img
                                                    src={require("../../../Imagez/Dashboard/All/graph.png")}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="checkbox" className="checkbox_section mx-2" />
                                    </td>

                                    <td>
                                        <div className="d-flex">
                                            <img
                                                src={require("../../../Imagez/Dashboard/All/camp_user.png")}
                                                width={40}
                                                height={40}
                                            />

                                            <div style={{ textAlign: "initial", marginLeft: "5px" }}>
                                                <div>
                                                    <label>Guru Randhawa</label>
                                                    <img
                                                        className="mx-2"
                                                        src={require("../../../Imagez/Dashboard/All/mdi_approve.png")}
                                                    />
                                                </div>

                                                <label className="social_handle">gururandhawa</label>
                                            </div>
                                        </div>
                                    </td>

                                    {/* <td style={{ color: "#C83B93" }}>9.29</td> */}

                                    <td>34.2 M</td>

                                    <td>424.1 K</td>

                                    <td>1.8 M</td>

                                    <td>1.25 %</td>

                                    <td>
                                        <label>Gurgaon</label>
                                    </td>

                                    <td className="categories_section py-3">
                                        <div className="categories_row me-5" id="categories_row">
                                            <div className="my-2">
                                                <span className="plan_categories">Arts</span>

                                                <span className="plan_categories">Movies</span>
                                            </div>

                                            <span className="plan_categories">+2 More...</span>
                                        </div>

                                        <div
                                            className="d-flex justify-content-between categories_btn"
                                            id="categories_btn"
                                        >
                                            <button className="invite_btn btn mx-2">
                                                <img
                                                    src={require("../../../Imagez/Dashboard/All/Invite.png")}
                                                    className="mx-2"
                                                />
                                                Add to list
                                            </button>

                                            <button className="other_btn btn mx-2">
                                                <img
                                                    src={require("../../../Imagez/Dashboard/All/₹.png")}
                                                />
                                            </button>

                                            <button className="other_btn btn mx-2">
                                                <img
                                                    src={require("../../../Imagez/Dashboard/All/graph.png")}
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <Modal
                    show={planModal}
                    onHide={() => {
                        setplanModal(false);
                    }}
                >
                    <div className="plan_modal">
                        <div className="create_plan_head">
                            <label>Create Plan</label>

                            <hr className="tips_line" />
                        </div>
                        <div className="d-flex flex-column mt-3">
                            <label className="camp_label">Name of the Plan</label>
                            <input
                                type="text"
                                className="camp_input"
                                placeholder="Enter Plan Name"
                            />
                        </div>

                        <div className="d-flex flex-column mt-3">
                            <label className="camp_label">Brand</label>
                            <input
                                type="text"
                                className="camp_input"
                                placeholder="Enter Plan Name"
                            />
                        </div>

                        <div className="d-flex flex-column mt-3">
                            <label className="camp_label">I want to add influencers by</label>
                            <div className="d-flex flex-column">
                                <div>
                                    <input type="radio" className="mx-2" />
                                    <label>Searching Influencers From Dreabee</label>
                                </div>

                                <div>
                                    <input type="radio" className="mx-2" />
                                    <label>Adding Influencers Manually</label>
                                </div>
                            </div>
                        </div>

                        <div className="create_plan_btn mt-4">
                            <button className="btn">Create Plan</button>
                        </div>
                    </div>
                </Modal>
            </div>

            <div className={`slide-container ${blow ? 'slide-in' : 'slide-out'}`}>
                <div className="slide-content" >
                    {/* Your content goes here */}
                    <div className='row' >
                        <div className="col-lg-12 pt-3 m-0 add_plan_setion">
                            <label>
                                Kindly select a plan to
                                <br /> add influencers
                            </label>

                            <div className="add_plans_inner">
                                <button
                                    className="btn plan_add_btn"
                                    onClick={() => {
                                        setplanModal(true);
                                    }}
                                >
                                    <img src={require("../../../Imagez/Dashboard/All/Invite.png")} />
                                    New Plan
                                </button>

                                <div className="added_plan mt-5">
                                    <label>New Plan 1</label>

                                    <div className="list_footer">
                                        <label>List 1</label>

                                        <label>4th Aug, 2023</label>
                                    </div>
                                </div>
                            </div>

                            <div className="View_plan_section">
                                <button className="View_plan_btn btn">View Plan</button>
                                {

                                    blow
                                        ?
                                        <button onClick={toggleSlide} className='ps-2 py-2 pb-3' style={{ "border": "none", background: "white", "position": "relative", "top": "-18.2rem", "left": "-13.5rem", "opacity": "0.6", "borderRadius": " 20px 0 0 20px" }}> <i class='bx bxs-chevrons-right bx-fade-right' style={{ "fontSize": "3rem" }} ></i><span style={{ "position": "relative", "left": "-45px", "fontWeight": "700", "top": "12px", "fontSize": "13px" }}> Close Plans </span></button>
                                        :
                                        <button onClick={toggleSlide} className='ps-2 py-2 pb-3' style={{ "border": "none", background: "white", "position": "relative", "top": "-18.2rem", "left": "-13.5rem", "opacity": "0.6", "borderRadius": " 20px 0 0 20px" }}> <i class='bx bxs-chevrons-left bx-fade-right' style={{ "fontSize": "3rem" }} ></i><span style={{ "position": "relative", "left": "-45px", "fontWeight": "700", "top": "12px", "fontSize": "13px" }}> View Plans </span></button>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
