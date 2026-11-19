import { useState } from 'react';
import { Link } from 'react-router-dom';
import BentoCard from '../components/ui/BentoCard';
import SectionHeader from '../components/ui/SectionHeader';
import StatusBadge from '../components/ui/StatusBadge';
import CopyPill from '../components/ui/CopyPill';

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('guide'); // 'guide' | 'security' | 'plans'

  return (
    <div className="flex flex-col gap-8 py-4 max-w-5xl mx-auto w-full">
      {/* 1. Page Header & Tab Switcher */}
      <BentoCard hover={false} brackets={true} className="p-8 md:p-10 flex flex-col items-center text-center gap-6 border-[#1e2e4a] bg-[#0c1322]">
        <SectionHeader
          tag="HELP &amp; PROTOCOL OVERVIEW"
          title="How Vexta Works"
          description="A simple, straightforward guide to keeping your conversations private, understanding current capabilities, and exploring our upcoming roadmap."
        />

        {/* 3-Tab Switcher: User Guide | Security & Tech | Future Plans */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] max-w-lg w-full mt-2 select-none">
          <button
            onClick={() => setActiveTab('guide')}
            className={"flex-1 min-w-[130px] py-2 px-3 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer " + (
              activeTab === 'guide'
                ? 'bg-[#081a10] text-[#39ff14] border border-[#1b3d22] shadow-[0_0_12px_rgba(57,255,20,0.25)] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
            )}
          >
            <i className="fa-solid fa-user-check text-xs"></i>
            <span>User Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={"flex-1 min-w-[130px] py-2 px-3 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer " + (
              activeTab === 'security'
                ? 'bg-[#081a10] text-[#39ff14] border border-[#1b3d22] shadow-[0_0_12px_rgba(57,255,20,0.25)] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
            )}
          >
            <i className="fa-solid fa-shield-halved text-xs"></i>
            <span>Security &amp; Tech</span>
          </button>

          <button
            onClick={() => setActiveTab('plans')}
            className={"flex-1 min-w-[130px] py-2 px-3 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer " + (
              activeTab === 'plans'
                ? 'bg-[#081a10] text-[#39ff14] border border-[#1b3d22] shadow-[0_0_12px_rgba(57,255,20,0.25)] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
            )}
          >
            <i className="fa-solid fa-compass-drafting text-xs"></i>
            <span>Future Plans</span>
          </button>
        </div>
      </BentoCard>

      {/* 2. Main Content Tabs */}
      <div className="w-full flex flex-col gap-8">
        
        {/* =============================================================== */}
        {/* TAB 1: EVERYDAY USER GUIDE                                       */}
        {/* =============================================================== */}
        {activeTab === 'guide' && (
          <BentoCard hover={false} brackets={true} className="p-7 md:p-12 flex flex-col gap-10 shadow-2xl leading-relaxed text-[#f8fafc] font-sans border-[#1e2e4a] bg-[#0c1322]">
            
            {/* Quick Overview */}
            <div className="flex flex-col gap-4 border-b border-[#1e2e4a] pb-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge label="QUICK START MANUAL" variant="green" />
                <span className="text-xs font-mono text-[#94a3b8]">// SIMPLE SETUP IN UNDER 2 MINUTES</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight flex items-center gap-3 font-sans">
                <i className="fa-solid fa-rocket text-[#39ff14]"></i> Getting Started
              </h2>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                Vexta gives you private, sovereign messaging without configuration headaches. You never need a phone number, an email address, or an SMS verification code. Everything is managed directly on your own device.
              </p>
            </div>

            {/* Step 1: Download & Install */}
            <div className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#081a10] border border-[#1b3d22] text-[#39ff14] font-mono font-bold flex items-center justify-center text-xs">
                  01
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Download the Native Client
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Vexta runs as a lightweight native application (~10MB) that opens instantly and consumes very little memory:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-1">
                <div className="p-3.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[#f8fafc] font-semibold text-xs">
                    <i className="fa-brands fa-windows text-[#4ade80]"></i> Windows
                  </div>
                  <span className="text-[11px] text-[#94a3b8]">Setup Installer (.exe) or Portable Zip</span>
                </div>

                <div className="p-3.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[#f8fafc] font-semibold text-xs">
                    <i className="fa-brands fa-linux text-[#4ade80]"></i> Linux
                  </div>
                  <span className="text-[11px] text-[#94a3b8]">Standalone AppImage or Debian (.deb)</span>
                </div>

                <div className="p-3.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 text-[#f8fafc] font-semibold text-xs">
                    <i className="fa-brands fa-android text-[#4ade80]"></i> Android
                  </div>
                  <span className="text-[11px] text-[#94a3b8]">Direct Sideload APK Package</span>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  to="/downloads"
                  className="btn-cyber-primary text-xs py-2 px-4 inline-flex items-center gap-2 no-underline"
                >
                  <i className="fa-solid fa-download text-xs text-[#39ff14]"></i>
                  <span>[ GET DOWNLOADS ]</span>
                </Link>
              </div>
            </div>

            {/* Step 2: Choose Username & Passcode */}
            <div className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#081a10] border border-[#1b3d22] text-[#39ff14] font-mono font-bold flex items-center justify-center text-xs">
                  02
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Pick a Username &amp; Master Passcode
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                When launching Vexta, simply choose a display name and a private master passcode:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="p-3.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <i className="fa-solid fa-id-card text-[#39ff14] mt-1 text-sm"></i>
                  <div>
                    <strong className="text-[#f8fafc] block mb-0.5">Cryptographic Identity</strong>
                    <span className="text-[#94a3b8] text-xs">Your device generates a mathematical signing keypair. This keypair acts as your digital identity without any central user registry.</span>
                  </div>
                </div>
                <div className="p-3.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <i className="fa-solid fa-vault text-[#39ff14] mt-1 text-sm"></i>
                  <div>
                    <strong className="text-[#f8fafc] block mb-0.5">Local Device Vault</strong>
                    <span className="text-[#94a3b8] text-xs">Your master passcode encrypts all chat records and keys locally on your physical storage. Servers never receive your passcode.</span>
                  </div>
                </div>
              </div>
              <div className="p-3 bg-[#081a10] border-l-2 border-[#22c55e] rounded-[2px] text-xs text-[#94a3b8]">
                <strong className="text-[#f8fafc] font-mono">// IMPORTANT NOTE:</strong> Because there are no backdoors or password-reset emails, make sure you remember your passcode.
              </div>
            </div>

            {/* Feature Section: Current Live Capabilities */}
            <div className="flex flex-col gap-4 border-b border-[#1e2e4a] pb-6 pt-2">
              <StatusBadge label="CURRENT FEATURES" variant="green" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight flex items-center gap-3 font-sans">
                <i className="fa-solid fa-cubes text-[#39ff14]"></i> What You Can Do in Vexta Today
              </h2>
              <p className="text-sm md:text-base text-[#94a3b8]">
                Features currently live and active in the official client release:
              </p>
            </div>

            {/* Real Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Feature 1: Adding Friends */}
              <div className="p-5 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#39ff14] font-mono text-xs font-semibold uppercase">
                  <i className="fa-solid fa-user-plus text-sm"></i>
                  <span>Connecting with Friends</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Every user has a public invitation code and QR code. Share your code with someone or paste theirs into your search bar to open an encrypted chat immediately.
                </p>
              </div>

              {/* Feature 2: Multi-Device Pairing */}
              <div className="p-5 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#39ff14] font-mono text-xs font-semibold uppercase">
                  <i className="fa-solid fa-laptop-mobile text-sm"></i>
                  <span>Multi-Device Sync (8-Digit PIN)</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Use Vexta on your laptop and phone simultaneously. Pair secondary devices using a secure 8-digit verification PIN, with instant one-click remote device revocation.
                </p>
              </div>

              {/* Feature 3: Offline Outbox & Delivery Receipts */}
              <div className="p-5 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#39ff14] font-mono text-xs font-semibold uppercase">
                  <i className="fa-solid fa-check-double text-sm"></i>
                  <span>Offline Outbox &amp; Delivery Receipts</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Type messages even while offline or reconnecting. Vexta queues them locally and delivers them with <span className="font-mono text-[#39ff14]">✓</span> Sent and <span className="font-mono text-[#39ff14]">✓✓</span> Delivered checkmarks when connection is restored.
                </p>
              </div>

              {/* Feature 4: Disappearing Messages */}
              <div className="p-5 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#39ff14] font-mono text-xs font-semibold uppercase">
                  <i className="fa-solid fa-stopwatch text-sm"></i>
                  <span>Disappearing Messages</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Set self-destruct timers on confidential conversations. Messages automatically vanish from both local devices once the expiration time has elapsed.
                </p>
              </div>

              {/* Feature 5: Encrypted Local Backups */}
              <div className="p-5 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#39ff14] font-mono text-xs font-semibold uppercase">
                  <i className="fa-solid fa-file-shield text-sm"></i>
                  <span>Encrypted Vault Backups (.vxvault)</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Export an encrypted <code className="text-[#4ade80] font-mono">.vxvault</code> backup file whenever you want to transfer your chats to a new computer, locked by your master password.
                </p>
              </div>

              {/* Feature 6: Instant Lock & Memory Sanitization */}
              <div className="p-5 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5 text-[#39ff14] font-mono text-xs font-semibold uppercase">
                  <i className="fa-solid fa-lock text-sm"></i>
                  <span>Instant Lock &amp; RAM Sanitization</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Press <kbd className="px-1.5 py-0.5 bg-[#0c1322] border border-[#1e2e4a] rounded text-[#4ade80] font-mono text-[10px]">Ctrl+Shift+L</kbd> to lock your vault immediately. Vexta instantly wipes active encryption keys and passcodes from system RAM memory.
                </p>
              </div>

            </div>

            {/* Quick Safety Practices */}
            <div className="flex flex-col gap-4 border-t border-[#1e2e4a] pt-6">
              <StatusBadge label="SECURITY HYGIENE" variant="green" />
              <h2 className="text-xl md:text-2xl font-bold text-[#f8fafc] uppercase tracking-tight font-sans">
                Simple Tips to Stay Safe
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] shrink-0 mt-0.5">
                    <i className="fa-solid fa-fingerprint text-xs"></i>
                  </div>
                  <div>
                    <strong className="text-[#f8fafc] text-sm">Compare Security Fingerprints</strong>
                    <p className="text-xs text-[#94a3b8] mt-1">
                      Click your friend's profile to view their safety fingerprint code. Compare it with them in person or over another channel to be 100% sure nobody can ever impersonate them.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] shrink-0 mt-0.5">
                    <i className="fa-solid fa-shield-halved text-xs"></i>
                  </div>
                  <div>
                    <strong className="text-[#f8fafc] text-sm">Keep Master Passcode Safe</strong>
                    <p className="text-xs text-[#94a3b8] mt-1">
                      Because Vexta maintains zero backdoors, write down your passcode offline or use a trusted password manager.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </BentoCard>
        )}

        {/* =============================================================== */}
        {/* TAB 2: TECHNICAL & SECURITY SPECIFICATION                        */}
        {/* =============================================================== */}
        {activeTab === 'security' && (
          <BentoCard hover={false} brackets={true} className="p-7 md:p-12 flex flex-col gap-10 shadow-2xl leading-relaxed text-[#f8fafc] font-sans border-[#1e2e4a] bg-[#0c1322]">
            
            {/* Overview */}
            <div className="flex flex-col gap-4 border-b border-[#1e2e4a] pb-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge label="TECHNICAL SPECIFICATION" variant="green" />
                <span className="text-xs font-mono text-[#94a3b8]">// ZERO-KNOWLEDGE CRYPTOGRAPHIC SUITE</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight flex items-center gap-3 font-sans">
                <i className="fa-solid fa-microchip text-[#39ff14]"></i> Under the Hood
              </h2>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                Vexta combines audited modern cryptographic primitives with a native Tauri v2 Rust layer for high performance, memory safety, and complete data sovereignty.
              </p>
            </div>

            {/* Spec 1: Identity & Key Agreement */}
            <div className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-key text-[#39ff14]"></i> Identity &amp; Key Agreement
                </h3>
                <span className="text-xs font-mono bg-[#081a10] text-[#39ff14] px-2.5 py-1 rounded-[2px] border border-[#1b3d22]">
                  Ed25519 + X25519
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                How Vexta manages your identity and keeps messages secure:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-[#cbd5e1] space-y-2">
                <li><strong className="text-[#f8fafc]">Ed25519 Signatures (RFC 8032):</strong> Used for device identity and authenticating direct message frames to eliminate sender impersonation.</li>
                <li><strong className="text-[#f8fafc]">X25519 Ephemeral Key Agreement (RFC 7748):</strong> Each message payload is sealed under freshly derived ephemeral shared keys.</li>
                <li><strong className="text-[#f8fafc]">AES-256-GCM Authenticated Encryption:</strong> Every message envelope is sealed with AES-256-GCM using unique 96-bit nonces, ensuring both confidentiality and tamper protection.</li>
              </ul>
            </div>

            {/* Spec 2: Local Bedrock SQLite Storage */}
            <div className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-database text-[#39ff14]"></i> Bedrock Local Storage Engine
                </h3>
                <span className="text-xs font-mono bg-[#081a10] text-[#39ff14] px-2.5 py-1 rounded-[2px] border border-[#1b3d22]">
                  Embedded SQLite + IndexedDB
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Where your data lives and how it is secured:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-[#cbd5e1] space-y-2">
                <li><strong className="text-[#f8fafc]">Local-First Database:</strong> Chats, contact rosters, and credentials are stored inside an embedded native SQLite database (<code className="text-[#4ade80] font-mono">account_&lt;user&gt;.db</code>) on your local filesystem.</li>
                <li><strong className="text-[#f8fafc]">Argon2id Key Derivation (RFC 9106):</strong> Your master passcode derives a vault key using memory-hard Argon2id (64MB RAM parameters), protecting against brute-force and GPU dictionary attacks.</li>
                <li><strong className="text-[#f8fafc]">Zero Plaintext on Disk:</strong> Sensitive vault records are encrypted at rest with AES-256-GCM before writing to storage.</li>
              </ul>
            </div>

            {/* Spec 3: Relay Protocol & Blind Routing */}
            <div className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-route text-[#39ff14]"></i> Blind RAM Relay &amp; Network Defense
                </h3>
                <span className="text-xs font-mono bg-[#081a10] text-[#39ff14] px-2.5 py-1 rounded-[2px] border border-[#1b3d22]">
                  WebSockets + TOFU Pinning
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                How the Vexta relay server delivers messages without knowing what is inside:
              </p>
              <CopyPill label="Default WebSocket Relay Gateway" text="wss://vexta-api.orientis.digital/ws/chat/" />
              <ul className="list-disc list-inside text-xs md:text-sm text-[#cbd5e1] space-y-2 mt-2">
                <li><strong className="text-[#f8fafc]">Volatile RAM Buffering:</strong> The relay only sees blind envelope hashes. Envelopes reside strictly in volatile RAM memory and are permanently wiped once delivered.</li>
                <li><strong className="text-[#f8fafc]">Trust-On-First-Use (TOFU) Pinning:</strong> The client verifies the bridge server's Ed25519 signature to protect against man-in-the-middle attacks.</li>
                <li><strong className="text-[#f8fafc]">Anti-Replay Ledger:</strong> Inbound messages carry signed identifiers claimed in a local ledger to prevent replay attacks by malicious network relays.</li>
              </ul>
            </div>

            {/* Spec 4: Tauri v2 Framework */}
            <div className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-brands fa-rust text-[#39ff14]"></i> Native Tauri v2 Rust Architecture
                </h3>
                <span className="text-xs font-mono bg-[#081a10] text-[#39ff14] px-2.5 py-1 rounded-[2px] border border-[#1b3d22]">
                  Rust 2021 + React 19
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Unlike heavy Electron-based messaging apps that consume hundreds of megabytes of RAM:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-[#cbd5e1] space-y-1.5">
                <li>Binary footprint is approximately <strong className="text-[#f8fafc]">~10MB</strong> with fast launch times.</li>
                <li>Uses only <strong className="text-[#f8fafc]">~40MB idle RAM</strong> compared to ~200MB+ in typical web-wrapped apps.</li>
                <li>Native OS sandboxing with strict Content Security Policy (CSP) blocking external script execution.</li>
              </ul>
            </div>

          </BentoCard>
        )}

        {/* =============================================================== */}
        {/* TAB 3: FUTURE ROADMAP & PLANS                                    */}
        {/* =============================================================== */}
        {activeTab === 'plans' && (
          <BentoCard hover={false} brackets={true} className="p-7 md:p-12 flex flex-col gap-10 shadow-2xl leading-relaxed text-[#f8fafc] font-sans border-[#1e2e4a] bg-[#0c1322]">
            
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-[#1e2e4a] pb-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge label="ENGINEERING ROADMAP" variant="green" />
                <span className="text-xs font-mono text-[#4ade80]">// UPCOMING ARCHITECTURAL MILESTONES</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight flex items-center gap-3 font-sans">
                <i className="fa-solid fa-compass-drafting text-[#39ff14]"></i> Future Plans &amp; Capabilities
              </h2>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                Vexta is actively evolving. Our roadmap focuses on expanding physical communication autonomy, adding richer media capabilities, and providing true off-grid resilience.
              </p>
            </div>

            {/* Upcoming Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Plan 1: LoRa / Meshtastic Off-Grid Radio */}
              <div className="p-6 bg-[#08101d] border border-[#1b3d22] rounded-[2px] flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-lg">
                    <i className="fa-solid fa-tower-broadcast"></i>
                  </div>
                  <span className="text-[10px] font-mono text-[#39ff14] bg-[#081a10] px-2 py-0.5 rounded-[2px] border border-[#1b3d22] uppercase font-bold">
                    PLANNED // HIGHEST PRIORITY
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#f8fafc] uppercase font-mono tracking-wider">
                  LoRa / Meshtastic Off-Grid Radio Mesh
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Integration with LoRa radio devices and the Meshtastic protocol. Send and receive encrypted messages across long-distance peer radio frequencies with <strong className="text-[#f8fafc]">zero internet connection and zero cellular infrastructure</strong>—essential for natural disasters, emergency response, and remote operations.
                </p>
              </div>

              {/* Plan 2: Encrypted File & Media Transfer */}
              <div className="p-6 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-lg">
                    <i className="fa-solid fa-file-arrow-up"></i>
                  </div>
                  <span className="text-[10px] font-mono text-[#4ade80] bg-[#081a10] px-2 py-0.5 rounded-[2px] border border-[#1e2e4a] uppercase">
                    IN ROADMAP
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#f8fafc] uppercase font-mono tracking-wider">
                  End-to-End Encrypted File Sharing
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Send documents, images, and attachments securely. Files will be chunked, encrypted locally on the sender's device with ephemeral keys, and streamed directly without ever existing in plaintext on any storage server.
                </p>
              </div>

              {/* Plan 3: Real-Time Voice & Video Calling */}
              <div className="p-6 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-lg">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <span className="text-[10px] font-mono text-[#4ade80] bg-[#081a10] px-2 py-0.5 rounded-[2px] border border-[#1e2e4a] uppercase">
                    IN ROADMAP
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#f8fafc] uppercase font-mono tracking-wider">
                  Encrypted Voice &amp; Video Calling
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Real-time peer-to-peer (P2P) voice and video calls using WebRTC and LiveKit SFU architectures. Audio and video streams will establish direct device-to-device encrypted sessions, completely bypassing central servers.
                </p>
              </div>

              {/* Plan 4: Voice Messaging (Audio Notes) */}
              <div className="p-6 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-lg">
                    <i className="fa-solid fa-microphone"></i>
                  </div>
                  <span className="text-[10px] font-mono text-[#4ade80] bg-[#081a10] px-2 py-0.5 rounded-[2px] border border-[#1e2e4a] uppercase">
                    IN ROADMAP
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#f8fafc] uppercase font-mono tracking-wider">
                  Voice Notes &amp; Audio Snippets
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Record and send instant voice snippets sealed with the same authenticated cipher suite as text messages. Automatically cleared when disappearing message timers are enabled.
                </p>
              </div>

              {/* Plan 5: Multi-Transport Seamless Failover */}
              <div className="p-6 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-lg">
                    <i className="fa-solid fa-network-wired"></i>
                  </div>
                  <span className="text-[10px] font-mono text-[#4ade80] bg-[#081a10] px-2 py-0.5 rounded-[2px] border border-[#1e2e4a] uppercase">
                    PLANNED
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#f8fafc] uppercase font-mono tracking-wider">
                  Multi-Transport Auto-Failover
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Automatic switching between internet WebSocket relays, local Wi-Fi / Bluetooth peer discovery, and LoRa mesh radio nodes based on real-time network connectivity and environmental conditions.
                </p>
              </div>

              {/* Plan 6: Hardware Security Keys */}
              <div className="p-6 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-lg">
                    <i className="fa-solid fa-hard-drive"></i>
                  </div>
                  <span className="text-[10px] font-mono text-[#4ade80] bg-[#081a10] px-2 py-0.5 rounded-[2px] border border-[#1e2e4a] uppercase">
                    PLANNED
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#f8fafc] uppercase font-mono tracking-wider">
                  Hardware Security Key Support
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  Optional hardware-bound cryptographic key storage (FIDO2 / YubiKey / secure enclave hardware) for users who require tamper-proof physical key isolation.
                </p>
              </div>

            </div>

            {/* Bottom Vision Banner */}
            <div className="p-5 border border-[#1b3d22] bg-[#081a10] text-[#cbd5e1] rounded-[2px] flex gap-4 text-xs items-start leading-relaxed font-sans">
              <span className="text-lg text-[#39ff14] shrink-0 mt-0.5">
                <i className="fa-solid fa-lightbulb"></i>
              </span>
              <div>
                <strong className="font-semibold uppercase tracking-wider text-[#f8fafc] block mb-1 font-mono text-xs">
                  Sovereign Engineering Philosophy
                </strong>
                Every planned feature is evaluated against our core tenets: zero accounts, local key custody, zero telemetry, and maximum communication autonomy even when standard commercial telecom infrastructure fails.
              </div>
            </div>

          </BentoCard>
        )}

      </div>
    </div>
  );
}
