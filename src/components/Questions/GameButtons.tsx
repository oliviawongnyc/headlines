import { useEffect, useRef } from "react";
import { Button, Flex, Link, useBreakpointValue } from "@chakra-ui/react";
import { Headline } from "../../data/headlines";
import { useHeadline } from "../../hooks/useHeadline";
import { useScore } from "../../hooks/useScore";

const GameButtons = ({ headline }: { headline: Headline }) => {
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const {
    currentHeadlineIdx,
    setCurrentHeadlineIdx,
    playersGuess,
    setPlayersGuess,
  } = useHeadline();
  const { setIsCorrect } = useScore();

  const playerGuessed = !!playersGuess;

  useEffect(() => {
    if (playerGuessed && nextRef.current) nextRef.current.focus();
  }, [playerGuessed]);

  const nextHeadlineOrFinish = () => {
    setPlayersGuess("");
    setIsCorrect(false);
    setCurrentHeadlineIdx((prevState) => prevState + 1);
  };

  const linkText = useBreakpointValue({
    base: "Full article here →",
    sm: "Read the full article here →",
  });

  return (
    <Flex mt="6" alignItems="end" justifyContent="space-between">
      <Button
        isDisabled={!playerGuessed}
        onClick={nextHeadlineOrFinish}
        ref={nextRef}
        variant="outline"
        size={["sm", "md"]}
      >
        {currentHeadlineIdx < 9 ? "Next" : "Finish"}
      </Button>
      {playerGuessed && (
        <Link
          borderRadius="var(--chakra-radii-md)"
          fontSize={["sm", "md"]}
          p="0.5"
          href={headline.links.article}
          isExternal
        >
          {linkText}
        </Link>
      )}
    </Flex>
  );
};

export default GameButtons;
