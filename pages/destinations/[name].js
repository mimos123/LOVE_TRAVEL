import { useRouter } from "next/router";
import Footer from "../../components/Footer";

// Dummy data for destinations (should be shared in real app)
const destinations = [
  {
    name: "paris",
    displayName: "Paris",
    hero:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "3 Available" },
      { icon: "📞", label: "Sub Block", value: "+216 71 123 456" },
      { icon: "✉️", label: "Contact Us", value: "travel@info.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description:
      "A Guide to Your Next Adventure\n\nDiscover Your Dream Destination\n\nTo find good deals on flights and accommodations, there are several tips and tricks that can be followed. Firstly, it is important to know the typical prices for flights and hotels for the desired destinations.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "Malibu",
        days: 5,
        location: "California",
        description:
          "This tour is a breathtaking experience that takes in the stunning coastline of Southern California.",
        price: 500,
        oldPrice: null,
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "San Francisco",
        days: 5,
        location: "California",
        description:
          "With convenient transportation and a small group size, you'll have the ultimate personalized tour experience.",
        price: 480,
        oldPrice: 540,
        image:
          "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
      {
        title: "Santa Monica",
        days: 10,
        location: "California",
        description:
          "This iconic landmark is home to an array of thrilling good attractions and stunning beach ocean views.",
        price: 650,
        oldPrice: 770,
        image:
          "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  // ...add similar objects for other destinations...
];

function InfoCard({ icon, label, value }) {
  return (
    <div className="flex flex-col items-center flex-1">
      <span className="text-2xl mb-1">{icon}</span>
      <span className="text-xs text-gray-500">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function PackageCard({ title, days, location, description, price, oldPrice, image, sale }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col w-full max-w-xs">
      <div className="relative">
        <img src={image} alt={title} className="rounded-lg w-full h-32 object-cover mb-3" />
        {sale && (
          <span className="absolute top-2 right-2 bg-[#7B61FF] text-white text-xs px-2 py-1 rounded font-bold">
            SALE
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs bg-[#f5f5f5] px-2 py-1 rounded">{days} Days</span>
        <span className="text-xs text-gray-500">• {location}</span>
      </div>
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-gray-500 text-sm mb-3">{description}</p>
      <div className="flex items-end gap-2 mb-2">
        <span className="font-bold text-xl text-[#7B61FF]">TND {price}</span>
        {oldPrice && (
          <span className="line-through text-gray-400 text-sm">TND {oldPrice}</span>
        )}
      </div>
      <button className="bg-[#7B61FF] text-white rounded-lg py-2 font-semibold hover:bg-[#6a4ee6] transition">
        Details
      </button>
    </div>
  );
}

export default function DestinationDetails() {
  const router = useRouter();
  const { name } = router.query;
  const destination = destinations.find(
    (d) => d.name === (name || "").toLowerCase()
  );

  if (!destination) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Destination Not Found</h1>
        <button
          className="bg-[#7B61FF] text-white px-4 py-2 rounded"
          onClick={() => router.push("/destinations")}
        >
          Back to Destinations
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative w-full h-[340px] md:h-[420px]">
        <img
          src={destination.hero}
          alt={destination.displayName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold">{destination.displayName}</h1>
        </div>
        {/* Info Cards */}
        <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-[90%] max-w-3xl bg-white rounded-2xl shadow-lg flex justify-between px-8 py-4">
          {destination.info.map((item, idx) => (
            <InfoCard key={idx} {...item} />
          ))}
        </div>
      </div>
      {/* Main Content */}
      <main className="flex flex-col items-center pt-24 pb-12 flex-1 w-full">
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
          {/* Gallery */}
          <div className="flex flex-col gap-6 md:w-1/3">
            {destination.gallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="rounded-xl w-full h-48 object-cover"
              />
            ))}
          </div>
          {/* Description & Form */}
          <div className="flex-1">
            <h4 className="text-[#7B61FF] font-semibold mb-2">A Guide to Your Next Adventure</h4>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Discover Your Dream Destination</h2>
            <p className="text-gray-600 mb-6 whitespace-pre-line">{destination.description}</p>
            <form className="flex flex-col gap-3 mb-4">
              {destination.sections.map((section, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={section.title}
                  className="border-b border-gray-300 py-2 px-1 outline-none focus:border-[#7B61FF] bg-transparent"
                />
              ))}
              <button
                type="button"
                className="bg-[#7B61FF] text-white rounded-lg px-6 py-2 mt-2 font-semibold hover:bg-[#6a4ee6] transition w-fit"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
        {/* Packages */}
        <div className="w-full max-w-6xl mt-16">
          <div className="text-center mb-6">
            <span className="text-[#7B61FF] font-medium">check All</span>
            <h2 className="text-3xl font-bold mt-2">Packages</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {destination.packages.map((pkg, idx) => (
              <PackageCard key={idx} {...pkg} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
