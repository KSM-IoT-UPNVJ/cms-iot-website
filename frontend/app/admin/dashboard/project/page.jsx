'use client';

import { useState, useRef } from "react";
import Nav from "@/component/nav";

export default function ProjectsForm() {
  const [formData, setFormData] = useState({
    id: '',
    slug: '',
    title: '',
    githubLink: '',
    description: '',
    division: '',
    date: '',
    divisionImage: null,
    image: null,
    subtitle2: '',
    description2: '',
    image2: null,
    subtitle3: '',
    description3: '',
  });

  const [fileNames, setFileNames] = useState({
    divisionImage: '',
    image: '',
    image2: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [previewImage, setPreviewImage] = useState('');

  const fieldRefs = useRef({});

  const isInvalid = (value) => !value;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setFileNames({ ...fileNames, [name]: files[0]?.name || '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const removeImage = (name) => {
    setFormData({ ...formData, [name]: null });
    setFileNames({ ...fileNames, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const requiredFields = [
      'id','slug','title','githubLink','description','division','date',
      'divisionImage','image',
      'subtitle2','description2','subtitle3','description3'
    ];

    const emptyField = requiredFields.find((key) => !formData[key]);

    if (emptyField) {
      setShowAlert(true);
      fieldRefs.current[emptyField]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    alert("Project berhasil disimpan!");
  };

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-screen bg-gray-100">

      <Nav />


      <div className="flex items-start p-8 pt-20">
        <div className="bg-white w-full rounded-xl p-10 shadow">

          {showAlert && (
            <div className="mb-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              Semua field wajib diisi sebelum submit.
            </div>
          )}

          <h2 className="text-2xl font-bold mb-8">Project Form</h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* ID */}
            <div ref={el => fieldRefs.current.id = el}>
              <label className="block mb-1 font-medium">ID</label>
              <input
                type="number"
                name="id"
                placeholder="Contoh: 1"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.id) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* SLUG */}
            <div ref={el => fieldRefs.current.slug = el}>
              <label className="block mb-1 font-medium">Slug</label>
              <input
                type="text"
                name="slug"
                placeholder="Contoh: smart-irrigation"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.slug) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* TITLE */}
            <div ref={el => fieldRefs.current.title = el}>
              <label className="block mb-1 font-medium">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Masukkan Title"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.title) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* GITHUB LINK */}
            <div ref={el => fieldRefs.current.githubLink = el}>
              <label className="block mb-1 font-medium">Github Link</label>
              <input
                type="text"
                name="githubLink"
                placeholder="https://github.com/username/project"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.githubLink) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* DESCRIPTION */}
            <div ref={el => fieldRefs.current.description = el}>
              <label className="block mb-1 font-medium">Description</label>
              <textarea
                name="description"
                placeholder="Masukkan Description"
                rows={4}
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.description) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* DIVISION */}
            <div ref={el => fieldRefs.current.division = el}>
              <label className="block mb-1 font-medium">Division</label>
              <input
                type="text"
                name="division"
                placeholder="IoT / AI / Web"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.division) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* IMAGES */}
            <div>
              <label className="block mb-2 font-medium">Images</label>
              <div className="grid grid-cols-3 gap-4">

                {['divisionImage','image','image2'].map((key) => (
                  <div key={key} ref={el => fieldRefs.current[key] = el} className="text-center">
                    <label className={`border rounded p-2 cursor-pointer block bg-gray-50 hover:bg-gray-100 ${submitted && isInvalid(formData[key]) ? 'border-red-500' : ''}`}>
                      Choose File
                      <input
                        type="file"
                        name={key}
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>

                    {fileNames[key] && (
                      <div className="flex items-center justify-center gap-2 mt-1 text-sm">
                        <button
                          type="button"
                          onClick={() => setPreviewImage(URL.createObjectURL(formData[key]))}
                          className="text-blue-600 underline truncate max-w-[120px]"
                        >
                          {fileNames[key]}
                        </button>
                        <button
                          type="button"
                          onClick={() => removeImage(key)}
                          className="text-red-600 font-bold"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* DATE */}
            <div ref={el => fieldRefs.current.date = el}>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.date) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* SUBTITLE & DESCRIPTION 2 */}
            <div ref={el => fieldRefs.current.subtitle2 = el}>
              <label className="block mb-1 font-medium">Subtitle 2</label>
              <input
                type="text"
                name="subtitle2"
                placeholder="Masukkan Subtitle 2"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.subtitle2) ? 'border-red-500' : ''}`}
              />
            </div>

            <div ref={el => fieldRefs.current.description2 = el}>
              <label className="block mb-1 font-medium">Description 2</label>
              <textarea
                name="description2"
                rows={3}
                placeholder="Masukkan Description 2"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.description2) ? 'border-red-500' : ''}`}
              />
            </div>

            {/* SUBTITLE & DESCRIPTION 3 */}
            <div ref={el => fieldRefs.current.subtitle3 = el}>
              <label className="block mb-1 font-medium">Subtitle 3</label>
              <input
                type="text"
                name="subtitle3"
                placeholder="Masukkan Subtitle 3"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.subtitle3) ? 'border-red-500' : ''}`}
              />
            </div>

            <div ref={el => fieldRefs.current.description3 = el}>
              <label className="block mb-1 font-medium">Description 3</label>
              <textarea
                name="description3"
                rows={3}
                placeholder="Masukkan Description 3"
                onChange={handleChange}
                className={`w-full border p-2 rounded ${submitted && isInvalid(formData.description3) ? 'border-red-500' : ''}`}
              />
            </div>

            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Submit
            </button>

          </form>
        </div>
      </div>

      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg">
            <button
              onClick={() => setPreviewImage('')}
              className="absolute -top-3 -right-3 bg-red-600 text-white w-8 h-8 rounded-full"
            >
              ✕
            </button>
            <img src={previewImage} className="max-h-[75vh] max-w-[75vw] rounded" />
          </div>
        </div>
      )}
    </div>
  );
}
