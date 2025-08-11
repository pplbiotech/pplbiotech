import React from "react";

export default function ContactUs() {
  return (
    <section id="contact" className="w-full max-w-xl mx-auto py-10 px-4 flex flex-col items-center">
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 text-primary">Contact Us</h2>
      <div className="mb-6 w-full text-left">
        <div className="mb-2">📍 <b>Head Office:</b> 24/409, Trilokpuri, East Delhi, Delhi-110009</div>
        <div>📞 <b>Phone:</b> <a href="tel:+919560325360" className="text-blue-600 underline">+91 95603 25360</a></div>
      </div>
      <form
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeq5P5XimAZaaBegVhaQYZ132Na7Y6M4TFPbyX-Lb4KmZDykw/formResponse"
        method="POST"
        target="_blank"
        className="w-full flex flex-col gap-4"
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
    </section>
  );
}
