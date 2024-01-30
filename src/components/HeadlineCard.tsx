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
    <Flex
      border="1px solid lightGray"
      boxShadow="md"
      flexDir="column"
      p="6"
      w="100%"
    >
      <Heading as="h3" fontSize="md" mb="5">
        Question {currentHeadline + 1}/10
      </Heading>
      <Flex align="center" flexWrap="wrap" gap="2">
        {headline.headline.map((part) => {
          if (!part) {
            return (
              <Flex flexDir="column" key={`${headline.id}-blank`}>
                <Box
                  bg={backgroundColor}
                  borderBottom="1px solid black"
                  h="40px"
                  w={currentGuess ? "fit-content" : "150px"}
                  opacity={backgroundOpacity}
                  ref={setNodeRef}
                >
                  <Heading
                    as="h2"
                    color={
                      isCorrect === true
                        ? "correct"
                        : isCorrect === false
                        ? "incorrect"
                        : "black"
                    }
                    fontSize="3xl"
                  >
                    {currentGuess}
                  </Heading>
                </Box>
              </Flex>
            );
          }
          return (
            <Box
              borderBottom="1px solid white"
              h="40px"
              key={`${headline.id}-${part}`}
            >
              <Heading as="h2" fontSize="3xl" sx={{ textWrap: "nowrap" }}>
                {part}
              </Heading>
            </Box>
          );
        })}
      </Flex>
      <Heading as="h2" fontSize="md" mt="5">
        {headline.date}
      </Heading>
      {isCorrect === null ? (
        <Flex gap="2" ml="auto" mt="5">
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
          <Flex ml="auto" mt="5">
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
