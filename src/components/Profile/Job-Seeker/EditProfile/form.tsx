import React from "react";
import FormHeading from "./formHeading";
import { Box } from "@mui/material";
import EPLabel from "./formLabel";
import { useSelector } from "react-redux";
import styles from "./style.module.scss";

const EditProfileForm = () => {
  const isSidebarOpen = useSelector(
    (state: { sidebar: { isSidebarOpen: Boolean } }) =>
      state.sidebar.isSidebarOpen
  );
  const sx = { minWidth: isSidebarOpen ? "315px" : "350px" };
  return (
    <>
      <form>
        <FormHeading heading={"generals"} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <EPLabel
            label={"first name"}
            type={"text"}
            placeholder={"Enter your name"}
            sx={sx}
          />
          <EPLabel
            label={"last name"}
            type={"text"}
            placeholder={"Type here"}
            sx={sx}
          />
          <EPLabel
            label={"password"}
            type={"password"}
            placeholder={"Enter your password"}
            sx={sx}
          />
          <EPLabel
            label={"Re-Type Password"}
            type={"password"}
            placeholder={"Enter your password"}
            sx={sx}
          />
        </Box>
        <FormHeading heading={"Contact"} />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          <EPLabel
            label={"mobile"}
            type={"number"}
            placeholder={"Enter your mobile number"}
            sx={sx}
          />
          <EPLabel
            label={"email"}
            type={"text"}
            placeholder={"Enter your Email"}
            sx={sx}
          />
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "repeat(3,1fr)" },
            gap: "3rem",
          }}
        >
          <EPLabel
            label={"address"}
            type={"number"}
            placeholder={"Enter your address"}
            sx={{}}
          />
          <EPLabel
            label={"city"}
            type={"text"}
            placeholder={"Enter your city"}
            sx={{}}
          />
          <EPLabel
            label={"country"}
            type={"number"}
            placeholder={"Enter your country"}
            sx={{}}
          />
        </Box>
        <FormHeading heading={"About Me"} />
        <textarea className={styles.textArea}></textarea>
      </form>
    </>
  );
};

export default EditProfileForm;
