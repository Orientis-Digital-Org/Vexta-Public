import React from 'react';
import StatusBadge from '../components/ui/StatusBadge';
import SectionHeader from '../components/ui/SectionHeader';
import BentoCard from '../components/ui/BentoCard';

export default function PrivacyPage() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <BentoCard hover={false} brackets={true} className="text-center p-8 md:p-12 space-y-4 bg-[#0c1322] border-[#1e2e4a]">
        <div className="flex justify-center">
          <StatusBadge label="ZERO-KNOWLEDGE ARCHITECTURE" variant="green" />
        </div>
        <SectionHeader
          tag="REGULATORY &amp; PRIVACY POLICY"
          title="Vexta Privacy Policy"
          description="Engineered from the ground up for absolute cryptographic privacy. No accounts, no phone numbers, and zero telemetry."
        />
        <div className="font-mono text-xs text-[#94a3b8] tracking-wider uppercase pt-1">
          // REVISION: SEPTEMBER 2026 // ORIENTIS DIGITAL LEGAL &amp; PROTOCOL TEAM
        </div>
      </BentoCard>

      {/* Core Privacy Guarantees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <BentoCard hover={true} brackets={true} className="bg-[#0c1322] border-[#1e2e4a] p-6 space-y-3">
          <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14]">
            <i className="fa-solid fa-user-slash text-base"></i>
          </div>
          <h3 className="font-mono text-xs font-semibold text-[#f8fafc] uppercase tracking-wider">Zero Account Identity</h3>
          <p className="font-sans text-xs text-[#94a3b8] leading-relaxed">
            Vexta eliminates user accounts entirely. No phone number, email address, or government identity is ever requested, stored, or verified.
          </p>
        </BentoCard>

        <BentoCard hover={true} brackets={true} className="bg-[#0c1322] border-[#1e2e4a] p-6 space-y-3">
          <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14]">
            <i className="fa-solid fa-box-archive text-base"></i>
          </div>
          <h3 className="font-mono text-xs font-semibold text-[#f8fafc] uppercase tracking-wider">Blind Ephemeral Relays</h3>
          <p className="font-sans text-xs text-[#94a3b8] leading-relaxed">
            Network relay nodes route cryptographically sealed ciphertext packets and immediately purge them from memory once delivered.
          </p>
        </BentoCard>

        <BentoCard hover={true} brackets={true} className="bg-[#0c1322] border-[#1e2e4a] p-6 space-y-3">
          <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14]">
            <i className="fa-solid fa-cookie-bite text-base"></i>
          </div>
          <h3 className="font-mono text-xs font-semibold text-[#f8fafc] uppercase tracking-wider">Zero Tracking Cookies</h3>
          <p className="font-sans text-xs text-[#94a3b8] leading-relaxed">
            There are zero analytics trackers, advertising beacons, or third-party behavioral cookies embedded across Vexta portals or applications.
          </p>
        </BentoCard>
      </div>

      {/* Main Legal Clauses */}
      <BentoCard hover={false} brackets={true} className="bg-[#0c1322] border-[#1e2e4a] p-6 sm:p-10 space-y-8 font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-mono text-sm font-semibold text-[#4ade80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 1. SCOPE &amp; PROTOCOL PURPOSE
          </h2>
          <p>
            This Privacy Policy governs the Vexta sovereign messaging application (Windows, Linux, Android) and its public documentation gateway (<code className="font-mono text-[#4ade80] text-xs">vexta.orientis.digital</code>), operated by Orientis Digital (&ldquo;Orientis&rdquo;, &ldquo;we&rdquo;).
          </p>
          <p>
            Vexta operates strictly under an end-to-end encrypted, zero-knowledge architecture. We cannot view message contents, inspect contact rosters, or forge identity keys.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#4ade80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 2. INFORMATION PROCESSED &amp; STORED
          </h2>
          <p>
            Because privacy is engineered into our cryptographic protocols, our data footprint is zero by default:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#cbd5e1]">
            <li><strong className="text-[#f8fafc]">Message Payloads &amp; Media:</strong> Encrypted client-side using X25519 Double Ratchet and AES-256-GCM. Decryption keys are stored strictly in your local device vault protected by Argon2id. We never possess your private keys.</li>
            <li><strong className="text-[#f8fafc]">Relay Telemetry:</strong> Ephemeral network packets contain only blind routing descriptors. No sender or recipient identities, message bodies, or call streams are logged to disk.</li>
            <li><strong className="text-[#f8fafc]">Website &amp; Download Traffic:</strong> When accessing the public portal or downloading APK/binary releases, standard network edge requests (IP address and user agent) are handled temporarily for DDoS protection and cached delivery without behavioral profiling.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#4ade80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 3. COOKIES &amp; LOCAL BROWSER STORAGE
          </h2>
          <p>
            The Vexta public website does not deploy advertising, remarketing, or tracking cookies. If you interact with our documentation, light client-side state (such as UI preferences or dismissed notification banners) may be cached locally in your browser <code className="font-mono text-[#4ade80] text-xs">localStorage</code> and never transmitted back to any server.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#4ade80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 4. STATUTORY RIGHTS (RA 10173, GDPR, CCPA)
          </h2>
          <p>
            Under the Philippine Data Privacy Act of 2012 (RA 10173), European GDPR, and California CCPA/CPRA, data subjects possess rights of access, rectification, and erasure. Because Vexta does not hold personal databases or accounts, you retain complete physical control over your data directly on your local device.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6 font-mono text-xs">
          <h3 className="text-[#f8fafc] font-semibold uppercase tracking-wider">
            // DATA PROTECTION &amp; PROTOCOL INQUIRIES
          </h3>
          <p className="text-[#94a3b8]">
            Orientis Digital // Tacloban City, Leyte, Philippines [11.2442°N]
          </p>
          <a
            href="mailto:orientisdigital.official@gmail.com"
            className="text-[#39ff14] hover:underline inline-block font-mono"
          >
            orientisdigital.official@gmail.com
          </a>
        </section>

      </BentoCard>
    </div>
  );
}
