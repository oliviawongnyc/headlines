import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/news-cycle";
import "@fontsource/bevan";
import "@fontsource-variable/libre-franklin";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  semanticTokens: {
    colors: {
      landing: "#4d88f9",
      correct: "#6aaa64",
      incorrect: "#ff4b56",
      focusRingColor: "#4d88f9",
    },
    fonts: {
      header: `'Bevan', sans-serif`,
      heading: `'News Cycle', sans-serif`,
      body: `'News Cycle', sans-serif`,
      landing: `'Libre Franklin Variable', sans-serif;`,
    },
  },
  config,
});

export default theme;
