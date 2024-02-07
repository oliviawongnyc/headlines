import { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createClient } from "@supabase/supabase-js";
import theme from "./theme";
import "./theme/fonts.css";
import AnswerBankContextProvider from "./hooks/useAnswerBank";
import HeadlineContextProvider from "./hooks/useHeadline";
import ScoreContextProvider from "./hooks/useScore";
import Game from "./components/Game";
import Landing from "./components/Landing";

const supabaseUrl = process.env.REACT_APP_DB_URL;
const supabaseKey = process.env.REACT_APP_DB_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key is not provided");
}

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

function App() {
  const [clickedPlay, setClickedPlay] = useState<boolean>(false);
  const [gameHeadlines, setGameHeadlines] = useState<Headline[]>([]);

  useEffect(() => {
    getHeadlines();
  }, []);

  async function getHeadlines() {
    const { data: gameHeadlines } = await supabase
      .from("random_headlines")
      .select("*")
      .limit(10);

    setGameHeadlines(gameHeadlines || []);
  }

  const startGame = () => setClickedPlay(true);

  return (
    <ChakraProvider theme={theme}>
      <HeadlineContextProvider gameHeadlines={gameHeadlines}>
        <AnswerBankContextProvider>
          <ScoreContextProvider>
            {clickedPlay ? (
              <Game setClickedPlay={setClickedPlay} />
            ) : (
              <Landing startGame={startGame} />
            )}
          </ScoreContextProvider>
        </AnswerBankContextProvider>
      </HeadlineContextProvider>
    </ChakraProvider>
  );
}

export default App;
