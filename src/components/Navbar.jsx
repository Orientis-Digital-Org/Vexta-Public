import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Docs', path: '/docs' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' }
  ];

  const linkBaseStyle =
    "text-[13px] font-mono tracking-wider transition-all py-1.5 px-3 rounded-[2px] flex items-center gap-1.5 uppercase cursor-pointer select-none";
  const activeStyle = `${linkBaseStyle} text-[#38bdf8] bg-[#0c182c]/80 border border-[#1e3a66] shadow-[0_0_12px_rgba(56,189,248,0.2)] font-semibold`;
  const inactiveStyle = `${linkBaseStyle} text-[#94a3b8] hover:text-[#38bdf8] hover:bg-[#0c1322] border border-transparent`;

  return (
    <>
      <header className="h-[64px] fixed top-0 left-0 right-0 w-full z-[999] bg-[#070b12]/95 backdrop-blur-md border-b border-[#1e2e4a]">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex justify-between items-center h-full">
          {/* Brand Logo / Wordmark */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 no-underline group cursor-pointer select-none min-w-0"
          >
            <div className="relative w-9 h-9 border border-[#1e3a66] rounded-[3px] flex items-center justify-center bg-[#0c182c] shadow-[0_0_12px_rgba(56,189,248,0.2)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:border-[#38bdf8] transition-all duration-300 p-1 overflow-hidden shrink-0">
              <img src="/img/vexta-logo.png" alt="Vexta Logo" className="w-full h-full object-contain rounded-[2px] transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]"></span>
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-sm sm:text-base font-bold text-[#f8fafc] tracking-[0.14em] uppercase leading-tight truncate group-hover:text-[#38bdf8] transition-colors">
                  VEXTA
                </span>
                <span className="text-[#38bdf8] animate-pulse font-mono text-xs font-bold leading-none">//</span>
                <span className="font-mono text-[10px] text-[#38bdf8] uppercase tracking-wider hidden sm:inline">E2EE</span>
              </div>
              <span className="font-mono text-[9px] sm:text-[10px] text-[#94a3b8] tracking-[0.12em] uppercase leading-tight truncate flex items-center gap-1">
                <span>BY</span> <span className="text-[#cbd5e1] font-semibold">ORIENTIS DIGITAL</span>
              </span>
            </div>
          </Link>

          {/* Navigation Links & Action Button */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-1" aria-label="Desktop Navigation">
              {navLinks.map((link) => {
                const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={isActive ? activeStyle : inactiveStyle}
                  >
                    <span className="text-[#38bdf8] text-[11px] opacity-75">{isActive ? '>' : '#'}</span>
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </nav>

            {/* Quick Action CTA Button */}
            <NavLink
              to="/downloads"
              className="btn-cyber-primary text-xs py-2 px-3.5 tracking-wider hidden sm:inline-flex items-center gap-2"
            >
              <i className="fa-solid fa-download text-xs text-[#38bdf8]"></i>
              <span>[ GET CLIENT ]</span>
            </NavLink>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center justify-center w-9 h-9 border border-[#1e2e4a] rounded-[2px] bg-[#0c1322] text-[#38bdf8] hover:border-[#38bdf8] transition-colors cursor-pointer"
            >
              <i className={`fa-solid ${mobileOpen ? 'fa-xmark text-lg' : 'fa-bars text-sm'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[64px] bg-[#070b12]/98 backdrop-blur-2xl z-[998] flex flex-col p-6 md:hidden animate-in fade-in duration-200 border-b border-[#1e2e4a] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-[#1e2e4a] mb-4 text-xs font-mono text-[#94a3b8]">
            <span className="flex items-center gap-2">
              <span className="status-pulse"></span>
              <span>NAVIGATION_MENU</span>
            </span>
            <span className="text-[#38bdf8]">SYS_ACTIVE</span>
          </div>

          <ul className="flex flex-col list-none gap-2.5 p-0 m-0">
            {navLinks.map((link) => {
              const isActive = link.path === '/' ? location.pathname === '/' : location.pathname.startsWith(link.path);
              return (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-mono tracking-wider py-3 px-4 rounded-[2px] transition-all flex items-center justify-between uppercase no-underline ${
                      isActive
                        ? 'bg-[#0c182c] text-[#38bdf8] font-medium border border-[#1e3a66] border-l-[3px] border-l-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                        : 'text-[#cbd5e1] hover:text-[#38bdf8] bg-[#0a101d] border border-[#1e2e4a] hover:bg-[#0f1a2e]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[#38bdf8]">{isActive ? '>' : '#'}</span>
                      <span>{link.name}</span>
                    </span>
                    <i className="fa-solid fa-chevron-right text-xs opacity-50"></i>
                  </NavLink>
                </li>
              );
            })}
            <li className="pt-3">
              <NavLink
                to="/downloads"
                onClick={() => setMobileOpen(false)}
                className="btn-cyber-primary w-full py-3 text-center flex items-center justify-center gap-2 no-underline text-sm"
              >
                <i className="fa-solid fa-download text-sm"></i>
                <span>[ DOWNLOAD VEXTA CLIENT ]</span>
              </NavLink>
            </li>
          </ul>

          <div className="mt-auto pt-6 border-t border-[#1e2e4a] text-center font-mono text-[11px] text-[#64748b]">
            ORIENTIS DIGITAL // SOVEREIGN CYBER SYSTEMS
          </div>
        </div>
      )}
    </>
  );
}
