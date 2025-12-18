"use client";

import { useRouter } from "next/navigation";

export default function Awal() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="bg-black text-white w-full p-2"
        onClick={() => router.push("/login")}
      >
        Login
      </button>
    </div>
  );
}