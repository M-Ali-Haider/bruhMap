"use client";
const StatsMessageSVG = (props: any) => (
  <svg
    // width={70}
    // height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.5} y={0.5} width={69} height={69} rx={9.5} stroke="white" />
    <path
      d="M55 15H15C12.25 15 10.025 17.25 10.025 20L10 50C10 52.75 12.25 55 15 55H55C57.75 55 60 52.75 60 50V20C60 17.25 57.75 15 55 15ZM55 25L35 37.5L15 25V20L35 32.5L55 20V25Z"
      fill="white"
    />
  </svg>
);
export default StatsMessageSVG;
