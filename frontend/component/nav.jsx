'use client';
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex h-screen w-full">

      {/* === SIDEBAR UNGU === */}
      <aside className="w-64 bg-[#6A4FB6] text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Internet Of Things</h1>

        <nav className="space-y-4">
          <p className="cursor-pointer hover:bg-[#7a60c4] p-2 rounded">Home</p>
          <p className="cursor-pointer hover:bg-[#7a60c4] p-2 rounded">About</p>
          <Link href={'/admin/dashboard/project'} className="cursor-pointer hover:bg-[#7a60c4] p-2 rounded">Project</Link>
          <p className="cursor-pointer hover:bg-[#7a60c4] p-2 rounded">Contact</p>
        </nav>
      </aside>

      {/* === AREA KANAN PUTIH (kosong, kamu isi nanti) === */}
      <main className="flex-1 bg-white p-10 overflow-auto">
        {/* kamu akan isi konten halaman di sini */}
      </main>
    </div>
  );
}

