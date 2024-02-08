import { createContext, useContext, useEffect, useState } from "react";
import { useHeadline } from "./useHeadline";

type AnswerBankContextProviderProps = {
  children: React.ReactNode;
};

type AnswerBankContextReturn = {
  currentAnswerBank: Headline["answerBank"];
  setCurrentAnswerBank: React.Dispatch<
    React.SetStateAction<Headline["answerBank"]>
  >;
  isDragging: boolean;
  setIsDragging: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AnswerBankContext = createContext<AnswerBankContextReturn | null>(
  null
);

export default function AnswerBankContextProvider({
  children,
}: AnswerBankContextProviderProps) {
  const [currentAnswerBank, setCurrentAnswerBank] = useState<
    Headline["answerBank"]
  >([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { headline } = useHeadline();

  useEffect(() => {
    if (headline) {
      const shuffledAnswers = shuffleAnswers(headline.answerBank);
      setCurrentAnswerBank(shuffledAnswers || []);
    }
  }, [headline]);

  return (
    <AnswerBankContext.Provider
      value={{
        currentAnswerBank,
        setCurrentAnswerBank,
        isDragging,
        setIsDragging,
      }}
    >
      {children}
    </AnswerBankContext.Provider>
  );
}

function shuffleAnswers(answers: Headline["answerBank"]) {
  const shuffledAnswers = [...answers];

  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [
      shuffledAnswers[j],
      shuffledAnswers[i],
    ];
  }

  return shuffledAnswers;
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
