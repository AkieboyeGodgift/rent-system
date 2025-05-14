'use client';

import { useState } from 'react';

const Sell = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [listings, setListings] = useState<any[]>([]);

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm((prev) => ({ ...prev, image: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.image) return alert('Please upload an image');

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('price', form.price);
    formData.append('description', form.description);
    formData.append('image', form.image);

    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to upload');

      const data = await res.json();

      setListings((prev) => [...prev, data]);
      setForm({ title: '', price: '', description: '', image: null });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      alert('Upload failed. Please try again.');
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Sell or Lease Property</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="title"
          type="text"
          placeholder="Property Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="price"
          type="number"
          placeholder="Price (₦)"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Calming popup */}
      {submitted && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded shadow">
          ✅ Your property has been submitted successfully.
        </div>
      )}

      {/* Listing */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Your Listings</h2>
        {listings.length === 0 && <p>No listings yet.</p>}
        <div className="grid md:grid-cols-2 gap-4">
          {listings.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow bg-white space-y-2"
            >
              <img
                src={`/uploads/${item.image}`}
                alt="Uploaded property"
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-600">₦{item.price}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sell;
