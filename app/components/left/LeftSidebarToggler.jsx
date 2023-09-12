"use client";

import { useGlobalContext } from "@/context/GlobalContext";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";

const LeftSidebarToggler = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <button
      type="button"
      className="fixed lg:hidden btn btn-primary text-base-100 bottom-5 right-5 capitalize"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      Menu
      <span>{isSidebarOpen ? <BiMenuAltRight /> : <BiMenu />}</span>
    </button>
  );
};

export default LeftSidebarToggler;
