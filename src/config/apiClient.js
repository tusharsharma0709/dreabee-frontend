import axios from "axios";
import Urls from "./url";
const apiClient = axios.create({
  baseURL: Urls.BASE_URL,
  responseType: "json",
  withCredentials: false,
  // headers: {AuthorizationUser: Config.AUTH_HEADER},
  // timeout: 30000,
});
const postRequest = async (endpoint, rawdata) => {
  try {
    console.log("---rawData---", rawdata, endpoint);
    let token = ""; // You may set the token here if needed.

    const config = {
      headers: {
        "Content-Type": "application/json",
        authorization: token ? `Bearer ${token}` : null,
      },
    };

    console.log("config", config);

    let rawResponse = await apiClient.post(endpoint, rawdata, config);
    console.log("------rawResponse----", rawResponse.data);
    return rawResponse.data;
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};

// Get Method
const getRequest = async (endpoint, showLoader) => {
  // let token = "";
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     authorization: token != null?`Bearer ${token}`:null,
  //     // "accept-language": Globals.kLanguage,
  //   },
  // };

  try {
    let rawResponse = await apiClient.get(endpoint);
    return rawResponse;
  } catch (error) {
    const message = error.response
      ? error.response && error.response.data && error.response.data.message
      : "Network Error or Server down, Please try again later.";
      return message;
  }
};

const deleteRequest = async (endpoint) => {
  try {
    let rawResponse = await apiClient.delete(endpoint);
    return rawResponse;
  } catch (error) {
    console.log("error", error);
  }
};

export { getRequest, postRequest, deleteRequest };
