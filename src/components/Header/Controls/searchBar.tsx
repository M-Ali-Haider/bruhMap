import { Box } from "@mui/material";
import InnerSearchSVG from "@/assets/Header/innerSearchbar";
import React from "react";
import styles from "./style.module.scss";
const HeaderSearchBar = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          maxWidth: "350px",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          mr: "40px",
        }}
      >
        <input
          className={`${styles.searchbar}`}
          type="search"
          placeholder="Search something here...."
        />
        <Box
          sx={{
            position: "absolute",
            right: "16px",
            width: "18px",
            height: "18px",
          }}
        >
          <InnerSearchSVG width={18} height={18} />
        </Box>
      </Box>
    </>
  );
};

export default HeaderSearchBar;
