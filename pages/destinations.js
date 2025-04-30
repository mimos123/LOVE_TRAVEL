import Footer from "../components/Footer";
import { useState } from "react";
import { useRouter } from "next/router";

// Dummy data for destinations
const allDestinations = [
  {
    name: "Paris",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3500,
    price: 2900,
    currency: "TND",
  },
  {
    name: "Rome",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3200,
    price: 2600,
    currency: "TND",
  },
  {
    name: "London",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    oldPrice: 4000,
    price: 3400,
    currency: "TND",
  },
  {
    name: "Tokyo",
    image:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80",
    oldPrice: 5200,
    price: 4700,
    currency: "TND",
  },
  {
    name: "New York",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    oldPrice: 4800,
    price: 4200,
    currency: "TND",
  },
  {
    name: "Istanbul",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    oldPrice: 2500,
    price: 2100,
    currency: "TND",
  },
  {
    name: "Barcelona",
    image:
      "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3300,
    price: 2800,
    currency: "TND",
  },
  {
    name: "Dubai",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3700,
    price: 3200,
    currency: "TND",
  },
  {
    name: "Sydney",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    oldPrice: 6000,
    price: 5400,
    currency: "TND",
  },
  {
    name: "Cairo",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3100,
    price: 2500,
    currency: "TND",
  },
  {
    name: "Bangkok",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fd9?auto=format&fit=crop&w=600&q=80",
    oldPrice: 2700,
    price: 2200,
    currency: "TND",
  },
  {
    name: "Rio de Janeiro",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3500,
    price: 2950,
    currency: "TND",
  },
  {
    name: "Cape Town",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3200,
    price: 2700,
    currency: "TND",
  },
  {
    name: "Moscow",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3900,
    price: 3400,
    currency: "TND",
  },
  {
    name: "Toronto",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    oldPrice: 4100,
    price: 3600,
    currency: "TND",
  },
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3700,
    price: 3200,
    currency: "TND",
  },
  {
    name: "San Francisco",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    oldPrice: 4200,
    price: 3700,
    currency: "TND",
  },
  {
    name: "Marrakech",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
    oldPrice: 2800,
    price: 2300,
    currency: "TND",
  },
  {
    name: "Berlin",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3600,
    price: 3100,
    currency: "TND",
  },
  {
    name: "Prague",
    image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    oldPrice: 3300,
    price: 2800,
    currency: "TND",
  },
  {
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    oldPrice: 4400,
    price: 3900,
    currency: "TND",
  },
];

// DestinationCard component
function DestinationCard({ name, image, oldPrice, price, currency }) {
  const router = useRouter();
  const handleMoreDetails = () => {
    router.push(`/destinations/${encodeURIComponent(name.toLowerCase())}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
      <h2 className="font-bold text-xl mb-2">{name}</h2>
      <div className="mb-4">
        <span className="line-through text-gray-400 mr-2 text-lg">
          {oldPrice} {currency}
        </span>
        <span className="font-bold text-gray-700 text-lg">
          {price} {currency}
        </span>
      </div>
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

export default function Destinations() {
  const [visibleCount, setVisibleCount] = useState(6);

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
          {allDestinations.slice(0, visibleCount).map((dest, idx) => (
            <DestinationCard key={idx} {...dest} />
          ))}
        </div>
        {visibleCount < allDestinations.length && (
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
