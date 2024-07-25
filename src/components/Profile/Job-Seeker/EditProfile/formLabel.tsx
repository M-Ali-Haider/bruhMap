import { Stack, Typography } from "@mui/material";
import styles from "./style.module.scss";
interface EPLabelProps {
  label: string;
  type: string;
  placeholder: string;
  sx: any;
}

const EPLabel: React.FC<EPLabelProps> = ({ label, type, placeholder, sx }) => {
  return (
    <>
      <Stack
        sx={{
          gap: "0.5rem",
          flex: "1 1 0%",
          mt: "1.5rem",
          transition: "all 0.3s cubic-bezier(0.76,0,0.24,1)",
          ...sx,
        }}
      >
        <Typography
          component="label"
          htmlFor={label}
          sx={{
            fontWeight: 700,
            textTransform: "capitalize",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
          }}
        >
          {label}
        </Typography>
        <input placeholder={placeholder} className={styles.input} type="text" />
      </Stack>
    </>
  );
};
export default EPLabel;
