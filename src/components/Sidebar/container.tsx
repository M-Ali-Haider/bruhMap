import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import SidebarNavLink from "./link";
import { NavLink } from ".";
import SidebarLogo from "./logo";

interface Props {
  navLinks: NavLink[];
}
const SidebarContainer: React.FC<Props> = ({ navLinks }) => {
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "36px",
          minWidth: "332px",
        }}
      >
        <SidebarLogo />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {navLinks.map((item, index) => (
            <SidebarNavLink key={index} item={item} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default SidebarContainer;
