import { Box } from "@chakra-ui/react";
import { useDraggable } from "@dnd-kit/core";

const PossibleAnswer = ({ children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: children,
    data: { title: children },
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <Box
      border="1px solid gray"
      w="fit-content"
      m="1"
      p="1"
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
