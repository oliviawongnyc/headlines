import { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { isBrowser, isMobile } from "react-device-detect";
import { useAnswerBank } from "../../hooks/useAnswerBank";
import { useScore } from "../../hooks/useScore";
import { useHeadline } from "../../hooks/useHeadline";

const PossibleAnswer = ({ children }: { children: string }) => {
  const { dragFinishing, playersGuess } = useHeadline();
  const { setIsDragging } = useAnswerBank();
  const { submitAGuess } = useScore();
  const playerGuessed = !!playersGuess;

  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef: setDraggableGuessRef,
    transform,
  } = useDraggable({
    id: children,
    data: { title: children },
    disabled: playerGuessed,
  });

  // We add isDragging to context so other
  // components know
  useEffect(() => {
    setIsDragging(isDragging);
  }, [isDragging, setIsDragging]);

  const onTouchOrClick = () => {
    if (!dragFinishing && !playerGuessed) {
      submitAGuess(children);
    }
  };

  return (
    <Box
      as="button"
      aria-label={`Select ${children}`}
      border="1px solid lightGray"
      boxShadow="md"
      disabled={playerGuessed ? true : undefined}
      fontSize="md"
      opacity={playerGuessed ? "0.4" : ""}
      w="fit-content"
      p="2"
      {...(isMobile && {
        onTouchEnd: onTouchOrClick,
      })}
      {...(isBrowser && {
        onMouseUp: onTouchOrClick,
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
