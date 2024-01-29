import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import HeadlineContextProvider from "./hooks/useHeadline";
import Game from "./components/Game";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HeadlineContextProvider>
        <Game />
      </HeadlineContextProvider>
    </ChakraProvider>
  );
}

export default App;
