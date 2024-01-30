import { Button, Flex, Heading, Text } from "@chakra-ui/react";
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
      <Flex alignItems="flex-start" flexDir="column" my="10" mx="6">
        <Heading as="h1" fontSize="4xl">
          Headlines
        </Heading>
        {headline && (
          <Text>
            Drag the answer into the blank to complete the famous New York Times
            headline.
          </Text>
        )}
      </Flex>
      <Flex flexDir="column" alignItems="flex-start" gap="10" mx="6">
        {headline ? (
          <DndContext onDragEnd={fillInBlank}>
            <HeadlineCard headline={headline} />
            <AnswerBank />
          </DndContext>
        ) : (
          // Game over
          <Flex
            border="1px solid lightGray"
            boxShadow="md"
            flexDir="column"
            gap="7"
            p="6"
          >
            <Heading as="h2" fontSize="2xl">
              You answered {score} out of 10 correctly.
            </Heading>
            <Button onClick={resetGame}>Play again</Button>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Game;
