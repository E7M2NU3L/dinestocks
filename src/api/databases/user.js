import { supabase } from "../../config/supabaseConf";

export async function CreateUser({ firstname, lastname, email, password, userId }) {
    try {
        const { data, error } = await supabase.from('User').insert({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            user_id : userId
        });

        console.log(data);
        console.log(error);

        if (error) throw new Error("Database insertion failed");

        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error occurred");
    }
}
export async function DeleteUser(userId) {
    try {
        const {data, error} = await supabase.from('User').delete().eq({
            id : userId
        }).select();

        if (error) throw new Error("Database Deletion failed");
        return response;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error occurred");
    }
}

export async function UpdateUser(userId, updateBody) {
    try {
        const {data, error } = await supabase
            .from('User')
            .update(updateBody)
            .eq('id', userId)
            .select()

        if (error) throw new Error("Database Updation failed");
        return {
            "message" : `the user ${userId} has been successfully updated`,
            data
        }
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error occurred");
    }
}

export async function getUser(userId) {
    try {
        const {data, error} = await supabase.from('User').eq('id', userId)
        .select()

        if (error) throw new Error("Database Fetching failed");
        return data;
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error occurred");
    }
}
