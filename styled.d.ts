import "styled-components";

type Colors = {
  bgMain: string;
  bgSecondary: string;
  teal: string;
  sky: string;
  primary: string;
  secondary: string;
  slate: string;
};

type Breakpoints = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    breakpoints: Breakpoints;
    shadow: string;
  }
}
