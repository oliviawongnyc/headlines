import { Box } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { useAnswerBank } from "../../hooks/useAnswerBank";
import { useEffect } from "react";
import { isMobile } from "../../data/helpers";
import { useScore } from "../../hooks/useScore";
import { useHeadline } from "../../hooks/useHeadline";

const PossibleAnswer = ({ children }: { children: string }) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef: setDraggableGuessRef,
    transform,
  } = useDraggable({
    id: children,
    data: { title: children },
  });

  const { setIsDragging } = useAnswerBank();
  const { dragHappened, setDragHappened, playersGuess } = useHeadline();
  const { submitAGuess } = useScore();

  const playerGuessed = !!playersGuess;

  useEffect(() => {
    setIsDragging(isDragging);
  }, [isDragging, setIsDragging]);

  return (
    <Box
      as="button"
      border="1px solid lightGray"
      boxShadow="md"
      disabled={playerGuessed ? true : undefined}
      opacity={playerGuessed ? "0.4" : ""}
      w="fit-content"
      p="2"
      {...(isMobile() && {
        onTouchEnd: () => {
          if (!dragHappened) {
            submitAGuess(children);
          }
          setDragHappened(false);
        },
      })}
      {...(!isMobile() && {
        onClick: () => submitAGuess(children),
      })}
      ref={setDraggableGuessRef}
      sx={{
        touchAction: "none",
        transform:
          transform && !playerGuessed
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
