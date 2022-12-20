import type { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    bgMain: "hsl(239, 76%, 11%)",
    bgSecondary: "hsl(232, 59.1%, 17.3%)",
    teal: "hsl(172, 66%, 50.4%)",
    primary: "hsl(240, 68.2%, 8.6%)",
    secondary: "hsl(240, 72.2%, 14.1%)",
    slate: "hsla(215 16.3% 46.9% / 0.3)",
  },
  breakpoints: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
  },
  shadow: "3px 3px 10px rgba(0, 0, 0, 0.1);",
};
