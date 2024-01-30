import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetRecentEvent = () => {
    const { data: recentEvents = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["all-recent-events"],
        queryFn: async () => {
            const response = await axios.get("https://event360-backend.vercel.app/all-recent-events");
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