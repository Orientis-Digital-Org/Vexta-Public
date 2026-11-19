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
      <BentoCard hover={false} brackets={true} className="p-8 md:p-10 flex flex-col items-center text-center gap-6 border-[#1e2e4a] bg-[#0c1322]">
        <SectionHeader
          tag="DOCUMENTATION ARCHIVE"
          title="Vexta Help & Documentation"
          description="Everything you need to know about using Vexta, safeguarding your cryptographic keys, and the mathematical principles behind zero-knowledge routing."
        />

        {/* Tab Switcher: Friendly Guide vs. Security Details */}
        <div className="flex items-center justify-center gap-2 p-1 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] max-w-md w-full mt-2 select-none">
          <button
            onClick={() => setActiveTab('guide')}
            className={"flex-1 py-2.5 px-4 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer " + (
              activeTab === 'guide'
                ? 'bg-[#0c182c] text-[#38bdf8] border border-[#1e3a66] shadow-[0_0_12px_rgba(56,189,248,0.2)] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
            )}
          >
            <i className="fa-solid fa-user-check text-xs"></i>
            <span>User Guide</span>
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={"flex-1 py-2.5 px-4 rounded-[2px] font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer " + (
              activeTab === 'security'
                ? 'bg-[#0c182c] text-[#38bdf8] border border-[#1e3a66] shadow-[0_0_12px_rgba(56,189,248,0.2)] font-semibold'
                : 'text-[#94a3b8] hover:text-[#f8fafc] border border-transparent'
            )}
          >
            <i className="fa-solid fa-shield-halved text-xs"></i>
            <span>Security Specs</span>
          </button>
        </div>
      </BentoCard>

      {/* 2. Main Documentation Content */}
      <div className="w-full flex flex-col gap-8">
        {activeTab === 'guide' ? (
          /* =============================================================== */
          /* TAB 1: USER-FRIENDLY GUIDE                                       */
          /* =============================================================== */
          <BentoCard hover={false} brackets={true} className="p-7 md:p-12 flex flex-col gap-10 shadow-2xl leading-relaxed text-[#f8fafc] font-sans border-[#1e2e4a] bg-[#0c1322]">
            {/* Section 1: Getting Started */}
            <div id="getting-started" className="flex flex-col gap-4 border-b border-[#1e2e4a] pb-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge label="QUICK START GUIDE" variant="cyan" />
                <span className="text-xs font-mono text-[#94a3b8]">// STEP-BY-STEP USER MANUAL</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight flex items-center gap-3 font-sans">
                <i className="fa-solid fa-rocket text-[#38bdf8]"></i> Getting Started with Vexta
              </h2>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                Vexta is engineered for authentic digital autonomy without configuration hurdles. There are no phone numbers required, no SMS verification codes, no tracking cookies, and no passwords stored on remote servers.
              </p>
            </div>

            {/* Step 1: Install */}
            <div id="installation" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-xs">
                  01
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Download the Official Binary
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Select the verified release build for your hardware and operating system:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
                <div className="p-4 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#f8fafc] font-semibold text-sm">
                    <i className="fa-brands fa-windows text-[#38bdf8]"></i> Windows
                  </div>
                  <span className="text-xs text-[#94a3b8]">Available as an Installer (.exe) or Portable Standalone</span>
                </div>

                <div className="p-4 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#f8fafc] font-semibold text-sm">
                    <i className="fa-brands fa-linux text-[#38bdf8]"></i> Linux
                  </div>
                  <span className="text-xs text-[#94a3b8]">Standalone AppImage or Debian (.deb) package</span>
                </div>

                <div className="p-4 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#f8fafc] font-semibold text-sm">
                    <i className="fa-brands fa-android text-[#38bdf8]"></i> Android
                  </div>
                  <span className="text-xs text-[#94a3b8]">Direct signed ARM64 APK sideload package</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/downloads"
                  className="btn-cyber-primary text-xs py-2 px-4 inline-flex items-center gap-2 no-underline"
                >
                  <i className="fa-solid fa-download text-xs text-[#38bdf8]"></i>
                  <span>[ GO TO DOWNLOADS ]</span>
                </Link>
              </div>
            </div>

            {/* Step 2: Identity Creation */}
            <div id="create-account" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-xs">
                  02
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Initialize Sovereign Identity
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                When launching Vexta for the first time, you choose a username. Behind the scenes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
                <div className="p-3.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <i className="fa-solid fa-id-card text-[#38bdf8] mt-1 text-sm"></i>
                  <span><strong className="text-[#f8fafc]">Cryptographic ID</strong>: Your hardware generates an Ed25519 signing keypair. This keypair is your true mathematical identity.</span>
                </div>
                <div className="p-3.5 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <i className="fa-solid fa-shield text-[#38bdf8] mt-1 text-sm"></i>
                  <span><strong className="text-[#f8fafc]">Zero Central Registry</strong>: Nobody can confiscate or revoke your cryptographic keys because they exist solely on your device.</span>
                </div>
              </div>
            </div>

            {/* Step 3: Vault Security */}
            <div id="vault-passcode" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-xs">
                  03
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Set Local Device Passcode
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                You will be prompted to create a local vault passcode. This key derives an Argon2id memory-hard master encryption key:
              </p>
              <div className="p-4 bg-[#0c1322] border-l-2 border-[#38bdf8] rounded-[2px] text-xs md:text-sm text-[#94a3b8] flex flex-col gap-1.5">
                <strong className="text-[#f8fafc] font-mono flex items-center gap-2">
                  <i className="fa-solid fa-circle-exclamation text-[#38bdf8]"></i> SOVEREIGN SECURITY NOTICE
                </strong>
                <span>
                  Vexta servers never receive or store your passcode. Because we hold zero backdoor keys, if you lose your vault passcode, local conversation archives cannot be recovered by anyone.
                </span>
              </div>
            </div>

            {/* Section 2: Adding Friends & Chatting */}
            <div id="messaging-friends" className="flex flex-col gap-4 border-b border-[#1e2e4a] pb-6 pt-4">
              <StatusBadge label="COMMUNICATION PROTOCOL" variant="cyan" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight flex items-center gap-3 font-sans">
                <i className="fa-solid fa-comments text-[#38bdf8]"></i> Adding Contacts &amp; Chatting
              </h2>
              <p className="text-sm md:text-base text-[#94a3b8]">
                Exchanging messages with your verified peers is instant and provably private:
              </p>
            </div>

            {/* Step 4: Adding a Contact */}
            <div id="adding-contacts" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-xs">
                  04
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Share Public Invitation Fingerprint
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Each user possesses a public address code that you can copy or share as a QR code. Send this code to a contact or paste their code into your app to initiate a double-ratchet session.
              </p>
              <div className="p-4 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                <i className="fa-solid fa-key text-[#38bdf8] mt-1 text-sm"></i>
                <div className="flex flex-col gap-1 text-xs md:text-sm">
                  <strong className="text-[#f8fafc]">What is this code?</strong>
                  <span className="text-[#94a3b8]">
                    It is your public asymmetric encryption key. Anyone can use it to seal cryptographic envelopes for you, but only your device holds the private key capable of decrypting them.
                  </span>
                </div>
              </div>
            </div>

            {/* Step 5: How Padlocks Work */}
            <div id="how-encryption-works" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-xs">
                  05
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Continuous Ratchet Cryptography
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                In standard messaging services, static symmetric keys are reused for all messages. In Vexta, we employ the <strong>Signal-grade Double Ratchet</strong> protocol:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2">
                  <span className="font-semibold text-[#f8fafc] font-mono text-sm flex items-center gap-2">
                    <i className="fa-solid fa-lock text-[#38bdf8]"></i> Ephemeral Key Per Message
                  </span>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    A unique AES-256-GCM symmetric key is derived for each message. Once a payload is opened, its key is permanently erased from memory.
                  </p>
                </div>

                <div className="p-4 bg-[#0c1322] border border-[#1e2e4a] rounded-[2px] flex flex-col gap-2">
                  <span className="font-semibold text-[#f8fafc] font-mono text-sm flex items-center gap-2">
                    <i className="fa-solid fa-shield-halved text-[#38bdf8]"></i> Self-Healing Security
                  </span>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    Even if an adversary were to physically extract a current session key, future Diffie-Hellman round trips automatically restore secrecy.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 6: Audio & Video */}
            <div id="calling" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-xs">
                  06
                </div>
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono">
                  Private WebRTC Media Channels
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Voice and video calls connect <strong>peer-to-peer</strong> directly between participants via WebRTC. Real-time media feeds never touch relay servers whenever direct socket negotiation succeeds.
              </p>
            </div>

            {/* Section 3: Safety Best Practices */}
            <div id="safety-tips" className="flex flex-col gap-4 border-t border-[#1e2e4a] pt-6">
              <StatusBadge label="OPERATIONAL HYGIENE" variant="cyan" />
              <h2 className="text-xl md:text-2xl font-bold text-[#f8fafc] uppercase tracking-tight font-sans">
                Best Security Practices
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] shrink-0 mt-0.5">
                    <i className="fa-solid fa-fingerprint text-xs"></i>
                  </div>
                  <div>
                    <strong className="text-[#f8fafc] text-sm">Verify Out-of-Band Fingerprints</strong>
                    <p className="text-xs text-[#94a3b8] mt-1">
                      In any conversation, inspect your peer's profile to compare identity key fingerprints. Comparing this checksum guarantees protection against active adversary interception.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-[#08101d] border border-[#1e2e4a] rounded-[2px] flex items-start gap-3">
                  <div className="w-8 h-8 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] shrink-0 mt-0.5">
                    <i className="fa-solid fa-lock text-xs"></i>
                  </div>
                  <div>
                    <strong className="text-[#f8fafc] text-sm">Secure Physical Endpoints</strong>
                    <p className="text-xs text-[#94a3b8] mt-1">
                      Because private keys and ratchet databases reside strictly on your physical machine, ensure your operating system disk is encrypted and lock your screen when away.
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
          <BentoCard hover={false} brackets={true} className="p-7 md:p-12 flex flex-col gap-10 shadow-2xl leading-relaxed text-[#f8fafc] font-sans border-[#1e2e4a] bg-[#0c1322]">
            {/* Technical Overview */}
            <div id="crypto-overview" className="flex flex-col gap-4 border-b border-[#1e2e4a] pb-8">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <StatusBadge label="CRYPTOGRAPHIC SPECIFICATION" variant="cyan" />
                <span className="text-xs font-mono text-[#94a3b8]">// PURE ELLIPTIC CURVE PIPELINE</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight flex items-center gap-3 font-sans">
                <i className="fa-solid fa-microchip text-[#38bdf8]"></i> Cryptographic Architecture
              </h2>
              <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed">
                Vexta utilizes a pure Elliptic Curve cryptographic pipeline, completely eliminating legacy RSA in favor of modern, high-speed, constant-time side-channel immune primitives.
              </p>
            </div>

            {/* Protocol Spec 1: Double Ratchet */}
            <div id="double-ratchet" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-repeat text-[#38bdf8]"></i> Signal-Grade Double Ratchet Protocol
                </h3>
                <span className="text-xs font-mono bg-[#0c182c] text-[#38bdf8] px-2.5 py-1 rounded-[2px] border border-[#1e3a66]">
                  X25519 + HKDF-SHA256
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Every 1-on-1 session maintains a continuous Diffie-Hellman ratchet coupled with symmetric key derivation chains:
              </p>
              <ul className="list-disc list-inside text-xs md:text-sm text-[#94a3b8] space-y-2">
                <li><strong className="text-[#f8fafc]">Perfect Forward Secrecy (PFS)</strong>: Compounding KDF chains ensure past message keys cannot be deduced even if a current ephemeral session key is leaked.</li>
                <li><strong className="text-[#f8fafc]">Break-in Recovery (Post-Compromise Security)</strong>: Every round-trip message exchange injects fresh X25519 DH entropy, automatically re-establishing full confidentiality.</li>
                <li><strong className="text-[#f8fafc]">Authenticated Payloads</strong>: All message bodies are sealed under AES-256-GCM with unique 96-bit nonces.</li>
              </ul>
            </div>

            {/* Protocol Spec 2: Ed25519 Auth */}
            <div id="ed25519-auth" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-signature text-[#38bdf8]"></i> Ed25519 Mutual Authentication
                </h3>
                <span className="text-xs font-mono bg-[#0c182c] text-[#38bdf8] px-2.5 py-1 rounded-[2px] border border-[#1e3a66]">
                  RFC 8032 Edwards25519
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Upon WebSocket connection, the bridge and client authenticate mutually without passwords:
              </p>
              <CopyPill label="Default WebSocket Relay Gateway" text="wss://vexta-api.orientis.digital/ws/chat/" />
              <p className="text-xs text-[#94a3b8]">
                The server issues a 32-byte CSPRNG challenge nonce signed by the server's Ed25519 key. The client verifies the server signature, then signs the nonce with its local Ed25519 private key to authorize the socket session.
              </p>
            </div>

            {/* Protocol Spec 3: Local Vault */}
            <div id="local-vault" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-vault text-[#38bdf8]"></i> Argon2id Device Vault Encryption
                </h3>
                <span className="text-xs font-mono bg-[#0c182c] text-[#38bdf8] px-2.5 py-1 rounded-[2px] border border-[#1e3a66]">
                  Memory-Hard KDF
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                Client vaults (containing contact rosters, ratchet states, and device keypairs) are encrypted using Argon2id with memory-hard parameters before writing to local SQLite or cloud backup.
              </p>
            </div>

            {/* Protocol Spec 4: Blind Routing */}
            <div id="blind-routing" className="flex flex-col gap-4 bg-[#08101d] p-6 md:p-8 rounded-[2px] border border-[#1e2e4a]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase tracking-wider font-mono flex items-center gap-2">
                  <i className="fa-solid fa-eye-slash text-[#38bdf8]"></i> Blind Envelope Relay
                </h3>
                <span className="text-xs font-mono bg-[#0c182c] text-[#38bdf8] px-2.5 py-1 rounded-[2px] border border-[#1e3a66]">
                  RAM-Only Buffering
                </span>
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8]">
                The bridge operates strictly as a metadata-blind packet switch. In-transit envelopes reside exclusively in volatile memory buffers and are purged immediately upon recipient socket acknowledgment.
              </p>
            </div>
          </BentoCard>
        )}
      </div>
    </div>
  );
}
