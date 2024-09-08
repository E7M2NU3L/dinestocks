import { supabase } from "../../config/supabaseConf";

export async function uploadProfile({file}) {
    try {
        const {} = await supabase.storage.from('')
    } catch (error) {
        return error;
    }
}