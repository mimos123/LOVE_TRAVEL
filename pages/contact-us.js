import Image from "next/image";
import { useEffect, useRef } from "react";

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

      {/* Footer Section */}
      <footer
        className="w-full relative mt-auto"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-8 px-4 py-20">
          {/* Left: Big Title */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-white text-4xl md:text-4xl font-extrabold leading-tight mb-6 text-center md:text-left">
              Travel beyond your<br />imagination, with our<br />Travel Agency!
            </h2>
          </div>
          {/* Center: Address and Social */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <div className="text-white text-lg font-bold mb-2">Address</div>
            <div className="text-gray-200 text-base mb-1">Avenue 14 Janvier, Sousse</div>
            <div className="text-gray-200 text-base mb-1">Sousse, Tunisia</div>
            <div className="text-gray-200 text-base mb-4">4000</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-indigo-400 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54a4.27 4.27 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.14 12.14 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.67a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1zm15.13 12.78h-3.53v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.53V9h3.39v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.41v6.31z"/></svg>
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93v-6.32h-2.48v-2.61h2.48V9.41c0-2.45 1.49-3.8 3.77-3.8 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.61h-2.34v6.32c4.64-.86 8.24-4.52 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z"/></svg>
              </a>
              <a href="#" className="hover:text-indigo-400 transition">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M21.54 7.2c-.13-.49-.52-.88-1.01-1.01C19.13 5.8 12 5.8 12 5.8s-7.13 0-8.53.39c-.49.13-.88.52-1.01 1.01C2 8.6 2 12 2 12s0 3.4.46 4.8c.13.49.52.88 1.01 1.01C4.87 18.2 12 18.2 12 18.2s7.13 0 8.53-.39c.49-.13.88-.52 1.01-1.01.46-1.4.46-4.8.46-4.8s0-3.4-.46-4.8zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
              </a>
            </div>
          </div>
          {/* Right: Contact */}
          <div className="flex-1 flex flex-col items-center md:items-start gap-4">
            <div className="text-white text-lg font-bold mb-2">Contact</div>
            <a
              href="mailto:contact@sousse-travel.tn"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold text-lg shadow hover:bg-indigo-700 transition"
              style={{ display: "inline-block", width: "fit-content" }}
            >
              contact@sousse-travel.tn
            </a>
            <div className="text-white text-2xl font-extrabold mt-2">+216 73 123 456</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
