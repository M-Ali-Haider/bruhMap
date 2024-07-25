"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CompleteSVG from "@/assets/profileOptions/complete";
import IncompleteSVG from "@/assets/profileOptions/incomplete";
import EditSVG from "@/assets/profileOptions/edit";

type Props = {
  item: {
    title: String;
    status: Boolean;
  };
};

const AccountObjectiveCard = (props: Props) => {
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );
  return (
    <>
      <Box
        sx={{
          minWidth: isSidebarOpen ? "20rem" : "24rem",
          display: "flex",
          flex: "1 1 0%",
          boxShadow: "0px 4px 4px #00000040",
          borderRadius: "0.75rem",
          px: "0.75rem",
          py: "1.5rem",
          justifyContent: "space-between",
          border: "1px solid #f2f2f2",
        }}
      >
        <Box sx={{ display: "flex", gap: "0.5rem" }}>
          <Box sx={{ mt: "3px" }}>
            {props.item.status ? <CompleteSVG /> : <IncompleteSVG />}
          </Box>

          <Stack sx={{ gap: "0.5rem" }}>
            <Typography sx={{ fontSize: "1.125rem", lineHeight: "1.75rem" }}>
              {props.item.title}
            </Typography>
            <Box
              sx={{
                color: props.item.status ? "#04ae8b" : "#FA564E",
                bgcolor: props.item.status ? "#e0f5f1" : "#ffefee",
                textAlign: "center",
                borderRadius: "999px",
                px: "0.75rem",
                py: "0.25rem",
                fontSize: "12px",
                lineHeight: 1.5,
                maxWidth: "max-content",
              }}
            >
              {props.item.status ? "Complete" : "Incomplete"}
            </Box>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            maxHeight: "20px",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <EditSVG />
          <Typography
            component="span"
            sx={{
              color: "#767778",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
            }}
          >
            Edit
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AccountObjectiveCard;
