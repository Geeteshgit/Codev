"use client";

import { RootState } from "@/redux/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import { LuUser } from "react-icons/lu";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (href) => {
    return path === href ? "text-blue-500" : "hover:text-blue-500 transition";
  };

  return (
    <header className="sticky top-0 left-0 z-[999] black-bg h-18 flex justify-between items-center border-b border-white/10 px-4 sm:px-12 lg:px-20">
      <div className="logo">
        <Link href="/">
          <h2 className="text-2xl font-semibold text-blue-500 text-shadow-blue">
            {"<"}Codev{" />"}
          </h2>
        </Link>
      </div>
      <span 
        className="sm:hidden text-4xl"
        onClick={() => setIsOpen(!isOpen)}>
        <CgMenuRight />
      </span>
      <nav className={`fixed sm:static flex flex-col sm:flex-row items-center gap-5 text-lg top-25 transition-all duration-500 ${isOpen ? 'right-5' : '-right-full'}`}>
        <Link href="/explore" className={linkClass("/explore")} onClick={() => setIsOpen(false)}>
          Explore
        </Link>
        <Link href="/discuss" className={linkClass("/discuss")} onClick={() => setIsOpen(false)}>
          Discuss
        </Link>
        {user ? (
          <div className="flex items-center gap-5">
            <Link href="/dashboard" className={linkClass("/dashboard")} onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
            <h3 className="hidden sm:flex items-center gap-1">
              <LuUser />
              {user?.username}
            </h3>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="px-2 sm:px-4 text-sm sm:text-base py-1.5 border border-white/20 rounded-sm hover:bg-zinc-800 hover:border-transparent hover:scale-102 transition-all duration-300"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-2 sm:px-4 text-sm sm:text-base py-1.5 bg-blue-500 border border-transparent rounded-sm hover:bg-blue-600 hover:scale-102 transition-all duration-300"
            >
              Signup
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
