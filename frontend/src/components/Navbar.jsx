import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ brand = 'Grocery Store' }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const links = [
    { id: 1,href: '#home', label: 'Home' },
    { id: 2,href: '#menu', label: 'Menu' },
    { id: 3,href: '#blog', label: 'Blog' },
    { id: 4,href: '#contact', label: 'Contact' }
  ];

  useEffect(()=>{
    const sections = links.map(l => document.querySelector(l.href));
    const onScroll = () => {
      const pos = window.scrollY + 120;
      sections.forEach(sec => {
        if(
          sec && 
          pos >= sec.offsetTop && 
          pos < sec.offsetTop + sec.offsetHeight
        ){
          setActive(`#${sec.id}`);
        }
      });
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll",onScroll);
  },[])

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({behavior: "smooth"});
  };

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
          {links.map(l => 
          <Link 
          key={l.id} 
          className="nc-link"
          onClick={()=> scrollTo(l.href)}>{l.label}</Link>)}
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
          <Link 
          key={l.id} 
          onClick={() => scrollTo(links.href)} 
          className="nc-mobile-link">
            {l.label}
          </Link>
        ))}
        <Link to="/estimate" className="nc-mobile-cta" onClick={() => setOpen(false)}>Cart / Estimate</Link>
      </div>
    </header>
  );
}

