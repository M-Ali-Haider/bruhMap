import { Box, Typography } from "@mui/material";

interface RJDetailsProps {
  designation: String;
  minPrice: number;
  maxPrice: number;
  desc: String;
}

const RJDetails: React.FC<RJDetailsProps> = ({
  designation,
  minPrice,
  maxPrice,
  desc,
}) => {
  return (
    <>
      <Designation designation={designation} />
      <Box
        sx={{
          color: "#40189D",
          my: "0.25rem",
          fontWeight: 500,
          fontSize: "15px",
        }}
      >
        ${minPrice} - ${maxPrice}
      </Box>
      <Box
        sx={{
          color: "#757575",
          fontSize: "0.875rem",
          lineHeight: "18px",
          fontWeight: 300,
        }}
      >
        {desc}
      </Box>
    </>
  );
};

export default RJDetails;

function Designation({ designation }: { designation: String }) {
  return (
    <Typography
      variant="h4"
      sx={{
        fontWeight: 700,
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      }}
    >
      {designation}
    </Typography>
  );
}
