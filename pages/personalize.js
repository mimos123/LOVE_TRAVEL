import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Footer from "../components/Footer";

// Import dummy data from data folder
import hotelsData from "../data/hotelsData";
import activitiesData from "../data/activitiesData";
import transportsData from "../data/transportsData";

export default function Personalize() {
  const router = useRouter();
  const [destinations, setDestinations] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [activities, setActivities] = useState([]);
  const [transports, setTransports] = useState([]);
  const [form, setForm] = useState({
    title: "",
    destination: "",
    activity: "",
    hotel: "",
    transport: "",
    price: "",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Dummy destinations based on data in hotelsData, activitiesData, transportsData
    // You can also create a destinationsData.js if you want
    const allDestinations = [
      ...new Set([
        ...hotelsData.map(h => h.destination),
        ...activitiesData.map(a => a.destination),
        ...transportsData.map(t => t.destination),
      ]),
    ];
    setDestinations(allDestinations.map(name => ({ name })));
  }, []);

  // Filter hotels, activities, transports for selected destination from dummy data
  useEffect(() => {
    if (form.destination) {
      setHotels(hotelsData.filter(h => h.destination === form.destination));
      setActivities(activitiesData.filter(a => a.destination === form.destination));
      setTransports(transportsData.filter(t => t.destination === form.destination));
    } else {
      setHotels([]);
      setActivities([]);
      setTransports([]);
    }
  }, [form.destination]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Calculate total price from selected hotel, activity, and transport
  const hotelPrice = hotels.find(h => h.name === form.hotel)?.price || 0;
  const activityPrice = activities.find(a => a.name === form.activity)?.price || 0;
  const transportPrice = transports.find(t => t.name === form.transport)?.price || 0;
  const totalPrice = hotelPrice + activityPrice + transportPrice;

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setSuccess("");
    // Simulate API call or handle as needed
    setTimeout(() => {
      setSuccess("Package created successfully!");
      setForm({
        title: "",
        destination: "",
        activity: "",
        hotel: "",
        transport: "",
        price: "",
      });
    }, 500);
  };

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
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-8 w-full max-w-lg mb-8">
            <div className="mb-4">
              <label className="block font-semibold mb-1">Title:</label>
              <input
                className="w-full p-2 border rounded"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Package Title"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Destination:</label>
              <select
                className="w-full p-2 border rounded"
                name="destination"
                value={form.destination}
                onChange={handleChange}
                required
              >
                <option value="">Select destination</option>
                {destinations.map(dest => (
                  <option key={dest.name} value={dest.name}>{dest.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Hotel:</label>
              <select
                className="w-full p-2 border rounded"
                name="hotel"
                value={form.hotel}
                onChange={handleChange}
                required
                disabled={!form.destination}
              >
                <option value="">Select hotel</option>
                {hotels.map(hotel => (
                  <option key={hotel.name} value={hotel.name}>
                    {hotel.name} ({hotel.price} TND)
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Activity:</label>
              <select
                className="w-full p-2 border rounded"
                name="activity"
                value={form.activity}
                onChange={handleChange}
                required
                disabled={!form.destination}
              >
                <option value="">Select activity</option>
                {activities.map(act => (
                  <option key={act.name} value={act.name}>
                    {act.name} ({act.price} TND)
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Transport:</label>
              <select
                className="w-full p-2 border rounded"
                name="transport"
                value={form.transport}
                onChange={handleChange}
                required
                disabled={!form.destination}
              >
                <option value="">Select transport</option>
                {transports.map(tr => (
                  <option key={tr.name} value={tr.name}>
                    {tr.name} ({tr.price} TND)
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 font-bold text-lg text-[#7B61FF]">
              Total Price: {totalPrice} TND
            </div>
            <button
              type="submit"
              className="w-full bg-[#7B61FF] text-white font-bold py-3 rounded-lg hover:bg-[#6a4ee6] transition"
            >
              Create Package
            </button>
            {success && <div className="mt-4 text-green-600">{success}</div>}
            {error && <div className="mt-4 text-red-600">{error}</div>}
          </form>
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
