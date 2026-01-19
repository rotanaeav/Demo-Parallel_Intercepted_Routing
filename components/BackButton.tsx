"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="px-4 py-2 bg-gray-200 rounded hover:cursor-pointer"
    >
      Back
    </button>
  );
}
