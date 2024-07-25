import { Typography } from "@mui/material";
import React from "react";
import RecommendedJobsGrid from "./grid";

const RecommendedJobs = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontSize: "1.5rem",
          lineHeight: "2rem",
          mb: "1rem",
          fontWeight: 700,
        }}
      >
        Recommended Jobs
      </Typography>
      <RecommendedJobsGrid />
    </>
  );
};
export default RecommendedJobs;
