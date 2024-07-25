import { WrapperProps } from "@/models/wrapper";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const HorizontalLayout = ({ children, sx }: WrapperProps) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          ...sx,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default HorizontalLayout;
