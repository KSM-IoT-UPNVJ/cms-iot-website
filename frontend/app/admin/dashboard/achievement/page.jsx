'use client';

import { useState } from "react";
import Nav from "@/component/nav";

export default function Home() {
  const [formData, setFormData] = useState({
    title: '',
    award: '',
    description: '',
    image: null,
    time: '',
    organizer: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Achievement berhasil disimpan!');
  };

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen bg-gray-100">
      
      {/* Sidebar Ungu */}
      <Nav />

      {/* Area Konten Putih */}
      <div className="flex items-start p-8 pt-20">
        <div className="bg-white w-full rounded-xl p-10 shadow">

          {/* JUDUL SAJA YANG DIUBAH */}
          <h2 className="text-2xl font-bold mb-8">Achievement</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* TITLE */}
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan judul achievement"
              />
            </div>

            {/* AWARD */}
            <div>
              <label className="block mb-1 font-medium">Award</label>
              <input
                type="text"
                name="award"
                value={formData.award}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan nama penghargaan"
              />
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan deskripsi achievement"
                rows={4}
              />
            </div>

            {/* IMAGE */}
            <div>
              <label className="block mb-1 font-medium">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            {/* TIME */}
            <div>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="date"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Contoh: 2024"
              />
            </div>

            {/* ORGANIZER */}
            <div>
              <label className="block mb-1 font-medium">Organizer</label>
              <input
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Nama penyelenggara"
              />
            </div>

            {/* TOMBOL (TEKS SAJA DIUBAH) */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
