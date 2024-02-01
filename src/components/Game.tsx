import { Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { useHeadline } from "../hooks/useHeadline";
import AnswerBank from "./AnswerBank";
import HeadlineCard from "./HeadlineCard";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useAnswerBank } from "../hooks/useAnswerBank";
import GameOver from "./GameOver";
import Header from "./Header";
import { Headline } from "../data/headlines";
import { useScore } from "../hooks/useScore";

const Game = () => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const { headline, setCurrentGuess, currentHeadlineIdx } = useHeadline();
  const { setCurrentAnswerBank } = useAnswerBank();
  const { isCorrect } = useScore();

  const fillInBlank = (e: DragEndEvent) => {
    const guess = e.active.data.current;
    if (!guess || e.over?.id !== "droppable") return;
    setCurrentGuess(guess.title);
    setCurrentAnswerBank((prevBank) =>
      prevBank.filter((possibleAnswer) => possibleAnswer !== guess.title)
    );
  };

  return (
    <>
      <Header headline={headline} />
      {headline && (
        <Flex alignItems={["end", "center"]} mb="3" mx={["4", "6"]} gap="2">
          <QuestionCount currentHeadlineIdx={currentHeadlineIdx} />
          <Feedback headline={headline} isCorrect={isCorrect} />
        </Flex>
      )}
      <Flex
        alignItems={headline ? "flex-start" : "center"}
        flexDir="column"
        gap={["5", "7"]}
        mx={["4", "6"]}
      >
        {headline ? (
          <DndContext onDragEnd={fillInBlank} sensors={sensors}>
            <HeadlineCard headline={headline} />
            <AnswerBank />
          </DndContext>
        ) : (
          <GameOver />
        )}
      </Flex>
    </>
  );
};

const QuestionCount = ({
  currentHeadlineIdx,
}: {
  currentHeadlineIdx: number;
}) => {
  return (
    <Heading as="h3" fontSize={["sm", "md"]}>
      {currentHeadlineIdx + 1}/10
    </Heading>
  );
};

const Feedback = ({
  headline,
  isCorrect,
}: {
  headline?: Headline;
  isCorrect: boolean | null;
}) => {
  const wrongAnswer = useBreakpointValue({
    base: `The correct answer is ${headline?.correctAnswer}.`,
    sm: `Nice try. The correct answer is ${headline?.correctAnswer}.`,
  });

  return (
    <Text color={isCorrect ? "correct" : "incorrect"} fontSize={["sm", "md"]}>
      {headline && isCorrect !== null
        ? isCorrect
          ? "Well done!"
          : wrongAnswer
        : null}
    </Text>
  );
};

export default Game;
