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
    // headline,
    setCurrentAnswerBank,
    currentGuess,
    setCurrentGuess,
    setCurrentHeadline,
  } = useHeadline();
  const underlineColor = isOver ? "green" : "black";

  const clearGuess = () => {
    setCurrentGuess("");
    setCurrentAnswerBank([...headline.answerBank]);
  };

  const handleSubmit = () => {
    if (!currentGuess) return;
    if (currentGuess === headline.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const goToNextHeadline = () => {
    clearGuess();
    setIsCorrect(null);
    setCurrentHeadline((prevState) => prevState + 1);
  };

  return (
    <Flex align="center" justify="center">
      <Flex border="1px solid gray" flexDir="column" w="80vw" gap="3" p="10">
        <Flex align={currentGuess ? "center" : "baseline"} flexWrap="wrap">
          {headline.headline.map((part, idx) => {
            if (!part) {
              return (
                <Flex flexDir="column" key={`${part}-${idx}`} mx="3">
                  <Box
                    borderBottom={`1px solid ${underlineColor}`}
                    w={currentGuess ? "fit-content" : "100px"}
                    m="1"
                    p="1"
                    ref={setNodeRef}
                  >
                    <Heading
                      color={
                        isCorrect === true
                          ? "green"
                          : isCorrect === false
                          ? "red"
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
              <Heading
                as="h1"
                key={`${part}-${idx}`}
                sx={{ textWrap: "nowrap" }}
              >
                {part}
              </Heading>
            );
          })}
        </Flex>
        <Heading as="h2" fontSize="15">
          {headline.date}
        </Heading>
        {isCorrect === null ? (
          <>
            <Button isDisabled={!currentGuess} onClick={handleSubmit}>
              Submit
            </Button>
            <Button isDisabled={!currentGuess} onClick={clearGuess}>
              Clear
            </Button>
          </>
        ) : (
          <>
            <Text color={isCorrect ? "green" : "red"}>
              {isCorrect
                ? "Well done!"
                : `Nice try. The correct answer is ${headline.correctAnswer}.`}{" "}
            </Text>
            <Button onClick={goToNextHeadline}>Next Headline</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default HeadlineCard;
