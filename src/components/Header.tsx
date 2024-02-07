import {
  Button,
  Flex,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import GameTitle from "./GameTitle";

const Header = ({ headline }: { headline?: Headline }) => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <MoonIcon boxSize="4" />,
    <SunIcon boxSize="4" />
  );
  const colorModeString = useColorModeValue("dark mode", "light mode");
  return (
    <Flex flexDir="column" my="10" mx={["4", "6"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <GameTitle />
        <Tooltip
          hasArrow
          label={`Switch to ${colorModeString}`}
          placement="auto"
        >
          <Button
            aria-label={`Switch to ${colorModeString}`}
            onClick={toggleColorMode}
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
