import AudioPlayerSkeleton from "../../../components/UI/AudioPlayerSkeleton";
import Spinner from "../../../components/UI/Spinner";

export default function Loading() {
  return (
    <>
      <main className="w-full h-[calc(100vh-260px)] md:h-[calc(100vh-160px)]">
        <Spinner />
      </main>
      <AudioPlayerSkeleton />
    </>
  );
}
