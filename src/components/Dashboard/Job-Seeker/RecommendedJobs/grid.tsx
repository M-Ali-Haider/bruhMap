import { recommendedJobs } from "@/utils/recommendedJobs";
import { Stack } from "@mui/material";
import React from "react";
import RecommendedJobsCard from "./Card/card";

type Props = {};

const RecommendedJobsGrid = (props: Props) => {
  return (
    <>
      <Stack
        sx={{
          alignItems: "center",
          maxHeight: "455px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {recommendedJobs.map((item, index) => {
          return (
            <>
              <RecommendedJobsCard key={index} {...item} />
              {index !== recommendedJobs.length - 1 && (
                <div
                  style={{
                    border: "1px solid #b3b3b3",
                    width: "100%",
                    height: "1px",
                  }}
                />
              )}
            </>
          );
        })}
      </Stack>
    </>
  );
};

export default RecommendedJobsGrid;
