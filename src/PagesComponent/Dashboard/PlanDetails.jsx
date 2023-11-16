import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getRequest } from "../../config/apiClient";
import Urls from "../../config/url";

export default function PlanDetails() {
  const location = useLocation();
  const [planDetail, setPlanDetail] = useState({});
  const [selectedPlanList, setSelectedPlanList] = useState(null);
  const apiCallRef = useRef(false); // Ref to track API call

  const getPlanDetails = async () => {
    try {
      const params = {
        brandName: location.state.brandName,
        planName: location.state.planName,
      };
      let url = `${Urls.GET_PLAN_DETAILS}/${params.planName}/${params.brandName}`;
      const res = await getRequest(url);
      if(res?.data){
        setPlanDetail(res?.data);
        setSelectedPlanList(res.data.list[0]);
        }
    } catch (error) {
      console.error("Error while making the API call:", error);
    }
  };
  const handlePlanDetailList = (_id) => {
    if(planDetail) {
        const planList = planDetail?.list?.find((planList) => planList._id === _id);
        setSelectedPlanList(planList);
    }
  };


  useEffect(() => {
    if (!apiCallRef.current) {
      getPlanDetails();
      apiCallRef.current = true;
    }
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <div className="plan_details_section d-flex">
        <div className="px-5 section_1">
          <div className="plan_upper_head">
            <i className="fa fa-angle-left"></i>

            <img
              src={require("../../Imagez/Dashboard/All/Rectangle_5825.png")}
              width={30}
            />

            <label>
              <b>{planDetail?.PlanName}</b>
            </label>

            <i className="fa fa-edit"></i>
          </div>

          <div className="d-flex flex-column py-3">
            <label style={{ fontSize: 14 }} className="my-2">
              <b>Total Influencer: {selectedPlanList?.Influencer.length}</b>
            </label>

            <label style={{ fontSize: 14 }}>
              <strong>Deliverables</strong>
              <div>
                {selectedPlanList?.deliverables?.length === 0 && <strong>Not Set</strong>}
              {selectedPlanList?.deliverables?.map((deliverable, index) => {
                return(
                    <span key={index} className="badge bg-primary-subtle text-primary-emphasis rounded-pill">{deliverable?.contentType}</span>
                )
              })}
              </div>
            </label>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {planDetail?.list?.map((list) => {
            return (
              <div
                className="plan_card m-2"
                key={list._id}
                onClick={() => handlePlanDetailList(list._id)}
              >
                <div className="d-flex justify-content-between">
                  <label>
                    <b>{list?.ListName}</b>
                  </label>

                  <div className="plan_card_label d-flex flex-column">
                    <label>
                      <b> Deliverables</b>
                    </label>

                    <label>
                      <b> Not Set</b>
                    </label>
                  </div>
                </div>

                <div className="d-flex justify-content-between plan_card_label_2">
                  <img
                    src={require("../../Imagez/Dashboard/All/carbon_user-multiple.png")}
                    width={20}
                  />

                  <label>{list?.Influencer?.length} Influencer</label>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="my-3 px-4">
        <div className="d-flex filter_section justify-content-between">
          <div className="plan_total_influencer">
            <img
              src={require("../../Imagez/Dashboard/All/Rectangle_5825.png")}
              width={30}
            />
            <label>{selectedPlanList?.Influencer.length} Total Influencer</label>
          </div>

          <div className="d-flex justify-content-between">
            <button className="plan_edit_btn btn mx-2">
              <i className="fa fa-edit"></i>
              Edit List Details
            </button>

            <button className="plan_edit_btn plan_request_btn btn mx-2">
              Request Influencer Cost
            </button>
          </div>
        </div>
      </div>

      <div>
        <table className="table camp_table">
          <thead>
            <th>Influencer Name</th>
            <th>Cost</th>
            <th>Followers</th>
            <th>Likes (Avg)</th>
            <th>ER (%)</th>
            <th>Cost Request</th>
          </thead>

          <tbody>
            {selectedPlanList?.Influencer.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center">
                  No Data Found
                </td>
              </tr>
            )}
            {selectedPlanList?.Influencer?.map((Influencer, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img
                      src={Influencer?.InfluencerImage}
                      style={{
                        width: "40px",
                        marginLeft: "10px",
                        marginRight: "10px",
                      }}
                    />
                    {Influencer?.InfluencerName}
                  </td>
                  <td> 
                    { selectedPlanList?.deliverables?.reduce((sum, item) => sum + (item.cost || 0), 0)}
                    {/* <i className="fa fa-edit" style={{ marginLeft: "10px" }}></i> */}
                  </td>
                  <td>{Influencer?.InfluencerViews}</td>
                  <td>{Influencer?.Influencerlikes}</td>
                  <td>{Influencer?.InfluencerER}</td>
                  <td>
                    <button className="plan_edit_btn plan_request_btn btn">
                      Request Cost
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="plan_footer">
        <label>List Summary</label>

        <table>
          <tr>
            <td className="px-2">Likes (Avg)</td>
            <td className="px-2">Reel Views (Avg)</td>
          </tr>
          <tr>
            <td className="px-2">5.6M</td>
            <td className="px-2">21.6M</td>
          </tr>
        </table>

        <div>
          <button className="plan_edit_btn plan_request_btn btn mx-2">
            <i className="fa fa-download px-2" aria-hidden="true"></i>
            Download Plan
          </button>
          <button className="share_btn btn mx-2">
            <i className="fa fa-share-alt px-2"></i>
            Share Plan
          </button>
        </div>
      </div>

    </div>
  );
}
