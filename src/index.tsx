import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ScrollProvider, ToggleProvider } from "context";
import GlobalStyles from "styles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ToggleProvider>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </ToggleProvider>
  </React.StrictMode>
);