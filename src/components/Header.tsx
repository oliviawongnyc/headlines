import {
  Button,
  Flex,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, QuestionOutlineIcon, SunIcon } from "@chakra-ui/icons";
import GameTitle from "./GameTitle";
import InstructionsModal from "./InstructionsModal";

const Header = ({ headline }: { headline?: Headline }) => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <MoonIcon boxSize="4" />,
    <SunIcon boxSize="4" />
  );
  const { isOpen, onClose, onOpen } = useDisclosure();

  // Light and dark mode colors
  const tooltipBg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("black", "white");
  const colorModeString = useColorModeValue("dark mode", "light mode");

  return (
    <Flex flexDir="column" my="10" mx={["4", "6"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <GameTitle />
        <Flex alignItems="center" gap="2">
          <Tooltip
            bg={tooltipBg}
            color={textColor}
            hasArrow
            label="Instructions"
            placement="top"
          >
            <Button onClick={onOpen} variant="outline" px={0} size="sm">
              <QuestionOutlineIcon boxSize="4" />
            </Button>
          </Tooltip>
          <InstructionsModal isOpen={isOpen} onClose={onClose} />
          <Tooltip
            bg={tooltipBg}
            color={textColor}
            hasArrow
            label={`Switch to ${colorModeString}`}
            placement="top"
          >
            <Button
              aria-label={`Switch to ${colorModeString}`}
              onClick={toggleColorMode}
              px={0}
              size="sm"
              variant="outline"
              _focus={{
                outline: "none",
                ring: "2px",
                ringColor: "focusRingColor",
              }}
            >
              {colorModeIcon}
            </Button>
          </Tooltip>
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
