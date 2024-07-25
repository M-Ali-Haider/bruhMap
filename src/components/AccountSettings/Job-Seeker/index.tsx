import HorizontalLayout from "@/components/Wrappers/HorizontalLayout";
import RightColumnWrapper from "@/components/Wrappers/RightColumnWrapper";
import React from "react";
import AccountSettingsObjectivesGrid from "./AS-Objectives/grid";
import AccountSettingsOptions from "./AS-Options/options";

const JobSeekerAccountSettings = () => {
  return (
    <>
      <HorizontalLayout sx={{ gap: "1.5rem", mt: "2.5rem" }}>
        <AccountSettingsObjectivesGrid />
        <RightColumnWrapper sx={{ maxWidth: "350px" }}>
          <AccountSettingsOptions />
        </RightColumnWrapper>
      </HorizontalLayout>
    </>
  );
};

export default JobSeekerAccountSettings;
