import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSlice {
  user: null | {
    id: string;
    email: string | null;
  };
  isLoading: boolean;
}

const initialState: UserSlice = {
  user: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    // When user is signed out
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
    },

    //when user is signed in
    setUser: (
      state,
      action: PayloadAction<{
        id: string;
        email: string | null;
      }>
    ) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
});

export const { clearUser, setUser } = userSlice.actions;
export default userSlice.reducer;
