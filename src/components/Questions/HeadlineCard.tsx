import { Flex } from "@chakra-ui/react";
import { Headline } from "../../data/headlines";
import GameButtons from "./GameButtons";
import HeadlineAndDate from "./HeadlineAndDate";
import { useHeadline } from "../../hooks/useHeadline";
import { useEffect } from "react";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  const { playersGuess, setDragHappened } = useHeadline();
  const playerGuessed = !!playersGuess;

  useEffect(() => {
    setDragHappened(false);
  }, [headline, setDragHappened]);

  return (
    <Flex
      border="1px solid lightGray"
      boxShadow="md"
      flexDir="column"
      p={["4", "6"]}
      w="100%"
    >
      <HeadlineAndDate headline={headline} />
      {playerGuessed && <GameButtons headline={headline} />}
    </Flex>
  );
};

export default HeadlineCard;
