// import 'server-only';

import { Post } from "@/lib/types/posts/posts";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = process.env.BASE_URL_DUMMY;

export const postsApi = createApi({
  reducerPath: "getPosts",
  baseQuery: fetchBaseQuery({ baseUrl: baseQuery }),
  endpoints: (builder) => ({
    // RTK Query بيعتبر إن الـ query function لازم تاخد argument (حتى لو فاضي).
    // الاول بيكون هترجع اية
    // التاني بتاخد اية

    getPosts: builder.query<{ posts: Post[] }, void>({
      query: () => {
        console.log(process.env.BASE_URL_DUMMY, "process.env.BASE_URL_DUMMY");
        return "/posts";
      },
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
