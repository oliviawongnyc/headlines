import { useEffect, useRef } from "react";
import { Button, Flex, Link, useBreakpointValue } from "@chakra-ui/react";
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
        size={["sm", "md"]}
        _focus={{
          outline: "none",
          ring: "2px",
          ringColor: "focusRingColor",
        }}
        variant="outline"
      >
        {currentHeadlineIdx < 9 ? "Next" : "Finish"}
      </Button>
      {playerGuessed && (
        <Link
          borderRadius="md"
          fontSize={["sm", "md"]}
          p="1"
          href={headline.articleLink}
          isExternal
          _focus={{
            outline: "none",
            ring: "2px",
            ringColor: "focusRingColor",
          }}
        >
          {linkText}
        </Link>
      )}
    </Flex>
  );
};

export default GameButtons;
