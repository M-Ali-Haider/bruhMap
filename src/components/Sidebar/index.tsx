"use client";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import SidebarNavLink from "./link";
import LogOutSVG from "@/assets/Sidebar/logout";
import SidebarContainer from "./container";

export interface NavLink {
  name: string;
  href: string;
  svg: JSX.Element;
}

interface Props {
  navLinks: NavLink[];
}

const logOutItem: NavLink = {
  name: "Logout",
  href: "/admin/login",
  svg: <LogOutSVG />,
};

const Sidebar = ({ navLinks }: Props) => {
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );
  return (
    <Box
      sx={{
        width: isSidebarOpen ? "368px" : "0px",
        pl: isSidebarOpen ? "36px" : "0px",
        bgcolor: "#1a1c1e",
        py: "36px",
        height: "100vh",
        overflow: "hidden",
        transition: "all 0.5s cubic-bezier(0.76,0,0.24,1)",
        color: "white",
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <SidebarContainer navLinks={navLinks} />
      <SidebarNavLink item={logOutItem} />
    </Box>
  );
};

export default Sidebar;
