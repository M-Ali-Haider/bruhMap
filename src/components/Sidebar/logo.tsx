import { Box } from "@mui/material";
import React from "react";
import SidebarLogoSVG from "@/assets/Sidebar/logo";

const SidebarLogo = () => {
  return (
    <>
      <Box
        sx={{
          pr: "36px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SidebarLogoSVG width={300} height={59} />
      </Box>
    </>
  );
};

export default SidebarLogo;
