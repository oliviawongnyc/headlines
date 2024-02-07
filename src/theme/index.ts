import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/news-cycle";
import "@fontsource/bevan";
import "@fontsource-variable/libre-franklin";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  colors: {
    landing: "#4d88f9",
    correct: "#a0c35a",
    incorrect: "#ff6666",
    focusRingColor: "#4d88f9",
  },
  fonts: {
    header: `'Bevan', sans-serif`,
    heading: `'News Cycle', sans-serif`,
    body: `'News Cycle', sans-serif`,
    landing: `'Libre Franklin Variable', sans-serif;`,
  },
  config,
});

export default theme;
