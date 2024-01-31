import { Button, Flex, Heading } from "@chakra-ui/react";
import { useHeadline } from "../hooks/useHeadline";

const GameOver = () => {
  const { setCurrentHeadlineIdx, score, setScore } = useHeadline();

  const resetGame = () => {
    setCurrentHeadlineIdx(0);
    setScore(0);
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
        You answered {score} out of 10 correctly! 🎉
      </Heading>
      <Button onClick={resetGame}>Play again</Button>
    </Flex>
  );
};

export default GameOver;
