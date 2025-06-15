import React from "react";

// Components
import OccasionTabs from "./_components/occasion-tabs";

// Types
// import { Occasion } from "@/lib/types/features/occasions";

export default async function Page() {
  // Fetch Occasion list
  const resposne = await fetch(
    `${process.env.BASE_URL_FLOWER}/api/v1/occasions?limit=4`
  );
  const payload = await resposne.json();

  return (
    <div>
      {payload.occasions.length ? (
        <OccasionTabs occasions={payload.occasions} />
      ) : (
        <p>No occasions found </p>
      )}
    </div>
  );
}
