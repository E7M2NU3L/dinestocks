import { supabase } from "../../config/supabaseConf";
import { v4 as uuidv4 } from 'uuid';

export async function CreateUser({ firstname, lastname, email, password }) {
    try {
        const { data, error } = await supabase.from('User').insert({
            id: uuidv4(),
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,  // Already hashed
            created_at: new Date().toISOString(),
        });

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
