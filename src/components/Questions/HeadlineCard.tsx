import { Flex } from "@chakra-ui/react";
import GameButtons from "./GameButtons";
import HeadlineAndDate from "./HeadlineAndDate";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  return (
    <Flex flexDir="column" layerStyle="gameBox" mb={["5", "7"]}>
      <HeadlineAndDate headline={headline} />
      <GameButtons headline={headline} />
    </Flex>
  );
};

export default HeadlineCard;
