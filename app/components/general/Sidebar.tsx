"use client"
import {useState} from "react";
import Icons from "./Icons";
import Accordion from "./Accordion";

function Sidebar() {
  const Header = () => {
    return (
      <h2 className = "text-cs-black">
        Collection
      </h2>
    )
  }
  const Subcollection = () => {
    return (
      <ol className="relative border-s border-gray-200 ml-2.5 mt-1">                  
        {[...Array(3)].map((_, i) => {
          return(
            <li className="ms-4">
              <p className="px-2 py-1.5 rounded w-fit  hover:bg-cs-white-hover transition mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</p>
            </li>
          )
        })}
      </ol>
    )
  }

  const [active, setActive] = useState(true);

  return (
    <div className = "fixed z-50 w-full h-full top-0 py-global px-global">
      <div className = "absolute z-10 h-8 w-8 fill-cs-white stroke-cs-black2 hover:stroke-cs-black stroke-1 mt-2 mx-3" onClick={() => setActive(!active)}>
        <Icons name = "layout-sidebar" />
      </div>
      
      {/* left bar */}
      <div className = {`${active ? "block": "hidden"} relative overflow-y-auto space-y-6 w-full max-w-[18rem] border border-cs-border-fade rounded-lg shadow-lg h-full bg-cs-white pt-3 px-4`}>
        {/* top menu */}
        <div className = " w-full flex justify-end items-center gap-2">
          <div className = "w-7 h-7 stroke-cs-black2 hover:stroke-cs-black stroke-1 fill-none">
            <Icons name = "search"/>
          </div>
          <div className = "w-7 h-7 stroke-cs-black2 hover:stroke-cs-black stroke-1 fill-none">
            <Icons name = "settings"/>
          </div>
          <div className="text-xs text-cs-white bg-cs-accent-red rounded-[50%] w-7 leading-7 text-center">
            A
          </div>
        </div>

        {/* cta */}
        <div className = "w-full flex gap-3">
          <button className = "text-sm text-cs-black2 hover:text-cs-black bg-cs-white hover:bg-cs-white-hover active:bg-cs-white-hover transition w-full shadow rounded border border-cs-border-fade text-center">+ Add new collection</button>
          <button className = "shadow rounded border border-cs-border-fade bg-cs-white hover:bg-cs-white-hover active:bg-cs-white-hover transition ">
            <div className = "w-7 h-7 stroke-cs-black2 hover:stroke-cs-black stroke-1 fill-none">
              <Icons name = "layout-sidebar"/>
            </div>
          </button>
        </div>

        {/* home */}
        <div className = "flex gap-4 items-center">
          <div className = "w-7 h-7 stroke-cs-black2 hover:stroke-cs-black stroke-1 fill-none">
            <Icons name = "home"/>
          </div>
          <h2>Home</h2>
        </div>

        {/* collections */}
        <div className = "space-y-4">
          {[...Array(6)].map((_, i) => {
            return (
              <Accordion header = {<Header/>}>
                  <Subcollection/>
                </Accordion>
            )
            })}
        </div>
        
        <div className ="w-full sticky bottom-0 bg-cs-white py-2">
            <p>Dark mode</p>
        </div>
      </div>
      {/* right bar */}

    </div>
  );
}

export default Sidebar;
