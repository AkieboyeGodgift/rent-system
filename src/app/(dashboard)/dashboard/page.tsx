"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import visaLogo from "/public/visa.png"; // Make sure you have a visa logo in public/assets

export default function DashboardPage() {
  const [balance] = useState("$15,000");
  const [profit] = useState("$4,200");

  const rentalProperties = [
    { id: 1, title: "2 Bed Apartment in Lekki" },
    { id: 2, title: "3 Bed Bungalow in Ikeja" },
  ];

  const buyProperties = [
    { id: 1, title: "4 Bed Duplex in Abuja" },
    { id: 2, title: "Luxury Condo in Victoria Island" },
  ];

  const agents = [
    { id: 1, name: "Chinedu Martins" },
    { id: 2, name: "Grace Adebayo" },
  ];

  return (
    <div className="p-[5px] space-y-[5px]">
      {/* Top row with balance and profit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[5px]">
        {/* Realistic Visa Card */}
        <div className="relative w-full h-48 perspective">
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
            {/* Front of card */}
            <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 flex flex-col justify-between shadow-lg">
              <div className="text-sm">Visa Card</div>
              <div className="text-lg tracking-widest font-mono flex justify-between items-center">
                <span>**** **** **** 1234</span>
                <span className="text-[25px] font-bold">{balance}</span>
              </div>              <div className="flex justify-between items-center">
                <div className="text-sm">Card Holder</div>
                <Image src={visaLogo} alt="Visa" width={50} height={20} />
              </div>
            </div>
            {/* Back of card */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl bg-gray-800 text-white p-6 shadow-lg">
              <div className="text-sm mb-2">CVV: ***</div>
              <div className="bg-gray-700 h-8 w-full"></div>
              <div className="text-right mt-4 text-xs">Customer Service: 123-456-789</div>
            </div>
          </div>
        </div>

        {/* Profit Card */}
        <Card className="shadow-md bg-green-500 relative overflow-hidden text-white transform transition-transform duration-300 hover:scale-105">
          <CardContent className="p-[10px] relative z-10 self-center">
            <h3 className="text-xl font-bold">Profit</h3>
            <p className="text-5xl mt-2 font-bold">{profit}</p>
          </CardContent>
          <div className="absolute right-4 bottom-4 text-[100px] text-white opacity-10 font-bold select-none pointer-events-none">
            $
          </div>
        </Card>
      </div>

      {/* Column for other cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[5px]">
        <Card className="shadow-md col-span-1 lg:col-span-3">
          <CardContent className="p-[5px]">
            <h3 className="text-lg font-semibold mb-3">Properties to Rent</h3>
            <table className="w-full text-left border border-collapse border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">ID</th>
                  <th className="border px-2 py-1">Title</th>
                </tr>
              </thead>
              <tbody>
                {rentalProperties.map((property) => (
                  <tr key={property.id} className="odd:bg-white even:bg-gray-50">
                    <td className="border px-2 py-1">{property.id}</td>
                    <td className="border px-2 py-1">{property.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="shadow-md col-span-1 lg:col-span-3">
          <CardContent className="p-[5px]">
            <h3 className="text-lg font-semibold mb-3">Properties to Buy</h3>
            <table className="w-full text-left border border-collapse border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">ID</th>
                  <th className="border px-2 py-1">Title</th>
                </tr>
              </thead>
              <tbody>
                {buyProperties.map((property) => (
                  <tr key={property.id} className="odd:bg-white even:bg-gray-50">
                    <td className="border px-2 py-1">{property.id}</td>
                    <td className="border px-2 py-1">{property.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card className="shadow-md col-span-1 lg:col-span-3">
          <CardContent className="p-[5px]">
            <h3 className="text-lg font-semibold mb-3">Agents to Contact</h3>
            <table className="w-full text-left border border-collapse border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">ID</th>
                  <th className="border px-2 py-1">Name</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr key={agent.id} className="odd:bg-white even:bg-gray-50">
                    <td className="border px-2 py-1">{agent.id}</td>
                    <td className="border px-2 py-1">{agent.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .hover\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
