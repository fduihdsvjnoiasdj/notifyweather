import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div
    className={`bg-[#1E1E2A] rounded-2xl shadow-md ${className}`}
    {...props}
  />
);

export default Card;
