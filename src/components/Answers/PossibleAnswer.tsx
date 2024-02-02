import { Box } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { useHeadline } from "../../hooks/useHeadline";
import { useAnswerBank } from "../../hooks/useAnswerBank";
import { useEffect } from "react";
import { useScore } from "../../hooks/useScore";

const PossibleAnswer = ({ children }: { children: string }) => {
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useDraggable({
      id: children,
      data: { title: children },
    });

  const { setCurrentAnswerBank, setIsDragging } = useAnswerBank();
  const { currentHeadlineIdx, gameHeadlines, setCurrentGuess } = useHeadline();
  const { isCorrect } = useScore();

  useEffect(() => {
    setIsDragging(isDragging);
  }, [isDragging, setIsDragging]);

  const makeAGuessOnClick = () => {
    const originalAnswerBank = gameHeadlines[currentHeadlineIdx].answerBank;
    setCurrentGuess(children);
    setCurrentAnswerBank(
      originalAnswerBank.filter((possibleAnswer) => possibleAnswer !== children)
    );
  };

  return (
    <Box
      as="button"
      border="1px solid lightGray"
      boxShadow="md"
      // We don't want users to be able to focus/click another guess
      // after the previous guess has been submitted
      disabled={isCorrect !== null ? true : undefined}
      opacity={isCorrect === null ? "" : "0.4"}
      w="fit-content"
      p="2"
      onClick={makeAGuessOnClick}
      ref={setNodeRef}
      sx={{
        // We don't want users to be able to drag another guess
        // after the previous guess has been submitted
        transform:
          transform && isCorrect === null
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
      }}
      {...listeners}
      {...attributes}
    >
      {children}
    </Box>
  );
};

export default PossibleAnswer;
