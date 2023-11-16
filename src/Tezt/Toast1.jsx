import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Toast1 = () => {

    const [dataFromFirstApi, setDataFromFirstApi] = useState([]);
    const [dataFromSecondApi, setDataFromSecondApi] = useState([]);
    const [xValue, setXValue] = useState('');
    const [yValue, setYValue] = useState('');

    const [one, setOne] = useState([]);

    const z = () => {
        axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/video-id`, { keyword: "robin" })
            .then(async (response) => {

                console.log("the first api channel id: ", response.data.data[0].channel_id)
                console.log("the first api only id : ", response.data.data[0].id)

                setDataFromFirstApi(response.data.data);
                const x = response.data.data[0].id;
                const y = response.data.data[0].channel_id;
                setXValue(x);
                setYValue(y);
                const fetchResult = await Promise.all(
                    (response.data.data).map(async (elem) => {
                        const res = await axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/video-details`, { channel_id: elem.channel_id, id: elem.id })
                        return res.data;
                    })
                );
                console.log(fetchResult)


                // VIDEO DETAILS =================================>
                console.log("the second api VIDEO DETAILS THUMBNAIL: ", fetchResult[0].video_details[0].snippet.thumbnails.maxres.url)

                console.log("the second api VIDEO DETAILS TAGS: ", fetchResult[0].video_details[0].snippet.title)

                console.log("the second api VIDEO DETAILS PUBLISHED DATE: ", fetchResult[0].video_details[0].snippet.publishedAt)


                // console.log("the second api VIDEO DETAILS TAGS: ", fetchResult[0].video_details[0])

                console.log("the second api VIDEO DETAILS VIEW-COUNT: ", fetchResult[0].video_details[0].statistics.viewCount)
                console.log("the second api VIDEO DETAILS LIKE-COUNT: ", fetchResult[0].video_details[0].statistics.likeCount)
                console.log("the second api VIDEO DETAILS COMMENT-COUNT: ", fetchResult[0].video_details[0].statistics.commentCount)



                // CHANNEL DETAILS ================================>
                console.log("the second api CHANNEL THUMBNAIL: ", fetchResult[0].channel_details[0].snippet.thumbnails.high.url);
                console.log("the second api CHANNEL NAME: ", fetchResult[0].channel_details[0].snippet.title);
                console.log("the second api CHANNEL SUBSCRIBERS : ", fetchResult[0].channel_details[0].statistics.subscriberCount);


                setDataFromSecondApi(fetchResult)
            })
            .catch((error) => {
                console.error('Error fetching data from the first API', error);
            });
    }

    const Videoprofile = async (channel_id) => {
        console.log("channel id=", channel_id)
            .then((response) => {
                // Map the data from the second API and store it
                console.log("the second api : ", response.data)

                // return response.data

                // const mappedSecondData = response.data.data.map((item) => ({
                //     // Map your data here as needed
                // }));
                // setDataFromSecondApi(mappedSecondData);
            })
            .catch((error) => {
                console.error('Error fetching data from the second API', error);
            });
    }

    useEffect(() => {
        // First API request
        // videoDetails()   
        CountryIdz()
        Catziz();
    }, []);
    // ________________________________________________________________

    const [pageNow, setPageNow] = useState(1)
    const [pageAll, setPageAll] = useState(20)





    const DecNo = () => {
        let x = pageNow - 1;
        if (x <= 0) {
            x = 0;
        } else {
            setPageNow(pageNow - 1)
        }

    }
    const IncNo = () => {
        let x = pageNow + 1;
        if (x > pageAll) {
            x = pageAll;
        } else {
            setPageNow(pageNow + 1)

        }
    }
    // __________________________________






    const [categories, setCategories] = useState([]); // The array to store selected checkboxes' values
    const [county, setCounty] = useState([]); // The array to store selected checkboxes' values

    const checkboxes = [
        { id: 1, label: 'Category 1', value: 'category1' },
        { id: 2, label: 'Category 2', value: 'category2' },
        { id: 3, label: 'Category 3', value: 'category3' },
        // Add more checkboxes as needed
    ];




    const handleCheckboxChange0 = (value) => {
        if (categories.includes(value)) {
            // Remove the value from the array if it's already there
            setCategories(categories.filter((category) => category !== value));
            console.log("categoryryryry removed :  ", categories)

        } else {
            // Add the value to the array if it's not there
            setCategories([...categories, value]);
            console.log("categoryryryry :  ", categories[0])
        }
    };

    const renderCheckboxes0 = () => {
        return checkboxes.map((checkbox) => (
            <label key={checkbox.id}>
                <input
                    type="checkbox"
                    value={checkbox.value}
                    checked={categories.includes(checkbox.value)}
                    onChange={() => handleCheckboxChange(checkbox.value)}
                />
                {checkbox.label}
            </label>
        ));
    };



    // ______________________________________________________________________________________________________________________________________________________________



    const [colState, setColState] = useState(false);

    const handleCheckboxChange = (value) => {
        if (county.includes(value)) {
            // Remove the value from the array if it's already there
            setCounty(county.filter((county) => county !== value));
            console.log("categoryryryry removed :  ", county)
            setColState(false)

            setTimeout(() => {
                county ?
                    county.map((data) => {
                        videoDetailsz(data)
                    })
                    :
                    console.log("LOADING REMOVED HOWLLLL")
            }, 1000);



        } else {
            // Add the value to the array if it's not there
            setCounty([...county, value]);
            console.log("categoryryryry :  ", county)
            setColState(true)


            setTimeout(() => {
                county ?
                    county.map((data) => {
                        videoDetailsz(data)
                    })
                    :
                    console.log("LOADING NEWNEW HOWLLLL")
            }, 1000);


        }
    };

    const renderCheckboxes = () => {
        return allCountry.map((data) => (
            <div className='container   bg-danger' style={{ "width": "100vw" }}>
                <div className='row w-100'>
                    <div className='col-lg-12'>
                        <label className='p-1 bg-info mx-1' >
                            <input
                                type="checkbox"
                                value={data.code}

                                checked={county.includes(data.code)}
                                onChange={() => handleCheckboxChange(data.code)}
                            />
                            {data.name}
                            <br />
                        </label>
                    </div>
                </div>
            </div>


        ));
    };

    const videoDetailsz = (countryy) => {

        axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/video-id`, {
            keyword: "funny",
            country: countryy,
            // type: typee,
            // duration: durationn,
            // advertisement: advertisementt,
            // category: categoryy,
            // publishDateFilter: publishDateFilterr,
            // minViews: minView,
            // maxViews: maxView,

        }).then(async (response) => {

            console.log("FIRST API RESPONESE FROM TEST! ", response.data)
            console.log("TEST API VIDEO ID: ", response.data.data[0].channel_id)
            console.log("TEST API VIDEO ID : ", response.data.data[0].id)

            // const x = response.data.data[0].id;
            // const y = response.data.data[0].channel_id;


            // const fetchResult = await Promise.all(
            //     (response.data.data).map(async (elem) => {
            //         const res = await axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/video-details`,
            //             { channel_id: elem.channel_id, id: elem.id })
            //         return res.data;
            //     })
            // );
            // console.log(fetchResult)
            // setAllVideo(fetchResult)


        }).catch((error) => {
            console.error('test api error ', error);
        });
    }

    // ______________________________________________________________________________________________________________________________________________________________


    const [cats, setCats] = useState([]); // The array to store selected checkboxes' values
    const [catzz, setCatzz] = useState([]); // The array to store selected checkboxes' values








    const renderCats = () => {
        return cats.map((data) => (
            <div className='container   bg-danger' style={{ "width": "100vw" }}>
                <div className='row w-100'>
                    <div className='col-lg-12'>
                        <label className='p-1 bg-info mx-1' >
                            <input
                                type="checkbox"
                                value={data.code}

                                checked={county.includes(data.code)}
                                onChange={() => handleCheckboxChange(data.code)}
                            />
                            {data.name}
                            <br />
                        </label>
                    </div>
                </div>
            </div>


        ));
    };

    const Catziz = (countryy) => {
        axios.post(`https://dreabee-search-backend.azurewebsites.net/youtube/catId`).then(async (response) => {
            console.log("THE CATEGORIES ARE HERE ! : ", response.data)
            setCats(response.data)
        }).catch((error) => {
            console.error('test api error ', error);
        });
    }

    // _______________________________________________________________________________


    const [countrySearch, setCountrySearch] = useState("")
    const [allCountry, setAllCountry] = useState([])


    const CountryIdz = () => {

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
            {/* <div>
                <h1>Data from First API:</h1>
                <ul>
                    {
                        dataFromFirstApi
                            ?

                            dataFromFirstApi.map((item, index) => (
                                <li key={index}>{item.video_title}</li>
                            ))

                            :
                            <h6>not yet</h6>
                    }
                </ul>

                <h1>Data from Second API:</h1>
                <ul>
                    {
                        dataFromSecondApi
                            ?
                            dataFromSecondApi.map((item, index) => (
                                <li key={index}>{item.screen_name}</li>
                            ))
                            :
                            <h5>not yet</h5>
                    }
                </ul>
            </div> */}


            {/* <div>
                {renderCheckboxes0()}
                <div>
                    Selected Categories: {categories.join(', ')}
                </div>
            </div> */}


            <hr />


            <div>
                {renderCheckboxes()}
                <div className=''>
                    Selected country: {county.join(' , ')}
                </div>
            </div>



            <hr />



            <div>
                {renderCats()}
                <div className=''>
                    Selected Categories: {county.join(' , ')}
                </div>
            </div>






















            {/* ++++++++++++++++++new++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

            {/* <section className='bg-info Kardz' style={{ "height": "600px", "width": "200px", "position": "", top: "0.2rem", "right": "15.5rem" }}>
                <input type='text' style={{ width: "150px" }} className='px-2 py-2' value={countrySearch} onChange={(e) => {
                    setCountrySearch(e.target.value);
                    CountryIdz()
                }} />
                <section className='m-2 p-1' >
                    <ul>

                        {
                            allCountry

                                ?
                                allCountry.map((data, index) => {
                                    return (
                                        <li className='py-2' style={{ "textDecoration": "none" }} > {data.name} &  {data.code}</li>

                                    );

                                })
                                :
                                null
                        }
                    </ul>
                </section>
            </section> */}






            {/* <div className='bg-info w-100'>
                <section className='d-flex align-items-center py-5 justify-content-center'>

                    <button className='mx-5 bg-primary text-light rounded py-2 px-5' onClick={DecNo}> prev</button>
                    {pageNow} of {pageAll}
                    <button className='mx-5 bg-primary text-light rounded py-2 px-5' onClick={IncNo}> next</button>
                </section>

            </div> */}

            {/* <div className='bg-primary w-100' style={{ "height": "100vh" }} > */}
            {/* <section className='  container'>
                    <div className='div-box  p-4 '> box-1</div>
                    <div className='div-box  p-4 '> box-2</div>
                    <div className='div-box   p-4'> box-2</div>

                </section> */}
            {/* </div> */}


        </>
    );


}

export default Toast1