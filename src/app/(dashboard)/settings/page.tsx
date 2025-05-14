'use client';

import React, { useState } from 'react';

const Settings = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    language: 'English',
    theme: 'Light',
    twoFactorAuth: false,
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (name in form.notifications) {
      setForm((prev) => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [name]: checked,
        },
      }));
    } else if (name === 'twoFactorAuth') {
      setForm((prev) => ({ ...prev, twoFactorAuth: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Profile Settings */}
      <section className="border rounded p-4 space-y-4">
        <h2 className="text-xl font-semibold">Profile Settings</h2>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full border p-2 rounded"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          type="password"
          placeholder="New Password"
          className="w-full border p-2 rounded"
        />
      </section>

      {/* Preferences */}
      <section className="border rounded p-4 space-y-4">
        <h2 className="text-xl font-semibold">Account Preferences</h2>
        <div>
          <label className="block font-medium">Language</label>
          <select
            name="language"
            value={form.language}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Theme</label>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Light</option>
            <option>Dark</option>
            <option>System Default</option>
          </select>
        </div>
      </section>

      {/* Security */}
      <section className="border rounded p-4 space-y-4">
        <h2 className="text-xl font-semibold">Security</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="twoFactorAuth"
            checked={form.twoFactorAuth}
            onChange={handleChange}
          />
          Enable Two-Factor Authentication
        </label>
        <p className="text-sm text-gray-500">
          For added security, use 2FA when logging in.
        </p>
      </section>

      {/* Notifications */}
      <section className="border rounded p-4 space-y-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="email"
            checked={form.notifications.email}
            onChange={handleChange}
          />
          Email Notifications
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="sms"
            checked={form.notifications.sms}
            onChange={handleChange}
          />
          SMS Notifications
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="push"
            checked={form.notifications.push}
            onChange={handleChange}
          />
          Push Notifications
        </label>
      </section>

      {/* Privacy Settings */}
      <section className="border rounded p-4 space-y-4">
        <h2 className="text-xl font-semibold">Privacy</h2>
        <p className="text-sm text-gray-600">
          You can control who sees your profile and activity.
        </p>
        <label className="block">
          <select className="w-full border p-2 rounded">
            <option>Everyone</option>
            <option>Only Friends</option>
            <option>Only Me</option>
          </select>
        </label>
      </section>

      {/* Delete Account */}
      <section className="border rounded p-4 space-y-2 bg-red-50">
        <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
        <p className="text-sm text-gray-700">
          Deleting your account is permanent and cannot be undone.
        </p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Delete My Account
        </button>
      </section>
    </div>
  );
};

export default Settings;
