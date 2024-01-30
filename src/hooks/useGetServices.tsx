import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetServices = () => {
    const { data: allServices = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["all-service"],
        queryFn: async () => {
            const response = await axios.get("https://event360-backend.vercel.app/all-services");
            return response.data
        }
    })
    return {
        allServices,
        refetch,
        isError,
        isLoading
    }
};

export default useGetServices;