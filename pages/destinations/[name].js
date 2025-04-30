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
  {
    name: "rome",
    displayName: "Rome",
    hero: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+39 06 123 4567" },
      { icon: "✉️", label: "Contact Us", value: "rome@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Discover the ancient wonders of Rome. Visit the Colosseum, Roman Forum, and enjoy authentic Italian cuisine.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "Colosseum Tour",
        days: 3,
        location: "Rome",
        description: "Explore the iconic Colosseum and nearby ruins.",
        price: 2600,
        oldPrice: 3200,
        image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Vatican Experience",
        days: 2,
        location: "Rome",
        description: "Visit the Vatican Museums and St. Peter's Basilica.",
        price: 2100,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  {
    name: "london",
    displayName: "London",
    hero: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+44 20 1234 5678" },
      { icon: "✉️", label: "Contact Us", value: "london@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Experience the vibrant city of London. See Big Ben, the London Eye, and enjoy world-class museums.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "London Highlights",
        days: 4,
        location: "London",
        description: "See the best of London in a guided tour.",
        price: 3400,
        oldPrice: 4000,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Royal Parks",
        days: 2,
        location: "London",
        description: "Relax in London's famous parks and gardens.",
        price: 2100,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  {
    name: "tokyo",
    displayName: "Tokyo",
    hero: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+81 3 1234 5678" },
      { icon: "✉️", label: "Contact Us", value: "tokyo@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Discover the blend of tradition and modernity in Tokyo. Visit temples, skyscrapers, and enjoy sushi.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "Tokyo Explorer",
        days: 5,
        location: "Tokyo",
        description: "Explore Tokyo's top sights and neighborhoods.",
        price: 4700,
        oldPrice: 5200,
        image: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Cherry Blossom Tour",
        days: 3,
        location: "Tokyo",
        description: "Experience Tokyo during cherry blossom season.",
        price: 4200,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  {
    name: "new-york",
    displayName: "New York",
    hero: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+1 212 123 4567" },
      { icon: "✉️", label: "Contact Us", value: "ny@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Visit the city that never sleeps. See Times Square, Central Park, and the Statue of Liberty.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "NYC Essentials",
        days: 4,
        location: "New York",
        description: "Discover the must-see sights of New York City.",
        price: 4200,
        oldPrice: 4800,
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Broadway & Museums",
        days: 3,
        location: "New York",
        description: "Enjoy Broadway shows and world-class museums.",
        price: 3500,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  {
    name: "istanbul",
    displayName: "Istanbul",
    hero: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+90 212 123 4567" },
      { icon: "✉️", label: "Contact Us", value: "istanbul@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Explore the crossroads of Europe and Asia. Visit Hagia Sophia, the Grand Bazaar, and the Bosphorus.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "Historic Istanbul",
        days: 3,
        location: "Istanbul",
        description: "Tour the historic sites of Istanbul.",
        price: 2100,
        oldPrice: 2500,
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Bosphorus Cruise",
        days: 2,
        location: "Istanbul",
        description: "Enjoy a scenic cruise on the Bosphorus.",
        price: 1800,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  {
    name: "barcelona",
    displayName: "Barcelona",
    hero: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+34 93 123 4567" },
      { icon: "✉️", label: "Contact Us", value: "barcelona@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Enjoy the art and architecture of Barcelona. Visit Sagrada Familia, Park Güell, and the beaches.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "Gaudi Tour",
        days: 3,
        location: "Barcelona",
        description: "Discover Gaudi's masterpieces in Barcelona.",
        price: 2800,
        oldPrice: 3300,
        image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Beach Escape",
        days: 2,
        location: "Barcelona",
        description: "Relax on Barcelona's beautiful beaches.",
        price: 2500,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  {
    name: "dubai",
    displayName: "Dubai",
    hero: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+971 4 123 4567" },
      { icon: "✉️", label: "Contact Us", value: "dubai@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Experience luxury and adventure in Dubai. Visit the Burj Khalifa, desert safaris, and shopping malls.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "Desert Safari",
        days: 2,
        location: "Dubai",
        description: "Enjoy dune bashing and a night in the desert.",
        price: 3200,
        oldPrice: 3700,
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "City Tour",
        days: 3,
        location: "Dubai",
        description: "Explore Dubai's modern marvels and old souks.",
        price: 2900,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
  {
    name: "sydney",
    displayName: "Sydney",
    hero: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
    info: [
      { icon: "📦", label: "Packages", value: "2 Available" },
      { icon: "📞", label: "Tour Office", value: "+61 2 1234 5678" },
      { icon: "✉️", label: "Contact Us", value: "sydney@travel.com" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
    ],
    description: "Visit the iconic Sydney Opera House, Harbour Bridge, and enjoy the beautiful beaches.",
    sections: [
      { title: "Review and Payment" },
      { title: "Activities and Transportation" },
      { title: "Destination and Travel Dates" },
    ],
    packages: [
      {
        title: "Sydney Explorer",
        days: 4,
        location: "Sydney",
        description: "See the highlights of Sydney in a guided tour.",
        price: 5400,
        oldPrice: 6000,
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
      },
      {
        title: "Beach Adventure",
        days: 3,
        location: "Sydney",
        description: "Enjoy Sydney's famous Bondi and Manly beaches.",
        price: 4800,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=600&q=80",
        sale: true,
      },
    ],
  },
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

function PackageCard({ title, days, location, description, price, oldPrice, image, sale, onClick, onBack }) {
  return (
    <div
      className="bg-white rounded-xl shadow p-4 flex flex-col w-full max-w-xs cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
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
      <button
        className="bg-[#7B61FF] text-white rounded-lg py-2 font-semibold hover:bg-[#6a4ee6] transition"
        onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}
      >
        Details
      </button>
      {onBack && (
        <button
          className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded-lg hover:bg-gray-300 transition mt-2"
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
        >
          Back to Packages
        </button>
      )}
    </div>
  );
}

export default function DestinationDetails() {
  const router = useRouter();
  const { name, package: packageQuery } = router.query;
  // Use kebab-case for matching (replace spaces with dashes and lowercase)
  const normalizedName = (name || "").toLowerCase().replace(/\s+/g, "-");
  const destination = destinations.find(
    (d) => d.name === normalizedName
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

  // If package query param is present, show only that package
  if (packageQuery) {
    const pkg = destination.packages.find(
      (p) =>
        p.title.toLowerCase().replace(/\s+/g, "-") ===
        packageQuery.toLowerCase()
    );
    if (!pkg) {
      return (
        <div className="flex flex-col min-h-screen items-center justify-center">
          <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
          <button
            className="bg-[#7B61FF] text-white px-4 py-2 rounded"
            onClick={() => router.push(`/destinations/${destination.name}`)}
          >
            Back to Packages
          </button>
        </div>
      );
    }
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <div className="w-full h-80 relative">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl font-extrabold">{pkg.title}</h1>
          </div>
        </div>
        <main className="flex flex-col items-center py-12 flex-1 w-full">
          <PackageCard {...pkg} onBack={() => router.push(`/destinations/${destination.name}`)} />
        </main>
        <Footer />
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
              <PackageCard
                key={idx}
                {...pkg}
                onBack={null}
                onClick={() =>
                  router.push({
                    pathname: `/destinations/${destination.name}`,
                    query: { package: pkg.title.toLowerCase().replace(/\s+/g, "-") },
                  })
                }
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
