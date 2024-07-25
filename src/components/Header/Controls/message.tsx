"use client";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import MessageSVG from "@/assets/Header/message";

const StyledMessageSVG = styled(MessageSVG)(({ theme }) => ({
  height: 24,
  width: 24,
  [theme.breakpoints.up("md")]: {
    height: 27,
    width: 27,
  },
}));

const Message = () => {
  return (
    <Button
      disableRipple
      sx={{
        p: 0,
        minWidth: "auto",
      }}
    >
      <StyledMessageSVG />
    </Button>
  );
};

export default Message;
