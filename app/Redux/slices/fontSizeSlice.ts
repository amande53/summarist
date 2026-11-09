import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type FontSize = 16 | 18 | 22 | 26;

interface FontSizeState {
  fontSize: FontSize;
}

const initialState: FontSizeState = {
  fontSize: 16,
};

const fontSizeSlice = createSlice({
  name: "FontSize",
  initialState,
  reducers: {
    setFontSize: (state, action: PayloadAction<FontSize>) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setFontSize } = fontSizeSlice.actions;

export default fontSizeSlice.reducer;
