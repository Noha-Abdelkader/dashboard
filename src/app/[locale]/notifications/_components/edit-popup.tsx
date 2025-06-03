"use client";
import React from "react";
import useMarkAsRead from "../_actions/markAsRead";

type Props = {
  id: string;
  isReaded: () => void;
};

export default function EditPopup({ id, isReaded }: Props) {
  const { mutate, isSuccess, isPending } = useMarkAsRead();
  async function handleClick(id: string) {
    mutate(id);
    if (isSuccess) {
      isReaded();
    }
  }
  return (
    <div>
      <button onClick={() => handleClick(id)}>
        {isPending ? "Loading..." : "Mark as read"}
      </button>
    </div>
  );
}
