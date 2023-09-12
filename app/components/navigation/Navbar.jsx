import appLogo from "@/public/assets/app_logo.png";
import Link from "next/link";
import Searchbar from "./Searchbar";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="w-full bg-base-100">
      <div className="container px-3 mx-auto">
        <div className="w-full grid grid-cols-3 lg:grid-cols-4 justify-between items-center gap-5 bg-base-100">
          <div className="col-span-3 lg:col-span-1">
            <Link href="/" className="w-auto">
              <img
                src={appLogo.src}
                className="flex w-52 h-auto mx-auto lg:mx-0"
                alt="halal network app logo"
              />
            </Link>
          </div>
          <div className="col-span-2 lg:col-span-2">
            <Searchbar />
          </div>
          <div className="col-span-1 text-end">
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
