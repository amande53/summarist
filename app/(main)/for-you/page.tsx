import { Suspense } from "react";
import SelectedBook from "../../components/for-you/SelectedBook";
import Skeleton from "../../components/UI/Skeleton";

export default function Page() {
  return (
    <div className="w-full max-w-267.5 mx-auto my-0 px-6">
      <div className="py-10 w-full">
        <div className="text-2xl font-bold text-[#032b41] mb-4">Selected just for you</div>
        <Suspense fallback={<Skeleton className="w-2/3 h-47 mb-6" />}>
          <SelectedBook />
        </Suspense>
        <div className="text-2xl font-bold text-[#032b41] mb-4">Recommended For You</div>
        <div className="font-light mb-4 text-[#394547]">We think you’ll like these</div>
      </div>
    </div>
  );
}
