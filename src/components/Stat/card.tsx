"use client";
import { StatCardProps } from "@/models/stats";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CardWrapper from "./cardWrapper";

const StatCard: React.FC<StatCardProps> = ({ item, index }) => {
  const isSidebarOpen = useSelector(
    (state: any) => state.sidebar.isSidebarOpen
  );
  return (
    <>
      <CardWrapper index={index}>
        {
          <item.svg
            style={{
              width: `${isSidebarOpen ? "40px" : "64px"}`,
              height: `${isSidebarOpen ? "40px" : "64px"}`,
              transition: "all 0.5s cubic-bezier(0.76,0,0.24,1)",
            }}
          />
        }
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: isSidebarOpen ? "18px" : "20px",
              lineHeight: "28px",
              transition: "all 0.3s cubic-bezier(0.76,0,0.24,1)",
              fontWeight: 500,
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              fontSize: isSidebarOpen ? "30px" : "36px",
              lineHeight: isSidebarOpen ? "36px" : "40px",
              transition: "all 0.3s cubic-bezier(0.76,0,0.24,1)",
              fontWeight: 500,
            }}
          >
            {item.total}
          </Typography>
        </Box>
      </CardWrapper>
    </>
  );
};

export default StatCard;
