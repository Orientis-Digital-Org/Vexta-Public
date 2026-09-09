import React from 'react';
import StatusBadge from '../components/ui/StatusBadge';
import SectionHeader from '../components/ui/SectionHeader';

export default function TermsPage() {
  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="flex justify-center">
          <StatusBadge status="active" text="TERMS OF USE &amp; PROTOCOL AUP" />
        </div>
        <SectionHeader
          title="Vexta Terms of Service"
          highlight="Terms of Service"
          description="Master terms of use, peer-to-peer relay acceptable use policy, and MIT open-source license agreement for Vexta."
        />
        <div className="font-mono text-xs text-[#7E927F] tracking-wider uppercase pt-1">
          // EFFECTIVE: SEPTEMBER 2026 // ORIENTIS DIGITAL
        </div>
      </div>

      {/* Warning Callout Box */}
      <div className="bg-[#131b11] border border-[#22C55E]/30 rounded-2xl p-6 flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-[#22C55E]/10 text-[#39FF14] flex-shrink-0 mt-0.5">
          <i className="fa-solid fa-triangle-exclamation text-base"></i>
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm font-sans">
          <h3 className="font-mono font-bold text-[#4ADE80] uppercase tracking-wider">
            Decentralized Cryptographic Custody
          </h3>
          <p className="text-[#9ab09b] leading-relaxed">
            Vexta is an end-to-end encrypted sovereign messenger. Your identity key pairs and chat vaults are stored strictly on your local hardware. If you lose your passcode, <strong className="text-white">your vault cannot be restored by anyone</strong>. Orientis Digital maintains no master backdoors.
          </p>
        </div>
      </div>

      {/* Main Legal Clauses */}
      <div className="bg-[#0A0D09] border border-[#1C241B] rounded-3xl p-6 sm:p-10 space-y-8 font-sans text-xs sm:text-sm text-[#7E927F] leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 1. ACCEPTANCE &amp; SCOPE
          </h2>
          <p>
            By downloading, running, compiling, or accessing Vexta applications, relay bridges, or the website at <code className="font-mono text-[#39FF14] text-xs">vexta.nexusec.space</code>, you agree to these Terms of Service.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 2. ACCEPTABLE USE POLICY (AUP) FOR RELAY BRIDGES
          </h2>
          <p>
            While Vexta relay bridges operate blindly on sealed ciphertext payloads, maintenance of public relay infrastructure requires strict adherence to this Acceptable Use Policy:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#9ab09b]">
            <li><strong className="text-white">Infrastructure Integrity:</strong> You may not conduct denial-of-service (DDoS) attacks, flood bridge websockets, exploit relay protocol vulnerabilities, or disrupt network availability for other peers.</li>
            <li><strong className="text-white">Lawful Usage:</strong> You may not use Vexta relay infrastructure for criminal operations, unlawful malware dissemination, or child sexual abuse material (CSAM). Maintenance of network relays complies with mandatory statutory reporting obligations.</li>
            <li><strong className="text-white">Self-Hosted Bridges:</strong> Users deploying self-hosted Vexta bridges bear full operational and legal responsibility for their nodes and upstream internet routing.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 3. OPEN-SOURCE MIT LICENSE
          </h2>
          <p>
            The Vexta codebase is published under the permissive MIT License. You may inspect, fork, compile, and distribute copies, subject to including the original copyright and permission notices.
          </p>
          <div className="p-4 rounded-xl bg-[#0e130d] border border-[#1C241B] font-mono text-xs text-[#9ab09b] leading-relaxed">
            THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          </div>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 4. TRADEMARKS &amp; BRANDING
          </h2>
          <p>
            While the source code is MIT licensed, the name &ldquo;Vexta&rdquo;, the Vexta logo mark, and associated Orientis Digital branding are protected trademarks. Third-party forks or commercial distributions must use distinct project names and iconography, as specified in <code className="font-mono text-[#39FF14] text-xs">TRADEMARK.md</code>.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 5. LIMITATION OF LIABILITY
          </h2>
          <p>
            In no event shall Orientis Digital, its contributors, or infrastructure operators be liable for any direct, indirect, incidental, or consequential damages resulting from message transmission failures, relay node downtime, corrupted local vaults, or loss of encryption keys.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6">
          <h2 className="font-mono text-base font-bold text-[#4ADE80] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 6. GOVERNING LAW
          </h2>
          <p>
            These terms are governed by the laws of the Republic of the Philippines. Any disputes shall be submitted to the exclusive jurisdiction of the competent courts of Tacloban City, Leyte, Philippines.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1C241B] pt-6 font-mono text-xs">
          <h3 className="text-white font-bold uppercase tracking-wider">
            // LEGAL &amp; PROTOCOL INQUIRIES
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
