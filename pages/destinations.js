import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

// DestinationCard component
function DestinationCard({ name, image, description }) {
  const router = useRouter();
  const handleMoreDetails = () => {
    router.push(`/destinations/${encodeURIComponent(name.toLowerCase())}`);
  };

  // Handle Django ImageField path: "destinations/filename.jpg"
  // Always use as `/` + image (relative to public/)
  let imgSrc = "/destinations/placeholder.jpg";
  if (image) {
    // Remove any leading slashes, then prepend / to ensure correct path
    const cleanImage = image.replace(/^\/+/, "");
    imgSrc = `/${cleanImage}`;
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img
        src={imgSrc}
        alt={name}
        className="w-full h-56 object-cover rounded-xl mb-4"
        onError={(e) => {
          e.target.src = "/destinations/placeholder.jpg";
        }}
      />
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex gap-2 w-full">
        <button className="flex-1 bg-[#7B61FF] text-white font-bold py-2 rounded-lg hover:bg-[#6a4ee6] transition">
          Add to cart
        </button>
        <button
          className="flex-1 bg-gray-200 text-gray-700 font-semibold py-2 rounded-lg hover:bg-gray-300 transition"
          onClick={handleMoreDetails}
        >
          More Details..
        </button>
      </div>
    </div>
  );
}

// Fetch data from Django API at request time (SSR)
export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:8000/api/destinations/");
    if (!res.ok) {
      // If not a 2xx response, return empty array
      return { props: { destinations: [] } };
    }
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      // If not JSON, return empty array
      return { props: { destinations: [] } };
    }
    const destinations = await res.json();
    return { props: { destinations } };
  } catch (error) {
    // On error, return empty array
    return { props: { destinations: [] } };
  }
}

export default function Destinations({ destinations }) {
  const [visibleCount, setVisibleCount] = useState(6);

  // Defensive: handle undefined or null destinations
  const safeDestinations = Array.isArray(destinations) ? destinations : [];

  const handleLoadMore = () => setVisibleCount((c) => c + 6);

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
          <h1 className="text-white text-3xl md:text-5xl font-extrabold">Destinations</h1>
        </div>
      </div>
      <main className="flex flex-col items-center py-12 flex-1 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {safeDestinations.slice(0, visibleCount).map((dest, idx) => (
            <DestinationCard key={dest.name || idx} {...dest} />
          ))}
        </div>
        {visibleCount < safeDestinations.length && (
          <button
            className="mt-10 px-8 py-3 bg-[#7B61FF] text-white font-bold rounded-lg shadow hover:bg-[#6a4ee6] transition"
            onClick={handleLoadMore}
          >
            Load More Destinations
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
}
