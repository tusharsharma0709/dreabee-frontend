import React from 'react';
import { Outlet } from 'react-router';
import Login from '../Pages/Brands_Login_SignUp/Login';

const PrivateRoutey = () => {
    const LoggedIn = window.localStorage.getItem("isLoggedIn");
    // console.log(LoggedIn, "login?");

    if (LoggedIn) {
        return (
            <Outlet />
        );
    } else {
        return (
            <>
                <Login />
            </>
        );
    }
}
    export default PrivateRoutey