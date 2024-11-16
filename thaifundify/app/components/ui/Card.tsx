import React, { ReactNode } from 'react';

// Card Component
interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// CardContent Component
interface CardContentProps {
  className?: string;
  children: ReactNode;
}

export const CardContent: React.FC<CardContentProps> = ({ className = '', children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>;
};
