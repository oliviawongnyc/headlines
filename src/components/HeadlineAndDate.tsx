import { Box, Flex, Heading, Tooltip } from "@chakra-ui/react";
import { useHeadline } from "../hooks/useHeadline";
import { useDroppable } from "@dnd-kit/core";
import { Headline } from "../data/headlines";
import { useAnswerBank } from "../hooks/useAnswerBank";

const HeadlineAndDate = ({ headline }: { headline: Headline }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });
  const { currentGuess, isCorrect } = useHeadline();
  const { isDragging } = useAnswerBank();

  return (
    <>
      <Flex align="center" flexWrap="wrap" gap="2">
        {headline.headline.map((part) => {
          if (!part) {
            return (
              <Flex flexDir="column" key={`${headline.id}-blank`}>
                <Tooltip
                  bg="white"
                  color="black"
                  closeOnClick={false}
                  hasArrow
                  label={
                    !isDragging ? "Drag and drop an answer from below" : ""
                  }
                  placement="top"
                >
                  <Box
                    bg={isOver ? "gray.100" : undefined}
                    borderBottom={!currentGuess ? "1px solid black" : undefined}
                    h={currentGuess ? "fit-content" : "35px"}
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
                </Tooltip>
              </Flex>
            );
          }
          return (
            <Box
              borderBottom="1px solid white"
              h="40px"
              key={`${headline.id}-${part}`}
            >
              <Heading as="h2" fontSize="3xl">
                {part}
              </Heading>
            </Box>
          );
        })}
      </Flex>
      {headline && (
        <Heading as="h2" fontSize="md" mt="2">
          Published {headline.date}
        </Heading>
      )}
    </>
  );
};

export default HeadlineAndDate;
