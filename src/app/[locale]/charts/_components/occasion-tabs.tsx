"use client";

import { Occasion } from "@/lib/types/features/occasions";
import React, { useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import OccasionGrid from "./occasion-grid";

type Props = {
  occasions: Occasion[];
};

export default function OccasionTabs({ occasions }: Props) {
  // State
  const [selectedOccasion, setSelectedOccasion] = useState<string>(
    occasions[0]._id
  );

  return (
    <>
      <Tabs defaultValue={occasions[0]._id} className="w-[400px]">
        <TabsList>
          {occasions.map((element: Occasion) => (
            <TabsTrigger
              key={element._id}
              value={element._id}
              onClick={() => setSelectedOccasion(element._id)}
            >
              {element.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* Content */}
        {selectedOccasion && (
          <TabsContent key={selectedOccasion} value={selectedOccasion}>
            <OccasionGrid id={selectedOccasion} />
          </TabsContent>
        )}
      </Tabs>
    </>
  );
}
