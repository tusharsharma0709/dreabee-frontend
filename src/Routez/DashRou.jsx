import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom';
import Dash from '../Pages/Dash';
import Home from '../PagesComponent/Dashboard/Home';
import Plans from '../PagesComponent/Dashboard/Plans';
import Search from '../PagesComponent/Dashboard/Search';
import ProfileUp from '../PagesComponent/Dashboard/ProfileUp';
import Manually from '../PagesComponent/Dashboard/Comp/Plans_Comp/Manually';
import ChooseAmong from '../PagesComponent/Dashboard/Comp/Plans_Comp/ChooseAmong';
import Reports from '../PagesComponent/Dashboard/Reports';



const DashRou = () => {
    return (
        <>
            <Routes>
                <Route path="/dash/" element={<Dash />}>

                    <Route path="home" element={<Home />} />
                    <Route index element={<Home />} />
                    <Route path='Search' element={<Search />} />
                    <Route path='ProfileUp' element={<ProfileUp />} />
                    <Route path='Plans' element={<Plans/>} />
                    <Route path='Mannually' element={<Manually />} />
                    <Route path='ChoosingFromDb' element={<ChooseAmong/>} />
                    <Route path='Report' element={<Reports />} />

                </Route>
            </Routes>
            <Outlet />
        </>
    );
}

export default DashRou