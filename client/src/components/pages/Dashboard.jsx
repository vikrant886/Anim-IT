import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dash(){
    const navigate = useNavigate();
    const handlenewfile=()=>{
        navigate("/prod")
    }
    return (
        <div className="flex justify-center items-center">
            <button className="w-12 h-12" onClick={handlenewfile}> go to production</button>
        </div>
    )
}