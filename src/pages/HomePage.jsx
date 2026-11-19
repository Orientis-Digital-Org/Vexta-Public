import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import BentoCard from '../components/ui/BentoCard';
import StatusBadge from '../components/ui/StatusBadge';
import SectionHeader from '../components/ui/SectionHeader';

const PHRASES = [
  'Sovereign End-to-End Encrypted Messenger',
  'Native Desktop & Android Mobile Applications',
  'Ed25519 Elliptic Curve Identity Authentication',
  'Signal-Grade Double Ratchet Protocol (PFS & PCS)',
  'Blind Envelope Routing Protocol (Zero Metadata Retention)',
  'Real-Time Peer-to-Peer WebRTC Voice & Video Calling',
  'Binary MessagePack WebSocket Framing',
  'Client-Side AES-256-GCM Payload Encryption',
  'Engineered by Orientis Digital'
];

export default function HomePage() {
  const {
    latestClientVersion,
    latestClientBuild,
  } = useApp();

  // OS Detection State
  const [detectedOS, setDetectedOS] = useState('windows');
  useEffect(() => {
    const ua = (typeof window !== 'undefined' && navigator.userAgent) ? navigator.userAgent.toLowerCase() : '';
    if (ua.includes('win')) setDetectedOS('windows');
    else if (ua.includes('android')) setDetectedOS('android');
    else if (ua.includes('linux')) setDetectedOS('linux');
    else if (ua.includes('mac') || ua.includes('darwin')) setDetectedOS('macos');
  }, []);

  // Typewriter effect state
  const [typewriterText, setTypewriterText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIdx];
    let timer;

    if (!isDeleting && charIdx < currentPhrase.length) {
      timer = setTimeout(() => {
        setTypewriterText(currentPhrase.substring(0, charIdx + 1));
        setCharIdx(charIdx + 1);
      }, 60);
    } else if (!isDeleting && charIdx === currentPhrase.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2800);
    } else if (isDeleting && charIdx > 0) {
      timer = setTimeout(() => {
        setTypewriterText(currentPhrase.substring(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 25);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx((phraseIdx + 1) % PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  // Simplified 3-Step Simulator State
  const [step, setStep] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const stepTimerRef = useRef(null);

  const steps = [
    {
      id: 1,
      title: '1. Local Encryption & Ratchet (Alice)',
      node: 'alice',
      actionBadge: 'X25519 + DOUBLE RATCHET + AES-256-GCM',
      badgeVariant: 'cyan',
      description: 'Alice types "Hello Bob!". The client uses the X25519 Diffie-Hellman ratchet to derive a fresh ephemeral message key, seals the payload with AES-256-GCM, and steps the ratchet chain for Perfect Forward Secrecy.',
      status: 'Payload sealed on local hardware before socket transmission.'
    },
    {
      id: 2,
      title: '2. Blind Relay Routing (Server)',
      node: 'relay',
      actionBadge: 'ZERO-KNOWLEDGE RAM BUFFER',
      badgeVariant: 'green',
      description: 'The relay inspects only the recipient target hash SHA-256(BobPubKey). The encrypted envelope is buffered strictly in volatile RAM memory with zero disk persistence and zero logging.',
      status: 'Relay is completely blind to message plaintext and ratchet states.'
    },
    {
      id: 3,
      title: '3. Local Decryption & Ratchet (Bob)',
      node: 'bob',
      actionBadge: 'DOUBLE RATCHET ADVANCED',
      badgeVariant: 'cyan',
      description: 'Bob authenticates with his Ed25519 signed challenge. The server relays the blind envelope to Bob\'s socket. Bob steps his DH ratchet, derives the matching session key, and decrypts the plaintext.',
      status: 'Decryption succeeded on recipient device.'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      stepTimerRef.current = setInterval(() => {
        setStep((prev) => (prev % 3) + 1);
      }, 4000);
    }
    return () => {
      if (stepTimerRef.current) clearInterval(stepTimerRef.current);
    };
  }, [isPlaying]);

  const currentStepInfo = steps.find((s) => s.id === step) || steps[0];

  const getOsLabel = () => {
    if (detectedOS === 'windows') return { name: 'Windows', icon: 'fa-brands fa-windows' };
    if (detectedOS === 'linux') return { name: 'Linux', icon: 'fa-brands fa-linux' };
    if (detectedOS === 'macos') return { name: 'macOS', icon: 'fa-brands fa-apple' };
    if (detectedOS === 'android') return { name: 'Android', icon: 'fa-brands fa-android' };
    return { name: 'Windows', icon: 'fa-brands fa-windows' };
  };

  const osInfo = getOsLabel();

  return (
    <div className="flex flex-col gap-20 md:gap-28 py-2 w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="flex flex-col items-center text-center gap-8 pt-4 pb-8 relative">
        {/* Subtle Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#38bdf8]/10 via-[#0ea5e9]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>

        {/* Top Product HUD Telemetry Bar */}
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-xs font-mono text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.15)] uppercase tracking-wider select-none">
          <span className="status-pulse"></span>
          <span className="text-[#f8fafc] font-semibold">VEXTA SOVEREIGN SYSTEM</span>
          <span className="text-[#1e3a66]">|</span>
          <span className="text-[#94a3b8] hidden sm:inline">ZERO SERVER LOGS // ED25519 &amp; DOUBLE RATCHET</span>
          <span className="text-[#38bdf8] font-bold">[ONLINE]</span>
        </div>

        {/* Main Provocative Headline */}
        <h1 className="text-[clamp(2.3rem,6vw,4.75rem)] font-bold tracking-tight leading-[1.08] text-[#f8fafc] uppercase max-w-5xl">
          Say Whatever You Want.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#38bdf8]">
            Nobody's Listening On Vexta.
          </span>
        </h1>

        {/* Typewriter Line */}
        <div className="flex items-center justify-center gap-3 h-11 font-mono text-xs md:text-sm text-[#cbd5e1] font-medium bg-[#08101d] border border-[#1e2e4a] px-6 py-2 rounded-[2px] shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <span className="status-pulse"></span>
          <span className="typewriter text-[#38bdf8]">// {typewriterText}</span>
        </div>

        {/* Hero Paragraph */}
        <p className="text-sm md:text-base text-[#94a3b8] leading-relaxed max-w-2xl font-sans">
          Vexta is the sovereign, peer-to-peer encrypted messaging app engineered by Orientis Digital.
          Every conversation is protected by <strong className="text-[#f8fafc]">Ed25519 identity keypairs</strong> and the <strong className="text-[#38bdf8]">Signal-grade Double Ratchet protocol</strong> with zero server plaintext storage.
        </p>

        {/* Primary Smart CTA Action Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            to="/downloads"
            className="btn-cyber-primary px-8 py-3.5 text-xs md:text-sm flex items-center gap-3"
          >
            <i className={`${osInfo.icon} text-base text-[#38bdf8]`}></i>
            <span>GET VEXTA FOR {osInfo.name.toUpperCase()}</span>
            {latestClientVersion && (
              <span className="text-[11px] bg-[#38bdf8]/20 text-[#38bdf8] px-2 py-0.5 rounded-[2px] font-mono font-bold tracking-normal border border-[#38bdf8]/40">
                v{latestClientVersion}
              </span>
            )}
          </Link>

          <Link
            to="/docs"
            className="btn-cyber-ghost px-7 py-3.5 text-xs md:text-sm flex items-center gap-2.5"
          >
            <i className="fa-solid fa-book-open text-xs text-[#38bdf8]"></i>
            <span>PROTOCOL SPECS</span>
          </Link>
        </div>

        {/* Platform Supported Chips */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#94a3b8] uppercase tracking-wider select-none flex-wrap justify-center pt-2">
          <span className="flex items-center gap-1.5"><i className="fa-brands fa-windows text-[#38bdf8]"></i> Windows (Setup &amp; Portable)</span>
          <span className="text-[#1e2e4a]">•</span>
          <span className="flex items-center gap-1.5"><i className="fa-brands fa-linux text-[#38bdf8]"></i> Linux (AppImage &amp; Deb)</span>
          <span className="text-[#1e2e4a]">•</span>
          <span className="flex items-center gap-1.5"><i className="fa-brands fa-android text-[#38bdf8]"></i> Android (Universal APK)</span>
        </div>

        {/* Desktop Client Interactive UI Showcase Mockup */}
        <div className="max-w-4xl w-full mt-4 text-left relative group">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#38bdf8]/15 via-[#0ea5e9]/20 to-[#38bdf8]/15 rounded-lg blur-xl opacity-60 group-hover:opacity-80 transition duration-500 pointer-events-none"></div>

          <BentoCard hover={false} brackets={true} className="p-0 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border-[#1e2e4a] bg-[#0c1322] relative z-10">
            {/* Window Titlebar */}
            <div className="bg-[#070b12] px-5 py-3 border-b border-[#1e2e4a] flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="font-mono text-xs md:text-sm text-[#94a3b8] ml-2 font-medium">
                  Vexta Client{latestClientVersion ? ` // v${latestClientVersion}${latestClientBuild ? ` (Build ${latestClientBuild})` : ''}` : ''}
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#38bdf8] font-semibold uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <span className="status-pulse"></span>
                  <span>DOUBLE RATCHET E2EE</span>
                </span>
              </div>
            </div>

            {/* App UI Grid Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#08101d] min-h-[320px]">
              {/* Sidebar */}
              <div className="border-r border-[#1e2e4a] p-4 flex flex-col gap-3.5 bg-[#070b12]">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#94a3b8] mb-1 flex items-center gap-1.5">
                  <span className="text-[#38bdf8]">//</span> ACTIVE PEER ROSTER
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] shadow-[0_0_12px_rgba(56,189,248,0.15)]">
                  <div className="w-9 h-9 rounded-[2px] bg-[#0f1d36] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] font-mono text-xs font-bold">
                    BOB
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#f8fafc] font-mono">bob_sec</span>
                    <span className="text-[11px] text-[#38bdf8] flex items-center gap-1 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span> Verified Ratchet Key
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-[2px] opacity-60 hover:opacity-100 transition-opacity bg-[#08101d] border border-[#1e2e4a]">
                  <div className="w-9 h-9 rounded-[2px] bg-[#0c1322] border border-[#1e2e4a] flex items-center justify-center text-[#64748b] font-mono text-xs">
                    DEV
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#94a3b8] font-mono">dev_ops</span>
                    <span className="text-[11px] text-[#64748b] font-mono">Idle // Socket Ready</span>
                  </div>
                </div>
              </div>

              {/* Chat Viewport */}
              <div className="col-span-2 p-5 flex flex-col justify-between gap-4 bg-[#08101d]">
                {/* Peer Header */}
                <div className="flex items-center justify-between border-b border-[#1e2e4a] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                    <span className="text-sm font-semibold font-mono text-[#f8fafc]">@bob_sec</span>
                    <span className="text-[11px] font-mono bg-[#0c182c] text-[#38bdf8] px-2 py-0.5 rounded-[2px] border border-[#1e3a66]">
                      Ed25519: 48B6...A7B8
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#38bdf8] flex items-center gap-1.5 bg-[#0c182c] px-2.5 py-1 rounded-[2px] border border-[#1e3a66]">
                      <i className="fa-solid fa-lock text-[10px]"></i> Forward Secrecy Active
                    </span>
                  </div>
                </div>

                {/* Conversation Mockup */}
                <div className="flex flex-col gap-3 font-sans">
                  <div className="self-start max-w-sm p-3.5 rounded-[2px] bg-[#0c1322] border border-[#1e2e4a] text-xs md:text-sm text-[#cbd5e1]">
                    <div className="text-[10px] text-[#94a3b8] font-mono mb-1">bob_sec // 10:42 AM</div>
                    Did you advance the ratchet for today's deployment keys?
                  </div>
                  <div className="self-end max-w-sm p-3.5 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-xs md:text-sm text-[#f8fafc] shadow-[0_0_15px_rgba(56,189,248,0.15)]">
                    <div className="text-[10px] text-[#38bdf8] font-mono mb-1 text-right">You // 10:43 AM</div>
                    Done. X25519 DH ratchet advanced. Zero plaintext leaves this machine.
                  </div>
                </div>

                {/* Input Simulation Bar */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#1e2e4a]">
                  <div className="flex-1 bg-[#070b12] border border-[#1e2e4a] rounded-[2px] px-4 py-2.5 text-xs text-[#64748b] font-mono flex items-center justify-between">
                    <span>Type an encrypted message...</span>
                    <i className="fa-solid fa-shield-halved text-[#38bdf8] text-xs"></i>
                  </div>
                  <button className="btn-cyber-primary w-10 h-10 flex items-center justify-center p-0">
                    <i className="fa-solid fa-paper-plane text-xs text-[#38bdf8]"></i>
                  </button>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. VALUE & ARCHITECTURE TRUST MATRIX */}
      {/* ========================================================================= */}
      <section className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <BentoCard span="col-span-1" brackets={true} className="p-5 gap-2.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs font-semibold uppercase tracking-wider">
              <i className="fa-solid fa-key text-sm"></i>
              <span>Local Key Sovereignty</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              Ed25519 identity keypairs are generated and held strictly on client hardware. Private keys never touch the network or any central server.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" brackets={true} className="p-5 gap-2.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs font-semibold uppercase tracking-wider">
              <i className="fa-solid fa-repeat text-sm"></i>
              <span>Double Ratchet E2EE</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              Continuous X25519 Diffie-Hellman + KDF ratcheting delivers Perfect Forward Secrecy and Post-Compromise Security on every single transmission.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" brackets={true} className="p-5 gap-2.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs font-semibold uppercase tracking-wider">
              <i className="fa-solid fa-eye-slash text-sm"></i>
              <span>Zero Server Plaintext</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              The relay routes blind envelopes in volatile RAM with zero message logging, behavioral tracking, or telemetry persistence.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" brackets={true} className="p-5 gap-2.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="flex items-center gap-2 text-[#38bdf8] font-mono text-xs font-semibold uppercase tracking-wider">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Direct P2P WebRTC</span>
            </div>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              Voice and video calls connect directly between devices via peer-to-peer WebRTC, bypassing central servers entirely for absolute media confidentiality.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE PROTOCOL LIFECYCLE SIMULATOR */}
      {/* ========================================================================= */}
      <section id="demo-simulator" className="flex flex-col gap-6 scroll-mt-28 w-full">
        <SectionHeader
          tag="CRYPTOGRAPHIC PROTOCOL FLOW"
          title="End-to-End Cryptographic Lifecycle"
          description="Interactive lab: step through how Vexta seals, blind-relays, and decrypts messages with continuous ratchet forward secrecy."
        />

        <BentoCard hover={false} brackets={true} className="p-6 md:p-8 flex flex-col gap-6 border-[#1e2e4a] bg-[#0c1322]">
          {/* Top Step Selector & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e2e4a] pb-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setIsPlaying(false);
                    setStep(s);
                  }}
                  className={`px-3.5 py-1.5 rounded-[2px] font-mono text-xs uppercase font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    step === s
                      ? 'bg-[#0c182c] text-[#38bdf8] border border-[#1e3a66] shadow-[0_0_12px_rgba(56,189,248,0.2)]'
                      : 'bg-[#08101d] text-[#94a3b8] hover:text-[#38bdf8] border border-[#1e2e4a]'
                  }`}
                >
                  <span className="text-[#38bdf8]">{step === s ? '>' : '#'}</span>
                  <span>Step {s}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-3.5 py-1.5 rounded-[2px] font-mono text-xs text-[#cbd5e1] hover:text-[#38bdf8] bg-[#08101d] border border-[#1e2e4a] flex items-center gap-2 cursor-pointer transition-colors"
            >
              <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xs text-[#38bdf8]`}></i>
              <span>{isPlaying ? 'Pause Loop' : 'Auto Play'}</span>
            </button>
          </div>

          {/* 3-Node Interactive Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative items-center">
            {/* NODE 1: ALICE */}
            <div className={`p-5 rounded-[3px] border transition-all duration-300 flex flex-col gap-3 ${
              step === 1
                ? 'bg-[#0c182c] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                : 'bg-[#08101d] border-[#1e2e4a] opacity-70'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[2px] bg-[#0f1d36] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] font-mono text-xs font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f8fafc] uppercase font-mono">Alice</h4>
                    <span className="text-[11px] text-[#94a3b8] font-mono">Origin Client</span>
                  </div>
                </div>
                {step === 1 && (
                  <span className="status-pulse"></span>
                )}
              </div>
              <div className="text-xs font-mono text-[#cbd5e1] bg-[#070b12] p-3 rounded-[2px] border border-[#1e2e4a]">
                <div className="text-[10px] text-[#94a3b8] uppercase font-medium mb-0.5">// PAYLOAD STATUS:</div>
                <div className="text-[#38bdf8] flex items-center gap-1.5">
                  <i className="fa-solid fa-lock text-[#38bdf8] text-xs"></i>
                  <span>{step === 1 ? 'Sealing with Bob\'s X25519 Ratchet' : 'Message Dispatched'}</span>
                </div>
              </div>
            </div>

            {/* NODE 2: RELAY */}
            <div className={`p-5 rounded-[3px] border transition-all duration-300 flex flex-col gap-3 ${
              step === 2
                ? 'bg-[#0c182c] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                : 'bg-[#08101d] border-[#1e2e4a] opacity-70'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[2px] bg-[#0f1d36] border border-[#1e3a66] flex items-center justify-center text-[#0ea5e9] font-mono text-xs font-bold">
                    R
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f8fafc] uppercase font-mono">Vexta Relay</h4>
                    <span className="text-[11px] text-[#94a3b8] font-mono">Blind RAM Broker</span>
                  </div>
                </div>
                {step === 2 && (
                  <span className="status-pulse"></span>
                )}
              </div>
              <div className="text-xs font-mono text-[#cbd5e1] bg-[#070b12] p-3 rounded-[2px] border border-[#1e2e4a]">
                <div className="text-[10px] text-[#94a3b8] uppercase font-medium mb-0.5">// RELAY STATUS:</div>
                <div className="text-[#34d399] flex items-center gap-1.5">
                  <i className="fa-solid fa-bolt text-[#34d399] text-xs"></i>
                  <span>{step === 2 ? 'Routing blind envelope in RAM' : 'Standby / Idle'}</span>
                </div>
              </div>
            </div>

            {/* NODE 3: BOB */}
            <div className={`p-5 rounded-[3px] border transition-all duration-300 flex flex-col gap-3 ${
              step === 3
                ? 'bg-[#0c182c] border-[#38bdf8] shadow-[0_0_25px_rgba(56,189,248,0.2)]'
                : 'bg-[#08101d] border-[#1e2e4a] opacity-70'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-[2px] bg-[#0f1d36] border border-[#1e3a66] flex items-center justify-center text-[#38bdf8] font-mono text-xs font-bold">
                    B
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#f8fafc] uppercase font-mono">Bob</h4>
                    <span className="text-[11px] text-[#94a3b8] font-mono">Recipient Client</span>
                  </div>
                </div>
                {step === 3 && (
                  <span className="status-pulse"></span>
                )}
              </div>
              <div className="text-xs font-mono text-[#cbd5e1] bg-[#070b12] p-3 rounded-[2px] border border-[#1e2e4a]">
                <div className="text-[10px] text-[#94a3b8] uppercase font-medium mb-0.5">// RECIPIENT STATUS:</div>
                <div className="text-[#38bdf8] flex items-center gap-1.5">
                  <i className="fa-solid fa-lock-open text-[#38bdf8] text-xs"></i>
                  <span>{step === 3 ? 'Decrypted with Ratchet Key' : 'Waiting for envelope'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step Explainer Box */}
          <div className="bg-[#08101d] border border-[#1e2e4a] rounded-[2px] p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xs md:text-sm font-semibold text-[#f8fafc] uppercase">
                  {currentStepInfo.title}
                </span>
                <StatusBadge label={currentStepInfo.actionBadge} variant={currentStepInfo.badgeVariant} />
              </div>
              <p className="text-xs md:text-sm text-[#94a3b8] font-sans leading-relaxed mt-1">
                {currentStepInfo.description}
              </p>
            </div>
            <div className="text-xs font-mono text-[#34d399] bg-[#0c182c] border border-[#1e3a66] px-3.5 py-1.5 rounded-[2px] shrink-0 flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#10b981]"></i>
              <span>{currentStepInfo.status}</span>
            </div>
          </div>
        </BentoCard>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORE CAPABILITIES BENTO GRID */}
      {/* ========================================================================= */}
      <section className="flex flex-col gap-8 w-full">
        <SectionHeader
          tag="SOVEREIGN ARCHITECTURE"
          title="Engineered For Complete Privacy"
          description="A defense-in-depth cryptographic architecture that eliminates metadata retention, surveillance vectors, and central points of failure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <BentoCard span="col-span-1" brackets={true} className="p-6 gap-3.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="w-11 h-11 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-xl text-[#38bdf8]">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="font-semibold text-[#f8fafc] uppercase text-sm tracking-wider font-mono">Double Ratchet Protocol</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              Every message advances an X25519 Diffie-Hellman + KDF ratchet chain, guaranteeing Perfect Forward Secrecy and Break-in Recovery.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" brackets={true} className="p-6 gap-3.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="w-11 h-11 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-xl text-[#38bdf8]">
              <i className="fa-solid fa-key"></i>
            </div>
            <h3 className="font-semibold text-[#f8fafc] uppercase text-sm tracking-wider font-mono">Ed25519 Zero-Knowledge Auth</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              No passwords are stored on servers. Authentication is validated purely through cryptographic challenge signing with client Ed25519 keys.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" brackets={true} className="p-6 gap-3.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="w-11 h-11 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-xl text-[#38bdf8]">
              <i className="fa-solid fa-vault"></i>
            </div>
            <h3 className="font-semibold text-[#f8fafc] uppercase text-sm tracking-wider font-mono">Argon2id Encrypted Vault</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              Contact rosters, credentials, and local settings are sealed with an Argon2id key derived from your master password before any backup sync.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" brackets={true} className="p-6 gap-3.5 border-[#1e2e4a] hover:border-[#38bdf8] transition-colors bg-[#0c1322]">
            <div className="w-11 h-11 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-xl text-[#38bdf8]">
              <i className="fa-solid fa-phone"></i>
            </div>
            <h3 className="font-semibold text-[#f8fafc] uppercase text-sm tracking-wider font-mono">Peer-to-Peer WebRTC Calls</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
              High-definition voice and video calls establish direct device-to-device WebRTC channels, keeping communication off the server.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 3-STEP QUICK START ONBOARDING */}
      {/* ========================================================================= */}
      <section className="w-full">
        <BentoCard hover={false} brackets={true} className="p-8 md:p-10 flex flex-col gap-8 border-[#1e2e4a] bg-[#0c1322]">
          <SectionHeader
            tag="DEPLOYMENT PROCEDURES"
            title="Sovereign Messaging in 3 Steps"
            description="Install Vexta and start communicating with sovereign end-to-end encryption in under two minutes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#08101d] p-6 rounded-[2px] border border-[#1e2e4a] flex flex-col gap-4">
              <div className="w-8 h-8 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                01
              </div>
              <h4 className="font-semibold text-[#f8fafc] uppercase text-sm tracking-wider font-mono">Download Vexta</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Grab the native client for Windows, Linux, or Android. Verify the signed SHA-256 release checksum directly.
              </p>
              <Link to="/downloads" className="text-xs font-mono font-medium text-[#38bdf8] hover:text-[#f8fafc] uppercase flex items-center gap-1.5 mt-auto">
                <span>View Releases</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>

            <div className="bg-[#08101d] p-6 rounded-[2px] border border-[#1e2e4a] flex flex-col gap-4">
              <div className="w-8 h-8 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                02
              </div>
              <h4 className="font-semibold text-[#f8fafc] uppercase text-sm tracking-wider font-mono">Generate Keys</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Launch Vexta. Your Ed25519 identity keypair and X25519 ratchet state are generated locally on your device in milliseconds.
              </p>
              <Link to="/docs" className="text-xs font-mono font-medium text-[#38bdf8] hover:text-[#f8fafc] uppercase flex items-center gap-1.5 mt-auto">
                <span>Read Docs</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>

            <div className="bg-[#08101d] p-6 rounded-[2px] border border-[#1e2e4a] flex flex-col gap-4">
              <div className="w-8 h-8 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] text-[#38bdf8] font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                03
              </div>
              <h4 className="font-semibold text-[#f8fafc] uppercase text-sm tracking-wider font-mono">Exchange &amp; Chat</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Add contacts by public key or handle. Every message derives a unique session key with Perfect Forward Secrecy automatically.
              </p>
              <Link to="/faq" className="text-xs font-mono font-medium text-[#38bdf8] hover:text-[#f8fafc] uppercase flex items-center gap-1.5 mt-auto">
                <span>Security FAQ</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>
        </BentoCard>
      </section>

      {/* ========================================================================= */}
      {/* 6. CALL TO ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="w-full">
        <BentoCard brackets={true} className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-[#1e2e4a] bg-[#0c1322] relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#38bdf8]/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col gap-3 text-left max-w-xl">
            <div className="flex items-center gap-2">
              <span className="status-pulse"></span>
              <span className="text-xs font-mono text-[#38bdf8] font-semibold uppercase tracking-widest">
                READY TO SECURE YOUR COMMUNICATIONS?
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#f8fafc] uppercase tracking-tight font-sans">
              Download Vexta Today.
            </h2>
            <p className="text-xs md:text-sm text-[#94a3b8] leading-relaxed font-sans">
              Join the sovereign messaging ecosystem engineered by Orientis Digital. Built with zero-knowledge cryptography, peer-to-peer media streaming, and absolute local key ownership.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full md:w-auto">
            <Link
              to="/downloads"
              className="btn-cyber-primary w-full sm:w-auto px-7 py-3 text-xs md:text-sm flex items-center justify-center gap-2.5"
            >
              <i className="fa-solid fa-download text-xs text-[#38bdf8]"></i>
              <span>[ DOWNLOAD CLIENT ]</span>
            </Link>

            <Link
              to="/docs"
              className="btn-cyber-ghost w-full sm:w-auto px-6 py-3 text-xs md:text-sm flex items-center justify-center gap-2 no-underline"
            >
              <i className="fa-solid fa-book-open text-xs text-[#38bdf8]"></i>
              <span>[ USER GUIDE ]</span>
            </Link>
          </div>
        </BentoCard>
      </section>
    </div>
  );
}
