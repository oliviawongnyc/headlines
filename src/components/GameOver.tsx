import { useState } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { useHeadline } from "../hooks/useHeadline";
import { useScore } from "../hooks/useScore";
import { QUESTION_COUNT } from "../data/constants";

const GameOver = () => {
  const [conductor, setConductor] = useState<TConductorInstance>();

  const { setCurrentHeadlineIdx } = useHeadline();
  const { score, setScore } = useScore();

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };

  const resetGame = () => {
    setCurrentHeadlineIdx(0);
    setScore(0);
  };

  const scorePunctuation = () => {
    if (score === QUESTION_COUNT) {
      conductor?.shoot();
    }
    if (score > QUESTION_COUNT - 3) return "!";
    else return ".";
  };

  return (
    <Flex
      border="1px solid lightGray"
      boxShadow="md"
      flexDir="column"
      gap="7"
      p="6"
      textAlign="center"
    >
      <Heading as="h2" fontFamily="News Cycle" fontSize="2xl">
        You answered {score} out of {QUESTION_COUNT} correctly
        {scorePunctuation()}
      </Heading>
      <Button onClick={resetGame}>Play again</Button>
      <Realistic onInit={onInit} />
    </Flex>
  );
};

export default GameOver;
