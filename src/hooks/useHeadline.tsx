import { createContext, useContext, useEffect, useState } from "react";
import headlines, { Headline } from "../data/headlines";

type HeadlineContextProviderProps = {
  children: React.ReactNode;
};

type HeadlineContextReturn = {
  currentAnswerBank: Headline["answerBank"];
  setCurrentAnswerBank: React.Dispatch<
    React.SetStateAction<Headline["answerBank"]>
  >;
  currentGuess: string;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;
  headline: Headline | undefined;
  currentHeadline: number;
  setCurrentHeadline: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const HeadlineContext = createContext<HeadlineContextReturn | null>(
  null
);

export default function HeadlineContextProvider({
  children,
}: HeadlineContextProviderProps) {
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [currentHeadline, setCurrentHeadline] = useState<number>(0);
  const [currentAnswerBank, setCurrentAnswerBank] = useState<
    Headline["answerBank"]
  >([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (!headlines[currentHeadline]) {
      setCurrentAnswerBank([]);
    } else {
      setCurrentAnswerBank([...headlines[currentHeadline].answerBank]);
    }
  }, [currentHeadline]);

  return (
    <HeadlineContext.Provider
      value={{
        currentAnswerBank,
        setCurrentAnswerBank,
        currentGuess,
        setCurrentGuess,
        headline: headlines[currentHeadline] || undefined,
        currentHeadline,
        setCurrentHeadline,
        score,
        setScore,
      }}
    >
      {children}
    </HeadlineContext.Provider>
  );
}

export const useHeadline = () => {
  const context = useContext(HeadlineContext);
  if (!context) {
    throw new Error(
      "useHeadlineContext must be used within a HeadlineContextProvider."
    );
  }

  return context;
};
