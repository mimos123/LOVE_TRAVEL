const packagesData = [
  {
    id: 1,
    title: "Romantic Getaway",
    location: "Paris, France",
    price: 6197,
    currency: "TND",
    description: "Experience the magic of Paris with your loved one. Visit the Eiffel Tower, enjoy a Seine river cruise, and indulge in exquisite French cuisine.",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&w=600&q=80",
    category: "romance",
    duration: 5
  },
  {
    id: 2,
    title: "Adventure Awaits",
    location: "New Zealand",
    price: 9297,
    currency: "TND",
    description: "Explore the stunning landscapes of New Zealand. From the beaches to the mountains, experience adventure like never before.",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=600&q=80",
    category: "adventure",
    duration: 10
  },
  {
    id: 3,
    title: "Cultural Experience",
    location: "Kyoto, Japan",
    price: 7437,
    currency: "TND",
    description: "Immerse yourself in the rich culture and history of Japan. Visit ancient temples, participate in a tea ceremony, and explore the beautiful city of Kyoto.",
    image: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&w=600&q=80",
    category: "culture",
    duration: 7
  },
  {
    id: 4,
    title: "Beach Paradise",
    location: "Maldives",
    price: 10847,
    currency: "TND",
    description: "Relax and unwind in the tropical paradise of Maldives. Enjoy pristine beaches, crystal clear waters, and luxurious overwater bungalows.",
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&w=600&q=80",
    category: "beach",
    duration: 7
  },
  {
    id: 5,
    title: "Wildlife Safari",
    location: "South Africa",
    price: 8670,
    currency: "TND",
    description: "Experience the thrill of a safari in South Africa. See the Big Five and other wildlife in their natural habitat.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=600&q=80",
    category: "wildlife",
    duration: 10
  },
  {
    id: 6,
    title: "Scenic Rail Journey",
    location: "Canada",
    price: 6197,
    currency: "TND",
    description: "Take a breathtaking train journey through the Canadian Rockies. Experience stunning scenery and wildlife from the comfort of your train car.",
    image: "https://images.pexels.com/photos/417142/pexels-photo-417142.jpeg?auto=compress&w=600&q=80",
    category: "scenic",
    duration: 7
  },
  {
    id: 7,
    title: "Gastronomic Delights",
    location: "Italy",
    price: 6817,
    currency: "TND",
    description: "Savor the flavors of Italy on this culinary tour. Visit local markets, take cooking classes, and enjoy wine tastings in Tuscany.",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80",
    category: "gastronomy",
    duration: 8
  },
  {
    id: 8,
    title: "Historical Landmarks",
    location: "Greece",
    price: 7747,
    currency: "TND",
    description: "Explore the ancient ruins and historical landmarks of Greece. Visit the Acropolis, Delphi, and the ancient city of Olympia.",
    image: "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg?auto=compress&w=600&q=80",
    category: "history",
    duration: 9
  },
  {
    id: 9,
    title: "Spiritual Journey",
    location: "Varanasi, India",
    price: 4950,
    currency: "TND",
    description: "Experience the spiritual heart of India in Varanasi. Take a boat ride on the Ganges, visit ancient temples, and witness the evening aarti ceremony.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=600&q=80",
    category: "spiritual",
    duration: 6
  },
  {
    id: 10,
    title: "Festivals of India",
    location: "Rajasthan, India",
    price: 5887,
    currency: "TND",
    description: "Experience the vibrant festivals of India in Rajasthan. Enjoy the colorful markets, traditional music and dance, and delicious cuisine.",
    image: "https://images.pexels.com/photos/356844/pexels-photo-356844.jpeg?auto=compress&w=600&q=80",
    category: "festivals",
    duration: 7
  },
  {
    id: 11,
    title: "Northern Lights Adventure",
    location: "Iceland",
    price: 8990,
    currency: "TND",
    description: "Chase the magical Northern Lights in Iceland. Enjoy geothermal spas, glaciers, and unique volcanic landscapes.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=600&q=80",
    category: "nature",
    duration: 6
  },
  {
    id: 12,
    title: "Desert Safari",
    location: "Dubai, UAE",
    price: 4990,
    currency: "TND",
    description: "Experience the thrill of dune bashing, camel rides, and a night under the stars in the Arabian desert.",
    image: "https://images.pexels.com/photos/248771/pexels-photo-248771.jpeg?auto=compress&w=600&q=80",
    category: "adventure",
    duration: 4
  },
  {
    id: 13,
    title: "Amazon Rainforest Expedition",
    location: "Brazil",
    price: 11200,
    currency: "TND",
    description: "Explore the biodiversity of the Amazon rainforest with guided jungle treks and river cruises.",
    image: "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&w=600&q=80",
    category: "wildlife",
    duration: 8
  },
  {
    id: 14,
    title: "Alpine Ski Retreat",
    location: "Swiss Alps",
    price: 10250,
    currency: "TND",
    description: "Hit the slopes in the Swiss Alps. Enjoy world-class skiing, cozy lodges, and breathtaking mountain views.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&w=600&q=80",
    category: "sports",
    duration: 7
  },
  {
    id: 15,
    title: "City Lights Tour",
    location: "New York, USA",
    price: 7990,
    currency: "TND",
    description: "Discover the energy of New York City. Visit iconic landmarks, Broadway shows, and world-class museums.",
    image: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&w=600&q=80",
    category: "city",
    duration: 5
  },
  {
    id: 16,
    title: "Safari & Beach Combo",
    location: "Kenya & Zanzibar",
    price: 13400,
    currency: "TND",
    description: "Combine thrilling safaris in Kenya with relaxing beach days in Zanzibar for the ultimate African adventure.",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&w=600&q=80",
    category: "combo",
    duration: 12
  },
  {
    id: 17,
    title: "Patagonia Trekking",
    location: "Argentina & Chile",
    price: 11900,
    currency: "TND",
    description: "Trek through the dramatic landscapes of Patagonia, with glaciers, lakes, and towering peaks.",
    image: "https://images.pexels.com/photos/208701/pexels-photo-208701.jpeg?auto=compress&w=600&q=80",
    category: "adventure",
    duration: 10
  },
  {
    id: 18,
    title: "Bali Wellness Escape",
    location: "Bali, Indonesia",
    price: 6700,
    currency: "TND",
    description: "Rejuvenate your mind and body with yoga, spa treatments, and healthy cuisine in beautiful Bali.",
    image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&w=600&q=80",
    category: "wellness",
    duration: 7
  },
  {
    id: 19,
    title: "Mediterranean Cruise",
    location: "Italy, Greece, Spain",
    price: 9500,
    currency: "TND",
    description: "Sail the Mediterranean Sea, stopping at historic ports and enjoying luxury onboard amenities.",
    image: "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=600&q=80",
    category: "cruise",
    duration: 9
  },
  {
    id: 20,
    title: "Australian Outback Adventure",
    location: "Australia",
    price: 12500,
    currency: "TND",
    description: "Explore the rugged beauty of the Australian Outback, from Uluru to the Great Barrier Reef.",
    image: "https://images.pexels.com/photos/164631/pexels-photo-164631.jpeg?auto=compress&w=600&q=80",
    category: "adventure",
    duration: 11
  }
];

export default packagesData;
