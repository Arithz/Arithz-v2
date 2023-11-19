"use client";
import { useState, useRef, useEffect } from "react";
import Icons from "../general/Icons";
import Collections from "./Collections";
import {
  openSearchModal,
  openNewCollection,
  openCommandPalette,
  initializeKeyboardShortcuts,
} from "@utils/keyboard";

function Sidebar() {
  // ----------------------------
  const TopMenu = () => {
    return (
      <div className="flex items-center justify-end w-full gap-2 px-4 mb-4 ">
        <div className="text-xs text-cs-white bg-cs-accent-red rounded-[50%] w-6 leading-6 text-center">
          A
        </div>
      </div>
    );
  };

  const CallToAction = () => {
    return (
      <div className="flex w-full gap-2 px-4">
        <button
          className="w-full px-2 py-1 text-xs font-semibold text-left transition border rounded shadow md:text-sm text-cs-black2 hover:text-cs-black bg-cs-white hover:bg-cs-white-hover active:bg-cs-white-hover border-cs-border-fade"
          onClick={openNewCollection}
        >
          + New collection
        </button>
        <button className="p-0.5 transition border rounded shadow border-cs-border-fade bg-cs-white hover:bg-cs-white-hover active:bg-cs-white-hover ">
          <div
            className="p-0.5 w-6 h-6 stroke-cs-black3 hover:stroke-cs-black2 stroke-[1.5] fill-none"
            onClick={() => openSearchModal()}
          >
            <Icons name="search" />
          </div>
        </button>
      </div>
    );
  };

  // use state properties
  const [active, setActive] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initializeKeyboardShortcuts();
  }, []);

  function handleSidebarActive() {
    setActive(!active);
    if (active) {
      sidebarRef.current!.classList.remove("animate-slideLeftInverse");
      if (sidebarRef.current!.classList.contains("hidden"))
        sidebarRef.current!.classList.remove("hidden");

      sidebarRef.current!.classList.add("block");
      sidebarRef.current!.classList.add("animate-slideLeft");
    } else {
      sidebarRef.current!.classList.remove("block");
      sidebarRef.current!.classList.remove("animate-slideLeft");

      sidebarRef.current!.classList.add("animate-slideLeftInverse");
    }
  }

  return (
    <div className="fixed top-0 z-50 w-full pointer-events-none py-global px-global">
      <div
        className="absolute z-10 pointer-events-auto h-7 w-7 fill-cs-white stroke-cs-black3 hover:stroke-cs-black stroke-[1.5] mt-2 mx-3"
        onClick={handleSidebarActive}
      >
        <Icons name="sidebar" />
      </div>

      {/* left bar */}
      <div
        className={`hidden relative overflow-y-auto space-y-3 w-full max-w-[20rem] pointer-events-auto border border-cs-border-fade rounded-lg shadow-lg max-h-safe md:max-h-[95vh] bg-cs-white py-3`}
        ref={sidebarRef}
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
          <a
            href="./"
            className="text-base font-semibold transition text-cs-black group-hover:text-cs-white"
          >
            Home
          </a>
        </div>

        {/* collections */}
        <Collections />

        {/* <div className="sticky bottom-0 flex items-center w-full gap-4 py-2 bg-cs-white">
          <div className="w-6 h-6 stroke-1 stroke-cs-black3 hover:stroke-cs-black fill-none">
            <Icons name="moon" />
          </div>
          <p>Dark mode</p>
        </div> */}

        <div className="pt-2 border-0 border-t border-cs-border-fade">
          {/* Trash space */}
          <div className="flex items-center w-full gap-2 px-4 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
            <div className="w-6 h-6 stroke-1 fill-none">
              <Icons name="trash"></Icons>
            </div>
            <p className="text-sm">Trash</p>
          </div>
          {/* Settings */}
          <div className="flex items-center w-full gap-2 px-4 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
            <div className="w-6 h-6 stroke-1 fill-none">
              <Icons name="settings"></Icons>
            </div>
            <p className="text-sm">Settings</p>
          </div>
          {/* Keyboard shortcuts */}
          <div className="flex items-center w-full gap-2 px-4 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
            <div className="w-6 h-6 pt-1.5 stroke-1 fill-none">
              <Icons name="keyboard"></Icons>
            </div>
            <p className="text-sm">Keyboard shortcuts</p>
          </div>
          {/* Command Palette */}
          <div
            className="flex items-center w-full gap-2 px-4 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black"
            onClick={openCommandPalette}
          >
            <div className="w-6 h-6 stroke-1 fill-none">
              <Icons name="command"></Icons>
            </div>
            <p className="text-sm">Command Palette</p>
            <div className="flex gap-1 ml-auto">
              <kbd className="py-0.5 px-1.5 text-[0.65rem] font-semibold rounded border border-cs-border-fade shadow-[0px_1.5px_0.5px_0px_rgba(0,0,0,0.1)]">
                Ctrl
              </kbd>
              <kbd className="py-0.5 px-1.5 text-[0.65rem] font-semibold rounded border border-cs-border-fade shadow-[0px_1.5px_0.5px_0px_rgba(0,0,0,0.1)]">
                K
              </kbd>
            </div>
          </div>
        </div>
      </div>
      {/* right bar */}
    </div>
  );
}

export default Sidebar;
