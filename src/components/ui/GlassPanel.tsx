import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  interactive?: boolean;
  className?: string;
  onClick?: () => void;
}

export function GlassPanel({
  children,
  interactive = false,
  className = '',
  onClick,
}: GlassPanelProps) {
  const baseClass = interactive ? 'glass-panel-interactive' : 'glass-panel';
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 relative overflow-hidden ${baseClass} ${className}`}
    >
      {/* Specular top sheen line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
