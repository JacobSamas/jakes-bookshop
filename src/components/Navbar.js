"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import AuthModal from "@/components/AuthModal";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // 'login', 'signup', 'reset'
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { items, orders } = useSelector((state) => state.cart);

  const mobileMenuRef = useRef(null);
  const logoRef = useRef(null);

  // Animate Logo
  useEffect(() => {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Animate Mobile Menu
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

  // Open Auth Modal
  const handleAuthClick = (type) => {
    setModalType(type);
    setAuthModalOpen(true);
  };

  // Close Auth Modal
  const handleCloseAuthModal = () => {
    setAuthModalOpen(false);
    setModalType(null);
  };

  return (
    <>
      <nav className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link
            href="/"
            ref={logoRef}
            className="text-2xl font-bold hover:text-secondary transition"
          >
            Jake&apos;s Bookshop
          </Link>

          <div className="hidden md:flex space-x-6 items-center">
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

            <Link href="/orders" aria-label="Orders" className="relative">
              <ReceiptLongIcon
                fontSize="large"
                className="hover:text-secondary transition"
              />
              {orders.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-green-500 text-white rounded-full px-2 py-1 text-sm">
                  {orders.length}
                </span>
              )}
            </Link>

            <Link href="/favorites" aria-label="Favorites">
              <FavoriteIcon
                fontSize="large"
                className="hover:text-secondary transition"
              />
            </Link>

            <button
              onClick={() => handleAuthClick("login")}
              className="hover:text-secondary transition font-medium"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>

          <button
            className="md:hidden focus:outline-none"
            aria-label={navOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setNavOpen(!navOpen)}
          >
            <MenuIcon fontSize="large" className="animate-pulse" />
          </button>
        </div>

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
            href="/orders"
            onClick={() => setNavOpen(false)}
            className="hover:text-secondary transition"
          >
            Orders
          </Link>
          <Link
            href="/favorites"
            onClick={() => setNavOpen(false)}
            className="hover:text-secondary transition"
          >
            Favorites
          </Link>
          <button
            onClick={() => handleAuthClick("login")}
            className="hover:text-secondary transition font-medium"
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>

      {/* Auth Modal */}
      <AuthModal
        type={modalType}
        isOpen={isAuthModalOpen}
        onClose={handleCloseAuthModal}
        onSwitch={handleAuthClick}
      />
    </>
  );
};

export default Navbar;
