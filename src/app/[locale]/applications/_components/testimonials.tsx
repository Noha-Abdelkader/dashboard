import React from "react";
import Header from "../../_components/header";

// Carousel
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Testimonial } from "@/lib/types/features/testimonial";

export default async function Testimonials() {

  // Fetch
  const response = await fetch(
    process.env.BASE_URL_DUMMY + "/c/b209-5484-43e8-86af"
  );
  const payload = await response.json();

  return (
    <div className="section-wrapper space-y-4">
      <Header
        h1="testimonials"
        p1="Client and user testimonials play a vital role in showcasing the value and impact of our work. Through their feedback, we gain valuable insights into user satisfaction, product usability, and the real-world benefits of our solutions. These testimonials reflect the trust our clients place in us and highlight the quality, reliability, and innovation we bring to every project."
      />
      <Carousel className="max-w-4xl mx-auto">
        <CarouselContent>
          {payload.map((element: Testimonial, index: number) => (
            <CarouselItem key={index}>
              <p className="bg-red-200 text-sm">{element.review}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
