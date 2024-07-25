import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const StatsWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        gap: "1rem",
        justifyContent: {
          xs: "center",
          md: "space-between",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default StatsWrapper;
