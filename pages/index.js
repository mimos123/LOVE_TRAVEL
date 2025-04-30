import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Footer from "../components/Footer";
import packagesData from "../data/packagesData";

function AuthPopup({ mode, onClose, onSwitch }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (mode === "login") {
      try {
        const res = await fetch('http://localhost:8000/login/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (res.ok) {
          onClose();
          router.reload();
        } else {
          setError(data.error || 'Login failed');
        }
      } catch (err) {
        setError('Network or server error');
      }
    } else {
      try {
        const res = await fetch('http://localhost:8000/register/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ username, password, email })
        });
        const data = await res.json();
        if (res.ok) {
          onSwitch("login");
        } else {
          setError(data.error || 'Signup failed');
        }
      } catch (err) {
        setError('Network or server error');
      }
    }
  };

  return (
    <ModalOverlay>
      <StyledWrapper>
        <div className="form-box">
          <form className="form" onSubmit={handleSubmit}>
            <span className="title">{mode === "login" ? "Log in" : "Sign up"}</span>
            <span className="subtitle">
              {mode === "login"
                ? "Access your account with your username and password."
                : "Create a free account with your email."}
            </span>
            <div className="form-container">
              <input
                type="text"
                className="input"
                placeholder={mode === "login" ? "Username" : "Full Name"}
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
              {mode === "signup" && (
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              )}
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete={mode === "login" ? "current-password" : "new-password"}
                required
              />
            </div>
            <button type="submit">{mode === "login" ? "Log in" : "Sign up"}</button>
            {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
          </form>
          <div className="form-section">
            {mode === "login" ? (
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={e => { e.preventDefault(); onSwitch("signup"); }}>Sign up</a>
              </p>
            ) : (
              <p>
                Have an account?{" "}
                <a href="#" onClick={e => { e.preventDefault(); onSwitch("login"); }}>Log in</a>
              </p>
            )}
          </div>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>
      </StyledWrapper>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledWrapper = styled.div`
  position: relative;
  .form-box {
    max-width: 300px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    margin: 40px auto;
  }
  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }
  .title {
    font-weight: bold;
    font-size: 1.6rem;
  }
  .subtitle {
    font-size: 1rem;
    color: #666;
  }
  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 .5rem;
    width: 100%;
  }
  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: .9rem;
    padding: 8px 15px;
  }
  .form-section {
    padding: 16px;
    font-size: .85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }
  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color .3s ease;
    cursor: pointer;
  }
  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }
  .form button {
    background-color: #0066ff;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .3s ease;
  }
  .form button:hover {
    background-color: #005ce6;
  }
  .close-btn {
    position: absolute;
    top: 8px;
    right: 18px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #888;
    cursor: pointer;
    transition: color .2s;
    z-index: 2;
  }
  .close-btn:hover {
    color: #333;
  }
`;

export default function Home() {
  const lastScrollY = useRef(0);
  const [user, setUser] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [hovered, setHovered] = useState(null);
  const [authPopup, setAuthPopup] = useState(null); // null | "login" | "signup"
  const router = useRouter();

  useEffect(() => {
    // Navbar show/hide on scroll
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Fetch current user info from backend
    fetch("http://localhost:8000/api/current_user/", {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.username) setUser(data);
        else setUser(null);
      })
      .catch(() => setUser(null)); // Prevent crash on fetch error
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:8000/logout/", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    // Optionally reload or redirect
    window.location.reload();
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/destinations", label: "Destinations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  // Select 3 random packages from packagesData
  const [randomPackages, setRandomPackages] = useState([]);
  useEffect(() => {
    const shuffled = [...packagesData].sort(() => 0.5 - Math.random());
    setRandomPackages(shuffled.slice(0, 3));
  }, []);

  return (
    <div>
      <header>
        <nav
          className={`w-full bg-gray-50 flex items-center justify-between px-8 py-4 transition-transform duration-300 z-50 fixed top-0 left-0 ${
            showNavbar ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ boxShadow: "0 2px 8px 0 rgb(0 0 0 / 0.04)" }}
        >
          <div className="flex items-center gap-1">
            <Image src="/Logo.png" alt="Logo" width={120} height={40} priority />
          </div>
          <ul className="flex items-center gap-6 font-medium text-black relative m-0 p-0 list-none">
            {navItems.map((item, idx) => (
              <li
                key={item.href}
                className="relative group hover:text-indigo-700 cursor-pointer transition"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link href={item.href} legacyBehavior>
                  <span className={isActive(item.href) ? "text-indigo-600 font-bold" : ""}>
                    {item.label}
                  </span>
                </Link>
                <span
                  className={`
                    absolute left-0 -bottom-1 h-0.5 bg-indigo-600 rounded
                    transition-all duration-300
                    ${isActive(item.href) && hovered === null ? "w-full opacity-100" : ""}
                    ${hovered === idx ? "w-full opacity-100" : ""}
                    ${!isActive(item.href) && hovered !== idx ? "w-0 opacity-0" : ""}
                  `}
                  style={{
                    transitionProperty: "width,opacity",
                  }}
                ></span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="ml-4 text-gray-700 font-semibold">Welcome, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="ml-2 bg-blue-600 text-white font-semibold rounded-md px-8 py-2 shadow transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="relative overflow-hidden bg-blue-600 text-white font-semibold rounded-md px-8 py-2 shadow transition hover:bg-blue-700"
                  style={{ position: "relative" }}
                  onClick={() => setAuthPopup("login")}
                >
                  Login
                </button>
                <button
                  className="relative overflow-hidden bg-blue-600 text-white font-semibold rounded-md px-8 py-2 shadow transition hover:bg-blue-700"
                  style={{ position: "relative" }}
                  onClick={() => setAuthPopup("signup")}
                >
                  Create account
                </button>
              </>
            )}
          </div>
        </nav>
      </header>
      {authPopup && (
        <AuthPopup
          mode={authPopup}
          onClose={() => setAuthPopup(null)}
          onSwitch={setAuthPopup}
        />
      )}
      <main className="flex flex-col min-h-screen bg-gradient-to-br from-blue-20 to-blue-50">
        {/* Hero Section with CSS Parallax */}
        <div
          className="w-full h-[420px] md:h-[600px] parallax relative flex items-center"
          style={{
            backgroundImage: 'url("/worldindots.png")',
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "#F2F2F2", opacity: 0.30 }}></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full h-full px-6 md:px-20">
            {/* Left: Text */}
            <div className="flex-1 flex flex-col justify-center items-start pt-10 md:pt-0 md:pr-4 md:items-center">
              <span className="text-gray-400 text-base md:text-lg font-semibold mb-3 tracking-wide">
                LOVE TRAVEL AGENCY
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-2 leading-tight" style={{fontFamily: "Poppins, sans-serif"}}>
                <span className="relative inline-block">
                  <span className="z-10 relative">Adventure</span>
                  <span
                    className="absolute left-0 bottom-1 w-full h-2"
                    style={{
                      background: "#FFC700",
                      zIndex: 0,
                      borderRadius: "4px",
                    }}
                  ></span>
                </span>
                <span className="text-black">&nbsp;&amp;</span>
                <br />
                <span className="text-black">Experience</span>
                <br />
                <span className="text-black">The Travel !</span>
              </h1>
            </div>
            {/* Right: Pill Image */}
            <div className="flex-1 flex justify-center items-center mt-4 md:mt-0 md:ml-[-32px]">
              <div className="w-[220px] h-[340px] md:w-[220px] md:h-[420px] bg-white shadow-lg overflow-hidden rounded-[100px] md:rounded-[150px] flex items-center justify-center">
                <img
                  src="https://bunny-wp-pullzone-nfqzsydbnl.b-cdn.net/wp-content/uploads/2024/07/istanbul-gezilecek-yerler.jpg"
                  alt="Travel"
                  className="object-cover w-full h-full"
                  width={300}
                  height={420}
                  loading="eager"
                />
              </div>
            </div>
          </div>
          {/* Floating Search Bar */}
          <div className="absolute left-1/2 -bottom-12 -translate-x-1/2 w-[95%] max-w-5xl bg-white rounded-2xl shadow-lg flex flex-col md:flex-row justify-between px-2 md:px-8 py-4 z-20">
            {/* Search */}
            <div className="flex items-center flex-1 min-w-[180px] gap-3 px-2 md:px-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f8fc]">
                <svg width="28" height="28" fill="none" stroke="#00BCD4" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-5">Search</span>
                <input
                  type="text"
                  placeholder="Insert keyword"
                  className="text-gray-400 text-base bg-transparent outline-none border-none p-0 placeholder-gray-400"
                  style={{ minWidth: 0 }}
                />
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-4"></div>
            {/* Destinations */}
            <div className="flex items-center flex-1 min-w-[180px] gap-3 px-2 md:px-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f8fc]">
                <svg width="28" height="28" fill="none" stroke="#00BCD4" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-5">Destinations</span>
                <select className="text-gray-400 text-base bg-transparent outline-none border-none p-0">
                  <option>All Destinations</option>
                  <option>Paris</option>
                  <option>Rome</option>
                  <option>London</option>
                  <option>Tokyo</option>
                  <option>New York</option>
                  <option>Istanbul</option>
                  <option>Barcelona</option>
                  <option>Dubai</option>
                  <option>Sydney</option>
                </select>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-gray-200 mx-4"></div>
            {/* Typologies */}
            <div className="flex items-center flex-1 min-w-[180px] gap-3 px-2 md:px-0">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e6f8fc]">
                <svg width="28" height="28" fill="none" stroke="#00BCD4" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0v20m0-20C7.03 2 2 7.03 2 12h20c0-4.97-5.03-10-10-10z"/>
                </svg>
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-lg leading-5">Typologies</span>
                <select className="text-gray-400 text-base bg-transparent outline-none border-none p-0">
                  <option>All Typologies</option>
                  <option>Adventure</option>
                  <option>Culture</option>
                  <option>Relax</option>
                  <option>Nature</option>
                </select>
              </div>
            </div>
            {/* Search Button */}
            <div className="flex items-center mt-4 md:mt-0 md:ml-6">
              <button className="bg-[#7B61FF] hover:bg-[#6a4ee6] transition text-white font-bold rounded-xl px-10 py-4 text-lg shadow">
                SEARCH
              </button>
            </div>
          </div>
        </div>
        {/* End Floating Search Bar */}
      </main>
      {/* Landing Content Section */}
      <section className="w-full flex flex-col items-center bg-white">
        <div className="w-full max-w-6xl px-4">
          {/* Title & Description */}
          <span className="text-[#7B61FF] font-medium text-base mb-2 block" style={{fontFamily: "Poppins, sans-serif"}}>
            Dream Vacation Destination
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{fontFamily: "Poppins, sans-serif"}}>
            Plan the Trip of a Lifetime<br className="hidden md:block" />with Ease
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Whether you're looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.
          </p>
          <button className="bg-[#7B61FF] text-white rounded-lg px-6 py-2 font-semibold hover:bg-[#6a4ee6] transition mb-8">
            More info
          </button>
          {/* Feature Cards */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="flex-1 flex items-center rounded-xl bg-yellow-400/90 h-24 px-6 shadow relative overflow-hidden">
              <span className="text-3xl mr-4 z-10"> 
                <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8M12 8v8" />
                </svg>
              </span>
              <span className="font-semibold text-white text-lg z-10">City Walks Tour</span>
              <img src="https://images.unsplash.com/photo-1465156799763-2c087c332922?auto=format&fit=crop&w=400&q=40" alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
            </div>
            <div className="flex-1 flex items-center rounded-xl bg-green-400/90 h-24 px-6 shadow relative overflow-hidden">
              <span className="text-3xl mr-4 z-10">
                <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="10" width="16" height="6" rx="2" />
                  <circle cx="8" cy="18" r="2" />
                  <circle cx="16" cy="18" r="2" />
                </svg>
              </span>
              <span className="font-semibold text-white text-lg z-10">Electric Bikes</span>
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=40" alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
            </div>
            <div className="flex-1 flex items-center rounded-xl bg-cyan-400/90 h-24 px-6 shadow relative overflow-hidden">
              <span className="text-3xl mr-4 z-10">
                <svg width="32" height="32" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="10" width="18" height="7" rx="2" />
                  <path d="M7 10V7a5 5 0 0110 0v3" />
                </svg>
              </span>
              <span className="font-semibold text-white text-lg z-10">Skyscrapers View</span>
              <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=40" alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20" />
            </div>
          </div>
          {/* Package Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            {randomPackages.map((pkg, idx) => (
              <div key={pkg.id || idx} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col w-full md:w-1/3">
                <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center text-gray-400 text-xs mb-2">
                    <span>{pkg.duration} {pkg.duration > 1 ? "Days" : "Day"}</span>
                    <span className="mx-2">•</span>
                    <span>{pkg.location}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{pkg.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1 line-clamp-3">{pkg.description}</p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#7B61FF] text-white rounded-lg px-5 py-2 font-semibold hover:bg-[#6a4ee6] transition">
                      Details
                    </button>
                    <span className="font-bold text-xl text-gray-800">
                      {pkg.currency === "TND" ? "TND" : "$"} {pkg.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
