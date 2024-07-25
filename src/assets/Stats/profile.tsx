"use client";
const StatsProfileSVG = (props: any) => (
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
      d="M15 50C15 47.3478 16.0536 44.8043 17.9289 42.9289C19.8043 41.0536 22.3478 40 25 40H45C47.6522 40 50.1957 41.0536 52.0711 42.9289C53.9464 44.8043 55 47.3478 55 50C55 51.3261 54.4732 52.5979 53.5355 53.5355C52.5978 54.4732 51.3261 55 50 55H20C18.6739 55 17.4021 54.4732 16.4645 53.5355C15.5268 52.5979 15 51.3261 15 50Z"
      stroke="white"
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <path
      d="M35 30C39.1421 30 42.5 26.6421 42.5 22.5C42.5 18.3579 39.1421 15 35 15C30.8579 15 27.5 18.3579 27.5 22.5C27.5 26.6421 30.8579 30 35 30Z"
      stroke="white"
      strokeWidth={4}
    />
  </svg>
);
export default StatsProfileSVG;
