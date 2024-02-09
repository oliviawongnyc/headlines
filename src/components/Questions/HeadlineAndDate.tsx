import {
  Box,
  Flex,
  Heading,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { isMobile } from "react-device-detect";
import { useDroppable } from "@dnd-kit/core";
import { useAnswerBank } from "../../hooks/useAnswerBank";
import { useScore } from "../../hooks/useScore";
import { useHeadline } from "../../hooks/useHeadline";

const HeadlineAndDate = ({ headline }: { headline: Headline }) => {
  const { isOver, setNodeRef: setBlankRef } = useDroppable({
    id: "droppable-headline-card",
  });
  const { isOpen, onOpen, onToggle, onClose } = useDisclosure();
  const { isDragging } = useAnswerBank();
  const { playersGuess } = useHeadline();
  const { isCorrect } = useScore();

  const playerGuessed = !!playersGuess;

  // Light and dark mode colors
  const answerBorder = useColorModeValue("gray.200", "whiteAlpha.300");
  const blankBorder = useColorModeValue("1px solid black", "1px solid white");
  const borderReverse = useColorModeValue(
    "1px solid white",
    "1px solid gray.800"
  );
  const boxBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const textColor = useColorModeValue("black", "white");
  const tooltipBg = useColorModeValue("gray.100", "gray.700");

  return (
    <>
      <Heading
        as="h2"
        fontFamily={isMobile ? "headline" : "headlineBold"}
        fontSize="3xl"
      >
        <Flex
          alignItems={playerGuessed ? "baseline" : ""}
          flexWrap="wrap"
          gap="2"
        >
          {headline.headlineWithBlank.split(" ").map((part) => {
            if (part !== "_") {
              return (
                <Box
                  borderBottom={borderReverse}
                  h="40px"
                  key={`${headline.id}-${part}`}
                >
                  {part}
                </Box>
              );
            } else {
              return (
                <Flex flexDir="column" key={`${headline.id}-blank`}>
                  <Tooltip
                    bg={tooltipBg}
                    color={textColor}
                    closeOnClick={false}
                    hasArrow
                    label={
                      !isDragging && !playerGuessed
                        ? "Click or drag an answer from below"
                        : ""
                    }
                    isOpen={isOpen}
                    placement="top"
                  >
                    <Box
                      aria-label={playerGuessed ? playersGuess : "Blank"}
                      bg={isOver ? boxBg : undefined}
                      borderBottom={playerGuessed ? undefined : blankBorder}
                      h={playerGuessed ? "fit-content" : "40px"}
                      w={playerGuessed ? "fit-content" : "150px"}
                      opacity={isOver ? "0.5" : undefined}
                      onMouseEnter={onOpen}
                      onMouseLeave={onClose}
                      onClick={onToggle}
                      ref={setBlankRef}
                    >
                      <Text
                        border={playerGuessed ? "1px solid" : undefined}
                        borderColor={answerBorder}
                        boxShadow={playerGuessed ? "md" : undefined}
                        pt="2"
                        px="2"
                        color={
                          isCorrect === true
                            ? "correct"
                            : isCorrect === false
                            ? "incorrect"
                            : textColor
                        }
                        fontSize="3xl"
                      >
                        {playersGuess}
                      </Text>
                    </Box>
                  </Tooltip>
                </Flex>
              );
            }
          })}
        </Flex>
      </Heading>
      {headline && (
        <Text fontSize="sm" mt="4">
          Published {headline.publishDate}
        </Text>
      )}
    </>
  );
};

export default HeadlineAndDate;
