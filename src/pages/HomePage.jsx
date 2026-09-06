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
  'Messenger-Style Real-Time Presence Engine'
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
      badgeVariant: 'neon',
      description: 'Alice types "Hello Bob!". The client uses the X25519 Diffie-Hellman ratchet to derive a fresh ephemeral message key, seals the payload with AES-256-GCM, and steps the ratchet chain for Perfect Forward Secrecy.',
      status: 'Payload sealed on device before reaching network.'
    },
    {
      id: 2,
      title: '2. Blind Relay Routing (Server)',
      node: 'relay',
      actionBadge: 'ZERO-KNOWLEDGE RAM BUFFER',
      badgeVariant: 'mint',
      description: 'The relay inspects only the recipient target hash SHA-256(BobPubKey). The encrypted envelope is buffered strictly in volatile RAM memory with zero disk persistence.',
      status: 'Relay is blind to message plaintext and session keys.'
    },
    {
      id: 3,
      title: '3. Local Decryption & Ratchet (Bob)',
      node: 'bob',
      actionBadge: 'DOUBLE RATCHET ADVANCED',
      badgeVariant: 'green',
      description: 'Bob authenticates with his Ed25519 signed challenge. The server relays the envelope to Bob\'s socket. Bob steps his DH ratchet, derives the matching session key, and decrypts the plaintext.',
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#22C55E]/10 via-[#39FF14]/4 to-transparent blur-[120px] pointer-events-none -z-10"></div>

        {/* Top Product Badge */}
        <div className="flex items-center gap-2">
          <StatusBadge label="// SOVEREIGN CLIENT • ZERO SERVER LOGS" variant="neon" />
        </div>

        {/* Main Provocative Headline */}
        <h1 className="text-[clamp(2.5rem,6.5vw,5rem)] font-extrabold tracking-tight leading-[1.05] text-white uppercase max-w-5xl">
          Say Whatever You Want.<br />
          <span className="text-neon-gradient glow-neon">
            Nobody's Listening On Vexta.
          </span>
        </h1>

        {/* Typewriter Line */}
        <div className="flex items-center justify-center gap-3 h-11 font-mono text-sm md:text-base text-gray-200 font-bold bg-[#0E120D]/90 border border-[#243022] px-6 py-2 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-ping"></span>
          <span className="typewriter text-[#4ADE80]">{typewriterText}</span>
        </div>

        {/* Hero Paragraph */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl font-sans">
          Vexta is the sovereign, peer-to-peer encrypted messaging app engineered for absolute privacy.
          Every conversation is protected by <strong className="text-white">Ed25519 identity keys</strong> and the <strong className="text-[#39FF14]">Signal-grade Double Ratchet protocol</strong> with zero server plaintext storage.
        </p>

        {/* Primary Smart CTA Action Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-1">
          <Link
            to="/downloads"
            className="px-8 py-4 font-extrabold transition-all duration-300 text-sm md:text-base bg-[#22C55E] hover:bg-[#39FF14] text-black hover:shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:-translate-y-0.5 uppercase tracking-widest rounded-xl cursor-pointer select-none flex items-center gap-3 shadow-lg border border-[#39FF14]"
          >
            <i className={`${osInfo.icon} text-lg`}></i>
            <span>Get Vexta for {osInfo.name}</span>
            {latestClientVersion && (
              <span className="text-[11px] bg-black/25 px-2 py-0.5 rounded font-mono font-bold tracking-normal">
                v{latestClientVersion}
              </span>
            )}
          </Link>

          <Link
            to="/docs"
            className="px-7 py-4 font-bold transition-all duration-300 text-sm md:text-base bg-[#0E120D] hover:bg-[#141C13] text-gray-200 hover:text-white border border-[#243022] hover:border-[#39FF14]/50 uppercase tracking-wider rounded-xl cursor-pointer select-none flex items-center gap-2.5 shadow-md"
          >
            <i className="fa-solid fa-book-open text-sm text-[#4ADE80]"></i> Protocol Specs
          </Link>
        </div>

        {/* Platform Supported Chips */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#7E927F] uppercase tracking-wider select-none flex-wrap justify-center">
          <span className="flex items-center gap-1.5"><i className="fa-brands fa-windows text-[#4ADE80]"></i> Windows (Setup &amp; Portable)</span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center gap-1.5"><i className="fa-brands fa-linux text-[#4ADE80]"></i> Linux (AppImage &amp; Deb)</span>
          <span className="text-gray-600">•</span>
          <span className="flex items-center gap-1.5"><i className="fa-brands fa-android text-[#4ADE80]"></i> Android (Universal APK)</span>
        </div>

        {/* Desktop Client Interactive UI Showcase Mockup */}
        <div className="max-w-4xl w-full mt-4 text-left relative group">
          {/* Subtle Ambient Backlight */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#22C55E]/15 via-[#39FF14]/20 to-[#22C55E]/15 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500 pointer-events-none"></div>

          <BentoCard hover={false} className="p-0 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border-[#243022] relative z-10">
            {/* Window Titlebar */}
            <div className="bg-[#08080A] px-5 py-3.5 border-b border-[#243022] flex items-center justify-between select-none">
              <div className="flex items-center gap-2.5">
                <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block"></span>
                <span className="font-mono text-xs md:text-sm text-[#7E927F] ml-2 font-bold">
                  Vexta Messenger{latestClientVersion ? ` // v${latestClientVersion}${latestClientBuild ? ` (Build ${latestClientBuild})` : ''}` : ''}
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-xs text-[#39FF14] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse"></span> DOUBLE RATCHET E2EE
                </span>
              </div>
            </div>

            {/* App UI Grid Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-[#0A0D09] min-h-[320px]">
              {/* Sidebar */}
              <div className="border-r border-[#243022] p-4 flex flex-col gap-3.5 bg-[#080B07]">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7E927F] mb-1">
                  Active Cryptographic Roster
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl bg-[#0E120D] border border-[#22C55E]/40 shadow-sm">
                  <div className="w-9 h-9 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#39FF14] font-mono text-sm font-bold">
                    BOB
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white font-mono">bob_sec</span>
                    <span className="text-xs text-[#39FF14] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]"></span> Verified Ratchet Key
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-2.5 rounded-xl opacity-60 hover:opacity-100 transition-opacity">
                  <div className="w-9 h-9 rounded-lg bg-[#141C13] border border-[#243022] flex items-center justify-center text-gray-400 font-mono text-sm">
                    DEV
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 font-mono">dev_ops</span>
                    <span className="text-xs text-gray-500">Idle</span>
                  </div>
                </div>
              </div>

              {/* Chat Viewport */}
              <div className="col-span-2 p-5 flex flex-col justify-between gap-4 bg-[#0A0D09]">
                {/* Peer Header */}
                <div className="flex items-center justify-between border-b border-[#1C241B] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14]"></span>
                    <span className="text-sm font-bold font-mono text-white">@bob_sec</span>
                    <span className="text-xs font-mono bg-[#141C13] text-[#4ADE80] px-2 py-0.5 rounded border border-[#243022]">
                      Ed25519 Fingerprint: 48B6...A7B8
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[#39FF14] flex items-center gap-1.5 bg-[#22C55E]/10 px-2.5 py-1 rounded-md border border-[#22C55E]/30">
                      <i className="fa-solid fa-lock text-[10px]"></i> Forward Secrecy Active
                    </span>
                  </div>
                </div>

                {/* Conversation Mockup */}
                <div className="flex flex-col gap-3 font-sans">
                  <div className="self-start max-w-sm p-3.5 rounded-2xl rounded-tl-sm bg-[#0E120D] border border-[#243022] text-xs md:text-sm text-gray-200">
                    <div className="text-[10px] text-[#7E927F] font-mono mb-1">bob_sec // 10:42 AM</div>
                    Did you advance the ratchet for today's deployment keys?
                  </div>
                  <div className="self-end max-w-sm p-3.5 rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#22C55E]/20 to-[#39FF14]/20 border border-[#22C55E]/40 text-xs md:text-sm text-white">
                    <div className="text-[10px] text-[#39FF14] font-mono mb-1 text-right">You // 10:43 AM</div>
                    Done. X25519 DH ratchet advanced. Zero plaintext leaves this machine.
                  </div>
                </div>

                {/* Input Simulation Bar */}
                <div className="flex items-center gap-3 pt-3 border-t border-[#1C241B]">
                  <div className="flex-1 bg-[#0E120D] border border-[#243022] rounded-xl px-4 py-2.5 text-xs text-[#7E927F] font-mono flex items-center justify-between">
                    <span>Type an encrypted message...</span>
                    <i className="fa-solid fa-shield-halved text-[#39FF14] text-xs"></i>
                  </div>
                  <button className="w-10 h-10 rounded-xl bg-[#22C55E] text-black flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                    <i className="fa-solid fa-paper-plane text-xs"></i>
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
          <BentoCard span="col-span-1" className="p-5 gap-2.5 border-[#243022] hover:border-[#39FF14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#39FF14] font-mono text-sm font-bold uppercase tracking-wider">
              <i className="fa-solid fa-key text-base"></i>
              <span>Local Key Sovereignty</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Ed25519 identity keypairs are generated and held strictly on client devices. Private keys never touch the network.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" className="p-5 gap-2.5 border-[#243022] hover:border-[#39FF14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#22C55E] font-mono text-sm font-bold uppercase tracking-wider">
              <i className="fa-solid fa-repeat text-base"></i>
              <span>Double Ratchet E2EE</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Continuous X25519 Diffie-Hellman + KDF ratcheting delivers Perfect Forward Secrecy and Post-Compromise Security.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" className="p-5 gap-2.5 border-[#243022] hover:border-[#39FF14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#4ADE80] font-mono text-sm font-bold uppercase tracking-wider">
              <i className="fa-solid fa-eye-slash text-base"></i>
              <span>Zero Server Plaintext</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              The relay routes blind envelopes in volatile RAM with zero message logging, tracking, or telemetry persistence.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" className="p-5 gap-2.5 border-[#243022] hover:border-[#39FF14]/50 transition-colors">
            <div className="flex items-center gap-2 text-[#7E927F] font-mono text-sm font-bold uppercase tracking-wider">
              <i className="fa-solid fa-phone text-base"></i>
              <span>Direct P2P WebRTC</span>
            </div>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Voice and video calls connect directly between devices via peer-to-peer WebRTC, bypassing central servers entirely.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE PROTOCOL LIFECYCLE SIMULATOR */}
      {/* ========================================================================= */}
      <section id="demo-simulator" className="flex flex-col gap-6 scroll-mt-28 w-full">
        <SectionHeader
          tag="// HOW VEXTA PROTECTS YOUR WORDS"
          title="End-to-End Cryptographic Lifecycle"
          description="Interactive lab: step through how Vexta seals, blind-relays, and decrypts messages with continuous ratchet forward secrecy."
        />

        <BentoCard hover={false} className="p-6 md:p-8 flex flex-col gap-6 border-[#243022] bg-[#0A0D09]/80 backdrop-blur-md">
          {/* Top Step Selector & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#243022] pb-4">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    setIsPlaying(false);
                    setStep(s);
                  }}
                  className={`px-4 py-2 rounded-xl font-mono text-xs md:text-sm uppercase font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    step === s
                      ? 'bg-[#22C55E] text-black shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                      : 'bg-[#141C13] text-gray-300 hover:text-white hover:bg-[#1A2419] border border-[#243022]'
                  }`}
                >
                  <span>Step {s}</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl font-mono text-xs md:text-sm text-gray-200 hover:text-white bg-[#141C13] hover:bg-[#1A2419] border border-[#243022] flex items-center gap-2 cursor-pointer transition-colors"
            >
              <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xs text-[#39FF14]`}></i>
              <span>{isPlaying ? 'Pause Loop' : 'Auto Play'}</span>
            </button>
          </div>

          {/* 3-Node Interactive Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative items-center">
            {/* NODE 1: ALICE */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-3 ${
              step === 1
                ? 'bg-[#141C13] border-[#39FF14] shadow-[0_0_25px_rgba(57,255,20,0.25)]'
                : 'bg-[#0A0D09] border-[#1C241B] opacity-70'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#39FF14] font-mono text-sm font-bold">
                    A
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-mono">Alice</h4>
                    <span className="text-xs text-[#7E927F] font-mono">Origin Client</span>
                  </div>
                </div>
                {step === 1 && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-ping"></span>
                )}
              </div>
              <div className="text-xs md:text-sm font-mono text-gray-300 bg-[#060805] p-3 rounded-xl border border-[#1C241B]">
                <div className="text-[10px] text-[#7E927F] uppercase font-bold mb-0.5">Payload Status:</div>
                <div className="text-white flex items-center gap-1.5">
                  <i className="fa-solid fa-lock text-[#39FF14] text-xs"></i>
                  <span>{step === 1 ? 'Sealing with Bob\'s X25519 Ratchet' : 'Message Dispatched'}</span>
                </div>
              </div>
            </div>

            {/* NODE 2: RELAY */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-3 ${
              step === 2
                ? 'bg-[#141C13] border-[#22C55E] shadow-[0_0_25px_rgba(34,197,94,0.3)]'
                : 'bg-[#0A0D09] border-[#1C241B] opacity-70'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#4ADE80] font-mono text-sm font-bold">
                    R
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-mono">Vexta Relay</h4>
                    <span className="text-xs text-[#7E927F] font-mono">Blind RAM Broker</span>
                  </div>
                </div>
                {step === 2 && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-ping"></span>
                )}
              </div>
              <div className="text-xs md:text-sm font-mono text-gray-300 bg-[#060805] p-3 rounded-xl border border-[#1C241B]">
                <div className="text-[10px] text-[#7E927F] uppercase font-bold mb-0.5">Relay Status:</div>
                <div className="text-[#4ADE80] flex items-center gap-1.5">
                  <i className="fa-solid fa-bolt text-[#4ADE80] text-xs"></i>
                  <span>{step === 2 ? 'Routing blind envelope in RAM' : 'Standby / Idle'}</span>
                </div>
              </div>
            </div>

            {/* NODE 3: BOB */}
            <div className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-3 ${
              step === 3
                ? 'bg-[#141C13] border-[#4ADE80] shadow-[0_0_25px_rgba(74,222,128,0.25)]'
                : 'bg-[#0A0D09] border-[#1C241B] opacity-70'
            }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#4ADE80]/20 border border-[#4ADE80]/40 flex items-center justify-center text-[#4ADE80] font-mono text-sm font-bold">
                    B
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase font-mono">Bob</h4>
                    <span className="text-xs text-[#7E927F] font-mono">Recipient Client</span>
                  </div>
                </div>
                {step === 3 && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-ping"></span>
                )}
              </div>
              <div className="text-xs md:text-sm font-mono text-gray-300 bg-[#060805] p-3 rounded-xl border border-[#1C241B]">
                <div className="text-[10px] text-[#7E927F] uppercase font-bold mb-0.5">Recipient Status:</div>
                <div className="text-[#39FF14] flex items-center gap-1.5">
                  <i className="fa-solid fa-lock-open text-[#39FF14] text-xs"></i>
                  <span>{step === 3 ? 'Decrypted with Ratchet Key' : 'Waiting for envelope'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Crisp Step Explainer Box */}
          <div className="bg-[#060805] border border-[#243022] rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-sm font-bold text-white uppercase">
                  {currentStepInfo.title}
                </span>
                <StatusBadge label={currentStepInfo.actionBadge} variant={currentStepInfo.badgeVariant} />
              </div>
              <p className="text-xs md:text-sm text-gray-300 font-sans leading-relaxed mt-1">
                {currentStepInfo.description}
              </p>
            </div>
            <div className="text-xs md:text-sm font-mono text-[#4ADE80] bg-[#0E120D] border border-[#243022] px-4 py-2 rounded-xl shrink-0 flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-[#39FF14]"></i>
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
          tag="// PILLARS OF SOVEREIGNTY"
          title="Engineered For Complete Privacy"
          description="A defense-in-depth cryptographic architecture that eliminates metadata retention, surveillance vectors, and central points of failure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <BentoCard span="col-span-1" className="p-6 gap-3.5 border-[#243022] hover:border-[#39FF14]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-2xl text-[#39FF14]">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="font-bold text-white uppercase text-base tracking-wider font-mono">Double Ratchet Protocol</h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
              Every message advances an X25519 Diffie-Hellman + KDF ratchet chain, guaranteeing Perfect Forward Secrecy and Break-in Recovery.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" className="p-6 gap-3.5 border-[#243022] hover:border-[#39FF14]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-2xl text-[#39FF14]">
              <i className="fa-solid fa-key"></i>
            </div>
            <h3 className="font-bold text-white uppercase text-base tracking-wider font-mono">Ed25519 Zero-Knowledge Auth</h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
              No passwords are stored on servers. Authentication is validated purely through cryptographic challenge signing with client Ed25519 keys.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" className="p-6 gap-3.5 border-[#243022] hover:border-[#39FF14]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-2xl text-[#39FF14]">
              <i className="fa-solid fa-vault"></i>
            </div>
            <h3 className="font-bold text-white uppercase text-base tracking-wider font-mono">Argon2id Encrypted Vault</h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
              Contact rosters, credentials, and local settings are sealed with an Argon2id key derived from your master password before any backup sync.
            </p>
          </BentoCard>

          <BentoCard span="col-span-1" className="p-6 gap-3.5 border-[#243022] hover:border-[#39FF14]/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-2xl text-[#39FF14]">
              <i className="fa-solid fa-phone"></i>
            </div>
            <h3 className="font-bold text-white uppercase text-base tracking-wider font-mono">Peer-to-Peer WebRTC Calls</h3>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
              High-definition voice and video calls establish direct device-to-device WebRTC channels, keeping communication off the server.
            </p>
          </BentoCard>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 3-STEP QUICK START ONBOARDING */}
      {/* ========================================================================= */}
      <section className="w-full">
        <BentoCard hover={false} className="p-8 md:p-10 flex flex-col gap-8 border-[#243022]">
          <SectionHeader
            tag="// QUICK START"
            title="Sovereign Messaging in 3 Steps"
            description="Install Vexta and start chatting with sovereign end-to-end encryption in under two minutes."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#060805] p-6 rounded-2xl border border-[#243022] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-lg shadow-md">
                1
              </div>
              <h4 className="font-bold text-white uppercase text-base tracking-wider font-mono">Download Vexta</h4>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                Grab the native client for Windows, Linux, or Android. Verify the signed SHA-256 release checksum directly.
              </p>
              <Link to="/downloads" className="text-xs font-mono font-bold text-[#39FF14] hover:text-white uppercase flex items-center gap-1 mt-auto">
                <span>View Releases</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>

            <div className="bg-[#060805] p-6 rounded-2xl border border-[#243022] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-lg shadow-md">
                2
              </div>
              <h4 className="font-bold text-white uppercase text-base tracking-wider font-mono">Create Identity</h4>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                Launch Vexta. Your Ed25519 identity keypair and X25519 ratchet state are created locally on your device in milliseconds.
              </p>
              <Link to="/docs" className="text-xs font-mono font-bold text-[#39FF14] hover:text-white uppercase flex items-center gap-1 mt-auto">
                <span>Read Docs</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </Link>
            </div>

            <div className="bg-[#060805] p-6 rounded-2xl border border-[#243022] flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E] text-black font-mono font-bold flex items-center justify-center text-lg shadow-md">
                3
              </div>
              <h4 className="font-bold text-white uppercase text-base tracking-wider font-mono">Exchange &amp; Chat</h4>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
                Add contacts by handle. Every message derives a unique session key with Perfect Forward Secrecy automatically.
              </p>
              <Link to="/faq" className="text-xs font-mono font-bold text-[#39FF14] hover:text-white uppercase flex items-center gap-1 mt-auto">
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
        <BentoCard className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-[#243022] bg-gradient-to-r from-[#0A0E0A] via-[#0E140E] to-[#0A0E0A] relative overflow-hidden shadow-2xl">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#39FF14]/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col gap-3 text-left max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse"></span>
              <span className="text-xs font-mono text-[#4ADE80] font-bold uppercase tracking-widest">
                Ready to take back your privacy?
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tight font-mono">
              Download Vexta Today.
            </h2>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-sans">
              Join the sovereign messaging ecosystem. Built with zero-knowledge cryptography, peer-to-peer media streaming, and local key ownership.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full md:w-auto">
            <Link
              to="/downloads"
              className="w-full sm:w-auto px-8 py-4 font-extrabold transition-all duration-300 text-sm bg-[#22C55E] hover:bg-[#39FF14] text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.45)] hover:-translate-y-0.5 uppercase tracking-wider rounded-xl cursor-pointer select-none flex items-center justify-center gap-2.5 shadow-lg border border-[#39FF14]"
            >
              <i className="fa-solid fa-download text-sm"></i>
              <span>Download Releases</span>
            </Link>

            <Link
              to="/docs"
              className="w-full sm:w-auto px-6 py-4 font-bold transition-all duration-300 text-sm bg-[#0E120D] hover:bg-[#141C13] text-gray-200 hover:text-white border border-[#243022] hover:border-[#39FF14]/40 uppercase tracking-wider rounded-xl cursor-pointer select-none flex items-center justify-center gap-2 shadow-md no-underline"
            >
              <i className="fa-solid fa-book-open text-xs text-[#4ADE80]"></i>
              <span>User Guide</span>
            </Link>
          </div>
        </BentoCard>
      </section>
    </div>
  );
}
