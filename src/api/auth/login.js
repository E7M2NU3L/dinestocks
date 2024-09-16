import { supabase } from "../../config/supabaseConf";

export async function LoginUser(loginData) {
    try {
        console.log(loginData);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginData.email,
            password: loginData.password,
          })

          console.log(error);
          console.log(data);

        if (error) throw Error("Failed to Login");
        return data;
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error("Unknown Error");
    }
}

export async function LoginwithGithub() {
    try {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider : 'github',
        })

        if (error) throw Error("Failed to Login");
        return data;
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error("Unknown Error");
    }
}

export async function LoginwithGoogle() {
    try {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider : 'google',
            options : {
                queryParams: {
                    access_type: 'offline',
                    prompt: 'consent',
                },
            }
        })

        if (error) throw Error("Failed to Login");
        return data;
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error("Unknown Error");
    }
}

export async function LoginwithLinkedin() {
    try {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider : 'linkedin_oidc',
        })

        if (error) throw Error("Failed to Login");
        return data;
    } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
        else throw new Error("Unknown Error");
    }
}