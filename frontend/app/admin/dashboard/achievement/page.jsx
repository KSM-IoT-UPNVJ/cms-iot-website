'use client';

import { useState, useRef } from "react";
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

  // error state
  const [errors, setErrors] = useState({});
  const [warning, setWarning] = useState(false);

  // 🖼 image state
  const [fileName, setFileName] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const refs = useRef({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      const file = files?.[0] || null;
      setFormData({ ...formData, image: file });
      setFileName(file ? file.name : '');
      setPreviewUrl(file ? URL.createObjectURL(file) : '');
      setErrors({ ...errors, image: false });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: false });
    }
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, val]) => {
      if (!val) newErrors[key] = true;
    });

    setErrors(newErrors);
    setWarning(Object.keys(newErrors).length > 0);

    if (Object.keys(newErrors).length > 0) {
      const first = Object.keys(newErrors)[0];
      refs.current[first]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    alert('Achievement berhasil disimpan!');
  };

  const removeImage = () => {
    setFormData({ ...formData, image: null });
    setFileName('');
    setPreviewUrl('');
    setShowPreview(false);
  };

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen bg-gray-100">

      <Nav />


      <div className="flex items-start p-8 pt-20">
        <div className="bg-white w-full rounded-xl p-10 shadow">

          {/* WARNING */}
          {warning && (
            <div className="mb-6 p-3 bg-red-100 text-red-700 rounded">
              Semua field wajib diisi
            </div>
          )}

          <h2 className="text-2xl font-bold mb-8">Achievement</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* TITLE */}
            <div ref={el => refs.current.title = el}>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full border p-2 rounded ${errors.title ? 'border-red-500' : ''}`}
                placeholder="Masukkan Title"
              />
            </div>

            {/* AWARD */}
            <div ref={el => refs.current.award = el}>
              <label className="block mb-1 font-medium">Award</label>
              <input
                type="text"
                name="award"
                value={formData.award}
                onChange={handleChange}
                className={`w-full border p-2 rounded ${errors.award ? 'border-red-500' : ''}`}
                placeholder="Masukkan Award"
              />
            </div>

            {/* DESCRIPTION */}
            <div ref={el => refs.current.description = el}>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className={`w-full border p-2 rounded ${errors.description ? 'border-red-500' : ''}`}
                placeholder="Masukkan Description"
                rows={4}
              />
            </div>

            {/* IMAGE */}
            <div ref={el => refs.current.image = el}>
              <label className="block mb-1 font-medium">Image</label>

              {!fileName && (
                <label className={`inline-block border p-2 rounded cursor-pointer bg-gray-50 hover:bg-gray-100 ${errors.image ? 'border-red-500' : ''}`}>
                  Choose File
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="hidden"
                    onChange={handleChange}
                  />
                </label>
              )}

              {fileName && (
                <div className="flex items-center gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowPreview(true)}
                    className="text-blue-600 underline text-sm"
                  >
                    {fileName}
                  </button>
                  <button
                    type="button"
                    onClick={removeImage}
                    className="text-red-600 font-bold"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>

            {/* TIME */}
            <div ref={el => refs.current.time = el}>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="date"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full border p-2 rounded ${errors.time ? 'border-red-500' : ''}`}
              />
            </div>

            {/* ORGANIZER */}
            <div ref={el => refs.current.organizer = el}>
              <label className="block mb-1 font-medium">Organizer</label>
              <input
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
                className={`w-full border p-2 rounded ${errors.organizer ? 'border-red-500' : ''}`}
                placeholder="Nama penyelenggara"
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

      {/* IMAGE PREVIEW */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setShowPreview(false)}
            >
              ✕
            </button>
            <img src={previewUrl} className="max-w-[80vw] max-h-[80vh]" />
          </div>
        </div>
      )}
    </div>
  );
}
