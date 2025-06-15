"use client";

import { useQuery } from "@tanstack/react-query";
import { occasionProductsAction } from "../_actions/occasion-products";

export function useOccasionProducts(id: string) {
  const { data, error, isError, isLoading } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const response = await occasionProductsAction(id);
      if (response.message == "success") {
        return response.products;
      }
      return response;
    },
  });

  return {
    data,
    error,
    isError,
    isLoading,
  };
}
