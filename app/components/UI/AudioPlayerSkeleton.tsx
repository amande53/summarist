import { GrBackTen, GrForwardTen } from "react-icons/gr";
import { IoPlaySharp } from "react-icons/io5";
import Skeleton from "./Skeleton";

export default function AudioPlayerSkeleton() {
  return (
    <section className="w-full h-45 md:h-20 flex flex-col md:flex-row justify-between items-center px-6 py-4 md:py-0 md:px-10 fixed bottom-0 left-0 z-9998 bg-[#042330]">
      <div className="w-full flex justify-center md:justify-start md:w-1/3">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12" />
          <div>
            <Skeleton className="w-12.5 h-4 mb-2" />
            <Skeleton className="w-25 h-4" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-6 text-white"
        >
          <GrBackTen className="text-[28px] [&_path]:stroke-current" />
          <div className="flex items-center justify-center size-10 rounded-full bg-white text-[#042330] text-2xl">
            <IoPlaySharp className="ml-0.5" />
          </div>
          <GrForwardTen className="text-[28px] [&_path]:stroke-current" />
        </div>
      </div>
      <div className="w-full md:w-1/3 flex items-center gap-4 text-white text-sm">
        <span>00:00</span>
        <div className="relative w-full h-1.5 rounded-full bg-[#efefef]">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 size-4 rounded-full bg-green" />
        </div>
        <span>00:00</span>
      </div>
    </section>
  );
}
