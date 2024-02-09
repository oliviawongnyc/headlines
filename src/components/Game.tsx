import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { isMobile } from "react-device-detect";
import { QUESTION_COUNT } from "../constants";
import AnswerBank from "./Answers/AnswerBank";
import Header from "./Header";
import HeadlineCard from "./Questions/HeadlineCard";
import GameOver from "./GameOver";
import { useHeadline } from "../hooks/useHeadline";
import { useScore } from "../hooks/useScore";
import { useAnswerBank } from "../hooks/useAnswerBank";

const Game = ({
  setClickedPlay,
}: {
  setClickedPlay: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const sensorBasedOnDevice = isMobile ? TouchSensor : PointerSensor;
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(sensorBasedOnDevice, {
      // This constraint gives us a way to decipher
      // between a drag and a click.
      activationConstraint: {
        distance: 2,
      },
    })
  );

  const { currentAnswerBank, setCurrentAnswerBank } = useAnswerBank();
  const { currentHeadlineIdx, setDragFinishing, headline, playersGuess } =
    useHeadline();
  const { isCorrect, submitAGuess } = useScore();

  const playerGuessed = !!playersGuess;

  const onDragEnd = (e: DragEndEvent) => {
    const guess = e.active.data.current;
    if (!guess) return;
    // If the draggable item is over the correct space, submit the guess
    if (e.over && e.over.id === "droppable-headline-card") {
      submitAGuess(guess.title);
      setDragFinishing(true);
      // else, add it back to the answer bank
    } else {
      setCurrentAnswerBank(currentAnswerBank || []);
      setDragFinishing(true);
    }
    // We keep track of a drag that is finishing for 2 milliseconds
    // to avoid conflicts with click events.
    setTimeout(() => setDragFinishing(false), 200);
  };

  return (
    <>
      <Header headline={headline} />
      <Flex flexDir="column" margin="auto" w={["90%", "90%", "80%"]}>
        {headline && (
          <Flex alignItems={["end", "center"]} gap="2" mb="1">
            <QuestionCount currentHeadlineIdx={currentHeadlineIdx} />
            {playerGuessed && (
              <Feedback
                correctAnswer={headline.correctAnswer}
                isCorrect={isCorrect}
              />
            )}
          </Flex>
        )}
        {headline ? (
          <DndContext onDragEnd={onDragEnd} sensors={sensors}>
            <HeadlineCard headline={headline} />
            <AnswerBank />
          </DndContext>
        ) : (
          <GameOver setClickedPlay={setClickedPlay} />
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
  const questionProgress = `${currentHeadlineIdx + 1}/${QUESTION_COUNT}`;

  return (
    <Text
      aria-label={`Question ${questionProgress}`}
      fontFamily="subtitleBold"
      fontSize="md"
    >
      {questionProgress}
    </Text>
  );
};

const Feedback = ({
  correctAnswer,
  isCorrect,
}: {
  correctAnswer: string;
  isCorrect: boolean | null;
}) => {
  const wrongAnswer = useBreakpointValue({
    base: `The correct answer is ${correctAnswer}.`,
    sm: `Nice try. The correct answer is ${correctAnswer}.`,
  });

  return (
    <Text
      aria-live="assertive"
      color={isCorrect ? "correct" : "incorrect"}
      fontFamily="subtitle"
      fontSize={["sm", "md"]}
    >
      {isCorrect ? "Well done!" : wrongAnswer}
    </Text>
  );
};

export default Game;
