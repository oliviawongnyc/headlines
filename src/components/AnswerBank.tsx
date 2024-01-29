import { Box } from "@chakra-ui/react";
import PossibleAnswer from "./PossibleAnswer";
import { useHeadline } from "../hooks/useHeadline";

const AnswerBank = () => {
  const { currentAnswerBank } = useHeadline();
  return (
    <Box border="1px solid gray" m="auto" p="10" w="80vw">
      {currentAnswerBank.map((answer) => {
        return <PossibleAnswer key={answer}>{answer}</PossibleAnswer>;
      })}
    </Box>
  );
};

export default AnswerBank;
