"use client";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-8">
      <div className="container mx-auto text-center space-y-6">
        <h1 className="text-3xl font-bold hover:text-secondary transition">
          Jake&apos;s Bookshop
        </h1>

        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Jake&apos;s Bookshop. All Rights
          Reserved.
        </p>

        <div className="flex justify-center space-x-8 mt-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition text-lg font-medium"
            aria-label="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition text-lg font-medium"
            aria-label="Terms of Service"
          >
            Terms of Service
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition text-lg font-medium"
            aria-label="Contact Us"
          >
            Contact Us
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Twitter"
            className="hover:text-secondary transition"
          >
            <TwitterIcon fontSize="large" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className="hover:text-secondary transition"
          >
            <FacebookIcon fontSize="large" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="hover:text-secondary transition"
          >
            <InstagramIcon fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
