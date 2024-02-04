import {
  Box,
  Flex,
  Heading,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import { Headline } from "../../data/headlines";
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
  const tooltipBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");
  const blankBorder = useColorModeValue("1px solid black", "1px solid white");
  const borderReverse = useColorModeValue(
    "1px solid white",
    "1px solid gray.800"
  );
  const boxBg = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <>
      <Flex align="baseline" flexWrap="wrap" gap="2">
        {headline.headline.map((part) => {
          if (!part) {
            return (
              <Flex flexDir="column" key={`${headline.id}-blank`}>
                <Tooltip
                  bg={tooltipBg}
                  color={textColor}
                  closeOnClick={false}
                  hasArrow
                  label={
                    !isDragging && !playerGuessed
                      ? "Drag and drop an answer from below"
                      : ""
                  }
                  isOpen={isOpen}
                  placement="top"
                >
                  <Box
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
                    <Heading
                      as="h2"
                      border={playerGuessed ? "1px solid lightGray" : undefined}
                      boxShadow={playerGuessed ? "md" : undefined}
                      p="2"
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
                    </Heading>
                  </Box>
                </Tooltip>
              </Flex>
            );
          }
          return (
            <Box
              borderBottom={borderReverse}
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
      {headline && <Text mt="2">Published {headline.date}</Text>}
    </>
  );
};

export default HeadlineAndDate;
