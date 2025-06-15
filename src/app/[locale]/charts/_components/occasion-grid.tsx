import React from "react";
import Image from "next/image";

// Components
import { useOccasionProducts } from "../_hooks/occasion-products";

// Types
import { OccasionProduct } from "@/lib/types/features/occasions";

type Props = {
  id: string;
};
export default function OccasionGrid({ id }: Props) {
  
  // Hooks
  const { data, error, isError, isLoading } = useOccasionProducts(id);

  if (isError) {
    return <p>{JSON.stringify(error)}</p>;
  }
  if (isLoading) {
    return <p>loading ....</p>;
  }
  return (
    <>
      {data.length ? (
        <ul className="flex flex-col gap-2 *:bg-gray-100 ">
          {data.map((element: OccasionProduct) => (
            <li key={element._id}>
              <span>{element.title}</span>
              <Image
                src={element.imgCover}
                alt={element.title}
                width={200}
                height={100}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>no product found</p>
      )}
    </>
  );
}
