import React from 'react'


import FadeLoader from "react-spinners/FadeLoader";
import { useState } from 'react';
import { useEffect } from 'react';
import DashRou from '../Routez/DashRou';
import Navbhar from '../PagesComponent/Dashboard/Comp/Van/Navbhar';

const Dash = () => {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])




    return (
        <>
            {
                loading ? (
                    <section className='' style={{ "height": "100vh", "width": "100vw", "background": "whitesmoke" }} >
                        <div className=' d-flex justify-content-center align-items-center  h-100'>

                            <FadeLoader
                                color={"#C83B93"}
                                loading={loading}
                                // cssOverride={override}
                                size={100}
                            // aria-label="Loading Spinner"
                            // data-testid="loader"
                            />
                        </div>
                    </section>
                ) : (
                    <section className="all " style={{
                        //  backgroundSize: "cover",
                        backgroundRepeat: "no-repeat" }} >
                        <div className="container-fluid " >
                            <div className="row ">
                                <div className="row  d-flex justify-content ">
                                    <div className="col-lg-1 col-md-4  ">
                                        <Navbhar/>
                                    </div>

                                    <div className="col-lg-11 col-md-8 mt-4 ">
                                        <DashRou />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
        </>
    )
}

export default Dash