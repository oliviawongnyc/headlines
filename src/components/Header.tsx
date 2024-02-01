import {
  Flex,
  Heading,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Headline } from "../data/headlines";

const Header = ({ headline }: { headline?: Headline }) => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(
    <SunIcon as="button" onClick={toggleColorMode} />,
    <MoonIcon as="button" onClick={toggleColorMode} />
  );
  return (
    <Flex flexDir="column" my="10" mx="6">
      <Flex alignItems="center" justifyContent="space-between">
        <Heading as="h1" fontSize="4xl">
          Headlines 🗞️
        </Heading>
        {colorModeIcon}
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
