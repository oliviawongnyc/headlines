import { Box, Flex } from "@chakra-ui/react";
import { useDroppable } from "@dnd-kit/core";
import PossibleAnswer from "./PossibleAnswer";
import { useAnswerBank } from "../../hooks/useAnswerBank";

const AnswerBank = () => {
  const { setNodeRef: setAnswerBankRef } = useDroppable({
    id: "droppable-answer-bank",
  });
  const { currentAnswerBank } = useAnswerBank();

  return (
    <Box layerStyle="gameBox" mb="5" w="100%" ref={setAnswerBankRef}>
      <Flex flexWrap="wrap" gap="2">
        {currentAnswerBank?.map((answer) => {
          return <PossibleAnswer key={answer}>{answer}</PossibleAnswer>;
        })}
      </Flex>
    </Box>
  );
};

export default AnswerBank;
