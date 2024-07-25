import { Button } from "@mui/material";
import React from "react";

interface EditProfileButtonProps {
  label: string;
  handleClick: () => void;
}

const EditProfileButton: React.FC<EditProfileButtonProps> = ({
  label,
  handleClick,
}) => {
  return (
    <Button
      onClick={() => handleClick()}
      disableRipple
      sx={{
        color: "white",
        textTransform: "capitalize",
        py: "6px",
        px: "1.5rem",
        fontWeight: 500,
        bgcolor: "#89a0ff",
        borderRadius: "999px",
        fontSize: "16px",
        lineHeight: "24px",
        "&:hover": {
          bgcolor: "#89a0ff",
          boxShadow: "none",
        },
      }}
    >
      {label}
    </Button>
  );
};

export default EditProfileButton;
