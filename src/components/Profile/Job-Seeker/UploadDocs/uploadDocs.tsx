import BoxWrapper from "@/components/Wrappers/BoxWrapper";
import { uploadDocuments } from "@/utils/uploadDocuments";
import { Box, Stack } from "@mui/material";
import React from "react";
import UploadButton from "./button";

const UploadProfileDocs = () => {
  return (
    <>
      <BoxWrapper sx={{ minWidth: "300px" }}>
        <Stack sx={{ gap: "1.5rem", p: "0.5rem" }}>
          {uploadDocuments.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <UploadButton />
                <Box sx={{ fontSize: "17px" }}>Upload Your {item}</Box>
              </Box>
            );
          })}
        </Stack>
      </BoxWrapper>
    </>
  );
};

export default UploadProfileDocs;
