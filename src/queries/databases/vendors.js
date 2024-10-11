import { useMutation } from "@tanstack/react-query"

export const CreateVendorQuery = () => {
    return useMutation({
        mutationFn : (data) => {
            console.log(data);
        }
    })
}