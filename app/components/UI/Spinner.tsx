import { ImSpinner8 } from "react-icons/im";

export default function Spinner() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex items-center justify-center size-full"
    >
      <ImSpinner8 className="size-16 text-navy animate-spin" />
    </div>
  );
}
