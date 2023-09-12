"use client";

import { LuNewspaper } from "react-icons/lu";
import { IoFastFoodOutline, IoSchoolOutline } from "react-icons/io5";
import { LiaMosqueSolid } from "react-icons/lia";
import { RiSchoolLine } from "react-icons/ri";
import { LuBeef } from "react-icons/lu";
import { BsCart2, BsCalendar2Event } from "react-icons/bs";
import { TbSpeakerphone } from "react-icons/tb";
import { MdOutlineWorkHistory, MdOutlineWorkspaces } from "react-icons/md";
import { useGlobalContext } from "@/context/GlobalContext";
import Link from "next/link";

const Sidemenu = () => {
  const { sidebarActiveMenu, setSidebarActiveMenu } = useGlobalContext();

  const side_menu_links = [
    {
      title: "Home",
      url: "#",
      icon: <LuNewspaper />,
    },
    {
      isDivider: true,
      title: "Halal Finder",
    },
    { title: "Restaurant", url: "#", icon: <IoFastFoodOutline /> },
    { title: "Mosque", url: "#", icon: <LiaMosqueSolid /> },
    { title: "Schools", url: "#", icon: <IoSchoolOutline /> },
    { title: "Community Center", url: "#", icon: <RiSchoolLine /> },
    { title: "Meet Shop", url: "#", icon: <LuBeef /> },
    { title: "Grocery Store", url: "#", icon: <BsCart2 /> },
    {
      isDivider: true,
      title: "Halal Classified",
    },
    { title: "Product", url: "#", icon: <MdOutlineWorkspaces /> },
    { title: "Services", url: "#", icon: <TbSpeakerphone /> },
    { title: "Events", url: "#", icon: <BsCalendar2Event /> },
    {
      isDivider: true,
      title: "Halal Help",
    },
    { title: "Job", url: "#", icon: <MdOutlineWorkHistory /> },
  ];

  return (
    <ul className="menu w-52 lg:w-full font-medium text-base lg:text-lg">
      {side_menu_links.map((menu_item, index) =>
        menu_item.isDivider ? (
          <li key={index} className="menu-title uppercase">
            {menu_item.title}
          </li>
        ) : (
          <li
            key={index}
            className={`pl-3 border-l-4 hover:border-primary ${
              sidebarActiveMenu === menu_item.title
                ? "border-primary"
                : "border-transparent"
            } transition-all ease-in-out duration-500`}
          >
            <Link
              href={menu_item.url}
              onClick={() => setSidebarActiveMenu(menu_item.title)}
            >
              <span
                className={`mr-1 text-2xl ${
                  sidebarActiveMenu === menu_item.title
                    ? "text-primary"
                    : "text-base-content"
                } transition-all ease-in-out duration-500`}
              >
                {menu_item.icon}
              </span>
              <span
                className={`${
                  sidebarActiveMenu === menu_item.title
                    ? "text-primary font-semibold"
                    : "text-base-content"
                } transition-all ease-in-out duration-500`}
              >
                {menu_item.title}
              </span>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};

export default Sidemenu;
