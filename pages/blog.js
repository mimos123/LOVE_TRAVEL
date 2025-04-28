import Image from "next/image";

const articles = [
  {
    title: "Plan the Perfect Vacation",
    date: "April 7, 2023",
    description:
      "Planning a vacation can be overwhelming, but this post offers a step-by-step guide to help readers create a comprehensive travel itinerary. From choosing a destination to booking accommodations and activities, readers will learn how to plan a stress-free and enjoyable trip.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Explore the Wonders",
    date: "April 7, 2023",
    description:
      "Must-see destinations and experiences, including wildlife and cultural experiences.",
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Traveling on a Budget",
    date: "April 7, 2023",
    description:
      "Practical advice for travelers who want to see the world without breaking the bank.",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
  {
    title: "Must-See Landmarks",
    date: "April 7, 2023",
    description:
      "Iconic landmarks that make Europe one of the world’s most popular travel destinations.",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    link: "#",
  },
];

export default function Blog() {
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
          <h1 className="text-white text-3xl md:text-5xl font-extrabold">Blog</h1>
        </div>
      </div>
      {/* Blog Articles Grid */}
      <main className="flex flex-col items-center justify-center flex-1 py-16">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-t-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded mb-3">
                  {article.date}
                </span>
                <h3 className="text-xl font-extrabold mb-2">{article.title}</h3>
                <p className="text-gray-700 mb-6 flex-1">{article.description}</p>
                <a
                  href={article.link}
                  className="inline-block bg-indigo-600 text-white font-semibold rounded px-5 py-2 text-sm hover:bg-indigo-700 transition self-start"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
