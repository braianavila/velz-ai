import React from 'react';

interface VelzLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const VelzLogo: React.FC<VelzLogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'light' 
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    light: 'text-white',
    dark: 'text-velz-dark'
  };

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[variant]} ${className}`}>
      <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
        {/* V Shape - Modern geometric design */}
        <path 
          d="M 15 25 L 35 75 L 50 50 L 65 75 L 85 25 L 70 25 L 58 55 L 50 40 L 42 55 L 30 25 Z" 
          fill="currentColor"
        />
        {/* Additional detail lines for tech aesthetic */}
        <path 
          d="M 20 20 L 25 20 M 75 20 L 80 20 M 45 30 L 55 30" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none"
        />
      </svg>
    </div>
  );
};