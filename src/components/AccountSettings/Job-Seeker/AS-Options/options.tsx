import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import { Box, Typography } from "@mui/material";
import React from "react";
import ProfileVisibility from "./profileVisibility";
import { profileOptions } from "@/utils/profileOptions";
import AccountOptionCard from "./card";

const AccountSettingsOptions = () => {
  return (
    <>
      <BoxWrapper
        sx={{
          flex: "1 1 0%",
          pr: "0",
          pl: "0",
          pb: "0.5rem",
          pt: "0",
        }}
      >
        <Box sx={{ pr: "3.5rem", pl: "1.5rem" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "1.5rem",
              lineHeight: "2rem",
              my: "1.5rem",
            }}
          >
            Profile Incomplete
          </Typography>
          <ProfileVisibility />
          {profileOptions.map((item, index) => {
            return <AccountOptionCard key={index} {...item} />;
          })}
        </Box>
        <Box
          sx={{
            color: "#a7a8a9",
            fontSize: "12px",
            width: "100%",
            textAlign: "center",
            mt: "2.25rem",
          }}
        >
          Member Since: Aug 2023
        </Box>
      </BoxWrapper>
    </>
  );
};

export default AccountSettingsOptions;
