import { Path } from "@/utils/allPaths";
import { Box } from "@mui/material";
import React from "react";
import TitleBar from "./titlebar";
import HeaderControls from "./Controls/headerControls";

interface HeaderProps {
  profileLink: string;
  allPaths: Path[];
}

const Header: React.FC<HeaderProps> = ({ profileLink, allPaths }) => {
  return (
    <>
      <Box
        component="header"
        sx={{
          py: "16px",
          pl: "18px",
          pr: "36px",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
        }}
      >
        <TitleBar allPaths={allPaths} />
        <HeaderControls profileLink={profileLink} />
      </Box>
    </>
  );
};

export default Header;
