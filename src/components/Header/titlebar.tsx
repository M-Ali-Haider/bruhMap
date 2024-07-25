import { Path } from "@/utils/allPaths";
import React from "react";
import DisplayPageName from "./displayPageName";
import BurgerMenu from "./burgerMenu";
import { Box } from "@mui/material";
interface TitleBarProps {
  allPaths: Path[];
}
const TitleBar: React.FC<TitleBarProps> = ({ allPaths }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "12px", md: "14px" },
        }}
      >
        <BurgerMenu />
        <DisplayPageName allPaths={allPaths} />
      </Box>
    </>
  );
};

export default TitleBar;
