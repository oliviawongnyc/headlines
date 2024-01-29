import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDroppable } from "@dnd-kit/core";

const Headline = ({
  correctAnswer,
  currentGuess,
  clearGuess,
  date,
  headline,
  setCurrentHeadline,
}) => {
  const [isCorrect, setIsCorrect] = useState(null);
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const underlineColor = isOver ? "green" : "black";

  const handleSubmit = () => {
    if (!currentGuess) return;
    if (currentGuess === correctAnswer) {
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
        <Flex align={currentGuess ? "center" : "baseline"}>
          {headline.map((part, idx) => {
            if (!part) {
              return (
                <Flex flexDir="column" key={`${part}-${idx}`} mx="3">
                  <Box
                    borderBottom={`1px solid ${underlineColor}`}
                    w={currentGuess ? "fit-content" : "300px"}
                    m="1"
                    p="1"
                    ref={setNodeRef}
                  >
                    <Text
                      color={
                        isCorrect === true
                          ? "green"
                          : isCorrect === false
                          ? "red"
                          : "black"
                      }
                    >
                      {currentGuess}
                    </Text>
                  </Box>
                </Flex>
              );
            }
            return (
              <Heading as="h1" key={`${part}-${idx}`}>
                {part}
              </Heading>
            );
          })}
        </Flex>
        <Heading as="h2" fontSize="15">
          {date}
        </Heading>
        {isCorrect === null ? (
          <>
            <Button isDisabled={!currentGuess} onClick={handleSubmit}>
              Submit
            </Button>
            <Button onClick={clearGuess}>Clear</Button>
          </>
        ) : (
          <>
            <Button onClick={goToNextHeadline}>Next Headline</Button>
            <Text color={isCorrect ? "green" : "red"}>
              {isCorrect
                ? "Well done!"
                : `Nice try. The correct answer is ${correctAnswer}.`}{" "}
            </Text>
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Headline;
