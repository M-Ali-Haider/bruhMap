import { Typography } from "@mui/material";
import React from "react";

type Props = {
  heading: String;
};

const FormHeading: React.FC<Props> = ({ heading }) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: 700,
          mt: "1.75rem",
          textTransform: "capitalize",
          lineHeight: 1.5,
        }}
        variant="h3"
      >
        {heading}
      </Typography>
    </>
  );
};

export default FormHeading;
