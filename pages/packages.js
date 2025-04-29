import Head from "next/head";
import Footer from "../components/Footer";
import { useState } from "react";
import packagesData from "../data/packagesData";
import Image from "next/image";

function PackageCard({ title, country, duration, image, description, price, oldPrice, sale, currency }) {
  // Use a dummy image if image is missing or empty
  const imgSrc =
    image && (image.startsWith("http://") || image.startsWith("https://") || image.startsWith("/"))
      ? image
      : `https://dummyimage.com/600x300/cccccc/000000&text=${encodeURIComponent(title)}`;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col h-[420px]">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        {sale && (
          <span className="absolute top-3 right-3 bg-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            SALE
          </span>
        )}
      </div>
      <div className="flex flex-row items-center gap-2 px-4 pt-4">
        <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded">{duration}</span>
        <span className="text-gray-400 text-xs">•</span>
        <span className="text-gray-500 text-xs">{country}</span>
      </div>
      <div className="px-4 pt-2 flex-1 flex flex-col">
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-1 line-clamp-3">{description}</p> {/* clamp description */}
        <div className="flex items-end justify-between mb-2">
          <button className="bg-[#7B61FF] text-white rounded-lg px-5 py-2 font-semibold text-sm hover:bg-[#6a4ee6] transition">
            Details
          </button>
          <div className="flex flex-col items-end">
            <span className="text-xs text-gray-400">From</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-gray-800">
                {price} {currency || "TND"}
              </span>
              {oldPrice && (
                <span className="line-through text-gray-400 text-sm">
                  {oldPrice} {currency || "TND"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Packages() {
  const [maxPrice, setMaxPrice] = useState(5000);
  const [view, setView] = useState("grid"); // "grid" or "list"
  const [page, setPage] = useState(1);

  const perPage = 4;
  const totalPages = Math.ceil(packagesData.length / perPage);
  const paginatedPackages = packagesData.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Head>
        <title>Packages | Love Travel</title>
        <meta name="description" content="Explore our travel packages and find your next adventure with Love Travel." />
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div
          className="w-full h-[340px] md:h-[420px] relative"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80")',
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-extrabold">Our Packages</h1>
          </div>
          {/* Hero Filters and Icons */}
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-t from-black/80 via-black/25 to-transparent">
            <div className="flex gap-8">
              {/* Price Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-1 text-white font-medium text-sm focus:outline-none">
                  PRICE
                  <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown menu can be implemented if needed */}
              </div>
              {/* Name Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-1 text-white font-medium text-sm focus:outline-none">
                  NAME
                  <svg className="w-4 h-4 ml-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown menu can be implemented if needed */}
              </div>
            </div>
            {/* View Icons */}
            <div className="flex gap-4">
              {/* Grid Icon */}
              <button
                className={`w-6 h-6 flex items-center justify-center ${view === "grid" ? "bg-white rounded shadow" : ""}`}
                onClick={() => setView("grid")}
                aria-label="Grid View"
              >
                <span className="inline-block">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <rect x="2" y="2" width="6" height="6" rx="1" fill={view === "grid" ? "#7B61FF" : "#fff"}/>
                    <rect x="12" y="2" width="6" height="6" rx="1" fill={view === "grid" ? "#7B61FF" : "#fff"}/>
                    <rect x="2" y="12" width="6" height="6" rx="1" fill={view === "grid" ? "#7B61FF" : "#fff"}/>
                    <rect x="12" y="12" width="6" height="6" rx="1" fill={view === "grid" ? "#7B61FF" : "#fff"}/>
                  </svg>
                </span>
              </button>
              {/* List Icon */}
              <button
                className={`w-6 h-6 flex items-center justify-center ${view === "list" ? "bg-white rounded shadow" : ""}`}
                onClick={() => setView("list")}
                aria-label="List View"
              >
                <span className="inline-block">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <rect x="2" y="4" width="16" height="3" rx="1" fill={view === "list" ? "#7B61FF" : "#a78bfa"}/>
                    <rect x="2" y="9" width="16" height="3" rx="1" fill={view === "list" ? "#7B61FF" : "#a78bfa"}/>
                    <rect x="2" y="14" width="16" height="3" rx="1" fill={view === "list" ? "#7B61FF" : "#a78bfa"}/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 py-12">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-72 mb-8 md:mb-0">
            <div className="bg-white rounded-2xl shadow-md p-6 sticky top-8">
              <div className="mb-4">
                <label className="font-semibold text-sm mb-2 block">Select your destination :</label>
                <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                  <option>All Destinations</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-sm mb-2 block">Select your date :</label>
                <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm" />
              </div>
              <div className="mb-4">
                <label className="font-semibold text-sm mb-2 block">Typologies :</label>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <label><input type="checkbox" className="mr-1" />Sports Activities</label>
                  <label><input type="checkbox" className="mr-1" />Family-Friendly</label>
                  <label><input type="checkbox" className="mr-1" />Heritage Tours</label>
                  <label><input type="checkbox" className="mr-1" />Road Trips</label>
                  <label><input type="checkbox" className="mr-1" />Budget Travel</label>
                  <label><input type="checkbox" className="mr-1" />Culinary Tourism</label>
                  <label><input type="checkbox" className="mr-1" />Eco-tourism</label>
                  <label><input type="checkbox" className="mr-1" />Adventure Travel</label>
                  <label><input type="checkbox" className="mr-1" />Beach Holidays</label>
                  <label><input type="checkbox" className="mr-1" />Cultural Tours</label>
                </div>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-sm mb-2 block">Max Price :</label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={5000}
                    value={maxPrice}
                    onChange={e => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                  <span className="text-xs text-gray-500">${maxPrice}</span>
                </div>
                <label className="flex items-center mt-2 text-xs">
                  <input type="checkbox" className="mr-2" />
                  See only promotions
                </label>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-sm mb-2 block">Durations :</label>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  <label><input type="checkbox" className="mr-1" />1 Week</label>
                  <label><input type="checkbox" className="mr-1" />10 Days</label>
                  <label><input type="checkbox" className="mr-1" />5 Days</label>
                </div>
              </div>
              <div className="mb-4">
                <label className="font-semibold text-sm mb-2 block">Difficulty :</label>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  <label><input type="checkbox" className="mr-1" />Challenging</label>
                  <label><input type="checkbox" className="mr-1" />Easy</label>
                  <label><input type="checkbox" className="mr-1" />Difficult</label>
                  <label><input type="checkbox" className="mr-1" />Medium</label>
                </div>
              </div>
              <div className="mb-2">
                <label className="font-semibold text-sm mb-2 block">Min Age :</label>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  <label><input type="checkbox" className="mr-1" />0</label>
                  <label><input type="checkbox" className="mr-1" />18</label>
                  <label><input type="checkbox" className="mr-1" />16</label>
                  <label><input type="checkbox" className="mr-1" />5</label>
                </div>
              </div>
            </div>
          </aside>
          {/* Packages Grid/List */}
          <section className="flex-1">
            {view === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
                {paginatedPackages.map((pkg, idx) => (
                  <PackageCard key={idx} {...pkg} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {paginatedPackages.map((pkg, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-md overflow-hidden h-[220px]">
                    <div className="md:w-1/3 w-full h-48 md:h-full relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      {pkg.sale && (
                        <span className="absolute top-3 right-3 bg-cyan-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                          SALE
                        </span>
                      )}
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-row items-center gap-2 mb-2">
                          <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded">{pkg.duration}</span>
                          <span className="text-gray-400 text-xs">•</span>
                          <span className="text-gray-500 text-xs">{pkg.country}</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">{pkg.title}</h3>
                        <p className="text-gray-500 text-sm mb-4 line-clamp-3">{pkg.description}</p>
                      </div>
                      <div className="flex items-end justify-between">
                        <button className="bg-[#7B61FF] text-white rounded-lg px-5 py-2 font-semibold text-sm hover:bg-[#6a4ee6] transition">
                          Details
                        </button>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-gray-400">From</span>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-xl text-gray-800">
                              {pkg.price} {pkg.currency || "TND"}
                            </span>
                            {pkg.oldPrice && (
                              <span className="line-through text-gray-400 text-sm">
                                {pkg.oldPrice} {pkg.currency || "TND"}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* Pagination */}
            <div className="flex justify-center mt-10">
              <nav className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    className={`w-8 h-8 rounded bg-white shadow text-gray-700 ${page === i + 1 ? "font-bold" : ""}`}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </nav>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
