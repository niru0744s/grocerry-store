import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ brand = 'Grocery Store' }) {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="nc-header">
      <nav className="nc-nav">
        <div className="nc-brand">
          <Link to="/" className="nc-brand-link">
            <div className="nc-logo">G</div>
            <span className="nc-brand-text">{brand}</span>
          </Link>
        </div>

        <div className="nc-links desktop">
          {links.map(l => <Link key={l.to} to={l.to} className="nc-link">{l.label}</Link>)}
        </div>

        <div className="nc-right">
          <Link to="/estimate" className="nc-cta">Cart / Estimate</Link>
          <button className="nc-hamburger" onClick={() => setOpen(v => !v)} aria-label="menu">
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      <div className={`nc-mobile ${open ? 'open' : ''}`}>
        {links.map(l => (
          <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="nc-mobile-link">
            {l.label}
          </Link>
        ))}
        <Link to="/estimate" className="nc-mobile-cta" onClick={() => setOpen(false)}>Cart / Estimate</Link>
      </div>
    </header>
  );
}

