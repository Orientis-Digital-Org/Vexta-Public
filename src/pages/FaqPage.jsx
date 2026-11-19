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
        'Vexta is a free, sovereign messaging application for Windows, Linux, and Android. It protects your privacy by eliminating user databases, phone numbers, and cloud storage entirely. Your conversations are sealed with a new unique cryptographic lock for every single message, meaning only your intended recipient can ever read what you send.'
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
      question: 'Can I use Vexta across multiple devices?',
      answer:
        'Yes. Vexta includes a cryptographic multi-device pairing system. You can link a secondary desktop or phone by entering an 8-digit verification PIN challenge, and instantly revoke any connected device from your primary client.'
    },
    {
      id: 8,
      category: 'features',
      question: 'Where are my conversations and contact lists stored?',
      answer:
        'All your chat logs and contact lists live strictly on your physical device hardware inside an embedded SQLite vault encrypted with Argon2id and AES-256-GCM. There are zero remote cloud backups holding your data.'
    },
    {
      id: 9,
      category: 'features',
      question: 'Will Vexta support voice, video, files, and LoRa mesh networking?',
      answer:
        'Yes! Voice and video calling, encrypted file/media sharing, voice snippets, and LoRa/Meshtastic off-grid radio networking (allowing communication with zero internet or cell service) are in active development on our engineering roadmap.'
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
    <div className="flex flex-col gap-8 py-4 max-w-5xl mx-auto w-full text-[#cbd5e1]">
      {/* 1. Header Hero Bento */}
      <BentoCard hover={false} brackets={true} className="p-8 md:p-12 text-center flex flex-col items-center gap-5 relative overflow-hidden border-[#1e2e4a] bg-[#0c1322]">
        <div className="w-14 h-14 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-2xl text-[#39ff14] shadow-[0_0_20px_rgba(34,197,94,0.2)]">
          <i className="fa-solid fa-circle-question"></i>
        </div>
        <SectionHeader
          tag="KNOWLEDGE BASE"
          title="Frequently Asked Questions"
          description="Clear, straightforward answers about how Vexta works, how we protect your confidentiality, and why zero credentials are ever required."
        />
        <div className="flex flex-wrap items-center justify-center gap-3 mt-1">
          <StatusBadge label="Zero Surveillance" variant="neon" />
          <StatusBadge label="Open Architecture" variant="green" />
        </div>
      </BentoCard>

      {/* 2. Filter Toolbar & Search Bento */}
      <BentoCard hover={false} brackets={true} className="p-4 flex flex-col lg:flex-row justify-between items-center gap-4 shadow-xl border-[#1e2e4a] bg-[#0c1322]">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 w-full lg:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={"px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider rounded-[2px] transition-all cursor-pointer flex items-center gap-2 border " + (
                activeCategory === cat.key
                  ? 'bg-[#081a10] text-[#39ff14] border-[#1b3d22] shadow-[0_0_10px_rgba(34,197,94,0.18)] font-semibold'
                  : 'bg-[#08101d] text-[#94a3b8] border-[#1e2e4a] hover:text-[#f8fafc] hover:bg-[#0c1322]'
              )}
            >
              <span>{cat.label}</span>
              <span
                className={"px-1.5 py-0.5 rounded-[2px] text-[10px] " + (
                  activeCategory === cat.key ? 'bg-[#39ff14]/20 text-[#39ff14] font-bold' : 'bg-white/5 text-[#94a3b8]'
                )}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input & Expand Actions */}
        <div className="flex items-center gap-2.5 w-full lg:w-auto justify-end">
          <div className="relative w-full lg:w-64">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748b]">
              <i className="fa-solid fa-magnifying-glass text-xs"></i>
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter topics..."
              className="w-full bg-[#08101d] border border-[#1e2e4a] rounded-[2px] pl-8 pr-8 py-1.5 font-mono text-xs text-[#f8fafc] focus:outline-none focus:border-[#22c55e] placeholder:text-[#64748b]"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute inset-y-0 right-0 pr-2.5 flex items-center text-[#64748b] hover:text-[#f8fafc] cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-xs"></i>
              </button>
            )}
          </div>

          <button
            onClick={expandAll}
            className="px-3 py-1.5 font-mono text-xs uppercase border border-[#1e2e4a] text-[#94a3b8] hover:text-[#39ff14] hover:bg-[#08101d] rounded-[2px] transition-all shrink-0 cursor-pointer hidden sm:block"
            title="Expand All Items"
          >
            [ + ]
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 font-mono text-xs uppercase border border-[#1e2e4a] text-[#94a3b8] hover:text-[#39ff14] hover:bg-[#08101d] rounded-[2px] transition-all shrink-0 cursor-pointer hidden sm:block"
            title="Collapse All Items"
          >
            [ - ]
          </button>
        </div>
      </BentoCard>

      {/* 3. FAQ Accordion List */}
      <div className="flex flex-col gap-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = !!openFaqs[faq.id];
            return (
              <div
                key={faq.id}
                className={"rounded-[2px] overflow-hidden border transition-all duration-200 " + (
                  isOpen ? 'border-[#1b3d22] bg-[#081a10]/80 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'border-[#1e2e4a] bg-[#0c1322] hover:border-[#22c55e]/50'
                )}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 md:p-5 flex justify-between items-center gap-4 focus:outline-none cursor-pointer group select-none"
                >
                  <span className="text-sm font-semibold text-[#f8fafc] group-hover:text-[#4ade80] transition-colors flex items-center gap-3">
                    <span className="text-[#39ff14] font-mono text-xs">{isOpen ? '>' : '#'}</span>
                    <span>{faq.question}</span>
                  </span>
                  <span
                    className={"w-7 h-7 rounded-[2px] bg-[#08101d] border border-[#1e2e4a] flex items-center justify-center text-[#39ff14] transition-transform duration-200 shrink-0 " + (
                      isOpen ? 'rotate-180 bg-[#081a10] border-[#1b3d22]' : ''
                    )}
                  >
                    <i className="fa-solid fa-chevron-down text-xs"></i>
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-[#1e2e4a] bg-[#070b12] p-5 md:p-6 text-xs md:text-sm text-[#94a3b8] leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <BentoCard hover={false} brackets={true} className="p-12 items-center justify-center text-center gap-4 border-[#1e2e4a] bg-[#0c1322]">
            <i className="fa-solid fa-magnifying-glass text-[#64748b] text-2xl animate-pulse"></i>
            <div className="text-xs font-mono text-[#94a3b8] uppercase">
              No questions matching "{search}"
            </div>
            <button
              onClick={() => {
                setSearch('');
                setActiveCategory('all');
              }}
              className="btn-cyber-primary px-4 py-2 text-xs"
            >
              [ RESET FILTERS ]
            </button>
          </BentoCard>
        )}
      </div>

      {/* 4. Still Have Questions Banner */}
      <BentoCard brackets={true} className="p-7 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-[#1e2e4a] bg-[#0c1322] shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-[2px] bg-[#081a10] border border-[#1b3d22] flex items-center justify-center text-[#39ff14] text-lg shrink-0">
            <i className="fa-solid fa-book-open"></i>
          </div>
          <div className="flex flex-col gap-1 text-left">
            <h3 className="text-sm md:text-base font-semibold uppercase tracking-wider text-[#f8fafc] font-mono">Want to Dive Deeper?</h3>
            <p className="text-xs text-[#94a3b8] font-sans">
              Read our complete User Guide for step-by-step setup walkthroughs and cryptographic specifications.
            </p>
          </div>
        </div>
        <Link
          to="/docs"
          className="btn-cyber-primary px-5 py-2.5 text-xs font-mono tracking-wider shrink-0 no-underline inline-flex items-center gap-2"
        >
          <span>[ USER MANUAL ]</span>
          <i className="fa-solid fa-arrow-right text-[10px]"></i>
        </Link>
      </BentoCard>
    </div>
  );
}
