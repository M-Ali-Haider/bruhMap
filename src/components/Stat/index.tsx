import { Box } from "@mui/material";
import StatCard from "./card";
import React from "react";
import { StatItem } from "@/models/stats";
import StatsWrapper from "../Wrappers/StatsWrapper";

const StatsBox = ({ stats }: { stats: StatItem[] }) => {
  return (
    <>
      <StatsWrapper>
        {stats.map((item, index) => (
          <StatCard key={index} item={item} index={index} />
        ))}
      </StatsWrapper>
    </>
  );
};
export default StatsBox;
