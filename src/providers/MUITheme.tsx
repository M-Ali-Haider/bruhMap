"use client";
import { createTheme } from "@mui/material/styles";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: publicSans.style.fontFamily,
  },
});

export default theme;
