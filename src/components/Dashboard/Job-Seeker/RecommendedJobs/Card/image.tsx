import { Box } from "@mui/material";
import Image from "next/image";
import nextConfig from "../../../../../../next.config";

export default function RJImage({ src }: { src: String }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "5rem",
        height: "4rem",
      }}
    >
      <Image
        fill
        src={`${nextConfig.basePath}/recommendedJobs/${src}`}
        alt="company-logo"
        style={{
          objectFit: "contain",
        }}
      />
    </Box>
  );
}
