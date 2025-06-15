import { z } from "zod";

export type Subscribe = {
  email: string;
};

export const SubscribeSchema = z.object({
  email: z.string().email({ message: "invalid email" }),
});

export type SubscribeForm = z.infer<typeof SubscribeSchema>;
