import { Box } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { useHeadline } from "../hooks/useHeadline";
import { useAnswerBank } from "../hooks/useAnswerBank";

const PossibleAnswer = ({ children }: { children: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: children,
    data: { title: children },
  });

  const { setCurrentAnswerBank } = useAnswerBank();
  const { currentHeadlineIdx, gameHeadlines, setCurrentGuess } = useHeadline();

  const guess = () => {
    const originalAnswerBank = [
      ...gameHeadlines[currentHeadlineIdx].answerBank,
    ];
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
      w="fit-content"
      p="2"
      onClick={guess}
      ref={setNodeRef}
      sx={
        transform
          ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
            }
          : undefined
      }
      {...listeners}
      {...attributes}
    >
      {children}
    </Box>
  );
};

export default PossibleAnswer;
