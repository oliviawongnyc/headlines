import { createContext, useContext, useEffect, useState } from "react";
import { Headline } from "../data/headlines";
import { useHeadline } from "./useHeadline";

type AnswerBankContextProviderProps = {
  children: React.ReactNode;
  gameHeadlines: Headline[];
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
  gameHeadlines,
}: AnswerBankContextProviderProps) {
  const [currentAnswerBank, setCurrentAnswerBank] = useState<
    Headline["answerBank"]
  >([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const { headline } = useHeadline();

  useEffect(() => {
    if (!headline) {
      setCurrentAnswerBank([]);
    } else {
      setCurrentAnswerBank([...headline.answerBank]);
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

export const useAnswerBank = () => {
  const context = useContext(AnswerBankContext);
  if (!context) {
    throw new Error(
      "useAnswerBankContext must be used within a AnswerBankContextProvider."
    );
  }

  return context;
};
