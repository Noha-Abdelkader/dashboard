import React from "react";
import Header from "../../_components/header";

export default async function Testimonials() {
  // Fetch
  const response = await fetch("https://dummyjson.com/c/b209-5484-43e8-86af");
  const payload = await response.json();

  return (
    <div className="section-wrapper space-y-4">
      <Header
        h1="testimonials"
        p1="Client and user testimonials play a vital role in showcasing the value and impact of our work. Through their feedback, we gain valuable insights into user satisfaction, product usability, and the real-world benefits of our solutions. These testimonials reflect the trust our clients place in us and highlight the quality, reliability, and innovation we bring to every project."
      />
      <ul>
        {payload.map((element) => (
          <li key={element.review}>
            <p>{element.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
