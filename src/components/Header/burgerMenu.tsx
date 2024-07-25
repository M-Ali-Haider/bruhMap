"use client";

import AdminBurgerMenuSVG from "@/assets/Header/adminBurgerMenu";
import { handleSidebar } from "@/store/Sidebar/slice";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

const BurgerMenu: React.FC = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );

  return (
    <Box
      component={AdminBurgerMenuSVG}
      onClick={() => dispatch(handleSidebar())}
      sx={{
        width: { xs: "28px", md: "32px" },
        height: { xs: "28px", md: "32px" },
        cursor: "pointer",
        transform: isSidebarOpen ? "rotate(0deg)" : "rotate(180deg)",
        transition: "transform 0.5s cubic-bezier(0.76,0,0.24,1)",
      }}
    />
  );
};

export default BurgerMenu;
