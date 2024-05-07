import React, { useContext } from "react";
import { Pen, RectangleHorizontal, Move, Slash, Type ,Undo, Redo} from "lucide-react";
import { ProdContext } from "../context/prodContext";

export default function Lprod() {
    const { setTool, undocall , redocall  ,setUndocall  , setRedocall  } = useContext(ProdContext)
    return (
        <div className=" w-[200px] bg-second p-2 flex items-center gap-8 flex-col">
            <p className="text-text-one font-bold">Tools</p>
            <div className="grid grid-cols-2 grid-rows-10 gap-8">
                <Pen className="text-text-one hover:text-text-two size-8" onClick={() => { setTool("pencil") }} />
                <RectangleHorizontal className="text-text-one hover:text-text-two size-8" onClick={() => { setTool("rectangle") }} />
                <Move className="text-text-one  hover:text-text-two size-8" onClick={() => { setTool("selection") }} />
                <Slash className="text-text-one  hover:text-text-two size-8" onClick={() => { setTool("line") }} />
                <Type className="text-text-one  hover:text-text-two size-8" onClick={() => { setTool("text") }} />
            </div>
            <div className="w-full flex flex-row">
                <Undo className="text-text-one hover:text-text-two size-8" onClick={()=>{setUndocall(!undocall)}}/>
                <Redo className="text-text-one hover:text-text-two size-8" onClick={()=>{setRedocall(!redocall)}}/>
            </div>
        </div>
    )
}