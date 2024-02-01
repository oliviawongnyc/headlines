import {
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
    <MoonIcon as="button" boxSize="4" onClick={toggleColorMode} />,
    <SunIcon as="button" boxSize="4" onClick={toggleColorMode} />
  );
  const colorModeString = useColorModeValue("dark mode", "light mode");
  return (
    <Flex flexDir="column" my="10" mx={["4", "6"]}>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h1" fontSize="4xl">
          NYT Headlines 🗞️
        </Heading>
        <Tooltip
          hasArrow
          label={`Switch to ${colorModeString}`}
          placement="auto"
        >
          {colorModeIcon}
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
