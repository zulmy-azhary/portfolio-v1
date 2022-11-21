import { createGlobalStyle } from "styled-components";
import { Jost, Comic_Neue as ComicNeue, Cookie } from "@next/font/google";

export const jost = Jost({
  variable: "--jost",
  style: "normal",
  weight: "400",
  subsets: ["latin"],
  fallback: ["Inter", "Helvetica", "Arial", "sans-serif"],
});

export const comicNeue = ComicNeue({
  variable: "--comicNeue",
  style: "normal",
  weight: "400",
  subsets: ["latin"],
  fallback: ["Inter", "Helvetica", "Arial", "sans-serif"],
});

export const cookie = Cookie({
  variable: "--cookie",
  style: "normal",
  weight: "400",
  subsets: ["latin"],
  fallback: ["Inter", "Helvetica", "Arial", "sans-serif"],
});

export default createGlobalStyle`
  :root {
    --bgMain: ${(props) => props.theme.colors.bgMain};
    --secondaryBackground: 18, 25, 70;
    --teal: 45 212 191; //teal-400
    --blue: 191 219 254; //blue-200
    --primary: 7 7 37; //primary-900
    --secondary: 10 10 62; //secondary-700
    --slate: 100 116 139; //text
    --shadow: ${(props) => props.theme.shadow};

    /* Breakpoints */
    --mobileS: ${(props) => props.theme.breakpoints.mobileS};
    --mobileM: ${(props) => props.theme.breakpoints.mobileM};
    --mobileL: ${(props) => props.theme.breakpoints.mobileL};
    --tablet: ${(props) => props.theme.breakpoints.tablet};
    --laptop: ${(props) => props.theme.breakpoints.laptop};
    --laptopL: ${(props) => props.theme.breakpoints.laptopL};
    --desktop: ${(props) => props.theme.breakpoints.desktop};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.05em;

    /* Focus */
    &:focus-visible {
      outline-width: 2px;
      outline-style: dashed;
      outline-color: rgb(var(--teal));
      outline-offset: 5px;
      transition-duration: 300ms;
    }
  }

  ::selection {
    background-color: rgb(var(--slate) / 0.3);
    color: rgb(var(--teal));
  }

  body {
    overflow-x: hidden;
    background-color: var(--bgMain);
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, p, li {
    font-family: var(--jost);
  }

  h1 {
    color: rgb(var(--blue));
  }

  h2 {
    color: rgb(var(--teal));
  }

  h3 {
    font-family: var(--comicNeue);
    color: rgb(var(--blue) / 0.5);
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: var(--bgMain);
  }

  ::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    border-radius: 0.75rem;
    background-clip: padding-box;
    background-color: rgb(var(--teal));

    &:hover {
      background-color: rgb(var(--blue));
    }
  }
`;
