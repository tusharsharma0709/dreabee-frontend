import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import { baseUrl2 } from '../Routez/Routey';
import ReactWordcloud from 'react-wordcloud';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


ChartJS.register(ArcElement, Tooltip, Legend);

// import HighchartsReact from 'highcharts-react-official';




const Toast2 = () => {


  // const options = {
  //   title: {
  //     text: ''
  //   },
  //   yAxis: {
  //     title: {
  //       text: 'Values'
  //     }
  //   },
  //   xAxis: {
  //     categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  //   },
  //   series: [
  //     {
  //       name: 'Data1',
  //       data: [3, 6, 9, 12, 15, 12, 43]
  //     },
  //     {
  //       name: 'Data2',
  //       data: [25, 9, 12, 1, 12, 33, 5]
  //     }
  //   ]
  // };



  // const Entertainment = () => {
  //   // axios.post(`{baseUrl2}/${selected1}/hashtag`, {
  //   axios.post(`${baseUrl2}/youtube/hashtag`, {
  //     hashtag: "entertainment"
  //   }).then((res) => {
  //     console.log("THE ENTERTAINEMNET DATA : - ", res.data)


  //     // const parts = (res.data.count).split("•");
  //     // const afterDot = parts[1] ? parts[1].trim() : "";
  //     // const indexOfChannels = afterDot.indexOf("channels");
  //     // const EntNo = indexOfChannels !== -1 ? afterDot.substring(0, indexOfChannels).trim() : "";
  //     // setEnt(EntNo);

  //     // console.log("Entertainemnt data: ", res.data.data[2].image_url);
  //     // console.log("Entertainemnt data: ", res.data.data[3].image_url);
  //     // setEntImg(res.data.data[0].image_url)
  //     // setEntImg2(res.data.data[1].image_url)
  //   }).catch((error) =>
  //     console.log("the Entertainemnt error - ", error));
  // }


  // useEffect(() => {
  //   Entertainment()


  // }, [])



  // Simple configuration to adjust the wordcloud if necessary


















  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };







  // WORD CLOUSD 
  // const wordsArray = [
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   { text: 'word1', value: 64 },
  //   { text: 'word2', value: 32 },
  //   { text: 'word3', value: 20 },
  //   { text: 'word4', value: 18 },
  //   // ... add the rest of your words here
  // ];

  // return (
  //   <ReactWordcloud words={wordsArray} options={options} />
  // );




  const [images, setImages] = useState();

  useEffect(() => {
    Entertainment();

    console.log("the final result  :", images)
    setTimeout(() => {

    }, 10000);
  }, [])


  const Entertainment = () => {
    // axios.post(`{baseUrl2}/${selected1}/hashtag`, {
    axios.post(`${baseUrl2}/youtube/hashtag`, {
      hashtag: "entertainment"
    }).then((res) => {
      console.log("1- THE ENTERTAINEMNET DATA : - ", res.data)
      //  console.log("THE ENTERTAINEMNET DATA VIDEO COUNT : - ", res.data.videoCount)
      //  console.log("THE ENTERTAINEMNET DATA VIDEO COUNT : - ", res.data.videoList[0].snippet.thumbnails.default.url)


      const paidData = res.data.videoList;
      console.log("2 - boom boom  starts", paidData)


      const paidArray = paidData.slice(0, 30).map(item => (item.snippet.thumbnails.default.url));
      console.log("3 - boom boom  ends", paidArray)
      setImages(paidArray);




    }).catch((error) =>
      console.log("the Entertainemnt error - ", error));
  }










  const imag = [
    'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
    'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
    'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
    'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
    'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
    'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
    'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
    'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
    'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
    'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
    'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',
    'https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg',
    'https://i.pinimg.com/564x/5b/59/ce/5b59cea748ff78bfd85b2d25e427148d.jpg',

  ]



  return (
    <>

      {/* <div className="imagez-container bg-primary">
        {imag.map((src, index) => (
          <div key={index} className="imagez-wrapper ">
            <img src={src} width={50}
              alt={`Imagez ${index}`} />
          </div>
        ))}


        <div className="more-imagesz">+54</div>
      </div> */}


 


      <div className="row bg-info">


        {/* <span style={{ width: "0px" }} >
          <img src={imag[0]} style={{ position: "relative" }} alt={imag[0]} className="border rounded-circle border-light border-1" width={50} />
        </span> */}


        {imag.slice(0,).map((src, index) => (
          <span style={{ width: "0px" }} >
            <img src={src} key={index} style={{ position: "", left: "0px" }} alt={`Image ${index}`} className="border rounded-circle border-light border-1" width={50} height={50} />
          </span>
        ))}



        <span  style={{ width: "0px" }} >
        <section className="more-images" style={{minHeight : "50px" , minWidth : "50px"}}  >
          +54
        </section>
        </span>





        {/* <div className="more-images">+54</div> */}
      </div>
    </>
  );








};

export default Toast2


