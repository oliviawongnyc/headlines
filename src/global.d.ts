import type { Database as DB } from "./types/supabase";

declare global {
  type Database = DB;
  type Headline = DB["public"]["Views"]["random_headlines"]["Row"];
}
