import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eiyahyupkcgjshtwwlli.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpeWFoeXVwa2NnanNodHd3bGxpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODA4NDM2NSwiZXhwIjoyMDEzNjYwMzY1fQ.PgkHO0mPyVlDlFHxsopIDOjIpaftGsjUC4uTRGfqGjk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
