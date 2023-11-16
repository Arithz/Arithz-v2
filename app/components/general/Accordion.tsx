"use client";

import React, {useState} from "react";
import Icons from "./Icons";

interface AccordionProps {
    header: React.ReactNode;
    children: React.ReactNode;
}

function Accordion(props:AccordionProps) {
    const [active, setActive] = useState(true);

    return (
        <div>

            <button className = "flex gap-3 7items-center w-full" onClick = {()=>setActive(!active)}>
                <div className = "w-6 h-6 stroke-cs-black2 hover:stroke-cs-black stroke-1 fill-none">
                    {active ? <Icons name = "chevron-up"/> : <Icons name = "chevron-down"/>}
                </div>
                <div>
                    {props.header}
                </div>
            </button>
            <div className = {`${active?"block":"hidden"}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Accordion;