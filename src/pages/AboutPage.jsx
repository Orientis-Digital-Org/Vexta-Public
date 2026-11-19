import BentoCard from '../components/ui/BentoCard';
import StatusBadge from '../components/ui/StatusBadge';
import SectionHeader from '../components/ui/SectionHeader';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const problems = [
    {
      icon: 'fa-solid fa-address-book',
      problemTitle: 'Phone Number & Identity Demands',
      problemDesc: 'Mainstream messaging apps force you to surrender your personal phone number, upload your address book, and tie your digital self to your physical real-world identity.',
      solutionTitle: 'Complete Pseudonymous Freedom',
      solutionDesc: 'Vexta asks for zero personal credentials. No phone number, no email address, and no SMS codes. You pick a display name and start communicating immediately.'
    },
    {
      icon: 'fa-solid fa-cloud-arrow-up',
      problemTitle: 'Vulnerable Cloud Backups',
      problemDesc: 'Even apps with end-to-end encryption quietly upload your chat logs to unencrypted or remotely accessible cloud backups that can be breached, subpoenaed, or leaked.',
      solutionTitle: 'Physical Device Sovereignty',
      solutionDesc: 'Your conversation history never sits on remote company servers. All messages reside strictly inside your local device vault, locked with your personal passcode.'
    },
    {
      icon: 'fa-solid fa-chart-pie',
      problemTitle: 'Metadata Harvesting & Ad Profiling',
      problemDesc: 'Tech corporations track who you message, what time you talk, your location, and how often you connect, packaging your social circle into an advertising profile.',
      solutionTitle: 'Blind Envelope Delivery',
      solutionDesc: 'Vexta relay servers work like blind postal couriers. They pass sealed digital envelopes from one device to another and immediately erase them from volatile memory.'
    },
    {
      icon: 'fa-solid fa-user-slash',
      problemTitle: 'Centralized Bans & Remote Lockouts',
      problemDesc: 'When private companies control your account, they can ban you, censor your conversations, or shut down your access without recourse or warning.',
      solutionTitle: 'Indestructible Digital Identity',
      solutionDesc: 'Your identity in Vexta is a cryptographic lock created directly on your device. No central authority can disable, revoke, or confiscate your ability to connect.'
    }
  ];

  const pillars = [
    {
      icon: 'fa-solid fa-hand-holding-heart',
      title: 'Human-First Engineering',
      desc: 'Privacy should not require a computer science degree. Vexta provides enterprise-grade protection with a crisp, modern console interface anyone can navigate.'
    },
    {
      icon: 'fa-solid fa-ban',
      title: 'Zero Ads, Zero Trackers',
      desc: 'There are no analytics trackers, advertising beacons, or third-party cookies embedded in Vexta. Your attention and data are entirely your own.'
    },
    {
      icon: 'fa-solid fa-earth-americas',
      title: 'Cross-Platform Freedom',
      desc: 'Seamlessly connect with your inner circle across Windows, Linux, and Android devices without being forced into a single hardware walled garden.'
    }
  ];

  return (
    <div className="flex flex-col gap-8 py-4 max-w-5xl mx-auto w-full">
      {/* 1. Page Header */}
      <BentoCard hover={false} brackets={true} className="p-8 md:p-12 flex flex-col items-center text-center gap-6 border-[#1e2e4a] bg-[#0c1322]">
        <SectionHeader
          tag="MISSION STATEMENT"
          title="The Story Behind Vexta"
          description="Why we built an uncompromising communication tool designed to return privacy, dignity, and autonomy back to people."
        />

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <StatusBadge label="Zero Surveillance" variant="cyan" />
          <StatusBadge label="No Phone Numbers" variant="green" />
          <StatusBadge label="Local Device Vaults" variant="cyan" />
        </div>
      </BentoCard>

      {/* 2. Mission Statement */}
      <BentoCard hover={false} brackets={true} className="p-8 md:p-12 flex flex-col gap-6 border-[#1e2e4a] bg-[#0c1322] leading-relaxed">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-lg">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#38bdf8] font-semibold tracking-widest">// CORE PHILOSOPHY</span>
            <h2 className="text-xl md:text-2xl font-bold text-[#f8fafc] uppercase font-sans tracking-tight">
              Privacy Is a Human Right, Not a Luxury
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-[#cbd5e1] leading-relaxed font-sans">
          In an era where every message, relationship, and conversation is monetized, logged, and fed into surveillance algorithms, <strong className="text-[#f8fafc]">Vexta</strong> was created as a refusal to accept that status quo.
        </p>
        <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed font-sans">
          We believe that private conversations should remain just that—private. What you discuss with your family, friends, colleagues, and collaborators belongs solely to you, free from corporate middlemen, data brokers, and eavesdropping.
        </p>
      </BentoCard>

      {/* 3. Problems Vexta Solves */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="status-pulse"></span>
            <span className="text-xs font-mono uppercase text-[#38bdf8] font-semibold tracking-widest">// VULNERABILITY MITIGATION</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase font-sans tracking-tight">
            Why Modern Messaging Is Broken
          </h2>
          <p className="text-xs md:text-sm text-[#94a3b8]">
            How mainstream communication platforms compromise personal autonomy, and how Vexta addresses each threat vector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, idx) => (
            <BentoCard key={idx} hover={true} brackets={true} className="p-6 md:p-8 flex flex-col gap-5 border-[#1e2e4a] bg-[#0c1322]">
              <div className="w-10 h-10 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-lg shrink-0">
                <i className={item.icon}></i>
              </div>

              {/* Problem Block */}
              <div className="flex flex-col gap-1.5 p-4 rounded-[2px] bg-[#2b0d0d]/30 border border-[#ef4444]/30">
                <div className="flex items-center gap-2 text-[#f87171] font-mono text-xs font-semibold uppercase tracking-wider">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <span>The Problem: {item.problemTitle}</span>
                </div>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Solution Block */}
              <div className="flex flex-col gap-1.5 p-4 rounded-[2px] bg-[#0c182c] border border-[#1e3a66]">
                <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs font-semibold uppercase tracking-wider">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>The Vexta Solution: {item.solutionTitle}</span>
                </div>
                <p className="text-xs text-[#cbd5e1] leading-relaxed">
                  {item.solutionDesc}
                </p>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>

      {/* 4. Three Pillars of Experience */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {pillars.map((pillar, i) => (
          <BentoCard key={i} hover={false} brackets={true} className="p-6 rounded-[2px] border-[#1e2e4a] bg-[#0c1322] flex flex-col gap-3">
            <div className="w-10 h-10 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] text-base">
              <i className={pillar.icon}></i>
            </div>
            <h3 className="text-sm md:text-base font-semibold text-[#f8fafc] uppercase font-mono tracking-wide">
              {pillar.title}
            </h3>
            <p className="text-xs md:text-sm text-[#94a3b8] leading-relaxed font-sans">
              {pillar.desc}
            </p>
          </BentoCard>
        ))}
      </div>

      {/* 5. Developer Section: Orientis Digital */}
      <BentoCard hover={false} brackets={true} className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center border-[#1e2e4a] bg-[#0c1322] shadow-2xl">
        <div className="w-24 h-24 bg-[#0c182c] border border-[#1e3a66] rounded-[3px] flex items-center justify-center overflow-hidden shrink-0 p-4 shadow-lg">
          <img src="/img/orientis-logo.png" alt="Orientis Digital Logo" className="w-full h-full object-contain" />
        </div>

        <div className="flex-1 flex flex-col gap-3.5 text-left">
          <div className="flex items-center gap-2">
            <StatusBadge label="CORE DEVELOPER" variant="cyan" />
            <span className="text-xs font-mono text-[#94a3b8]">// TACLOBAN REGIONAL HQ</span>
          </div>

          <h3 className="font-bold text-[#f8fafc] text-xl md:text-2xl uppercase tracking-wider font-sans">
            Engineered by Orientis Digital
          </h3>

          <p className="leading-relaxed font-sans text-xs md:text-sm text-[#cbd5e1]">
            Orientis Digital is an independent engineering firm passionate about building resilient communication systems, sovereign digital infrastructure, and privacy-preserving applications in Eastern Visayas.
          </p>

          <p className="leading-relaxed font-sans text-xs md:text-sm text-[#94a3b8]">
            We build software with a fundamental principle: technology should empower the individual, not surveil them. Vexta is developed openly, ethically, and without surveillance incentives.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2 pt-4 border-t border-[#1e2e4a]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="bg-[#08101d] border border-[#1e2e4a] px-3 py-1.5 rounded-[2px] text-[#94a3b8]">
                Independent Engineering
              </span>
              <span className="bg-[#08101d] border border-[#1e2e4a] px-3 py-1.5 rounded-[2px] text-[#94a3b8]">
                Open Protocols
              </span>
              <span className="bg-[#08101d] border border-[#1e2e4a] px-3 py-1.5 rounded-[2px] text-[#34d399]">
                100% Zero-Tracking
              </span>
            </div>

            <a
              href="https://orientis.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber-primary text-xs py-2 px-4 no-underline inline-flex items-center gap-2"
            >
              <span>[ VISIT ORIENTIS DIGITAL ]</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </a>
          </div>
        </div>
      </BentoCard>

      {/* 6. Ready to Join Banner */}
      <BentoCard hover={false} brackets={true} className="p-8 md:p-10 flex flex-col items-center text-center gap-4 border-[#1e2e4a] bg-[#08101d]">
        <h3 className="text-xl md:text-2xl font-bold text-[#f8fafc] uppercase font-sans">
          Ready to Take Back Your Communications?
        </h3>
        <p className="text-xs md:text-sm text-[#94a3b8] max-w-lg">
          Download Vexta today. Setup takes less than 30 seconds with no personal credentials required.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/downloads"
            className="btn-cyber-primary px-6 py-2.5 text-xs md:text-sm flex items-center gap-2 no-underline"
          >
            <i className="fa-solid fa-download text-xs text-[#38bdf8]"></i>
            <span>[ DOWNLOAD VEXTA ]</span>
          </Link>
          <Link
            to="/docs"
            className="btn-cyber-ghost px-6 py-2.5 text-xs md:text-sm flex items-center gap-2 no-underline"
          >
            <i className="fa-solid fa-book-open text-xs text-[#38bdf8]"></i>
            <span>[ READ PROTOCOL DOCS ]</span>
          </Link>
        </div>
      </BentoCard>
    </div>
  );
}
