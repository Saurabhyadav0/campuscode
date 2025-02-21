"use client";

import React, { useState } from "react";

const Registration = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries()); // Convert FormData to object

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyjdsAM-46Qc4rCSY1YP7iMsAZOk7U12xolqV9HvRyPGSwMOgXrAzErbhWVEuI545Pf/exec", // ✅ Replace with the new URL from Google Apps Script
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // ✅ Ensures correct encoding
          },
          body: new URLSearchParams(formObject as Record<string, string>).toString(),
        }
      );

      const result = await response.json(); // ✅ Parse JSON response properly

      if (result.status === "Success") {
        alert("✅ Details submitted successfully!");
        e.currentTarget.reset(); // ✅ Reset form after submission
      } else {
        alert("⚠️ Submission failed. Try again.");
      }
    } catch (error) {
      console.error("❌ Submission Error:", error);
      alert("❌ Error submitting form. Check your internet connection.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          {/* Name */}
          <label htmlFor="name" className="font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="Name"
            required
            className="p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Email */}
          <label htmlFor="email" className="font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            required
            className="p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Contact */}
          <label htmlFor="contact" className="font-medium text-gray-700">
            Contact No:
          </label>
          <input
            type="tel"
            id="contact"
            name="Contact"
            required
            className="p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* College */}
          <label htmlFor="college" className="font-medium text-gray-700">
            College:
          </label>
          <input
            type="text"
            id="college"
            name="College"
            required
            className="p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Branch */}
          <label htmlFor="branch" className="font-medium text-gray-700">
            Branch:
          </label>
          <input
            type="text"
            id="branch"
            name="Branch"
            required
            className="p-2 border border-gray-300 rounded mb-4 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Year */}
          <label htmlFor="year" className="font-medium text-gray-700">
            Year:
          </label>
          <input
            type="number"
            id="year"
            name="Year"
            required
            className="p-2 border border-gray-300 rounded mb-6 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition-all disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
