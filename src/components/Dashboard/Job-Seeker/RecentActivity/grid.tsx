import { recentActivities } from "@/utils/recentActivities";
import { Stack } from "@mui/material";
import React from "react";
import RecentActivityCard from "./card";

const RecentActivityGrid = () => {
  return (
    <>
      <Stack
        sx={{
          gap: "1rem",
          maxHeight: "270px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {recentActivities.map((item, index) => {
          return <RecentActivityCard key={index} {...item} />;
        })}
      </Stack>
    </>
  );
};

export default RecentActivityGrid;
