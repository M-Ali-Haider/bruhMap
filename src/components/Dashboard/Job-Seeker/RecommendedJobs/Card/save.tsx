import { Button } from "@mui/material";
import { styled } from "@mui/system";
import UnSavedSVG from "@/assets/unsaved";
import SavedSVG from "@/assets/saved";

const StyledSVG = styled(({ isSaved, ...props }: { isSaved: Boolean }) =>
  isSaved ? <SavedSVG {...props} /> : <UnSavedSVG {...props} />
)(({ theme }) => ({
  height: 32,
  width: 32,
  [theme.breakpoints.up("md")]: {
    height: 40,
    width: 40,
  },
}));

const SaveRecommendedJob = ({
  isSaved,
  setIsSaved,
}: {
  isSaved: boolean;
  setIsSaved: (isSaved: boolean) => void;
}) => {
  return (
    <Button
      onClick={() => setIsSaved(!isSaved)}
      disableRipple
      sx={{
        p: 0,
        minWidth: "auto",
        "&:hover": {
          backgroundColor: "inherit",
          boxShadow: "none",
        },
      }}
    >
      <StyledSVG isSaved={isSaved} />
    </Button>
  );
};

export default SaveRecommendedJob;
