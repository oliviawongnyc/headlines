import { useEffect, useRef } from "react";
import { Button, Flex, Link } from "@chakra-ui/react";
import { useScore } from "../hooks/useScore";
import { Headline } from "../data/headlines";
import { useAnswerBank } from "../hooks/useAnswerBank";
import { useHeadline } from "../hooks/useHeadline";

const GameButtons = ({ headline }: { headline: Headline }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const { setCurrentAnswerBank } = useAnswerBank();
  const {
    currentGuess,
    setCurrentGuess,
    currentHeadlineIdx,
    setCurrentHeadlineIdx,
  } = useHeadline();
  const { isCorrect, setIsCorrect, setScore } = useScore();

  useEffect(() => {
    if (currentGuess && submitRef.current) {
      submitRef.current.focus();
    }
  }, [currentGuess]);

  // Once a guess has been submitted, focus on "next" button
  useEffect(() => {
    if (isCorrect !== null && nextRef.current) {
      nextRef.current.focus();
    }
  }, [isCorrect]);

  const clearGuess = () => {
    setCurrentGuess("");
    setCurrentAnswerBank([...headline.answerBank]);
  };

  const handleSubmit = () => {
    if (!currentGuess) return;
    if (currentGuess === headline.correctAnswer) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsCorrect(false);
    }
  };

  const nextHeadlineOrFinish = () => {
    clearGuess();
    setIsCorrect(null);
    setCurrentHeadlineIdx((prevState) => prevState + 1);
  };
  return (
    <>
      {isCorrect === null ? (
        <Flex gap="2" mt="6">
          <Button
            isDisabled={!currentGuess}
            onClick={clearGuess}
            variant="outline"
          >
            Clear
          </Button>
          <Button
            isDisabled={!currentGuess}
            onClick={handleSubmit}
            ref={submitRef}
            variant="outline"
          >
            Submit
          </Button>
        </Flex>
      ) : (
        <Flex mt="6" alignItems="end" justifyContent="space-between">
          <Flex alignItems="center" gap="4">
            <Button
              onClick={nextHeadlineOrFinish}
              ref={nextRef}
              variant="outline"
            >
              {currentHeadlineIdx < 9 ? "Next Headline" : "Finish"}
            </Button>
          </Flex>
          <Link
            borderRadius="var(--chakra-radii-md)"
            fontSize={["sm", "md"]}
            p="0.5"
            href={headline.links.article}
            isExternal
          >
            Read the full article here →
          </Link>
        </Flex>
      )}
    </>
  );
};

export default GameButtons;
