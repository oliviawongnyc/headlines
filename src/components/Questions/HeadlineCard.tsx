import { Flex } from "@chakra-ui/react";
import { Headline } from "../../data/headlines";
import GameButtons from "./GameButtons";
import HeadlineAndDate from "./HeadlineAndDate";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  return (
    <Flex
      border="1px solid lightGray"
      borderRadius="md"
      boxShadow="md"
      flexDir="column"
      p={["4", "6"]}
      w="100%"
    >
      <HeadlineAndDate headline={headline} />
      <GameButtons headline={headline} />
    </Flex>
  );
};

export default HeadlineCard;
