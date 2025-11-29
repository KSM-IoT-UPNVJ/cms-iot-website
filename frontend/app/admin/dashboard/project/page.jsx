'use client';

import { useState } from "react";
import Nav from "@/component/nav";


export default function InsightSlideForm() {
  const [formData, setFormData] = useState({
    id: "",
    category: "",
    image: null,
    vol: "",
    title: "",
    link: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex">
    <Nav />
    <div className="max-w-2xl bg-white rounded p-8 shadow">

      <h2 className="text-2xl font-bold mb-6">Input Insight Slide</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* ID */}
        <div>
          <label className="block font-medium mb-1">ID</label>
          <input
            type="number"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan ID"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan kategori"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium mb-1">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        {/* Volume */}
        <div>
          <label className="block font-medium mb-1">Vol</label>
          <input
            type="number"
            name="vol"
            value={formData.vol}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan volume"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Masukkan judul"
          />
        </div>

        {/* Link */}
        <div>
          <label className="block font-medium mb-1">Link</label>
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
  );
}
