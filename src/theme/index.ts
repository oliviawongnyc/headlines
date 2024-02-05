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
    correct: "#a0c35a",
    incorrect: "#ff6666",
  },
  fonts: {
    header: `'Bevan', sans-serif`,
    heading: `'News Cycle', sans-serif`,
    body: `'News Cycle', sans-serif`,
  },
  config,
});

export default theme;
