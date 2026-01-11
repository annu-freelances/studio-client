import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: null,
}

export const AdminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdmin } = AdminSlice.actions;

export default AdminSlice.reducer;
