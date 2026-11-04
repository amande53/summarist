import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { RiBallPenLine, RiBookmarkLine, RiSettings2Line } from "react-icons/ri";
import SidebarItem from "./SidebarItem";
import { FiHelpCircle } from "react-icons/fi";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar__overlay" />
      <aside className="bg-[#f7faf9] w-50 min-w-50 top-0 left-0 h-screen z-1000 transition-all duration-300 fixed">
        <div className="flex items-center justify-center h-15 pt-4 max-w-40 my-0 mx-auto">
          <img
            src="/assets/logo.png"
            alt="Summarist Logo"
            className="w-full h-10"
          />
        </div>
        <div className="flex flex-col justify-between h-[calc(100vh-60px)] pb-5 overflow-auto">
          <div className="flex-1 mt-10">
            <SidebarItem
              label="For You"
              icon={<AiOutlineHome />}
              destination="/for-you"
            />
            <SidebarItem
              label="My Library"
              destination="/library"
              icon={<RiBookmarkLine />}
            />
            <SidebarItem
              label="Highlights"
              icon={<RiBallPenLine />}
            />
            <SidebarItem
              label="Search"
              icon={<AiOutlineSearch />}
            />
          </div>
          <div>
            <SidebarItem
              label="Settings"
              destination="/settings"
              icon={<RiSettings2Line />}
            />
            <SidebarItem
              label="Help & Support"
              icon={<FiHelpCircle />}
            />
          </div>
        </div>
      </aside>
    </>
  );
}
