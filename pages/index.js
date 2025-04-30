import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import packagesData from "../data/packagesData";

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

  // Select 3 random packages from packagesData
  const [randomPackages, setRandomPackages] = useState([]);
  useEffect(() => {
    const shuffled = [...packagesData].sort(() => 0.5 - Math.random());
    setRandomPackages(shuffled.slice(0, 3));
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
          <div className="absolute inset-0" style={{ backgroundColor: "#F2F2F2", opacity: 0.30 }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-20">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center items-start pt-10 md:pt-0 md:pr-4 md:items-center">
              <span className="text-gray-400 text-base md:text-lg font-semibold mb-3 tracking-wide">
                LOVE TRAVEL AGENCY
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
                <img
                  src="https://bunny-wp-pullzone-nfqzsydbnl.b-cdn.net/wp-content/uploads/2024/07/istanbul-gezilecek-yerler.jpg"
                  alt="Travel"
                  className="object-cover w-full h-full"
                  width={300}
                  height={420}
                  loading="eager"
                />
              </div>
            </div>
          </div>
          {/* Floating Search Bar */}
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-[95%] max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row justify-between px-2 md:px-8 py-4 z-20">
            {/* Search */}
            <div className="flex items-center flex-1 min-w-[180px] gap-3 px-2 md:px-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f8fc]">
                <svg width="28" height="28" fill="none" stroke="#00BCD4" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-5">Search</span>
                <input
                  type="text"
                  placeholder="Insert keyword"
                  className="text-gray-400 text-base bg-transparent outline-none border-none p-0 placeholder-gray-400"
                  style={{ minWidth: 0 }}
                />
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-4"></div>
            {/* Destinations */}
            <div className="flex items-center flex-1 min-w-[180px] gap-3 px-2 md:px-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f8fc]">
                <svg width="28" height="28" fill="none" stroke="#00BCD4" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-5">Destinations</span>
                <select className="text-gray-400 text-base bg-transparent outline-none border-none p-0">
                  <option>All Destinations</option>
                  <option>Paris</option>
                  <option>Rome</option>
                  <option>London</option>
                  <option>Tokyo</option>
                  <option>New York</option>
                  <option>Istanbul</option>
                  <option>Barcelona</option>
                  <option>Dubai</option>
                  <option>Sydney</option>
                </select>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-4"></div>
            {/* Typologies */}
            <div className="flex items-center flex-1 min-w-[180px] gap-3 px-2 md:px-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f8fc]">
                <svg width="28" height="28" fill="none" stroke="#00BCD4" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20m0-20C7.03 2 2 7.03 2 12h20c0-4.97-5.03-10-10-10z"/>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-5">Typologies</span>
                <select className="text-gray-400 text-base bg-transparent outline-none border-none p-0">
                  <option>All Typologies</option>
                  <option>Adventure</option>
                  <option>Culture</option>
                  <option>Relax</option>
                  <option>Nature</option>
                </select>
              </div>
            </div>
            {/* Search Button */}
            <div className="flex items-center mt-4 md:mt-0 md:ml-6">
              <button className="bg-[#7B61FF] hover:bg-[#6a4ee6] transition text-white font-bold rounded-xl px-10 py-4 text-lg shadow">
                SEARCH
              </button>
            </div>
          </div>
        </div>
        {/* End Floating Search Bar */}
      </main>
      {/* Landing Content Section */}
      <section className="w-full flex flex-col items-center bg-white">
        <div className="w-full max-w-6xl px-4">
          {/* Title & Description */}
          <span className="text-[#7B61FF] font-medium text-base mb-2 block" style={{fontFamily: "Poppins, sans-serif"}}>
            Dream Vacation Destination
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{fontFamily: "Poppins, sans-serif"}}>
            Plan the Trip of a Lifetime<br className="hidden md:block" />with Ease
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Whether you're looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.
          </p>
          <button className="bg-[#7B61FF] text-white rounded-lg px-6 py-2 font-semibold hover:bg-[#6a4ee6] transition mb-8">
            More info
          </button>
          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex-1 flex items-center rounded-xl bg-yellow-400/90 h-24 px-6 shadow relative overflow-hidden">
              <span className="text-3xl mr-4 z-10"> 
                <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </span>
              <span className="font-semibold text-white text-lg z-10">City Walks Tour</span>
              <img src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=40" alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
            </div>
            <div className="flex-1 flex items-center rounded-xl bg-green-400/90 h-24 px-6 shadow relative overflow-hidden">
              <span className="text-3xl mr-4 z-10">
                <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="10" width="16" height="6" rx="2" />
                  <circle cx="8" cy="18" r="2" />
                  <circle cx="16" cy="18" r="2" />
                </svg>
              </span>
              <span className="font-semibold text-white text-lg z-10">Electric Bikes</span>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=40" alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
            </div>
            <div className="flex-1 flex items-center rounded-xl bg-cyan-400/90 h-24 px-6 shadow relative overflow-hidden">
              <span className="text-3xl mr-4 z-10">
                <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="10" width="18" height="7" rx="2" />
                  <path d="M7 10V7a5 5 0 0110 0v3" />
                </svg>
              </span>
              <span className="font-semibold text-white text-lg z-10">Skyscrapers View</span>
              <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=40" alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
            </div>
          </div>
          {/* Package Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            {randomPackages.map((pkg, idx) => (
              <div key={pkg.id || idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col w-full md:w-1/3">
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center text-gray-400 text-xs mb-2">
                    <span>{pkg.duration} {pkg.duration > 1 ? "Days" : "Day"}</span>
                    <span className="mx-2">•</span>
                    <span>{pkg.location}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1 line-clamp-3">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#7B61FF] text-white rounded-lg px-5 py-2 font-semibold hover:bg-[#6a4ee6] transition">
                      Details
                    </button>
                    <span className="font-bold text-xl text-gray-800">
                      {pkg.currency === "TND" ? "TND" : "$"} {pkg.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
