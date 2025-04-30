import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Personalize() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Personalize Your Journey | Love Travel</title>
      </Head>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex flex-col items-center justify-center flex-1 py-16">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-[#7B61FF]">Personalize Your Journey</h1>
          <p className="text-gray-600 mb-8 text-center max-w-xl">
            Here you can customize your travel package by selecting your destination, activities, hotel, and transport options.
          </p>
          {/* Add your personalization form/components here */}
          <button
            className="bg-[#7B61FF] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#6a4ee6] transition"
            onClick={() => router.push("/packages")}
          >
            Back to Packages
          </button>
        </main>
        <Footer />
      </div>
    </>
  );
}
