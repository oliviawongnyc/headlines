import { Flex } from "@chakra-ui/react";
import GameButtons from "./GameButtons";
import { Headline } from "../data/headlines";
import HeadlineAndDate from "./HeadlineAndDate";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  return (
    <Flex
      border="1px solid lightGray"
      boxShadow="md"
      flexDir="column"
      p="6"
      w="100%"
    >
      <HeadlineAndDate headline={headline} />
      <GameButtons headline={headline} />
    </Flex>
  );
};

export default HeadlineCard;
