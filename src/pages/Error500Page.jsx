import React from 'react';
import { Link } from 'react-router-dom';
import BentoCard from '../components/ui/BentoCard';

export default function Error500Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[65vh] py-12 relative select-none">
      <BentoCard hover={false} brackets={true} className="container max-w-lg p-10 rounded-[3px] text-center flex flex-col items-center gap-4 relative z-10 border-[#ef4444]/40 bg-[#0c1322] shadow-2xl">
        <div className="font-mono text-7xl font-bold text-[#f87171] tracking-tighter drop-shadow-[0_0_25px_rgba(239,68,68,0.4)] animate-pulse">
          500
        </div>
        <h1 className="text-lg font-bold uppercase tracking-wider text-[#f8fafc] font-mono">// SERVER_CRITICAL_EXCEPTION</h1>
        <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">
          An unexpected internal processing exception occurred in the relay buffer pipeline.
        </p>
        <p className="font-mono text-xs text-[#f87171] uppercase tracking-wider">
          &gt; watchdog triggered fail-safe panic
        </p>

        <Link
          to="/"
          className="btn-cyber-primary mt-4 px-6 py-2.5 text-xs font-mono uppercase tracking-widest no-underline"
        >
          [ RETURN TO GATEWAY ]
        </Link>

        <div className="w-full pt-5 mt-4 border-t border-[#1e2e4a] flex flex-col items-center">
          <div className="font-mono text-xs font-bold text-[#f8fafc] tracking-widest uppercase">VEXTA // SOVEREIGN</div>
          <div className="font-mono text-[9px] text-[#94a3b8] tracking-widest uppercase mt-0.5">
            ORIENTIS DIGITAL NETWORK
          </div>
        </div>
      </BentoCard>
    </div>
  );
}
