import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetEvents = () => {
    const { data: allEvents = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["all-events"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-events");
            return response.data
        }
    })
    return {
        allEvents,
        refetch,
        isError,
        isLoading
    }
};

export default useGetEvents;