import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Webcam from "react-webcam";

export default function Details() {
     
    const location = useLocation();
    const navigate = useNavigate();
    const webCamRef = useRef(null);

    const data = location.state; // list page se aaya hua data

    const capture = () => {
        const imageSrc = webCamRef.current.getScreenshot();  // ✅ screenshot store kiya
        navigate("/photo", { state: imageSrc });  // photo page par bhej diya
    };

  return (
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #1e3c72, #2a5298)",
      padding: "20px",
    }}
  >
    <div
      style={{
        background: "#ffffff",
        width: "900px",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Employee Details
      </h2>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <p><strong>Name:</strong> {data[1]}</p>
        <p><strong>City:</strong> {data[2]}</p>
        <p><strong>Salary:</strong> {data[3]}</p>
      </div>

      {/* Webcam + Button Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
        }}
      >
        <Webcam
          ref={webCamRef}
          screenshotFormat="image/jpeg"
          style={{
            width: "500px",
            borderRadius: "10px",
          }}
        />

        <button
          onClick={capture}
          style={{
            height: "50px",
            padding: "10px 25px",
            borderRadius: "8px",
            border: "none",
            background: "#4f46e5",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Capture Photo
        </button>
      </div>
    </div>
  </div>
);
}