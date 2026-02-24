import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
//import './Login.css'

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width:"100%",
        margin: "0",
        background: "linear-gradient(to right, #141e30, #243b55)"
    }
    const boxStyle={
        background: "#1f2937",
        padding: "40px",
        borderRadius: "8px",
        width: "350px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0,0,0,0.5)"
    }
     const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #555"
  };

  const buttonStyle = {
    width: "60%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    border: "none",
    background: "#4f46e5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  };

    const handeLogin = ()=>{
        if(username === "testuser" && password === "Test123"){
           navigate("/list");
        }else{
            alert("Invalid user credentials");
        }
    };
    

  return (
    <div style={containerStyle}>
    <div style={boxStyle}>
      <h2 style={{marginBottom: "20px", color: "white"}}>Login Page <span style={{color: "#f2df0f"}}>Jotish</span></h2>
      <input type='text' placeholder='username here' style={inputStyle} onChange={(e) => setUserName(e.target.value)}/>
      <input type='password' placeholder='Password here' style={inputStyle} onChange={(e) => setPassword(e.target.value)}/>
      <button  style={buttonStyle}onClick={handeLogin}>Login</button>
    </div>
    </div>
  )

}