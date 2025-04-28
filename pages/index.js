import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

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

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center px-4 pt-22">
      <section className="w-full max-w-2xl text-center py-16 rounded-3xl bg-white/80 shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
          Explore the World with <span className="text-pink-500">LOVE TRAVEL</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Discover amazing destinations, book unique experiences, and make memories that last a lifetime.
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-pink-500 text-white font-semibold rounded-full shadow hover:bg-pink-600 transition"
        >
          Start Your Journey
        </a>
      </section>
      <div className="mt-12 flex flex-wrap justify-center gap-8">
        <div className="w-64 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Exotic Destinations</h2>
          <p className="text-gray-600">From Bali to Paris, find your dream getaway with us.</p>
        </div>
        <div className="w-64 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2">Best Price Guarantee</h2>
          <p className="text-gray-600">We offer the best deals for flights, hotels, and tours.</p>
        </div>
        <div className="w-64 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-2">24/7 Support</h2>
          <p className="text-gray-600">Our team is here to help you anytime, anywhere.</p>
        </div>
      </div>
    </main>
  );
}
