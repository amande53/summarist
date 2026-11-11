"use client";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { RiBallPenLine } from "react-icons/ri";
import { RxGear } from "react-icons/rx";
import SidebarItem from "./SidebarItem";
import { FiHelpCircle } from "react-icons/fi";
import Image from "next/image";
import SidebarLogin from "./SidebarLogin";
import { closeSidebar } from "../../Redux/slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/store";
import { usePathname } from "next/navigation";
import FontSizeControls from "./FontSizeControls";
import { BsBookmark } from "react-icons/bs";

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidebarSlice.isOpen);
  const pathname = usePathname();
  const isPlayer = pathname.startsWith("/player");

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 size-full bg-[#3a4649] transition-opacity duration-400 ease-[ease] delay-[0s] z-10 opacity-65 pointer-events-auto md:hidden "
          onClick={() => {
            dispatch(closeSidebar());
          }}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-screen z-1000 bg-[#f7faf9] transition-all duration-300 min-w-50
    w-4/5 md:w-50
    ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-center h-15 pt-4 max-w-40  mx-auto">
          <Image
            src="/assets/logo.png"
            alt="Summarist Logo"
            className="w-full h-10"
            width={495}
            height={114}
            loading="lazy"
          />
        </div>
        <nav
          className={`flex flex-col justify-between pb-5 overflow-auto ${
            isPlayer ? "h-[calc(100vh-140px)]" : "h-[calc(100vh-60px)]"
          }`}
        >
          <div className="flex-1 mt-10">
            <SidebarItem
              label="For You"
              icon={<AiOutlineHome />}
              destination="/for-you"
            />
            <SidebarItem
              label="My Library"
              destination="/library"
              icon={<BsBookmark />}
            />
            <SidebarItem
              label="Highlights"
              icon={<RiBallPenLine />}
            />
            <SidebarItem
              label="Search"
              icon={<AiOutlineSearch />}
            />
            {isPlayer && <FontSizeControls />}
          </div>
          <div>
            <SidebarItem
              label="Settings"
              destination="/settings"
              icon={<RxGear />}
            />
            <SidebarItem
              label="Help & Support"
              icon={<FiHelpCircle />}
            />
            <SidebarLogin />
          </div>
        </nav>
      </aside>
    </>
  );
}
