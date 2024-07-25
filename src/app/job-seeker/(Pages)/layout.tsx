import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import { jobSeekerPaths } from "@/utils/allPaths";
import { jobSeekerSidebar } from "@/utils/sidebar";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box
        component={"main"}
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Sidebar navLinks={jobSeekerSidebar} />
        <Box
          sx={{
            flex: "1 1 0%",
            display: "flex",
            bgcolor: "white",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Header
            profileLink={"/job-seeker/profile"}
            allPaths={jobSeekerPaths}
          />
          <PageWrapper>{children}</PageWrapper>
        </Box>
      </Box>
    </>
  );
}
