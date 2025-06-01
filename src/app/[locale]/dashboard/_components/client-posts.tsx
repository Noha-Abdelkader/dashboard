
import React from "react";

export default async function ClientPosts() {
  const response = await fetch(process.env.BASE_URL_DUMMY + "/posts");
  const payload:Post[] = await response.json();

  return <div></div>;
}
