import React from "react";
import HorizontalLayout from "@/components/Wrappers/HorizontalLayout";
import RightColumnWrapper from "@/components/Wrappers/RightColumnWrapper";
import EditProfile from "./EditProfile/editProfile";
import ProfileDetails from "./ProfileDetails.tsx/profileDetails";
import UploadProfileDocs from "./UploadDocs/uploadDocs";
const JobSeekerProfile = () => {
  return (
    <>
      <HorizontalLayout sx={{ gap: "1.5rem", mt: "2.5rem" }}>
        <EditProfile />
        <RightColumnWrapper
          sx={{
            minWiidth: { md: "300px" },
            maxWidth: { md: "325px" },
            gap: "1.25rem",
          }}
        >
          <ProfileDetails />
          <UploadProfileDocs />
        </RightColumnWrapper>
      </HorizontalLayout>
    </>
  );
};

export default JobSeekerProfile;
