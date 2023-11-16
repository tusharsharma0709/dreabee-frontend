import React, { useEffect, useState } from "react";
import Invite from "../../../Imagez/Dashboard/All/Invite.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { event } from "jquery";
import dayjs from "dayjs";
import swal from "sweetalert";
import { baseUrl } from "../../../Routez/Routey";
export default function Campagin() {
  const [itsnull, setItsNull] = useState(null);
  const navigate = useNavigate();
  const onRedirectCampaignSetp1 = () => {
    navigate("/Dreabee/Dashboard/CampaginStep1", { state: { idz: itsnull } })
  }

  const [alldata, setAllData] = useState([]);
  const [activedata, setActiveData] = useState([]);

  const [draftdata, setDraftData] = useState([]);
  const [underdata, setUnderData] = useState([]);

  const [endeddata, setEndedData] = useState([]);
  const [archivedata, setArchiveData] = useState([]);
  const [searchdata, setSearchData] = useState([]);
  const [search, setSearch] = useState();
  const [idz, setIdz] = useState();

  const [allshow, setAllShow] = useState(true);
  const [actshow, setActShow] = useState(false);
  const [drafshow, setDrafShow] = useState(false);
  const [undershow, setUnderShow] = useState(false);
  const [endedshow, setEndedShow] = useState(false);
  const [archieshow, setArchieShow] = useState(false);
  const [searchshow, setSearchShow] = useState(false);
  const [ids, setIds] = useState();


  const ApiAll = () => {
    axios.get(`${baseUrl}api/Campaign/AllData`)
      .then((res) => {
        // console.log("here now  :", res)
        setAllData(res.data);
        setIds(res.data._id);
      }).catch((error) =>
        console.log("the all data error - ", error));


  }
  const ApiActivity = () => {
    axios.get(`${baseUrl}api/Campaign/AllActive`)
      .then((res) => {
        setActiveData(res.data)
        console.log("the all active ksksksk", res.data)
      })
      .catch((error) =>
        console.log("the all activity error - ", error));


  }


  const ApiDraft = () => {
    axios.get(`${baseUrl}api/Campaign/AllDraft`)
      .then((res) => {
        setDraftData(res.data)
        console.log("ACTIVE HITTED", res.data)
      })
      .catch((error) =>
        console.log("the draft error - ", error));
  }

  const ApiUnderReview = () => {
    axios.get(`${baseUrl}api/Campaign/AllUnderReview`)
      .then((res) => {
        setUnderData(res.data)
        console.log("HERE IN UNDER REVIWw")
      })
      .catch((error) =>
        console.log("the unde3r review error - ", error));

  }
  const ApiEnded = () => {
    axios.get(`${baseUrl}api/Campaign/AllEnded`)
      .then((res) => {
        setEndedData(res.data)
      })
      .catch((error) =>
        console.log("the all ended error - ", error));

  }
  const ApiArchieve = () => {

    axios.get(`${baseUrl}api/Campaign/AllArchive`)
      .then((res) => {
        setArchiveData(res.data)
      })
      .catch((error) =>
        console.log("the all archieve` error - ", error));
  }

  useEffect(() => {
    ApiAll();

    localStorage.removeItem("Edit-Id");
  }, [])

  const AllButton = () => {
    ApiAll()
    setAllShow(true);
    document.getElementById("all").classList.add("active_tab");
    document.getElementById("act").classList.remove("active_tab");
    document.getElementById("draf").classList.remove("active_tab");
    document.getElementById("under").classList.remove("active_tab");
    document.getElementById("ended").classList.remove("active_tab");
    document.getElementById("archie").classList.remove("active_tab");

    setActShow(false);
    setDrafShow(false);
    setUnderShow(false);
    setEndedShow(false);
    setArchieShow(false);

  }
  const ActiveButton = () => {
    ApiActivity();
    setActShow(true);
    document.getElementById("act").classList.add("active_tab");
    document.getElementById("draf").classList.remove("active_tab");
    document.getElementById("under").classList.remove("active_tab");
    document.getElementById("ended").classList.remove("active_tab");
    document.getElementById("archie").classList.remove("active_tab");
    document.getElementById("all").classList.remove("active_tab");



    setAllShow(false);
    setDrafShow(false);
    setUnderShow(false);
    setEndedShow(false);
    setArchieShow(false);




  }
  const DraftButton = () => {
    ApiDraft();
    setDrafShow(true);
    document.getElementById("draf").classList.add("active_tab");
    document.getElementById("all").classList.remove("active_tab");
    document.getElementById("act").classList.remove("active_tab");
    document.getElementById("under").classList.remove("active_tab");
    document.getElementById("ended").classList.remove("active_tab");
    document.getElementById("archie").classList.remove("active_tab");

    setAllShow(false);
    setActShow(false);
    setUnderShow(false);
    setEndedShow(false);
    setArchieShow(false);
  }
  const UnderReviewButton = () => {
    ApiUnderReview();
    setUnderShow(true);
    document.getElementById("under").classList.add("active_tab");
    document.getElementById("all").classList.remove("active_tab");
    document.getElementById("draf").classList.remove("active_tab");
    document.getElementById("act").classList.remove("active_tab");
    document.getElementById("ended").classList.remove("active_tab");
    document.getElementById("archie").classList.remove("active_tab");

    setAllShow(false);
    setActShow(false);
    setDrafShow(false);
    setEndedShow(false);
    setArchieShow(false);

  }
  const EndedButton = () => {
    ApiEnded();
    document.getElementById("ended").classList.add("active_tab");
    document.getElementById("all").classList.remove("active_tab");
    document.getElementById("draf").classList.remove("active_tab");
    document.getElementById("under").classList.remove("active_tab");
    document.getElementById("act").classList.remove("active_tab");
    document.getElementById("archie").classList.remove("active_tab");
    setEndedShow(true);


    setAllShow(false);
    setActShow(false);
    setDrafShow(false);
    setUnderShow(false);
    setArchieShow(false);



  }
  const ArchivedButton = () => {
    ApiArchieve();
    setArchieShow(true);
    document.getElementById("archie").classList.add("active_tab");

    document.getElementById("all").classList.remove("active_tab");
    document.getElementById("draf").classList.remove("active_tab");
    document.getElementById("under").classList.remove("active_tab");
    document.getElementById("ended").classList.remove("active_tab");
    document.getElementById("act").classList.remove("active_tab");


    setAllShow(false);
    setActShow(false);
    setDrafShow(false);
    setUnderShow(false);
    setEndedShow(false);


  }

  const ArchieveNow = (id) => {

    axios.post(`${baseUrl}api/Campaign/archiveCampaign`, {
      _id: id
    }).then((res) => {

      swal("Successfully added to archieve", "👍", "success");
      ArchivedButton()


    }).catch((error) => {
      // console.log("error", error);
      swal("Oops!", "Something needs to be fixed back here !!", "error");
    })

  }
  const UnArchieveNow = (id) => {

    axios.post(`${baseUrl}api/Campaign/Unarchive`, {
      _id: id
    }).then((res) => {

      swal("Successfully removed from archieve", "👍", "success");
      ArchivedButton()


    }).catch((error) => {
      // console.log("error", error);
      swal("Oops!", "Something needs to be fixed back here !!", "error");
    })

  }
  const GoToEditz = (id) => {
    setIds(id);
    localStorage.setItem("Edit-Id", id);
    navigate('/Dreabee/Dashboard/CampaginStep1', { state: { idz: id } });
  }


  const DeleteDraft = (id) => {
    setIds(id);
    console.log("thethethet id", id)
    axios.delete(`${baseUrl}api/Campaign/deleteCampaign/${id}`).then((res) => {
      console.log("Archieve response - ", res.data)
      swal("Successfully deleted", "👍", "danger");
      ApiAll();
    }).catch((error) => {
      swal("Oops!", "Something needs to be fixed back here !!", "error");
    })
  }


  return (
    <>
      <div className="campaign_section ">

        <div className="d-flex camp_header bg-transparent  " style={{ "border": "none", height: "100%" }} >

          <div className="campaign_head ">Campaigns</div>

          <div>
            {/* <img  src={require("../../../Imagez/Dashboard/All/mingcute_celebrate-fill.png")} />  <label> What’s New </label> */}

            <button
              className="text-center p-1 ms-1  btnz"
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

              }}
              onClick={onRedirectCampaignSetp1}
            >
              <img
                src={Invite}
                alt="add"
                style={{ width: "1.8rem", border: "2px solid white", borderRadius: "10px", }} /> {" "} &nbsp;
              <span style={{ position: "relative", top: "2px" }}> {" "} New Campagin {" "} </span>
            </button>
          </div>

        </div>

        <div className="d-flex justify-content-end">
          {/* NAVBAR */}
          <div className="d-flex  justify-content-end tabs  px-1">
            <button className="list_tab btn active_tab btnzz" id="all" onClick={AllButton}>
              <span className="list_txt ">ALL</span>
            </button>

            <button className="list_tab btn " id="draf" onClick={DraftButton}>
              <span className="list_txt">DRAFT</span>
            </button>


            <button className="list_tab btn " id="under" onClick={UnderReviewButton}>
              <span className="list_txt">UNDER REVIEW</span>
            </button>

            <button className="list_tab  btn  btnzz" id="act" onClick={ActiveButton}>
              <span className="list_txt ">ACTIVE</span>
            </button>

            <button className="list_tab btn " id="archie" onClick={ArchivedButton} >
              <span className="list_txt">ARCHIVED</span>
            </button>

            <button className="list_tab btn " id="ended" onClick={EndedButton}>
              <span className="list_txt">ENDED</span>
            </button>


          </div>




          {/* <div class="Camp_search ">
            <input placeholder="Search term" onKeyPress={SearchField} value={search} />
            <span class="fa fa-search"></span>
          </div> */}
        </div>

        <div>
          <table className="table camp_table">
            <thead >
              <th className="text-center">Brands</th>

              <th className="text-center">Campaign Name</th>

              <th className="text-center">Platform</th>

              <th className="text-center">Status</th>

              <th className="text-center">Created On</th>
              <th className="text-center"></th>
            </thead>


            <tbody>
              {
                allshow ?

                  alldata.map((data) => {
                    const dayte = data.CreatedAt;
                    const CampName = data.CreatorPreferences.CampaignDetail;
                    console.log("here is the proof : ", data.CreatedAt)

                    {/* console.log("herereer", data._id) */ }
                    return (
                      <>
                        <tr className="">
                          <td className="text-center" >{data.BrandName}</td>
                          <td className="text-start"  >
                            <section className="text-center">

                              {data.CreatorPreferences[0].CampaignDetail[0].CampaignName} &nbsp;

                              {
                                data.status === "Draft"
                                  ?
                                  <i className="fa-solid fa-pen ps-2 p-2 bg-o RoundBtnz" style={{ "cursor": "pointer", "fontSize": "14px", "borderRadius": "50%" }} onClick={() => { GoToEditz(data._id); }}></i>
                                  :
                                  null
                              }
                            </section>

                          </td>
                          <td className="text-center d-flex justify-content-center"   >
                            <section className="text-start">
                              &nbsp;
                              {
                                data.CreatorPreferences[0].Deliverables[0].type == "Instagram"
                                  ?
                                  <img src={require("../../../Imagez/Dashboard/All/mdi_instagram.png")} />
                                  :
                                  <img src={require("../../../Imagez/Dashboard/All/Play_Vector.png")} width={30} />

                              }
                              {data.CreatorPreferences[0].Deliverables[0].type}
                            </section>

                          </td>
                          <td className="text-center"  >
                            <button className="active_btn">
                              {data.status}
                              {/* {data.CreatorPreferences[0].Deliverables.type} */}
                            </button>
                          </td>

                          <td className="text-center"  >{dayjs(data.CreatedAt).format("DD-MM-YYYY ")}
                            <i className="bx bxs-calendar mx-2" style={{ color: "#7E7E7E" }}></i>
                          </td>


                          <td className="" style={{ "cursor": "pointer" }}>
                            <section className="bg- d-flex justify-content-evenly">
                              {
                                data.status === "Draft"
                                  ?
                                  <button className="HovText btnz px-1 pt-1 bg-transparent" onClick={() => { DeleteDraft(data._id) }}>  <i class="bx bx-trash-alt"></i> </button>
                                  :
                                  null
                              }


                            </section>

                          </td>
                        </tr>
                      </>
                    );
                  })
                  : null
              }

              {/* _____Act__________  */}
              {
                actshow ?
                  activedata.map((data) => {
                    const dayte = data.CreatedAt;
                    const CampName = data.CreatorPreferences.CampaignDetail;

                    {/* console.log("herereer", data._id) */ }
                    return (
                      <>
                        <tr>

                          <td className="text-center ">{data.BrandName}</td>
                          <td className="text-center" >

                            {data.CreatorPreferences[0].CampaignDetail[0].CampaignName}

                          </td>



                          <td className="text-center d-flex justify-content-center"   >
                            <section className="text-start">
                              &nbsp;
                              {
                                data.CreatorPreferences[0].Deliverables[0].type == "Instagram"
                                  ?
                                  <img src={require("../../../Imagez/Dashboard/All/mdi_instagram.png")} />
                                  :
                                  <img src={require("../../../Imagez/Dashboard/All/Play_Vector.png")} width={30} />

                              }
                              {data.CreatorPreferences[0].Deliverables[0].type}
                            </section>

                          </td>



                          <td className="text-center" >
                            <button className="active_btn">{data.status}</button>
                          </td>

                          <td className="text-center" >{dayjs(data.CreatedAt).format("DD-MM-YYYY hh:mm A")}
                            <i className="bx bxs-calendar mx-2" style={{ color: "#7E7E7E" }}></i>
                          </td>


                          <td className="" style={{ "fontWeight": "600", "cursor": "pointer" }}>
                            {/* <button style={{ "border": "none", "background": "none" }} value={data._id} onClick={(e) => { setIds(e.target.value) }}> Archive</button> */}

                            <button className="HovText btnz py-1 px-2 "
                              style={{ "fontWeight": "600", "border": "none", "borderRadius": "10px", "background": "none" }}
                              onClick={() => { setIds(data._id); ArchieveNow(data._id); }}> Archive</button>
                          </td>





                        </tr>
                      </>
                    );
                  })
                  : null
              }

              {/* _____Draf__________  */}
              {
                drafshow
                  ?
                  draftdata.map((data) => {
                    const dayte = data.CreatedAt;
                    const CampName = data.CreatorPreferences.CampaignDetail;
                    return (
                      <>
                        <tr>
                          <td className="text-center">{data.BrandName}</td>
                          <td className="text-center">

                            {data.CreatorPreferences[0].CampaignDetail[0].CampaignName}
                            &nbsp;
                            {
                              data.status === "Draft"
                                ?
                                <i className="fa-solid fa-pen ps-2 p-2 bg-o RoundBtnz" style={{ "cursor": "pointer", "fontSize": "14px", "borderRadius": "50%" }} onClick={() => { GoToEditz(data._id); }}></i>
                                :
                                null
                            }
                          </td>

                          <td className="text-center d-flex justify-content-center"   >
                            <section className="text-start">
                              &nbsp;
                              {
                                data.CreatorPreferences[0].Deliverables[0].type == "Instagram"
                                  ?
                                  <img src={require("../../../Imagez/Dashboard/All/mdi_instagram.png")} />
                                  :
                                  <img src={require("../../../Imagez/Dashboard/All/Play_Vector.png")} width={30} />

                              }
                              {data.CreatorPreferences[0].Deliverables[0].type}
                            </section>

                          </td>


                          <td className="text-center">
                            <button className="active_btn">{data.status}</button>
                          </td>

                          <td className="text-center">{dayjs(data.CreatedAt).format("DD-MM-YYYY hh:mm A")}
                            <i className="bx bxs-calendar mx-2" style={{ color: "#7E7E7E" }}></i> </td>


                          <td className="px">

                            <button className="HovText btnz px-1 pt-1 bg-transparent" onClick={() => { DeleteDraft(data._id) }}>  <i class="bx bx-trash-alt"></i> </button>

                          </td>
                        </tr>
                      </>
                    );
                  })
                  : null
              }


              {/* _____ended__________  */}
              {
                endedshow ?
                  endeddata.map((data) => {
                    const dayte = data.CreatedAt;
                    const CampName = data.CreatorPreferences.CampaignDetail;
                    return (
                      <>
                        <tr>
                          <td className="text-center">{data.BrandName}</td>
                          <td className="text-center">

                            {data.CreatorPreferences[0].CampaignDetail[0].CampaignName}

                          </td>

                          <td className="text-center d-flex justify-content-center"   >
                            <section className="text-start">
                              &nbsp;
                              {
                                data.CreatorPreferences[0].Deliverables[0].type == "Instagram"
                                  ?
                                  <img src={require("../../../Imagez/Dashboard/All/mdi_instagram.png")} />
                                  :
                                  <img src={require("../../../Imagez/Dashboard/All/Play_Vector.png")} width={30} />

                              }
                              {data.CreatorPreferences[0].Deliverables[0].type}
                            </section>

                          </td>

                          <td className="text-center">
                            <button className="active_btn">{data.status}</button>
                          </td>

                          <td className="text-center">{dayjs(data.CreatedAt).format("DD-MM-YYYY hh:mm A")}
                            <i className="bx bxs-calendar mx-2" style={{ color: "#7E7E7E" }}></i>
                          </td>
                          <td className=""></td>
                        </tr>
                      </>
                    );
                  })
                  : null
              }
              {/* _____Under__________  */}
              {
                undershow ?
                  underdata.map((data) => {
                    const dayte = data.CreatedAt;
                    const CampName = data.CreatorPreferences.CampaignDetail;
                    return (
                      <>
                        <tr>
                          <td className="text-center">{data.BrandName}</td>
                          <td className="text-center">

                            {data.CreatorPreferences[0].CampaignDetail[0].CampaignName}

                          </td>

                          <td className="text-center d-flex justify-content-center"   >
                            <section className="text-start">
                              &nbsp;
                              {
                                data.CreatorPreferences[0].Deliverables[0].type == "Instagram"
                                  ?
                                  <img src={require("../../../Imagez/Dashboard/All/mdi_instagram.png")} />
                                  :
                                  <img src={require("../../../Imagez/Dashboard/All/Play_Vector.png")} width={30} />

                              }
                              {data.CreatorPreferences[0].Deliverables[0].type}
                            </section>

                          </td>


                          <td className="text-center">
                            <button className="active_btn">{data.status}</button>
                          </td>

                          <td className="text-center">{dayjs(data.CreatedAt).format("DD-MM-YYYY hh:mm A")}
                            <i className="bx bxs-calendar mx-2" style={{ color: "#7E7E7E" }}></i> </td>
                          <td className="">&nbsp;</td>
                        </tr>
                      </>
                    );
                  })
                  : null
              }

              {/* ____Archived___________  */}
              {
                archieshow ?
                  archivedata.map((data) => {
                    return (
                      <>
                        <tr>
                          <td className="text-center">{data.BrandName}</td>
                          <td className="text-center">

                            {data.CreatorPreferences[0].CampaignDetail[0].CampaignName}

                          </td>


                          <td className="text-center d-flex justify-content-center"   >
                            <section className="text-start">
                              &nbsp;
                              {
                                data.CreatorPreferences[0].Deliverables[0].type == "Instagram"
                                  ?
                                  <img src={require("../../../Imagez/Dashboard/All/mdi_instagram.png")} />
                                  :
                                  <img src={require("../../../Imagez/Dashboard/All/Play_Vector.png")} width={30} />

                              }
                              {data.CreatorPreferences[0].Deliverables[0].type}
                            </section>

                          </td>



                          <td className="text-center">
                            <button className="active_btn">{data.status}d</button>
                          </td>



                          <td className="text-center">{dayjs(data.CreatedAt).format("DD-MM-YYYY hh:mm A")}
                            <i className="bx bxs-calendar mx-2" style={{ color: "#7E7E7E" }}></i></td>


                          <td className="bg-info">
                            <button className="HovText btnz px-1 " onClick={() => { UnArchieveNow(data._id); }}
                              style={{ "fontWeight": "600", "border": "none", "borderRadius": "10px", "background": "none" }}> Unarchive</button>
                          </td>


                        </tr>
                      </>
                    );
                  })
                  : null
              }

              {/* _______________  */}


            </tbody>


            <tfoot className="">
              <tr className="">
                <td className="" colSpan={6}>No More Result</td>
              </tr>
            </tfoot>
          </table>


        </div>
      </div>









    </>
  );
}
