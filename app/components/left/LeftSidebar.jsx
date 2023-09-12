"use client";
import { useGlobalContext } from "@/context/GlobalContext";
import Sidemenu from "./Sidemenu";

const LeftSidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <div
      className={`absolute lg:relative lg:flex shadow-xl lg:shadow-none lg:bg-none lg:rounded-none rounded-box bg-base-200 top-1/2 -translate-y-1/2 ${
        isSidebarOpen ? "left-0" : "-left-full lg:left-0"
      } transition-all ease-in-out duration-500`}
    >
      <Sidemenu />
    </div>
  );
};

export default LeftSidebar;
