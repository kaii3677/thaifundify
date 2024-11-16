import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
  variant?: 'outline' | 'filled'; // Add variant prop
}

export const Button: React.FC<ButtonProps> = ({ className, children, variant = 'filled', ...props }) => {
  // Define base styles
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-all';

  // Define styles based on the variant prop
  const variantStyles = variant === 'outline'
    ? 'border-2 border-[#0B4D1E] text-[#0B4D1E] hover:bg-[#0B4D1E] hover:text-white' 
    : 'bg-[#0B4D1E] text-white hover:bg-[#0B4D1E]/90'; // Default for 'filled' variant

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
