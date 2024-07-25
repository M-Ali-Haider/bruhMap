import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import Image from "next/image";
import React from "react";
import nextConfig from "../../../../../next.config";
import { profileDetails } from "@/utils/profileDetails";
import { Box, Typography } from "@mui/material";
import ProfileEmailSVG from "@/assets/profileEmail";

const ProfileDetails = () => {
  return (
    <>
      <BoxWrapper
        sx={{
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          aspectRatio: "407/413",
        }}
      >
        <Image
          src={`${nextConfig.basePath}/${profileDetails.src}`}
          alt="profile-image"
          width={128}
          height={128}
          style={{ borderRadius: "999px", objectPosition: "center" }}
        />
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            fontSize: "32px",
            lineHeight: "42.3px",
            mt: "0.5rem",
          }}
        >
          {profileDetails.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            mt: "6px",
          }}
        >
          <ProfileEmailSVG />
          <Typography sx={{ lineHeight: "18px", fontSize: "15px" }}>
            {profileDetails.email}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            mt: "10px",
          }}
        >
          {profileDetails.socials?.map((item, index) => {
            return (
              <a
                key={index}
                target="_blank"
                href={item.href}
                style={{ width: "28px", height: "28px" }}
              >
                {<item.svg />}
              </a>
            );
          })}
        </Box>
      </BoxWrapper>
    </>
  );
};

export default ProfileDetails;
