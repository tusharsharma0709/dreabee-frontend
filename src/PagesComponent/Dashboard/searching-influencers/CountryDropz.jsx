import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CountryDropz = () => {
    const [countrySearch, setCountrySearch] = useState()
    const [allCountry, setAllCountry] = useState([])


    useEffect(() => {
        CountryIdz()

    }, [])


    const CountryIdz = () => {

        // let countryy;

        // if (coun) {
        //     return countryy === coun;
        // } else {
        //     countryy = "";
        // }
        axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/country`, {
            filter: countrySearch
        }).then((res) => {
            console.log("All the countryyyyyy : : ", res.data)
            setAllCountry(res.data);
        }).catch((err) => {
            console.log("the utube video api country error - ", err)
        })
    }

    return (
        <>

            <section className='bg-light text-center  rounded py-2' style={{ "maxHeight": "600px", "width": "250px", "position": "relative", top: "0.2rem", "right": "15.5rem", overflowY: "scroll", overflowX: "hidden",border : "1px solid black"}}>
          
          
                <input type='text' placeholder='Search country ' style={{ width: "180px" }} className='px-2 py-2' value={countrySearch} onChange={(e) => {
                    setCountrySearch(e.target.value);
                    CountryIdz()
                }} />

                <section className='d-flex flex-column justify-content-center py-1' >

                    {
                        allCountry

                            ?
                            allCountry.map((data, index) => {
                                return (
                                    <button className='py-2 bg-light hoverpe rounded' style={{ border: "none", }} > {data.name} &  {data.code}</button>
                                );



                            })
                            :
                            <h5>NO search Found</h5>
                    }

                </section>
            </section>

        </>
    )
}

export default CountryDropz