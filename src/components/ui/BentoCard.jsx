import React from 'react';

export default function BentoCard({
  children,
  className = '',
  span = 'col-span-12',
  hover = true,
  glow = false,
  brackets = false,
  onClick,
  id
}) {
  const hoverClass = hover 
    ? 'hover:border-[#22c55e] hover:bg-[#0f1d36]/90 hover:shadow-[0_0_20px_rgba(34,197,94,0.1)] transition-all duration-300 cursor-default' 
    : '';
  const glowClass = glow 
    ? 'shadow-[0_0_30px_rgba(34,197,94,0.18)] border-[#22c55e]/50' 
    : 'border-[#1e2e4a]';
  const bracketClass = brackets ? 'hud-corner-bracket' : '';
  const clickableClass = onClick ? 'cursor-pointer select-none active:scale-[0.99]' : '';

  return (
    <div
      id={id}
      onClick={onClick}
      className={`relative bg-[#0c1322] border rounded-[4px] p-6 md:p-8 flex flex-col overflow-hidden text-[#f8fafc] ${span} ${hoverClass} ${glowClass} ${bracketClass} ${clickableClass} ${className}`}
    >
      {children}
    </div>
  );
}
