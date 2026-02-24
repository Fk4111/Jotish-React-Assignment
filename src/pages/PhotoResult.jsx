import React from 'react';
import { useLocation } from 'react-router-dom';


export default function PhotoResult() {
    const location = useLocation();
    const image = location.state; // yahan hum details page se captured image ka data rcv krenge
  return (
    <div style={{ minHeight: "100vh",
      display: "flex",
      justifyContent: "space-around",
      
      alignItems: "center",
      background: "linear-gradient(to right, #1e3c72, #2a5298)",
      padding: "20px"}}>
        <div style={{border:"1px solid white", padding:"20px", borderRadius:"10px"}}>
        <h2 style={{color:"white", textAlign:"center", textDecoration:"underline"}}>
        {/* yahan hum captured image ko show krenge */}
        Captured Photo😊👇
        </h2>
        <img src={image} alt='Captured'/>
      </div>
    </div>
  )
}
