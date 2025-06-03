"use client";

import { useMutation } from "@tanstack/react-query";

async function markAsRead(id: string) {
  console.log("inn", id);
  //   const response = await fetch(
  //     process.env.BASE_URL_FLOWER + "/api/v1/notifications/mark-read",
  //     {
  //         method:"POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization:
  //           "BearerToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjgzZGRmMjRhOGJjYTMwN2Y5YzY2ZGQxIiwicm9sZSI6InVzZXIiLCJpYXQiOjE3NDg5NDI5Mjd9.k1OfCDMMpMCAASV9roDLX5Jfdz4InncXZtYLAcoHFF4",
  //       },
  //       body: JSON.stringify({
  //         notificationIds: [id],
  //       }),
  //     }
  //   );
  //   console.log(response , 'res')
  //   const payload = await response.json();
  //   console.log(payload, "payload");
  //   fake response
  //   return payload;
  return {
    status: 200,
    message: "marked successfuly",
  };
}

export default function useMarkAsRead(markedSuccess?: () => void) {
  const { isPending, error, isError, mutate, isSuccess } = useMutation({
    mutationKey: ["mark read"],
    mutationFn: async (id: string) => await markAsRead(id),
    onSuccess: (data) => {
      alert(data.message);
      if (markedSuccess) {
        markedSuccess();
      }
    },
  });
  return {
    isPending,
    error,
    isError,
    mutate,
    isSuccess,
  };
}
