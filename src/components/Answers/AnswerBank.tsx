import { Box, Flex } from "@chakra-ui/react";
import PossibleAnswer from "./PossibleAnswer";
import { useAnswerBank } from "../../hooks/useAnswerBank";

const AnswerBank = () => {
  const { currentAnswerBank } = useAnswerBank();
  return (
    <Box border="1px solid lightGray" boxShadow="md" p={["4", "6"]} w="100%">
      <Flex flexWrap="wrap" gap="2">
        {currentAnswerBank.map((answer) => {
          return <PossibleAnswer key={answer}>{answer}</PossibleAnswer>;
        })}
      </Flex>
    </Box>
  );
};

export default AnswerBank;
