// const BASE_URL=process.env.REACT_APP_BASE_URL || "https://dreabee-backend.azurewebsites.net/";
const BASE_URL= "http://localhost:8081/";

const Urls = {
    BASE_URL: `${BASE_URL}api/`, //local
  
    //End Points
    SEARCH_INFLUENCER: "Influencer/searchInfluencer", // search bar api 
    CREATE_PLAN: "Brands/createPlan", // create plan api
    GET_ALL_PLANS: "Brands/getPLan", // get all plan list api
    GET_PLAN_DETAILS: "Brands/PlanDetails", // get plan details api
    DELETE_PLAN: "Brands/deletePlan",
    GET_CATEGORIES: "Influencer/ListOfContentCategories",
    CREATE_INFLUENCER_MANUAL: "Influencer/ValidateInfluencerWithManualSearch", 
    CHANGE_STATUS_ARCHIVE_PLAN: "Brands/ArchivePlan", // for change status of plan
    CHANGE_STATUS_UNARCHIVE_PLAN: "Brands/unarchivePlanDetail", // for change status of plan
    CREATE_PLAN_LIST: "Brands/createList", // create list of plan
    DELETE_PLAN_LIST: "Brands/deletelist", // delete list of plan
  };
  
  export default Urls;
  