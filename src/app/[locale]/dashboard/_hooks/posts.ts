import { useGetPostsQuery } from "@/stores/services/posts";

export default function () {
  const { data, isLoading, isError } = useGetPostsQuery();

  return { data, isLoading, isError };
}
