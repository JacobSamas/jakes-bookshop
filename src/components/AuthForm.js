"use client";

import { useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto space-y-6"
    >
      <h1 className="text-4xl font-bold text-center">
        {type === "login" ? "Login" : "Sign Up"}
      </h1>

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full p-4 rounded-md border border-gray-300"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={handleChange}
        className="w-full p-4 rounded-md border border-gray-300"
      />

      {type === "signup" && (
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          className="w-full p-4 rounded-md border border-gray-300"
        />
      )}

      <button
        type="submit"
        className="bg-primary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-secondary transition w-full"
      >
        {type === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
