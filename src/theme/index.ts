import { extendTheme } from "@chakra-ui/react";
import "@fontsource/news-cycle";

const theme = extendTheme({
  fonts: {
    heading: `'News Cycle', sans-serif`,
    body: `'News Cycle', sans-serif`,
  },
});

export default theme;
