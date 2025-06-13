
import { Post } from "@/lib/types/features/post/post";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postsApi = createApi({
  reducerPath: "getPosts",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    // RTK Query بيعتبر إن الـ query function لازم تاخد argument (حتى لو فاضي).
    // الاول بيكون هترجع اية
    // التاني بتاخد اية

    getPosts: builder.query<{ posts: Post[] }, void>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
