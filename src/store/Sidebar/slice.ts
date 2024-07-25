import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "cart",
  initialState: {
    isSidebarOpen: true,
  },
  reducers: {
    handleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { handleSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
