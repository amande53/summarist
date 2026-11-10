"use client";

import { useDispatch, useSelector } from "react-redux";
import { RiFontSize } from "react-icons/ri";
import { AppDispatch, RootState } from "../../Redux/store";
import { setFontSize, type FontSize } from "../../Redux/slices/fontSizeSlice";

const sizes: FontSize[] = [16, 18, 22, 26];

export default function FontSizeControls() {
  const dispatch = useDispatch<AppDispatch>();
  const fontSize = useSelector((state: RootState) => state.fontSizeSlice.fontSize);

  return (
    <div className="flex items-center gap-4 h-14 mb-2 pl-5.25">
      {sizes.map((size) => (
        <button
          key={size}
          aria-label={`Text size ${size}`}
          onClick={() => dispatch(setFontSize(size))}
          style={{ fontSize: size }}
          className={`flex text-navy pb-1 cursor-pointer border-b-2 ${
            fontSize === size ? "border-green" : "border-transparent"
          }`}
        >
          <RiFontSize />
        </button>
      ))}
    </div>
  );
}
