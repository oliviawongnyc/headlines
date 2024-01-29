import { Box } from "@chakra-ui/react";
import PossibleAnswer from "./PossibleAnswer";

const AnswerBank = ({ answerBank }) => {
  console.log("answerBank -->", answerBank);
  return (
    <Box border="1px solid gray" m="auto" p="10" w="80vw">
      {answerBank.map((answer) => {
        return <PossibleAnswer key={answer}>{answer}</PossibleAnswer>;
      })}
    </Box>
  );
};

export default AnswerBank;
