import { Box } from "@mui/material";
import React from "react";
import Message from "./message";
import Notification from "./notification";
import Profile from "./profile";
import HeaderSearchBar from "./searchBar";

interface HeaderControlsProps {
  profileLink: string;
}
const HeaderControls: React.FC<HeaderControlsProps> = ({ profileLink }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: "1 1 0%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <HeaderSearchBar />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "14px", md: "20px" },
            mr: "28px",
          }}
        >
          <Message />
          <Notification />
        </Box>
        <Profile profileLink={profileLink} />
      </Box>
    </>
  );
};

export default HeaderControls;
