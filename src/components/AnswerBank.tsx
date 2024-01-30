import { Box } from "@chakra-ui/react";
import PossibleAnswer from "./PossibleAnswer";
import { useHeadline } from "../hooks/useHeadline";

const AnswerBank = () => {
  const { currentAnswerBank } = useHeadline();
  return (
    <Box border="1px solid lightGray" boxShadow="md" p="6" w="100%">
      {currentAnswerBank.map((answer) => {
        return <PossibleAnswer key={answer}>{answer}</PossibleAnswer>;
      })}
    </Box>
  );
};

export default AnswerBank;
