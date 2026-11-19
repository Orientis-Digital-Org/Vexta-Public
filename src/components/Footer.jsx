import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 md:py-16 border-t border-[#1e2e4a] bg-[#070b12] z-20 relative overflow-hidden mt-auto">
      {/* Background ambient highlights */}
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#38bdf8]/4 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#0ea5e9]/3 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status Indicator Bar */}
        <div className="flex items-center justify-between border-b border-[#1e2e4a] pb-4 mb-10 flex-wrap gap-4 select-none">
          <div className="flex items-center gap-2.5">
            <span className="status-pulse"></span>
            <span className="font-mono text-xs md:text-sm tracking-widest uppercase text-[#38bdf8] font-semibold">
              // VEXTA APP // SOVEREIGN ENCRYPTED MESSENGER
            </span>
          </div>
          <div className="font-mono text-[11px] md:text-xs text-[#94a3b8] tracking-widest uppercase font-medium flex items-center gap-2">
            <span className="text-[#38bdf8]">[OK]</span>
            <span>ED25519 &amp; DOUBLE RATCHET VERIFIED // TACLOBAN REGIONAL HQ</span>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          {/* Column 1: Brand & Details */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3 no-underline group cursor-pointer self-start">
              <div className="relative w-9 h-9 border border-[#1e3a66] rounded-[3px] flex items-center justify-center bg-[#0c182c] shadow-[0_0_12px_rgba(56,189,248,0.2)] group-hover:border-[#38bdf8] transition-all duration-300 p-1 overflow-hidden shrink-0">
                <img src="/img/vexta-logo.png" alt="Vexta Logo" className="w-full h-full object-contain rounded-[2px]" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_6px_#38bdf8]"></span>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-sm sm:text-base font-bold text-[#f8fafc] tracking-[0.14em] uppercase leading-tight group-hover:text-[#38bdf8] transition-colors">
                    VEXTA
                  </span>
                  <span className="text-[#38bdf8] font-mono text-xs font-bold leading-none">//</span>
                </div>
                <span className="font-mono text-[9px] sm:text-[10px] text-[#94a3b8] tracking-[0.12em] uppercase leading-tight mt-0.5">
                  ENGINEERED BY ORIENTIS DIGITAL
                </span>
              </div>
            </Link>
            <p className="text-xs md:text-sm text-[#94a3b8] border-l-2 border-[#1e3a66] pl-3.5 leading-relaxed font-sans max-w-sm">
              Vexta is a sovereign, peer-to-peer, end-to-end encrypted messaging application for Windows, Linux, and Android. Private keys, chat histories, and ratchet states remain exclusively on your local hardware.
            </p>
            <div className="font-mono text-[11px] sm:text-[12px] text-[#38bdf8] flex items-center gap-1.5">
              <span>LOC:</span>
              <span className="text-[#cbd5e1]">Tacloban City, Leyte, PH [11.2442°N]</span>
            </div>
          </div>

          {/* Column 2: Directory Registry */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] sm:text-[12px] text-[#38bdf8] uppercase tracking-wider border-b border-[#1e2e4a] pb-2 flex items-center gap-1.5">
              <span>//</span> DIRECTORY_REGISTRY
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs md:text-sm font-mono">
              <NavLink to="/" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                <span className="text-[#38bdf8] text-[10px]">&gt;</span> Home Gateway
              </NavLink>
              <NavLink to="/docs" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                <span className="text-[#38bdf8] text-[10px]">&gt;</span> Protocol Documentation
              </NavLink>
              <NavLink to="/downloads" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                <span className="text-[#38bdf8] text-[10px]">&gt;</span> Client Releases
              </NavLink>
              <NavLink to="/about" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                <span className="text-[#38bdf8] text-[10px]">&gt;</span> Architecture &amp; Team
              </NavLink>
              <NavLink to="/faq" className="text-[#94a3b8] hover:text-[#38bdf8] transition-colors flex items-center gap-1.5">
                <span className="text-[#38bdf8] text-[10px]">&gt;</span> Cryptographic FAQ
              </NavLink>
            </div>
          </div>

          {/* Column 3: Cryptographic Specs */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] sm:text-[12px] text-[#38bdf8] uppercase tracking-wider border-b border-[#1e2e4a] pb-2 flex items-center gap-1.5">
              <span>//</span> ENCRYPTION_STANDARDS
            </h4>
            <div className="flex flex-col gap-2.5 font-mono text-xs text-[#cbd5e1]">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-[#38bdf8] text-xs"></i>
                <span>Ed25519 Identity Signatures</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-repeat text-[#0ea5e9] text-xs"></i>
                <span>X25519 Double Ratchet (PFS/PCS)</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-lock text-[#38bdf8] text-xs"></i>
                <span>AES-256-GCM Payload Cipher</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-vault text-[#94a3b8] text-xs"></i>
                <span>Argon2id Encrypted Local Vault</span>
              </div>
              <div className="flex items-center gap-2 text-[#34d399]">
                <i className="fa-solid fa-network-wired text-xs"></i>
                <span>Direct Peer-to-Peer Relay</span>
              </div>
            </div>
          </div>

          {/* Column 4: Orientis Ecosystem */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-[11px] sm:text-[12px] text-[#38bdf8] uppercase tracking-wider border-b border-[#1e2e4a] pb-2 flex items-center gap-1.5">
              <span>//</span> ORIENTIS_NETWORK
            </h4>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Vexta is part of Orientis Digital's sovereign technology stack built for security, resilience, and cryptographic autonomy.
            </p>
            <div className="flex flex-col gap-2 font-mono text-xs">
              <a
                href="https://orientis.digital"
                target="_blank"
                rel="noreferrer"
                className="text-[#f8fafc] hover:text-[#38bdf8] flex items-center justify-between p-2.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] transition-colors"
              >
                <span>Orientis Digital HQ</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-[#38bdf8]"></i>
              </a>
              <div className="text-[11px] text-[#64748b]">
                SYSTEM: TLS 1.3 // REGIONAL RELAY 08
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-[#1e2e4a] flex flex-col md:flex-row items-center justify-between text-xs text-[#94a3b8] font-mono gap-4 select-none">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
            <span>&copy; {new Date().getFullYear()} ORIENTIS DIGITAL // NODE_R08 // SYSTEM_OPERATIONAL</span>
          </div>
          <div className="flex items-center gap-6">
            <NavLink to="/privacy" className="hover:text-[#38bdf8] transition-colors">PRIVACY_POLICY</NavLink>
            <NavLink to="/terms" className="hover:text-[#38bdf8] transition-colors">TERMS_OF_SERVICE</NavLink>
            <span className="text-[#1e2e4a]">|</span>
            <span className="text-[#cbd5e1]">VEXTA_v2.0_SOVEREIGN</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
