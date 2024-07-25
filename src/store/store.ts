import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./Sidebar/slice";
export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
