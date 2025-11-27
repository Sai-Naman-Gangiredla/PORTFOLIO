"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent default form submission behavior
    setIsSubmitting(true);

    // send form data to Formspree
    const form = e.currentTarget;
    const formData = new FormData(form);

    fetch("https://formspree.io/f/myzqkopj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        setIsSubmitting(false);
        if (res.ok) {
          setIsSuccess(true);
          form.reset(); // clear form

          // auto-hide popup after 3 seconds
          setTimeout(() => {
            setIsSuccess(false);
          }, 3000);
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      {/* SUCCESS POPUP with dark glassmorphism */}
      {isSuccess && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-md border border-gray-700 p-8 rounded-3xl text-center shadow-xl w-80 transform scale-90 opacity-0 animate-popup">
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              Message Sent!
            </h2>
            <p className="text-gray-300">
              Thanks for contacting me. I will get back to you soon.
            </p>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-8"
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
          ${!isSubmitting
            ? "hover:-translate-y-1 hover:shadow-[0_5px_25px_rgba(59,130,246,0.5)]"
            : "opacity-60 cursor-not-allowed"
          }`}
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

      {/* POPUP ANIMATION */}
      <style jsx>{`
        @keyframes popup {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-popup {
          animation: popup 0.4s ease forwards;
        }
      `}</style>
    </>
  );
};

export default ContactForm;
