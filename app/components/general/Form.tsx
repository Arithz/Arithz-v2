function Form() {
  function getTodayDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }

  return (
    <>
      <div className="px-5">
        {/* Content */}
        <div className="flex items-center gap-2">
          <p className="p-1 text-xs bg-gray-100 rounded w-fit text-cs-black2">New collection</p>

          <p className="p-1 text-xs border rounded text-cs-black3 border-cs-border-fade">
            <i>Date: {getTodayDate()}</i>
          </p>
        </div>

        <input
          type="text"
          placeholder="Collection name"
          className="float-left w-full pt-2 pb-4 text-lg font-medium outline-none text-cs-black placeholder:text-cs-fade2"
        ></input>
      </div>
      <div className="flex items-center justify-between px-5 pt-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-cs-black3">Visibility</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 bg-cs-border-fade peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-400"></div>
          </label>
        </div>

        <button
          type="button"
          className="px-2 py-1 text-sm transition border rounded border-cs-accent-red text-cs-accent-red hover:text-cs-white hover:bg-cs-accent-red"
        >
          Create collection
        </button>
      </div>
    </>
  );
}

export default Form;
