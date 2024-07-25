import { WrapperProps } from "@/models/wrapper";
import { Box, Stack } from "@mui/material";
import React, { ReactNode } from "react";

const RightColumnWrapper = ({ sx, children }: WrapperProps) => {
  return (
    <>
      <Stack
        sx={{
          flex: "1 1 0%",
          height: "100%",
          ...sx,
        }}
      >
        {children}
      </Stack>
    </>
  );
};

export default RightColumnWrapper;
