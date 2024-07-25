"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import nextConfig from "../../../../../next.config";
import OnlineStatusSVG from "@/assets/Chatbox/online";

const ChatBoxHeader = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bgcolor: "#cecece",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          px: "1.5rem",
          py: "1rem",
        }}
      >
        <Box
          sx={{
            width: "48px",
            height: "48px",
            position: "relative",
            borderRadius: "999px",
            overflow: "hidden",
            border: "1px solid black",
          }}
        >
          <Image
            src={`${nextConfig.basePath}/chatbox.jpg`}
            fill
            style={{ objectPosition: "center" }}
            alt="employee image"
          />
        </Box>
        <Stack sx={{ color: "white" }}>
          <Typography
            sx={{ fontWeight: 500, fontSize: "15px", lineHeight: "18px" }}
          >
            Christiana Adams
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              mt: "2px",
            }}
          >
            <Typography sx={{ fontSize: "0.75rem", lineHeight: "14px" }}>
              {isOnline ? "Online" : "Offline"}
            </Typography>
            <Box>
              <OnlineStatusSVG fill={`${isOnline ? "#0aff22" : "red"}`} />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ChatBoxHeader;
