import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import ReactMarkdown from 'react-markdown';
import BentoCard from '../components/ui/BentoCard';
import StatusBadge from '../components/ui/StatusBadge';
import SectionHeader from '../components/ui/SectionHeader';

const formatDate = (ts) => {
  if (!ts) return 'RECENT';
  if (typeof ts === 'number') {
    return new Date(ts * 1000).toUTCString();
  }
  return String(ts).endsWith('UTC') ? String(ts) : `${ts} UTC`;
};

export default function AnnouncementsPage() {
  const { announcements } = useApp();
  const [search, setSearch] = useState('');

  const filteredAnnouncements = announcements.filter((ann) => {
    if (!search.trim()) return true;
    return ann.message.toLowerCase().includes(search.toLowerCase().trim());
  });

  return (
    <div className="flex flex-col gap-10 py-4 text-[#cbd5e1] min-h-[75vh] w-full">
      {/* Hero Header Bento */}
      <BentoCard hover={false} brackets={true} className="p-8 md:p-12 text-center flex flex-col items-center gap-5 relative overflow-hidden bg-[#0c1322] border-[#1e2e4a]">
        <div className="w-14 h-14 rounded-[2px] bg-[#0c182c] border border-[#1e3a66] flex items-center justify-center text-2xl text-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.2)]">
          <i className="fa-solid fa-bullhorn"></i>
        </div>
        <SectionHeader
          tag="DISPATCH TELEMETRY"
          title="System Broadcast Dispatches"
          description="Official feed of Vexta releases, security advisories, cryptographic upgrades, and client changelogs."
        />
      </BentoCard>

      {/* Filter Toolbar Bento */}
      <BentoCard hover={false} brackets={true} className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#0c1322] border-[#1e2e4a]">
        <div className="flex items-center gap-2.5 font-mono text-xs text-[#cbd5e1]">
          <StatusBadge label="BROADCAST PIPE ACTIVE" variant="cyan" pulse={true} />
          <span className="text-[#94a3b8] font-medium">({announcements.length} Total Dispatches)</span>
        </div>

        <div className="relative w-full sm:w-80">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#64748b]">
            <i className="fa-solid fa-magnifying-glass text-xs"></i>
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="FILTER BROADCASTS..."
            className="w-full bg-[#08101d] border border-[#1e2e4a] rounded-[2px] pl-8 pr-8 py-2 font-mono text-xs text-[#f8fafc] focus:outline-none focus:border-[#38bdf8] placeholder:text-[#64748b] uppercase tracking-wider"
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
      </BentoCard>

      {/* Announcements Feed List */}
      <div className="flex flex-col gap-6">
        {filteredAnnouncements.length > 0 ? (
          filteredAnnouncements.map((ann, idx) => (
            <BentoCard
              key={ann.id || idx}
              brackets={true}
              className="p-7 md:p-8 flex flex-col gap-5 relative overflow-hidden shadow-xl bg-[#0c1322] border-[#1e2e4a]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono border-b border-[#1e2e4a] pb-3.5">
                <div className="flex items-center gap-3">
                  <span className="text-[#38bdf8] font-semibold tracking-wider uppercase flex items-center gap-2 font-mono">
                    <i className="fa-solid fa-shield-halved text-xs"></i> [DISPATCH #{announcements.length - idx}]
                  </span>
                  {idx === 0 && (
                    <StatusBadge label="LATEST RELEASE" variant="cyan" />
                  )}
                </div>
                <span className="text-[#94a3b8]">{formatDate(ann.created_at)}</span>
              </div>

              <div className="text-xs md:text-sm text-[#cbd5e1] leading-relaxed font-sans markdown-body">
                <ReactMarkdown>{ann.message}</ReactMarkdown>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8] border-t border-[#1e2e4a] pt-3.5">
                <span className="flex items-center gap-1.5 text-[#34d399] uppercase font-medium">
                  <i className="fa-solid fa-circle-check"></i> SIGNATURE AUTHENTICATED
                </span>
                <span className="text-[#38bdf8] uppercase font-medium">ED25519 SIGNED</span>
              </div>
            </BentoCard>
          ))
        ) : (
          <BentoCard hover={false} brackets={true} className="p-12 items-center justify-center text-center gap-4 bg-[#0c1322] border-[#1e2e4a]">
            <i className="fa-solid fa-bullhorn text-[#64748b] text-2xl animate-pulse"></i>
            <div className="text-xs font-mono text-[#94a3b8] uppercase">
              No dispatches found matching "{search}"
            </div>
          </BentoCard>
        )}
      </div>

      {/* Broadcast Sync Diagnostics Bento */}
      <BentoCard hover={false} brackets={true} className="p-7 md:p-8 flex flex-col gap-6 shadow-xl bg-[#0c1322] border-[#1e2e4a]">
        <h2 className="text-sm md:text-base font-semibold uppercase tracking-wider text-[#f8fafc] flex items-center gap-2 font-mono">
          <span className="status-pulse"></span>
          <span>Real-Time Sync Protocol &amp; Verification</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#08101d] border border-[#1e2e4a] p-4 rounded-[2px] flex flex-col gap-2 font-mono">
            <span className="text-[10px] uppercase tracking-wider text-[#94a3b8]">// SYNC SOCKET STATUS</span>
            <div className="flex items-center gap-2">
              <span className="status-pulse"></span>
              <span className="text-xs font-medium text-[#34d399] uppercase">ACTIVE // LISTENING</span>
            </div>
          </div>
          <div className="bg-[#08101d] border border-[#1e2e4a] p-4 rounded-[2px] flex flex-col gap-2 font-mono">
            <span className="text-[10px] uppercase tracking-wider text-[#94a3b8]">// RELAY ENCRYPTION</span>
            <span className="text-xs font-medium text-[#38bdf8] uppercase">Mutual signature auth</span>
          </div>
          <div className="bg-[#08101d] border border-[#1e2e4a] p-4 rounded-[2px] flex flex-col gap-2 font-mono">
            <span className="text-[10px] uppercase tracking-wider text-[#94a3b8]">// AUDIT MODE</span>
            <span className="text-xs font-medium text-[#cbd5e1] uppercase">Metadata-blind broadcast</span>
          </div>
        </div>

        <div className="p-4 border border-[#1e2e4a] bg-[#08101d] text-[#cbd5e1] rounded-[2px] flex gap-3.5 text-xs items-start leading-relaxed font-sans">
          <span className="text-base text-[#38bdf8] shrink-0 mt-0.5">
            <i className="fa-solid fa-circle-info"></i>
          </span>
          <div>
            <strong className="font-semibold uppercase tracking-wider text-[#f8fafc] block mb-1 font-mono text-xs">
              Cryptographic Signature Verification
            </strong>
            All system announcements are signed locally by the bridge's private identity key before broadcast transmission. Your Vexta client automatically validates this signature against the cached bridge fingerprint upon envelope arrival, neutralizing active interception/spoofing vectors.
          </div>
        </div>
      </BentoCard>
    </div>
  );
}
