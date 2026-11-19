import React from 'react';

export default function StatusBadge({
  label,
  icon,
  variant = 'green', // 'green' | 'neon' | 'mint' | 'cyan' | 'amber' | 'red' | 'neutral'
  pulse = false,
  className = ''
}) {
  const variantStyles = {
    green: 'text-[#4ade80] bg-[#081a10] border-[#1b3d22] shadow-[0_0_10px_rgba(34,197,94,0.18)]',
    neon: 'text-[#39ff14] bg-[#39ff14]/15 border-[#39ff14]/50 shadow-[0_0_14px_rgba(57,255,20,0.3)]',
    mint: 'text-[#4ade80] bg-[#4ade80]/15 border-[#4ade80]/35',
    cyan: 'text-[#4ade80] bg-[#081a10] border-[#1b3d22] shadow-[0_0_10px_rgba(34,197,94,0.18)]',
    amber: 'text-[#fbbf24] bg-[#241a06] border-[#d97706]/40 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    red: 'text-[#f87171] bg-[#2b0d0d] border-[#ef4444]/40 shadow-[0_0_10px_rgba(239,68,68,0.15)]',
    neutral: 'text-[#94a3b8] bg-[#0c1322] border-[#1e2e4a]'
  };

  const dotColors = {
    green: 'bg-[#22c55e]',
    neon: 'bg-[#39ff14]',
    mint: 'bg-[#4ade80]',
    cyan: 'bg-[#22c55e]',
    amber: 'bg-[#f59e0b]',
    red: 'bg-[#ef4444]',
    neutral: 'bg-[#64748b]'
  };

  const currentVariant = variantStyles[variant] || variantStyles.green;
  const dotColor = dotColors[variant] || dotColors.green;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-[2px] font-mono text-xs font-semibold uppercase tracking-wider border select-none transition-all ${currentVariant} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2 mr-0.5">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${dotColor} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
        </span>
      )}
      {icon && !pulse && <i className={`${icon} text-xs`}></i>}
      <span>{label}</span>
    </span>
  );
}
