import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSlice {
  user: null | {
    id: string;
    email: string | null;
  };
  isLoading: boolean;
  isSubscribed: boolean;
  isSubscriptionLoading: boolean;
}

const initialState: UserSlice = {
  user: null,
  isLoading: true,
  isSubscribed: false,
  isSubscriptionLoading: true,
};

const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    // When user is signed out
    clearUser: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSubscribed = false;
      state.isSubscriptionLoading = false;
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
      state.isSubscriptionLoading = true;
    },

    // When Firestore tells us whether the user has an active subscription
    setSubscribed: (state, action: PayloadAction<boolean>) => {
      state.isSubscribed = action.payload;
      state.isSubscriptionLoading = false;
    },
  },
});

export const { clearUser, setUser, setSubscribed } = userSlice.actions;
export default userSlice.reducer;
