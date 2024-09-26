import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "../fetchCities";

export const useCitiesQuery = (query: string) => {
  return useQuery({
    queryKey: ["cities", query],
    queryFn: () => fetchCities(query),
    enabled: !!query, 
  });
};