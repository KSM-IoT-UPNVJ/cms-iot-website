'use client';
import Link from "next/link";

export default function Nav() {
  return (
    <aside className="w-64 bg-[#6A4FB6] text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-8">Internet Of Things</h1>

      <nav className="space-y-4">

        <Link 
          href="/admin/dashboard/home" 
          className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
        >
          Home
        </Link>

        <Link 
          href="/admin/dashboard/about" 
          className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
        >
          About
        </Link>

        <Link 
          href="/admin/dashboard/project" 
          className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
        >
          Project
        </Link>

        <Link 
          href="/admin/dashboard/contact" 
          className="block cursor-pointer hover:bg-[#7a60c4] p-2 rounded"
        >
          Contact
        </Link>

      </nav>
    </aside>
  );
}

