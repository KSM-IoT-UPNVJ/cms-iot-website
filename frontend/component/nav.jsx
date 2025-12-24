'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadePoint = 120; // px sebelum benar-benar hilang

      if (scrollY <= fadePoint) {
        setOpacity(1 - scrollY / fadePoint);
      } else {
        setOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* GARIS UNGU HORIZONTAL DENGAN TRANSISI MEMUDAR */}
      <div
        className="fixed top-0 left-64 right-0 h-14 bg-[#6A4FB6] pointer-events-none transition-opacity duration-300"
        style={{ opacity, zIndex: 5 }}
      />

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#6A4FB6] text-white p-6 min-h-screen relative z-20">
        <h1 className="text-2xl font-bold mb-8">Internet Of Things</h1>

        <nav className="space-y-4">
          <Link
            href="/admin/dashboard/achievement"
            className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
          >
            Achievement
          </Link>

          <Link
            href="/admin/dashboard/insight"
            className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
          >
            Insight
          </Link>

          <Link
            href="/admin/dashboard/project"
            className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
          >
            Project
          </Link>

          <Link
            href="/admin/dashboard/ourprogram"
            className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
          >
            Our Program
          </Link>
        </nav>
      </aside>
    </>
  );
}

