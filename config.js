// LocalLoop backend config — filled from the created Supabase project.
// The anon key is safe to ship in a public page: Row Level Security in
// supabase/schema.sql is what actually restricts access. Never put the
// service_role key in a frontend file.
window.LOCALLOOP_CONFIG = {
  supabaseUrl: "https://ktnwckfjolrwygeihmfq.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0bndja2Zqb2xyd3lnZWlobWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1MDM4MzksImV4cCI6MjEwOTA3OTgzOX0.KC_ukU8VcQ8vJp_tWHQDRoz_We5ZPMviZO8Kl059HBk"
};
