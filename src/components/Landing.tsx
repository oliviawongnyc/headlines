import { Button, Flex, Image, Text } from "@chakra-ui/react";
import GameTitle from "./GameTitle";

const Landing = ({ startGame }: { startGame: () => void }) => {
  return (
    <Flex bgColor="landing" h="100vh" layerStyle="centeredFlexbox">
      <Image
        alt="Headlines logo"
        src="headlinesLogoCompressed.png"
        mb="4"
        w="50px"
      />
      <GameTitle isLandingPage />
      <Text
        color="black"
        fontFamily="subtitle"
        fontSize="large"
        mb="4"
        mx="8"
        textAlign="center"
      >
        Complete noteworthy headlines in history.
      </Text>
      <Button
        bgColor="black"
        color="white"
        mb="6"
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
      <Text color="black" fontSize="sm" fontWeight="bold">
        {returnFormattedDate()}
      </Text>
      <Text color="black" fontSize="xs" fontWeight="light">
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
