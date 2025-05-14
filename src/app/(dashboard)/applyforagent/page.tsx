'use client';

import React, { useState } from 'react';

const ApplyForAgent = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    location: '',
    bio: '',
    agreed: false,
  });

  const [files, setFiles] = useState({
    profilePicture: null as File | null,
    idUpload: null as File | null,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: any) => {
    const { name, files: selected } = e.target;
    setFiles((prev) => ({ ...prev, [name]: selected[0] }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Submitted form:', form);
    console.log('Uploaded files:', files);
    alert('Application submitted!');
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Apply to Become an Agent</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={form.experience}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Service Area (e.g. Lagos, Nigeria)"
          value={form.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="bio"
          placeholder="Tell us about yourself"
          value={form.bio}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={4}
          required
        />

        <div className="space-y-2">
          <label className="block">Upload a Valid ID or License</label>
          <input
            type="file"
            name="idUpload"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block">Upload Profile Picture</label>
          <input
            type="file"
            name="profilePicture"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="agreed"
            checked={form.agreed}
            onChange={handleChange}
            required
          />
          I confirm all provided information is accurate and I agree to the terms.
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForAgent;
