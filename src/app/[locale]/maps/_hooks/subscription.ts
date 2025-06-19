"use client";
// Functions
import { subscriptionAction } from "../_actions/subscribe.action";

// Hooks
import { useMutation } from "@tanstack/react-query";

// Type
import { User } from "@/lib/types/features/user";
import { SubscribeForm } from "@/lib/schemes/subscribe.shema";

export default function useSubscription() {
  const { mutate, error, isError, isPending } = useMutation({
    mutationKey: ["subscribe"],
    mutationFn: async (user: SubscribeForm) => {
      const response = await subscriptionAction(user as User);
      return response;
    },
    onSuccess(data) {
      console.log(data, "data");
    },
    onError(error) {
      console.log(error, "error");
    },
  });

  return { mutate, error, isError, isPending };
}
