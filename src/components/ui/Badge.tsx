import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'subtle';
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-mono uppercase tracking-wider rounded-full transition-colors';
  
  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
  };

  const variantStyles = {
    default: 'bg-white/10 text-[#F4F1EB] border border-white/10',
    accent: 'bg-[#D6FF62]/10 text-[#D6FF62] border border-[#D6FF62]/30',
    outline: 'bg-transparent text-[#A4A1A0] border border-white/15',
    subtle: 'bg-[#1C1C20] text-[#A4A1A0]',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
