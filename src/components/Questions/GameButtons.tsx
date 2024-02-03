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

  useEffect(() => {
    if (playersGuess && nextRef.current) nextRef.current.focus();
  }, [playersGuess]);

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
        onClick={nextHeadlineOrFinish}
        ref={nextRef}
        variant="outline"
        size={["sm", "md"]}
      >
        {currentHeadlineIdx < 9 ? "Next Headline" : "Finish"}
      </Button>
      <Link
        borderRadius="var(--chakra-radii-md)"
        fontSize={["sm", "md"]}
        p="0.5"
        href={headline.links.article}
        isExternal
      >
        {linkText}
      </Link>
    </Flex>
  );
};

export default GameButtons;
