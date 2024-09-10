import { useMutation } from "@tanstack/react-query"
import { UpdateUser } from "../../api/databases/user"

export const UpdateUserQuery = () => {
    return useMutation({
        mutationFn : (data) => UpdateUser(data)
    })
};