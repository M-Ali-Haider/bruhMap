export interface JobLocation {
  city: string;
  country: string;
}

export interface RecommendedJob {
  designation: string;
  src: string;
  minPrice: number;
  maxPrice: number;
  desc: string;
  type: string;
  location: JobLocation;
}

export const recommendedJobs: RecommendedJob[] = [
  {
    designation: "Intern UX Designer",
    src: "intel.png",
    minPrice: 11000,
    maxPrice: 25000,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s,",
    type: "Full Time",
    location: {
      city: "London",
      country: "England",
    },
  },
  {
    designation: "Intern UX Designer",
    src: "search.png",
    minPrice: 11000,
    maxPrice: 25000,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s,",
    type: "Remote",
    location: {
      city: "London",
      country: "England",
    },
  },
  {
    designation: "Intern UX Designer",
    src: "intel.png",
    minPrice: 11000,
    maxPrice: 25000,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s,",
    type: "Full Time",
    location: {
      city: "London",
      country: "England",
    },
  },
  {
    designation: "Intern UX Designer",
    src: "search.png",
    minPrice: 11000,
    maxPrice: 25000,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  standard dummy text ever since the 1500s,",
    type: "Remote",
    location: {
      city: "London",
      country: "England",
    },
  },
];
