import { useEffect, useState } from "react";
import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import { DndContext } from "@dnd-kit/core";
import theme from "./theme";
import Headline from "./components/Headline";
import headlines from "./data/headlines";
import AnswerBank from "./components/AnswerBank";

function App() {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");

  const { correctAnswer, date, headline, answerBank } =
    headlines[currentHeadline];

  const [editableAnswerBank, setEditableAnswerBank] = useState([...answerBank]);

  useEffect(() => {
    setEditableAnswerBank([...answerBank]);
  }, [currentHeadline]);

  const fillInBlank = (e) => {
    const guess = e.active.data.current.title;
    if (!guess || e.over?.id !== "droppable") return;
    setCurrentGuess(guess);
    setEditableAnswerBank(
      editableAnswerBank.filter((answer) => answer !== guess)
    );
  };

  const clearGuess = () => {
    setCurrentGuess("");
    setEditableAnswerBank([...answerBank]);
  };

  return (
    <ChakraProvider theme={theme}>
      <DndContext onDragEnd={fillInBlank}>
        {currentHeadline <= 9 ? (
          <Flex alignItems="center" flexDir="column" gap="10" mt="20">
            <Headline
              correctAnswer={correctAnswer}
              currentGuess={currentGuess}
              clearGuess={clearGuess}
              date={date}
              headline={headline}
              setCurrentHeadline={setCurrentHeadline}
            />
            <AnswerBank answerBank={editableAnswerBank} />
          </Flex>
        ) : (
          <Heading as="h1">All done! Thanks for playing!</Heading>
        )}
      </DndContext>
    </ChakraProvider>
  );
}

export default App;
