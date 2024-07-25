"use client";
import { Path } from "@/utils/allPaths";
import { Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";
interface DisplayPageNameProps {
  allPaths: Path[];
}
const DisplayPageName: React.FC<DisplayPageNameProps> = ({ allPaths }) => {
  const pathName = usePathname();
  const object = allPaths.find((item) => item.href === pathName);
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "24px", md: "28px" },
          lineHeight: { xs: "32px", md: "" },
          paddingBottom: "4px",
          fontWeight: "bold",
        }}
      >
        {object?.name}
      </Typography>
    </>
  );
};

export default DisplayPageName;
