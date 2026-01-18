"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isLoading = status === "loading";

  return (
    <header className="relative z-50 border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-neutral-900">
          Trion Mart
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm text-neutral-700 hover:text-neutral-900">
            Home
          </Link>
          <Link href="/products" className="text-sm text-neutral-700 hover:text-neutral-900">
            Products
          </Link>
          {session && (
            <Link href="/dashboard" className="text-sm text-neutral-700 hover:text-neutral-900">
              Dashboard
            </Link>
          )}
          
          {!isLoading && (
            <>
              {session ? (
                <div className="relative z-50" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 text-xs font-medium text-white">
                      {session.user?.name?.charAt(0)?.toUpperCase() || session.user?.email?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <span className="hidden sm:inline">
                      {session.user?.name || session.user?.email?.split("@")[0]}
                    </span>
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-48 rounded-lg border border-neutral-200 bg-white shadow-lg">
                      <div className="border-b border-neutral-200 px-4 py-3">
                        <p className="text-sm font-medium text-neutral-900">
                          {session.user?.name || "User"}
                        </p>
                        <p className="text-xs text-neutral-600">
                          {session.user?.email}
                        </p>
                      </div>
                      <div className="py-1">
                        <Link
                          href="/dashboard"
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            signOut({ callbackUrl: "/login" });
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                        >
                          Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 hover:border-neutral-400"
                >
                  Sign in
                </Link>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}