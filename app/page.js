"use client";

import GlobalContextProvider from "@/context/GlobalContext";
import LeftSidebar from "./components/left/LeftSidebar";
import MainContent from "./components/main/MainContent";
import Navbar from "./components/navigation/Navbar";
import RightSidebar from "./components/right/RightSidebar";
import LeftSidebarToggler from "./components/left/LeftSidebarToggler";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <GlobalContextProvider>
      <div className="relative m-0 p-0 min-w-full min-h-screen bg-base-200">
        <Navbar />
        <div className="container mx-auto p-5">
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="col-span-1">
              <LeftSidebar />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <MainContent />
            </div>
            <div className="col-span-1">
              <RightSidebar />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4">
            <div></div>
            <div className="col-span-2">
              <Footer />
            </div>
            <div></div>
          </div>
        </div>
        <LeftSidebarToggler />
      </div>
    </GlobalContextProvider>
  );
}
