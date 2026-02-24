import React from 'react'

//React + Vite me marker icon auto load nahi hota, isliye manually set karna padta hai.
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});
{/* yahan hum REACT leaflet ke required components import kr rhe hain 
    MapContainer:- Pura Map
    TileLayer:- Map ka background 
    Marker:- Map pr location ka pin📍
    Popup:- pin pr click krne pr naam show krega */}

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function CityMap({ employees }) {

  if (!employees || employees.length === 0) return null;

  return (
    
    <MapContainer  // MapContainer me wrapperr hota hai jisme pura map render hota hai
    center={[20.5937, 78.9629]} // yahan hum India ke coordinates de rhe hain taki map India ke center pr open ho {latitude,longitude}
    zoom={4}                  // yahan hum zoom level 4 set kr rhe hain means map kitna zoom hoga 
    style={{ height: "500px", width: "100%", marginTop:"40px" }}
    >
        <TileLayer    // TileLayer me hum map ka background set kr rhe hain, yahan hum OpenStreetMap ka free map use kr rha hun
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> 

        {employees.slice(0,10).map((emp, index) => (
            <Marker 
              key={index} 
              position={[20.5937 + index * 0.5, 78.9629 + index * 0.5]}  // dummy positions taake markers overlap na ho
            >  {/* yahan hum cities array me loop kr rhe hain aur har city ke liye ek Marker component render kr rhe hain aur Reacxt ko unique key de rhe hain*/}

              <Popup>{emp[1]}</Popup> {/* marker pr click krne pr city ka naam popup hoga */}
            </Marker>
        ))}

    </MapContainer>
  )
}