"use client";
import { useState } from "react";
import Icons from "../Icons";
import Accordion from "../Accordion";

function Sidebar() {
  const TopMenu = () => {
    return (
      <div className="flex items-center justify-end w-full gap-2 px-4 mb-4 ">
        <div className="w-6 h-6 stroke-cs-black3 hover:stroke-cs-accent-red stroke-[1.5] fill-none">
          <Icons name="search" />
        </div>
        <div className="w-6 h-6 stroke-cs-black3 hover:stroke-cs-accent-red stroke-[1.5] fill-none">
          <Icons name="settings" />
        </div>
        <div className="text-xs text-cs-white bg-cs-accent-red rounded-[50%] w-6 leading-6 text-center">
          A
        </div>
      </div>
    );
  };

  const CallToAction = () => {
    return (
      <div className="flex w-full gap-2 px-4">
        <button className="w-full px-2 py-1 text-xs font-semibold text-left transition border rounded shadow text-cs-black2 hover:text-cs-black bg-cs-white hover:bg-cs-white-hover active:bg-cs-white-hover border-cs-border-fade">
          + New collection
        </button>
        <button className="shadow rounded border border-cs-border-fade bg-cs-white hover:bg-cs-white-hover active:bg-cs-white-hover transition p-0.5 ">
          <div className="w-6 h-6 p-0.5 stroke-cs-black3 hover:stroke-cs-black stroke-1 fill-none">
            <Icons name="edit" />
          </div>
        </button>
      </div>
    );
  };

  const Collections = () => {
    const Header = () => {
      return <h2 className="text-sm">Collection</h2>;
    };
    const Subcollection = () => {
      return (
        <ol className="relative border-s border-gray-200 ml-2.5 mt-1 text-xs">
          {[...Array(3)].map((_, i) => {
            return (
              <li className="ms-3" key={i}>
                <p className="px-3 py-1 rounded w-fit  hover:bg-cs-white-hover transition mb-1 text-[0.85rem] cursor-pointer font-normal leading-none text-gray-400 dark:text-gray-500">
                  February 2022
                </p>
              </li>
            );
          })}
        </ol>
      );
    };

    return (
      <div className="px-4 space-y-2">
        {[...Array(6)].map((_, i) => {
          return (
            <Accordion key={i} header={<Header />}>
              <Subcollection />
            </Accordion>
          );
        })}
      </div>
    );
  };

  const [active, setActive] = useState(true);

  return (
    <div className="fixed top-0 z-50 w-full max-h-full pointer-events-none h-fit py-global px-global">
      <div
        className="absolute z-10 pointer-events-auto h-7 w-7 fill-cs-white stroke-cs-black3 hover:stroke-cs-black stroke-[1.5] mt-2 mx-3"
        onClick={() => setActive(!active)}
      >
        <Icons name="sidebar" />
      </div>

      {/* left bar */}
      <div
        className={`${
          active ? "block animate-slideLeft" : "animate-slideLeftInverse"
        } relative overflow-y-auto space-y-3 w-full max-w-[15rem] pointer-events-auto border border-cs-border-fade rounded-lg shadow-lg h-full bg-cs-white py-3`}
      >
        {/* top menu */}
        <TopMenu />

        {/* cta */}
        <CallToAction />

        {/* home */}
        <div className="flex items-center w-full gap-3 px-4 py-2 transition cursor-pointer group hover:bg-cs-accent-red">
          <div className="w-5 h-5 stroke-cs-black3 group-hover:stroke-cs-white stroke-[1.5] fill-none -mt-0.5">
            <Icons name="home" />
          </div>
          <p className="text-sm font-semibold transition text-cs-black group-hover:text-cs-white">
            Home
          </p>
        </div>

        {/* collections */}
        <Collections />

        {/* <div className="sticky bottom-0 flex items-center w-full gap-4 py-2 bg-cs-white">
          <div className="w-6 h-6 stroke-1 stroke-cs-black3 hover:stroke-cs-black fill-none">
            <Icons name="moon" />
          </div>
          <p>Dark mode</p>
        </div> */}

        {/* Trash space */}
        <div className="flex items-center w-full gap-2 px-4 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
          <div className="w-6 h-6 stroke-1 fill-none">
            <Icons name="trash"></Icons>
          </div>
          <p>Trash</p>
        </div>
        {/* Keyboard shortcuts */}
        <div className="flex items-center w-full gap-2 px-4 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
          <div className="w-6 h-6 stroke-1 fill-none">
            <Icons name="keyboard"></Icons>
          </div>
          <p></p>
        </div>
      </div>
      {/* right bar */}
    </div>
  );
}

export default Sidebar;
