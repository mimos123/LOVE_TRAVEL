import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const LoginPopup = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // This POSTs to your Django backend at /login/
      // Django checks the username/password against the Django database (auth_user table)
      // You can view/manage users at http://localhost:8000/admin/auth/user/
      const res = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (res.ok) {
        router.push('/');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      setError('Network or server error');
    }
  };

  return (
    <ModalOverlay>
      <StyledWrapper>
        <div className="form-box">
          <form className="form" onSubmit={handleLogin}>
            <span className="title">Log in</span>
            <span className="subtitle">Access your account with your username and password.</span>
            <div className="form-container">
              {/* Username field */}
              <input
                type="text"
                className="input"
                placeholder="Username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
              {/* Password field */}
              <input
                type="password"
                className="input"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
            <button type="submit">Log in</button>
            {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
          </form>
          <div className="form-section">
            <p>
              Don't have an account?{' '}
              <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close">&times;</button>
      </StyledWrapper>
    </ModalOverlay>
  );
};

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

export default function LoginPage() {
  const [show, setShow] = useState(true);

  if (!show) return null;
  return <LoginPopup onClose={() => setShow(false)} />;
}
