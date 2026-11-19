import React, { useState } from 'react';

export default function CopyPill({
  text,
  label,
  displayValue,
  className = '',
  truncate = true
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      type="button"
      title="Click to copy to clipboard"
      className={`group flex items-center justify-between gap-3 px-4 py-2.5 bg-[#08101d] border border-[#1e2e4a] hover:border-[#38bdf8] hover:bg-[#0c182c] rounded-[2px] font-mono text-xs md:text-sm text-[#cbd5e1] transition-all cursor-pointer select-none text-left ${className}`}
    >
      <div className="flex flex-col min-w-0">
        {label && (
          <span className="text-[10px] uppercase tracking-wider text-[#94a3b8] font-bold block mb-0.5">
            // {label}
          </span>
        )}
        <span className={`text-[#f8fafc] group-hover:text-[#38bdf8] ${truncate ? 'truncate' : 'break-all'}`}>
          {displayValue || text}
        </span>
      </div>
      <div className={`flex items-center gap-1.5 shrink-0 px-2.5 py-1.5 rounded-[2px] border text-xs font-mono font-medium transition-colors ${
        copied 
          ? 'bg-[#062016] border-[#10b981]/50 text-[#34d399]' 
          : 'bg-[#0c182c] border-[#1e3a66] group-hover:border-[#38bdf8]/60 text-[#38bdf8]'
      }`}>
        <i className={`fa-solid ${copied ? 'fa-check text-[#34d399]' : 'fa-copy text-[#38bdf8]'}`}></i>
        <span>{copied ? 'COPIED' : 'COPY'}</span>
      </div>
    </button>
  );
}
