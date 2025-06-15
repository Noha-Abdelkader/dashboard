"use client";

import { z } from "zod";
// Hook Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

// Components
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema
import { SubscribeForm, SubscribeSchema } from "@/lib/schemes/subscribe.shema";


  function onSubmit(values: SubscribeForm) {
    console.log(values);
  }
export default function Subscribe() {

    // Form
  const form = useForm<SubscribeForm>({
    resolver: zodResolver(SubscribeSchema),
    defaultValues: {
      email: "",
    },
  });
 

  return (
    <div className="section-card">

    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
              <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
          </div>
  );
}
