// import ActiveJobsSVG from "@/assets/EmployeeCentric-Stats/activeJobs";
// import NewApplicantsSVG from "@/assets/EmployeeCentric-Stats/newApplicants";
// import ShortListedCandidatesSVG from "@/assets/EmployeeCentric-Stats/shortListedCandidates";
// import ShortListedReviewedSVG from "@/assets/EmployeeCentric-Stats/shortListedReviewed";
import ApplySVG from "@/assets/Stats/apply";
import InterviewsSVG from "@/assets/Stats/interviews";
import StatsMessageSVG from "@/assets/Stats/message";
import StatsProfileSVG from "@/assets/Stats/profile";

export interface Stat {
  title: string;
  total: number;
  svg: any;
}

export const stats: Stat[] = [
  { title: "Interviews", total: 50, svg: InterviewsSVG },
  { title: "Apply", total: 50, svg: ApplySVG },
  { title: "Profile", total: 50, svg: StatsProfileSVG },
  { title: "Message", total: 50, svg: StatsMessageSVG },
];

// export const employeeStats: Stat[] = [
//   { title: "Active Job", total: 50, svg: ActiveJobsSVG },
//   { title: "New Applicants", total: 50, svg: NewApplicantsSVG },
//   { title: "Shortlisted Reviewed", total: 50, svg: ShortListedReviewedSVG },
//   { title: "Shortlisted Candidates", total: 50, svg: ShortListedCandidatesSVG },
// ];
