import { supabase } from "../../config/supabaseConf";
import { CreateUser } from "../databases/user";

export async function RegisterUser({ firstname, lastname, email, password }) {
    try {
        // Sign up the user with Supabase Auth
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        });

        console.log(data);

        if (error) throw new Error("Supabase Auth sign-up failed");

        const userId = data.user.id;

        // Store the user data in the database
        const response = await CreateUser({
            firstname,
            lastname,
            email,
            password,
            userId
        });

        console.log(response);

        if (!response) throw new Error("Failed to create user in the database");

        return {
            data,
            response
        };
    } catch (error) {
        console.error(error);
        throw new Error(error instanceof Error ? error.message : "Unknown error occurred");
    }
}