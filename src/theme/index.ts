import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import "@fontsource/news-cycle";
import "@fontsource/bevan";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: "3xl",
        fontWeight: "400",
        _focus: {
          outline: "none",
          ring: "2px",
          ringColor: "focusRingColor",
        },
      },
      sizes: {
        sm: {
          fontSize: "xs",
          px: "8",
        },
      },
    },
  },
  semanticTokens: {
    colors: {
      landing: "#4d88f9",
      correct: "#6aaa64",
      incorrect: "#ff4b56",
      focusRingColor: "#4d88f9",
    },
    fonts: {
      headline: `'ITC Clearface Regular', sans-serif;`,
      headlineBold: `'ITC Clearface Bold', sans-serif;`,
      subtitle: `'Memphis Medium', sans-serif`,
      subtitleBold: `'Memphis Bold', sans-serif`,
      tLogo: `'Chomsky', sans-serif`,
      title: `'Bevan', sans-serif`,
    },
  },
  layerStyles: {
    centeredFlexbox: {
      alignItems: "center",
      flexDir: "column",
      justifyContent: "center",
    },
    gameBox: {
      border: "1px solid lightGray",
      borderRadius: "md",
      boxShadow: "md",
      p: ["4", "6"],
    },
  },
  config,
});

export default theme;
