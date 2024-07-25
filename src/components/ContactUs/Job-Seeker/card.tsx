"use client";
import { ContactUsItem } from "@/utils/contactUs";
import { Box, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const ContactUsCard = (props: ContactUsItem) => {
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );
  return (
    <>
      <Stack
        sx={{
          aspectRatio: "340/171",
          borderRadius: "1.5rem",
          boxShadow: {
            xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
            md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
          },
          px: "2rem",
          flex: "1 1 0%",
          maxWidth: "338px",
          minWidth: "250px",
          alignItems: "center",
          border: "3px solid #89a0ff",
          transition: "all 0.3s -bezier(0.76,0,0.24,1)",
        }}
      >
        {
          <props.svg
            style={{
              width: isSidebarOpen ? "2.25rem" : "2.75rem",
              height: isSidebarOpen ? "2.25rem" : "2.75rem",
              marginTop: isSidebarOpen ? "1rem" : "1.5rem",
              transition: "all 0.5s cubic-bezier(0.76,0,0.24,1)",
            }}
          />
        }
        <Box
          sx={{
            color: "#767778",
            fontSize: isSidebarOpen ? "15px" : "16px",
            mt: isSidebarOpen ? "6px" : "10px",
            mb: "-2px",
            lineHeight: "23px",
          }}
        >
          {props.type}
        </Box>
        <Box
          sx={{
            color: "#1a1c1e",
            fontSize: isSidebarOpen ? "1.125rem" : "22px",
            lineHeight: "35px",
            fontWeight: 500,
            transition: "all 0.3s cubic-bezier(0.76,0,0.24,1)",
          }}
        >
          {props.value}
        </Box>
      </Stack>
    </>
  );
};

export default ContactUsCard;
