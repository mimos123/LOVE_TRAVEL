import '../styles/globals.css'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

// Login Form Component (from prompt)
const LoginForm = ({ onClose, onSwitch }) => (
  <StyledWrapper>
    <div className="form-box">
      <form className="form" onSubmit={e => { e.preventDefault(); /* handle login */ }}>
        <span className="title">Log in</span>
        <span className="subtitle">Access your account with your email.</span>
        <div className="form-container">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button type="submit">Log in</button>
      </form>
      <div className="form-section">
        <p>Don't have an account? <a href="#" onClick={e => { e.preventDefault(); onSwitch(); }}>Sign up</a></p>
      </div>
    </div>
  </StyledWrapper>
);

// Signup Form Component (from prompt)
const SignupForm = ({ onClose, onSwitch }) => (
  <StyledWrapper>
    <div className="form-box">
      <form className="form" onSubmit={e => { e.preventDefault(); /* handle signup */ }}>
        <span className="title">Sign up</span>
        <span className="subtitle">Create a free account with your email.</span>
        <div className="form-container">
          <input type="text" className="input" placeholder="Full Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div className="form-section">
        <p>Have an account? <a href="#" onClick={e => { e.preventDefault(); onSwitch(); }}>Log in</a></p>
      </div>
    </div>
  </StyledWrapper>
);

// Modal wrapper with animation
function Modal({ children, onClose }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  // Animation trigger
  useLayoutEffect(() => {
    setShow(true);
  }, []);

  // Close on click outside
  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [onClose]);
  // Close on ESC
  useEffect(() => {
    function handle(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70">
      <div
        ref={ref}
        className={`
          transition-all duration-300
          ${show ? "scale-100 opacity-100" : "scale-90 opacity-0"}
        `}
        style={{ willChange: "transform,opacity" }}
      >
        {children}
      </div>
    </div>
  );
}

// StyledWrapper for forms
const StyledWrapper = styled.div`
  .form-box {
    max-width: 300px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
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
`;

function Navbar({ user, handleLogout }) {
  const [showNavbar, setShowNavbar] = useState(true);
  const [hovered, setHovered] = useState(null);
  const lastScrollY = useRef(0);
  const router = useRouter();

  useEffect(() => {
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

  const isActive = (href) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/packages", label: "Packages" },
    { href: "/destinations", label: "Destinations" },
    { href: "/blog", label: "Blog" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
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
              className="ml-2 relative overflow-hidden bg-blue-600 text-white font-semibold rounded-md px-8 py-2 shadow transition"
              style={{ position: "relative" }}
              onMouseEnter={e => {
                const ink = document.createElement("span");
                ink.className = "inkdrop";
                ink.style.left = e.nativeEvent.offsetX + "px";
                ink.style.top = e.nativeEvent.offsetY + "px";
                e.currentTarget.appendChild(ink);
                setTimeout(() => ink.remove(), 600);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="relative overflow-hidden bg-blue-600 text-white font-semibold rounded-md px-8 py-2 shadow transition hover:bg-blue-700"
              style={{ position: "relative" }}
              onClick={() => window.location.href = "/login"}
              onMouseEnter={e => {
                const ink = document.createElement("span");
                ink.className = "inkdrop";
                ink.style.left = e.nativeEvent.offsetX + "px";
                ink.style.top = e.nativeEvent.offsetY + "px";
                e.currentTarget.appendChild(ink);
                setTimeout(() => ink.remove(), 600);
              }}
            >
              Login
            </button>
            <button
              className="relative overflow-hidden bg-blue-600 text-white font-semibold rounded-md px-8 py-2 shadow transition hover:bg-blue-700"
              style={{ position: "relative" }}
              onClick={() => window.location.href = "/signup"}
              onMouseEnter={e => {
                const ink = document.createElement("span");
                ink.className = "inkdrop";
                ink.style.left = e.nativeEvent.offsetX + "px";
                ink.style.top = e.nativeEvent.offsetY + "px";
                e.currentTarget.appendChild(ink);
                setTimeout(() => ink.remove(), 600);
              }}
            >
              Create account
            </button>
          </>
        )}
      </div>
      <style jsx global>{`
        .inkdrop {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: inkdrop 0.6s linear;
          background: rgba(59, 130, 246, 0.3);
          pointer-events: none;
          width: 120px;
          height: 120px;
          z-index: 1;
        }
        @keyframes inkdrop {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
}

export default function App({ Component, pageProps }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/current_user/", {
      credentials: "include",
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.username) setUser(data);
        else setUser(null);
      })
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:8000/logout/", {
      method: "POST",
      credentials: "include",
    });
    setUser(null);
    window.location.reload();
  };

  // Modal state
  const [modal, setModal] = useState(null); // 'login' | 'signup' | null

  // Modal switchers
  const openLogin = () => setModal('login');
  const openSignup = () => setModal('signup');
  const closeModal = () => setModal(null);

  return (
    <>
      <header>
        <Navbar user={user} handleLogout={handleLogout} />
      </header>
      <div className="pt-22">
        <Component {...pageProps} />
      </div>
      {modal === 'login' && (
        <Modal onClose={closeModal}>
          <LoginForm onClose={closeModal} onSwitch={() => setModal('signup')} />
        </Modal>
      )}
      {modal === 'signup' && (
        <Modal onClose={closeModal}>
          <SignupForm onClose={closeModal} onSwitch={() => setModal('login')} />
        </Modal>
      )}
    </>
  );
}