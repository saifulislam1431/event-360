import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useGetServices = () => {
    const { data: allServices = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["all-service"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-services");
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