"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const generateProperties = () =>
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Property ${i + 1}`,
    description: `Spacious and cozy unit #${i + 1}`,
  }));

const Rent = () => {
  const [properties] = useState(generateProperties());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAd(true);
    }, 60000); // 60 seconds

    return () => clearInterval(interval);
  }, []);

  const closeAd = () => {
    setShowAd(false);
  };

  const paginated = properties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < Math.ceil(properties.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Rent Available</h1>

      {/* Table */}
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Name</th>
            <th className="border px-3 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map((item) => (
            <tr key={item.id} className="odd:bg-white even:bg-gray-50">
              <td className="border px-3 py-2">
                <Link href={`/rent/${item.id}`} className="text-blue-500 hover:underline">
                  {item.id}
                </Link>
              </td>
              <td className="border px-3 py-2">{item.name}</td>
              <td className="border px-3 py-2">
                <Link href={`/rent/${item.id}`} className="text-indigo-600 hover:underline">
                  {item.description}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="bg-gray-300 text-black px-3 py-1 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm font-medium">Page {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(properties.length / itemsPerPage)}
          className="bg-gray-300 text-black px-3 py-1 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Annoying Ad Pop-up */}
      {showAd && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center relative">
            <h2 className="text-xl font-bold mb-2">🔥 Hot Deal!</h2>
            <p className="text-sm">Check out this beautiful 5-bedroom house in Banana Island!</p>
            <img
              src="/house-ad.jpg"
              alt="House Ad"
              className="w-full h-40 object-cover my-3 rounded"
            />
            <button
              onClick={closeAd}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rent;
