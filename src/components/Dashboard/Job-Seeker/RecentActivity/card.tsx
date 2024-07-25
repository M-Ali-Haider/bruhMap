import React from "react";
import { RecentActivity } from "@/utils/recentActivities";
import { Box, Typography } from "@mui/material";

const RecentActivityCard = (props: RecentActivity) => {
  return (
    <>
      <Box sx={{ display: "flex", gap: "0.75rem" }}>
        {<props.svg />}
        <Box>
          <Typography sx={{ lineHeight: "18px", fontSize: "15px" }}>
            {props.desc}
          </Typography>
          <Typography
            sx={{ lineHeight: "18px", mt: "0.25rem", fontSize: "15px" }}
          >
            12h ago
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default RecentActivityCard;
