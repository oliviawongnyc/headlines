import {
  Button,
  Flex,
  Heading,
  Text,
  Tooltip,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Headline } from "../data/headlines";

const Header = ({ headline }: { headline?: Headline }) => {
  const newspaperEmoji = useBreakpointValue({ base: null, sm: "🗞️" });
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <MoonIcon boxSize="4" />,
    <SunIcon boxSize="4" />
  );
  const colorModeString = useColorModeValue("dark mode", "light mode");
  return (
    <Flex flexDir="column" my="10" mx={["4", "6"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h1" fontSize="4xl">
          NYT Headlines {newspaperEmoji}
        </Heading>
        <Tooltip
          hasArrow
          label={`Switch to ${colorModeString}`}
          placement="auto"
        >
          <Button onClick={toggleColorMode}>{colorModeIcon}</Button>
        </Tooltip>
      </Flex>
      {headline && (
        <Text>
          Drag the answer into the blank to complete the famous New York Times
          headline.
        </Text>
      )}
    </Flex>
  );
};

export default Header;
