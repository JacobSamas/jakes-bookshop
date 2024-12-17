"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { gsap } from "gsap";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { items } = useSelector((state) => state.cart);

  const mobileMenuRef = useRef(null);
  const logoRef = useRef(null);

  // Logo Animation
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Mobile Menu Animation
  useEffect(() => {
    if (navOpen) {
      gsap.to(mobileMenuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [navOpen]);

  // Toggle Login/Logout
  const handleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
    setNavOpen(false);
  };

  return (
    <nav className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Animated Logo */}
        <Link
          href="/"
          ref={logoRef}
          className="text-2xl font-bold hover:text-secondary transition"
        >
          Jake&apos;s Bookshop
        </Link>

        {/* Desktop & Mobile Icons */}
        <div className="flex space-x-6 items-center">
          <Link href="/cart" aria-label="Cart" className="relative">
            <ShoppingCartIcon
              fontSize="large"
              className="hover:text-secondary transition"
            />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 py-1 text-sm">
                {items.length}
              </span>
            )}
          </Link>

          <Link href="/favorites" aria-label="Favorites">
            <FavoriteIcon
              fontSize="large"
              className="hover:text-secondary transition"
            />
          </Link>

          {/* Login/Logout Button (Desktop Only) */}
          <button
            onClick={handleAuth}
            className="hover:text-secondary transition font-medium hidden md:inline-block"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden focus:outline-none"
            aria-label={navOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setNavOpen(!navOpen)}
          >
            <MenuIcon fontSize="large" className="animate-pulse" />
          </button>
        </div>
      </div>

      {/* Right-Side Half-Page Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-1/2 bg-black bg-opacity-90 z-50 flex flex-col justify-start items-start p-8 space-y-8 text-xl translate-x-full"
      >
        <button
          className="absolute top-6 right-6 text-white"
          aria-label="Close Menu"
          onClick={() => setNavOpen(false)}
        >
          <CloseIcon fontSize="large" />
        </button>

        <Link
          href="/"
          onClick={() => setNavOpen(false)}
          className="hover:text-secondary transition"
        >
          Home
        </Link>
        <Link
          href="/cart"
          onClick={() => setNavOpen(false)}
          className="hover:text-secondary transition"
        >
          Cart
        </Link>
        <Link
          href="/favorites"
          onClick={() => setNavOpen(false)}
          className="hover:text-secondary transition"
        >
          Favorites
        </Link>
        <button
          onClick={handleAuth}
          className="hover:text-secondary transition font-medium"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
