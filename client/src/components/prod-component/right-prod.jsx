import React, { useContext, useEffect, useState } from "react";
import { ProdContext } from "../context/prodContext";

export default function Rprod() {
    const { tool, linewidth, setLinewidth ,selectedElement ,setSelectedElement} = useContext(ProdContext)
    // const [x1,setX1]= useState(selectedElement.x1||0)
    // const [y1,setY1]= useState(selectedElement.y2||0)
    // const [x2,setX2]= useState(selectedElement.x2||0)
    // const [y2,setY2]= useState(selectedElement.y2||0)
    console.log(tool)

    useEffect(()=>{
        console.log("hi")
    },[selectedElement])
    function handlechange() {
        // if (selectedElement.type === "rectangle") {
        //     setSelectedElement(prev => ({
        //         ...prev,
        //         x1,
        //         x2,
        //         y1,
        //         y2
        //     }));
        // }
    }
    
    return (
        <div className=" w-[350px] bg-second text-white">
            {
                tool === "pencil" ? (
                    <div className="overflow-hidden flex items-center justify-center">
                        <div className="flex flex-col">
                            <p className="text-text-two font-semibold mb-8 text-center">Position</p>
                            <div className="flex flex-row gap-4">
                                <div className="flex flex-row gap-2">
                                    <p className="text-white">x1</p>
                                    <input type="text" className="w-12 bg-second outline-none text-text-one" placeholder="32" />
                                </div>
                                <div className="flex flex-row gap-2">
                                    <p className="text-white" >x1</p>
                                    <input type="text" className="w-12 outline-none bg-second text-text-one" placeholder="32" />
                                </div>

                            </div>
                        </div>
                        {/* <input className="text-black" type="text" onChange={(e) => { setLinewidth(parseInt(e.target.value)) }} /> */}
                    </div>
                ) : (
                    (selectedElement && selectedElement.type==="rectangle") || tool === "rectangle" ? (
                        <div className="overflow-hidden flex items-center justify-center">
                            <div className="flex flex-col gap-4">
                                <p className="text-text-two font-semibold mb-8 text-center">Position</p>
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-row gap-2">
                                        <p className="text-white">x1</p>
                                        <input type="text" className="w-12 bg-second outline-none text-text-one" onChange={(e)=>{handlechange()}}  value={selectedElement?selectedElement.x1:0} />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="text-white" >y1</p>
                                        <input type="text" className="w-12 outline-none bg-second text-text-one"onChange={handlechange}  placeholder={selectedElement?selectedElement.y1:0} />
                                    </div>

                                </div>
                                <div className="flex flex-row gap-4">
                                    <div className="flex flex-row gap-2">
                                        <p className="text-white">x2</p>
                                        <input type="text" className="w-12 bg-second outline-none text-text-one" onChange={handlechange} placeholder={selectedElement?selectedElement.x2:0} />
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="text-white" >y2</p>
                                        <input type="text" className="w-12 outline-none bg-second text-text-one" onChange={handlechange} placeholder={selectedElement?selectedElement.y2:0} />
                                    </div>

                                </div>
                            </div>
                            {/* <input className="text-black" type="text" onChange={(e) => { setLinewidth(parseInt(e.target.value)) }} /> */}
                        </div>
                    ) : (
                        (selectedElement && selectedElement.type==="line") || tool === "line" ? (
                            <div className="overflow-hidden flex items-center justify-center">
                                <div className="flex flex-col gap-4">
                                    <p className="text-text-two font-semibold mb-8 text-center">Position</p>
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-row gap-2">
                                            <p className="text-white">x1</p>
                                            <input type="text" className="w-12 bg-second outline-none text-text-one" onChange={(e)=>{handlechange()}}  value={selectedElement?selectedElement.x1:0} />
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <p className="text-white" >y1</p>
                                            <input type="text" className="w-12 outline-none bg-second text-text-one"onChange={handlechange}  placeholder={selectedElement?selectedElement.y1:0} />
                                        </div>
    
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <div className="flex flex-row gap-2">
                                            <p className="text-white">x2</p>
                                            <input type="text" className="w-12 bg-second outline-none text-text-one" onChange={handlechange} placeholder={selectedElement?selectedElement.x2:0} />
                                        </div>
                                        <div className="flex flex-row gap-2">
                                            <p className="text-white" >y2</p>
                                            <input type="text" className="w-12 outline-none bg-second text-text-one" onChange={handlechange} placeholder={selectedElement?selectedElement.y2:0} />
                                        </div>
    
                                    </div>
                                </div>
                                {/* <input className="text-black" type="text" onChange={(e) => { setLinewidth(parseInt(e.target.value)) }} /> */}
                            </div>
                        ) : null
                    )
                )
            }
        </div>
    )
}