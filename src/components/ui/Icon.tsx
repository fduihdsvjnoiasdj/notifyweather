import React from 'react';

export type IconProps = {
  name: string;
  size?: number;
};

const ICONS: Record<string, string> = {
  sunny: '☀️',
  rain: '🌧️',
  cloudy: '☁️',
  snow: '❄️',
};

const Icon: React.FC<IconProps> = ({ name, size = 24 }) => (
  <span style={{ fontSize: size }} role="img" aria-label={name}>
    {ICONS[name] || '❓'}
  </span>
);

export default Icon;
