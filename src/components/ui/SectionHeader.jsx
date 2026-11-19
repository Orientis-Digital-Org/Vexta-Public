import React from 'react';

export default function SectionHeader({
  tag,
  title,
  description,
  align = 'center', // 'center' | 'left'
  className = ''
}) {
  const alignmentClass = align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignmentClass} ${className}`}>
      {tag && (
        <span className="text-[#38bdf8] text-xs md:text-sm font-semibold uppercase tracking-widest font-mono flex items-center gap-2">
          <span className="status-pulse"></span>
          <span>// {tag}</span>
        </span>
      )}
      {title && (
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#f8fafc] font-sans leading-tight">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-sm md:text-base text-[#94a3b8] font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
