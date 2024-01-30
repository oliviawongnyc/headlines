import { createContext, useContext, useState } from "react";
import { Headline } from "../data/headlines";

type HeadlineContextProviderProps = {
  children: React.ReactNode;
  currentGameHeadlines: Headline[];
};

type HeadlineContextReturn = {
  currentGuess: string;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;
  headline: Headline | undefined;
  currentHeadlineIdx: number;
  setCurrentHeadlineIdx: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const HeadlineContext = createContext<HeadlineContextReturn | null>(
  null
);

export default function HeadlineContextProvider({
  children,
  currentGameHeadlines,
}: HeadlineContextProviderProps) {
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [currentHeadlineIdx, setCurrentHeadlineIdx] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  return (
    <HeadlineContext.Provider
      value={{
        currentGuess,
        setCurrentGuess,
        headline: currentGameHeadlines[currentHeadlineIdx] || undefined,
        currentHeadlineIdx,
        setCurrentHeadlineIdx,
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
