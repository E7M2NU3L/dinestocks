import { createClient } from '@supabase/supabase-js'
import { supabaseConstants } from '../constants/supabase'

const supabaseUrl = supabaseConstants.projectURL
const supabaseKey = supabaseConstants.projectAPIKey
export const supabase = createClient(supabaseUrl, supabaseKey);