import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToggleProvider, ScrollProvider } from "@context";
import GlobalStyles from "@styles/GlobalStyles";
import { theme } from "@styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToggleProvider>
        <ScrollProvider>
          <Component {...pageProps} />
        </ScrollProvider>
      </ToggleProvider>
    </ThemeProvider>
  );
}
