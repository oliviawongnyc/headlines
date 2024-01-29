import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import { useHeadline } from "../hooks/useHeadline";
import { Headline } from "../data/headlines";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const {
    setCurrentAnswerBank,
    currentGuess,
    setCurrentGuess,
    currentHeadline,
    setCurrentHeadline,
    setScore,
  } = useHeadline();
  const backgroundColor = isOver ? "gray.100" : "";
  const backgroundOpacity = isOver ? "0.5" : "";

  const clearGuess = () => {
    setCurrentGuess("");
    setCurrentAnswerBank([...headline.answerBank]);
  };

  const handleSubmit = () => {
    if (!currentGuess) return;
    if (currentGuess === headline.correctAnswer) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const nextHeadlineOrFinish = () => {
    clearGuess();
    setIsCorrect(null);
    setCurrentHeadline((prevState) => prevState + 1);
  };

  return (
    <Flex border="1px solid gray" flexDir="column" p="6">
      <Heading as="h2" fontSize="15px" mr="0">
        Question {currentHeadline + 1}/10
      </Heading>
      <Flex
        align={currentGuess ? "center" : "baseline"}
        flexWrap="wrap"
        gap="2"
      >
        {headline.headline.map((part, idx) => {
          if (!part) {
            return (
              <Flex flexDir="column" key={`${part}-${idx}`}>
                <Box
                  borderBottom={`1px solid black`}
                  bg={backgroundColor}
                  h="50px"
                  w={currentGuess ? "fit-content" : "100px"}
                  m="1"
                  opacity={backgroundOpacity}
                  p="1"
                  ref={setNodeRef}
                >
                  <Heading
                    color={
                      isCorrect === true
                        ? "correct"
                        : isCorrect === false
                        ? "incorrect"
                        : "black"
                    }
                  >
                    {currentGuess}
                  </Heading>
                </Box>
              </Flex>
            );
          }
          return (
            <Heading as="h1" key={`${part}-${idx}`} sx={{ textWrap: "nowrap" }}>
              {part}
            </Heading>
          );
        })}
      </Flex>
      <Heading as="h2" fontSize="15" mt="4">
        {headline.date}
      </Heading>
      {isCorrect === null ? (
        <Flex gap="2" ml="auto" mt="2">
          <Button isDisabled={!currentGuess} onClick={clearGuess}>
            Clear
          </Button>
          <Button isDisabled={!currentGuess} onClick={handleSubmit}>
            Submit
          </Button>
        </Flex>
      ) : (
        <>
          <Text color={isCorrect ? "correct" : "incorrect"} mt="2">
            {isCorrect
              ? "Well done!"
              : `Nice try. The correct answer is ${headline.correctAnswer}.`}
          </Text>
          <Flex ml="auto" mt="2">
            {currentHeadline < 9 ? (
              <Button onClick={nextHeadlineOrFinish}>Next Headline</Button>
            ) : (
              <Button onClick={nextHeadlineOrFinish}>Finish</Button>
            )}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default HeadlineCard;
