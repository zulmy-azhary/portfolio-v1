import { createGlobalStyle } from "styled-components";
import { Comic_Neue as ComicNeue } from "@next/font/google";

export const comicNeue = ComicNeue({
  variable: "--comicNeue",
  style: "normal",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  fallback: ["Inter", "Helvetica", "Arial", "sans-serif"],
});

export default createGlobalStyle`
  :root {
    --bgMain: ${(props) => props.theme.colors.bgMain};
    --bgSecondary: ${(props) => props.theme.colors.bgSecondary};
    --teal: ${props => props.theme.colors.teal};
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

    overflow-x: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0.05em;
    font-family: "Comic Neue", Inter, "Helvetica", Arial, sans-serif;

    /* Focus */
    &:focus-visible {
      outline-width: 2px;
      outline-style: dashed;
      outline-color: var(--teal);
      outline-offset: 5px;
      transition-duration: 300ms;
    }
  }

  ::selection {
    background-color: rgb(var(--slate) / 0.3);
    color: var(--teal);
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
    font-family: Inter;
  }

  h1 {
    color: rgb(var(--blue));
  }

  h2 {
    color: var(--teal);
  }

  a {
    text-decoration: none;
    color: rgb(var(--blue));
    transition: 0.2s ease-in-out;

    &:hover {
      color: var(--teal);
    }
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
    background-color: var(--teal);

    &:hover {
      background-color: rgb(var(--blue));
    }
  }
`;
