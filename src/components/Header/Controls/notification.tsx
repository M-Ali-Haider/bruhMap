"use client";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import NotificationSVG from "@/assets/Header/notification";
import { useState } from "react";

const StyledMessageSVG = styled(NotificationSVG)(({ theme }) => ({
  height: 28,
  width: 28,
  [theme.breakpoints.up("md")]: {
    height: 30,
    width: 30,
  },
}));

const NotiNumberBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "flex",
  height: "12px",
  width: "12px",
  fontSize: "8px",
  right: "1.75px",
  top: "1.25px",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  color: "white",
  borderRadius: "50%",
  [theme.breakpoints.up("md")]: {
    right: "1.5px",
    fontSize: "10px",
    height: "15px",
    width: "15px",
  },
}));

const Notification = () => {
  const [counter, setCounter] = useState(1);

  return (
    <Button
      disableRipple
      onClick={() => setCounter(counter + 1)}
      sx={{
        p: 0,
        minWidth: "auto",
        position: "relative",
      }}
    >
      <StyledMessageSVG />
      <NotiNumberBox>{counter}</NotiNumberBox>
    </Button>
  );
};

export default Notification;
