import '../styles/globals.css'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [hovered, setHovered] = useState(null);
  const lastScrollY = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper to check if a route is active
  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  // Nav items
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/travel", label: "Travel" },
    { href: "/packages", label: "Packages" },
    { href: "/destinations", label: "Destinations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav
      className={`w-full bg-gray-50 flex items-center justify-between px-8 py-4 transition-transform duration-300 z-50 fixed top-0 left-0 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ boxShadow: "0 2px 8px 0 rgb(0 0 0 / 0.04)" }}
    >
      <div className="flex items-center gap-3">
        <Image src="/Logo.png" alt="Logo" width={120} height={40} priority />
      </div>
      <ul className="flex items-center gap-6 font-medium text-black relative">
        {navItems.map((item, idx) => (
          <li
            key={item.href}
            className="relative group hover:text-indigo-700 cursor-pointer transition"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link href={item.href} legacyBehavior>
              <span className={isActive(item.href) ? "text-indigo-600 font-bold" : ""}>
                {item.label}
              </span>
            </Link>
            {/* Animated underline */}
            <span
              className={`
                absolute left-0 -bottom-1 h-0.5 bg-indigo-600 rounded
                transition-all duration-300
                ${isActive(item.href) && hovered === null ? "w-full opacity-100" : ""}
                ${hovered === idx ? "w-full opacity-100" : ""}
                ${!isActive(item.href) && hovered !== idx ? "w-0 opacity-0" : ""}
              `}
              style={{
                transitionProperty: "width,opacity",
              }}
            ></span>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <Link href="/login" legacyBehavior>
          <button className="bg-indigo-500 text-white font-semibold rounded-md px-8 py-2 shadow hover:bg-indigo-600 transition">
            Login
          </button>
        </Link>
        <Link href="/signup" legacyBehavior>
          <button className="bg-gray-200 text-black font-semibold rounded-md px-8 py-2 shadow hover:bg-gray-300 transition">
            Create account
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="pt-22">
        <Component {...pageProps} />
      </div>
    </>
  );
}