import RecentActivitySVG from "@/assets/recentActivity";

export interface RecentActivity {
  svg: any;
  desc: string;
  datetime: string;
}

export const recentActivities: RecentActivity[] = [
  {
    svg: RecentActivitySVG,
    desc: "Your application has accepted and viewed",
    datetime: "2024-07-22T12:27:00",
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application has accepted and viewed",
    datetime: "2024-07-22T13:25:00",
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application was accepted and viewed",
    datetime: "2024-07-21T12:37:00", // 1 day ago
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application was accepted and viewed",
    datetime: "2024-07-20T12:37:00", // 2 days ago
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application was accepted and viewed",
    datetime: "2024-07-15T12:37:00", // 1 week ago
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application was accepted and viewed",
    datetime: "2024-07-01T12:37:00", // 3 weeks ago
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application was accepted and viewed",
    datetime: "2024-06-22T12:37:00", // 1 month ago
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application was accepted and viewed",
    datetime: "2024-01-22T12:37:00", // 6 months ago
  },
  {
    svg: RecentActivitySVG,
    desc: "Your application was accepted and viewed",
    datetime: "2023-01-22T12:37:00", // 6 months ago
  },
];
