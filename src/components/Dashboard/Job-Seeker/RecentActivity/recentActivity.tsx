import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import { Typography } from "@mui/material";
import React from "react";
import RecentActivityGrid from "./grid";

const RecentActivity = () => {
  return (
    <>
      <BoxWrapper sx={{}}>
        <Typography
          variant="h3"
          sx={{ fontSize: "1.25rem", lineHeight: "1.75rem", mb: "1.25rem" }}
        >
          Recent Activity
        </Typography>
        <RecentActivityGrid />
      </BoxWrapper>
    </>
  );
};

export default RecentActivity;
