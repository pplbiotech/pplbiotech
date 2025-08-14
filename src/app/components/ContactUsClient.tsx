"use client";
import React, { useRef, useState } from "react";

export default function ContactUsClient() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      mode: "no-cors",
    });
    form.reset();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <section id="contact" className="w-full max-w-xl mx-auto py-10 px-4 sm:px-6 md:px-8 flex flex-col items-center mb-32">
      <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 text-primary">Contact Us</h2>
      <div className="mb-6 w-full text-left">
        <div className="mb-2">📍 <b>Head Office:</b> 24/409, Trilokpuri, East Delhi, Delhi-110009</div>
        <div>📞 <b>Phone:</b> <a href="tel:+919560325360" className="text-blue-600 underline">+91 95603 25360</a></div>
      </div>
      <form
        ref={formRef}
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeq5P5XimAZaaBegVhaQYZ132Na7Y6M4TFPbyX-Lb4KmZDykw/formResponse"
        method="POST"
        className="w-full flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <input name="entry.396514389" type="text" required placeholder="Your Name" className="border rounded px-3 py-2" />
        <input name="entry.48211661" type="email" required placeholder="Your Email" className="border rounded px-3 py-2" />
        <textarea name="entry.336662514" required placeholder="Your Message" className="border rounded px-3 py-2" rows={4} />
        <button
          type="submit"
          className="bg-white border-2 border-primary font-extrabold py-4 px-10 rounded-lg text-xl shadow-lg mt-2 flex items-center justify-center transition-all duration-200"
          style={{
            background: 'white',
            borderColor: '#60ad5e',
            boxShadow: '0 2px 12px 0 rgba(96,173,94,0.10)',
            color: '#60ad5e',
          }}
        >
          <span style={{
            background: 'linear-gradient(90deg, #60ad5e 0%, #fbc02d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800,
          }}>
            Send
          </span>
        </button>
      </form>
      {showToast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-primary text-green-700 font-bold text-lg px-6 py-3 rounded-lg shadow-lg z-50">
          Success! Your message was sent.
        </div>
      )}
    </section>
  );
}
