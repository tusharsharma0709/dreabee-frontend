import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Toast1 from '../Tezt/Toast1'
import Toast2 from '../Tezt/Toast2'


import BusinessLanding from '../Pages/BusinessLandingPage'
import PaidCollabsLandingPage from '../Pages/PaidCollabsLandingPage'
import CreatorsLandingPage from '../Pages/CreatorsLandingPage'
import { LandinPage } from '../Pages/LandinPage'

import Signup from '../Pages/Brands_Login_SignUp/Signup'
import Login from '../Pages/Brands_Login_SignUp/Login'
import BrandLogINOtp from '../Pages/Brands_Login_SignUp/WithOtp/BrandLogINOtp'
import AgencySignUp from '../Pages/Agency_Login_SignUp/AgencySignUp'
import AgencyLogInForm from '../Pages/Agency_Login_SignUp/AgencyLogInForm'

import BrandsOn from '../Pages/Brands_Login_SignUp/BrandsOnboarding/BrandsOn'
import BrandsOn2 from '../Pages/Brands_Login_SignUp/BrandsOnboarding/BrandOn2'
import BrandsOn3 from '../Pages/Brands_Login_SignUp/BrandsOnboarding/BrandsOn3'
import BrandsOn4 from '../Pages/Brands_Login_SignUp/BrandsOnboarding/BrandsOn4'
import BrandsOn5 from '../Pages/Brands_Login_SignUp/BrandsOnboarding/BrandsOn5'

import InfluReg1 from '../Pages/InfluencersRegister/InfluReg1'
import InfluReg3 from '../Pages/InfluencersRegister/InfluReg3'
import InfluReg3_2 from '../Pages/InfluencersRegister/InfluReg3_2'
import InfluReg4 from '../Pages/InfluencersRegister/InfluReg4'
import InfluReg5 from '../Pages/InfluencersRegister/InfluReg5'
import InfluReg6 from '../Pages/InfluencersRegister/InfluReg6'
import InflueReg7 from '../Pages/InfluencersRegister/InflueReg7'
import InfluReg9 from '../Pages/InfluencersRegister/InfluReg9'
import InfluReg10 from '../Pages/InfluencersRegister/InfluReg10'
import InfluReg11 from '../Pages/InfluencersRegister/InfluReg11'
import InfluReg8 from '../Pages/InfluencersRegister/InfluReg8'
import InfluReg2 from '../Pages/InfluencersRegister/InfluReg2'
import Dash from '../Pages/Dash'
import Home from '../PagesComponent/Dashboard/Home'
import Search from '../PagesComponent/Dashboard/Search'
import ProfileUp from '../PagesComponent/Dashboard/ProfileUp'
import Reports from '../PagesComponent/Dashboard/Reports'
import Plans from '../PagesComponent/Dashboard/Plans'
import Manually from '../PagesComponent/Dashboard/Comp/Plans_Comp/Manually'
import ChooseAmong from '../PagesComponent/Dashboard/Comp/Plans_Comp/ChooseAmong'
import ProfileSumm from '../PagesComponent/Dashboard/Comp/Profile_Profile/ProfileSumm'
import ProfileInsta from '../PagesComponent/Dashboard/Comp/Profile_Profile/ProfileInsta'
import ProfileYoutube from '../PagesComponent/Dashboard/Comp/Profile_Profile/ProfileYoutube'
import Proff from '../PagesComponent/Dashboard/Comp/Profile_Profile/Proff'
import Campagin from '../PagesComponent/Dashboard/Campagin/Campagin'
import PlanDetails from '../PagesComponent/Dashboard/PlanDetails'
import CreateCampaignStep1 from '../PagesComponent/Dashboard/Campagin/CreateCampaignStep1'
import CreateCampaignStep2 from '../PagesComponent/Dashboard/Campagin/CreateCampaignStep2'
import CreateCampaignStep3 from '../PagesComponent/Dashboard/Campagin/CreateCampaignStep3'
import SearchingInfluencers from '../PagesComponent/Dashboard/searching-influencers/SearchingInfluencers'
// import BrandDetails from '../PagesComponent/Dashboard/BrandDetails'
import GamesDetails from '../PagesComponent/Dashboard/component/BrandsAnalysisComp/GamesDetails'
import BrandSites from '../PagesComponent/Dashboard/component/BrandsAnalysisComp/BrandSites'
import BrandGames from '../PagesComponent/Dashboard/component/BrandsAnalysisComp/BrandGames'
import BrandDetails from '../PagesComponent/Dashboard/component/BrandsAnalysisComp/BrandDetails'
import BrandsOn1 from '../Pages/Brands_Login_SignUp/BrandsOnboarding/BrandsOn1'
import YoutubeSearch from '../PagesComponent/Dashboard/YoutubeSearch'
import YoutubeSearch2 from '../PagesComponent/Dashboard/YoutubeSearch2'
import PlanCreate2 from '../PagesComponent/Dashboard/searching-influencers/SearchingInfluencers2'
import PremiumPopUp from '../PagesComponent/Dashboard/component/PremiumPopUp'
import InstagramSearch from '../PagesComponent/Dashboard/component/SearchSection/InstagramSearch'
import PrivateRoutey from './PrivateRoutey'
import BusinessLanding3Img from '../PagesComponent/Business_LandingPg/BusinessLanding3Img'
import SearchAll from '../PagesComponent/Dashboard/component/SearchSection/SearchAll'
import ReportExp from '../PagesComponent/Dashboard/component/CampaignReporting/ReportExp'
import Ape from '../BireFase/Ape'

const Routey = () => {
  const LoggedIn = window.localStorage.getItem("isLoggedIn");
  return (
    <>
      <Routes>
        <Route path="/" element={LoggedIn ? <Navigate to="/Dreabee/Dashboard/" /> : <LandinPage />} />

        {/*________ brands login/ register _______________ */}
        <Route path='SignUp' element={<Signup />} />
        <Route path='LogIn' element={<Login />} />
        <Route path='LogInb' element={<BrandLogINOtp />} />

        {/*_____________agency login/ register_____________ */}
        {/* <Route path='LogIn' element={< />} /> */}
        <Route path='SignUpAgency' element={<AgencySignUp />} />
        <Route path='LogInAgency' element={<AgencyLogInForm />} />


        {/* __________brands/agency onboard ________________ */}
        <Route path='bfire' element={<BrandsOn />} />
        <Route path='Onboarding1' element={<BrandsOn1 />} />
        <Route path='Onboarding2' element={<BrandsOn2 />} />
        <Route path='Onboarding3' element={<BrandsOn3 />} />
        <Route path='Onboarding4' element={<BrandsOn4 />} />
        <Route path='Onboarding5' element={<BrandsOn5 />} />


        <Route path='Apee' element={<Ape />} />

        {/* __________Landin pages (Static Pages) ✂️ ________________ */}

        <Route path='LandingPage' element={<LandinPage />} />
        <Route path='Business_LandingPage' element={<BusinessLanding />} />
        <Route path='Paid_Collabs_LandingPage' element={<PaidCollabsLandingPage />} />
        <Route path='Creators_LandingPage' element={<CreatorsLandingPage />} />

        {/* __________influencers register ________________ */}

        <Route path='Phone_Verification_Influencers' element={<InfluReg1 />} />
        <Route path='Enter_Instagram_Profile' element={<InfluReg3 />} />
        <Route path='Enter_Youtube_Profile' element={<InfluReg3_2 />} />
        <Route path='Contact_Details' element={<InfluReg4 />} />
        <Route path='Personal_Details' element={<InfluReg5 />} />
        <Route path='Languages' element={<InfluReg6 />} />
        <Route path='Content_Categoris' element={<InflueReg7 />} />
        <Route path='Family_Info' element={<InfluReg9 />} />
        <Route path='Pets_Info' element={<InfluReg10 />} />
        <Route path='Done' element={<InfluReg11 />} />

        <Route path='Are you interested in perks' element={<InfluReg8 />} />
        <Route path='b' element={<InfluReg2 />} />


        {/* ___________________Private Route (Dashboard) ✂️________________________________ */}

        <Route path="/Dreabee/*" element={<PrivateRoutey />}>

          {/* __________dashboard page________________ */}

          <Route path='Dashboard//*' element={<Dash />} >
            <Route path="Home" element={<Home />} />
            <Route index element={<Navigate to="home" />} />
            <Route path='Search' element={<Search />} />
            <Route path='ProfileUp' element={<ProfileUp />} />
            <Route path='Report' element={<Reports />} />
            <Route path='ReportExp' element={<ReportExp />} />

            <Route path='Premium' element={<PremiumPopUp />} />


            <Route path='Plans/*' element={<Plans />} />
            <Route path='Mannually' element={<Manually />} />
            <Route path='ChoosingFromDb' element={<ChooseAmong />} />
            <Route path='PlanDetails' element={<PlanDetails />} />
            <Route path='search-influencers' element={<SearchingInfluencers />} />
            <Route path='search-influencers2' element={<PlanCreate2 />} />
            {/* <Route path="search-youtube2" element={<YoutubeSearch/>}/> */}

            <Route path="search-youtube" element={<YoutubeSearch2 />} />
            <Route path="search-instagram" element={<InstagramSearch />} />

            {/* Campagin */}
            <Route path='Campagin/*' element={<Campagin />} />
            <Route path="CampaginStep1" element={<CreateCampaignStep1 />} />
            <Route path="CampaginStep2" element={<CreateCampaignStep2 />} />
            <Route path='CampaginStep3' element={<CreateCampaignStep3 />} />

            {/* Brand */}
            <Route path='BrandDetails' element={<BrandDetails />} />
            <Route path='GamesDetails' element={<GamesDetails />} />
            <Route path='BrandSites' element={<BrandSites />} />
            <Route path='BrandGames' element={<BrandGames />} />

            {/* __________Influencers Profile page________________ */}
            <Route path='Profile/*' element={<Proff />} >
              <Route index element={<ProfileSumm />} />
              <Route path="Summary" element={<ProfileSumm />} />
              <Route path='Instagram' element={<ProfileInsta />} />
              <Route path='Youtube' element={<ProfileYoutube />} />
            </Route>
          </Route>
        </Route>

        {/* __________TESTING PAGES________________ */}

        {/* //sliders */}
        <Route path='test1' element={<Toast1 />} />
        {/* Add more fields on buttom  kliq */}
        <Route path='test2' element={<Toast2 />} />
        <Route path='shh' element={<SearchAll/>} />


        <Route path='test3' element={<BusinessLanding3Img />} />

        {/* __________ page________________ */}
      </Routes>
    </>
  )
}

export default Routey;
// export const baseUrl = "https://dreabee-backend.azurewebsites.net/";




// export const baseUrl2 = "https://dreabee-search-backend.azurewebsites.net";




// export const baseUrl2 = "https://dreabee.azurewebsites.net";
export const baseUrl2 = "https://dreabee-live.azurewebsites.net";
// export const baseUrl = "http://localhost:8081/";
export const baseUrl = "https://dreabee-main.azurewebsites.net/";
// export const baseUrl = "${baseUrl}";
