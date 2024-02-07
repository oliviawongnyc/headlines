import { useState } from "react";
import { Button, Flex, Heading } from "@chakra-ui/react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { useScore } from "../hooks/useScore";
import { QUESTION_COUNT } from "../data/constants";

const GameOver = () => {
  const [conductor, setConductor] = useState<TConductorInstance>();

  const { score } = useScore();

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };

  const resetGame = () => {
    window.location.reload();
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
      borderRadius="md"
      boxShadow="md"
      flexDir="column"
      gap="7"
      justifyContent="center"
      px="10"
      py="20"
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
