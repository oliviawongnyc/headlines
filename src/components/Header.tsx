import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Headline } from "../data/headlines";

const Header = ({ headline }: { headline?: Headline }) => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <MoonIcon boxSize="4" />,
    <SunIcon boxSize="4" />
  );
  const colorModeString = useColorModeValue("dark mode", "light mode");
  const dividerColor = useColorModeValue("black", "white");
  return (
    <Flex flexDir="column" my="10" mx={["4", "6"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading
          as="h1"
          fontFamily="header"
          fontSize="3xl"
          fontWeight="normal"
          letterSpacing={-1}
        >
          <Flex alignItems="center" gap="2">
            <span
              style={{
                fontFamily: "Chomsky",
                fontSize: "40px",
                fontWeight: 400,
              }}
            >
              T
            </span>
            <Box w="1px" h="25px" bgColor={dividerColor} />
            Headlines
          </Flex>
        </Heading>
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
