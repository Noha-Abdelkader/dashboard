"use client";

import { useGetPostsQuery } from "@/stores/services/posts";
import React from "react";

export default  function Posts() {
  const { data, isLoading, isError } = useGetPostsQuery();

  return <div>{JSON.stringify(data)}</div>;
}
