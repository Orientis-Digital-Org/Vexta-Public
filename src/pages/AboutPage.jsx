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
      solutionDesc: 'Vexta asks for zero personal credentials. No phone number, no email address, and no SMS codes. You pick a display name and start talking immediately.'
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
      solutionDesc: 'Vexta relay servers work like blind postal couriers. They pass sealed digital envelopes from one device to another and immediately erase them from memory.'
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
      title: 'Human-First Design',
      desc: 'Privacy should not require a computer science degree. Vexta provides enterprise-grade protection with a clean, modern interface anyone can enjoy.'
    },
    {
      icon: 'fa-solid fa-ban',
      title: 'Zero Ads, Zero Trackers',
      desc: 'There are no analytics trackers, advertising beacons, or third-party cookies embedded in Vexta. Your attention and data are entirely your own.'
    },
    {
      icon: 'fa-solid fa-earth-americas',
      title: 'Cross-Platform Freedom',
      desc: 'Seamlessly connect with your inner circle across Windows, Linux, and Android devices without being forced into a single hardware ecosystem.'
    }
  ];

  return (
    <div className="flex flex-col gap-8 py-4 max-w-5xl mx-auto w-full">
      {/* 1. Page Header */}
      <BentoCard hover={false} className="p-8 md:p-12 flex flex-col items-center text-center gap-6 border-[#243022] bg-[#0E120D]">
        <SectionHeader
          tag="// ABOUT VEXTA"
          title="The Story Behind Vexta"
          description="Why we built an uncompromising communication tool designed to return privacy, dignity, and autonomy back to people."
        />

        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <StatusBadge label="Zero Surveillance" variant="neon" />
          <StatusBadge label="No Phone Numbers" variant="green" />
          <StatusBadge label="Local Device Vaults" variant="neon" />
        </div>
      </BentoCard>

      {/* 2. Mission Statement */}
      <BentoCard hover={false} className="p-8 md:p-12 flex flex-col gap-6 border-[#243022] leading-relaxed">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#39FF14] text-xl">
            <i className="fa-solid fa-quote-left"></i>
          </div>
          <div>
            <span className="text-xs font-mono uppercase text-[#39FF14] font-bold tracking-widest">// OUR CORE MISSION</span>
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase font-mono tracking-wide">
              Privacy Is a Human Right, Not a Luxury
            </h2>
          </div>
        </div>

        <p className="text-sm md:text-base text-gray-200 leading-relaxed font-sans">
          In an era where every message, relationship, and conversation is monetized, logged, and fed into surveillance algorithms, <strong className="text-white">Vexta</strong> was created as a refusal to accept that status quo.
        </p>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed font-sans">
          We believe that private conversations should remain just that—private. What you discuss with your family, friends, colleagues, and collaborators belongs solely to you, free from corporate middlemen, data brokers, and eavesdropping.
        </p>
      </BentoCard>

      {/* 3. Problems Vexta Tries to Solve */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 bg-[#39FF14] rounded-full"></span>
            <span className="text-xs font-mono uppercase text-[#39FF14] font-bold tracking-widest">// THE PROBLEMS WE SOLVE</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase font-mono tracking-tight">
            Why Modern Messaging Is Broken
          </h2>
          <p className="text-xs md:text-sm text-gray-400">
            How mainstream communication tools compromise your personal autonomy, and how Vexta fixes each issue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, idx) => (
            <BentoCard key={idx} hover={true} className="p-6 md:p-8 flex flex-col gap-5 border-[#243022] bg-[#0E120D]">
              <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#39FF14] text-xl shrink-0">
                <i className={item.icon}></i>
              </div>

              {/* Problem Block */}
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <span>The Problem: {item.problemTitle}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Solution Block */}
              <div className="flex flex-col gap-1.5 p-4 rounded-xl bg-[#141C13] border border-[#22C55E]/30">
                <div className="flex items-center gap-2 text-[#39FF14] font-mono text-xs font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-shield-check"></i>
                  <span>The Vexta Solution: {item.solutionTitle}</span>
                </div>
                <p className="text-xs text-gray-200 leading-relaxed">
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
          <BentoCard key={i} hover={false} className="p-6 rounded-2xl border-[#243022] bg-[#060805] flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#39FF14] text-lg">
              <i className={pillar.icon}></i>
            </div>
            <h3 className="text-base font-bold text-white uppercase font-mono tracking-wide">
              {pillar.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              {pillar.desc}
            </p>
          </BentoCard>
        ))}
      </div>

      {/* 5. Developer Section: Orientis Digital */}
      <BentoCard hover={false} className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center border-[#243022] bg-[#0E120D] shadow-2xl">
        <div className="w-28 h-28 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-2xl flex items-center justify-center overflow-hidden shrink-0 p-5 shadow-lg">
          <img src="/img/orientis-logo.png" alt="Orientis Digital Logo" className="w-full h-full object-contain" />
        </div>

        <div className="flex-1 flex flex-col gap-3.5 text-left">
          <div className="flex items-center gap-2">
            <StatusBadge label="// CORE DEVELOPER" variant="neon" />
            <span className="text-xs font-mono text-gray-400">Software Studio</span>
          </div>

          <h3 className="font-extrabold text-white text-xl md:text-2xl uppercase tracking-wider font-mono">
            Engineered by Orientis Digital
          </h3>

          <p className="leading-relaxed font-sans text-xs md:text-sm text-gray-300">
            Orientis Digital is an independent engineering team passionate about creating resilient communication tools, modern digital infrastructure, and sovereign software systems.
          </p>

          <p className="leading-relaxed font-sans text-xs md:text-sm text-gray-400">
            We build software with a fundamental principle: technology should empower the individual, not surveil them. Vexta is developed openly, ethically, and without venture capital surveillance incentives.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2 pt-4 border-t border-[#243022]">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="bg-[#060805] border border-[#243022] px-3 py-1.5 rounded-lg text-gray-300">
                Independent Engineering
              </span>
              <span className="bg-[#060805] border border-[#243022] px-3 py-1.5 rounded-lg text-gray-300">
                Open Protocols
              </span>
              <span className="bg-[#060805] border border-[#243022] px-3 py-1.5 rounded-lg text-[#39FF14]">
                100% Zero-Tracking
              </span>
            </div>

            <a
              href="https://nexusec.space/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-mono text-xs md:text-sm font-bold uppercase bg-[#22C55E] text-black hover:bg-[#39FF14] transition-all no-underline flex items-center gap-2"
            >
              <span>Visit Orientis Digital</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
            </a>
          </div>
        </div>
      </BentoCard>

      {/* 6. Ready to Join Banner */}
      <BentoCard hover={false} className="p-8 md:p-10 flex flex-col items-center text-center gap-4 border-[#243022] bg-[#060805]">
        <h3 className="text-xl md:text-2xl font-extrabold text-white uppercase font-mono">
          Ready to Take Back Your Conversations?
        </h3>
        <p className="text-xs md:text-sm text-gray-300 max-w-lg">
          Download Vexta today. Setup takes less than 30 seconds with no personal details required.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/downloads"
            className="px-6 py-3 rounded-xl font-mono text-xs md:text-sm font-bold uppercase bg-[#22C55E] text-black hover:bg-[#39FF14] transition-all no-underline flex items-center gap-2"
          >
            <i className="fa-solid fa-download"></i>
            <span>Download Vexta Free</span>
          </Link>
          <Link
            to="/docs"
            className="px-6 py-3 rounded-xl font-mono text-xs md:text-sm font-bold uppercase bg-[#141C13] border border-[#243022] text-gray-200 hover:text-white hover:border-[#22C55E]/40 transition-all no-underline flex items-center gap-2"
          >
            <i className="fa-solid fa-book-open"></i>
            <span>Read User Guide</span>
          </Link>
        </div>
      </BentoCard>
    </div>
  );
}
