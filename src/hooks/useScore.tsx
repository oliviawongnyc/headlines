import { createContext, useContext, useState } from "react";
import { useHeadline } from "./useHeadline";
import { useAnswerBank } from "./useAnswerBank";

type ScoreContextProviderProps = {
  children: React.ReactNode;
};

type ScoreContextReturn = {
  isCorrect: boolean | null;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  submitAGuess: (guess: string) => void;
};

export const ScoreContext = createContext<ScoreContextReturn | null>(null);

export default function ScoreContextProvider({
  children,
}: ScoreContextProviderProps) {
  const { headline, setPlayersGuess } = useHeadline();
  const { currentAnswerBank, setCurrentAnswerBank } = useAnswerBank();

  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  const submitAGuess = (guess: string) => {
    if (!headline) return;
    setPlayersGuess(guess);
    const originalAnswerBank = currentAnswerBank;
    setCurrentAnswerBank(
      originalAnswerBank.filter((possibleAnswer) => possibleAnswer !== guess)
    );

    if (guess === headline.correctAnswer) {
      setIsCorrect(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <ScoreContext.Provider
      value={{
        isCorrect,
        setIsCorrect,
        score,
        setScore,
        submitAGuess,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error(
      "useScoreContext must be used within a ScoreContextProvider."
    );
  }

  return context;
};
