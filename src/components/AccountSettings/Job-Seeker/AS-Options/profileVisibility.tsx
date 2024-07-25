"use client";
import React from "react";
import ProfileVisibilitySVG from "@/assets/profileOptions/profileVisibility";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ProfileVisibilityToggle from "./toggle";
const ProfileVisibility = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  return (
    <>
      <Box
        sx={{ display: "flex", gap: "10px", borderTop: "1px solid #efefef" }}
      >
        <Box sx={{ py: "0.75rem" }}>
          <ProfileVisibilitySVG />
        </Box>
        <Box
          sx={{
            borderBottom: "1px solid #efefef",
            width: "100%",
            py: "0.75rem",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "21px",
            }}
          >
            <Typography sx={{ lineHeight: "21px", fontSize: "15px" }}>
              Profile Visibility
            </Typography>
            <ProfileVisibilityToggle
              isProfileVisible={isProfileVisible}
              onToggle={() => setIsProfileVisible(!isProfileVisible)}
            />
          </Box>
          <Box
            sx={{
              fontSize: "9px",
              borderRadius: "999px",
              color: "#1a1c1e",
              bgcolor: "#f0f0f0",
              width: "max-content",
              px: "6px",
              py: "2px",
              mt: "6px",
            }}
          >
            Profile Visibility Within Instructor Search
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileVisibility;
