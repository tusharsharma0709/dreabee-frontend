import React, { useEffect, useState } from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Proff from '../PagesComponent/Dashboard/Comp/Profile_Profile/Proff'
import ProfileSumm from '../PagesComponent/Dashboard/Comp/Profile_Profile/ProfileSumm'
import ProfileInsta from '../PagesComponent/Dashboard/Comp/Profile_Profile/ProfileInsta'
import ProfileYoutube from '../PagesComponent/Dashboard/Comp/Profile_Profile/ProfileYoutube'

const ProfilerRou = (influencerData) => {
    const location = useLocation();
    

    useEffect(() => {
        console.log("this pages locations state ooooooooooooooooo", influencerData)
        // console.log("----influencerData-YOUTUBEooooooooo--", influencerData)

    }, [])

    return (
        <>
            <Routes>

                <Route path="/Profile/**" element={<Proff influencerData={influencerData}  />}>

                    <Route path="Summary" element={<ProfileSumm influencerData={influencerData} />} />
                    <Route index element={<ProfileSumm influencerData={influencerData}  />} />
                    <Route path='Instagram' element={<ProfileInsta influencerData={influencerData}  />} />
                    <Route path='Youtube' element={<ProfileYoutube influencerData={influencerData}  />} />


                </Route>
            </Routes>
            <Outlet />
        </>
    )
}

export default ProfilerRou