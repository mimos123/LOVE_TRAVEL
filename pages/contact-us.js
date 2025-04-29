import Image from "next/image";
import { useEffect, useRef } from "react";
import Footer from "../components/Footer";

// SVG icons from svgrepo.com (inline SVG) - Filled style
const LocationIcon = () => (
  <span className="inline-block bg-indigo-100 rounded-full p-4 mb-4">
    <svg width="36" height="36" fill="#6366f1" viewBox="0 0 24 24">
      <path d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 10.62 8.13 11.37a1 1 0 0 0 1.13 0C13.89 21.62 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 18.54C10.13 18.13 5 14.06 5 11c0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.06-5.13 7.13-7 9.54z"/>
      <circle cx="12" cy="11" r="3" fill="#6366f1"/>
    </svg>
  </span>
);

const PhoneIcon = () => (
  <span className="inline-block bg-indigo-100 rounded-full p-4 mb-4">
    <svg width="36" height="36" fill="#6366f1" viewBox="0 0 24 24">
      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.21c1.12.45 2.33.69 3.58.69a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.24 2.46.69 3.58a1 1 0 0 1-.21 1.11l-2.2 2.2z"/>
    </svg>
  </span>
);

const MailIcon = () => (
  <span className="inline-block bg-indigo-100 rounded-full p-4 mb-4">
    <svg width="36" height="36" fill="#6366f1" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="3" fill="#6366f1"/>
      <path d="M3 6l9 7 9-7" fill="#fff"/>
    </svg>
  </span>
);

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section with CSS Parallax */}
      <div
        className="w-full h-[420px] md:h-[500px] parallax"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold">Contact Us</h1>
        </div>
      </div>

      {/* Info Columns */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-16 px-4">
        {/* Location */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <LocationIcon />
            <h3 className="font-bold text-lg mb-0">Location</h3>
          </div>
          <div className="text-gray-700 text-base font-semibold mb-4">
            1628 Michigan Ave, Miami Beach<br />
            FL 33139, United States
          </div>
          <div className="text-gray-500 text-base font-semibold">
            2001 Biscayne Blvd, Miami<br />
            FL 33137, United States
          </div>
        </div>
        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <PhoneIcon />
            <h3 className="font-bold text-lg mb-0">Call</h3>
          </div>
          <div className="text-gray-700 text-base font-semibold mb-4">
            Paul Davis "Tour Consultant" : +1 629 562 583<br />
            Amy Moore "Local Guide" : +1 483 842 205
          </div>
          <div className="text-gray-500 text-base font-semibold">
            Administration : +1 134 018 482<br />
            Technical Office : +1 988 985 836
          </div>
        </div>
        {/* Mail */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4">
            <MailIcon />
            <h3 className="font-bold text-lg mb-0">Write</h3>
          </div>
          <div className="text-gray-700 text-base font-semibold mb-4">
            Write to this email for a detailed quotation<br />
            <a href="mailto:quote@travel.com" className="text-indigo-600 underline">quote@travel.com</a> and information.
          </div>
          <div className="text-gray-500 text-base font-semibold">
            Our free consultation service can be requested here<br />
            <a href="mailto:info@travel.com" className="text-indigo-600 underline">info@travel.com</a> every day.
          </div>
        </div>
      </div>

      {/* Get in Touch Form & Map Row */}
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-8 mb-12 px-4">
        {/* Get in Touch Form */}
        <div className="flex-1 flex items-center">
          <div className="w-full bg-white/90 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="text-indigo-400 mb-2" style={{ fontFamily: "cursive" }}>
                Plan your Next Trip
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Get in Touch</h2>
              <p className="text-gray-600">
                Write to us for personalised travel advice or for information on group travel and <span className="underline">last minute travel</span>. All travel is insured and safe.
              </p>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Type your name"
                className="border rounded px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <input
                type="email"
                placeholder="Insert your email"
                className="border rounded px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <textarea
                placeholder="Write your message"
                className="border rounded px-4 py-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 min-h-[80px]"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold rounded px-4 py-3 mt-2 hover:bg-indigo-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Map */}
        <div className="flex-1 flex items-center">
          <div className="w-full h-80 md:h-full rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=%D8%A7%D9%84%D8%B7%D8%B1%D9%8A%D9%82+%D8%A7%D9%84%D8%AD%D8%B2%D8%A7%D9%85%D9%8A%D8%A9%D8%8C+entr%C3%A9e+4021&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-none w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
