export default function Footer() {
  return (
    <footer
      className="w-full relative mt-auto parallax-footer"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80")',
        backgroundAttachment: "fixed",
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
            <a href="#" className="text-white transition" style={{ display: "flex" }}>
              {/* Twitter SVG */}
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24"
                className="transition duration-200 hover:scale-110 hover:fill-indigo-400"
              ><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99C7.69 9.13 4.07 7.38 1.64 4.7c-.37.63-.58 1.36-.58 2.14 0 1.48.75 2.78 1.89 3.54a4.27 4.27 0 0 1-1.94-.54v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.14 12.14 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
            </a>
            <a href="#" className="text-white transition" style={{ display: "flex" }}>
              {/* LinkedIn SVG */}
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24"
                className="transition duration-200 hover:scale-110 hover:fill-indigo-400"
              ><path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.67a2.05 2.05 0 1 1 0-4.1 2.05 2.05 0 0 1 0 4.1zm15.13 12.78h-3.53v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.69h-3.53V9h3.39v1.56h.05c.47-.89 1.62-1.83 3.34-1.83 3.57 0 4.23 2.35 4.23 5.41v6.31z"/></svg>
            </a>
            <a href="#" className="text-white transition" style={{ display: "flex" }}>
              {/* Facebook SVG */}
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24"
                className="transition duration-200 hover:scale-110 hover:fill-indigo-400"
              ><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.6 8.07 8.24 8.93v-6.32h-2.48v-2.61h2.48V9.41c0-2.45 1.49-3.8 3.77-3.8 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.61h-2.34v6.32c4.64-.86 8.24-4.52 8.24-8.93 0-5.5-4.46-9.96-9.96-9.96z"/></svg>
            </a>
            <a href="#" className="text-white transition" style={{ display: "flex" }}>
              {/* YouTube SVG */}
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24"
                className="transition duration-200 hover:scale-110 hover:fill-indigo-400"
              ><path d="M21.54 7.2c-.13-.49-.52-.88-1.01-1.01C19.13 5.8 12 5.8 12 5.8s-7.13 0-8.53.39c-.49.13-.88.52-1.01 1.01C2 8.6 2 12 2 12s0 3.4.46 4.8c.13.49.52.88 1.01 1.01C4.87 18.2 12 18.2 12 18.2s7.13 0 8.53-.39c.49-.13.88-.52 1.01-1.01.46-1.4.46-4.8.46-4.8s0-3.4-.46-4.8zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
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
  );
}
