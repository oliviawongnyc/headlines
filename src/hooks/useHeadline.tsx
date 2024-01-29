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
  setCurrentHeadline: React.Dispatch<React.SetStateAction<number>>;
};

export const HeadlineContext = createContext<HeadlineContextReturn | null>(
  null
);

export default function HeadlineContextProvider({
  children,
}: HeadlineContextProviderProps) {
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [currentAnswerBank, setCurrentAnswerBank] = useState<
    Headline["answerBank"]
  >([]);

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
        setCurrentHeadline,
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
