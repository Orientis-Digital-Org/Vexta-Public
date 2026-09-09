import React from 'react';
import StatusBadge from '../components/ui/StatusBadge';
import SectionHeader from '../components/ui/SectionHeader';

export default function PrivacyPage() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex justify-center">
          <StatusBadge status="active" text="ZERO-KNOWLEDGE ARCHITECTURE" />
        </div>
        <SectionHeader
          title="Vexta Privacy Policy"
          highlight="Privacy Policy"
          description="Engineered from the ground up for absolute cryptographic privacy. No accounts, no phone numbers, and zero telemetry."
        />
        <div className="font-mono text-xs text-[#7E927F] tracking-wider uppercase pt-1">
          // REVISION: SEPTEMBER 2026 // ORIENTIS DIGITAL LEGAL &amp; PROTOCOL TEAM
        </div>
      </div>

      {/* Core Privacy Guarantees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0e130d] border border-[#243022] rounded-2xl p-6 space-y-3 relative overflow-hidden group hover:border-[#39FF14]/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#39FF14]">
            <i className="fa-solid fa-user-slash text-base"></i>
          </div>
          <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Zero Account Identity</h3>
          <p className="font-sans text-xs text-[#7E927F] leading-relaxed">
            Vexta eliminates user accounts entirely. No phone number, email address, or government identity is ever requested, stored, or verified.
          </p>
        </div>

        <div className="bg-[#0e130d] border border-[#243022] rounded-2xl p-6 space-y-3 relative overflow-hidden group hover:border-[#39FF14]/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#39FF14]">
            <i className="fa-solid fa-box-archive text-base"></i>
          </div>
          <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Blind Ephemeral Relays</h3>
          <p className="font-sans text-xs text-[#7E927F] leading-relaxed">
            Network relay nodes route cryptographically sealed ciphertext packets and immediately purge them from memory once delivered.
          </p>
        </div>

        <div className="bg-[#0e130d] border border-[#243022] rounded-2xl p-6 space-y-3 relative overflow-hidden group hover:border-[#39FF14]/40 transition-colors">
          <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 flex items-center justify-center text-[#39FF14]">
            <i className="fa-solid fa-cookie-bite text-base"></i>
          </div>
          <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">Zero Tracking Cookies</h3>
          <p className="font-sans text-xs text-[#7E927F] leading-relaxed">
            There are zero analytics trackers, advertising beacons, or third-party behavioral cookies embedded across Vexta portals or applications.
          </p>
        </div>
      </div>

      {/* Main Legal Clauses */}
      <div className="bg-[#0A0D09] border border-[#1C241B] rounded-3xl p-6 sm:p-10 space-y-8 font-sans text-xs sm:text-sm text-[#7E927F] leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 1. SCOPE &amp; PROTOCOL PURPOSE
          </h2>
          <p>
            This Privacy Policy governs the Vexta sovereign messaging application (Windows, Linux, Android) and its public documentation gateway (<code className="font-mono text-[#39FF14] text-xs">vexta.nexusec.space</code>), operated by Orientis Digital (&ldquo;Orientis&rdquo;, &ldquo;we&rdquo;).
          </p>
          <p>
            Vexta operates strictly under an end-to-end encrypted, zero-knowledge architecture. We cannot view message contents, decrypt voice calls, inspect contact rosters, or forge identity keys.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 2. INFORMATION PROCESSED &amp; STORED
          </h2>
          <p>
            Because privacy is engineered into our cryptographic protocols, our data footprint is zero by default:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#9ab09b]">
            <li><strong className="text-white">Message Payloads &amp; Media:</strong> Encrypted client-side using X25519 Double Ratchet and AES-256-GCM. Decryption keys are stored strictly in your local device vault protected by Argon2id. We never possess your private keys.</li>
            <li><strong className="text-white">Relay Telemetry:</strong> Ephemeral network packets contain only blind routing descriptors. No sender or recipient identities, message bodies, or call streams are logged to disk.</li>
            <li><strong className="text-white">Website &amp; Download Traffic:</strong> When accessing the public portal or downloading APK/binary releases, standard network edge requests (IP address and user agent) are handled temporarily by Cloudflare for DDoS protection and cached delivery without profiling.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 3. COOKIES &amp; LOCAL BROWSER STORAGE
          </h2>
          <p>
            The Vexta public website does not drop advertising, remarketing, or tracking cookies. If you interact with our documentation, light client-side state (such as UI theme toggles or dismissed notification banners) may be cached locally in your browser <code className="font-mono text-[#39FF14] text-xs">localStorage</code> and never transmitted back to any server.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 4. APP STORE &amp; THIRD-PARTY COMPLIANCE
          </h2>
          <p>
            In compliance with global application marketplace requirements (Google Play Developer Policies, F-Droid Standards, and Microsoft App Certification):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#9ab09b]">
            <li>Vexta does not access your contacts book, SMS records, location sensors, or microphone/camera without explicit per-call user authorization.</li>
            <li>No user information is sold, rented, monetized, or shared with advertising brokers.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 5. STATUTORY RIGHTS (RA 10173, GDPR, CCPA)
          </h2>
          <p>
            Under the Philippine Data Privacy Act of 2012 (RA 10173), European GDPR, and California CCPA/CPRA, data subjects possess rights of access, rectification, and erasure. Because Vexta does not hold personal databases or accounts, you retain complete physical control over your data directly on your local device.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6 font-mono text-xs">
          <h3 className="text-white font-bold uppercase tracking-wider">
            // DATA PROTECTION &amp; PROTOCOL CONTACT
          </h3>
          <p className="text-[#7E927F]">
            Orientis Digital // Tacloban City, Leyte, Philippines
          </p>
          <a
            href="mailto:orientisdigital.official@gmail.com"
            className="text-[#39FF14] hover:underline inline-block font-mono"
          >
            orientisdigital.official@gmail.com
          </a>
        </section>

      </div>
    </div>
  );
}
