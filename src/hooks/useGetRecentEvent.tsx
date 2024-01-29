import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetRecentEvent = () => {
    const { data: recentEvents = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["all-recent-events"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-recent-events");
            return response.data
        }
    })
    return {
        recentEvents,
        refetch,
        isError,
        isLoading
    }
};

export default useGetRecentEvent;