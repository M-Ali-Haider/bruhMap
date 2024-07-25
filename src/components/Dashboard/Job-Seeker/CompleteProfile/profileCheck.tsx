import { Box, Typography } from "@mui/material";
import ProfileCheckSVG from "@/assets/profileCheck";

import React from "react";

type Props = {
  checkTitle: string;
  checkStatus: boolean;
};

const ProfileChecks = (props: Props) => {
  const color = props.checkStatus ? "#53BD00" : "#757575";
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Typography sx={{ color: "#757575" }}>{props.checkTitle}</Typography>
        <Box sx={{ width: "24px", height: "24px" }}>
          <ProfileCheckSVG fill={color} />
        </Box>
      </Box>
    </>
  );
};

export default ProfileChecks;
