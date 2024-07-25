import { WrapperProps } from "@/models/wrapper";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const BoxWrapper = ({ sx, children }: WrapperProps) => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "30px",
          p: "24px",
          boxShadow: "0px 0px 14px 0px #00000040",
          transition: "all 0.5s cubic-bezier(0.76,0,0.24,1)",
          ...sx,
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default BoxWrapper;
