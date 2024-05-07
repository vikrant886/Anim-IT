import React, { useContext } from "react";
import { ProdContext } from "../context/prodContext";

export default function Rprod(){
    const {tool,linewidth, setLinewidth} = useContext(ProdContext)
    console.log(tool)
    return(
        <div className=" w-[350px] bg-second text-white">
            {
                tool === "pencil" ?(
                    <div>
                        <input className="text-black" type="text" onChange={(e)=>{setLinewidth(parseInt(e.target.value))}} />
                    </div>
                ) : (
                    tool === "rectangle" ? (
                        <div>
                            this is rect
                        </div>
                    ) : null
                )
            }
        </div>
    )
}