import { supabase } from "../../config/supabaseConf";

export async function LoginUser({email, password}) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
          })

        if (error) throw Error;
        return data;
    } catch (error) {
        return error;
    }
}

export async function LoginwithGithub() {
    try {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider : 'github',
            options : {
                redirectTo : 'http://localhost:5173/dashboard'
            }
        })

        if (error) throw Error;
        return data;
    } catch (error) {
        return error;
    }
}

export async function LoginwithGoogle() {
    try {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider : 'google',
            options : {
                redirectTo : 'http://localhost:5173/dashboard'
            }
        })

        if (error) throw Error;
        return data;
    } catch (error) {
        return error;
    }
}

export async function LoginwithLinkedin() {
    try {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider : 'linkedin_oidc',
            options : {
                redirectTo : 'http://localhost:5173/dashboard'
            }
        })

        if (error) throw Error;
        return data;
    } catch (error) {
        return error;
    }
}