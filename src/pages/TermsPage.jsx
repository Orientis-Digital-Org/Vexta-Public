import React from 'react';
import StatusBadge from '../components/ui/StatusBadge';
import SectionHeader from '../components/ui/SectionHeader';
import BentoCard from '../components/ui/BentoCard';

export default function TermsPage() {
  return (
    <div className="space-y-12 max-w-5xl mx-auto py-4">
      
      {/* Header */}
      <BentoCard hover={false} brackets={true} className="text-center p-8 md:p-12 space-y-4 bg-[#0c1322] border-[#1e2e4a]">
        <div className="flex justify-center">
          <StatusBadge label="TERMS OF USE &amp; PROTOCOL AUP" variant="cyan" />
        </div>
        <SectionHeader
          tag="REGULATORY COMPLIANCE"
          title="Vexta Terms of Service"
          description="Master terms of use, peer-to-peer relay acceptable use policy, and MIT open-source license agreement for Vexta."
        />
        <div className="font-mono text-xs text-[#94a3b8] tracking-wider uppercase pt-1">
          // EFFECTIVE: SEPTEMBER 2026 // ORIENTIS DIGITAL
        </div>
      </BentoCard>

      {/* Warning Callout Box */}
      <BentoCard hover={false} brackets={true} className="bg-[#0c182c] border-[#1e3a66] p-6 flex items-start gap-4">
        <div className="p-2.5 rounded-[2px] bg-[#0f1d36] text-[#38bdf8] flex-shrink-0 mt-0.5 border border-[#1e3a66]">
          <i className="fa-solid fa-triangle-exclamation text-base"></i>
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm font-sans">
          <h3 className="font-mono font-semibold text-[#38bdf8] uppercase tracking-wider">
            Decentralized Cryptographic Custody
          </h3>
          <p className="text-[#94a3b8] leading-relaxed">
            Vexta is an end-to-end encrypted sovereign messenger. Your identity key pairs and chat vaults are stored strictly on your local hardware. If you lose your passcode, <strong className="text-[#f8fafc]">your vault cannot be restored by anyone</strong>. Orientis Digital maintains zero backdoors.
          </p>
        </div>
      </BentoCard>

      {/* Main Legal Clauses */}
      <BentoCard hover={false} brackets={true} className="bg-[#0c1322] border-[#1e2e4a] p-6 sm:p-10 space-y-8 font-sans text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
        
        <section className="space-y-3">
          <h2 className="font-mono text-sm font-semibold text-[#38bdf8] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 1. ACCEPTANCE &amp; SCOPE
          </h2>
          <p>
            By downloading, running, compiling, or accessing Vexta applications, relay bridges, or the gateway at <code className="font-mono text-[#38bdf8] text-xs">vexta.orientis.digital</code>, you agree to these Terms of Service.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#38bdf8] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 2. ACCEPTABLE USE POLICY (AUP) FOR RELAY BRIDGES
          </h2>
          <p>
            While Vexta relay bridges operate blindly on sealed ciphertext payloads, maintenance of public relay infrastructure requires strict adherence to this Acceptable Use Policy:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-[#cbd5e1]">
            <li><strong className="text-[#f8fafc]">Infrastructure Integrity:</strong> You may not conduct denial-of-service (DDoS) attacks, flood bridge websockets, exploit relay protocol vulnerabilities, or disrupt network availability for other peers.</li>
            <li><strong className="text-[#f8fafc]">Lawful Usage:</strong> You may not use Vexta relay infrastructure for criminal operations, unlawful malware dissemination, or child sexual abuse material (CSAM). Maintenance of network relays complies with mandatory statutory reporting obligations.</li>
            <li><strong className="text-[#f8fafc]">Self-Hosted Bridges:</strong> Users deploying self-hosted Vexta bridges bear full operational and legal responsibility for their nodes and upstream internet routing.</li>
          </ul>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#38bdf8] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 3. OPEN-SOURCE MIT LICENSE
          </h2>
          <p>
            The Vexta client codebase is published under the permissive MIT License. You may inspect, fork, compile, and distribute copies, subject to including the original copyright and permission notices.
          </p>
          <div className="p-4 rounded-[2px] bg-[#08101d] border border-[#1e2e4a] font-mono text-xs text-[#94a3b8] leading-relaxed">
            THE SOFTWARE IS PROVIDED &ldquo;AS IS&rdquo;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          </div>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#38bdf8] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 4. TRADEMARKS &amp; BRANDING
          </h2>
          <p>
            While the source code is MIT licensed, the name &ldquo;Vexta&rdquo;, the Vexta logo mark, and associated Orientis Digital branding are protected intellectual property. Third-party forks or commercial distributions must use distinct project names and iconography.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#38bdf8] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 5. LIMITATION OF LIABILITY
          </h2>
          <p>
            In no event shall Orientis Digital, its contributors, or infrastructure operators be liable for any direct, indirect, incidental, or consequential damages resulting from message transmission failures, relay node downtime, corrupted local vaults, or loss of encryption keys.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6">
          <h2 className="font-mono text-sm font-semibold text-[#38bdf8] uppercase tracking-wider flex items-center gap-2">
            <span>//</span> 6. GOVERNING LAW
          </h2>
          <p>
            These terms are governed by the laws of the Republic of the Philippines. Any disputes shall be submitted to the competent courts of Tacloban City, Leyte, Philippines.
          </p>
        </section>

        <section className="space-y-3 border-t border-[#1e2e4a] pt-6 font-mono text-xs">
          <h3 className="text-[#f8fafc] font-semibold uppercase tracking-wider">
            // LEGAL &amp; PROTOCOL INQUIRIES
          </h3>
          <p className="text-[#94a3b8]">
            Orientis Digital // Tacloban City, Leyte, Philippines [11.2442°N]
          </p>
          <a
            href="mailto:orientisdigital.official@gmail.com"
            className="text-[#38bdf8] hover:underline inline-block font-mono"
          >
            orientisdigital.official@gmail.com
          </a>
        </section>

      </BentoCard>
    </div>
  );
}
