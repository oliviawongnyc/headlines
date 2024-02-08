import { useState } from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { useHeadline } from "../hooks/useHeadline";
import { useScore } from "../hooks/useScore";
import { QUESTION_COUNT } from "../constants";

const GameOver = ({
  setClickedPlay,
}: {
  setClickedPlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [conductor, setConductor] = useState<TConductorInstance>();

  const { setCurrentHeadlineIdx } = useHeadline();
  const { score, setScore } = useScore();

  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);
  };

  const resetGame = () => {
    setClickedPlay(false);
    setCurrentHeadlineIdx(0);
    setScore(0);
  };

  const finalFeedback = () => {
    const exclamation =
      score === QUESTION_COUNT
        ? "Perfect!"
        : score >= QUESTION_COUNT - 2
        ? "Excellent!"
        : score >= QUESTION_COUNT - 4
        ? "Well done!"
        : score >= QUESTION_COUNT - 6
        ? "Not bad!"
        : "Next time.";
    const feedbackDetail = `You answered ${score} out of ${QUESTION_COUNT} correctly.`;

    if (score === QUESTION_COUNT) conductor?.shoot();

    return (
      <>
        <Heading
          as="h2"
          fontFamily="header"
          fontSize="xl"
          fontWeight="normal"
          letterSpacing={-1}
        >
          {exclamation}
        </Heading>
        <Text fontFamily="body" mb="8">
          {feedbackDetail}
        </Text>
      </>
    );
  };

  return (
    <Flex
      alignItems="center"
      border="1px solid lightGray"
      borderRadius="md"
      boxShadow="md"
      flexDir="column"
      justifyContent="center"
      py="16"
      textAlign="center"
    >
      {finalFeedback()}
      <Button borderRadius="3xl" onClick={resetGame} variant="outline">
        Play again
      </Button>
      <Realistic
        onInit={onInit}
        decorateOptions={(options) => ({
          ...options,
          colors: ["#ffc600"],
          shapes: ["star"],
        })}
      />
    </Flex>
  );
};

export default GameOver;
