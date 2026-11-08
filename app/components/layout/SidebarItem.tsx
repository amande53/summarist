"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { closeSidebar } from "../../Redux/slices/sidebarSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";

interface SidebarItemProps {
  label: string;
  destination?: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export default function SidebarItem({ label, destination, icon, onClick }: SidebarItemProps) {
  const pathName = usePathname();
  const isActive = pathName === destination;
  const dispatch = useDispatch<AppDispatch>();
  const content = (
    <>
      <div className={`w-1.25 h-full mr-4 ${isActive ? "bg-green" : "bg-transparent"}`} />
      <div className="flex items-center justify-center mr-2 text-2xl">{icon}</div>
      <span>{label}</span>
    </>
  );
  const itemClasses = "flex items-center h-14 text-navy mb-2";

  if (destination) {
    return (
      <Link
        href={destination}
        className={itemClasses}
        onClick={() => dispatch(closeSidebar())}
      >
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${itemClasses} w-full text-left`}
      >
        {content}
      </button>
    );
  }

  return <div className={`${itemClasses} cursor-not-allowed`}>{content}</div>;
}
