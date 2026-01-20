import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wgfmjmyzbvcfsvibqpjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndnZm1qbXl6YnZjZnN2aWJxcGp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMzYzMDcsImV4cCI6MjA3NDgxMjMwN30.1wbnbofisi0BeJ3WQVlFTz0m_vm_6oD-J6q-5qBKwLg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
