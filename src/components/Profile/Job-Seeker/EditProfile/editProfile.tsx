"use client";
import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import { Box, Typography } from "@mui/material";
import React from "react";
import EditProfileButton from "./button";
import EditProfileForm from "./form";

const EditProfile = () => {
  const handleCancel = () => {
    console.log("You clicked the cancel button");
  };
  const handleSaveChanges = () => {
    console.log("You clicked the save changes button");
  };
  return (
    <>
      <BoxWrapper
        sx={{
          flex: "1 1 0%",
          transition: "all 0.3s cubic-bezier(0.76,0,0.24,1)",
          minWidth: { md: "550px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontSize: "28px", fontWeight: 700, lineHeight: 1.5 }}
          >
            Edit Profile
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              gap: "0.75rem",
              mt: "0.75rem",
            }}
          >
            <EditProfileButton label={"cancel"} handleClick={handleCancel} />
            <EditProfileButton
              label={"save changes"}
              handleClick={handleSaveChanges}
            />
          </Box>
        </Box>
        <EditProfileForm />
      </BoxWrapper>
    </>
  );
};

export default EditProfile;
