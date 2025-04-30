import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

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
    <>
      <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-20 to-blue-50">
        {/* Hero Section with CSS Parallax */}
        <div
          className="w-full h-[420px] md:h-[600px] parallax relative flex items-center"
          style={{
            backgroundImage: 'url("/worldindots.png")',
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "#F2F2F2", opacity: 0.85 }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-20">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center items-start pt-10 md:pt-0 md:pr-4 md:items-center">
              <span className="text-gray-400 text-base md:text-lg font-semibold mb-3 tracking-wide">
                LOVE TRAVEL THEME
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-2 leading-tight" style={{fontFamily: "Poppins, sans-serif"}}>
                <span className="relative inline-block">
                  <span className="z-10 relative">Adventure</span>
                  <span
                    className="absolute left-0 bottom-1 w-full h-2"
                    style={{
                      background: "#FFC700",
                      zIndex: 0,
                      borderRadius: "4px",
                    }}
                  ></span>
                </span>
                <span className="text-black">&nbsp;&amp;</span>
                <br />
                <span className="text-black">Experience</span>
                <br />
                <span className="text-black">The Travel !</span>
              </h1>
            </div>
            {/* Right: Pill Image */}
            <div className="flex-1 flex justify-center items-center mt-4 md:mt-0 md:ml-[-32px]">
              <div className="w-[220px] h-[340px] md:w-[220px] md:h-[420px] bg-white shadow-lg overflow-hidden rounded-[100px] md:rounded-[150px] flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                  alt="Travel"
                  width={300}
                  height={420}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
