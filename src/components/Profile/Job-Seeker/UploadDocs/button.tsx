"use client";
import { Button } from "@mui/material";
import UploadProfileDocumentSVG from "@/assets/uploadProfile";
// import { styled } from "@mui/system";

// const StyledMessageSVG = styled(MessageSVG)(({ theme }) => ({
//   height: 24,
//   width: 24,
//   [theme.breakpoints.up("md")]: {
//     height: 27,
//     width: 27,
//   },
// }));

const UploadButton = () => {
  return (
    <Button
      disableRipple
      sx={{
        p: 0,
        minWidth: "auto",
        "&:hover": {
          backgroundColor: "inherit",
          boxShadow: "none",
        },
      }}
    >
      <UploadProfileDocumentSVG />
    </Button>
  );
};

export default UploadButton;
