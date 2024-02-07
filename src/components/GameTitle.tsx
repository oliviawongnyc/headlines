import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const GameTitle = ({ isLandingPage }: { isLandingPage?: boolean }) => {
  const dividerColor = useColorModeValue("black", "white");

  return (
    <Heading
      as="h1"
      color={isLandingPage ? "black" : undefined}
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
        <Box
          w="1px"
          h="25px"
          bgColor={isLandingPage ? "black" : dividerColor}
        />
        Headlines
      </Flex>
    </Heading>
  );
};

export default GameTitle;
