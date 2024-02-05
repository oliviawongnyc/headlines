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

  useEffect(() => {
    setIsDragging(isDragging);
  }, [isDragging, setIsDragging]);

  return (
    <Box
      as="button"
      border="1px solid lightGray"
      boxShadow="md"
      disabled={playerGuessed ? true : undefined}
      fontFamily="heading"
      fontSize="md"
      opacity={playerGuessed ? "0.4" : ""}
      w="fit-content"
      p="2"
      {...(isMobile && {
        onTouchEnd: () => {
          if (!dragFinishing && !playerGuessed) {
            submitAGuess(children);
          }
        },
      })}
      {...(isBrowser && {
        onMouseUp: () => {
          if (!dragFinishing && !playerGuessed) {
            submitAGuess(children);
          }
        },
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
