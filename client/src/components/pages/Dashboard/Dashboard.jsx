import React from "react";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";


export default function Dash(){
    const navigate = useNavigate();
    const handlenewfile=()=>{
        navigate("/prod")
    }
    {/* <button className="ads alm arh arv avz awf axu bbm bbs bbw bce big bg-slate-700 rounded-full text-white *: p-3"  onClick={handlenewfile}>Production Page</button> */}
    return (
        <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-200">
        {/* Content of the dashboard */}
      </div>
    </div>
    )
}