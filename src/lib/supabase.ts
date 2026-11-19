import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl =
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) ||
  "https://nhskedghrjbxrninunvj.supabase.co";

const supabaseAnonKey =
  (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oc2tlZGdocmpieHJuaW51bnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3MjM3MTAsImV4cCI6MjEwNjI5OTcxMH0.0g08qfjV5S1SWSjohcfSwjHEa18KWGK2lo-PZX1WkZA";

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export interface LabsEnquiry {
  full_name: string;
  email: string;
  company?: string;
  service_type: string;
  description: string;
  budget_range?: string;
  referral?: string;
  source_url?: string;
}
