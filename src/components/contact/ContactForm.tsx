"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      {/* SUCCESS POPUP */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#111] border border-[#2a2a2a] p-8 rounded-2xl text-center shadow-xl">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Message Sent!
            </h2>
            <p className="text-gray-300 mb-6">
              Thanks for contacting me. I will get back to you soon.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <form
        action="https://formspree.io/f/myzqkopj"
        method="POST"
        className="w-full flex flex-col gap-8"
        onSubmit={() => {
          setIsSubmitting(true);

          // Wait for Formspree redirect to finish
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
          }, 1500);
        }}
      >
        {/* NAME */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-300 uppercase tracking-wide text-sm">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="bg-[#0c0c0c] border border-[#2a2a2a] text-gray-200 rounded-2xl px-5 py-3 
            focus:border-blue-500 focus:shadow-[0_0_15px_#2563eb] outline-none transition 
            placeholder:text-gray-500"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-300 uppercase tracking-wide text-sm">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="bg-[#0c0c0c] border border-[#2a2a2a] text-gray-200 rounded-2xl px-5 py-3 
            focus:border-blue-500 focus:shadow-[0_0_15px_#2563eb] outline-none transition 
            placeholder:text-gray-500"
          />
        </div>

        {/* SUBJECT */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-300 uppercase tracking-wide text-sm">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="Enter subject"
            className="bg-[#0c0c0c] border border-[#2a2a2a] text-gray-200 rounded-2xl px-5 py-3 
            focus:border-blue-500 focus:shadow-[0_0_15px_#2563eb] outline-none transition 
            placeholder:text-gray-500"
          />
        </div>

        {/* MESSAGE */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-300 uppercase tracking-wide text-sm">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Enter your message"
            className="bg-[#0c0c0c] border border-[#2a2a2a] text-gray-200 rounded-2xl px-5 py-3 
            focus:border-blue-500 focus:shadow-[0_0_15px_#2563eb] outline-none transition 
            placeholder:text-gray-500 resize-none"
          ></textarea>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 rounded-2xl text-white font-semibold 
          bg-gradient-to-r from-blue-600 to-purple-600 
          shadow-[0_0_20px_rgba(59,130,246,0.4)] 
          transition transform
          ${
            !isSubmitting
              ? "hover:-translate-y-1 hover:shadow-[0_5px_25px_rgba(59,130,246,0.5)]"
              : "opacity-60 cursor-not-allowed"
          }
        `}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
