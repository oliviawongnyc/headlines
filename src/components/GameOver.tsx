import { useState } from "react";
import { Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
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
          fontFamily="subtitleBold"
          fontSize="2xl"
          letterSpacing={-1}
        >
          {exclamation}
        </Heading>
        <Text fontFamily="subtitle" mb="8" mx="8">
          {feedbackDetail}
        </Text>
      </>
    );
  };

  return (
    <Flex
      border="1px solid lightGray"
      borderRadius="md"
      boxShadow="md"
      layerStyle="centeredFlexbox"
      py="16"
      textAlign="center"
    >
      <Image
        alt="Headlines logo"
        src="headlinesLogoCompressed.png"
        mb="2"
        w="50px"
      />
      {finalFeedback()}
      <Button
        borderRadius="3xl"
        letterSpacing={-1}
        onClick={resetGame}
        size="sm"
        variant="outline"
        _focus={{
          outline: "none",
          ring: "2px",
          ringColor: "focusRingColor",
        }}
      >
        Play again
      </Button>
      <Realistic
        onInit={onInit}
        decorateOptions={(options) => ({
          ...options,
          colors: ["#ffc600"],
          gravity: 0.5,
          scalar: 0.75,
          shapes: ["star"],
        })}
      />
    </Flex>
  );
};

export default GameOver;
