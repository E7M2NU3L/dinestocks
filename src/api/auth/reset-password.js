import { supabase } from "../../config/supabaseConf";

export async function ResetPassword({password}) {
    try {
        const {data, error} = await supabase.auth.updateUser({
            password : password
        })

        if (error) throw Error;
        return data;
    } catch (error) {
        return error;
    }
}