import React, { useState } from "react";
import { ProdContext } from "../context/prodContext";
import Lprod from "../prod-component/left-prod";
import Mprod from "../prod-component/mid-prod";
import Rprod from "../prod-component/right-prod";

export default function Production() {
    const [tool, setTool] = useState("selection");
    const [undocall, setUndocall] = useState(false);
    const [redocall, setRedocall] = useState(false);  
    const [linewidth, setLinewidth] = useState(32);  
    return (
        <div className="flex flex-row overflow-hidden w-screen h-screen">
            <ProdContext.Provider
                value={{
                    tool,
                    setTool,
                    undocall,
                    setRedocall,
                    setUndocall,
                    redocall,
                    linewidth,
                    setLinewidth,
                }}
            >
                <Lprod />
                <Mprod />
                <Rprod />
            </ProdContext.Provider>
        </div>
    )
}