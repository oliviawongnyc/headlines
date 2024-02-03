import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useHeadline } from "../hooks/useHeadline";
import AnswerBank from "./Answers/AnswerBank";
import HeadlineCard from "./Questions/HeadlineCard";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useAnswerBank } from "../hooks/useAnswerBank";
import GameOver from "./GameOver";
import Header from "./Header";
import { Headline } from "../data/headlines";
import { useScore } from "../hooks/useScore";
import { QUESTION_COUNT } from "../data/constants";

const Game = () => {
  const sensorBasedOnDevice = isMobile() ? TouchSensor : PointerSensor;

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(sensorBasedOnDevice, {
      activationConstraint: {
        distance: 2,
      },
    })
  );

  const { headline, gameHeadlines, setCurrentGuess, currentHeadlineIdx } =
    useHeadline();
  const { setCurrentAnswerBank } = useAnswerBank();
  const { isCorrect } = useScore();

  const makeAGuessOnDrag = (e: DragEndEvent) => {
    const guess = e.active.data.current;
    if (!guess || e.over?.id !== "droppable") return;

    const originalAnswerBank = gameHeadlines[currentHeadlineIdx].answerBank;
    setCurrentGuess(guess.title);
    setCurrentAnswerBank(
      originalAnswerBank.filter(
        (possibleAnswer) => possibleAnswer !== guess.title
      )
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
          <DndContext onDragEnd={makeAGuessOnDrag} sensors={sensors}>
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

const isMobile = () => {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
};

const QuestionCount = ({
  currentHeadlineIdx,
}: {
  currentHeadlineIdx: number;
}) => {
  return (
    <Text fontSize={["sm", "md"]}>
      {currentHeadlineIdx + 1}/{QUESTION_COUNT}
    </Text>
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
