"use server";

// Type
import { User } from "@/lib/types/features/user";

export async function subscriptionAction(data: User) {
  const response = await fetch(process.env.BASE_URL_DUMMY + "/users/add", {
    method: "POST",
    body: JSON.stringify({
      name: "",
      email: data.email,
      password: "",
      avatar: "",
    }),
  });
  const payload = await response.json();
  return payload;
}
