import ApplicationsSVG from "@/assets/Sidebar/application";
import ContactUsSVG from "@/assets/Sidebar/contactUs";
import DashboardSVG from "@/assets/Sidebar/dashboard";
import ExploreJobsSVG from "@/assets/Sidebar/exploreJobs";
import FAQSVG from "@/assets/Sidebar/faq";
import SettingsSVG from "@/assets/Sidebar/setting";
import React from "react";

export const userSidebar: {
  name: string;
  href: string;
  svg: JSX.Element;
}[] = [
  { name: "Dashboard", href: "/", svg: React.createElement(DashboardSVG) },
  {
    name: "Explore Jobs",
    href: "/explore-jobs",
    svg: React.createElement(ExploreJobsSVG),
  },
  {
    name: "Applications",
    href: "/applications",
    svg: React.createElement(ApplicationsSVG),
  },
  {
    name: "Account Settings",
    href: "/account-settings",
    svg: React.createElement(SettingsSVG),
  },
  {
    name: "Contact Us",
    href: "/contact-us",
    svg: React.createElement(ContactUsSVG),
  },
];

export const adminSidebar: {
  name: string;
  href: string;
  svg: JSX.Element;
}[] = [
  { name: "Dashboard", href: "/admin", svg: React.createElement(DashboardSVG) },
  {
    name: "Explore Jobs",
    href: "/admin/explore-jobs",
    svg: React.createElement(ExploreJobsSVG),
  },
  {
    name: "Applications",
    href: "/admin/applications",
    svg: React.createElement(ApplicationsSVG),
  },
  {
    name: "Account Settings",
    href: "/admin/account-settings",
    svg: React.createElement(SettingsSVG),
  },
  {
    name: "Contact Us",
    href: "/admin/contact-us",
    svg: React.createElement(ContactUsSVG),
  },
  { name: "Faq", href: "/admin/faq", svg: React.createElement(FAQSVG) },
];

export const jobSeekerSidebar: {
  name: string;
  href: string;
  svg: JSX.Element;
}[] = [
  {
    name: "Dashboard",
    href: "/job-seeker",
    svg: React.createElement(DashboardSVG),
  },
  {
    name: "Explore Jobs",
    href: "/job-seeker/explore-jobs",
    svg: React.createElement(ExploreJobsSVG),
  },
  {
    name: "Applications",
    href: "/job-seeker/applications",
    svg: React.createElement(ApplicationsSVG),
  },
  {
    name: "Account Settings",
    href: "/job-seeker/account-settings",
    svg: React.createElement(SettingsSVG),
  },
  {
    name: "Contact Us",
    href: "/job-seeker/contact-us",
    svg: React.createElement(ContactUsSVG),
  },
  { name: "Faq", href: "/job-seeker/faq", svg: React.createElement(FAQSVG) },
];

export const employeeCentricSidebar: {
  name: string;
  href: string;
  svg: JSX.Element;
}[] = [
  {
    name: "Dashboard",
    href: "/employee-centric",
    svg: React.createElement(DashboardSVG),
  },
  {
    name: "Explore Jobs",
    href: "/employee-centric/explore-jobs",
    svg: React.createElement(ExploreJobsSVG),
  },
  {
    name: "Applications",
    href: "/employee-centric/applications",
    svg: React.createElement(ApplicationsSVG),
  },
  {
    name: "Account Settings",
    href: "/employee-centric/account-settings",
    svg: React.createElement(SettingsSVG),
  },
  {
    name: "Contact Us",
    href: "/employee-centric/contact-us",
    svg: React.createElement(ContactUsSVG),
  },
  {
    name: "Faq",
    href: "/employee-centric/faq",
    svg: React.createElement(FAQSVG),
  },
];
