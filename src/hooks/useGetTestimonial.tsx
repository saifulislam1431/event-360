import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetTestimonial = () => {
    const { data: allTestimonial = [], refetch, isError, isLoading } = useQuery({
        queryKey: ["all-testimonial"],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-testimonial");
            return response.data
        }
    })
    return {
        allTestimonial,
        refetch,
        isError,
        isLoading
    }
};

export default useGetTestimonial;