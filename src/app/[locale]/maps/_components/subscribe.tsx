"use client";

// Hook Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema
import { SubscribeForm, SubscribeSchema } from "@/lib/schemes/subscribe.shema";
import useSubscription from "../_hooks/subscription";

export default function Subscribe() {
  // Hooks
  const { mutate, isError, error, isPending } = useSubscription();

  // Form
  const form = useForm<SubscribeForm>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: {
      email: "",
    },
  });
  // Submition
  function onSubmit(values: SubscribeForm) {
    return mutate(values);
  }
  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }
  return (
    <div className="section-card">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant={"outline"}
            size={"lg"}
            type="submit"
            disabled={isPending}

>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
