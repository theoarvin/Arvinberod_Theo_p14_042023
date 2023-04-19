import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: [],
  },
  reducers: {
    getUserData(state, action) {
      state.userData.push(action.payload);
    },
  },
});

export const { getUserData } = userSlice.actions;
export default userSlice.reducer;
