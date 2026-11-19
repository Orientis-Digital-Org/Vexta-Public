import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vexta_privacy_acknowledged');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('vexta_privacy_acknowledged', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Privacy and Zero Telemetry Notice"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 rounded-[3px] bg-[#0c1322]/95 border border-[#1e3a66] p-5 shadow-[0_10px_35px_rgba(0,0,0,0.85)] font-sans text-[#f8fafc] transition-all backdrop-blur-md hud-corner-bracket"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#38bdf8] font-semibold tracking-wider">
          <span className="status-pulse"></span>
          <span>// ZERO-TELEMETRY NOTICE</span>
        </div>
      </div>
      <p className="text-xs text-[#94a3b8] leading-relaxed mb-4">
        Vexta is sovereign and zero-knowledge. We deploy zero tracking cookies, zero behavioral beacons, and zero centralized user registries. Your cryptographic keys and chat history reside exclusively on your local hardware.
      </p>
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-[#1e2e4a]">
        <button
          type="button"
          onClick={handleDismiss}
          className="btn-cyber-primary text-xs py-1.5 px-4 h-auto cursor-pointer"
        >
          [ ACKNOWLEDGE ]
        </button>
        <Link
          to="/privacy"
          onClick={() => setVisible(false)}
          className="text-xs font-mono text-[#94a3b8] hover:text-[#38bdf8] underline transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </aside>
  );
}
