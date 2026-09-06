import { useState } from 'react';
import { Link } from 'react-router-dom';
import BentoCard from '../components/ui/BentoCard';
import SectionHeader from '../components/ui/SectionHeader';
import StatusBadge from '../components/ui/StatusBadge';
import CopyPill from '../components/ui/CopyPill';

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('guide');

  return (
    <div className="flex flex-col gap-8 py-4 max-w-5xl mx-auto w-full">
      {/* 1. Page Header & Tab Switcher */}
      <BentoCard hover={false} className="p-8 md:p-10 flex flex-col items-center text-center gap-6 border-[#243022] bg-[#0E120D]">
        <SectionHeader
          tag="// USER & PROTOCOL MANUAL"
          title="Vexta Help & Documentation"
          description="Everything you need to know about using Vexta, keeping your conversations private, and how our zero-knowledge technology works."
        />

        {/* Tab Switcher: Friendly Guide vs. Security Details */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-[#060805] border border-[#243022] rounded-2xl max-w-md w-full mt-2 select-none">
          <button
            onClick={() => setActiveTab('guide')}
            className={"flex-1 py-3 px-4 rounded-xl font-mono text-xs md:text-sm font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer " + (
              activeTab === 'guide'
                ? 'bg-[#22C55E] text-black shadow-[0_0_15px_rgba(57,255,20,0.3)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            )}
          >
            <i className="fa-solid fa-user-check"></i>
            <span>User Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={"flex-1 py-3 px-4 rounded-xl font-mono text-xs md:text-sm font-bold uppercase transition-all flex items-center justify-center gap-2 cursor-pointer " + (
              activeTab === 'security'
                ? 'bg-[#22C55E] text-black shadow-[0_0_15px_rgba(57,255,20,0.3)]'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            )}
          >
            <i className="fa-solid fa-shield-halved"></i>
            <span>Security Specs</span>
          </button>
        </div>
      </BentoCard>

      {/* 2. Main Documentation Content without Table of Contents */}
      <div className="w-full flex flex-col gap-8">
        {activeTab === 'guide' ? (
          /* =============================================================== */
          /* TAB 1: USER-FRIENDLY GUIDE                                       */
          /* =============================================================== */
          <BentoCard hover={false} className="p-7 md:p-12 flex flex-col gap-10 shadow-2xl leading-relaxed text-gray-200 font-sans border-[#243022]">
            {/* Section 1: Getting Started */}
            <div id="getting-started" className="flex flex-col gap-4 border-b border-[#243022] pb-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge label="// QUICK START GUIDE" variant="neon" />
                <span className="text-xs font-mono text-gray-400">Step-by-step user manual</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight flex items-center gap-3 font-mono">
                <i className="fa-solid fa-rocket text-[#39FF14]"></i> Getting Started with Vexta
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Vexta is built for anyone who wants authentic digital privacy without any setup headaches. There are no phone numbers required, no SMS verification codes, no tracking cookies, and no passwords stored on remote servers.
              </p>
            </div>

            {/* Step 1: Install */}
            <div id="installation" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-sm">
                  1
                </div>
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Step 1: Download the App
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                Choose the official build for your operating system:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
                <div className="p-4 bg-[#0E120D] border border-[#243022] rounded-xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <i className="fa-brands fa-windows text-[#60A5FA]"></i> Windows
                  </div>
                  <span className="text-xs text-gray-400">Available as an Installer (.exe) or Portable Zip</span>
                </div>

                <div className="p-4 bg-[#0E120D] border border-[#243022] rounded-xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <i className="fa-brands fa-linux text-[#4ADE80]"></i> Linux
                  </div>
                  <span className="text-xs text-gray-400">Standalone AppImage or Debian (.deb) package</span>
                </div>

                <div className="p-4 bg-[#0E120D] border border-[#243022] rounded-xl flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <i className="fa-brands fa-android text-[#A3E635]"></i> Android
                  </div>
                  <span className="text-xs text-gray-400">Direct APK download or F-Droid repo (coming soon)</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/downloads"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase bg-[#22C55E] text-black hover:bg-[#39FF14] transition-all no-underline"
                >
                  <i className="fa-solid fa-download"></i> Go to Downloads Page
                </Link>
              </div>
            </div>

            {/* Step 2: Identity Creation */}
            <div id="create-account" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-sm">
                  2
                </div>
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Step 2: Choose Your Username
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                When you launch Vexta for the first time, you choose a display name. Behind the scenes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="p-3.5 bg-[#0E120D] border border-[#243022] rounded-xl flex items-start gap-3">
                  <i className="fa-solid fa-id-card text-[#39FF14] mt-1 text-sm"></i>
                  <span><strong>Cryptographic ID</strong>: Your device creates a private cryptographic keypair. This keypair is your actual identity.</span>
                </div>
                <div className="p-3.5 bg-[#0E120D] border border-[#243022] rounded-xl flex items-start gap-3">
                  <i className="fa-solid fa-shield text-[#39FF14] mt-1 text-sm"></i>
                  <span><strong>No Central Registry</strong>: Nobody can confiscate or ban your cryptographic identity because it is saved only on your device.</span>
                </div>
              </div>
            </div>

            {/* Step 3: Vault Security */}
            <div id="vault-passcode" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-sm">
                  3
                </div>
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Step 3: Set Your Device Vault Passcode
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                You will be asked to set a local device passcode. This passcode locks your messages and encryption keys on your physical storage:
              </p>
              <div className="p-4 bg-[#0E120D] border-l-4 border-[#22C55E] rounded-r-xl text-xs md:text-sm text-gray-300 flex flex-col gap-1.5">
                <strong className="text-white font-mono flex items-center gap-2">
                  <i className="fa-solid fa-circle-exclamation text-[#39FF14]"></i> Important Privacy Notice
                </strong>
                <span>
                  Vexta servers never see your passcode. Because we hold zero master keys, if you forget this passcode, your local conversation archives cannot be recovered.
                </span>
              </div>
            </div>

            {/* Section 2: Adding Friends & Chatting */}
            <div id="messaging-friends" className="flex flex-col gap-4 border-b border-[#243022] pb-6 pt-4">
              <StatusBadge label="// HOW CONVERSATIONS WORK" variant="neon" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight flex items-center gap-3 font-mono">
                <i className="fa-solid fa-comments text-[#39FF14]"></i> Adding Friends & Chatting
              </h2>
              <p className="text-sm md:text-base text-gray-300">
                Connecting with your contacts is instantaneous and secure:
              </p>
            </div>

            {/* Step 4: Adding a Contact */}
            <div id="adding-contacts" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-sm">
                  4
                </div>
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Step 4: Share Your Public Invitation Code
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                Each user has a public address code that you can copy or display as a QR code. Share this code with a friend, or paste their code into your search bar to open a chat.
              </p>
              <div className="p-4 bg-[#0E120D] border border-[#243022] rounded-xl flex items-start gap-3">
                <i className="fa-solid fa-key text-[#39FF14] mt-1 text-sm"></i>
                <div className="flex flex-col gap-1 text-xs md:text-sm">
                  <strong className="text-white">What is this code?</strong>
                  <span className="text-gray-300">
                    It is your public encryption lock. Anyone can use it to seal messages for you, but only your device holds the private key capable of reading them.
                  </span>
                </div>
              </div>
            </div>

            {/* Step 5: How Padlocks Work */}
            <div id="how-encryption-works" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-sm">
                  5
                </div>
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Step 5: The Rotating Padlock Principle
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                In ordinary messaging apps, one secret key is reused for all your messages. In Vexta, we use a <strong>Double Ratchet</strong> system:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0E120D] border border-[#243022] rounded-xl flex flex-col gap-2">
                  <span className="font-bold text-white font-mono text-sm flex items-center gap-2">
                    <i className="fa-solid fa-lock text-[#39FF14]"></i> Fresh Key Every Message
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    A brand new mathematical lock is generated for every single message. Once a message is decrypted, its key is permanently destroyed.
                  </p>
                </div>

                <div className="p-4 bg-[#0E120D] border border-[#243022] rounded-xl flex flex-col gap-2">
                  <span className="font-bold text-white font-mono text-sm flex items-center gap-2">
                    <i className="fa-solid fa-shield-halved text-[#39FF14]"></i> Self-Healing Security
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Even if an adversary were to physically inspect your hardware today, they cannot decrypt earlier messages or future messages.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6: Audio & Video */}
            <div id="calling" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-sm">
                  6
                </div>
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono">
                  Step 6: Private Voice & Video Calling
                </h3>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                Calls on Vexta connect <strong>peer-to-peer</strong> directly between devices using WebRTC. Media streams do not pass through servers whenever a direct connection can be established, ensuring ultra-low latency and zero interception.
              </p>
            </div>

            {/* Section 3: Safety Best Practices */}
            <div id="safety-tips" className="flex flex-col gap-4 border-t border-[#243022] pt-6">
              <StatusBadge label="// BEST PRACTICES" variant="neon" />
              <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight font-mono">
                Staying Safe Online
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#060805] border border-[#243022] rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#39FF14] shrink-0 mt-0.5">
                    <i className="fa-solid fa-fingerprint text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-white text-sm">Verify Security Fingerprints</strong>
                    <p className="text-xs text-gray-300 mt-1">
                      In any chat, click on your contact's profile to view their safety fingerprint code. Compare this short code with them in person or over another channel to guarantee no one can impersonate them.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#060805] border border-[#243022] rounded-xl flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#39FF14] shrink-0 mt-0.5">
                    <i className="fa-solid fa-lock text-sm"></i>
                  </div>
                  <div>
                    <strong className="text-white text-sm">Protect Your Physical Device</strong>
                    <p className="text-xs text-gray-300 mt-1">
                      Because all keys and conversation archives stay strictly on your device, keep your laptop or phone screen locked with a PIN or biometric security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        ) : (
          /* =============================================================== */
          /* TAB 2: TECHNICAL ARCHITECTURE & CRYPTOGRAPHIC SPECS               */
          /* =============================================================== */
          <BentoCard hover={false} className="p-7 md:p-12 flex flex-col gap-10 shadow-2xl leading-relaxed text-gray-200 font-sans border-[#243022]">
            {/* Technical Overview */}
            <div id="crypto-overview" className="flex flex-col gap-4 border-b border-[#243022] pb-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge label="// ADVANCED PROTOCOL SPECIFICATION" variant="neon" />
                <span className="text-xs font-mono text-gray-400">Pure Elliptic Curve Cryptography</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight flex items-center gap-3 font-mono">
                <i className="fa-solid fa-microchip text-[#39FF14]"></i> Cryptographic Architecture
              </h2>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Vexta utilizes a pure Elliptic Curve cryptographic pipeline, completely retiring legacy RSA in favor of modern, high-speed, side-channel immune primitives.
              </p>
            </div>

            {/* Protocol Spec 1: Double Ratchet */}
            <div id="double-ratchet" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-repeat text-[#39FF14]"></i> Signal-Grade Double Ratchet Protocol
                </h3>
                <span className="text-xs font-mono bg-[#141C13] text-[#4ADE80] px-2.5 py-1 rounded border border-[#243022]">
                  X25519 + HKDF-SHA256
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                Every 1-on-1 session maintains a continuous Diffie-Hellman ratchet and KDF chain:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-gray-300 space-y-2">
                <li><strong>Perfect Forward Secrecy (PFS)</strong>: Compounding KDF ratchets ensure that past message keys can never be derived even if a current session key is compromised.</li>
                <li><strong>Break-in Recovery (Post-Compromise Security)</strong>: Every round-trip message exchange injects fresh X25519 DH entropy, automatically restoring full confidentiality.</li>
                <li><strong>Authenticated Payloads</strong>: All message bodies are sealed under AES-256-GCM with unique 96-bit nonces.</li>
              </ul>
            </div>

            {/* Protocol Spec 2: Ed25519 Auth */}
            <div id="ed25519-auth" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-signature text-[#39FF14]"></i> Ed25519 Mutual Authentication
                </h3>
                <span className="text-xs font-mono bg-[#141C13] text-[#4ADE80] px-2.5 py-1 rounded border border-[#243022]">
                  RFC 8032 Edwards25519
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                Upon WebSocket connection, the bridge and client authenticate mutually without passwords:
              </p>
              <CopyPill label="Default WebSocket Relay Gateway" text="wss://vexta-api.nexusec.space/ws/chat/" />
              <p className="text-xs text-gray-400">
                The server issues a 32-byte CSPRNG challenge nonce signed by the server's Ed25519 key. The client verifies the server signature, then signs the nonce with its local Ed25519 private key to authorize the socket session.
              </p>
            </div>

            {/* Protocol Spec 3: Local Vault */}
            <div id="local-vault" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-vault text-[#39FF14]"></i> Argon2id Device Vault Encryption
                </h3>
                <span className="text-xs font-mono bg-[#141C13] text-[#4ADE80] px-2.5 py-1 rounded border border-[#243022]">
                  Memory-Hard KDF
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                Client vaults (containing contact rosters, ratchet states, and device keypairs) are encrypted using Argon2id with memory-hard parameters before writing to local SQLite or cloud backup.
              </p>
            </div>

            {/* Protocol Spec 4: Blind Routing */}
            <div id="blind-routing" className="flex flex-col gap-4 bg-[#060805] p-6 md:p-8 rounded-2xl border border-[#243022]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-base md:text-lg font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-eye-slash text-[#39FF14]"></i> Blind Envelope Relay
                </h3>
                <span className="text-xs font-mono bg-[#141C13] text-[#4ADE80] px-2.5 py-1 rounded border border-[#243022]">
                  RAM-Only Buffering
                </span>
              </div>
              <p className="text-xs md:text-sm text-gray-300">
                The bridge operates strictly as a metadata-blind packet switch. In-transit envelopes reside exclusively in volatile memory buffers and are purged immediately upon recipient socket acknowledgment.
              </p>
            </div>
          </BentoCard>
        )}
      </div>
    </div>
  );
}
