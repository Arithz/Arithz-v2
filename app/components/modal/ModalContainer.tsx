import React from "react";

function Modal() {
  return (
    <>
      <section className="object-center w-full max-w-2xl px-3 overflow-hidden bg-cover md:px-0 md:mx-auto mt-14">
        <div className="items-center justify-center">
          <div className="w-full p-3 mx-auto overflow-hidden transition-all transform bg-white border-[1.5px] border-cs-border-fade rounded-xl">
            <div className="relative bg-gray-50 focus:bg-white rounded-xl">
              {/* <ion-icon className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 md hydrated" name="search-outline" role="img" aria-label="search outline"></ion-icon> */}
              <input
                type="text"
                className="w-full h-12 pr-4 text-gray-800 placeholder-gray-400 bg-transparent border-0 outline-none pl-11 focus:ring-0 sm:text-sm"
                placeholder="What do you need?"
                role="combobox"
                aria-expanded="false"
                aria-controls="options"
              />
            </div>
            <ul
              className="pt-3 space-y-1 overflow-y-auto max-h-[30rem] scroll-py-3"
              id="options"
              role="listbox"
            >
              <li className="flex p-3 text-gray-500 duration-200 cursor-default select-none hover:text-cs-accent-red group rounded-xl hover:bg-gray-50">
                {/* <ion-icon name="grid-outline" className="w-5 h-5 md hydrated" role="img" aria-label="grid outline"></ion-icon> */}
                <span className="flex-auto ml-3 text-sm truncate">Search projects...</span>

                <span className="flex-none ml-3 text-xs font-semibold text-gray-400">
                  <kbd className="font-sans">⌘</kbd>
                  <kbd className="font-sans">N</kbd>
                </span>
              </li>
              <li className="flex p-3 text-gray-500 duration-200 cursor-default select-none hover:text-cs-accent-red group rounded-xl hover:bg-gray-50">
                {/* <ion-icon name="add-outline" className="w-5 h-5 md hydrated" role="img" aria-label="add outline"></ion-icon> */}
                <span className="flex-auto ml-3 text-sm truncate">Create another project...</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
