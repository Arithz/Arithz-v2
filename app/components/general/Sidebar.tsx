import Image from "next/image";
import { LayoutSidebar } from "./Icon";

function Sidebar() {
  return (
    <div className="w-full h-screen fixed bg-gray-500">
      <div>
        <LayoutSidebar color="" />
      </div>
    </div>
  );
}

export default Sidebar;
