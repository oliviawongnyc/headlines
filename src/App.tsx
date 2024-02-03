import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import headlines from "./data/headlines";
import { QUESTION_COUNT } from "./data/constants";
import AnswerBankContextProvider from "./hooks/useAnswerBank";
import HeadlineContextProvider from "./hooks/useHeadline";
import ScoreContextProvider from "./hooks/useScore";
import Game from "./components/Game";

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
