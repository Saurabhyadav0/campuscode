"use client";

import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import Toast styles

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const notify = () => toast.success("✅ Details submitted successfully!");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwxmKid-crHTSDlbKzEOWBEYCp2RjbtdZqKRHWcZ6yFNQYcMQ4YYr1mF2d-ENJUPalQ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        notify(); // ✅ Show toast notification
        if (e.currentTarget) {
          e.currentTarget.reset(); // ✅ Reset form
        }
      } else {
        toast.error("⚠️ Submission failed! Please try again.");
      }
    } catch (error) {
      console.error("❌ Submission Error:", error);
      toast.error("❌ Error submitting form. Check your internet connection.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Registration Form
        </h2>

        {/* ✅ Toast Container Must Be Rendered in JSX */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />

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
