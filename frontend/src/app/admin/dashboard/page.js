"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("http://localhost:8000/auth/logout", {
      method: "POST",
      credentials: "include", 
    });

    router.push("/login");
  };

  useEffect(() => {
    fetch("http://localhost:8000/auth/me", {
      credentials: "include",
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          router.push("/login");
        }
      })
      .catch(() => {
        alert("Backend not reachable");
        router.push("/login");
      });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
    </div>
  );
}
