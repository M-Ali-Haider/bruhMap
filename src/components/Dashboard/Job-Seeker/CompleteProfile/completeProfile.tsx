import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import { Stack, Typography } from "@mui/material";
import React from "react";
import ProfileProgressBar from "./progressBar";
import { profileChecks } from "@/utils/profileChecks";
import ProfileChecks from "./profileCheck";

const CompleteProfile = () => {
  return (
    <>
      <BoxWrapper sx={{}}>
        <Typography
          variant="h3"
          sx={{
            mb: "0.25rem",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
          }}
        >
          Complete Your Profile
        </Typography>
        <ProfileProgressBar />
        <Stack sx={{ gap: "0.25rem", mt: "8px" }}>
          {profileChecks.map((item, index) => {
            return <ProfileChecks key={index} {...item} />;
          })}
        </Stack>
      </BoxWrapper>
    </>
  );
};

export default CompleteProfile;
