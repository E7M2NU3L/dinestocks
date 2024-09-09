import { supabase } from "../../config/supabaseConf";

export async function Logout() {
    try {
        await supabase.auth.signOut({
            scope : 'local'
        });
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error("Ünknown Error");
    }
}