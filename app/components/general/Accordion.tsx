"use client";

import React, { useState } from "react";
import Icons from "./Icons";

interface AccordionProps {
  header: React.ReactNode;
  children: React.ReactNode;
}

function Accordion(props: AccordionProps) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`${
        active
          ? "!text-cs-accent-red stroke-cs-accent-red"
          : "text-cs-black2 hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black"
      } transition`}
    >
      <button className="flex items-center w-full gap-2" onClick={() => setActive(!active)}>
        <div className={`w-6 h-6  stroke-1 fill-none`}>
          {active ? <Icons name="chevron-up" /> : <Icons name="chevron-down" />}
        </div>
        <div>{props.header}</div>
      </button>
      <div className={`${active ? "block" : "hidden"}`}>{props.children}</div>
    </div>
  );
}

export default Accordion;
