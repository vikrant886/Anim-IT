import React from 'react';
import { useNavigate } from "react-router-dom";
import {CirclePlus} from "lucide-react";


function Sidebar() {
  const navigate = useNavigate();
    const handlenewfile=()=>{
        navigate("/prod")
    }


  return (
    <div className="sidebar bg-gray-800 text-white flex flex-col fixed h-full w-64 shadow-lg">
      <div className="sidebar-header py-4 px-6 relative group flex items-center">
        <img src="https://img.icons8.com/ios-glyphs/90/FFFCE1/angry.png" alt="Angry Icon" className="w-12 h-12 mr-2" />
        <h2 className="text-4xl h-fit w-fit hover:bg-slate-600 rounded-full p-1 cursor-pointer transition-all flex-grow">Anim-It</h2>
        <div className="absolute inset-0 bg-gray-700 rounded-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
      <div className="sidebar-content flex-grow px-6 py-5">
        <div className="sidebar-item py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
          <span className="text-sm font-bold mr-2" onClick={handlenewfile}>Start New Project</span>
          <CirclePlus />
        </div>
        <div className="sidebar-item py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 mt-4">
          <span className="text-sm font-bold">About</span>
        </div>
        <div className="sidebar-item py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 mt-4">
          <span className="text-sm font-bold">Help</span>
        </div>
        <div className="sidebar-item py-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 mt-4">
          <span className="text-sm font-bold">Contact</span>
        </div>
      </div>
      <div className="sidebar-footer py-4 px-6 mt-auto">
        <p className="text-lg">Abhishek Kothiyal</p>
      </div>
    </div>
  );
}

export default Sidebar;
