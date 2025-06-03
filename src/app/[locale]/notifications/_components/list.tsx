"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import EditPopup from "./edit-popup";

export default function List() {
  // List func
  // const response = await fetch(
  //     process.env.BASE_URL_FLOWER + "/api/v1/notifications/user",
  //     {
  //       headers: {
  //         Authorization:
  //           "BearerToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjgzZGRmMjRhOGJjYTMwN2Y5YzY2ZGQxIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDg5NDI5Mjd9.k1OfCDMMpMCAASV9roDLX5Jfdz4InncXZtYLAcoHFF4",
  //       },
  //     }
  //   );
  //   const payload = await response.json();

  //   face data
  const list = [
    {
      id: "1",
      read: false,
      title: "Lorem ipsum dolor sit",
    },
    {
      id: "2",
      read: false,
      title: "Lorem ipsum dolor sit",
    },
  ];

  const [notList, setNotList] = useState(list);
  //
  function handleReaded(id: string) {
    console.log('readed')
    return () => {
      setNotList((prev) =>
        prev.map((item) => (item.id === id ? { ...item, read: true } : item))
      );
    };
  }

  return (
    <ul className="flex flex-col gap-4">
      {notList.map((el) => (
        <li
          key={el.id}
          className={cn(
            el.read ? "bg-white" : "bg-zinc-300",
            "p-2 flex items-center justify-between border-2 border-black"
          )}
        >
          {" "}
          {el.title}
          <EditPopup id={el.id} isReaded={handleReaded(el.id)} />
        </li>
      ))}
    </ul>
  );
}
