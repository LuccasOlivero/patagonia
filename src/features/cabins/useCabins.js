import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"], // key to manage data in cache
    queryFn: getCabins, // fetching data from API
  });

  return { isLoading, error, cabins };
}
