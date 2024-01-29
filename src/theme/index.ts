import { extendTheme } from "@chakra-ui/react";
import "@fontsource/news-cycle";

const theme = extendTheme({
  colors: {
    correct: "#6aaa64",
    incorrect: "#D0021B",
  },
  fonts: {
    heading: `'News Cycle', sans-serif`,
    body: `'News Cycle', sans-serif`,
  },
});

export default theme;
