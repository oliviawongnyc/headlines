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
          fontFamily="header"
          fontSize="x-large"
          fontWeight="normal"
          letterSpacing={-1}
        >
          Headlines
          <Text fontFamily="body" fontSize="medium" letterSpacing={0}>
            Complete the famous New York Times headline.
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UnorderedList>
            <ListItem fontSize="small">
              Each game consists of 10 headlines.
            </ListItem>
            <ListItem fontSize="small">
              Clicking an answer submits it immediately.
            </ListItem>
            <ListItem fontSize="small">
              Dragging an answer only submits it if it is released on top of the
              headline "blank."
            </ListItem>
          </UnorderedList>
          <Text fontSize="small" mt="5" mb="3" textAlign="center">
            This game is a personal, hobby project and not affiliated with the
            New York Times.
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default InstructionsModal;
