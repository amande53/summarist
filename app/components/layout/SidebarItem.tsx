"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  label: string;
  destination?: string;
  icon: React.ReactNode;
}

export default function SidebarItem({ label, destination, icon }: SidebarItemProps) {
  const pathName = usePathname();
  console.log(pathName);
  const isActive = pathName === destination;
  const content = (
    <>
      <div className={`w-1.25 h-full mr-4 ${isActive ? "bg-[#2bd97c]" : "bg-transparent"}`} />
      <div className="flex items-center justify-center mr-2 text-2xl">{icon}</div>
      <span>{label}</span>
    </>
  );
  const itemClasses = "flex items-center h-14 text-[#032b41] mb-2";

  if (destination) {
    return (
      <Link
        href={destination}
        className={itemClasses}
      >
        {content}
      </Link>
    );
  }
  return <div className={`${itemClasses} cursor-not-allowed`}>{content}</div>;
}
