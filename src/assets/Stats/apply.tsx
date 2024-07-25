"use client";
const ApplySVG = (props: any) => (
  <svg
    // width={70}
    // height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect x={0.5} y={0.5} width={69} height={69} rx={9.5} stroke="white" />
    <mask
      id="mask0_14_415"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={5}
      y={5}
      width={60}
      height={60}
    >
      <rect x={5} y={5} width={60} height={60} fill="url(#pattern0_14_415)" />
    </mask>
    <g mask="url(#mask0_14_415)">
      <rect x={5} y={9.19995} width={60} height={55.8} fill="white" />
    </g>
    <defs>
      <pattern
        id="pattern0_14_415"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_14_415" transform="scale(0.005)" />
      </pattern>
      <image
        id="image0_14_415"
        width={200}
        height={200}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);
export default ApplySVG;
