const VelzLogo = ({ className = "h-8 w-8" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className}
      fill="currentColor"
    >
      <path d="M30 20 L50 60 L40 60 L20 20 Z" />
      <path d="M50 60 L70 20 L60 20 L40 60 Z" />
      <path d="M35 65 L45 65 L50 75 L55 65 L65 65 L50 90 Z" />
    </svg>
  );
};

export default VelzLogo;
