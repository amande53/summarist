import SelectedBook from "../../components/for-you/SelectedBook";

export default function Page() {
  return (
    <div className="w-full max-w-267.5 mx-auto my-0 px-6">
      <div className="py-10 w-full">
        <div className="text-2xl font-bold text-[#032b41] mb-4">Selected just for you</div>
        <SelectedBook />
        <div className="text-2xl font-bold text-[#032b41] mb-4">Recommended For You</div>
        <div className="font-light mb-4 text-[#394547]">We think you’ll like these</div>
      </div>
    </div>
  );
}
