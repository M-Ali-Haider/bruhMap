import StatsBox from "@/components/Stat";
import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import HorizontalLayout from "@/components/Wrappers/HorizontalLayout";
import RightColumnWrapper from "@/components/Wrappers/RightColumnWrapper";
import RecommendedJobs from "@/components/Dashboard/Job-Seeker/RecommendedJobs/index";
import { stats } from "@/utils/stats";
import CompleteProfile from "./CompleteProfile/completeProfile";
import RecentActivity from "./RecentActivity/recentActivity";

const JobSeekerDashboard = () => {
  return (
    <>
      <StatsBox stats={stats} />
      <HorizontalLayout sx={{ mt: "40px", gap: "24px" }}>
        <BoxWrapper sx={{ flex: "1 1 0%" }}>
          <RecommendedJobs />
        </BoxWrapper>
        <RightColumnWrapper
          sx={{
            maxWidth: "350px",
            minWidth: "300px",
            gap: "1.25rem",
          }}
        >
          <CompleteProfile />
          <RecentActivity />
        </RightColumnWrapper>
      </HorizontalLayout>
    </>
  );
};

export default JobSeekerDashboard;
