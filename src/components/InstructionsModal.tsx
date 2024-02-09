import {
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const InstructionsModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["xs", "xs", "sm"]}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontFamily="title"
          fontSize="2xl"
          fontWeight="normal"
          letterSpacing={-1}
          mb="-1"
        >
          Headlines
          <Text fontFamily="subtitle" fontSize="md" letterSpacing={0}>
            Complete the famous New York Times headline.
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UnorderedList>
            <ListItem fontSize="sm">
              Each game consists of 10 headlines.
            </ListItem>
            <ListItem fontSize="sm">
              Clicking an answer submits it immediately.
            </ListItem>
            <ListItem fontSize="sm">
              Dragging an answer only submits it if it is released on top of the
              headline "blank."
            </ListItem>
            <ListItem fontSize="sm">
              Answers turn{" "}
              <Text color="correct" display="inline" fontWeight="bold">
                green
              </Text>{" "}
              when correct and{" "}
              <Text color="incorrect" display="inline" fontWeight="bold">
                red
              </Text>{" "}
              when incorrect.
            </ListItem>
          </UnorderedList>
          <Text fontFamily="subtitle" fontSize="sm" mt="8" mb="3">
            This game is a personal, hobby project by Olivia Wong and not
            affiliated with the New York Times.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InstructionsModal;
