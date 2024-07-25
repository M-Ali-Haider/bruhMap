import { styled, Switch } from "@mui/material";
import React from "react";

type Props = {
  isProfileVisible: boolean;
  onToggle: () => void;
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 21,
  padding: 0.5,
  "& .MuiSwitch-switchBase": {
    margin: 2,
    padding: 0,
    transform: "translate(1.25px,1.25px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translate(13px,1.25px)",
      "& .MuiSwitch-thumb:before": {},
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#000000",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#ffffff",
    width: 14.5,
    height: 14.5,
    boxShadow: "none",
    border: "1px solid #d1d5db",
    // "&::before": {
    //   content: "''",
    //   position: "absolute",
    //   width: "100%",
    //   height: "100%",
    //   left: 0,
    //   top: 0,
    // },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#e5e7eb",
    borderRadius: 20 / 2,
  },
  "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
    border: "none",
  },
}));

const ProfileVisibilityToggle = ({ isProfileVisible, onToggle }: Props) => {
  return (
    <>
      <div>
        <MaterialUISwitch checked={isProfileVisible} onChange={onToggle} />
      </div>
    </>
  );
};

export default ProfileVisibilityToggle;
