import { Button, Flex, Heading } from "@chakra-ui/react";
import { useHeadline } from "../hooks/useHeadline";
import { useScore } from "../hooks/useScore";
import { QUESTION_COUNT } from "../data/constants";

const GameOver = () => {
  const { setCurrentHeadlineIdx } = useHeadline();
  const { score, setScore } = useScore();

  const resetGame = () => {
    setCurrentHeadlineIdx(0);
    setScore(0);
  };

  const scoreIcon = () => {
    if (score === QUESTION_COUNT) return "🥳";
    else if (score > QUESTION_COUNT - 2) return "🥂";
    else if (score >= QUESTION_COUNT - 5) return "😊";
    else return "🫣";
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
      <Heading as="h2" fontSize="2xl">
        You answered {score} out of {QUESTION_COUNT} correctly! {scoreIcon()}
      </Heading>
      <Button onClick={resetGame}>Play again</Button>
    </Flex>
  );
};

export default GameOver;
