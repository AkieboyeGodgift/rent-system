"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useParams } from "next/navigation";

const VercelLogo = () => (
  <svg
    viewBox="0 0 283 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-auto max-w-[60px]"
  >
    <path d="M141.678 0L0 64h283L141.678 0z" fill="white" />
  </svg>
);

const Header = () => {
  const path = useParams();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <header className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Vercel Logo */}
        <Link href="/" aria-label="Vercel Home" passHref>
          <VercelLogo />
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="hidden md:flex space-x-10 text-white text-sm font-medium">
            <li>
              <Link href="/forsale" className="hover:text-purple-400 transition">
                For Sale
              </Link>
            </li>
            <li>
              <Link href="/forrent" className="hover:text-purple-400 transition">
                For Rent
              </Link>
            </li>
            <li>
              <Link href="/findagent" className="hover:text-purple-400 transition">
                Find an Agent
              </Link>
            </li>
          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-3">
          <Link href="/signup" passHref>
            <Button className="flex items-center gap-2 bg-white text-black border border-transparent hover:bg-gray-200 transition">
              <Plus className="h-5 w-5" /> Post your Ad
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              variant="outline"
              className="text-black border-white hover:bg-white hover:text-black transition"
            >
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
