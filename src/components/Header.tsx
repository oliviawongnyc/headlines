import {
  Button,
  Flex,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  UnorderedList,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, QuestionOutlineIcon, SunIcon } from "@chakra-ui/icons";
import GameTitle from "./GameTitle";

const Header = ({ headline }: { headline?: Headline }) => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <MoonIcon boxSize="4" />,
    <SunIcon boxSize="4" />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const colorModeString = useColorModeValue("dark mode", "light mode");
  return (
    <Flex flexDir="column" my="10" mx={["4", "6"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <GameTitle />
        <Flex>
          <Button onClick={onOpen} variant="ghost">
            <QuestionOutlineIcon boxSize="4" />
          </Button>
          <Tooltip
            hasArrow
            label={`Switch to ${colorModeString}`}
            placement="auto"
          >
            <Button
              aria-label={`Switch to ${colorModeString}`}
              onClick={toggleColorMode}
              variant="ghost"
              _focus={{
                outline: "none",
                ring: "2px",
                ringColor: "focusRingColor",
              }}
            >
              {colorModeIcon}
            </Button>
          </Tooltip>
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
                    Dragging an answer only submits it if it is released on top
                    of the headline "blank."
                  </ListItem>
                </UnorderedList>
                <Text fontSize="small" fontWeight="bold" mt="5" mb="3">
                  This game is a personal project and not affiliated with the
                  New York Times.
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
      {headline && (
        <Text mt="2">
          Click or drag the answer to complete the famous New York Times
          headline.
        </Text>
      )}
    </Flex>
  );
};

export default Header;
