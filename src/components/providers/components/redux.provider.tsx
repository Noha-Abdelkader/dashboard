"use client";

import { AppStore, store } from "@/stores/store";
import React, { useRef } from "react";
import { Provider } from "react-redux";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
