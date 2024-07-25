import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import nextConfig from "../../../../next.config";

interface HeaderControlsProps {
  profileLink: string;
}
const Profile: React.FC<HeaderControlsProps> = ({ profileLink }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Link href={profileLink}>
        <Box
          sx={{
            position: "relative",
            minWidth: "52px",
            minHeight: "52px",
            borderRadius: "9999px",
            boxShadow: "0 0px 10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Image
            src={`${nextConfig.basePath}/adminPfp.jpg`}
            fill
            alt="pfp image"
            style={{ objectPosition: "center", borderRadius: "9999px" }}
          />
        </Box>
      </Link>
      <Box>
        <Typography
          variant="h2"
          sx={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500" }}
        >
          Alex Smith
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: "12px", lineHeight: "16px", mt: "-1px" }}
        >
          Admin
        </Typography>
      </Box>
    </Box>
  );
};

export default Profile;
