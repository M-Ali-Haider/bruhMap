"use client";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Box, useMediaQuery, Theme } from "@mui/material";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );

  return (
    <Box
      sx={{
        px: { xs: "20px", md: `${isSidebarOpen ? "36px" : "8px"}` },
        pt: "28px",
        width: "100%",
        bgcolor: "white",
        maxHeight: "calc(100vh - 84px)",
        maxWidth: "1440px",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        scrollbarWidth: "none",
        transition: "all 200ms cubic-bezier(0.76,0,0.24,1)",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          pb: "32px",
          maxWidth: "100%",
          px: { xs: "16px", md: "0px" },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageWrapper;
