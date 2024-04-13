import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../services";

const initialState = {
  value: null,
  themeColor: colors.theme,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userSave: (state, action) => {
      state.value = action.payload;
    },
    changeTheme: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

export const { userSave, changeTheme } = userSlice.actions;

export default userSlice.reducer;
