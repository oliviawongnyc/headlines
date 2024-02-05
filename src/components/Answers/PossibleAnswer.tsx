import { useEffect } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
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
  const answerBorder = useColorModeValue("gray.200", "whiteAlpha.300");

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

  const handleKeyPressed = (e: any) => {
    // Check if the pressed key is Enter (key code 13)
    if (e.key === "Enter") {
      // Perform the action you want on Enter key press
      onTouchOrClick();
    }
  };

  const answerStyles = {
    border: "1px solid",
    borderColor: answerBorder,
    bgColor: activeBackground,
    boxShadow: "md",
    p: "2",
    w: "fit-content",
    _disabled: {
      opacity: 0.4,
    },
    _focus: {
      outline: "none",
      ring: "2px",
      ringColor: "focusRingColor",
    },
  };

  return (
    <Box
      as="button"
      disabled={playerGuessed ? true : undefined}
      aria-label={`Select ${children}`}
      {...(isMobile && {
        onTouchEnd: onTouchOrClick,
      })}
      {...(isBrowser && {
        onKeyPress: handleKeyPressed,
        onMouseUp: onTouchOrClick,
      })}
      ref={setDraggableGuessRef}
      sx={{
        touchAction: "none",
        transform: transform
          ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
          : undefined,
      }}
      {...answerStyles}
      {...listeners}
      {...attributes}
    >
      {children}
    </Box>
  );
};

export default PossibleAnswer;
