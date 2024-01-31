import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import { useHeadline } from "../hooks/useHeadline";
import { Headline } from "../data/headlines";
import { useAnswerBank } from "../hooks/useAnswerBank";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  const {
    currentGuess,
    setCurrentGuess,
    currentHeadlineIdx,
    setCurrentHeadlineIdx,
    isCorrect,
    setIsCorrect,
    setScore,
  } = useHeadline();
  const { setCurrentAnswerBank } = useAnswerBank();

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
    setCurrentHeadlineIdx((prevState) => prevState + 1);
  };

  return (
    <Flex
      border="1px solid lightGray"
      boxShadow="md"
      flexDir="column"
      p="6"
      w="100%"
    >
      <Flex align="center" flexWrap="wrap" gap="2">
        {headline.headline.map((part) => {
          if (!part) {
            return (
              <Flex flexDir="column" key={`${headline.id}-blank`}>
                <Box
                  bg={isOver ? "gray.100" : undefined}
                  borderBottom={!currentGuess ? "1px solid black" : undefined}
                  h={currentGuess ? "fit-content" : "40px"}
                  w={currentGuess ? "fit-content" : "150px"}
                  opacity={isOver ? "0.5" : undefined}
                  ref={setNodeRef}
                >
                  <Heading
                    as="h2"
                    border={currentGuess ? "1px solid lightGray" : undefined}
                    boxShadow={currentGuess ? "md" : undefined}
                    p="2"
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
      <Heading as="h2" fontSize="md" mt="2">
        Published {headline.date}
      </Heading>
      {isCorrect === null ? (
        <Flex gap="2" mt="6">
          <Button isDisabled={!currentGuess} onClick={clearGuess}>
            Clear
          </Button>
          <Button isDisabled={!currentGuess} onClick={handleSubmit}>
            Submit
          </Button>
        </Flex>
      ) : (
        <Flex mt="6" alignItems="end" justifyContent="space-between">
          {currentHeadlineIdx < 9 ? (
            <Flex alignItems="center" gap="4">
              <Button onClick={nextHeadlineOrFinish}>Next Headline</Button>
            </Flex>
          ) : (
            <Button onClick={nextHeadlineOrFinish}>Finish</Button>
          )}
          <Link
            href={headline.links.article}
            isExternal
            fontSize={["sm", "md"]}
          >
            Read the full article here →
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default HeadlineCard;
