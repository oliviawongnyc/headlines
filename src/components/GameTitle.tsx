import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const GameTitle = () => {
  const dividerColor = useColorModeValue("black", "white");

  return (
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
  );
};

export default GameTitle;
