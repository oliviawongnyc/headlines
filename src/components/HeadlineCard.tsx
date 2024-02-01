import { Button, Flex, Link } from "@chakra-ui/react";
import { useHeadline } from "../hooks/useHeadline";
import { useAnswerBank } from "../hooks/useAnswerBank";
import { useEffect, useRef } from "react";
import HeadlineAndDate from "./HeadlineAndDate";
import { Headline } from "../data/headlines";
import { useScore } from "../hooks/useScore";

const HeadlineCard = ({ headline }: { headline: Headline }) => {
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const {
    currentGuess,
    setCurrentGuess,
    currentHeadlineIdx,
    setCurrentHeadlineIdx,
    isCorrect,
    setIsCorrect,
  } = useHeadline();
  const { setCurrentAnswerBank } = useAnswerBank();
  const { setScore } = useScore();

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
    <Flex
      border="1px solid lightGray"
      boxShadow="md"
      flexDir="column"
      p="6"
      w="100%"
    >
      <HeadlineAndDate headline={headline} />
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
            href={headline.links.article}
            isExternal
            fontSize={["sm", "md"]}
          >
            Read the full article here →
          </Link>
        </Flex>
      )}
    </Flex>
  );
};

export default HeadlineCard;
