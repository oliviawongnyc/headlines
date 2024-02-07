import { Flex, Text } from "@chakra-ui/layout";
import GameTitle from "./GameTitle";
import { Button } from "@chakra-ui/button";

const Landing = ({ startGame }: { startGame: () => void }) => {
  return (
    <Flex
      alignItems="center"
      flexDir="column"
      bgColor="landing"
      justifyContent="center"
      h="100vh"
    >
      <GameTitle />
      <Text mb="5">Complete the famous headline in history.</Text>
      <Button
        borderRadius="3xl"
        bgColor="black"
        color="white"
        mb="8"
        onClick={startGame}
        px="10"
        size="sm"
        _hover={{
          bgColor: "gray.800",
        }}
        _focus={{
          outline: "none",
          ring: "2px",
          ringColor: "white",
        }}
      >
        Play
      </Button>
      <Text fontFamily="landing" fontSize="small" fontWeight="bold">
        {returnFormattedDate()}
      </Text>
      <Text fontFamily="landing" fontSize="x-small">
        Edited by Olivia Wong
      </Text>
    </Flex>
  );
};

const returnFormattedDate = () => {
  const today = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();

  // Construct the formatted date string
  return `${month} ${day}, ${year}`;
};

export default Landing;
