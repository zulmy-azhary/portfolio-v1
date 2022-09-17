import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --mainBackground: #070725;
    --teal: 45 212 191; //teal-400
    --blue: 191 219 254; //blue-200
    --primary: 7 7 37; //primary-900
    --secondary: 8 8 47; //secondary-700
    --slate: 100 116 139; //text
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    cursor: default;
    letter-spacing: 0.05em;
  }

  body {
    background-color: var(--mainBackground);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, p, li {
    font-family: "Jost", monospace;
  }

  h1 {
    color: rgb(var(--blue));
  }

  h2 {
    color: rgb(var(--teal));
  }

  h3 {
    font-family: "Comic Neue", "Open Sans", sans-serif;
    color: rgb(var(--slate));
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    background-color: var(--mainBackground);
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