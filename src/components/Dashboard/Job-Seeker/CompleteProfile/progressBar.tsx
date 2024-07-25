import { Box } from "@mui/material";

const ProfileProgressBar = () => {
  const percentage = 70;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "1rem",
            bgcolor: "#dfdfdf",
            overflow: "hidden",
            borderRadius: "999px",
          }}
        >
          <Box
            style={{ width: `${percentage}%` }}
            sx={{
              height: "100%",
              bgcolor: "#89a0ff",
              borderRadius: "999px",
            }}
          ></Box>
        </Box>
        <Box>{percentage}%</Box>
      </Box>
    </>
  );
};

export default ProfileProgressBar;
