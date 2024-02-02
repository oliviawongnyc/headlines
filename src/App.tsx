import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import HeadlineContextProvider from "./hooks/useHeadline";
import Game from "./components/Game";
import AnswerBankContextProvider from "./hooks/useAnswerBank";
import headlines from "./data/headlines";
import ScoreContextProvider from "./hooks/useScore";
import { QUESTION_COUNT } from "./data/constants";

function App() {
  const gameHeadlines = setCurrentGameHeadlines();
  return (
    <ChakraProvider theme={theme}>
      <HeadlineContextProvider gameHeadlines={gameHeadlines}>
        <AnswerBankContextProvider gameHeadlines={gameHeadlines}>
          <ScoreContextProvider>
            <Game />
          </ScoreContextProvider>
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
  const gameHeadlines = shuffledHeadlines.slice(0, QUESTION_COUNT);

  return gameHeadlines;
};
