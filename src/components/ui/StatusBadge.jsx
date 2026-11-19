import React from 'react';

export default function StatusBadge({
  label,
  icon,
  variant = 'cyan', // 'cyan' | 'green' | 'amber' | 'red' | 'neutral'
  pulse = false,
  className = ''
}) {
  const variantStyles = {
    cyan: 'text-[#38bdf8] bg-[#0c182c] border-[#1e3a66] shadow-[0_0_10px_rgba(56,189,248,0.15)]',
    green: 'text-[#34d399] bg-[#062016] border-[#10b981]/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    amber: 'text-[#fbbf24] bg-[#241a06] border-[#d97706]/40 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    red: 'text-[#f87171] bg-[#2b0d0d] border-[#ef4444]/40 shadow-[0_0_10px_rgba(239,68,68,0.15)]',
    neutral: 'text-[#94a3b8] bg-[#0c1322] border-[#1e2e4a]'
  };

  const dotColors = {
    cyan: 'bg-[#38bdf8]',
    green: 'bg-[#10b981]',
    amber: 'bg-[#f59e0b]',
    red: 'bg-[#ef4444]',
    neutral: 'bg-[#64748b]'
  };

  // Map legacy variants if passed
  let mappedVariant = variant;
  if (variant === 'neon' || variant === 'mint') mappedVariant = 'cyan';
  if (variant === 'sand') mappedVariant = 'neutral';

  const currentVariant = variantStyles[mappedVariant] || variantStyles.cyan;
  const dotColor = dotColors[mappedVariant] || dotColors.cyan;

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-[2px] font-mono text-xs font-medium uppercase tracking-wider border select-none transition-all ${currentVariant} ${className}`}
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
