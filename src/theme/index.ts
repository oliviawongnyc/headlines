import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/news-cycle";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  colors: {
    correct: "#6aaa64",
    incorrect: "#d0021b",
  },
  fonts: {
    heading: `'News Cycle', Verdana, sans-serif`,
    body: `'News Cycle', Verdana, sans-serif`,
  },
  config,
});

export default theme;
