'use client';

import { useState } from "react";
import Nav from "@/component/nav";

export default function Insight() {
  const [formData, setFormData] = useState({
    id: '',
    category: '',
    image: null,
    vol: '',
    title: '',
    link: '',
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
    alert('Data berhasil dikirim!');
  };

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen bg-gray-100">
      
      {/* Sidebar Ungu */}
      <Nav />

      {/* FORM */}
      <div className="flex items-start p-8 pt-20">
        <div className="bg-white w-full rounded-xl p-10 shadow">

          <h2 className="text-2xl font-bold mb-8">Insight</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block mb-1 font-medium">ID</label>
              <input
                type="number"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan ID"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Category</label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan kategori"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Vol</label>
              <input
                type="number"
                name="vol"
                value={formData.vol}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan volume"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan judul"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Link</label>
              <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                placeholder="Masukkan link"
              />
            </div>

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
