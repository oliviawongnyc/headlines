import { useEffect } from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
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

  const activeBackground = useColorModeValue("white", "gray.800");

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

  const answerStyles = {
    boxShadow: "md",
    borderRadius: "none",
    isDisabled: playerGuessed ? true : undefined,
    w: "fit-content",
    _active: {
      bg: activeBackground,
    },
    _focus: {
      outline: "none",
      ring: "2px",
      ringColor: "focusRingColor",
    },
  };

  return (
    <Button
      aria-label={`Select ${children}`}
      {...(isMobile && {
        onTouchEnd: onTouchOrClick,
      })}
      {...(isBrowser && {
        onClick: onTouchOrClick,
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
      variant="outline"
      {...answerStyles}
      {...listeners}
      {...attributes}
    >
      {children}
    </Button>
  );
};

export default PossibleAnswer;
