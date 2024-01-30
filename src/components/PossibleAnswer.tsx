import { Box } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";
import { useHeadline } from "../hooks/useHeadline";

const PossibleAnswer = ({ children }: { children: string }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: children,
    data: { title: children },
  });

  const { setCurrentGuess } = useHeadline();

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Box
      as="button"
      border="1px solid gray"
      w="fit-content"
      m="1"
      p="1"
      onClick={() => setCurrentGuess(children)}
      ref={setNodeRef}
      sx={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </Box>
  );
};

export default PossibleAnswer;
