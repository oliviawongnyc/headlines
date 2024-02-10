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
  const { isOpen, onClose, onOpen } = useDisclosure();

  // Light and dark mode colors
  const colorModeIcon = useColorModeValue(
    <MoonIcon boxSize="4" />,
    <SunIcon boxSize="4" />
  );
  const colorModeString = useColorModeValue("dark mode", "light mode");
  const textColor = useColorModeValue("black", "white");
  const tooltipBg = useColorModeValue("gray.100", "gray.700");

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
            <Button
              aria-label="Game instructions"
              onClick={onOpen}
              px={0}
              size="sm"
              variant="outline"
            >
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
            >
              {colorModeIcon}
            </Button>
          </Tooltip>
        </Flex>
      </Flex>
      {headline && (
        <Text fontFamily="subtitle" fontSize={["sm", "md"]}>
          Click or drag the answer to complete the noteworthy New York Times
          headline.
        </Text>
      )}
    </Flex>
  );
};

export default Header;
