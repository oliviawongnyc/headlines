import { Flex, Heading, Text } from "@chakra-ui/react";
import { Headline } from "../data/headlines";

const Header = ({ headline }: { headline?: Headline }) => {
  return (
    <Flex alignItems="flex-start" flexDir="column" my="10" mx="6">
      <Heading as="h1" fontSize="4xl">
        Headlines 🗞️
      </Heading>
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
