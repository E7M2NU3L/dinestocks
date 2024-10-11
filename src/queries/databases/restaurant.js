import { useMutation } from "@tanstack/react-query"

export const CreateRestaurantQuery = () => {
    return useMutation({
        mutationFn : (data) => {
            console.log(data);
        }
    })
}