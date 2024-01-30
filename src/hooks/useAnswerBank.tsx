import { createContext, useContext, useEffect, useState } from "react";
import { Headline } from "../data/headlines";
import { useHeadline } from "./useHeadline";

type AnswerBankContextProviderProps = {
  children: React.ReactNode;
  currentGameHeadlines: Headline[];
};

type AnswerBankContextReturn = {
  currentAnswerBank: Headline["answerBank"];
  setCurrentAnswerBank: React.Dispatch<
    React.SetStateAction<Headline["answerBank"]>
  >;
};

export const AnswerBankContext = createContext<AnswerBankContextReturn | null>(
  null
);

export default function AnswerBankContextProvider({
  children,
  currentGameHeadlines,
}: AnswerBankContextProviderProps) {
  const [currentAnswerBank, setCurrentAnswerBank] = useState<
    Headline["answerBank"]
  >([]);
  const { currentHeadlineIdx } = useHeadline();

  useEffect(() => {
    if (!currentGameHeadlines[currentHeadlineIdx]) {
      setCurrentAnswerBank([]);
    } else {
      setCurrentAnswerBank([
        ...currentGameHeadlines[currentHeadlineIdx].answerBank,
      ]);
    }
  }, [currentGameHeadlines, currentHeadlineIdx]);

  return (
    <AnswerBankContext.Provider
      value={{
        currentAnswerBank,
        setCurrentAnswerBank,
      }}
    >
      {children}
    </AnswerBankContext.Provider>
  );
}

export const useAnswerBank = () => {
  const context = useContext(AnswerBankContext);
  if (!context) {
    throw new Error(
      "useAnswerBankContext must be used within a AnswerBankContextProvider."
    );
  }

  return context;
};
