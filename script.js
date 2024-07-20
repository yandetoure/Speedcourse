// Liaison avec la base de données dans supabase
const { createClient } = supabase;
const url = "https://zjazvgpfizeesuwwqivp.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqYXp2Z3BmaXplZXN1d3dxaXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMTg3ODUsImV4cCI6MjAzNjg5NDc4NX0.uGh0CBCzJv611vEEboB-0dBm17MaO3PLYwYnxmjfODQ";
const database = createClient(url, key);
const save = document.querySelector("#save");
