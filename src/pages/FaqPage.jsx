import { useState } from 'react';
import { Link } from 'react-router-dom';
import BentoCard from '../components/ui/BentoCard';
import SectionHeader from '../components/ui/SectionHeader';
import StatusBadge from '../components/ui/StatusBadge';

export default function FaqPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqs, setOpenFaqs] = useState({ 1: true });

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What is Vexta and how does it protect my privacy?',
      answer:
        'Vexta is a free, sovereign messaging application for Windows, Linux, and Android. It protects your privacy by eliminating accounts, phone numbers, and cloud databases entirely. Your conversations are sealed with a new unique cryptographic lock for every single message, meaning only your intended recipient can ever read what you send.'
    },
    {
      id: 2,
      category: 'general',
      question: 'Do I need a phone number, email, or SMS code to sign up?',
      answer:
        'No. Vexta requires zero personal identifiers. When you open the app for the first time, you choose a display name and your device creates your private cryptographic identity locally. You never have to surrender your real-world phone number or address book.'
    },
    {
      id: 3,
      category: 'general',
      question: 'How is Vexta different from WhatsApp, Telegram, or Signal?',
      answer:
        'Mainstream messaging apps tie your identity to a verified phone number, encourage cloud backups that can be breached, and record extensive metadata about your social graph. Vexta requires no phone number, never stores chat logs in the cloud, and uses blind relay delivery so servers cannot log who you message or when.'
    },
    {
      id: 4,
      category: 'security',
      question: 'Can the server operators or developers read my messages?',
      answer:
        'Never. Messages are locked directly on your device before they leave your hardware. The server acts like a blind postal worker: it receives a sealed, tamper-proof envelope, passes it to the recipient, and immediately deletes it from memory. The server has zero access to encryption keys.'
    },
    {
      id: 5,
      category: 'security',
      question: 'What is the "Double Ratchet" and why does it matter?',
      answer:
        'Instead of using a single password or key for all your messages, Vexta uses a Double Ratchet mechanism that creates a fresh mathematical padlock for each sentence you send. Once a message is opened, its key is permanently destroyed. Even if someone physically examined your device in the future, past messages cannot be unlocked.'
    },
    {
      id: 6,
      category: 'security',
      question: 'How do I add friends and start talking?',
      answer:
        'Every user has a unique Public Address Code and QR code in their profile. Share your code with your friend, or paste their address into your search bar. Once connected, your devices establish a direct, authenticated end-to-end encrypted channel.'
    },
    {
      id: 7,
      category: 'features',
      question: 'Are voice and video calls encrypted as well?',
      answer:
        'Yes. Voice and video calls connect peer-to-peer (P2P) directly between devices using WebRTC with real-time end-to-end encryption. Your audio and video streams do not pass through servers when a direct peer connection is established.'
    },
    {
      id: 8,
      category: 'features',
      question: 'Where are my conversations and media stored?',
      answer:
        'All your chat logs, shared files, and contact lists live strictly on your physical device hardware inside an encrypted vault. There are no corporate cloud backups or remote archives holding your data.'
    },
    {
      id: 9,
      category: 'security',
      question: 'What happens if I forget my device vault passcode?',
      answer:
        'Because Vexta is built with true zero-knowledge privacy, no master backdoor exists. If you lose your passcode, your local vault cannot be recovered by anyone. We strongly recommend remembering your passcode or keeping an offline backup of your vault.'
    },
    {
      id: 10,
      category: 'general',
      question: 'Is Vexta free? How is it funded?',
      answer:
        'Vexta is 100% free and open-source. There are no advertisements, no tracking beacons, no investor surveillance mandates, and no paid tiers. It is engineered by Orientis Digital as an independent initiative dedicated to digital sovereignty.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Questions', count: faqs.length },
    { key: 'general', label: 'Basics & Identity', count: faqs.filter((f) => f.category === 'general').length },
    { key: 'security', label: 'Privacy & Security', count: faqs.filter((f) => f.category === 'security').length },
    { key: 'features', label: 'Calls & Storage', count: faqs.filter((f) => f.category === 'features').length }
  ];

  const toggleFaq = (id) => {
    setOpenFaqs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allState = {};
    faqs.forEach((f) => (allState[f.id] = true));
    setOpenFaqs(allState);
  };

  const collapseAll = () => {
    setOpenFaqs({});
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const query = search.toLowerCase().trim();
    const matchesQ = !query || faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query);
    return matchesCat && matchesQ;
  });

  return (
    <div className="flex flex-col gap-8 py-4 max-w-5xl mx-auto w-full text-gray-200">
      {/* 1. Header Hero Bento */}
      <BentoCard hover={false} className="p-8 md:p-12 text-center flex flex-col items-center gap-5 relative overflow-hidden border-[#243022] bg-[#0E120D]">
        <div className="w-16 h-16 rounded-2xl bg-[#22C55E]/15 border border-[#22C55E]/40 flex items-center justify-center text-3xl text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.2)]">
          <i className="fa-solid fa-circle-question"></i>
        </div>
        <SectionHeader
          tag="// FREQUENTLY ASKED QUESTIONS"
          title="Everything You Need to Know"
          description="Clear, straightforward answers about how Vexta works, how we protect your privacy, and why no phone number is ever required."
        />
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          <StatusBadge label="Zero Surveillance" variant="neon" />
          <StatusBadge label="Plain English Answers" variant="green" />
        </div>
      </BentoCard>

      {/* 2. Filter Toolbar & Search Bento */}
      <BentoCard hover={false} className="p-5 flex flex-col lg:flex-row justify-between items-center gap-4 shadow-xl border-[#243022] bg-[#0E120D]">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={"px-4 py-2.5 font-mono text-xs md:text-sm font-bold uppercase rounded-xl transition-all cursor-pointer flex items-center gap-2 border " + (
                activeCategory === cat.key
                  ? 'bg-[#22C55E] text-black border-[#39FF14] shadow-md'
                  : 'bg-[#060805] text-gray-300 border-[#243022] hover:text-white hover:bg-[#141C13]'
              )}
            >
              <span>{cat.label}</span>
              <span
                className={"px-2 py-0.5 rounded text-xs " + (
                  activeCategory === cat.key ? 'bg-black/30 text-black font-extrabold' : 'bg-white/10 text-gray-400'
                )}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input & Expand Actions */}
        <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
          <div className="relative w-full lg:w-64">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#7E927F]">
              <i className="fa-solid fa-magnifying-glass text-xs"></i>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-[#060805] border border-[#243022] rounded-xl pl-9 pr-8 py-2.5 font-mono text-xs md:text-sm text-gray-100 focus:outline-none focus:border-[#22C55E] placeholder:text-[#7E927F]"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#7E927F] hover:text-white cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-xs"></i>
              </button>
            )}
          </div>

          <button
            onClick={expandAll}
            className="px-3.5 py-2.5 font-mono text-xs font-bold uppercase border border-[#243022] text-gray-200 hover:text-white hover:bg-[#141C13] rounded-xl transition-all shrink-0 cursor-pointer hidden sm:block"
            title="Expand All Items"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3.5 py-2.5 font-mono text-xs font-bold uppercase border border-[#243022] text-[#7E927F] hover:text-white hover:bg-[#141C13] rounded-xl transition-all shrink-0 cursor-pointer hidden sm:block"
            title="Collapse All Items"
          >
            Collapse All
          </button>
        </div>
      </BentoCard>

      {/* 3. FAQ Accordion List */}
      <div className="flex flex-col gap-3.5">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = !!openFaqs[faq.id];
            return (
              <div
                key={faq.id}
                className={"rounded-2xl overflow-hidden border transition-all duration-200 " + (
                  isOpen ? 'border-[#22C55E]/50 bg-[#0E140C] shadow-[0_4px_25px_rgba(34,197,94,0.1)]' : 'border-[#243022] bg-[#0A0E09] hover:border-[#22C55E]/40'
                )}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer group select-none"
                >
                  <span className="text-sm md:text-base font-bold text-white group-hover:text-[#4ADE80] transition-colors flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#39FF14] shrink-0"></span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    className={"w-8 h-8 rounded-lg bg-[#060805] border border-[#243022] flex items-center justify-center text-[#22C55E] transition-transform duration-200 shrink-0 " + (
                      isOpen ? 'rotate-180 bg-[#22C55E]/20 border-[#22C55E]/50 text-[#39FF14]' : ''
                    )}
                  >
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#1C241B] bg-[#060805] p-5 md:p-6 text-sm md:text-base text-gray-300 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <BentoCard hover={false} className="p-12 items-center justify-center text-center gap-4 border-[#243022]">
            <i className="fa-solid fa-magnifying-glass text-[#7E927F] text-3xl animate-pulse"></i>
            <div className="text-sm font-mono text-gray-400 uppercase">
              No questions matching "{search}"
            </div>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
              }}
              className="px-5 py-2.5 font-mono text-xs md:text-sm font-bold uppercase bg-[#22C55E] text-black rounded-xl shadow-md cursor-pointer hover:bg-[#39FF14]"
            >
              Reset Filters
            </button>
          </BentoCard>
        )}
      </div>

      {/* 4. Still Have Questions Banner */}
      <BentoCard className="p-7 md:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 border-[#243022] bg-[#0E120D] shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#22C55E]/15 border border-[#22C55E]/30 flex items-center justify-center text-[#39FF14] text-xl shrink-0">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-base md:text-lg font-bold uppercase tracking-wider text-white font-mono">Want to Dive Deeper?</h3>
            <p className="text-xs md:text-sm text-gray-400 font-sans">
              Read our complete User Guide for step-by-step setup walkthroughs and security details.
            </p>
          </div>
        </div>
        <Link
          to="/docs"
          className="px-6 py-3 font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-black bg-[#22C55E] hover:bg-[#39FF14] rounded-xl transition-all shrink-0 cursor-pointer no-underline flex items-center gap-2 shadow-lg border border-[#39FF14]"
        >
          <span>Open User Guide</span>
          <i className="fa-solid fa-arrow-right text-xs text-black"></i>
        </Link>
      </BentoCard>
    </div>
  );
}
