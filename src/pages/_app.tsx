import type { AppProps /*, AppContext */ } from "next/app";

import { theme } from "essential-slices";
import { ThemeProvider, BaseStyles } from "theme-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <Component {...pageProps} />
      </BaseStyles>
    </ThemeProvider>
  );
}

export default MyApp;
