import { Button, Flex, Heading } from "@chakra-ui/react";
import { useHeadline } from "../hooks/useHeadline";
import AnswerBank from "./AnswerBank";
import HeadlineCard from "./HeadlineCard";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

const Game = () => {
  const {
    headline,
    setCurrentAnswerBank,
    setCurrentGuess,
    setCurrentHeadline,
    score,
    setScore,
  } = useHeadline();

  const fillInBlank = (e: DragEndEvent) => {
    const guess = e.active.data.current;
    if (!guess || e.over?.id !== "droppable") return;
    setCurrentGuess(guess.title);
    setCurrentAnswerBank((prevBank) =>
      prevBank.filter((possibleAnswer) => possibleAnswer !== guess.title)
    );
  };

  const resetGame = () => {
    setCurrentHeadline(0);
    setScore(0);
  };
  return (
    <>
      {headline ? (
        <DndContext onDragEnd={fillInBlank}>
          <Flex alignItems="center" flexDir="column" gap="10" mt="20">
            <HeadlineCard headline={headline} />
            <AnswerBank />
          </Flex>
        </DndContext>
      ) : (
        <Flex
          alignItems="center"
          flexDir="column"
          gap="5"
          h="100vh"
          justifyContent="center"
        >
          <Heading as="h1">
            You answered {score} out of 10 correctly! Thanks for playing!
          </Heading>
          <Button onClick={resetGame}>Play again</Button>
        </Flex>
      )}
    </>
  );
};

export default Game;
