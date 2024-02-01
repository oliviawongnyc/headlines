import { createContext, useContext, useState } from "react";

type ScoreContextProviderProps = {
  children: React.ReactNode;
};

type ScoreContextReturn = {
  isCorrect: boolean | null;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const ScoreContext = createContext<ScoreContextReturn | null>(null);

export default function ScoreContextProvider({
  children,
}: ScoreContextProviderProps) {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState<number>(0);

  return (
    <ScoreContext.Provider
      value={{
        isCorrect,
        setIsCorrect,
        score,
        setScore,
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
