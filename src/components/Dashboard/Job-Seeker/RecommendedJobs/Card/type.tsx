import { Box } from "@mui/material";
import React from "react";

const RJType = ({ type }: { type: String }) => {
  return (
    <Box
      sx={{
        mt: "0.75rem",
        mb: "1.25rem",
        bgcolor: "#89a0ff",
        px: "22px",
        py: "0.5rem",
        color: "white",
        fontWeight: 500,
        borderRadius: "999px",
        fontSize: "15px",
        maxWidth: "max-content",
      }}
    >
      {type}
    </Box>
  );
};

export default RJType;
