import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import HeadlineContextProvider from "./hooks/useHeadline";
import Game from "./components/Game";
import AnswerBankContextProvider from "./hooks/useAnswerBank";
import headlines from "./data/headlines";
// import { useEffect } from "react";

function App() {
  const currentGameHeadlines = setCurrentGameHeadlines();

  // useEffect(() => {

  // }, [])
  return (
    <ChakraProvider theme={theme}>
      <HeadlineContextProvider currentGameHeadlines={currentGameHeadlines}>
        <AnswerBankContextProvider currentGameHeadlines={currentGameHeadlines}>
          <Game />
        </AnswerBankContextProvider>
      </HeadlineContextProvider>
    </ChakraProvider>
  );
}

export default App;

const shuffleHeadlines = () => {
  const headlinesToChooseFrom = [...headlines];
  let currentIndex = headlinesToChooseFrom.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [headlinesToChooseFrom[currentIndex], headlinesToChooseFrom[randomIndex]] =
      [headlinesToChooseFrom[randomIndex], headlinesToChooseFrom[currentIndex]];
  }

  return headlinesToChooseFrom;
};

const setCurrentGameHeadlines = () => {
  const shuffledHeadlines = shuffleHeadlines();
  const gameHeadlines = shuffledHeadlines.slice(0, 10);

  return gameHeadlines;
};
