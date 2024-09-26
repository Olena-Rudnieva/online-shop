import { useQuery } from "@tanstack/react-query";
import { fetchBranches } from "../fetchBranches";


export const useBranchesQuery = (city?: string) => {
  return useQuery({
    queryKey: ["branches", city], 
    queryFn: () => fetchBranches(city),
    enabled: !!city, 
  });
};