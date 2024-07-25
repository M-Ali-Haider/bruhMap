import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const CardWrapper = ({
  index,
  children,
}: {
  index: any;
  children: ReactNode;
}) => {
  return (
    <>
      <Box
        sx={{
          bgcolor: index % 2 === 0 ? "#6AC6E0" : "#89A0FF",
          aspectRatio: "338/149",
          borderRadius: "24px",
          boxShadow: {
            xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
            md: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgb(0,0,0,0.1)",
          },
          px: "32px",
          flex: "1 1 0%",
          maxWidth: "338px",
          minWidth: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.3s -bezier(0.76,0,0.24,1)",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default CardWrapper;
