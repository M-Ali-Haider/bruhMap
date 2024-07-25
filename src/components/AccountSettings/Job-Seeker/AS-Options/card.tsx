import { Box } from "@mui/material";
import React from "react";
import ProfileOptionsArrow from "@/assets/profileOptions/arrow";

type Props = {
  title: String;
  svg: React.ComponentType;
};

const AccountOptionCard = (props: Props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          position: "relative",
        }}
      >
        {<props.svg />}
        <Box
          sx={{
            borderBottom: "1px solid #efefef",
            fontSize: "15px",
            lineHeight: "21px",
            width: "100%",
            py: "0.75rem",
          }}
        >
          {props.title}
        </Box>
        <Box
          sx={{ position: "absolute", right: 0, width: "18px", height: "19px" }}
        >
          <ProfileOptionsArrow />
        </Box>
      </Box>
    </>
  );
};

export default AccountOptionCard;
