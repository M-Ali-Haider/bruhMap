import React from "react";
import ContactUsCard from "./card";
import HorizontalLayout from "@/components/Wrappers/HorizontalLayout";
import StatsWrapper from "@/components/Wrappers/StatsWrapper";
import { contactUs } from "@/utils/contactUs";
import ContactUsChatBox from "./ChatBox/chatbox";

const JobSeekerContactUs = () => {
  return (
    <>
      <StatsWrapper>
        {contactUs.map((item, index) => {
          return <ContactUsCard key={index} {...item} />;
        })}
      </StatsWrapper>
      <HorizontalLayout sx={{ mt: "2.5rem" }}>
        <ContactUsChatBox />
      </HorizontalLayout>
    </>
  );
};

export default JobSeekerContactUs;
