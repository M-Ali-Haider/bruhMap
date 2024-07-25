"use client";
import { RecommendedJob } from "@/utils/recommendedJobs";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import RJDetails from "./details";
import RJImage from "./image";
import RJType from "./type";
import SaveRecommendedJob from "./save";

const RecommendedJobsCard = (props: RecommendedJob) => {
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );
  const [isSaved, setIsSaved] = useState(true);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 0, md: isSidebarOpen ? "0.5rem" : "1rem" },
        }}
      >
        <Box sx={{ flex: "1 1 0%" }}>
          <RJImage src={props.src} />
          <RJDetails {...props} />
          <RJType type={props.type} />
        </Box>
        <Box
          sx={{
            minWidth: "max-content",
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            alignItems: { xs: "center", md: "end" },
            justifyContent: { xs: "space-between", md: "normal" },
            pb: { xs: "0.5rem", md: "0" },
            pt: "0.75rem",
            gap: { xs: 0, md: "1.5rem" },
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              fontWeight: 600,
              textTransform: "capitalize",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            {props.location.city} , {props.location.country}
          </Box>
          <SaveRecommendedJob isSaved={isSaved} setIsSaved={setIsSaved} />
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              fontWeight: 600,
              textTransform: "capitalize",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
            }}
          >
            {props.location.city} , {props.location.country}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RecommendedJobsCard;
