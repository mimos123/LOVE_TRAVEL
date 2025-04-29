import { articles } from "../../lib/blogData";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export async function getStaticPaths() {
  return {
    paths: articles.map((a) => ({ params: { slug: a.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const article = articles.find((a) => a.slug === params.slug);
  return { props: { article } };
}

export default function BlogPost({ article }) {
  const router = useRouter();
  const modalRef = useRef();

  // Close on click outside
  useEffect(() => {
    function handle(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        router.push("/blog");
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [router]);

  // Close on ESC
  useEffect(() => {
    function handle(e) {
      if (e.key === "Escape") router.push("/blog");
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [router]);

  if (!article) return null;

  // ...testimonial and extraImages as before...
  const testimonial = {
    text: `I recently used the services of thisTravel Agency for my trip to Europe and I couldn't be happier. The team took care of everything from flights to hotels to tours, making my trip planning stress-free. They were very knowledgeable about the destinations and gave great recommendations on things to do and see.`,
    author: "Emily Stuart",
    role: "Traveler",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  };
  const extraImages = [
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <div
        ref={modalRef}
        className="relative bg-gray-50 rounded-2xl shadow-2xl max-w-3xl w-full mx-2 overflow-y-auto max-h-[90vh] flex flex-col"
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
          onClick={() => router.push("/blog")}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Header */}
        <div className="bg-gray-100 pb-6 pt-10 flex flex-col items-center rounded-t-2xl">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center mb-2" style={{fontFamily: "Poppins, sans-serif"}}>
            {article.title}
          </h1>
          <div className="text-gray-500 text-sm mb-2">{article.date}</div>
          <div className="flex justify-center mb-2">
            <span className="rounded-full bg-white shadow p-2">
              <svg width="28" height="28" fill="#6366f1" viewBox="0 0 24 24">
                <path d="M12 16.5c-.28 0-.53-.11-.71-.29l-5.5-5.5a1 1 0 1 1 1.42-1.42l4.29 4.3V5a1 1 0 1 1 2 0v8.59l4.3-4.3a1 1 0 1 1 1.41 1.42l-5.5 5.5c-.18.18-.43.29-.71.29z"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Main image */}
        <div className="flex justify-center mt-2 px-4">
          <div className="bg-white rounded-2xl shadow-lg border-4 border-blue-100 p-2 w-full">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={400}
              className="rounded-xl object-cover w-full h-[220px] md:h-[300px]"
              style={{background: "#eee"}}
              priority
            />
          </div>
        </div>

        {/* Article content */}
        <div className="px-6 pt-6 pb-2 flex-1 overflow-y-auto">
          <div className="text-gray-700 text-base leading-relaxed mb-8">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Testimonial box */}
          <div className="bg-gray-100 rounded-xl p-6 mb-8 shadow flex flex-col items-center">
            <p className="text-gray-700 text-base mb-4 text-center italic">
              {testimonial.text}
            </p>
            <div className="flex items-center gap-3">
              <Image src={testimonial.avatar} alt={testimonial.author} width={48} height={48} className="rounded-full" />
              <div>
                <div className="font-bold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-500 text-xs">{testimonial.role}</div>
                <div className="text-yellow-400 text-lg leading-none">★ ★ ★ ★ ★</div>
              </div>
            </div>
          </div>

          {/* Extra images row */}
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            {extraImages.map((img, i) => (
              <div key={i} className="flex-1 rounded-xl overflow-hidden shadow">
                <Image
                  src={img}
                  alt={`Extra ${i + 1}`}
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                  style={{background: "#eee"}}
                />
              </div>
            ))}
          </div>

          {/* Back link */}
          <div className="mb-2 text-center">
            <Link href="/blog" className="text-indigo-600 hover:underline">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
