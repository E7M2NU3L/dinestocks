import { supabase } from "../../config/supabaseConf";

export async function ForgotPassword({email}) {
    try {
        const {data, error} = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo : "http://localhost:5173/reset-password"
        });

        if (error) throw Error;
        return data;
    } catch (error) {
        return error;
    }
}