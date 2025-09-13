import { SupabaseClient } from '@supabase/supabase-js'

declare module '@/utils/supabase' {
  export const supabase: SupabaseClient
}
