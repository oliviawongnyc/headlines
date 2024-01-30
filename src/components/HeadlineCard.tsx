import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
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
      <Flex alignItems="center" gap="3" mb="5">
        <Heading as="h3" fontSize="md">
          Question {currentHeadline + 1}/10
        </Heading>
        {isCorrect !== null && (
          <Text color={isCorrect ? "correct" : "incorrect"}>
            {isCorrect
              ? "Well done!"
              : `Nice try. The correct answer is ${headline.correctAnswer}.`}
          </Text>
        )}
      </Flex>
      <Flex align="center" flexWrap="wrap" gap="2">
        {headline.headline.map((part) => {
          if (!part) {
            return (
              <Flex flexDir="column" key={`${headline.id}-blank`}>
                <Box
                  bg={backgroundColor}
                  borderBottom="1px solid black"
                  h={currentGuess ? "fit-content" : "40px"}
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
        <Flex gap="2" mt="5">
          <Button isDisabled={!currentGuess} onClick={clearGuess}>
            Clear
          </Button>
          <Button isDisabled={!currentGuess} onClick={handleSubmit}>
            Submit
          </Button>
        </Flex>
      ) : (
        <>
          <Flex mt="5" alignItems="end" justifyContent="space-between">
            {currentHeadline < 9 ? (
              <Button onClick={nextHeadlineOrFinish}>Next Headline</Button>
            ) : (
              <Button onClick={nextHeadlineOrFinish}>Finish</Button>
            )}
            <Link href={headline.links.article} isExternal>
              Read the full article here →
            </Link>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default HeadlineCard;
