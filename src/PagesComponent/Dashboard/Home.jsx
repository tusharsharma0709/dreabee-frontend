import React, { useState, useEffect } from "react";
// import Add from "../../Imagez/Dashboard/All/mingcute_celebrate-fill.png";
import Invite from "../../Imagez/Dashboard/All/Invite.png";
import inss from "../../Imagez/Dashboard/All/mdi_instagram.png";
import vector from "../../Imagez/Dashboard/All/Illustrator.png";
import { getRequest, postRequest } from "../../config/apiClient";
import { useNavigate } from "react-router-dom";
// import pic1 from "../../Imagez/Dashboard/All/Guided.png";
// import pic2 from "../../Imagez/Dashboard/All/ROI.png";
// import pic3 from "../../Imagez/Dashboard/All/Prompt.png";
// import pic4 from "../../Imagez/Dashboard/All/Pricing.png";
import pik1 from "../../Imagez/Dashboard/All/mdi_approve.png";
import pik2 from "../../Imagez/Dashboard/All/image 39.png";
import pik3 from "../../Imagez/Dashboard/All/mdi_instagram.png";
import pik4 from "../../Imagez/Dashboard/All/simple-line-icons_social-youtube.png";
import Linee from "../../Imagez/Dashboard/All/Line.png";

import swal from "sweetalert";
// import axios from "axios";

import CampaignzHome from "./Comp/Home_Comp/CampaignzHome";
import PlanzHome from "./Comp/Home_Comp/PlanzHome";
import ReportzHome from "./Comp/Home_Comp/ReportzHome";
// import BrandAnalysisHome from "./Comp/Home_Comp/BrandAnalysisHome";
import Urls from "../../config/url";
import axios from "axios";
// import { nodeName } from "jquery";
import { baseUrl } from "../../Routez/Routey";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Search from "./Search";
import SearchAll from "./component/SearchSection/SearchAll";





const Home = () => {
  const navigate = useNavigate();
  const [now, setNow] = useState(false);
  const [dropNow, setDropNow] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [nameHandel, setNameHandel] = useState("Instagram");
  const [inviteTeammates, setInviteTeammates] = useState(false);
  const [categoriesList, setCategoriesList] = useState([]);
  const [showTalktoExpert, setShowTalktoExpert] = useState(false);


  const [contentCategories, setContentCategories] = useState([]);

  const [inputValues, setInputValues] = useState(['']);

  const handleAddInput = () => {
    const newInputValues = [...inputValues, ''];
    setInputValues(newInputValues);
  };

  const handleInputChange = (event, index) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleSave = () => {
    console.log('Saved Values:', inputValues);
  };



  // State to keep track of the checked items
  //   const [checkedItems, setCheckedItems] = useState([]);
  const getcategories = async () => {
    try {
      const res = await getRequest(Urls.GET_CATEGORIES);
      setCategoriesList(res.data);
    } catch (error) {
      console.error("Error while making the API call:", error);
    }
  };

  useEffect(() => {
    // getcategories();
  }, []);



  const GoToProfile = () => {
    navigate("/Dreabee/Dashboard/Profile/Summary")
  }




  const influencersList = [
    { title: "Dwayne Johnson", value: "Dwaynejohnson" },
    { title: "Dipika Padukon", value: "dipikapadukon" },
    { title: "Alia Bhatt", value: "aliabhatt" },
    { title: "King", value: "king" },
    { title: "Badshah", value: "badshah" },
    { title: "Priyanka Chopara", value: "priyankachopara" },
  ];



  // const workNow = (event) => {
  //   if (event.key === "Enter") {
  //     console.log("hey hagwaan -", valueInput);
  //     setNow(false);

  //     let data = {
  //       handle: nameHandel,
  //       user: valueInput,
  //       categories: contentCategories,
  //     };
  //     axios
  //       .post(`${baseUrl}api/Influencer/searchInfluencer`, {
  //         handleName: data.handle,
  //         categories: data.categories,
  //         username: "",
  //         name: "",
  //         tags: "",
  //         gender: "m",
  //         socialType: "",
  //         country: "",
  //       })
  //       .then((resp) => {
  //         console.log("Home Search response - ", resp);
  //         // console.log("pets data -",PetInfo)
  //         swal("Yasss!", "Search Api is working", "success");
  //       })
  //       .catch((error) => {
  //         console.log("Home Search Api error - ", error);
  //         swal("Nooo!", "Check console", "danger");
  //       });
  //   }
  // };

  const dropIt = () => {
    setDropNow(!dropNow);
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // Add the item to the array if it's checked
      setContentCategories([...contentCategories, value]);
    } else {
      // Remove the item from the array if it's unchecked
      setContentCategories(contentCategories.filter((item) => item !== value));
    }
  };

  const handleRemoveTag = (index) => {
    const updatedItems = [...contentCategories];
    updatedItems.splice(index, 1); // Remove one element at the specified index
    setContentCategories(updatedItems);
  };

  const handleOnSearch = async (isFromUser, item) => {
    try {
      let rawData = {
        handleName: nameHandel,
        categories: contentCategories,
        username: "",
        name: isFromUser === true ? item.title : valueInput,
        tags: "",
        gender: "",
        socialType: "",
        country: "",
      };

      let response = await postRequest(Urls.SEARCH_INFLUENCER, rawData);

      if (response) {
        if (isFromUser === true && response !== "No Record found!") {
          navigate("/Dreabee/Dashboard/Profile", {
            state: { userData: response },
          });
        } else if (response !== "No Record found!") {
          navigate("/Dreabee/Dashboard/ChoosingFromDb", {
            // state: { userData: response },
            state: { handleName: nameHandel, categories: contentCategories, name: valueInput },
          });
        } else {
          swal("oops!", "No Record found!", "danger");
        }
      }
    } catch (error) {
      // console.error("Error while making the API call:", error);
      // swal("Nooo!", "Check console", "danger");
    }
  };

  const Glow = () => {
    document.getElementById("tada").style.color = "aqua";
  };

  const GlowEnd = () => {
    document.getElementById("tada").style.color = "white";
  };





  // ______________________________

  // const textRef = useRef(null);
  // // REFFF 1
  // const [ref, inView] = useInView({
  //     triggerOnce: true, // Only trigger the animation once
  //     threshold: 0.4, // Trigger when at least 50% of the element is in view

  // });



  const [idTing, setIdTing] = useState([]);
  const [sugg, setSugg] = useState([]);
  const [openDrops, setOpenDrops] = useState(false);
  const [openDrop, setDrop] = useState(false);
  const [selected, setSelelcted] = useState('Youtube');
  const [searchNow, setSearchNow] = useState(false);
  const [ting, setTing] = useState();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      GoFor();
    }
  };
  const Reccom = () => {
    setSearchNow(true);
    axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/auto-suggest`, {
      keyword: ting

    }).then((res) => {
      // console.log("serarch  data: ", res.data);
      setSugg(res.data.video.items)
      // setSugg1(res.data.video.items[0]);
      // setSugg2(res.data.video.items[1]);
      // setSugg3(res.data.video.items[2]);
      // setSugg4(res.data.video.items[3]);
      // setSugg5(res.data.video.items[4]);
      // setSugg6(res.data.video.items[5]);
      // setSugg7(res.data.video.items[6]);
      // setSugg8(res.data.video.items[7]);

      // console.log("1 : ", sugg1);
      // console.log("2 : ", sugg2);
      // console.log("3 : ", sugg3);
      // console.log("4 : ", sugg4);
      // console.log("5 : ", sugg5);
      // console.log("6 : ", sugg6);
      // console.log("7 : ", sugg7);
      // console.log("8 : ", sugg8);
    }).catch((error) =>
      console.log("the search suggestion error - ", error));
  }


  const GoFor = () => {
    {
      ting
        ?
        Choosy()
        :
        swal("Search field is Empty", "🔍", "warning");
    }
  }
  const Choosy = () => {
    if (selected !== "Youtube") {
      setTimeout(() => {
        OpenInsta();
      }, 2000);

    } else {

      setTimeout(() => {
        // IdGettinY();
        OpenYoutube();
      }, 2000);

    }
  }
  const OpenYoutube = () => {

    // alert("hoho reached to end did it work as planned", idTing)
    {
      ting
        ?
        // navigate("/Dreabee/Dashboard/search-youtube", { state: { Ting: ting, Idz: idTing } })
        navigate("/Dreabee/Dashboard/search-youtube", { state: { tag: ting, Idz: idTing } })
        :
        // alert("LOADING")
        console.log("there is no thing in the entry")
    }
  }
  const OpenInsta = () => {
    navigate("/Dreabee/Dashboard/search-instagram", { state: { tag: ting } })
  }


  return (
    <>
      <div className="container-fluid pt-4">
        {/* HEADING  */}
        <div className="row ">
          <div className="col-lg-7">
            <span
              className=""
              style={{ fontWeight: "400", fontSize: "1.1rem" }}
            >
              {" "}
              👋 Welcome back, Username <br />
            </span>

            <h3
              className="mt-2"
              style={{ fontSize: "1.75rem", fontWeight: "700" }}
            >
              Search from the{" "}
              <span style={{ color: "#C83B93" }}>Largest Database</span> of
              Influencers
            </h3>
          </div>
          <div className="col-lg-5  pt-1">
            <div className="d-flex justify-content-end">
              <span
                className="mt-1 UnEvenBtnz p-1"
                onClick={() => setInviteTeammates(true)}
                style={{
                  background: "",
                  width: "13rem",
                  fontWeight: "600",
                  fontSize: "1.05rem",
                  borderRadius: "10px",
                  border: "1px solid #C83B93",
                  color: "#C83B93",
                  cursor: "pointer",
                  // "fontFamily": "SourceSans3"
                }}
              >
                <img src={Invite} alt="add" style={{ width: "1.8rem" }} />{" "}
                &nbsp; Invite Teammates
              </span>
            </div>
          </div>
        </div>


        {/* SEARCH  */}
        <SearchAll />
        {/* SECTION 3 */}
        <div className="row my-4" style={{ backgroundColor: "", height: "" }}>
          <div className="col-lg-7 ">
            <section>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    <i className="bx bx-right-arrow" style={{ fontWeight: "700" }}>
                      {" "}
                    </i>{" "}
                    <u>See, how it works?</u>
                  </span>
                </div>
                <div className="col-lg-12 text-center mt-2">
                  <span style={{ fontSize: "1.4rem", fontWeight: "600" }}>
                    {" "}
                    Let our experts take care of your next campaign!
                  </span>
                </div>
                <div className="col-lg-12 text-center mt-4">
                  <span
                    style={{ fontSize: "1rem", color: "#7E7E7E" }}
                    className="font-weight-600"
                  >
                    {" "}
                    DREABEE team has planned and executed influencer campaigns
                    for 400+ brands across the country.
                  </span>
                </div>
              </div>
            </section>

            <section className="mx-lg-7">
              <div className="row text-center mt-4 justify-content-center">
                <div className="col-lg-5 col-12">

                  <div className="icon-with-text-card Kardz" style={{ filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))"}} >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <path
                          d="M13.0192 8.99598C10.1292 12.2401 8.14588 16.901 7.96171 17.3401L4.76004 15.966C3.83921 15.5693 3.61254 14.3652 4.32088 13.6568L8.58504 9.39265C9.25088 8.72682 10.2142 8.42932 11.1492 8.61348L13.0192 8.99598ZM15.13 23.3893C15.555 23.8143 16.1784 23.9276 16.7167 23.6726C18.36 22.9076 21.8875 21.1085 24.1684 18.8276C30.6709 12.3251 30.7275 7.02682 30.345 4.76015C30.2949 4.48172 30.1608 4.22529 29.9608 4.02525C29.7607 3.8252 29.5043 3.69112 29.2259 3.64098C26.9592 3.25848 21.6609 3.31515 15.1584 9.81765C12.8775 12.0985 11.0925 15.626 10.3134 17.2693C10.0584 17.8076 10.1859 18.4451 10.5967 18.856L15.13 23.3893ZM25.0042 20.981C21.76 23.871 17.0992 25.8543 16.66 26.0385L18.0342 29.2401C18.4309 30.161 19.635 30.3877 20.3434 29.6793L24.6075 25.4151C25.2734 24.7493 25.5709 23.786 25.3867 22.851L25.0042 20.981ZM12.665 24.6643C12.8024 25.3504 12.7683 26.0598 12.5656 26.7296C12.363 27.3993 11.9981 28.0086 11.5034 28.5035C10.4125 29.5943 7.02671 30.4018 4.83088 30.8268C3.85338 31.011 2.98921 30.1468 3.17338 29.1693C3.59838 26.9735 4.39171 23.5876 5.49671 22.4968C5.99156 22.0021 6.6009 21.6372 7.27063 21.4346C7.94036 21.2319 8.64977 21.1978 9.33588 21.3351C10.9934 21.6468 12.3534 23.0068 12.665 24.6643ZM18.4167 12.7501C18.4167 11.1918 19.6917 9.91682 21.25 9.91682C22.8084 9.91682 24.0834 11.1918 24.0834 12.7501C24.0834 14.3085 22.8084 15.5835 21.25 15.5835C19.6917 15.5835 18.4167 14.3085 18.4167 12.7501Z"
                          fill="#20F0BC"
                        />
                      </svg>
                    </span>
                    <h6 className="mt-3">
                      <strong className="text-pink-color">Guided</strong>{" "}
                      influencer selection
                    </h6>
                  </div>
                  {/* <img src={pic1} alt="pic1" style={{ width: "12rem" }} />{" "} */}
                </div>
                <div className="col-lg-5 col-12">

                  <div className="icon-with-text-card Kardz" style={{ filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))"}} >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                      >
                        <path
                          d="M31.1673 29.75H2.83398V4.25H5.66732V26.9167H8.50065V14.1667H14.1673V26.9167H17.0007V8.5H22.6673V26.9167H25.5007V19.8333H31.1673V29.75Z"
                          fill="#20F0BC"
                        />
                      </svg>
                    </span>
                    <h6 className="mt-3">
                      Better <strong className="text-pink-color">ROI</strong>{" "}
                      prediction
                    </h6>
                  </div>
                </div>
                <div className="col-lg-5 mt-4 col-12">

                  <div className="icon-with-text-card Kardz" style={{ filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))"}} >
                    <span>
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_2074_30241)">
                          <path
                            d="M12.75 0L0 17H12.75L4.25 34L34 12.75H17L29.75 0H12.75Z"
                            fill="#20F0BC"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2074_30241">
                            <rect width="34" height="34" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <h6 className="mt-3">
                      <strong className="text-pink-color">
                        Prompt response
                      </strong>{" "}
                      usually in an hour
                    </h6>
                  </div>
                  {/* <img src={pic1} alt="pic1" style={{ width: "12rem" }} />{" "} */}
                </div>
                <div className="col-lg-5 mt-4 col-12">

                  <div className="icon-with-text-card Kardz" style={{ filter: "drop-shadow(0px 5px 30px rgba(0, 0, 0, 0.10))"}} >
                    <span>
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 3.1875C14.2682 3.1875 11.5976 3.99759 9.32619 5.51533C7.05474 7.03306 5.28436 9.19028 4.23892 11.7142C3.19348 14.2381 2.91995 17.0153 3.45291 19.6947C3.98587 22.374 5.30138 24.8352 7.23309 26.7669C9.16481 28.6986 11.626 30.0141 14.3053 30.5471C16.9847 31.0801 19.7619 30.8065 22.2858 29.7611C24.8097 28.7157 26.9669 26.9453 28.4847 24.6738C30.0024 22.4024 30.8125 19.7319 30.8125 17C30.8086 13.3379 29.3522 9.82687 26.7626 7.23736C24.1731 4.64785 20.6621 3.19137 17 3.1875ZM5.31251 17C5.31602 13.9014 6.54851 10.9306 8.73958 8.73957C10.9306 6.5485 13.9014 5.31602 17 5.3125V28.6875C13.9014 28.684 10.9306 27.4515 8.73958 25.2604C6.54851 23.0694 5.31602 20.0986 5.31251 17Z"
                          fill="#20F0BC"
                        />
                      </svg>
                    </span>
                    <h6 className="mt-3">
                      Transparent{" "}
                      <strong className="text-pink-color">pricing</strong>
                    </h6>
                  </div>
                  {/* <img src={pic1} alt="pic1" style={{ width: "12rem" }} />{" "} */}
                </div>
                {/* <img src={pic1} alt="pic1" style={{ width: "12rem" }} />{" "} */}

                {/* <div className="col-lg-6 " style={{ paddingLeft: "0rem" }}>
                  {" "}
                  <img src={pic2} alt="pic2" style={{ width: "12rem" }} />{" "}
                </div>

                <div className="col-lg-6 mt-4" style={{ paddingLeft: "12rem" }}>
                  {" "}
                  <img src={pic3} alt="pic3" style={{ width: "12rem" }} />{" "}
                </div>
                <div className="col-lg-6 mt-4" style={{ paddingLeft: "0rem" }}>
                  {" "}
                  <img src={pic4} alt="pic4" style={{ width: "12rem" }} />{" "}
                </div> */}
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => setShowTalktoExpert(true)}
                    className="align-items-center d-flex p-2 btnz"
                    style={{
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#C83B93",
                      border: "none",
                      marginTop: "2rem",
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
                    &nbsp; Talk to an Expert
                  </button>
                </div>
              </div>
            </section>
          </div>

          <div className="col-lg-5  ">
            <img
            className=""
              src={vector}
              alt="photo2"
              style={{ width: "34rem", marginTop: "5rem", marginLeft: "-4rem" }}
            />
          </div>

          <div className="col-lg-12"></div>
        </div>

        {/* <button onClick={PlanPopUp} > New Plans + </button> */}
        {/* <HomePagePlan/> */}
      </div>

      {/* modal */}
      {inviteTeammates && (
        <>
          <div
            id="overlay"
            className="pb-4"
            style={{
              position: "fixed",
              width: "100%",
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
                onClick={() => setInviteTeammates(false)}
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
                  Invite your teammates
                </section>
                <img
                  src={Linee}
                  alt="line"
                  style={{ width: "30rem", marginLeft: "2rem" }}
                />

                {/* form section  */}
                <section className="mt-4">
                  <div className="ms-5 mt-4">
                    <div>
                      <div className="input-group" style={{ width: "70%" }}>





                        {/* <input
                          type="text"
                          className="form-control"
                          placeholder="Enter website url"
                          aria-label="Enter website url"
                          aria-describedby="button-addon2"
                          style={{
                            padding: "14px 0 14px 20px ",
                            fontSize: "16px",
                            fontWeight: "600",
                            borderRadius: "10px 0 0 10px",
                            border: "1px solid #7E7E7E",
                          }}
                        />
                        <button
                          className="btn btn-outline-secondary"
                          type="button"
                          id="button-addon2"
                          style={{
                            fontWeight: "600",
                            fontSize: "1.05rem",
                            color: "white",
                            backgroundColor: "#000",
                            borderRadius: "0 10px 10px 0",
                            border: "none",
                          }}
                        >
                          Copy Link
                        </button> */}



                      </div>
                    </div>

                    <input
                      type="text"
                      className="mt-2"
                      placeholder="Add Email Address 1"
                      style={{
                        width: "40rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />

                    {/* v edited */}

                    {inputValues.map((value, index) => (
                      <div key={index}>
                        <input

                          value={value}
                          onChange={(event) => handleInputChange(event, index)}
                          type="text"
                          className="mt-4"
                          placeholder={"Add Email Address " + (index + 2)}
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
                    ))}






                  </div>
                </section>

                <section className="ms-5 mt-4" style={{ "cursor": "pointer" }} onClick={handleAddInput}  >
                  <h5>+ Add more or invite to bulk</h5>
                </section>

                <section className="bg mt-4 d-flex justify-content-end mx-5  pb-5">
                  <button
                    className="text-center p-2"
                    onClick={() => setInviteTeammates(false)}
                    style={{
                      width: "13rem",
                      height: "2.8rem",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderRadius: "10px",
                      color: "#000",
                      backgroundColor: "white",
                      border: "none",
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-center p-2"
                    onClick={() => setInviteTeammates(false)}
                    style={{
                      width: "13rem",
                      height: "2.8rem",
                      fontWeight: "600",
                      fontSize: "1.05rem",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#C83B93",
                      border: "none",
                    }}
                  >
                    {" "}
                    Send Invites
                  </button>
                </section>
              </section>
            </span>
          </div>
        </>
      )}

      {/* showTalktoExpert modal */}

      {showTalktoExpert && (
        <div
          id="overlay"
          className="pb-4 "
          style={{
            position: "fixed",
            width: "100%",
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
              className="btnz"
              style={{
                background: "none",
                border: "none",
                zIndex: "25",
                position: "relative",
                top: "11%",
                left: "40.2rem",
              }}
              onClick={() => setShowTalktoExpert(false)}
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
              className="btnz"
              style={{
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
                Talk to an Expert
              </section>
              <img
                src={Linee}
                alt="line"
                style={{ width: "30rem", marginLeft: "2rem" }}
              />

              {/* form section  */}
              <section className="mt-4 custom-scroll">
                <div className="mx-5">
                  <div className="discuss-card p-4">
                    <h4 className="">
                      Discuss your campaigns with an expert in a 1:1 session
                    </h4>
                    <img src={Linee} alt="line" style={{ width: "30rem" }} />
                    <div className="row mt-3">
                      <div className="col-lg-6 col-12">
                        <h5>💰 Transparent Pricing</h5>
                      </div>
                      <div className="col-lg-6 col-12">
                        <h5>📊 Better ROI prediction</h5>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-lg-6 col-12">
                        <h5>💡 Guided Influencer Selection</h5>
                      </div>
                      <div className="col-lg-6 col-12">
                        <h5>👌 Good Content Quality</h5>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div
                      style={{
                        padding: " 0 0 2px 18px",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                      className="mt-4 text-muted"
                    >
                      {" "}
                      Your name
                    </div>
                    <input
                      type="text"
                      className=""
                      placeholder="Enter name  here"
                      style={{
                        width: "40rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                    <div
                      style={{
                        padding: " 0 0 2px 18px",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                      className="mt-4 text-muted"
                    >
                      {" "}
                      Your phone number
                    </div>
                    <input
                      type="number"
                      placeholder="Enter Your phone number"
                      style={{
                        width: "40rem",
                        padding: " 14px 0 14px 20px ",
                        fontSize: "16px",
                        fontWeight: "600",
                        borderRadius: "10px",
                        border: "1px solid #7E7E7E",
                      }}
                    />
                    <div
                      style={{
                        padding: " 0 0 2px 18px",
                        fontSize: "17px",
                        fontWeight: "600",
                      }}
                      className="mt-4 text-muted"
                    >
                      {" "}
                      What kind of campaign are you planning?
                    </div>
                    <div className="d-flex">
                      <section className="chip-checkbox m-2">
                        <input
                          type="checkbox"
                        // id={i}
                        // value={item}
                        // checked={contentCategories.includes(
                        //   item
                        // )}
                        // onChange={handleCheckboxChange}
                        />
                        <label className="shaow rounded  shadow-none border border-dark">
                          Paid
                        </label>
                      </section>
                      <section className="chip-checkbox m-2">
                        <input
                          type="checkbox"
                        // id={i}
                        // value={item}
                        // checked={contentCategories.includes(
                        //   item
                        // )}
                        // onChange={handleCheckboxChange}
                        />
                        <label className="shaow rounded shadow-none border border-dark">
                          Barter
                        </label>
                      </section>
                      <section className="chip-checkbox m-2">
                        <input
                          type="checkbox"
                        // id={i}
                        // value={item}
                        // checked={contentCategories.includes(
                        //   item
                        // )}
                        // onChange={handleCheckboxChange}
                        />
                        <label className="shaow rounded  shadow-none border border-dark">
                          Not decided yet
                        </label>
                      </section>
                    </div>
                  </form>
                </div>
              </section>

              {/* TalktoExpert */}
              <section className="bg mt-4 d-flex justify-content-end mx-5  pb-5">
                <button
                  className="text-center p-2 me-3"
                  onClick={() => setShowTalktoExpert(false)}
                  style={{
                    width: "13rem",
                    height: "2.8rem",
                    fontWeight: "600",
                    fontSize: "1.05rem",
                    borderRadius: "10px",
                    color: "#000",
                    backgroundColor: "white",
                    border: "none",
                  }}
                >
                  Cancel
                </button>
                <button
                  className="text-center p-2"
                  onClick={() => setShowTalktoExpert(false)}
                  style={{
                    width: "13rem",
                    height: "2.8rem",
                    fontWeight: "600",
                    fontSize: "1.05rem",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#C83B93",
                    border: "none",
                  }}
                >
                  {" "}
                  Schedule a Call
                </button>
              </section>
            </section>
          </span>
        </div>
      )}

      <div className="container-fluid pb-5" style={{ paddingTop: "4rem" }}>
        <CampaignzHome />
        <PlanzHome />
        <ReportzHome />
        {/* <BrandAnalysisHome /> */}
      </div>
    </>
  );
};

export default Home;
