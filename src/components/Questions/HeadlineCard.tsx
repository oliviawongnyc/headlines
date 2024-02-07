import { Flex } from "@chakra-ui/react";
import GameButtons from "./GameButtons";
import HeadlineAndDate from "./HeadlineAndDate";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  return (
    <Flex
      border="1px solid lightGray"
      borderRadius="md"
      boxShadow="md"
      flexDir="column"
      mb={["5", "7"]}
      p={["4", "6"]}
    >
      <HeadlineAndDate headline={headline} />
      <GameButtons headline={headline} />
    </Flex>
  );
};

export default HeadlineCard;
