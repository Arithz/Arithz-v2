import { PagesOverview } from "@modules/subcollection";

interface PageSearchProps {
  pages: PagesOverview[];
}

function PageSearch(props: PageSearchProps & { subcollection: string }) {
  return (
    <>
      {props.subcollection && (
        <p className="p-1 ml-5 text-xs bg-gray-100 rounded w-fit text-cs-black2">
          {props.subcollection}
        </p>
      )}

      <div className="relative px-5 pb-2 border-0 border-b focus:bg-white border-b-gray-300 border-cs-border-fade">
        {/* <ion-icon className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400 md hydrated" name="search-outline" role="img" aria-label="search outline"></ion-icon> */}
        <input
          type="text"
          className="w-full h-10 text-sm text-gray-800 bg-transparent border-0 outline-none md:text-lg focus:ring-0"
          placeholder="Search the file you need?"
          role="combobox"
          aria-expanded="false"
          aria-controls="options"
        />
      </div>
      <ul className="px-2 pt-3 space-y-1 overflow-y-auto scroll-py-3" id="options" role="listbox">
        {/* <li className="flex p-3 text-gray-500 duration-200 rounded cursor-default select-none hover:text-cs-accent-red group hover:bg-gray-50">
          <span className="flex-auto text-sm truncate">Search projects...</span>

          <span className="flex-none ml-3 text-xs font-semibold text-gray-400">
            <kbd className="font-sans">⌘</kbd>
            <kbd className="font-sans">N</kbd>
          </span>
        </li>
        <li className="flex p-3 text-gray-500 duration-200 rounded cursor-default select-none hover:text-cs-accent-red group hover:bg-gray-50">
          <span className="flex-auto text-sm truncate">Create another project...</span>
        </li> */}
        {!props.pages && (
          <li className="flex p-3 text-gray-500 duration-200 rounded cursor-default select-none ">
            <span className="flex-auto text-sm italic truncate">No pages found</span>
          </li>
        )}
        {props.pages?.map((page: any, i: number) => {
          return (
            <li
              key={i}
              className="flex p-3 text-gray-500 duration-200 rounded cursor-default select-none hover:text-cs-accent-red group hover:bg-gray-50"
            >
              <span className="flex-auto text-sm truncate">{page.name}</span>
              {!props.subcollection && (
                <p className="text-sm text-cs-border-fade">{page.subcollection}</p>
              )}
              <span></span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PageSearch;
