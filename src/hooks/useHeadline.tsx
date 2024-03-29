import { createContext, useContext, useState } from "react";

type HeadlineContextProviderProps = {
  children: React.ReactNode;
  gameHeadlines: Headline[];
};

type HeadlineContextReturn = {
  currentHeadlineIdx: number;
  setCurrentHeadlineIdx: React.Dispatch<React.SetStateAction<number>>;
  dragFinishing: boolean;
  setDragFinishing: React.Dispatch<React.SetStateAction<boolean>>;
  gameHeadlines: Headline[];
  headline: Headline | undefined;
  playersGuess: string;
  setPlayersGuess: React.Dispatch<React.SetStateAction<string>>;
};

export const HeadlineContext = createContext<HeadlineContextReturn | null>(
  null
);

export default function HeadlineContextProvider({
  children,
  gameHeadlines,
}: HeadlineContextProviderProps) {
  const [playersGuess, setPlayersGuess] = useState<string>("");
  const [currentHeadlineIdx, setCurrentHeadlineIdx] = useState<number>(0);
  const [dragFinishing, setDragFinishing] = useState<boolean>(false);

  return (
    <HeadlineContext.Provider
      value={{
        currentHeadlineIdx,
        setCurrentHeadlineIdx,
        dragFinishing,
        setDragFinishing,
        gameHeadlines,
        headline: gameHeadlines[currentHeadlineIdx],
        playersGuess,
        setPlayersGuess,
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
