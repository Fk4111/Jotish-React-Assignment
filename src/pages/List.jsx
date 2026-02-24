import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SalaryChart from "../components/SalaryChart";
import CityMap from "../components/CityMap";
import axios from 'axios'; // ye data fetch krne me help kregi  axios library

export default function List() {
  {/* here i am making list which will be display */}
    const [data, setData]=useState([]);
    const navigate = useNavigate();

// ye useEffect hook component ke mount hone ke baad chalta hai, aur isme hum data fetch karenge API se jo Jotish assignment me given thi
   useEffect(()=>{
    axios.post("https://backend.jotish.in/backend_dev/gettabledata.php",
        {
            username: "test",  // API authentication ke liye username aur password bhejna zaruri hai
            password: "123456"
        },{
            headers:{
                "Content-Type": "application/json" // API ko ye batana zaruri hai ki hum json format me data bhej rahe hain
            }
        }
    )
    .then((res) => {
        console.log(res.data); // API se aane wale data ko state me store kar rha hu
        setData(res.data.TABLE_DATA.data); // API se aane wale data ko state me store kar rha hu
    })
    .catch((err) => {
        console.log("API Err:", err);   
    });

   },[]); // empty dependency array ka matlab hai ki ye effect sirf component ke mount hone par chalega

  return (
    <div style={{background:"linear-gradient(to right, #141e30, #243b55)"}}>
      <h2 style={{color:"white", fontFamily:"cursive", cursor:"pointer"}}> Employee List 👇</h2>
      {/* now we are looping data array, har employye ko ek div me show krenge*/}
      {data.map((item, index) =>(

        // now we make unique key for react to identify each element in the list
        // click krne pr details page pr navigat krenge 
        // aur sath me se employee ki id yaani ke data bhi pass kr rhe hain

        <div style={{color:"white", padding:"10px", margin:"10px", border:"1px solid white", borderRadius:"5px"}} key={index}  onClick={()=> navigate(`/details/${index}`, {state: item})} >
            {/* here we are showing employee name and email in the list*/}
            <p>Name: {item[1]}</p>
            <p>Salary: {item[2]}</p>
            <p>City: {item[3]}</p>
        </div>
        
      )
      )}
      <SalaryChart employees={data}/>
      <CityMap employees={data}/>
    </div>
  )
}