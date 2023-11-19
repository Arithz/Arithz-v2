"use client";
import { useState } from "react";
import Icons from "@components/general/Icons";

function Menu() {
  const [active, setActive] = useState(false);
  const [panelconfig, setPanelConfig] = useState<"menu" | "history">("menu");

  const MenuOption = () => {
    return (
      <>
        <p className="px-3 text-sm text-cs-black2">Quick menu</p>
        <div className="flex items-center justify-between w-full gap-2 px-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col justify-center px-3 py-2 transition border-2 rounded cursor-pointer border-cs-border-fade hover:border-cs-black3 hover:bg-cs-white-hover text-cs-black2 hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black"
            >
              <div className="mx-auto stroke-1 w-7 h-7 fill-none ">
                <Icons name="trash"></Icons>
              </div>
              <p className="text-xs text-center">Delete</p>
            </div>
          ))}
        </div>
        <div className="py-1.5 space-y-1 border-0 border-t border-b border-cs-border-fade">
          {/* Trash space */}
          <div className="flex items-center w-full gap-2 px-3 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
            <div className="w-6 h-6 stroke-1 fill-none">
              <Icons name="trash"></Icons>
            </div>
            <p className="text-sm">Export page</p>
          </div>
          {/* Keyboard shortcuts */}
          <div className="flex items-center w-full gap-2 px-3 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
            <div className="w-6 h-6 pt-1 stroke-1 fill-none">
              <Icons name="keyboard"></Icons>
            </div>
            <p className="text-sm">Keyboard shortcuts</p>
          </div>
        </div>

        <div className="!mt-1 space-y-1">
          {/* Trash space */}
          <div className="flex items-center w-full gap-2 px-3 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
            <div className="w-6 h-6 stroke-1 fill-none">
              <Icons name="trash"></Icons>
            </div>
            <p className="text-sm">Export page</p>
          </div>
          {/* Keyboard shortcuts */}
          <div className="flex items-center w-full gap-2 px-3 py-1 text-sm transition cursor-pointer text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black">
            <div className="w-6 h-6 pt-1 stroke-1 fill-none">
              <Icons name="keyboard"></Icons>
            </div>
            <p className="text-sm">Keyboard shortcuts</p>
          </div>
        </div>
      </>
    );
  };

  const History = () => {
    return <>Hai boys</>;
  };

  const Panel = () => {
    return (
      <div
        className={`${
          active ? "animate-slideRight" : "hidden"
        } overflow-y-auto space-y-3 w-full max-w-[15rem] pointer-events-auto border border-cs-border-fade rounded-lg shadow-lg h-full bg-cs-white py-3`}
        id="panelRef"
      >
        {panelconfig === "menu" && <MenuOption />}
        {panelconfig === "history" && <History />}
      </div>
    );
  };

  function handlePanelActive(newconfig: "menu" | "history") {
    setPanelConfig(newconfig);
    if (panelconfig === newconfig) {
      setActive(!active);
    } else {
      setActive(true);
    }
  }

  return (
    <div className="fixed top-0 right-0 z-40 flex flex-col-reverse md w-fit py-global pr-global">
      <Panel />

      <div className="flex items-center justify-end w-full gap-2 pr-2 mt-1">
        <div className="text-sm text-cs-black2">
          <p>Edited 24/11</p>
        </div>
        <div
          className="p-1 transition rounded cursor-pointer stroke-1 w-9 h-9 fill-none text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black"
          onClick={() => handlePanelActive("history")}
        >
          <Icons name="history"></Icons>
        </div>
        <div
          className="p-1 transition rounded cursor-pointer stroke-1 w-9 h-9 fill-cs-black3 hover:fill-cs-black text-cs-black2 hover:bg-cs-white-hover hover:text-cs-black stroke-cs-black3 hover:stroke-cs-black"
          onClick={() => handlePanelActive("menu")}
        >
          <Icons name="dots"></Icons>
        </div>
      </div>
    </div>
  );
}

export default Menu;
