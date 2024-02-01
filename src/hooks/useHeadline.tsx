import { createContext, useContext, useState } from "react";
import { Headline } from "../data/headlines";

type HeadlineContextProviderProps = {
  children: React.ReactNode;
  gameHeadlines: Headline[];
};

type HeadlineContextReturn = {
  currentGuess: string;
  setCurrentGuess: React.Dispatch<React.SetStateAction<string>>;
  currentHeadlineIdx: number;
  setCurrentHeadlineIdx: React.Dispatch<React.SetStateAction<number>>;
  headline: Headline | undefined;
  gameHeadlines: Headline[];
};

export const HeadlineContext = createContext<HeadlineContextReturn | null>(
  null
);

export default function HeadlineContextProvider({
  children,
  gameHeadlines,
}: HeadlineContextProviderProps) {
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [currentHeadlineIdx, setCurrentHeadlineIdx] = useState<number>(0);

  return (
    <HeadlineContext.Provider
      value={{
        currentGuess,
        setCurrentGuess,
        currentHeadlineIdx,
        setCurrentHeadlineIdx,
        headline: gameHeadlines[currentHeadlineIdx] || undefined,
        gameHeadlines,
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
