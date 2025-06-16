import React from "react";
import Header from "../../_components/header";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Varibales
const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZ29Bom2BIif-Do7Y7yx8A5RuI8eUpdsCGQ&s",
  "https://static.vecteezy.com/system/resources/thumbnails/006/254/788/small/tech-letter-j-logo-green-geometric-shape-with-dot-circle-connected-as-network-logo-usable-for-business-and-technology-logos-vector.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4zZRO17TWr1r10L5KodZZlypOrqox0QMCL86SkfvWu1ur0FC6_0fEwtb0ASuvPJj4ss&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaFanIigbtFBn4NxWLHUunaBKHWu4HkknXw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZCNKyyBVYjCMrnU_zcRDorEeO8EYNrLkenQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJOUjwn1mQLB4QQpXsrgxpMol7pW3eZSreoQ&s",
];
export default function Client() {
  return (
    <div className="section-wrapper space-y-4">
      <Header
        h1="our client"
        p1="Our client is a forward-thinking technology company focused on enhancing everyday living through smart innovation. Committed to building seamless, intelligent home experiences."
      />
      <ul className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 pt-7 ">
        {logos.map((element, index) => (
          <li key={element}>
            <Image
              src={element}
              alt="logo"
              width={200}
              height={200}
              className={cn(
                (index == 1 || index == 4) && "scale-50",
                "max-h-28 object-cover"
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
