"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Upcoming", href: "#" },
    { name: "Latest", href: "#" },
    { name: "Popular", href: "#" },
    { name: "Top Rated", href: "#" },
  ];

  return (
    <header className="sticky shadow-lg top-0  w-full p-4 z-50 bg-black/70 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
          LOGO
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              onClick={() => setActive(item.name)}
              href={item.href}
              className={`text-sm cursor-pointer rounded-xl px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-600 transition ${
  active === item.name ? "font-bold bg-gray-600" : ""
}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-white" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </header>

  );
};

export default Navbar;