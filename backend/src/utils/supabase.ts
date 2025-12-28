import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const anonKey = process.env.SUPABASE_ANON_KEY!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !anonKey || !serviceRoleKey) {
  throw new Error("Supabase environment variables are missing");
}

// 🔐 Used ONLY for auth verification
export const supabaseAuth = createClient(
  supabaseUrl,
  anonKey
);

// 🔐 Used ONLY for DB access (bypass RLS)
export const supabaseAdmin = createClient(
  supabaseUrl,
  serviceRoleKey
);
