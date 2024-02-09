import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";

const GameTitle = ({ isLandingPage }: { isLandingPage?: boolean }) => {
  const dividerColor = useColorModeValue("black", "white");

  return (
    <Heading
      as="h1"
      color={isLandingPage ? "black" : undefined}
      fontFamily="title"
      fontSize="3xl"
      fontWeight="normal"
      letterSpacing={-1}
    >
      <Flex alignItems="baseline" gap="2">
        {!isLandingPage && (
          <>
            <span
              style={{
                fontFamily: "Chomsky",
                fontSize: "40px",
              }}
            >
              T
            </span>
            <Box
              w="px"
              h="6"
              bgColor={isLandingPage ? "black" : dividerColor}
            />
          </>
        )}
        Headlines
      </Flex>
    </Heading>
  );
};

export default GameTitle;
