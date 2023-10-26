import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eiyahyupkcgjshtwwlli.supabase.co";

// row level security activated, this key only allow read data
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpeWFoeXVwa2NnanNodHd3bGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwODQzNjUsImV4cCI6MjAxMzY2MDM2NX0.dHP1TBrzFiH-Ylxx6SCXAcwXLZTXKVkscUKpxdkzZlU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
