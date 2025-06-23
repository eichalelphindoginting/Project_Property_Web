// src/lib/supabaseClient.js

import { createClient } from '@supabase/supabase-js'

// Ambil URL dan Key dari file .env.local Anda
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Buat dan ekspor klien supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)