import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import { profileObjectives } from "@/utils/profileObjectives";
import { Box, Typography } from "@mui/material";
import React from "react";
import AccountObjectiveCard from "./card";

const AccountSettingsObjectivesGrid = () => {
  return (
    <BoxWrapper sx={{ flex: "1 1 0%" }}>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          fontSize: "1.5rem",
          lineHeight: "2rem",
          mb: "2.25rem",
        }}
      >
        Profile Incomplete
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {profileObjectives.map((item, index) => {
          return <AccountObjectiveCard key={index} item={item} />;
        })}
      </Box>
    </BoxWrapper>
  );
};

export default AccountSettingsObjectivesGrid;
