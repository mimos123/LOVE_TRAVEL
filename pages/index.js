import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-gray-50 flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-3">
          <Image src="/Logo.png" alt="Logo" width={120} height={40} priority />
          {/* Optionally add text if needed */}
        </div>
        <ul className="flex items-center gap-6 font-medium text-black">
          <li className="relative group cursor-pointer transition">
            <Link href="/" legacyBehavior>
              <span className="text-indigo-600 font-bold">Home</span>
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded transition-opacity opacity-100"></span>
          </li>
          <li className="relative group hover:text-indigo-700 cursor-pointer transition">
            <Link href="/travel" legacyBehavior>
              <span>Travel</span>
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded transition-opacity opacity-0 group-hover:opacity-100"></span>
          </li>
          <li className="relative group hover:text-indigo-700 cursor-pointer transition">
            <Link href="/pages" legacyBehavior>
              <span>Pages</span>
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded transition-opacity opacity-0 group-hover:opacity-100"></span>
          </li>
          <li className="relative group hover:text-indigo-700 cursor-pointer transition">
            <Link href="/shop" legacyBehavior>
              <span>Shop</span>
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded transition-opacity opacity-0 group-hover:opacity-100"></span>
          </li>
          <li className="relative group hover:text-indigo-700 cursor-pointer transition">
            <Link href="/blog" legacyBehavior>
              <span>Blog</span>
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded transition-opacity opacity-0 group-hover:opacity-100"></span>
          </li>
          <li className="relative group hover:text-indigo-700 cursor-pointer transition">
            <Link href="/contact-us" legacyBehavior>
              <span>Contact Us</span>
            </Link>
            <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-600 rounded transition-opacity opacity-0 group-hover:opacity-100"></span>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-indigo-500 text-white font-semibold rounded-md px-8 py-2 shadow hover:bg-indigo-600 transition">
            Login
          </button>
          <button className="bg-gray-200 text-black font-semibold rounded-md px-8 py-2 shadow hover:bg-gray-300 transition">
            Create account
          </button>
        </div>
      </nav>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center px-4">
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
    </>
  );
}
